import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { lsFetch } from '@/lib/license-server';

export async function GET() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const email = session.user?.email;
  if (!email) return NextResponse.json({ error: 'No email in session' }, { status: 400 });

  const res = await lsFetch(`/purchases?email=${encodeURIComponent(email)}&per_page=100`);
  const data = await res.json();

  if (!res.ok) {
    console.error('[license-server] purchases error:', res.status, JSON.stringify(data));
    const userMsg = res.status < 500
      ? ((data as { message?: string }).message ?? 'Failed to fetch purchases')
      : 'Service temporarily unavailable. Please try again later.';
    return NextResponse.json({ error: userMsg }, { status: res.status < 500 ? res.status : 503 });
  }

  return NextResponse.json(data);
}
