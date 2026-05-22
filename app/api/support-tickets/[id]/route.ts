import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';

const TASKIP_API = 'https://public-api.taskip.net/api/public-v1/support-ticket';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const res = await fetch(`${TASKIP_API}/${id}`, {
    headers: {
      'X-Secret-Key': process.env.TASKIP_SECRET_KEY!,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const body = await req.json();

  const res = await fetch(`${TASKIP_API}/${id}`, {
    method: 'PUT',
    headers: {
      'X-Secret-Key': process.env.TASKIP_SECRET_KEY!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    cache: 'no-store',
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
