# Xgenious — Marketing Website

Next.js 14 App Router. Tailwind CSS. Framer Motion.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Create a `.env.local` file in the project root. **Never commit this file.**

### AWS SES — Contact Form

Required for the `/contact` page form to send emails.

```env
# AWS region where SES is configured
AWS_REGION=us-east-1

# IAM credentials with ses:SendEmail permission
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...

# Sender address — must be verified in SES
CONTACT_FROM_EMAIL=noreply@xgenious.com

# Recipient address — must be verified in SES (sandbox) or any address (production)
CONTACT_TO_EMAIL=hello@xgenious.com
```

**SES sandbox note:** New SES accounts are in sandbox mode. Both `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL` must be verified in the SES console. Request production access to send to any address.

**IAM policy minimum:**
```json
{
  "Effect": "Allow",
  "Action": "ses:SendEmail",
  "Resource": "*"
}
```

### Google reCAPTCHA v2 — Contact Form Spam Protection

Optional but recommended. If `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set, the widget appears and the token is verified server-side. If unset, reCAPTCHA is skipped entirely.

```env
# Public key — safe to expose in browser
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Le...

# Secret key — server-side only, never expose
RECAPTCHA_SECRET_KEY=6Le...
```

Get keys at: https://www.google.com/recaptcha/admin — choose **reCAPTCHA v2 "I'm not a robot"**.

---

## Deployment (Vercel / Coolify)

Set all env vars above in the hosting dashboard under **Environment Variables**. Do **not** prefix server-only secrets with `NEXT_PUBLIC_`.

| Variable | Where | Required |
|---|---|---|
| `AWS_REGION` | Server | Yes |
| `AWS_ACCESS_KEY_ID` | Server | Yes |
| `AWS_SECRET_ACCESS_KEY` | Server | Yes |
| `CONTACT_FROM_EMAIL` | Server | Yes |
| `CONTACT_TO_EMAIL` | Server | Yes |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Public | No |
| `RECAPTCHA_SECRET_KEY` | Server | No |

---

## Project Structure

```
app/
  page.tsx                          — Home
  contact/page.tsx                  — Contact form (SES + reCAPTCHA)
  api/contact/route.ts              — POST handler (SES send + reCAPTCHA verify)
  web-app-development-company/      — Web app service page
  mobile-app-development/           — Mobile app service page
  custom-saas-development-company/  — SaaS service page
  ai-agent-development-services/    — AI agents service page
  saas-mvp-development/             — MVP service page
  case-studies/saachii/             — Saachii case study
  about/                            — About page
components/
  layout/Navbar.tsx                 — Top nav
  layout/Footer.tsx                 — Footer
  sections/BookingCTA.tsx           — CRM booking iframe (home + MVP)
data/nav.ts                         — Nav dropdown data
```
