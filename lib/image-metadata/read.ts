import { indexOfAscii, startsWith, u32be } from './bytes';
import { c2paLooksAiGenerated, describeDigitalSourceType, extractDigitalSourceType, guessC2paSigner, matchGenerator } from './detect-ai';
import { parseJpeg } from './strip-jpeg';
import { parsePng } from './strip-png';
import { parseWebp } from './strip-webp';
import type { Category, ImgFormat, MetaField, MetadataReport } from './types';

const C2PA_UUID = [0xd8, 0xfe, 0xc3, 0xd6, 0x1b, 0x0e, 0x48, 0x3c, 0x92, 0x97, 0x58, 0x28, 0x87, 0x7e, 0xc4, 0x81];
const dec = new TextDecoder('utf-8', { fatal: false });
const latin1 = new TextDecoder('latin1');

interface Raw {
  tiff?: Uint8Array;            // raw TIFF/EXIF payload for PNG/WebP
  wholeFile: boolean;           // let exifr read the container itself (JPEG/HEIC/AVIF)
  xmp?: string;
  c2pa?: Uint8Array;
  texts: { key: string; value: string }[];
  comments: string[];
  hasIptc: boolean;
  hasThumbnailHint: boolean;
  icc: boolean;
  extras: string[];
  trailingBytes: number;
  pngTime?: string;
}

// ---- field mapping -------------------------------------------------------------------------

const IGNORE = new Set([
  'Orientation', 'XResolution', 'YResolution', 'ResolutionUnit', 'ImageWidth', 'ImageHeight', 'ExifImageWidth',
  'ExifImageHeight', 'PixelXDimension', 'PixelYDimension', 'ColorSpace', 'ExifVersion', 'FlashpixVersion',
  'ComponentsConfiguration', 'YCbCrPositioning', 'ExifOffset', 'GPSInfo', 'InteropIndex', 'InteropVersion',
  'GPSVersionID', 'ThumbnailOffset', 'ThumbnailLength', 'Compression', 'JPEGInterchangeFormat',
  'JPEGInterchangeFormatLength', 'BitsPerSample', 'SamplesPerPixel', 'PhotometricInterpretation',
  'ApplicationRecordVersion', 'EnvelopeRecordVersion', 'CodedCharacterSet', 'GPSLatitudeRef', 'GPSLongitudeRef',
  'GPSLatitude', 'GPSLongitude', 'ExifIFD', 'GpsIFD', 'InteropIFD',
]);
const DEVICE = /^(Make|Model|LensMake|LensModel|LensInfo|LensSpecification|HostComputer|.*Serial.*|ExposureTime|FNumber|ISO.*|FocalLength.*|Flash.*|WhiteBalance|MeteringMode|ExposureProgram|ExposureMode|ExposureBiasValue|ShutterSpeedValue|ApertureValue|BrightnessValue|SceneType|SceneCaptureType|SensingMethod|DigitalZoomRatio|MaxApertureValue|SubjectDistance.*|LightSource|FileSource|CustomRendered|Contrast|Saturation|Sharpness|GainControl)$/;
const DATES = /^(DateTime.*|CreateDate|ModifyDate|Offset.*|SubSec.*|DateCreated|TimeCreated|DigitalCreationDate|GPSDateStamp|GPSTimeStamp)$/;
const SOFTWARE = /^(Software|ProcessingSoftware|CreatorTool|OriginatingProgram|ProgramVersion)$/;
const RIGHTS = /^(Artist|Copyright|Byline|By-line|Credit|Source|CopyrightNotice|Rights|OwnerName|CameraOwnerName)$/;

function groupFor(key: string, source: string): Category | null {
  if (source === 'gps') return 'location';
  if (IGNORE.has(key)) return null;
  if (DEVICE.test(key)) return 'device';
  if (DATES.test(key)) return 'dates';
  if (SOFTWARE.test(key)) return 'software';
  if (RIGHTS.test(key)) return 'rights';
  return 'other';
}

function str(v: unknown): string | null {
  if (v == null) return null;
  if (typeof v === 'string') return v.replace(/\0+$/g, '').trim() || null;
  if (typeof v === 'number' || typeof v === 'boolean' || typeof v === 'bigint') return String(v);
  if (v instanceof Date) return isNaN(+v) ? null : v.toISOString();
  if (v instanceof Uint8Array || v instanceof ArrayBuffer) {
    const b = v instanceof Uint8Array ? v : new Uint8Array(v);
    if (startsWith(b, 'ASCII\0\0\0')) return dec.decode(b.subarray(8)).replace(/\0+/g, '').trim() || null;
    return `[binary, ${b.length} bytes]`;
  }
  if (Array.isArray(v)) return v.map((x) => str(x) ?? '').join(', ');
  try { return JSON.stringify(v); } catch { return null; }
}

