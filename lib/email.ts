import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({
  region: process.env.AWS_REGION ?? 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});
const FROM = process.env.EMAIL_FROM ?? process.env.CONTACT_FROM_EMAIL!;
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

export function resetEmailHtml(link: string): string {
  return `
    <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:32px">
      <h2 style="color:#0F1112">Reset your password</h2>
      <p style="color:#555">Click the button below to set a new password. This link expires in 1 hour.</p>
      <a href="${link}" style="display:inline-block;margin-top:16px;padding:12px 24px;background:#ec7161;color:#fff;text-decoration:none;border-radius:8px;font-weight:600">Reset password</a>
      <p style="margin-top:24px;color:#999;font-size:13px">If you didn't request a password reset, you can ignore this email.</p>
    </div>`;
}
