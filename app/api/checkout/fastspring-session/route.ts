import { NextRequest, NextResponse } from 'next/server';
import { FASTSPRING_STORE } from '@/lib/fastspring';

// Fallback path when the FastSpring popup (SBL iframe) fails to load — usually
// third-party cookie/iframe blocking (iOS Safari ITP, ad/content blockers).
// Creates a session via FastSpring's Sessions v1 API carrying the same cart,
// then the client does a full top-level redirect (not an iframe), which isn't
// subject to the same blocking.
export async function POST(request: NextRequest) {
  const { items, coupon, email } = await request.json();

  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: 'items required' }, { status: 400 });
  }
  if (typeof email !== 'string' || !email.trim()) {
    return NextResponse.json({ error: 'email required' }, { status: 400 });
  }

  const username = process.env.FASTSPRING_API_USERNAME;
  const password = process.env.FASTSPRING_API_PASSWORD;
  if (!username || !password) {
    return NextResponse.json({ error: 'FastSpring API credentials not configured' }, { status: 500 });
  }

  const auth = Buffer.from(`${username}:${password}`).toString('base64');

  const fsRes = await fetch('https://api.fastspring.com/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: items.map((path: string) => ({ product: path, quantity: 1 })),
      ...(coupon ? { coupon } : {}),
      contact: { email: email.trim() },
    }),
    cache: 'no-store',
  });

  if (!fsRes.ok) {
    const text = await fsRes.text().catch(() => '');
    return NextResponse.json(
      { error: `FastSpring session create failed: ${fsRes.status} ${text.slice(0, 200)}` },
      { status: 502 }
    );
  }

  const data = await fsRes.json();
  const sessionId = data?.id;
  if (!sessionId) {
    return NextResponse.json({ error: 'FastSpring session response missing id' }, { status: 502 });
  }

  return NextResponse.json({ checkoutUrl: `https://${FASTSPRING_STORE}/session/${sessionId}` });
}
