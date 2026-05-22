import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { lsFetch } from '@/lib/license-server';

export async function HEAD(req: NextRequest) {
  return GET(req);
}

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const license_key = searchParams.get('license_key');
  const product_uid = searchParams.get('product_uid');

  if (!license_key || !product_uid) {
    return NextResponse.json({ error: 'license_key and product_uid are required' }, { status: 400 });
  }

  const res = await lsFetch(
    `/downloads/fresh-install?license_key=${encodeURIComponent(license_key)}&product_uid=${encodeURIComponent(product_uid)}`
  );
  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ error: data.message ?? 'Failed to generate download link' }, { status: res.status });
  }

  const fileRes = await fetch(data.download_url);
  if (!fileRes.ok || !fileRes.body) {
    return NextResponse.json({ error: 'Failed to fetch file from storage' }, { status: 502 });
  }

  const slug = (data.product_uid ?? product_uid).toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const version = data.version ?? 'latest';
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const filename = `xgenious-${slug}-${version}-${timestamp}.zip`;

  const headers = new Headers({
    'Content-Type': 'application/zip',
    'Content-Disposition': `attachment; filename="${filename}"`,
  });
  if (data.file_size) headers.set('Content-Length', String(data.file_size));

  return new Response(fileRes.body, { headers });
}