function dms(v: unknown, ref: unknown): number | null {
  if (typeof v === 'number') return v;
  if (!Array.isArray(v) || v.length < 3) return null;
  const n = v[0] + v[1] / 60 + v[2] / 3600;
  return ref === 'S' || ref === 'W' ? -n : n;
}

type ExifOut = Record<string, Record<string, unknown> | undefined>;

function fieldsFromExif(out: ExifOut | undefined): MetaField[] {
  const fields: MetaField[] = [];
  let hasThumb = false;
  for (const [source, group] of Object.entries(out ?? {})) {
    if (!group || typeof group !== 'object') continue;
    if (source === 'ifd1') { hasThumb = true; continue; }
    for (const [key, raw] of Object.entries(group as Record<string, unknown>)) {
      if (source === 'gps' && key !== 'GPSAltitude' && key !== 'GPSImgDirection') continue; // coordinates are shown as one combined field
      const cat = groupFor(key, source);
      if (!cat) continue;
      const value = str(raw);
      if (value === null) continue;
      fields.push({ group: cat, key, label: key, value });
    }
  }
  const gps = out?.gps;
  if (gps) {
    const lat = dms(gps.GPSLatitude, gps.GPSLatitudeRef);
    const lon = dms(gps.GPSLongitude, gps.GPSLongitudeRef);
    if (lat != null && lon != null) fields.unshift({ group: 'location', key: 'Coordinates', label: 'GPS coordinates', value: `${lat.toFixed(6)}, ${lon.toFixed(6)}` });
  }
  if (hasThumb) fields.push({ group: 'other', key: 'Thumbnail', label: 'Embedded thumbnail', value: 'present' });
  return fields;
}

// ---- raw extraction per container -----------------------------------------------------------

function xmpFromBytes(b: Uint8Array): string | undefined {
  const s = indexOfAscii(b, '<x:xmpmeta');
  if (s === -1) return;
  const e = indexOfAscii(b, '</x:xmpmeta>', s);
  return dec.decode(b.subarray(s, e === -1 ? Math.min(b.length, s + 1_000_000) : e + 12));
}

async function inflate(data: Uint8Array): Promise<string | null> {
  if (typeof DecompressionStream === 'undefined') return null;
  try {
    const s = new Blob([data as Uint8Array<ArrayBuffer>]).stream().pipeThrough(new DecompressionStream('deflate'));
    return dec.decode(await new Response(s).arrayBuffer());
  } catch { return null; }
}

async function rawJpeg(b: Uint8Array): Promise<Raw> {
  const { header, bodyEnd } = parseJpeg(b);
  const r: Raw = { wholeFile: true, texts: [], comments: [], hasIptc: false, hasThumbnailHint: false, icc: false, extras: [], trailingBytes: b.length - bodyEnd };
  for (const s of header) {
    const p = b.subarray(s.start + 4, s.end);
    if (s.marker === 0xe1 && startsWith(p, 'http://ns.adobe.com/xap/1.0/\0')) r.xmp = dec.decode(p.subarray(29));
    else if (s.marker === 0xe1 && startsWith(p, 'http://ns.adobe.com/xmp/extension/\0')) r.extras.push('Extended XMP');
    else if (s.marker === 0xeb && startsWith(p, 'JP')) r.c2pa = p;
    else if (s.marker === 0xed) r.hasIptc = true;
    else if (s.marker === 0xe2 && startsWith(p, 'ICC_PROFILE\0')) r.icc = true;
    else if (s.marker === 0xe2 && startsWith(p, 'MPF\0')) r.extras.push('Multi-picture data');
    else if (s.marker === 0xfe) r.comments.push(dec.decode(p));
  }
  return r;
}

async function rawPng(b: Uint8Array): Promise<Raw> {
  const { chunks, end } = parsePng(b);
  const r: Raw = { wholeFile: false, texts: [], comments: [], hasIptc: false, hasThumbnailHint: false, icc: false, extras: [], trailingBytes: b.length - end };
  for (const c of chunks) {
    const d = b.subarray(c.dataStart, c.dataEnd);
    if (c.type === 'eXIf') r.tiff = d;
    else if (c.type === 'caBX') r.c2pa = d;
    else if (c.type === 'iCCP') r.icc = true;
    else if (c.type === 'tIME' && d.length === 7) r.pngTime = `${(d[0] << 8) | d[1]}-${String(d[2]).padStart(2, '0')}-${String(d[3]).padStart(2, '0')} ${String(d[4]).padStart(2, '0')}:${String(d[5]).padStart(2, '0')}:${String(d[6]).padStart(2, '0')}`;
    else if (c.type === 'tEXt' || c.type === 'zTXt' || c.type === 'iTXt') {
      const nul = d.indexOf(0);
      if (nul < 1) continue;
      const key = latin1.decode(d.subarray(0, nul));
      let value: string | null = null;
      if (c.type === 'tEXt') value = latin1.decode(d.subarray(nul + 1));
      else if (c.type === 'zTXt') value = await inflate(d.subarray(nul + 2));
      else {
        const compressed = d[nul + 1] === 1;
        let o = nul + 3;
        o = d.indexOf(0, o) + 1; // language tag
        o = d.indexOf(0, o) + 1; // translated keyword
        value = compressed ? await inflate(d.subarray(o)) : dec.decode(d.subarray(o));
      }
      if (key === 'XML:com.adobe.xmp' && value) r.xmp = value;
      else r.texts.push({ key, value: value ?? '[compressed text, not shown]' });
    }
  }
  return r;
}

