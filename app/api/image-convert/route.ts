import sharp from 'sharp';
import { NextRequest, NextResponse } from 'next/server';

// A 10MB image through sharp is a few seconds. 30s leaves headroom for AVIF
// without allowing a stuck decode to run for the platform maximum.
export const maxDuration = 30;

const MAX_FILE_SIZE = 10 * 1024 * 1024;
// Multipart framing on top of the file itself.
const MAX_BODY_BYTES = MAX_FILE_SIZE + 64 * 1024;
// Above phone photos and 8K screenshots, below decompression bombs.
const MAX_PIXELS = 64_000_000;
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 10 * 60 * 1000;

// xgenious.com and any subdomain. Same-origin (preview hosts, localhost) is
// allowed separately so the converter keeps working wherever this app is served.
const ALLOWED_HOST = /^(?:[a-z0-9-]+\.)*xgenious\.com$/i;

sharp.cache(false);

type Bucket = { timestamps: number[] };
const buckets = new Map<string, Bucket>();

function corsHeaders(origin: string): HeadersInit {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}

function allowedOrigin(request: NextRequest): string | null {
  const origin = request.headers.get('origin');
  if (!origin) return null;
  let parsed: URL;
  try {
    parsed = new URL(origin);
  } catch {
    return null;
  }
  const requestHost = request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? '';
  if (parsed.host === requestHost) return origin;
  if (parsed.protocol === 'https:' && ALLOWED_HOST.test(parsed.hostname)) return origin;
  return null;
}

function clientIp(request: NextRequest): string {
  return (
    request.headers.get('x-real-ip') ??
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    'unknown'
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_WINDOW_MS;
  const bucket = buckets.get(ip) ?? { timestamps: [] };
  bucket.timestamps = bucket.timestamps.filter((t) => t > cutoff);
  if (bucket.timestamps.length >= RATE_LIMIT) {
    buckets.set(ip, bucket);
    return true;
  }
  bucket.timestamps.push(now);
  buckets.set(ip, bucket);
  if (buckets.size > 5000) {
    const oldest = buckets.keys().next().value;
    if (oldest) buckets.delete(oldest);
  }
  return false;
}

function json(body: unknown, status: number, origin: string | null) {
  return NextResponse.json(body, {
    status,
    headers: origin ? corsHeaders(origin) : undefined,
  });
}

export async function OPTIONS(request: NextRequest) {
  const origin = allowedOrigin(request);
  if (!origin) return new NextResponse(null, { status: 403 });
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
}

export async function POST(request: NextRequest) {
  const origin = allowedOrigin(request);
  if (!origin) {
    return json({ error: 'Origin not allowed' }, 403, null);
  }

  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return json({ error: 'File exceeds 10MB limit' }, 400, origin);
  }

  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { error: 'Too many conversions. Try again in a few minutes.' },
      { status: 429, headers: { ...corsHeaders(origin), 'Retry-After': '60' } },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return json({ error: 'Invalid multipart/form-data' }, 400, origin);
  }

  const file = formData.get('file') as File | null;
  const format = (formData.get('format') as string | null) ?? 'webp';
  const qualityRaw = formData.get('quality');
  const quality = qualityRaw ? Math.min(100, Math.max(1, Number(qualityRaw))) : 80;

  if (!file) {
    return json({ error: 'No file provided' }, 400, origin);
  }

  if (!['image/png', 'image/jpeg'].includes(file.type)) {
    return json({ error: 'File must be PNG or JPEG' }, 400, origin);
  }

  if (file.size > MAX_FILE_SIZE) {
    return json({ error: 'File exceeds 10MB limit' }, 400, origin);
  }

  if (!['webp', 'avif'].includes(format)) {
    return json({ error: 'Format must be webp or avif' }, 400, origin);
  }

  if (isNaN(quality) || quality < 1 || quality > 100) {
    return json({ error: 'Quality must be between 1 and 100' }, 400, origin);
  }

  const originalBuffer = Buffer.from(await file.arrayBuffer());
  if (originalBuffer.length > MAX_FILE_SIZE) {
    return json({ error: 'File exceeds 10MB limit' }, 400, origin);
  }
  const originalSize = originalBuffer.length;

  let convertedBuffer: Buffer;
  try {
    const instance = sharp(originalBuffer, { limitInputPixels: MAX_PIXELS });
    if (format === 'webp') {
      convertedBuffer = await instance.webp({ quality }).toBuffer();
    } else {
      convertedBuffer = await instance.avif({ quality }).toBuffer();
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : '';
    if (/pixel limit|exceeds|unsupported|Input buffer|premature end/i.test(message)) {
      return json({ error: 'Image could not be converted. Use a PNG or JPEG under 10MB.' }, 400, origin);
    }
    console.error('sharp conversion error', err);
    return json({ error: 'Image conversion failed' }, 500, origin);
  }

  const convertedSize = convertedBuffer.length;
  const randomId = Math.random().toString(36).slice(2, 10);
  const filename = `converted-${randomId}.${format}`;
  const savings = `${Math.round((1 - convertedSize / originalSize) * 100)}% smaller`;
  const dataUrl = `data:image/${format};base64,${convertedBuffer.toString('base64')}`;

  return json(
    { url: dataUrl, filename, originalSize, convertedSize, savings },
    200,
    origin,
  );
}
