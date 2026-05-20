# Free Tools Sprint — xgenious.com/free-tools

**Route:** `/free-tools` (index) + `/free-tools/[slug]` (per tool)  
**Rule:** No signup. No email. No registration. Tool works immediately in browser.  
**SEO standard:** Every page must pass the checklist in `SEO-SKILLS.md` before marking Live.

---

## Progress Legend
- ⬜ Not started
- 🔄 In progress
- ✅ Done

---

## Infrastructure

| Task | Status |
|------|--------|
| `data/free-tools.ts` — registry + all tool content | ✅ |
| `app/free-tools/page.tsx` — list/index page | ✅ |
| `app/free-tools/[slug]/page.tsx` — dynamic tool page | ✅ |
| `data/nav.ts` — Free Tools nav link added | ✅ |
| `app/sitemap.ts` — all 43 tool URLs added | ✅ |
| `public/llms.txt` — free tools section added | ⬜ |

### Image Tools — Additional Infrastructure Required

| Task | Status | Notes |
|------|--------|-------|
| Install `sharp` package | ⬜ | Server-side image conversion |
| Install `@aws-sdk/client-s3` | ⬜ | Cloudflare R2 is S3-compatible |
| `app/api/image-convert/route.ts` — upload + convert + store to R2 | ✅ | Accepts file + target format, returns R2 download URL |
| `app/api/cron/cleanup-images/route.ts` — delete R2 objects > 24h old | ✅ | Called by cron daily |
| `vercel.json` or `app/api/cron/` cron config | ⬜ | Daily cleanup at 02:00 UTC |
| Env vars: `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET_NAME`, `R2_PUBLIC_URL`, `CRON_SECRET` | ⬜ | Add to Coolify + `.env.local` |

---

## Image Converter Tools (Server-Side — Cloudflare R2)

> **Architecture:** User uploads image → Next.js API route converts with `sharp` → stores in R2 → returns public download URL valid for 24h → daily cron deletes objects older than 24h.  
> **No account required.** File deleted automatically next day.  
> **Target keywords:** "png to webp converter free", "jpg to webp online", "convert png to avif", "jpg to avif converter"

| # | Tool | Slug | Component | API Route | SEO Audit | Live |
|---|------|------|-----------|-----------|-----------|------|
| T1 | PNG to WebP Converter | `png-to-webp` | ✅ | ✅ | ⬜ | ⬜ |
| T2 | JPG to WebP Converter | `jpg-to-webp` | ✅ | ✅ | ⬜ | ⬜ |
| T3 | PNG to AVIF Converter | `png-to-avif` | ✅ | ✅ | ⬜ | ⬜ |
| T4 | JPG to AVIF Converter | `jpg-to-avif` | ✅ | ✅ | ⬜ | ⬜ |

### Shared API design (`/api/image-convert`)

```
POST /api/image-convert
Content-Type: multipart/form-data

Body:
  file: File          (PNG or JPG, max 10MB)
  format: 'webp' | 'avif'
  quality: number     (1–100, default 80)

Response:
  { url: string, filename: string, originalSize: number, convertedSize: number, savings: string }
```

### Cron job (`/api/cron/cleanup-images`)

- Runs daily at 02:00 UTC
- Lists all R2 objects with metadata `uploadedAt`
- Deletes objects where `uploadedAt` < now − 24h
- Protected by `Authorization: Bearer ${CRON_SECRET}` header
- Register in `vercel.json`: `{ "crons": [{ "path": "/api/cron/cleanup-images", "schedule": "0 2 * * *" }] }`

---

## Tier 1 — Developer & High-Traffic Tools

| # | Tool | Slug | Component | SEO Audit | Live |
|---|------|------|-----------|-----------|------|
| 1 | JSON Formatter & Validator | `json-formatter` | ✅ | ⬜ | ⬜ |
| 2 | Password Generator | `password-generator` | ✅ | ⬜ | ⬜ |
| 3 | Base64 Encoder / Decoder | `base64-encoder-decoder` | ✅ | ⬜ | ⬜ |
| 4 | JWT Decoder | `jwt-decoder` | ✅ | ⬜ | ⬜ |
| 5 | Regex Tester | `regex-tester` | ✅ | ⬜ | ⬜ |
| 6 | GPA Calculator | `gpa-calculator` | ✅ | ⬜ | ⬜ |
| 7 | Payroll Breakdown Calculator | `payroll-breakdown-calculator` | ✅ | ⬜ | ⬜ |
| 8 | Invoice Generator | `invoice-generator` | ✅ | ⬜ | ⬜ |

---

## Tier 2 — Business & Conversion Tools

| # | Tool | Slug | Component | SEO Audit | Live |
|---|------|------|-----------|-----------|------|
| 9 | MVP Cost Estimator | `mvp-cost-estimator` | ✅ | ⬜ | ⬜ |
| 10 | Build vs Buy Calculator | `build-vs-buy-calculator` | ✅ | ⬜ | ⬜ |
| 11 | Employee Total Cost Calculator | `employee-cost-calculator` | ✅ | ⬜ | ⬜ |
| 12 | Sales Pipeline Calculator | `sales-pipeline-calculator` | ✅ | ⬜ | ⬜ |
| 13 | Job Description Generator | `job-description-generator` | ✅ | ⬜ | ⬜ |
| 14 | Meeting Cost Calculator | `meeting-cost-calculator` | ✅ | ⬜ | ⬜ |
| 15 | Leave Accrual Calculator | `leave-accrual-calculator` | ✅ | ⬜ | ⬜ |

---

## Tier 3 — SaaS Metrics & Targeted Leads

