import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { lsFetch } from '@/lib/license-server';
import { buildSignedAssertion } from '@/lib/envato-assertion';

export async function GET() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const email = session.wpEmail ?? session.user?.email;
  if (!email) return NextResponse.json({ error: 'No email in session' }, { status: 400 });

  const xgeniousUserId = session.wpUserId;
  let query = `email=${encodeURIComponent(email)}&per_page=100`;
  if (xgeniousUserId) {
    const { assertion, signature } = buildSignedAssertion({
      xgeniousUserId,
      email,
      displayName: session.user?.name,
      returnPath: '/my-account/purchases',
    });
    query += `&assertion=${encodeURIComponent(JSON.stringify(assertion))}&signature=${encodeURIComponent(signature)}`;
  }

  const res = await lsFetch(`/purchases?${query}`);
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
