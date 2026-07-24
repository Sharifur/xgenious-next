import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { lsFetch } from '@/lib/license-server';

const ses = new SESClient({
  region: process.env.AWS_REGION ?? 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const TASKIP_API = 'https://public-api.taskip.net/api/public-v1/lead';
const BLOCKLIST_URL = 'https://gist.githubusercontent.com/Sharifur/b40c7b54b97d43f353f1382e51c70535/raw/f6446fa378bf266cacf604f1e97f8f318e01e157/temporary-email-address-domain-list.json';

let blocklist: Set<string> | null = null;

async function getBlocklist(): Promise<Set<string>> {
  if (blocklist) return blocklist;
  try {
    const res = await fetch(BLOCKLIST_URL, { next: { revalidate: 86400 } });
    const json = await res.json();
    const domains: string[] = Array.isArray(json) ? json : (json.disposable_email_domains ?? []);
    blocklist = new Set(domains.map((d: string) => d.toLowerCase()));
  } catch {
    blocklist = new Set();
  }
  return blocklist;
}

export async function POST(req: NextRequest) {
  const { name, email, product, downloadUrl, licenseUuid } = await req.json();

  if (!email || !product) {
    return NextResponse.json({ error: 'Email and product are required.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const domain = email.split('@')[1]?.toLowerCase();
  const domains = await getBlocklist();
  if (domain && domains.has(domain)) {
    return NextResponse.json({ error: 'Temporary email addresses are not allowed. Please use your work or personal email.' }, { status: 400 });
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

  const gcApiKey = process.env.GENIUS_CAMPAIGN_API_KEY;
  const gcApiHost = process.env.GENIUS_CAMPAIGN_API_HOST;

  if (gcApiKey && gcApiHost) {
    try {
      const contactRes = await fetch(`${gcApiHost}/api/v1/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': gcApiKey,
        },
        body: JSON.stringify({
          email,
          firstName: name ? name.split(' ')[0] : undefined,
          lastName: name ? name.split(' ').slice(1).join(' ') || undefined : undefined,
          customFields: { source: `free-software:${product}`, software_name: product },
          listId: process.env.GENIUS_CAMPAIGN_LIST_ID || undefined,
          tagIds: process.env.GENIUS_CAMPAIGN_TAG_ID ? [process.env.GENIUS_CAMPAIGN_TAG_ID] : undefined,
        }),
      });

      if (contactRes.ok && process.env.GENIUS_CAMPAIGN_SEQUENCE_ID) {
        const enrollRes = await fetch(
          `${gcApiHost}/api/v1/contacts/${encodeURIComponent(email)}/enroll`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Api-Key': gcApiKey,
            },
            body: JSON.stringify({ sequenceId: process.env.GENIUS_CAMPAIGN_SEQUENCE_ID }),
          }
        );
        if (!enrollRes.ok && enrollRes.status !== 409) {
          console.error('Genius Campaign enroll failed:', enrollRes.status, await enrollRes.text());
        }
      } else if (!contactRes.ok) {
        console.error('Genius Campaign contact upsert failed:', contactRes.status, await contactRes.text());
      }
    } catch (err) {
      console.error('Genius Campaign lead push error:', err);
    }
  }

  let resolvedDownloadUrl = downloadUrl;
  if (licenseUuid) {
    try {
      const lsRes = await lsFetch(`/free-software/${licenseUuid}/download`);
      if (lsRes.ok) {
        const lsData = await lsRes.json();
        if (lsData.download_url) resolvedDownloadUrl = lsData.download_url;
      }
    } catch (err) {
      console.error('License server signed URL fetch failed:', err);
    }
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL ? `Xgenious <${process.env.CONTACT_FROM_EMAIL}>` : undefined;
  const adminEmail = process.env.CONTACT_TO_EMAIL;
  const safeDownloadUrl = resolvedDownloadUrl && /^https?:\/\//.test(resolvedDownloadUrl) ? resolvedDownloadUrl : null;
  const safeProduct = product ? product.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') : '';
  const safeName = name ? name.replace(/</g, '&lt;').replace(/>/g, '&gt;') : 'Not provided';
  const downloadedAt = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka', dateStyle: 'medium', timeStyle: 'short' });

  const sends: Promise<void>[] = [];

  if (fromEmail && safeDownloadUrl) {
    sends.push(
      ses.send(
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
                      Thanks for downloading <strong>${safeProduct}</strong>. Click the button below to get the files.
                    </p>
                    <a href="${safeDownloadUrl}" style="display:inline-block;background:#ec7161;color:#fff;font-size:14px;font-weight:600;padding:12px 28px;border-radius:100px;text-decoration:none;">
                      Download ${safeProduct}
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
                Data: `Your download is ready: ${safeDownloadUrl}\n\nNeed help? We offer installation service for $300: https://xgenious.com/free-software`,
                Charset: 'UTF-8',
              },
            },
          },
        })
      ).then(() => {})
    );
  }

  if (fromEmail && adminEmail) {
    sends.push(
      ses.send(
        new SendEmailCommand({
          Source: fromEmail,
          Destination: { ToAddresses: [adminEmail] },
          ReplyToAddresses: [email],
          Message: {
            Subject: {
              Data: `New free download: ${product}`,
              Charset: 'UTF-8',
            },
            Body: {
              Html: {
                Data: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New Free Download</title></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:#0F1112;padding:24px 32px;">
            <p style="margin:0;font-size:12px;font-weight:600;color:#ec7161;letter-spacing:0.08em;text-transform:uppercase;">Free Software Download</p>
            <h1 style="margin:6px 0 0;font-size:20px;font-weight:600;color:#ffffff;line-height:1.3;">New download lead</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr><td style="padding:0 0 14px;">
                <p style="margin:0 0 2px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.06em;">Name</p>
                <p style="margin:0;font-size:15px;color:#0F1112;font-weight:500;">${safeName}</p>
              </td></tr>
              <tr><td style="padding:14px 0;border-top:1px solid #f0f0f0;">
                <p style="margin:0 0 2px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.06em;">Email</p>
                <a href="mailto:${email}" style="font-size:15px;color:#ec7161;text-decoration:none;">${email}</a>
              </td></tr>
              <tr><td style="padding:14px 0;border-top:1px solid #f0f0f0;">
                <p style="margin:0 0 2px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.06em;">Product</p>
                <p style="margin:0;font-size:15px;color:#0F1112;">${safeProduct}</p>
              </td></tr>
              <tr><td style="padding:14px 0 28px;border-top:1px solid #f0f0f0;">
                <p style="margin:0 0 2px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.06em;">Downloaded at (BD time)</p>
                <p style="margin:0;font-size:15px;color:#0F1112;">${downloadedAt}</p>
              </td></tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 32px 28px;">
            <a href="mailto:${email}?subject=Re: ${encodeURIComponent(product)} download" style="display:inline-block;background:#0F1112;color:#ffffff;font-size:13px;font-weight:600;padding:10px 22px;border-radius:100px;text-decoration:none;">Reply to ${safeName}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px;border-top:1px solid #f0f0f0;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">Sent via xgenious.com free software download form</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
                Charset: 'UTF-8',
              },
              Text: {
                Data: `New free download\n\nName: ${name ?? 'Not provided'}\nEmail: ${email}\nProduct: ${product}\nDownloaded at: ${downloadedAt}`,
                Charset: 'UTF-8',
              },
            },
          },
        })
      ).then(() => {})
    );
  }

  await Promise.allSettled(sends);

  return NextResponse.json({ ok: true });
}
