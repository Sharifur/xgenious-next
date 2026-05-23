import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({
  region: process.env.AWS_REGION ?? 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true; // skip if not configured
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secret}&response=${token}`,
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, subject, message, recaptchaToken } = await req.json();

  if (process.env.RECAPTCHA_SECRET_KEY) {
    if (!recaptchaToken) {
      return NextResponse.json({ error: 'Please complete the reCAPTCHA.' }, { status: 400 });
    }
    const valid = await verifyRecaptcha(recaptchaToken);
    if (!valid) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 });
    }
  }

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL!;
  const fromEmail = `Xgenious <${process.env.CONTACT_FROM_EMAIL!}>`;

  try {
    await ses.send(
      new SendEmailCommand({
        Source: fromEmail,
        Destination: { ToAddresses: [toEmail] },
        ReplyToAddresses: [email],
        Message: {
          Subject: {
            Data: `Contact: ${subject}`,
            Charset: 'UTF-8',
          },
          Body: {
            Text: {
              Data: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`,
              Charset: 'UTF-8',
            },
            Html: {
              Data: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New Contact Message</title></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:#0F1112;padding:28px 36px;">
            <p style="margin:0;font-size:13px;font-weight:600;color:#ec7161;letter-spacing:0.08em;text-transform:uppercase;">Xgenious</p>
            <h1 style="margin:6px 0 0;font-size:20px;font-weight:600;color:#ffffff;line-height:1.3;">New contact message</h1>
          </td>
        </tr>
        <!-- Meta -->
        <tr>
          <td style="padding:28px 36px 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:0 0 14px;">
                  <p style="margin:0 0 2px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.06em;">From</p>
                  <p style="margin:0;font-size:15px;color:#0F1112;font-weight:500;">${firstName} ${lastName}</p>
                  <a href="mailto:${email}" style="font-size:14px;color:#ec7161;text-decoration:none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 14px;border-top:1px solid #f0f0f0;padding-top:14px;">
                  <p style="margin:0 0 2px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.06em;">Subject</p>
                  <p style="margin:0;font-size:15px;color:#0F1112;">${subject}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Message -->
        <tr>
          <td style="padding:0 36px 28px;">
            <div style="background:#f9f9fa;border-radius:8px;padding:20px;border-left:3px solid #ec7161;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.06em;">Message</p>
              <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>
          </td>
        </tr>
        <!-- CTA -->
        <tr>
          <td style="padding:0 36px 28px;">
            <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display:inline-block;background:#0F1112;color:#ffffff;font-size:14px;font-weight:600;padding:11px 24px;border-radius:100px;text-decoration:none;">Reply to ${firstName}</a>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:20px 36px;border-top:1px solid #f0f0f0;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">Sent via xgenious.com contact form &mdash; <a href="https://xgenious.com" style="color:#9ca3af;">xgenious.com</a></p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
              Charset: 'UTF-8',
            },
          },
        },
      })
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('SES error:', err);
    return NextResponse.json({ error: 'Failed to send email. Try again later.' }, { status: 500 });
  }
}
