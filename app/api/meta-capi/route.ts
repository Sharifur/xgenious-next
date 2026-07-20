import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'crypto';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_PIXEL_ACCESS_TOKEN?.trim();
const GRAPH_URL = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`;

function sha256(value: string): string {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

export interface CAPIPayload {
  event_name: string;
  event_id?: string;
  event_source_url: string;
  // optional PII (server hashes these)
  email?: string;
  first_name?: string;
  last_name?: string;
  zip?: string;
  // purchase-specific
  value?: number;
  currency?: string;
  content_ids?: string[];
}

export async function POST(req: NextRequest) {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return NextResponse.json({ ok: false, error: 'Meta pixel not configured' }, { status: 500 });
  }

  const body: CAPIPayload = await req.json();
  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    ?? req.headers.get('x-real-ip')
    ?? undefined;
  const clientUserAgent = req.headers.get('user-agent') ?? undefined;

  const userData: Record<string, string> = {};
  if (body.email) userData.em = sha256(body.email);
  if (body.first_name) userData.fn = sha256(body.first_name);
  if (body.last_name) userData.ln = sha256(body.last_name);
  if (body.zip) userData.zp = sha256(body.zip);
  if (clientUserAgent) userData.client_user_agent = clientUserAgent;
  if (clientIp) userData.client_ip_address = clientIp;

  const eventData: Record<string, unknown> = {
    event_name: body.event_name,
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    event_source_url: body.event_source_url,
    user_data: userData,
  };

  if (body.event_id) eventData.event_id = body.event_id;

  if (body.event_name === 'Purchase' && body.value !== undefined && body.currency) {
    eventData.custom_data = {
      value: body.value,
      currency: body.currency,
      ...(body.content_ids?.length ? { content_ids: body.content_ids } : {}),
    };
  }

  if (body.event_name === 'InitiateCheckout' && body.content_ids?.length) {
    eventData.custom_data = { content_ids: body.content_ids };
  }

  const res = await fetch(`${GRAPH_URL}?access_token=${encodeURIComponent(ACCESS_TOKEN)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: [eventData],
      // test_event_code: 'TEST12345', // uncomment to test in Meta Events Manager
    }),
  });

  const json = await res.json();
  if (!res.ok) {
    console.error('[CAPI]', body.event_name, json);
    return NextResponse.json({ ok: false, error: json }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
