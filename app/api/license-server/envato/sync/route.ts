import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { lsFetch } from '@/lib/license-server';
import { buildSignedAssertion } from '@/lib/envato-assertion';

export async function POST() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const xgeniousUserId = session.wpUserId;
  const email = session.wpEmail ?? session.user?.email;
  if (!xgeniousUserId || !email) {
    return NextResponse.json({ error: 'No account identity in session' }, { status: 400 });
  }

  const { assertion, signature } = buildSignedAssertion({
    xgeniousUserId,
    email,
    displayName: session.user?.name,
    returnPath: '/my-account/envato',
  });

  const res = await lsFetch('/envato/connections/sync', {
    method: 'POST',
    body: JSON.stringify({ assertion, signature }),
  });
  const data = await res.json();

  if (!res.ok) {
    console.error('[license-server] envato sync error:', res.status, JSON.stringify(data));
    // License Server's per-user 429 / ALREADY_SYNCING / NOT_CONNECTED messages
    // are already user-safe — surface them as-is for anything under 500.
    const userMsg = res.status < 500
      ? ((data as { message?: string }).message ?? 'Failed to start sync')
      : 'Service temporarily unavailable. Please try again later.';
    return NextResponse.json({ error: userMsg }, { status: res.status < 500 ? res.status : 503 });
  }

  return NextResponse.json(data);
}
