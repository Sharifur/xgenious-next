import { ascii, concat, putU32le, startsWith, u32le } from './bytes';
import { StripError } from './types';

export interface WebpChunk { fourcc: string; start: number; end: number; dataStart: number; dataEnd: number }

const KEEP = new Set(['VP8 ', 'VP8L', 'VP8X', 'ICCP', 'ANIM', 'ANMF', 'ALPH']);
const PIXEL = new Set(['VP8 ', 'VP8L', 'ALPH', 'ANMF']);
const FLAG_EXIF = 0x08;
const FLAG_XMP = 0x04;

export function parseWebp(src: Uint8Array): WebpChunk[] {
  if (src.length < 12 || !startsWith(src, 'RIFF') || !startsWith(src, 'WEBP', 8)) throw new StripError('corrupt_file');
  const riffEnd = Math.min(8 + u32le(src, 4), src.length);
  const chunks: WebpChunk[] = [];
  let i = 12;
  while (i + 8 <= riffEnd) {
    const fourcc = String.fromCharCode(src[i], src[i + 1], src[i + 2], src[i + 3]);
    const size = u32le(src, i + 4);
    const dataEnd = i + 8 + size;
    const end = dataEnd + (size & 1);
    if (dataEnd > src.length) throw new StripError('corrupt_file');
    chunks.push({ fourcc, start: i, end: Math.min(end, src.length), dataStart: i + 8, dataEnd });
    i = end;
  }
  if (!chunks.length) throw new StripError('corrupt_file');
  return chunks;
}

export interface StripWebpResult { bytes: Uint8Array<ArrayBuffer>; xmpKept: boolean }
export interface StripWebpOpts { mode: 'minimal' | 'ai-only'; xmp?: Uint8Array }

function chunk(fourcc: string, data: Uint8Array): Uint8Array {
  return concat([ascii(fourcc), putU32le(data.length), data, new Uint8Array(data.length & 1)]);
}

export function stripWebp(src: Uint8Array, opts: StripWebpOpts): StripWebpResult {
  const chunks = parseWebp(src);
  const hasVp8x = chunks.some((c) => c.fourcc === 'VP8X');
  const keepExif = opts.mode === 'ai-only';
  const parts: Uint8Array[] = [];
  for (const c of chunks) {
    if (c.fourcc === 'EXIF' && keepExif) { parts.push(src.subarray(c.start, c.end)); continue; }
    if (!KEEP.has(c.fourcc)) continue;
    if (c.fourcc === 'VP8X') {
      const data = src.slice(c.dataStart, c.dataEnd);
      data[0] &= ~(FLAG_XMP | (keepExif ? 0 : FLAG_EXIF));
      parts.push(chunk('VP8X', data));
    } else parts.push(src.subarray(c.start, c.end));
  }
  let xmpKept = false;
  if (opts.xmp && hasVp8x) {
    parts.push(chunk('XMP ', opts.xmp));
    // set XMP flag on the rewritten VP8X (first part after nothing: VP8X is always first)
    const first = parts[0];
    first[8] |= FLAG_XMP;
    xmpKept = true;
  }
  const body = concat(parts);
  const head = concat([ascii('RIFF'), putU32le(body.length + 4), ascii('WEBP')]);
  return { bytes: concat([head, body]), xmpKept };
}

/** Bytes that define the picture: VP8/VP8L/ALPH/ANMF payloads. */
export function webpPixelData(src: Uint8Array): Uint8Array {
  return concat(parseWebp(src).filter((c) => PIXEL.has(c.fourcc)).map((c) => src.subarray(c.dataStart, c.dataEnd)));
}
