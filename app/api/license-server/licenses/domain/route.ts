import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { lsFetch } from '@/lib/license-server';

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { license_key, domain, action } = await req.json();

  if (!license_key || !domain || !action) {
    return NextResponse.json({ error: 'license_key, domain and action are required' }, { status: 400 });
  }
  if (action !== 'activate' && action !== 'deactivate') {
    return NextResponse.json({ error: 'action must be activate or deactivate' }, { status: 400 });
  }

  const res = await lsFetch('/licenses/domain', {
    method: 'POST',
    body: JSON.stringify({ license_key, domain, action }),
  });
  const data = await res.json();

  if (!res.ok) {
    console.error('[license-server] domain error:', res.status, JSON.stringify(data));
    const userMsg = res.status < 500
      ? ((data as { message?: string }).message ?? 'Domain action failed')
      : 'Service temporarily unavailable. Please try again later.';
    return NextResponse.json({ error: userMsg }, { status: res.status < 500 ? res.status : 503 });
  }

  return NextResponse.json(data);
}
