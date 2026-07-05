import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';

const TASKIP_API = 'https://public-api.taskip.net/api/public-v1/support-ticket';

const TASKIP_HEADERS = {
  'X-Secret-Key': process.env.TASKIP_SECRET_KEY!,
  'Content-Type': 'application/json',
};

async function safeJson(res: Response): Promise<unknown> {
  try { return await res.json(); } catch { return { error: `Taskip returned HTTP ${res.status} with non-JSON body` }; }
}

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const params = new URLSearchParams();
  ['page', 'limit', 'status', 'search'].forEach((k) => {
    const v = searchParams.get(k);
    if (v) params.set(k, v);
  });
  if (session.wpEmail) params.set('search', session.wpEmail);

  try {
    const res = await fetch(`${TASKIP_API}?${params}`, {
      headers: TASKIP_HEADERS,
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });
    const data = await safeJson(res);
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Upstream error';
    return NextResponse.json({ error: msg }, { status: 502 });
  }
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { subject, priority, description, product, purchaseCode } = body;

  if (!subject || !priority || !description) {
    return NextResponse.json({ error: 'Subject, priority, and description are required.' }, { status: 400 });
  }

  const priorityMap: Record<string, number> = { low: 0, medium: 1, high: 2, urgent: 3 };
  const fullSubject = product ? `[${product}] ${subject}` : subject;

  const emailLine = session.wpEmail ? `<p><strong>Customer Email:</strong> ${session.wpEmail}</p>` : '';
  const purchaseLine = purchaseCode ? `<p><strong>Purchase Code:</strong> ${purchaseCode}</p>` : '';
  const fullDescription = `${emailLine}${purchaseLine}${description}`;

  const payload = {
    subject: fullSubject,
    priority: priorityMap[priority] ?? 1,
    description: fullDescription,
    status: 0,
    email: session.wpEmail,
  };

  console.log('[support-tickets POST] payload', JSON.stringify(payload));

  try {
    const res = await fetch(TASKIP_API, {
      method: 'POST',
      headers: TASKIP_HEADERS,
      body: JSON.stringify(payload),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });
    const data = await safeJson(res);
    if (!res.ok) console.error('[support-tickets POST] Taskip error', res.status, JSON.stringify(data));
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Upstream error';
    return NextResponse.json({ error: msg }, { status: 502 });
  }
}
