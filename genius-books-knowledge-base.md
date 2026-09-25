# Genius Books — Knowledge Base, Competitor Research & SEO Keywords

Free, self-hosted, multi-tenant accounting software built by Xgenious (Laravel 13 + React 19, MIT).
Landing page: `/free-software/genius-books`. Live demo: https://genius-book.xgenious.com/portal/login.
Source: https://github.com/XgeniousLLC/geniusBooks.

---

## 1. Positioning (one line)

The only **MIT-licensed, self-hosted, multi-tenant accounting platform** with **unlimited invoices,
unlimited businesses, a full REST API and 10 two-way finance integrations** — for the price of $0.

Primary promise: *"A complete open-source accounting system you can host on your own server — no
per-seat pricing, no invoice caps, no feature locks."*

---

## 2. Competitor Research — "free accounting software" category

### 2.1 Head-to-head landscape

| Competitor | Free model | Hosting | Multi-company | Invoices | API | Gaps Genius Books fills |
|---|---|---|---|---|---|---|
| **Akaunting** | Open-source free; paid app marketplace | Self-host + paid cloud | Multi (company switcher) | Limited on free | Paid app | No true multi-tenant SaaS, features behind paid apps, smaller community |
| **Wave** | Free cloud accounting (H&R Block) | Vendor cloud only | One business | Unlimited | No public API | No self-host, no API, paid payroll/payments, data not portable |
| **Zoho Books** | Free tier < $50k revenue, 1 user | Vendor cloud | Paid | ~1,000/yr on free | Paid/partner | Revenue/seat caps, no self-host, upsell pressure |
| **GnuCash** | Free desktop, double-entry | Desktop only | Multiple files | Desktop | No | No web/API/cloud, dated UI, steep learning curve |
| **Manager.io** | Free desktop + server (source-available, not OSS) | Self-host | Multiple | Unlimited | No | FSL license (not open source), limited integrations, no REST API |
| **Odoo Community** | Open-source ERP | Self-host | Multi-company | Unlimited | Yes (heavy) | Accounting is one of many apps; complex setup; enterprise upsell |
| **ZipBooks** | Free starter | Vendor cloud | One | Unlimited | No | Paid features, no self-host, no API |
| **Invoice Ninja** | Free self-hosted **invoicing** | Self-host | Multi | Unlimited | Yes | Invoicing only — not a ledger/P&L/receivables accounting suite |
| **Firefly III** | Free self-hosted | Self-host | — | — | Yes | Personal finance manager, not business accounting/invoicing |
| **QuickBooks / Xero / FreshBooks / Sage** | Paid leaders (no free tier) | Vendor cloud | Paid | Capped by plan | Paid | Ongoing subscription, per-company fees, data lock-in |

### 2.2 The recurring weaknesses we attack

1. **Open-core paywalls** — free tier exists but the useful parts (API, multi-company, reports,
   apps) are paid. Genius Books ships everything under MIT.
2. **Vendor-cloud lock-in** — Wave/Zoho/QuickBooks keep the data; you cannot self-host.
   Genius Books is self-hosted; export CSV/PDF anytime.
3. **Single-company assumption** — freelancer tools assume one business per login. Genius Books is
   multi-tenant: accountants and agencies serve many clients from one install.
4. **Caps** — invoice caps, revenue caps, user/seat limits. Genius Books has none.
5. **No API for free** — automation requires a paid plan or partner app. Genius Books issues
   company-scoped API tokens on the free tier.
6. **Weak/no integrations on free** — Genius Books includes 10 two-way finance integrations.
7. **Not a real ledger** — invoicing-only tools (Invoice Ninja) don't give receivables aging, tax
   summary or a general ledger. Genius Books does.

### 2.3 Genius Books differentiators (use in copy and comparison tables)

- MIT licensed — fork, white-label, sell services, zero licensing cost.
- True multi-tenancy — unlimited isolated businesses on one install (`company_id` scope).
- Authoritative server-side invoice calculator (inclusive/exclusive tax, line + invoice discounts).
- Single auditable ledger — integer minor units, void-with-reason, derived balances.
- Bank reconciliation with CSV import and auto-match.
- Receivables aging, P&L, tax summary, general ledger, customer statements.
- Full REST API (`/api/v1`) with company-scoped Bearer tokens.
- 10 two-way finance integrations (Xero, QuickBooks, FreshBooks, HubSpot, Zoho, Wave, Sage,
  NetSuite, MYOB, Kashoo).
