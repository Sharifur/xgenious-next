import { sha256 } from './bytes';
import { parseJpeg } from './strip-jpeg';
import { pngPixelData } from './strip-png';
import { webpPixelData } from './strip-webp';
import type { ImgFormat } from './types';

/** The bytes that define the picture, per container. Metadata is excluded by construction. */
function pixelBytes(buf: Uint8Array, format: ImgFormat): Uint8Array {
  if (format === 'jpeg') { const l = parseJpeg(buf); return buf.subarray(l.bodyStart, l.bodyEnd); }
  if (format === 'png') return pngPixelData(buf);
  if (format === 'webp') return webpPixelData(buf);
  throw new Error('no lossless pixel hash for ' + format);
}

export async function pixelHash(buf: Uint8Array, format: ImgFormat): Promise<string> {
  return sha256(pixelBytes(buf, format));
}
