import sharp from 'sharp';
import { NextRequest, NextResponse } from 'next/server';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const MAX_FILE_SIZE = 10 * 1024 * 1024;

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

export async function POST(request: NextRequest) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid multipart/form-data' }, { status: 400, headers: CORS_HEADERS });
  }

  const file = formData.get('file') as File | null;
  const format = (formData.get('format') as string | null) ?? 'webp';
  const qualityRaw = formData.get('quality');
  const quality = qualityRaw ? Math.min(100, Math.max(1, Number(qualityRaw))) : 80;

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400, headers: CORS_HEADERS });
  }

  if (!['image/png', 'image/jpeg'].includes(file.type)) {
    return NextResponse.json({ error: 'File must be PNG or JPEG' }, { status: 400, headers: CORS_HEADERS });
  }

  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json({ error: 'File exceeds 10MB limit' }, { status: 400, headers: CORS_HEADERS });
  }

  if (!['webp', 'avif'].includes(format)) {
    return NextResponse.json({ error: 'Format must be webp or avif' }, { status: 400, headers: CORS_HEADERS });
  }

  if (isNaN(quality) || quality < 1 || quality > 100) {
    return NextResponse.json({ error: 'Quality must be between 1 and 100' }, { status: 400, headers: CORS_HEADERS });
  }

  const originalBuffer = Buffer.from(await file.arrayBuffer());
  const originalSize = originalBuffer.length;

  let convertedBuffer: Buffer;
  try {
    const instance = sharp(originalBuffer);
    if (format === 'webp') {
      convertedBuffer = await instance.webp({ quality }).toBuffer();
    } else {
      convertedBuffer = await instance.avif({ quality }).toBuffer();
    }
  } catch (err) {
    console.error('sharp conversion error', err);
    return NextResponse.json({ error: 'Image conversion failed' }, { status: 500, headers: CORS_HEADERS });
  }

  const convertedSize = convertedBuffer.length;
  const randomId = Math.random().toString(36).slice(2, 10);
  const filename = `converted-${randomId}.${format}`;
  const savings = `${Math.round((1 - convertedSize / originalSize) * 100)}% smaller`;
  const dataUrl = `data:image/${format};base64,${convertedBuffer.toString('base64')}`;

  return NextResponse.json(
    { url: dataUrl, filename, originalSize, convertedSize, savings },
    { status: 200, headers: CORS_HEADERS },
  );
}
