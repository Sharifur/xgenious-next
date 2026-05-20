import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({
  region: process.env.AWS_REGION ?? 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const TASKIP_API = 'https://public-api.taskip.net/api/public-v1/lead';

export async function POST(req: NextRequest) {
  const { name, email, product, downloadUrl } = await req.json();

  if (!email || !product) {
    return NextResponse.json({ error: 'Email and product are required.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const secretKey = process.env.TASKIP_SECRET_KEY;

  if (secretKey) {
    try {
      const res = await fetch(TASKIP_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Secret-Key': secretKey,
        },
        body: JSON.stringify({
          first_name: name ? name.split(' ')[0] : '',
          last_name: name ? name.split(' ').slice(1).join(' ') : '',
          email,
          description: `Downloaded: ${product}`,
          lead_interaction_date: new Date().toISOString().split('T')[0],
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error('Taskip lead push failed:', res.status, text);
      }
    } catch (err) {
      console.error('Taskip lead push error:', err);
    }
  } else {
    console.warn('TASKIP_SECRET_KEY not set — lead not forwarded to Taskip:', { email, product });
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  if (fromEmail && downloadUrl) {
    try {
      await ses.send(
        new SendEmailCommand({
          Source: fromEmail,
          Destination: { ToAddresses: [email] },
          Message: {
            Subject: {
              Data: `Your free download: ${product}`,
              Charset: 'UTF-8',
            },
            Body: {
              Html: {
                Data: `
                  <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#0F1112;">
                    <h2 style="font-size:22px;font-weight:600;margin:0 0 12px;">Your download is ready</h2>
                    <p style="font-size:15px;color:#484848;line-height:1.6;margin:0 0 24px;">
                      Thanks for downloading <strong>${product}</strong>. Click the button below to get the files.
                    </p>
                    <a href="${downloadUrl}" style="display:inline-block;background:#ec7161;color:#fff;font-size:14px;font-weight:600;padding:12px 28px;border-radius:100px;text-decoration:none;">
                      Download ${product}
                    </a>
                    <p style="font-size:13px;color:#9ca3af;margin:24px 0 0;line-height:1.6;">
                      Need help setting it up? We offer a professional installation service for $300 —
                      <a href="https://xgenious.com/free-software" style="color:#ec7161;">learn more</a>.
                    </p>
                    <hr style="border:none;border-top:1px solid #E5E7EC;margin:24px 0;" />
                    <p style="font-size:12px;color:#9ca3af;margin:0;">
                      Xgenious &mdash; <a href="https://xgenious.com" style="color:#9ca3af;">xgenious.com</a>
                    </p>
                  </div>
                `,
                Charset: 'UTF-8',
              },
              Text: {
                Data: `Your download is ready: ${downloadUrl}\n\nNeed help? We offer installation service for $300: https://xgenious.com/free-software`,
                Charset: 'UTF-8',
              },
            },
          },
        })
      );
    } catch (err) {
      console.error('SES send error:', err);
    }
  }

  return NextResponse.json({ ok: true });
}
