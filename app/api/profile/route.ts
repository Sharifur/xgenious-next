import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';

const WP_BASE = process.env.WORDPRESS_BASE_URL ?? 'https://xgenious.com';

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const res = await fetch(`${WP_BASE}/wp-json/wp/v2/users/me?context=edit`, {
    headers: {
      Authorization: `Bearer ${session.wpToken}`,
    },
    cache: 'no-store',
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

export async function PUT(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { firstName, lastName, email, password } = body;

  const payload: Record<string, string> = {};
  if (firstName !== undefined) payload.first_name = firstName;
  if (lastName !== undefined) payload.last_name = lastName;
  if (email) payload.email = email;
  if (password) payload.password = password;

  const res = await fetch(`${WP_BASE}/wp-json/wp/v2/users/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.wpToken}`,
    },
    body: JSON.stringify(payload),
    cache: 'no-store',
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
