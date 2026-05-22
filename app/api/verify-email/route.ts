import { NextRequest, NextResponse } from 'next/server';
import { verifyVerificationToken } from '@/lib/token';

const WP_BASE = process.env.WORDPRESS_BASE_URL ?? 'https://xgenious.com';
const WP_ADMIN_USER = process.env.WP_ADMIN_USERNAME!;
const WP_ADMIN_PASS = process.env.WP_ADMIN_APP_PASSWORD!;
const EXPIRY_SECONDS = 86400; // 24 hours

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const uid = Number(searchParams.get('uid'));
  const t = Number(searchParams.get('t'));
  const sig = searchParams.get('sig') ?? '';

  if (!uid || !t || !sig) {
    return NextResponse.json({ error: 'Invalid verification link.' }, { status: 400 });
  }

  const now = Math.floor(Date.now() / 1000);
  if (now - t > EXPIRY_SECONDS) {
    return NextResponse.json({ error: 'Verification link has expired. Please request a new one.' }, { status: 410 });
  }

  // Fetch user email from WP to reconstruct HMAC
  const credentials = Buffer.from(`${WP_ADMIN_USER}:${WP_ADMIN_PASS}`).toString('base64');
  const userRes = await fetch(`${WP_BASE}/wp-json/wp/v2/users/${uid}?context=edit`, {
    headers: { Authorization: `Basic ${credentials}` },
    cache: 'no-store',
  });

  if (!userRes.ok) {
    return NextResponse.json({ error: 'User not found.' }, { status: 404 });
  }

  const user = await userRes.json();
  const email: string = user.email ?? '';

  if (!verifyVerificationToken(sig, uid, email, t)) {
    return NextResponse.json({ error: 'Invalid or tampered verification link.' }, { status: 400 });
  }

  // Check token matches the most-recently-issued token (email_verification_sent_at)
  const sentAt = user.meta?.email_verification_sent_at;
  if (sentAt && Number(sentAt) !== t) {
    return NextResponse.json({ error: 'A newer verification link was issued. Please use the latest email.' }, { status: 400 });
  }

  // Set email_verified = 1
  await fetch(`${WP_BASE}/wp-json/wp/v2/users/${uid}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${credentials}`,
    },
    body: JSON.stringify({ meta: { email_verified: 1 } }),
    cache: 'no-store',
  });

  return NextResponse.json({ ok: true });
}
