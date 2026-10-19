// Browser-side PNG/JPEG → WebP/AVIF. Runs entirely on the user's device, so the
// free image tools cost nothing in Vercel function time or bandwidth.

export interface ConvertResult {
  url: string;
  filename: string;
  originalSize: number;
  convertedSize: number;
  savings: string;
}

// Above phone photos and 8K screenshots, below canvas/WASM memory failures.
const MAX_PIXELS = 64_000_000;

async function toImageData(file: File): Promise<ImageData> {
  const bitmap = await createImageBitmap(file);
  try {
    if (bitmap.width * bitmap.height > MAX_PIXELS) {
      throw new Error('Image is too large to convert. Use an image under 64 megapixels.');
    }
    const canvas = document.createElement('canvas');
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Your browser cannot process images.');
    ctx.drawImage(bitmap, 0, 0);
    return ctx.getImageData(0, 0, bitmap.width, bitmap.height);
  } finally {
    bitmap.close();
  }
}

async function encodeWebp(data: ImageData, quality: number): Promise<Blob> {
  const canvas = document.createElement('canvas');
  canvas.width = data.width;
  canvas.height = data.height;
  canvas.getContext('2d')!.putImageData(data, 0, 0);
  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, 'image/webp', quality / 100),
  );
  if (!blob || blob.type !== 'image/webp') {
    throw new Error('Your browser cannot encode WebP.');
  }
  return blob;
}

async function encodeAvif(data: ImageData, quality: number): Promise<Blob> {
  // Canvas cannot encode AVIF; load the WASM encoder only when it is needed.
  const { encode } = await import('@jsquash/avif');
  const buffer = await encode(data, { quality });
  return new Blob([buffer], { type: 'image/avif' });
}

export async function convertImage(
  file: File,
  format: 'webp' | 'avif',
  quality: number,
): Promise<ConvertResult> {
  let data: ImageData;
  try {
    data = await toImageData(file);
  } catch (e) {
    if (e instanceof Error && e.message.startsWith('Image is too large')) throw e;
    throw new Error('Image could not be converted. Use a PNG or JPEG under 10MB.');
  }

  const blob = format === 'webp' ? await encodeWebp(data, quality) : await encodeAvif(data, quality);

  const originalSize = file.size;
  const convertedSize = blob.size;
  const pct = ((originalSize - convertedSize) / originalSize) * 100;
  return {
    url: URL.createObjectURL(blob),
    filename: `${file.name.replace(/\.[^.]+$/, '')}.${format}`,
    originalSize,
    convertedSize,
    savings: `${Math.round(pct)}% smaller`,
  };
}
