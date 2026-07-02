import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({
  region: process.env.AWS_REGION ?? 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});
const FROM_ADDR = process.env.EMAIL_FROM ?? process.env.CONTACT_FROM_EMAIL!;
const FROM = `Xgenious <${FROM_ADDR}>`;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://xgenious.com';

export { BASE_URL };

export async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  await ses.send(
    new SendEmailCommand({
      Source: FROM,
      Destination: { ToAddresses: [to] },
      Message: {
        Subject: { Data: subject, Charset: 'UTF-8' },
        Body: { Html: { Data: html, Charset: 'UTF-8' } },
      },
    }),
  );
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

export function crashReportEmailHtml(data: {
  message?: string;
  stack?: string;
  url?: string;
  userAgent?: string;
  digest?: string;
  source?: string;
  type?: string;
}): string {
  const ts = new Date().toUTCString();
  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:6px 12px;font-weight:600;color:#555;white-space:nowrap;vertical-align:top;border-bottom:1px solid #f0f0f0">${label}</td><td style="padding:6px 12px;color:#0F1112;word-break:break-word;border-bottom:1px solid #f0f0f0">${value}</td></tr>`
      : '';
  return `
    <div style="font-family:monospace;max-width:700px;margin:0 auto;padding:24px">
      <div style="background:#ec7161;color:#fff;padding:16px 20px;border-radius:8px 8px 0 0">
        <strong style="font-size:16px">🚨 Xgenious Site Crash Report</strong>
        <div style="font-size:12px;opacity:0.85;margin-top:4px">${ts}</div>
      </div>
      <table style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #e5e7ec;border-top:none;border-radius:0 0 8px 8px">
        ${row('Type', data.type ?? 'React render error')}
        ${row('Page URL', data.url ?? '')}
        ${row('Error', data.message ?? '')}
        ${row('Digest', data.digest ?? '')}
        ${row('Source', data.source ?? '')}
        ${row('User Agent', data.userAgent ?? '')}
      </table>
      ${data.stack ? `<pre style="margin-top:16px;padding:16px;background:#1e1e1e;color:#d4d4d4;border-radius:8px;font-size:12px;overflow-x:auto;white-space:pre-wrap;word-break:break-word">${data.stack.replace(/</g, '&lt;')}</pre>` : ''}
      <p style="margin-top:16px;font-size:12px;color:#9ca3af;font-family:sans-serif">Sent automatically by xgenious.com crash reporter.</p>
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
