import { NextRequest, NextResponse } from 'next/server';
import { verifyResetToken } from '@/lib/token';

const WP_BASE = process.env.WORDPRESS_BASE_URL ?? 'https://xgenious.com';
const WP_ADMIN_USER = process.env.WP_ADMIN_USERNAME!;
const WP_ADMIN_PASS = process.env.WP_ADMIN_APP_PASSWORD!;
const EXPIRY_SECONDS = 3600; // 1 hour

export async function POST(req: NextRequest) {
  const { uid, t, sig, password } = await req.json();

  if (!uid || !t || !sig || !password) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  if (password.length < 12) {
    return NextResponse.json({ error: 'Password must be at least 12 characters.' }, { status: 400 });
  }

  const now = Math.floor(Date.now() / 1000);
  if (now - Number(t) > EXPIRY_SECONDS) {
    return NextResponse.json({ error: 'Reset link has expired. Please request a new one.' }, { status: 410 });
  }

  const credentials = Buffer.from(`${WP_ADMIN_USER}:${WP_ADMIN_PASS}`).toString('base64');

  const userRes = await fetch(`${WP_BASE}/wp-json/wp/v2/users/${uid}?context=edit`, {
    headers: { Authorization: `Basic ${credentials}` },
    cache: 'no-store',
  });

  if (!userRes.ok) {
    return NextResponse.json({ error: 'User not found.' }, { status: 404 });
  }

  const user = await userRes.json();

  if (!verifyResetToken(sig, Number(uid), user.email, Number(t))) {
    return NextResponse.json({ error: 'Invalid or tampered reset link.' }, { status: 400 });
  }

  // Ensure token matches last-issued reset request
  const requestedAt = user.meta?.password_reset_requested_at;
  if (requestedAt && Number(requestedAt) !== Number(t)) {
    return NextResponse.json({ error: 'A newer reset link was issued. Please use the latest email.' }, { status: 400 });
  }

  // Update password via admin API
  const updateRes = await fetch(`${WP_BASE}/wp-json/wp/v2/users/${uid}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${credentials}`,
    },
    body: JSON.stringify({ password }),
    cache: 'no-store',
  });

  if (!updateRes.ok) {
    const errBody = await updateRes.text().catch(() => '(unreadable)');
    console.error('[reset-password] WP password update failed', { uid, status: updateRes.status, body: errBody });
    return NextResponse.json({ error: 'Password update failed. Please try again.' }, { status: 500 });
  }

  console.log('[reset-password] WP password updated OK', { uid, status: updateRes.status });

  // Verify the new password actually works — WP can return 200 without persisting the change
  const jwtTestRes = await fetch(`${WP_BASE}/wp-json/jwt-auth/v1/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: user.email, password }),
    cache: 'no-store',
  });
  if (!jwtTestRes.ok) {
    const jwtBody = await jwtTestRes.text().catch(() => '(unreadable)');
    console.error('[reset-password] JWT test failed after password update', { uid, status: jwtTestRes.status, body: jwtBody });
    return NextResponse.json({ error: 'Password could not be updated. Please try again or contact support.' }, { status: 500 });
  }

  // Clear the reset token to prevent reuse
  await fetch(`${WP_BASE}/wp-json/wp/v2/users/${uid}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Basic ${credentials}` },
    body: JSON.stringify({ meta: { password_reset_requested_at: 0 } }),
    cache: 'no-store',
  }).catch(() => null);

  return NextResponse.json({ ok: true });
}