- Roles + last-owner protection; platform admin console for operators.
- Self-host on VPS, cPanel or any PHP host — no Docker required.

---

## 3. Keyword Research — free accounting software category

Volumes are US monthly Google figures (Ahrefs/Seoluma-class data). Competition in parentheses.

### 3.1 Primary keywords (target on the landing page)

| Keyword | Volume/mo | Comp. | Where to place |
|---|---|---|---|
| free accounting software | 3,600 | medium | H1, title, meta, hero |
| free accounting software for small business | 5,400 | high | H2, intro paragraph |
| open source accounting software | ~2,400 | medium | H1/H2, badges, FAQ |
| self hosted accounting software | ~1,600 | medium | H2, feature bullets |
| free invoicing software | ~4,900 | medium | Module section, meta |
| free bookkeeping software | 1,900 | high | FAQ, comparison |
| accounting software | 74,000 | low | body (broad) |
| accounting software for small business | 22,200 | medium | body |
| cloud accounting software | 368,000 | low | supporting body |

### 3.2 "Alternative to" keywords (high commercial intent)

| Keyword | Intent | Placement |
|---|---|---|
| quickbooks alternative | commercial | comparison section, FAQ |
| xero alternative | commercial | comparison section |
| wave accounting alternative | commercial | comparison + integrations |
| zoho books alternative | commercial | comparison |
| akaunting alternative | commercial | comparison |
| freshbooks alternative | commercial | comparison |

### 3.3 Long-tail / feature keywords (supporting sections)

- free multi-tenant accounting software
- laravel accounting software / laravel accounting open source
- accounting software with api / free accounting api
- free invoice management software
- free expense tracking software
- bank reconciliation software free
- free accounting software with xero integration
- free accounting software with quickbooks integration
- download accounting software source code
- MIT licensed accounting software
- open source invoicing and accounting
- free accounting software no invoice limit
- self hosted quickbooks alternative

### 3.4 Competitor/brand keywords (informational capture)

avaunting, wave accounting, manager.io, gnucash, odoo accounting, invoice ninja, zipbooks,
firefly iii, zoho invoice, freeagent.

---

## 4. On-page SEO recommendations (already reflected in `page.tsx`)

- **Title**: `Free Open Source Accounting Software: Laravel 13 + React 19`
- **Meta description**: includes "multi-tenant", "invoices, payments, expenses, bank reconciliation,
  ledger & reports", "10 finance integrations", "REST API", "MIT".
- **H1**: `Free Open-Source Accounting Software: Self-Hosted Forever`.
- **H2s**: See It in Action · What is Genius Books? · 12 Modules · 10 Finance Platforms Two-Way Sync ·
  A Full REST API, Included · How Genius Books Compares · Roles · Tech stack · Server Requirements · FAQ.
- **Schema**: `SoftwareApplication` (price 0, MIT, author Xgenious) + `FAQPage` (8 Q&As).
- **Internal links**: `/free-software` hub, `/contact`, `/free-software/genius-crm` (cross-sell).
- **External links**: GitHub source, live demo.
- **Images**: 9 real product screenshots with descriptive alt text under
  `public/site-images/free-software/genius-books/`.

---

## 5. Content blocks available for reuse

- Stats: 12+ modules · 3 roles · 10 integrations · unlimited businesses · PHP 8.4+ · MIT.
- Comparison table rows (license, hosting, businesses per install, invoices, REST API,
  integrations, data ownership).
- 10 integration cards with API base and synced entities.
- Module list (12) with 4–5 bullets each.
- FAQ (8).

---

## 6. Assets

Screenshots (1440×, full-page, from the live demo, Nova Retail Ltd company):

| File | Page |
|---|---|
| `dashboard.png` | Financial dashboard (KPIs, charts) |
| `invoices.png` | Invoice list with statuses |
| `invoice-builder.png` | New invoice form (lines, discounts, tax, totals) |
| `payments.png` | Payments & allocations |
| `expenses.png` | Expenses & vendors |
| `transactions.png` | Unified ledger |
| `reports.png` | Accounts receivable + aging |
| `integrations.png` | 10 finance integrations |
| `api.png` | API application tokens |

---

## 7. Demo & download

- **Live demo**: https://genius-book.xgenious.com/portal/login
- **Download**: https://github.com/XgeniousLLC/geniusBooks/archive/refs/tags/v1.0.0.zip
- **License UUID**: `56704006-b4c5-4fbb-9b82-0b95d0437014`
