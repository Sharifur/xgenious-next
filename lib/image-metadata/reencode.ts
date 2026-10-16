import { MAX_REENCODE_PIXELS } from './limits';
import { StripError, type ImgFormat } from './types';

type AnyCanvas = OffscreenCanvas | HTMLCanvasElement;

function makeCanvas(w: number, h: number): AnyCanvas {
  if (typeof OffscreenCanvas !== 'undefined') return new OffscreenCanvas(w, h);
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

export function canReencodeInThisContext(format: ImgFormat): boolean {
  // HEIC may need the WASM decoder, which we only run on the main thread.
  if (format === 'heic' && typeof document === 'undefined') return false;
  return typeof createImageBitmap !== 'undefined' && (typeof OffscreenCanvas !== 'undefined' || typeof document !== 'undefined');
}

async function decode(blob: Blob, format: ImgFormat): Promise<ImageBitmap> {
  const opts: ImageBitmapOptions = { imageOrientation: 'from-image' };
  try {
    return await createImageBitmap(blob, opts);
  } catch {
    if (format !== 'heic') throw new StripError('decode_failed');
  }
  try {
    const { heicTo } = await import('heic-to/next');
    return await heicTo({ blob, type: 'bitmap', options: opts });
  } catch {
    throw new StripError('heic_unsupported_browser');
  }
}

function hasAlpha(ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D, w: number, h: number): boolean {
  const rows = 256; // scan in bands to keep peak memory low
  for (let y = 0; y < h; y += rows) {
    const d = ctx.getImageData(0, y, w, Math.min(rows, h - y)).data;
    for (let i = 3; i < d.length; i += 4) if (d[i] < 255) return true;
  }
  return false;
}

function toBlob(c: AnyCanvas, type: string, quality?: number): Promise<Blob> {
  if ('convertToBlob' in c) return c.convertToBlob({ type, quality });
  return new Promise((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new StripError('decode_failed'))), type, quality));
}

/** Decode and re-save as JPEG (q92), or PNG when any pixel is transparent. Drops all metadata. */
export async function reencode(src: Uint8Array<ArrayBuffer>, format: ImgFormat): Promise<{ bytes: Uint8Array<ArrayBuffer>; mime: string; ext: string }> {
  const mimeIn = format === 'jpeg' ? 'image/jpeg' : format === 'png' ? 'image/png' : format === 'webp' ? 'image/webp' : format === 'avif' ? 'image/avif' : 'image/heic';
  const bmp = await decode(new Blob([src], { type: mimeIn }), format);
  try {
    if (bmp.width * bmp.height > MAX_REENCODE_PIXELS) throw new StripError('out_of_memory');
    const canvas = makeCanvas(bmp.width, bmp.height);
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null;
    if (!ctx) throw new StripError('out_of_memory');
    ctx.drawImage(bmp, 0, 0);
    const alpha = hasAlpha(ctx, bmp.width, bmp.height);
    const mime = alpha ? 'image/png' : 'image/jpeg';
    const blob = await toBlob(canvas, mime, alpha ? undefined : 0.92);
    return { bytes: new Uint8Array(await blob.arrayBuffer()), mime, ext: alpha ? 'png' : 'jpg' };
  } finally {
    bmp.close();
  }
}
