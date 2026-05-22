import { NextRequest, NextResponse } from 'next/server';
import { generateResetToken } from '@/lib/token';
import { sendEmail, resetEmailHtml, BASE_URL } from '@/lib/email';

const WP_BASE = process.env.WORDPRESS_BASE_URL ?? 'https://xgenious.com';
const WP_ADMIN_USER = process.env.WP_ADMIN_USERNAME!;
const WP_ADMIN_PASS = process.env.WP_ADMIN_APP_PASSWORD!;
const COOLDOWN_SECONDS = 120;

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email) return NextResponse.json({ ok: true }); // always OK to prevent enumeration

  const credentials = Buffer.from(`${WP_ADMIN_USER}:${WP_ADMIN_PASS}`).toString('base64');

  const searchRes = await fetch(
    `${WP_BASE}/wp-json/wp/v2/users?search=${encodeURIComponent(email)}&per_page=5&context=edit`,
    { headers: { Authorization: `Basic ${credentials}` }, cache: 'no-store' },
  );

  if (!searchRes.ok) return NextResponse.json({ ok: true });

  const users: any[] = await searchRes.json();
  const user = users.find((u) => u.email?.toLowerCase() === email.toLowerCase());

  if (!user) return NextResponse.json({ ok: true });

  // Rate limit
  const lastRequested = Number(user.meta?.password_reset_requested_at ?? 0);
  const now = Math.floor(Date.now() / 1000);
  if (lastRequested && now - lastRequested < COOLDOWN_SECONDS) {
    return NextResponse.json(
      { error: `Please wait before requesting another reset email.` },
      { status: 429 },
    );
  }

  const requestedAt = now;

  await fetch(`${WP_BASE}/wp-json/wp/v2/users/${user.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Basic ${credentials}` },
    body: JSON.stringify({ meta: { password_reset_requested_at: requestedAt } }),
    cache: 'no-store',
  }).catch(() => null);

  const sig = generateResetToken(user.id, user.email, requestedAt);
  const link = `${BASE_URL}/reset-password?uid=${user.id}&t=${requestedAt}&sig=${sig}`;

  try {
    await sendEmail(user.email, 'Reset your Xgenious password', resetEmailHtml(link));
  } catch (err) {
    console.error('[forgot-password] email send failed:', err);
  }

  return NextResponse.json({ ok: true });
}
