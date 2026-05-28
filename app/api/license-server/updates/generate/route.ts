import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { lsFetch } from '@/lib/license-server';

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { product_uid, license_key, version, include_database } = await req.json();

  if (!product_uid || !license_key) {
    return NextResponse.json({ error: 'product_uid and license_key are required' }, { status: 400 });
  }

  const res = await lsFetch('/updates/generate', {
    method: 'POST',
    body: JSON.stringify({ product_uid, license_key, ...(version ? { version } : {}), include_database: include_database ?? false }),
  });
  const data = await res.json();

  if (!res.ok) {
    console.error('[license-server] updates/generate error:', res.status, JSON.stringify(data));
    const userMsg = res.status < 500
      ? ((data as { message?: string }).message ?? 'Failed to generate download')
      : 'Service temporarily unavailable. Please try again later.';
    return NextResponse.json({ error: userMsg }, { status: res.status < 500 ? res.status : 503 });
  }

  return NextResponse.json(data);
}
