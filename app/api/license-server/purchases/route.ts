import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { lsFetch } from '@/lib/license-server';

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const email = session.user?.email;
  if (!email) return NextResponse.json({ error: 'No email in session' }, { status: 400 });

  const res = await lsFetch(`/purchases?email=${encodeURIComponent(email)}&per_page=100`);
  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ error: data.message ?? 'Failed to fetch purchases' }, { status: res.status });
  }

  return NextResponse.json(data);
}