async function rawWebp(b: Uint8Array): Promise<Raw> {
  const chunks = parseWebp(b);
  const last = chunks[chunks.length - 1];
  const r: Raw = { wholeFile: false, texts: [], comments: [], hasIptc: false, hasThumbnailHint: false, icc: false, extras: [], trailingBytes: Math.max(0, b.length - last.end) };
  for (const c of chunks) {
    const d = b.subarray(c.dataStart, c.dataEnd);
    if (c.fourcc === 'EXIF') r.tiff = startsWith(d, 'Exif\0\0') ? d.subarray(6) : d;
    else if (c.fourcc === 'XMP ') r.xmp = dec.decode(d);
    else if (c.fourcc === 'C2PA') r.c2pa = d;
    else if (c.fourcc === 'ICCP') r.icc = true;
  }
  return r;
}

async function rawIsobmff(b: Uint8Array): Promise<Raw> {
  const r: Raw = { wholeFile: true, texts: [], comments: [], hasIptc: false, hasThumbnailHint: false, icc: false, extras: [], trailingBytes: 0 };
  r.xmp = xmpFromBytes(b);
  // C2PA lives in a top-level `uuid` box carrying the C2PA UUID.
  for (let o = 0; o + 24 <= b.length; ) {
    let size = u32be(b, o);
    const type = String.fromCharCode(b[o + 4], b[o + 5], b[o + 6], b[o + 7]);
    if (size === 1) size = u32be(b, o + 12); // 64-bit size; low 32 bits suffice below 4 GB
    if (size < 8) break;
    if (type === 'uuid' && C2PA_UUID.every((v, i) => b[o + 8 + i] === v)) { r.c2pa = b.subarray(o + 24, Math.min(o + size, b.length)); break; }
    o += size;
  }
  return r;
}

// ---- public API ----------------------------------------------------------------------------

