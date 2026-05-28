import { NextRequest, NextResponse } from 'next/server';
import { isDisposableEmail } from '@/lib/disposable-emails';
import { generateVerificationToken } from '@/lib/token';
import { sendEmail, verificationEmailHtml, BASE_URL } from '@/lib/email';
import { verifyRecaptcha } from '@/lib/recaptcha';

const WP_BASE = process.env.WORDPRESS_BASE_URL ?? 'https://xgenious.com';
const WP_ADMIN_USER = process.env.WP_ADMIN_USERNAME!;
const WP_ADMIN_PASS = process.env.WP_ADMIN_APP_PASSWORD!;

export async function POST(req: NextRequest) {
  const { username, email, password, firstName, lastName, recaptchaToken } = await req.json();

  if (process.env.RECAPTCHA_SECRET_KEY) {
    if (!recaptchaToken || !(await verifyRecaptcha(recaptchaToken))) {
      return NextResponse.json({ error: 'Please complete the reCAPTCHA.' }, { status: 400 });
    }
  }

  if (!username || !email || !password) {
    return NextResponse.json({ error: 'Username, email and password are required.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  if (isDisposableEmail(email)) {
    return NextResponse.json({ error: 'Temporary or disposable email addresses are not allowed.' }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: 'Password must be at least 8 characters.' }, { status: 400 });
  }

  const credentials = Buffer.from(`${WP_ADMIN_USER}:${WP_ADMIN_PASS}`).toString('base64');

  async function createWpUser(uname: string) {
    const r = await fetch(`${WP_BASE}/wp-json/wp/v2/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify({
        username: uname,
        email,
        password,
        first_name: firstName ?? '',
        last_name: lastName ?? '',
        roles: ['subscriber'],
      }),
      cache: 'no-store',
    });
    let body: Record<string, unknown> = {};
    try { body = await r.json(); } catch { /* WP returned non-JSON (PHP error page) */ }
    return { r, body };
  }

  let { r: res, body: data } = await createWpUser(username);

  if (!res.ok && (data as { code?: string })?.code === 'existing_user_login') {
    const uniqueUsername = `${username}_${Date.now().toString(36).slice(-4)}`;
    ({ r: res, body: data } = await createWpUser(uniqueUsername));
  }

  if (!res.ok) {
    const wpMsg = (data as { message?: string })?.message;
    const message = wpMsg
      ? wpMsg.replace(/<[^>]*>/g, '')
      : 'Registration failed. Email may already be in use.';
    return NextResponse.json({ error: message }, { status: res.status >= 500 ? 400 : res.status });
  }

  const userId: number = data.id;
  const sentAt = Math.floor(Date.now() / 1000);

  // Mark email as unverified and record send timestamp (requires WP mu-plugin for meta)
  await fetch(`${WP_BASE}/wp-json/wp/v2/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${credentials}`,
    },
    body: JSON.stringify({ meta: { email_verified: 0, email_verification_sent_at: sentAt } }),
    cache: 'no-store',
  }).catch(() => null);

  const sig = generateVerificationToken(userId, email, sentAt);
  const link = `${BASE_URL}/verify-email?uid=${userId}&t=${sentAt}&sig=${sig}`;

  try {
    await sendEmail(
      email,
      'Verify your Xgenious account',
      verificationEmailHtml(link),
    );
  } catch (err) {
    console.error('[register] email send failed:', err);
  }

  return NextResponse.json({ ok: true, userId, requiresVerification: true }, { status: 201 });
}