| # | Tool | Slug | Component | SEO Audit | Live |
|---|------|------|-----------|-----------|------|
| 16 | Churn Rate Impact Calculator | `churn-rate-calculator` | ✅ | ⬜ | ⬜ |
| 17 | Customer LTV Calculator | `customer-ltv-calculator` | ✅ | ⬜ | ⬜ |
| 18 | MRR Growth Simulator | `mrr-growth-simulator` | ✅ | ⬜ | ⬜ |
| 19 | SaaS Pricing Calculator | `saas-pricing-calculator` | ✅ | ⬜ | ⬜ |
| 20 | SaaS Runway Calculator | `saas-runway-calculator` | ✅ | ⬜ | ⬜ |
| 21 | Freelance Rate Calculator | `freelance-rate-calculator` | ✅ | ⬜ | ⬜ |
| 22 | Sales Commission Calculator | `sales-commission-calculator` | ✅ | ⬜ | ⬜ |
| 23 | Startup Equity Dilution Calculator | `equity-dilution-calculator` | ✅ | ⬜ | ⬜ |

---

## Tier 4 — Remaining Tools

| # | Tool | Slug | Component | SEO Audit | Live |
|---|------|------|-----------|-----------|------|
| 24 | Cron Expression Builder | `cron-expression-builder` | ✅ | ⬜ | ⬜ |
| 25 | .env File Generator | `env-file-generator` | ✅ | ⬜ | ⬜ |
| 26 | SQL Formatter | `sql-formatter` | ✅ | ⬜ | ⬜ |
| 27 | .htaccess Generator | `htaccess-generator` | ✅ | ⬜ | ⬜ |
| 28 | Color Contrast Checker (WCAG) | `color-contrast-checker` | ✅ | ⬜ | ⬜ |
| 29 | Interview Question Generator | `interview-question-generator` | ✅ | ⬜ | ⬜ |
| 30 | Attendance Percentage Calculator | `attendance-percentage-calculator` | ✅ | ⬜ | ⬜ |
| 31 | School Fee Structure Calculator | `school-fee-calculator` | ✅ | ⬜ | ⬜ |
| 32 | Exam Grade Calculator | `exam-grade-calculator` | ✅ | ⬜ | ⬜ |
| 33 | Cold Email ROI Calculator | `cold-email-roi-calculator` | ✅ | ⬜ | ⬜ |
| 34 | Lead Response Time ROI | `lead-response-time-calculator` | ✅ | ⬜ | ⬜ |
| 35 | Salary Hike Calculator | `salary-hike-calculator` | ✅ | ⬜ | ⬜ |
| 36 | Overtime Pay Calculator | `overtime-pay-calculator` | ✅ | ⬜ | ⬜ |
| 37 | Custom Software ROI Calculator | `custom-software-roi-calculator` | ✅ | ⬜ | ⬜ |
| 38 | Project Timeline Estimator | `project-timeline-estimator` | ✅ | ⬜ | ⬜ |
| 39 | Sprint Velocity Calculator | `sprint-velocity-calculator` | ✅ | ⬜ | ⬜ |
| 40 | Customer Acquisition Cost Calculator | `cac-calculator` | ✅ | ⬜ | ⬜ |
| 41 | Time Zone Meeting Planner | `time-zone-meeting-planner` | ✅ | ⬜ | ⬜ |
| 42 | Business Name Generator | `business-name-generator` | ✅ | ⬜ | ⬜ |
| 43 | Tech Stack Recommender | `tech-stack-recommender` | ✅ | ⬜ | ⬜ |

---

## SEO Audit Checklist (apply to every tool page before marking Live)

From `SEO-SKILLS.md`:

- [ ] Canonical URL set
- [ ] metaTitle 50–60 chars, includes primary keyword
- [ ] metaDescription 120–155 chars, includes secondary keyword
- [ ] keywords array has 5–8 terms
- [ ] OG + Twitter meta complete
- [ ] SoftwareApplication JSON-LD present
- [ ] FAQPage JSON-LD with 5 Q&As
- [ ] H1 contains primary keyword
- [ ] 40–60 word definition block for AI snippet extraction
- [ ] Comparison table or structured list (AI SEO)
- [ ] 3-step "How to use" section
- [ ] 2–3 internal links (related tools + service page)
- [ ] 1–2 external links to authoritative sources
- [ ] No content gated behind email/login
- [ ] AI crawlers allowed (already in robots.ts)
- [ ] Page added to sitemap.ts

---

## Internal Link Map (free software ↔ tools)

| Software Page | Links to Tools |
|--------------|---------------|
| Genius HRM | employee-cost-calculator, leave-accrual-calculator, payroll-breakdown-calculator |
| Genius CRM | sales-pipeline-calculator, lead-response-time-calculator, cold-email-roi-calculator |
| Genius School | gpa-calculator, attendance-percentage-calculator, school-fee-calculator |

## Image Tools — Cross-linking

- All 4 image tool pages link to each other (png-to-webp ↔ jpg-to-webp ↔ png-to-avif ↔ jpg-to-avif)
- Target external authority links: `web.dev/learn/images/avif`, `developers.google.com/speed/webp`
- Each page has a "Why convert to [format]?" section explaining WebP/AVIF benefits for SEO/performance

## Remaining Tasks

- [ ] Install `sharp` + `@aws-sdk/client-s3` packages (for image tools to function)
- [ ] Add `vercel.json` with cron schedule for cleanup
- [ ] Set env vars in Coolify: `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET_NAME`, `R2_PUBLIC_URL`, `CRON_SECRET`
- [ ] Add internal links from free-software pages to related tools
- [ ] Update `public/llms.txt` with free tools section

## Total Tool Count: 47 (43 browser tools + 4 image converters)
