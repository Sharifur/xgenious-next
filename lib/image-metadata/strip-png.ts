import { ascii, concat, crc32, putU32be, startsWith, u32be } from './bytes';
import { StripError } from './types';

export interface PngChunk { type: string; start: number; end: number; dataStart: number; dataEnd: number }

const SIG_LEN = 8;
const KEEP = new Set([
  'IHDR', 'PLTE', 'IDAT', 'IEND', 'tRNS', 'cHRM', 'gAMA', 'iCCP', 'sBIT', 'sRGB', 'cICP', 'mDCV', 'cLLI',
  'bKGD', 'pHYs', 'acTL', 'fcTL', 'fdAT',
]);
/** Extra chunks kept by the AI-data-only preset. */
const KEEP_AI_ONLY = new Set(['eXIf', 'tIME']);
const IMAGE_DATA = new Set(['IDAT', 'fdAT']);

/** Chunks up to and including IEND; trailing bytes are ignored. */
export function parsePng(src: Uint8Array): { chunks: PngChunk[]; end: number } {
  if (src.length < SIG_LEN + 12 || src[0] !== 0x89 || !startsWith(src, 'PNG\r\n\x1a\n', 1)) throw new StripError('corrupt_file');
  const chunks: PngChunk[] = [];
  let i = SIG_LEN;
  while (i + 12 <= src.length) {
    const len = u32be(src, i);
    const type = String.fromCharCode(src[i + 4], src[i + 5], src[i + 6], src[i + 7]);
    const end = i + 12 + len;
    if (end > src.length) throw new StripError('corrupt_file');
    chunks.push({ type, start: i, end, dataStart: i + 8, dataEnd: i + 8 + len });
    i = end;
    if (type === 'IEND') return { chunks, end };
  }
  throw new StripError('corrupt_file'); // no IEND
}

export function buildXmpChunk(packet: Uint8Array): Uint8Array {
  const head = ascii('XML:com.adobe.xmp\0\0\0\0\0'); // keyword, NUL, compression flag 0, method 0, lang "", translated ""
  const data = concat([head, packet]);
  const type = ascii('iTXt');
  return concat([putU32be(data.length), type, data, putU32be(crc32(type, data))]);
}

export interface StripPngOpts { mode: 'minimal' | 'ai-only'; xmp?: Uint8Array }

export function stripPng(src: Uint8Array, opts: StripPngOpts): Uint8Array<ArrayBuffer> {
  const { chunks } = parsePng(src);
  const out: Uint8Array[] = [src.subarray(0, SIG_LEN)];
  let xmpDone = !opts.xmp;
  for (const c of chunks) {
    if (!xmpDone && IMAGE_DATA.has(c.type)) { out.push(buildXmpChunk(opts.xmp!)); xmpDone = true; }
    const keep = KEEP.has(c.type) || (opts.mode === 'ai-only' && KEEP_AI_ONLY.has(c.type));
    if (keep) out.push(src.subarray(c.start, c.end));
  }
  return concat(out);
}

/** Bytes that define the picture: concatenated IDAT/fdAT payloads. */
export function pngPixelData(src: Uint8Array): Uint8Array {
  const { chunks } = parsePng(src);
  return concat(chunks.filter((c) => IMAGE_DATA.has(c.type)).map((c) => src.subarray(c.dataStart, c.dataEnd)));
}
