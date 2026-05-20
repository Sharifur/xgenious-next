# Xgenious — Marketing Website

Next.js 15 App Router. Tailwind CSS. TypeScript.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Create `.env.local` in the project root. **Never commit this file.**

### Google Tag Manager

Optional. If set, GTM loads on every page via `app/layout.tsx`.

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### AWS SES — Contact Form

Required for the `/contact` page form to send emails.

```env
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...
CONTACT_FROM_EMAIL=noreply@xgenious.com
CONTACT_TO_EMAIL=hello@xgenious.com
```

**SES sandbox note:** Both `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL` must be verified in the SES console while in sandbox mode. Request production access to send to any address.

**IAM policy minimum:**
```json
{
  "Effect": "Allow",
  "Action": "ses:SendEmail",
  "Resource": "*"
}
```

### Google reCAPTCHA v2 — Contact Form

Optional. If `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set, the widget appears and token is verified server-side. If unset, reCAPTCHA is skipped.

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Le...
RECAPTCHA_SECRET_KEY=6Le...
```

Keys: https://www.google.com/recaptcha/admin — choose **reCAPTCHA v2 "I'm not a robot"**.

### Cloudflare R2 — Image Converter Tools

Required for image conversion tools (PNG/JPG → WebP/AVIF). Files are stored in R2 and deleted after 24 hours.

```env
R2_ACCOUNT_ID=...
R2_ACCESS_KEY_ID=...
R2_SECRET_ACCESS_KEY=...
R2_BUCKET_NAME=xgenious-image-tools
R2_PUBLIC_URL=https://pub-xxx.r2.dev
CRON_SECRET=...          # random string — used to authenticate the cleanup cron
```

---

## Deployment (Vercel / Coolify)

Set all env vars in the hosting dashboard under **Environment Variables**.

| Variable | Where | Required |
|---|---|---|
| `NEXT_PUBLIC_GTM_ID` | Public | No |
| `AWS_REGION` | Server | Yes |
| `AWS_ACCESS_KEY_ID` | Server | Yes |
| `AWS_SECRET_ACCESS_KEY` | Server | Yes |
| `CONTACT_FROM_EMAIL` | Server | Yes |
| `CONTACT_TO_EMAIL` | Server | Yes |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Public | No |
| `RECAPTCHA_SECRET_KEY` | Server | No |
| `R2_ACCOUNT_ID` | Server | Image tools only |
| `R2_ACCESS_KEY_ID` | Server | Image tools only |
| `R2_SECRET_ACCESS_KEY` | Server | Image tools only |
| `R2_BUCKET_NAME` | Server | Image tools only |
| `R2_PUBLIC_URL` | Server | Image tools only |
| `CRON_SECRET` | Server | Image tools only |

---

## Project Structure

```
app/
  page.tsx                              — Home
  layout.tsx                            — Root layout (GTM, Navbar, Footer)
  sitemap.ts                            — XML sitemap (all pages + 48 free tools)
  robots.ts                             — Robots.txt (AI bots allowed)
  contact/page.tsx                      — Contact form (SES + reCAPTCHA)
  api/contact/route.ts                  — POST handler (SES + reCAPTCHA verify)
  api/image-convert/route.ts            — Image conversion API (→ R2)
  api/image-cleanup/route.ts            — Cron: delete R2 files older than 24h
  free-tools/page.tsx                   — Free tools index (grid, category filter)
  free-tools/[slug]/page.tsx            — Individual tool page (SEO + widget)
  web-app-development-company/          — Web app service page
  mobile-app-development/               — Mobile app service page
  custom-saas-development-company/      — SaaS service page
  ai-agent-development-services/        — AI agents service page
  saas-mvp-development/                 — MVP service page
  free-software/                        — Free software index
  free-software/genius-school-management/
  free-software/genius-crm/
  free-software/genius-hrm/
  case-studies/                         — Case study index + individual pages
  about/

components/
  layout/Navbar.tsx
  layout/Footer.tsx
  sections/BookingCTA.tsx               — Booking iframe CTA
  sections/SectionBadge.tsx
  free-tools/ToolRenderer.tsx           — Dynamic import map for all tool widgets
  free-tools/                           — 48 individual tool components

data/
  free-tools.ts                         — FreeTool registry (slug, SEO, FAQ, etc.)
  nav.ts                                — Nav dropdown data
```

---

## Free Tools

48 interactive tools across 7 categories. All client-rendered except image tools (server-side R2 upload).

| Category | Tools |
|---|---|
| Developer | JSON Formatter, Password Generator, Base64 Encoder/Decoder, JWT Decoder, Regex Tester, Cron Builder, ENV Generator, SQL Formatter, Color Contrast Checker, .htaccess Generator, **AI Token Cost Calculator** |
| HR | Payroll Breakdown, Employee Cost, Leave Accrual, Salary Hike, Overtime Pay |
| School | GPA Calculator, Attendance %, Exam Grade, School Fee |
| SaaS | MVP Cost Estimator, Churn Rate, Customer LTV, MRR Growth Simulator, Build vs Buy, SaaS Pricing, SaaS Runway |
| Sales | Sales Pipeline, Cold Email ROI, Meeting Cost, Freelance Rate, Sales Commission, CAC, Lead Response Time, Invoice Generator |
| Business | Business Name Generator, Time Zone Planner, Project Timeline, Sprint Velocity, Custom Software ROI, Equity Dilution, Job Description Generator, Interview Question Generator, Tech Stack Recommender |
| Image | PNG→WebP, JPG→WebP, PNG→AVIF, JPG→AVIF |

Adding a new tool requires changes to 4 files:
1. `data/free-tools.ts` — add `FreeTool` entry (slug, SEO metadata, FAQ, howToUse, etc.)
2. `components/free-tools/<ToolName>.tsx` — client component with `'use client'`
3. `components/free-tools/ToolRenderer.tsx` — add to `COMPONENT_MAP`
4. `app/sitemap.ts` — add URL entry
