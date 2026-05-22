import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { lsFetch } from '@/lib/license-server';

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

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
    return NextResponse.json({ error: data.message ?? 'Domain action failed' }, { status: res.status });
  }

  return NextResponse.json(data);
}
