import { buildMinimalXmp, hasKeptXmp, type KeptXmp } from './minimal-xmp';
import { pixelHash } from './pixel-hash';
import { reencode } from './reencode';
import { readReport } from './read';
import { sniff } from './sniff';
import { stripJpeg } from './strip-jpeg';
import { stripPng } from './strip-png';
import { stripWebp } from './strip-webp';
import { StripError, type CleanResult, type ImgFormat, type MetaField, type MetadataReport, type Preset } from './types';

export interface CleanOptions { preset: Preset; flatten?: boolean }

/** Fields that remain in `after` although `preset` promised to remove them. */
export function leftoverFields(after: MetadataReport, preset: Preset): MetaField[] {
  return after.fields.filter((f) => {
    if (preset === 'ai-only') return f.group === 'ai' || f.group === 'c2pa';
    if (preset === 'privacy') return !(f.group === 'rights' || f.key === 'DigitalSourceType' || f.key === 'XMP');
    return true;
  });
}

function keptXmp(before: MetadataReport): KeptXmp {
  const byKey = (k: string) => before.fields.find((f) => f.key === k)?.value;
  return {
    digitalSourceType: before.digitalSourceType,
    creator: before.xmpKeep?.creator ?? byKey('Artist'),
    rights: before.xmpKeep?.rights ?? byKey('Copyright'),
    webStatement: before.xmpKeep?.webStatement,
  };
}

const MIME: Partial<Record<ImgFormat, string>> = { jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp' };
const EXT: Partial<Record<ImgFormat, string>> = { jpeg: 'jpg', png: 'png', webp: 'webp' };

export async function cleanBuffer(src: Uint8Array<ArrayBuffer>, opts: CleanOptions): Promise<CleanResult> {
  const format = sniff(src);
  if (format === 'unsupported') throw new StripError('unsupported_format');
  const notes: string[] = [];

  let out: Uint8Array<ArrayBuffer>;
  let mime: string, ext: string, lossless: boolean;
  let verified = false;

  if (format === 'heic' || format === 'avif' || opts.flatten) {
    const r = await reencode(src, format);
    out = r.bytes; mime = r.mime; ext = r.ext; lossless = false;
    notes.push(`Re-saved as ${ext === 'png' ? 'PNG (has transparency)' : 'JPEG (quality 92)'}.`);
  } else {
    const before = await readReport(src, format);
    const privacy = opts.preset === 'privacy';
    const kept = privacy ? keptXmp(before) : {};
    const xmp = privacy && hasKeptXmp(kept) ? buildMinimalXmp(kept) : undefined;
    const aiOnly = opts.preset === 'ai-only';

    if (format === 'jpeg') out = stripJpeg(src, { mode: aiOnly ? 'exif-icc' : 'minimal', orientation: before.orientation, xmp });
    else if (format === 'png') out = stripPng(src, { mode: aiOnly ? 'ai-only' : 'minimal', xmp });
    else {
      const r = stripWebp(src, { mode: aiOnly ? 'ai-only' : 'minimal', xmp });
      out = r.bytes;
      if (xmp && !r.xmpKept) notes.push("AI disclosure couldn't be kept for this WebP.");
    }
    if (privacy && before.c2pa?.present) notes.push('Content Credentials were removed. Signed credentials cannot survive any edit.');

    // Fail safe: never hand back a file whose image data differs from the original.
    verified = (await pixelHash(src, format)) === (await pixelHash(out, format));
    if (!verified) throw new StripError('unknown');
    mime = MIME[format]!; ext = EXT[format]!; lossless = true;
  }

  const after = await readReport(out, sniff(out));
  return { out, mime, ext, lossless, verified, after, leftover: leftoverFields(after, opts.preset), notes };
}
