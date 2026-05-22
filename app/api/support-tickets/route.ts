import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';

const TASKIP_API = 'https://public-api.taskip.net/api/public-v1/support-ticket';

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

  const res = await fetch(`${TASKIP_API}?${params}`, {
    headers: {
      'X-Secret-Key': process.env.TASKIP_SECRET_KEY!,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
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

  const res = await fetch(TASKIP_API, {
    method: 'POST',
    headers: {
      'X-Secret-Key': process.env.TASKIP_SECRET_KEY!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    cache: 'no-store',
  });

  const data = await res.json();
  if (!res.ok) console.error('[support-tickets POST] Taskip error', res.status, JSON.stringify(data));
  return NextResponse.json(data, { status: res.status });
}
