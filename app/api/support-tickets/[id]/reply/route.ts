import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const { description, userId } = await req.json();

  if (!description?.trim()) {
    return NextResponse.json({ error: 'Reply message is required.' }, { status: 400 });
  }

  const payload: Record<string, unknown> = { description, status: 1 };
  if (userId) payload.reply_by_user_id = userId;

  const res = await fetch(`https://public-api.taskip.net/api/public-v1/support-ticket/reply/${id}`, {
    method: 'POST',
    headers: {
      'X-Secret-Key': process.env.TASKIP_SECRET_KEY!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    cache: 'no-store',
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
