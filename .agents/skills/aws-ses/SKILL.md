---
name: aws-ses
description: >
  Guide for sending transactional email in xgenious-next via AWS SES.
  Provides the correct SDK import, template pattern, and env var list.
  Trigger: "send email", "email template", "transactional email", "SES", "AWS email",
  "/aws-ses", or any request to send email from this project.
---

AWS SES is the ONLY email service in this project. `@aws-sdk/client-ses` is already installed.
Never suggest Resend, SendGrid, Mailgun, nodemailer, SMTP, or any other email service.

## Sending email

Always use `lib/email.ts`. Never instantiate `SESClient` directly in API routes.

```typescript
import { sendEmail } from '@/lib/email';

await sendEmail(
  'user@example.com',
  'Your subject line',
  myEmailHtml(data),
);
```

## Adding a new email template

Add an export function to `lib/email.ts`:

```typescript
export function myEmailHtml(name: string, actionUrl: string): string {
  return `
    <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:32px">
      <h2 style="color:#0F1112">Title</h2>
      <p style="color:#555">Body copy for ${name}.</p>
      <a href="${actionUrl}"
         style="display:inline-block;margin-top:16px;padding:12px 24px;
                background:#ec7161;color:#fff;text-decoration:none;
                border-radius:8px;font-weight:600">
        CTA Button
      </a>
      <p style="margin-top:24px;color:#999;font-size:13px">Footer disclaimer.</p>
    </div>`;
}
```

## Existing templates in lib/email.ts

| Function | Used by |
|---|---|
| `verificationEmailHtml(link)` | `/api/register`, `/api/resend-verification` |
| `resetEmailHtml(link)` | `/api/forgot-password` |

## Env vars

| Variable | Value |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM user with `ses:SendEmail` permission |
| `AWS_SECRET_ACCESS_KEY` | |
| `AWS_REGION` | e.g. `us-east-1` |
| `EMAIL_FROM` | Verified SES address e.g. `support@xgenious.com` |
| `NEXTAUTH_URL` | `https://xgenious.com` — used by `lib/email.ts` as BASE_URL for links |

## Error handling

`sendEmail` throws on failure. Always wrap in try/catch in API routes.
Non-critical emails (e.g. notification after action succeeds): catch and log, don't block the response.
Critical emails (verification on register): catch, log, but still return success to user — email can be resent.

```typescript
try {
  await sendEmail(to, subject, html);
} catch (err) {
  console.error('[route-name] email send failed:', err);
  // decide: re-throw or swallow based on criticality
}
```
