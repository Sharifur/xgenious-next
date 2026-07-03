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
  apiEndpoint?: string;
  operation?: string;
  httpStatus?: string;
  networkOnline?: string;
  connectionType?: string;
}): string {
  const ts = new Date().toUTCString();
  const row = (label: string, value: string | undefined, mono = false) =>
    value
      ? `<tr>
           <td style="padding:6px 12px;font-weight:600;color:#555;white-space:nowrap;vertical-align:top;border-bottom:1px solid #f0f0f0;width:140px">${label}</td>
           <td style="padding:6px 12px;color:#0F1112;word-break:break-word;border-bottom:1px solid #f0f0f0${mono ? ';font-family:monospace;font-size:13px' : ''}">${value}</td>
         </tr>`
      : '';

  const isApiCrash = !!(data.apiEndpoint || data.operation || data.httpStatus);
  const networkBadge = data.networkOnline === 'false'
    ? '<span style="background:#fee2e2;color:#b91c1c;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600">OFFLINE</span>'
    : data.networkOnline === 'true'
      ? '<span style="background:#dcfce7;color:#166534;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600">Online</span>'
      : '';

  const apiSection = isApiCrash ? `
    <div style="margin-top:16px">
      <div style="background:#1e3a5f;color:#fff;padding:10px 16px;border-radius:8px 8px 0 0;font-family:monospace;font-size:13px;font-weight:600">
        API Context
      </div>
      <table style="width:100%;border-collapse:collapse;background:#f0f7ff;border:1px solid #bfdbfe;border-top:none;border-radius:0 0 8px 8px">
        ${row('Endpoint', data.apiEndpoint, true)}
        ${row('Operation', data.operation)}
        ${row('HTTP Status', data.httpStatus ? `<span style="font-family:monospace;font-weight:700;color:${data.httpStatus.startsWith('2') ? '#166534' : '#b91c1c'}">${data.httpStatus}</span>` : data.httpStatus === undefined && data.type === 'API fetch failure' ? '<em style="color:#6b7280">None — network-level failure (DNS / connection refused / offline)</em>' : undefined)}
        ${row('Network', networkBadge || data.networkOnline)}
        ${row('Connection', data.connectionType)}
      </table>
    </div>` : '';

  return `
    <div style="font-family:monospace;max-width:700px;margin:0 auto;padding:24px">
      <div style="background:#ec7161;color:#fff;padding:16px 20px;border-radius:8px 8px 0 0">
        <strong style="font-size:16px">🚨 Xgenious Site Crash Report</strong>
        <div style="font-size:12px;opacity:0.85;margin-top:4px">${ts}</div>
      </div>
      <table style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #e5e7ec;border-top:none;border-radius:0 0 8px 8px">
        ${row('Type', data.type ?? 'React render error')}
        ${row('Page URL', data.url ? `<a href="${data.url}" style="color:#ec7161">${data.url}</a>` : undefined)}
        ${row('Error', data.message)}
        ${row('Digest', data.digest)}
        ${row('Source', data.source)}
        ${row('User Agent', data.userAgent)}
      </table>
      ${apiSection}
      ${data.stack ? `<pre style="margin-top:16px;padding:16px;background:#1e1e1e;color:#d4d4d4;border-radius:8px;font-size:12px;overflow-x:auto;white-space:pre-wrap;word-break:break-word">${data.stack.replace(/</g, '&lt;')}</pre>` : ''}
      <p style="margin-top:16px;font-size:12px;color:#9ca3af;font-family:sans-serif">Sent automatically by <a href="https://xgenious.com" style="color:#ec7161">xgenious.com</a> crash reporter.</p>
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
