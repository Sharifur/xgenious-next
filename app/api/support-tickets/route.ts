import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';

const TASKIP_API = 'https://public-api.taskip.net/api/public-v1/support-ticket';

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

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
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { subject, priority, description, product, purchaseCode } = body;

  if (!subject || !priority || !description) {
    return NextResponse.json({ error: 'Subject, priority, and description are required.' }, { status: 400 });
  }

  const fullSubject = product ? `[${product}] ${subject}` : subject;

  const res = await fetch(TASKIP_API, {
    method: 'POST',
    headers: {
      'X-Secret-Key': process.env.TASKIP_SECRET_KEY!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      subject: fullSubject,
      priority,
      description: purchaseCode
        ? `<p><strong>Purchase Code:</strong> ${purchaseCode}</p>${description}`
        : description,
      status: 'open',
      created_by: session.user?.name ?? session.wpEmail,
    }),
    cache: 'no-store',
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
