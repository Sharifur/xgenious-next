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

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  try {
    const res = await fetch(`${TASKIP_API}/${id}`, {
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

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const body = await req.json();
  try {
    const res = await fetch(`${TASKIP_API}/${id}`, {
      method: 'PUT',
      headers: TASKIP_HEADERS,
      body: JSON.stringify(body),
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
