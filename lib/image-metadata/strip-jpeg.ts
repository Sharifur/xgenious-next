import { concat, startsWith } from './bytes';
import { buildOrientationApp1 } from './minimal-exif';
import { StripError } from './types';

export interface JpegSegment { marker: number; start: number; end: number }
export interface JpegLayout {
  /** Marker segments before the first SOS (excluding SOI). */
  header: JpegSegment[];
  /** Offset of the first SOS marker. */
  bodyStart: number;
  /** Offset just past the EOI marker. Anything after is trailing data. */
  bodyEnd: number;
}

/** Walk a JPEG: header segments, then scan data (all scans, progressive included) through EOI. */
export function parseJpeg(src: Uint8Array): JpegLayout {
  if (src.length < 4 || src[0] !== 0xff || src[1] !== 0xd8) throw new StripError('corrupt_file');
  const header: JpegSegment[] = [];
  let i = 2;
  for (;;) {
    if (i + 4 > src.length) throw new StripError('corrupt_file');
    if (src[i] !== 0xff) throw new StripError('corrupt_file');
    let marker = src[i + 1];
    while (marker === 0xff) { i++; marker = src[i + 1]; }
    if (marker === 0xda) break;
    if (marker === 0xd9) throw new StripError('corrupt_file'); // EOI before any scan
    const len = (src[i + 2] << 8) | src[i + 3];
    if (len < 2 || i + 2 + len > src.length) throw new StripError('corrupt_file');
    header.push({ marker, start: i, end: i + 2 + len });
    i += 2 + len;
  }
  const bodyStart = i;
  // Body: SOS header + entropy data, then further segments/scans, until EOI.
  for (;;) {
    if (src[i] !== 0xff) throw new StripError('corrupt_file');
    const marker = src[i + 1];
    if (marker === 0xd9) return { header, bodyStart, bodyEnd: i + 2 };
    const len = (src[i + 2] << 8) | src[i + 3];
    if (len < 2 || i + 2 + len > src.length) throw new StripError('corrupt_file');
    i += 2 + len;
    if (marker === 0xda) {
      // entropy-coded data: skip to next marker that is not stuffing (FF00) or RSTn
      for (;;) {
        i = src.indexOf(0xff, i);
        if (i === -1 || i + 1 >= src.length) throw new StripError('corrupt_file');
        const m = src[i + 1];
        if (m === 0x00 || (m >= 0xd0 && m <= 0xd7) || m === 0xff) { i += m === 0xff ? 1 : 2; continue; }
        break;
      }
    }
  }
}

export type JpegKeep = 'minimal' | 'exif-icc';

export interface StripJpegOpts {
  /** Orientation to preserve via a minimal EXIF segment ('minimal' mode only). */
  orientation?: number;
  /** Pre-built XMP packet to embed (Privacy preset). */
  xmp?: Uint8Array;
  /**
   * minimal  — drop all APPn except JFIF, ICC, Adobe; add orientation-only EXIF.
   * exif-icc — AI-data-only: also keep EXIF (APP1 Exif) and IPTC (APP13); drop XMP, C2PA, comments.
   */
  mode: JpegKeep;
}

const XMP_NS = 'http://ns.adobe.com/xap/1.0/\0';

function xmpApp1(packet: Uint8Array): Uint8Array {
  const payload = concat([new TextEncoder().encode(XMP_NS), packet]);
  const len = payload.length + 2;
  if (len > 0xffff) throw new StripError('unknown');
  return concat([new Uint8Array([0xff, 0xe1, len >> 8, len & 255]), payload]);
}

export function stripJpeg(src: Uint8Array, opts: StripJpegOpts): Uint8Array<ArrayBuffer> {
  const { header, bodyStart, bodyEnd } = parseJpeg(src);
  const out: Uint8Array[] = [src.subarray(0, 2)];
  const extras: Uint8Array[] = [];
  if (opts.mode === 'minimal' && opts.orientation && opts.orientation > 1) extras.push(buildOrientationApp1(opts.orientation));
  if (opts.xmp) extras.push(xmpApp1(opts.xmp));
  let extrasInserted = false;
  const insertExtras = () => { if (!extrasInserted) { extrasInserted = true; out.push(...extras); } };

  for (const seg of header) {
    const payload = src.subarray(seg.start + 4, seg.end);
    const m = seg.marker;
    const isApp = m >= 0xe0 && m <= 0xef;
    let keep: boolean;
    if (!isApp) keep = m !== 0xfe; // DQT/SOF/DHT/DRI/…; COM dropped
    else if (m === 0xe0) keep = true; // JFIF
    else if (m === 0xe2) keep = startsWith(payload, 'ICC_PROFILE\0');
    else if (m === 0xee) keep = true; // Adobe colour transform
    else if (opts.mode === 'exif-icc' && m === 0xe1) keep = startsWith(payload, 'Exif\0\0');
    else if (opts.mode === 'exif-icc' && m === 0xed) keep = true; // IPTC/Photoshop IRB
    else keep = false;

    // Extras go right after JFIF, before the first non-APP0 segment.
    if (m !== 0xe0) insertExtras();
    if (keep) out.push(src.subarray(seg.start, seg.end));
  }
  insertExtras();
  out.push(src.subarray(bodyStart, bodyEnd));
  return concat(out);
}
