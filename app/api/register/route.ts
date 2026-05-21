import { NextRequest, NextResponse } from 'next/server';

const WP_BASE = process.env.WORDPRESS_BASE_URL ?? 'https://xgenious.com';
const WP_ADMIN_USER = process.env.WP_ADMIN_USERNAME!;
const WP_ADMIN_PASS = process.env.WP_ADMIN_APP_PASSWORD!;

export async function POST(req: NextRequest) {
  const { username, email, password, firstName, lastName } = await req.json();

  if (!username || !email || !password) {
    return NextResponse.json({ error: 'Username, email and password are required.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: 'Password must be at least 8 characters.' }, { status: 400 });
  }

  const credentials = Buffer.from(`${WP_ADMIN_USER}:${WP_ADMIN_PASS}`).toString('base64');

  const res = await fetch(`${WP_BASE}/wp-json/wp/v2/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${credentials}`,
    },
    body: JSON.stringify({
      username,
      email,
      password,
      first_name: firstName ?? '',
      last_name: lastName ?? '',
      roles: ['subscriber'],
    }),
    cache: 'no-store',
  });

  const data = await res.json();

  if (!res.ok) {
    const message = data?.message ?? 'Registration failed. Username or email may already be in use.';
    return NextResponse.json({ error: message }, { status: res.status });
  }

  return NextResponse.json({ ok: true, userId: data.id }, { status: 201 });
}
