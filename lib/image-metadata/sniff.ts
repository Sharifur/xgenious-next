import { startsWith } from './bytes';
import type { ImgFormat } from './types';

const HEIC_BRANDS = new Set(['heic', 'heix', 'hevc', 'heim', 'heis', 'hevm', 'hevs', 'mif1', 'msf1']);
const AVIF_BRANDS = new Set(['avif', 'avis']);

function brand(b: Uint8Array, o: number): string {
  return String.fromCharCode(b[o], b[o + 1], b[o + 2], b[o + 3]);
}

/** Detect format from magic bytes only. Never trust extension or MIME. */
export function sniff(b: Uint8Array): ImgFormat {
  if (b.length >= 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return 'jpeg';
  if (b.length >= 8 && b[0] === 0x89 && startsWith(b, 'PNG\r\n\x1a\n', 1)) return 'png';
  if (b.length >= 12 && startsWith(b, 'RIFF') && startsWith(b, 'WEBP', 8)) return 'webp';
  if (b.length >= 16 && startsWith(b, 'ftyp', 4)) {
    // major brand first; then compatible brands (AVIF wins if present, since mif1 is shared)
    const size = Math.min(((b[0] << 24) | (b[1] << 16) | (b[2] << 8) | b[3]) >>> 0, b.length);
    const brands = [brand(b, 8)];
    for (let o = 16; o + 4 <= size; o += 4) brands.push(brand(b, o));
    if (brands.some((x) => AVIF_BRANDS.has(x))) return 'avif';
    if (brands.some((x) => HEIC_BRANDS.has(x))) return 'heic';
  }
  return 'unsupported';
}