export async function readReport(buf: Uint8Array, format: ImgFormat): Promise<MetadataReport> {
  const raw =
    format === 'jpeg' ? await rawJpeg(buf)
    : format === 'png' ? await rawPng(buf)
    : format === 'webp' ? await rawWebp(buf)
    : await rawIsobmff(buf);

  let exifOut: ExifOut | undefined;
  try {
    const mod = (await import('exifr')) as unknown as { default?: typeof import('exifr').default } & typeof import('exifr').default;
    const exifr = mod.default ?? mod;
    const input = raw.wholeFile ? buf : raw.tiff;
    if (input && input.length) {
      exifOut = await exifr.parse(input, {
        tiff: true, gps: true, interop: false, ifd1: true,
        xmp: false, icc: false, iptc: format === 'jpeg', jfif: false,
        mergeOutput: false, translateKeys: true, translateValues: false, reviveValues: true, sanitize: false,
      });
    }
  } catch { /* unreadable EXIF is treated as absent; stripping does not depend on it */ }

  const fields = fieldsFromExif(exifOut);
  let orientation: number | undefined;
  const o = exifOut?.ifd0?.Orientation;
  if (typeof o === 'number') orientation = o;

  if (raw.pngTime) fields.push({ group: 'dates', key: 'tIME', label: 'PNG modification time', value: raw.pngTime });

  // XMP
  let digitalSourceType: string | undefined;
  const xmpKeep: NonNullable<MetadataReport['xmpKeep']> = {};
  if (raw.xmp) {
    digitalSourceType = extractDigitalSourceType(raw.xmp);
    const tool = /CreatorTool\s*=\s*"([^"]+)"|<xmp:CreatorTool>([^<]+)</.exec(raw.xmp);
    if (tool) fields.push({ group: 'software', key: 'CreatorTool', label: 'CreatorTool (XMP)', value: (tool[1] ?? tool[2]).trim() });
    const creator = /<dc:creator>[\s\S]*?<rdf:li[^>]*>([^<]+)</.exec(raw.xmp);
    if (creator) xmpKeep.creator = creator[1].trim();
    if (creator) fields.push({ group: 'rights', key: 'dc:creator', label: 'Creator (XMP)', value: creator[1].trim() });
    const rights = /<dc:rights>[\s\S]*?<rdf:li[^>]*>([^<]+)</.exec(raw.xmp);
    if (rights) xmpKeep.rights = rights[1].trim();
    const web = /<xmpRights:WebStatement>([^<]+)</.exec(raw.xmp);
    if (web) xmpKeep.webStatement = web[1].trim();
    if (rights) fields.push({ group: 'rights', key: 'dc:rights', label: 'Rights (XMP)', value: rights[1].trim() });
    const desc = /<dc:description>[\s\S]*?<rdf:li[^>]*>([^<]+)</.exec(raw.xmp);
    if (desc) fields.push({ group: 'other', key: 'dc:description', label: 'Description (XMP)', value: desc[1].trim() });
    if (/<xmpMM:History/.test(raw.xmp)) fields.push({ group: 'software', key: 'History', label: 'Editing history (XMP)', value: 'present' });
    fields.push({ group: 'other', key: 'XMP', label: 'XMP packet', value: `${raw.xmp.length} bytes` });
  }
  if (digitalSourceType) fields.push({ group: 'ai', key: 'DigitalSourceType', label: 'Digital Source Type', value: describeDigitalSourceType(digitalSourceType) + ` (${digitalSourceType})` });

  // PNG text / generator parameters
  const AI_ALWAYS = /^(parameters|prompt|workflow|invokeai_metadata|sd-metadata|fooocus_scheme)$/i;
  const AI_IF_NAMED = /^(Comment|Description|Software)$/i;
  for (const t of raw.texts) {
    const isAi = AI_ALWAYS.test(t.key) || (AI_IF_NAMED.test(t.key) && (!!matchGenerator(t.value) || /sui_image_params|fooocus/i.test(t.value)));
    fields.push({ group: isAi ? 'ai' : 'other', key: t.key, label: isAi ? `${t.key} (AI generation data)` : `Text: ${t.key}`, value: t.value });
  }
  raw.comments.forEach((c, i) => fields.push({ group: 'other', key: `Comment${i || ''}`, label: 'JPEG comment', value: c }));
  if (raw.hasIptc) fields.push({ group: 'rights', key: 'IPTC', label: 'IPTC block', value: 'present' });
  raw.extras.forEach((e) => fields.push({ group: 'other', key: e, label: e, value: 'present' }));
  if (raw.trailingBytes > 0) fields.push({ group: 'other', key: 'TrailingData', label: 'Data after the image', value: `${raw.trailingBytes} bytes` });

  // C2PA
  let c2pa: MetadataReport['c2pa'];
  let aiGenerator: string | undefined;
  if (raw.c2pa) {
    const signerGuess = guessC2paSigner(raw.c2pa);
    c2pa = { present: true, signerGuess };
    fields.push({ group: 'c2pa', key: 'C2PA', label: 'Content Credentials (C2PA)', value: signerGuess ? `Present · signed by (best guess): ${signerGuess}` : 'Present' });
    if (c2paLooksAiGenerated(raw.c2pa)) aiGenerator = signerGuess === 'OpenAI' ? 'ChatGPT / DALL·E' : signerGuess === 'Google' ? 'Google Gemini / Imagen' : signerGuess === 'Adobe' ? 'Adobe Firefly' : signerGuess === 'Microsoft' ? 'Microsoft Copilot' : signerGuess === 'Meta' ? 'Meta AI' : 'AI generator (via Content Credentials)';
  }

  // Generator from software/text fields
  if (!aiGenerator) {
    for (const f of fields) {
      if (['Software', 'CreatorTool', 'UserComment', 'ImageDescription', 'dc:description', 'Credit', 'parameters', 'prompt', 'workflow', 'invokeai_metadata', 'sd-metadata'].includes(f.key) || f.group === 'ai') {
        const g = f.key === 'parameters' ? 'Stable Diffusion' : f.key === 'workflow' || f.key === 'prompt' ? 'ComfyUI' : matchGenerator(f.value);
        if (g) { aiGenerator = g; break; }
      }
    }
  }
  if (aiGenerator) fields.unshift({ group: 'ai', key: 'AIGenerator', label: 'AI generator', value: aiGenerator });

  const order: Category[] = ['location', 'device', 'dates', 'software', 'ai', 'c2pa', 'rights', 'other'];
  return {
    format,
    fields,
    categories: order.filter((c) => fields.some((f) => f.group === c)),
    aiGenerator,
    c2pa,
    digitalSourceType,
    xmpKeep,
    hasThumbnail: !!exifOut?.ifd1,
    trailingBytes: raw.trailingBytes,
    iccProfile: raw.icc,
    orientation,
  };
}
