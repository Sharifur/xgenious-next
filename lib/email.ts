const RESEND_KEY = process.env.RESEND_API_KEY;
const FROM = process.env.EMAIL_FROM ?? 'noreply@xgenious.com';
const BASE_URL = process.env.NEXTAUTH_URL ?? 'https://xgenious.com';

export { BASE_URL };

export async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  if (!RESEND_KEY) {
    console.warn('[email] RESEND_API_KEY not set — skipping send to', to);
    return;
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from: FROM, to, subject, html }),
    cache: 'no-store',
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend API error ${res.status}: ${body}`);
  }
}

export function verificationEmailHtml(link: string): string {
  return `
    <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:32px">
      <h2 style="color:#0F1112">Verify your email</h2>
      <p style="color:#555">Click the button below to verify your email address. This link expires in 24 hours.</p>
      <a href="${link}" style="display:inline-block;margin-top:16px;padding:12px 24px;background:#ec7161;color:#fff;text-decoration:none;border-radius:8px;font-weight:600">Verify email</a>
      <p style="margin-top:24px;color:#999;font-size:13px">If you didn't create an account, you can ignore this email.</p>
    </div>`;
}

export function resetEmailHtml(link: string): string {
  return `
    <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:32px">
      <h2 style="color:#0F1112">Reset your password</h2>
      <p style="color:#555">Click the button below to set a new password. This link expires in 1 hour.</p>
      <a href="${link}" style="display:inline-block;margin-top:16px;padding:12px 24px;background:#ec7161;color:#fff;text-decoration:none;border-radius:8px;font-weight:600">Reset password</a>
      <p style="margin-top:24px;color:#999;font-size:13px">If you didn't request a password reset, you can ignore this email.</p>
    </div>`;
}
