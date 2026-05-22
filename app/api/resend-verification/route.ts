import { NextRequest, NextResponse } from 'next/server';
import { generateVerificationToken } from '@/lib/token';
import { sendEmail, verificationEmailHtml, BASE_URL } from '@/lib/email';

const WP_BASE = process.env.WORDPRESS_BASE_URL ?? 'https://xgenious.com';
const WP_ADMIN_USER = process.env.WP_ADMIN_USERNAME!;
const WP_ADMIN_PASS = process.env.WP_ADMIN_APP_PASSWORD!;
const COOLDOWN_SECONDS = 120; // 2 minutes

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email) return NextResponse.json({ error: 'Email required.' }, { status: 400 });

  const credentials = Buffer.from(`${WP_ADMIN_USER}:${WP_ADMIN_PASS}`).toString('base64');

  // Find user by email search
  const searchRes = await fetch(
    `${WP_BASE}/wp-json/wp/v2/users?search=${encodeURIComponent(email)}&per_page=5&context=edit`,
    { headers: { Authorization: `Basic ${credentials}` }, cache: 'no-store' },
  );

  if (!searchRes.ok) {
    return NextResponse.json({ ok: true }); // silent fail — don't reveal user existence
  }

  const users: any[] = await searchRes.json();
  const user = users.find((u) => u.email?.toLowerCase() === email.toLowerCase());

  if (!user) {
    return NextResponse.json({ ok: true }); // silent
  }

  if (user.meta?.email_verified === 1 || user.meta?.email_verified === '1') {
    return NextResponse.json({ error: 'Email is already verified.' }, { status: 400 });
  }

  // Rate limit check
  const lastSent = Number(user.meta?.email_verification_sent_at ?? 0);
  const now = Math.floor(Date.now() / 1000);
  const secondsSinceLast = now - lastSent;

  if (lastSent && secondsSinceLast < COOLDOWN_SECONDS) {
    const wait = COOLDOWN_SECONDS - secondsSinceLast;
    return NextResponse.json(
      { error: `Please wait ${wait} second${wait === 1 ? '' : 's'} before requesting another email.` },
      { status: 429 },
    );
  }

  const sentAt = now;

  await fetch(`${WP_BASE}/wp-json/wp/v2/users/${user.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Basic ${credentials}` },
    body: JSON.stringify({ meta: { email_verification_sent_at: sentAt } }),
    cache: 'no-store',
  }).catch(() => null);

  const sig = generateVerificationToken(user.id, user.email, sentAt);
  const link = `${BASE_URL}/verify-email?uid=${user.id}&t=${sentAt}&sig=${sig}`;

  try {
    await sendEmail(user.email, 'Verify your Xgenious account', verificationEmailHtml(link));
  } catch (err) {
    console.error('[resend-verification] email send failed:', err);
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
