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
  const fromEmail = process.env.CONTACT_FROM_EMAIL!;

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
              Data: `
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr />
                <p>${message.replace(/\n/g, '<br />')}</p>
              `,
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
