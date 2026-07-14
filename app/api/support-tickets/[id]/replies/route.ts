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
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page') ?? '1';
  const perPage = searchParams.get('per_page') ?? '10';

  try {
    const res = await fetch(`${TASKIP_API}/${id}/replies?page=${page}&per_page=${perPage}`, {
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
