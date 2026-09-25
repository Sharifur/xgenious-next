import type { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/ui/DownloadButton';
import BookingCTA from '@/components/sections/BookingCTA';
import ScreenshotGallery from '@/components/ui/ScreenshotGallery';

const BASE_URL = 'https://xgenious.com';
const COLOR = '#4f46e5';
const LIGHT_COLOR = '#eef2ff';
const GITHUB_URL = 'https://github.com/XgeniousLLC/geniusBooks/archive/refs/tags/v1.0.0.zip';
const LICENSE_UUID = 'genius-books-uuid-replace-with-real';
const DEMO_URL = 'https://genius-books.xgenious.com/portal/login';
const DOCS_URL = 'https://genious-books-docs.example.com';

export const metadata: Metadata = {
  title: 'Free Open Source Accounting Software: Laravel 13 + React 19',
  description:
    'Download free self-hosted accounting SaaS. Multi-tenant, invoices, payments, expenses, ledger & reports. 10 finance integrations, REST API. MIT licensed.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `${BASE_URL}/free-software/genius-books` },
  openGraph: {
    title: 'Free Open Source Accounting Software: Laravel 13 + React 19 | Xgenious',
    description:
      'Complete accounting SaaS with invoices, payments, expenses, bank reconciliation and reports. Free download, MIT license, self-hosted.',
    url: `${BASE_URL}/free-software/genius-books`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Open Source Accounting Software: Laravel 13 + React 19',
    description: 'Download free self-hosted accounting SaaS. Multi-tenant, API + 10 integrations.',
    images: ['/og-image.png'],
  },
  keywords: [
    'free open source accounting software',
    'self hosted accounting system',
    'laravel accounting open source',
    'free invoicing software',
    'free bookkeeping software',
    'multi-tenant accounting SaaS',
    'invoice management system free download',
    'expense management software free',
    'accounting software with api',
    'free accounting software with xero integration',
    'quickbooks alternative self hosted',
    'open source accounting MIT license',
  ],
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Genius Books',
  operatingSystem: 'Linux, Windows, macOS',
  applicationCategory: 'BusinessApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Free self-hosted multi-tenant accounting SaaS — invoices, payments, expenses, bank reconciliation, chart of accounts, ledger & reports. 10 finance integrations, REST API.',
  url: `${BASE_URL}/free-software/genius-books`,
  author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
  license: 'https://opensource.org/licenses/MIT',
  programmingLanguage: ['PHP', 'TypeScript'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Genius Books really free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. MIT licensed, no paid tier, unlimited businesses, customers and invoices.' } },
    { '@type': 'Question', name: 'Can I self-host on shared hosting?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. PHP 8.4 + MySQL, works on cPanel. Cron handles queue and scheduler via --stop-when-empty.' } },
    { '@type': 'Question', name: 'Does it support multiple companies?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Multi-tenant with company_id global scope, company switcher and per-company RBAC.' } },
    { '@type': 'Question', name: 'Can I sync with Xero or QuickBooks?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. 10 providers (Xero, QuickBooks, FreshBooks, HubSpot, Zoho, Wave, Sage, NetSuite, MYOB, Kashoo) with two-way push/pull and audit logs.' } },
    { '@type': 'Question', name: 'Is there an API?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Bearer token per company at /api/v1 — customers, invoices, payments, expenses, transactions. See API documentation.' } },
    { '@type': 'Question', name: 'How do I update?', acceptedAnswer: { '@type': 'Answer', text: 'git pull, composer install, npm run build, php artisan migrate — atomic, no data loss.' } },
  ],
};

const MODULES = [
  { name: 'Multi-Tenancy & Onboarding', features: ['Unlimited businesses, company_id global scope', '3-step wizard: business, currency/FY, tax/invoice', 'Company switcher + New business', 'Seeded chart/categories/templates', 'Spatie team_id = company_id'] },
  { name: 'Customers', features: ['CRUD + tax ID, billing/shipping, payment terms', 'Search/filter Active/Archived + bulk', 'CSV import all-or-nothing, duplicate skip', 'Profile balances + statement + opening balance (ledger)', 'Recent invoices/payments'] },
  { name: 'Products & Services', features: ['SKU unique per company, product/service, unit price (minor units)', 'Category, tax rate, status', 'Search/filter + bulk', 'CSV import', 'Reusable in invoice/quote lines'] },
  { name: 'Quotes (Estimates)', features: ['Same engine as invoices', 'Draft→Sent→Accepted/Declined/Expired', 'Convert to draft invoice (new number)', 'Valid-until tracking'] },
  { name: 'Invoices — Authoritative Engine', features: ['InvoiceCalculator: line→invoice discount→tax (inclusive/exclusive)', 'Statuses: Draft/Sent/Viewed/Partial/Paid/Overdue/Cancelled', 'Edit draft only, duplicate, cancel/void (never delete sent)', 'Signed public link + PDF, reminders (due/overdue), recurring'] },
  { name: 'Payments & Credit', features: ['Partial/over/multi-invoice, unapplied credit, allocations', 'Idempotent via idempotency_key', 'Void with reversal + recompute, receipt email', 'Credit notes + refund via account'] },
  { name: 'Expenses & Vendors', features: ['8 default + custom categories, vendor CRUD', 'Amount gross + tax_amount, recurring, notes', 'Receipt PDF/JPG/PNG private disk, authorized download', 'Recurring scheduler, ledger out-posting, void reversal'] },
  { name: 'Bank / Cash & Reconciliation', features: ['Opening balance ledger-posted, derived current + running history', 'CSV import date/description/amount/reference', 'Auto-match ±3 days, manual match/unmatch, create tx, reconcile'] },
  { name: 'Chart of Accounts & Ledger', features: ['Assets/Liabilities/Equity/Revenue/Expenses hierarchy', 'LedgerPostingService single writer (transfer_group UUID, reversals)', 'Transaction list filters + drill-through', 'Manual: Transfer, Adjustment, Direct income, void/reverse'] },
  { name: 'Reports & Statements', features: ['P&L, Income, Expenses, Receivables (aging), Tax Summary, General Ledger, Customer statement', 'FY-aware date range, CSV/PDF export'] },
  { name: 'API & Integrations', features: ['API apps gb_* SHA256, one-time show, expiry, revoke, company-scoped Bearer /api/v1', 'REST: customers/products/quotes/invoices/payments/expenses/vendors/transactions', '10 SaaS two-way sync: Xero/QuickBooks/FreshBooks/HubSpot/Zoho/Wave/Sage/NetSuite/MYOB/Kashoo'] },
  { name: 'Dashboard, Settings, Team', features: ['KPI revenue/expenses/outstanding/overdue/net, 6-month charts', 'Settings: business/currency, invoice, tax, email/SMS/Stripe, export ZIP', '3 roles owner/accountant/staff + last-owner protection, search, admin console'] },
];

const TECH_STACK = [
  { name: 'Laravel 13', role: 'PHP backend, routing, ORM, queues' },
  { name: 'React 19', role: 'TypeScript + Inertia v3 SPA' },
  { name: 'Tailwind CSS 4', role: 'Utility styling' },
  { name: 'MySQL 8 / SQLite', role: 'Prod / local' },
  { name: 'Spatie Permission', role: 'RBAC teams = company' },
  { name: 'Barryvdh DomPDF', role: 'Invoice PDFs' },
  { name: 'Vite 7', role: 'Build' },
  { name: 'Stripe Gateway', role: 'Checkout + webhook' },
];

const SERVER_REQUIREMENTS = [
  { label: 'PHP', value: '8.4+' },
  { label: 'Database', value: 'MySQL 8.0+ / MariaDB 10.4+' },
  { label: 'Composer', value: '2.x' },
  { label: 'Node.js', value: '20+ (build)' },
  { label: 'Web Server', value: 'Nginx / Apache' },
];

const ROLES = [
  { role: 'Owner', desc: 'Full: settings, team, export, all modules' },
  { role: 'Accountant', desc: 'Customers/products/invoices/payments/expenses/accounts/reports — no settings/team' },
  { role: 'Staff', desc: 'Customers/products/invoices/payments/expenses — no void/accounts/reports/settings' },
];

const FAQ = [
  { q: 'Is Genius Books really free?', a: 'Yes. MIT licensed, no paid tier, unlimited businesses, customers and invoices.' },
  { q: 'Can I self-host on shared hosting?', a: 'Yes. PHP 8.4 + MySQL, cron for queue with --stop-when-empty. Build assets locally if Node missing.' },
  { q: 'Does it support multiple companies?', a: 'Yes. Multi-tenant with company_id scope, global scope + cross-tenant guard, company switcher.' },
  { q: 'Can I sync with Xero or QuickBooks?', a: 'Yes. 10 providers two-way push/pull via Settings → Integrations, encrypted tokens, sync logs.' },
  { q: 'Is there an API?', a: 'Yes. Create Bearer token at Settings → API applications, use Authorization: Bearer gb_* for /api/v1.' },
  { q: 'How do I update?', a: 'git pull, composer install, npm run build, php artisan migrate, queue:restart — zero downtime via symlink.' },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill={color} fillOpacity="0.1" />
      <path d="M6 10l3 3 5-5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function GeniusBooksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="pt-[120px] pb-16 sm:pt-[160px] sm:pb-24" style={{ background: 'linear-gradient(180deg, #eef2ff 0%, #f5f6ea 100%)' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col items-center text-center gap-6 max-w-[860px] mx-auto">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]"><span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />Free & Open Source</span>
              <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">MIT License</span>
              <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">Laravel 13 · React 19</span>
            </div>
            <h1 className="text-[36px] leading-[44px] sm:text-[54px] sm:leading-[62px] lg:text-[66px] lg:leading-[74px] font-semibold text-[#0F1112]">Complete Open-Source Accounting SaaS: Free Forever</h1>
            <p className="text-[#484848] text-[16px] sm:text-[18px] leading-8 max-w-[680px]">Manage customers, invoices, payments, expenses and reports in one self-hosted platform. Multi-tenant, audited ledger, 10 finance integrations and a full REST API. Built with <strong>Laravel 13</strong> and <strong>React 19</strong>. No per-seat pricing.</p>
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
              <DownloadButton productName="Genius Books" productColor={COLOR} productLightColor={LIGHT_COLOR} githubUrl={GITHUB_URL} licenseUuid={LICENSE_UUID} label="Download Free, No Account Needed" buttonColor="#4f46e5" className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:-translate-y-0.5" />
              {DEMO_URL && <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white border border-[#E5E7EC] text-[#0F1112] font-semibold text-[15px] rounded-full px-8 py-4 hover:border-[#0F1112]">Try Live Demo</a>}
              {DOCS_URL && <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white border border-[#E5E7EC] text-[#0F1112] font-semibold text-[15px] rounded-full px-8 py-4 hover:border-[#0F1112]">Documentation</a>}
            </div>
            <p className="text-[13px] text-[#6b7280]">MIT License · No account required · No credit card · Unlimited businesses</p>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white border-b border-[#E5E7EC]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-[900px] mx-auto text-center">
            {[{ value: '12+', label: 'Modules' }, { value: '3', label: 'Roles' }, { value: '10', label: 'Integrations' }, { value: 'PHP 8.4+', label: 'Backend' }, { value: 'React 19', label: 'Frontend' }, { value: 'Free', label: 'Forever' }].map((s) => (
              <div key={s.label}><p className="text-[28px] font-bold" style={{ color: COLOR }}>{s.value}</p><p className="text-[12px] text-[#6b7280] font-medium mt-0.5">{s.label}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-12"><span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4" style={{ background: LIGHT_COLOR, color: COLOR }}>Screenshots</span><h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">See It in Action</h2><p className="text-[#484848] text-[15px] mt-3 max-w-[500px] mx-auto leading-7">Real screenshots — every screen is included free.</p></div>
          <ScreenshotGallery demoUrl={DEMO_URL} screenshots={[
            { src: '/site-images/free-software/genius-books/dashboard.png', alt: 'Genius Books: Dashboard KPIs', title: 'Dashboard', description: 'Revenue, expenses, outstanding, overdue, net + 6-month charts' },
            { src: '/site-images/free-software/genius-books/invoices.png', alt: 'Genius Books: Invoices list', title: 'Invoices', description: 'Filters, status badges, overdue derivation' },
            { src: '/site-images/free-software/genius-books/invoice-form.png', alt: 'Genius Books: Invoice form', title: 'Invoice Builder', description: 'Line discounts, inclusive/exclusive tax, live totals' },
            { src: '/site-images/free-software/genius-books/payments.png', alt: 'Genius Books: Payments', title: 'Payments', description: 'Multi-invoice allocation, credit, void reversal' },
            { src: '/site-images/free-software/genius-books/expenses.png', alt: 'Genius Books: Expenses', title: 'Expenses', description: 'Categories, vendors, receipts, recurring' },
            { src: '/site-images/free-software/genius-books/reports.png', alt: 'Genius Books: Reports', title: 'Reports', description: 'P&L, receivables (aging), tax, ledger, statements' },
          ]} />
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-white"><div className="container-page px-4 sm:px-6 lg:px-0 max-w-[820px] mx-auto"><h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112] mb-5 text-center">What is Genius Books?</h2><p className="text-[16px] text-[#484848] leading-8 mb-5">Genius Books is a free, open-source accounting SaaS built with <strong>Laravel 13</strong>, <strong>React 19</strong> and <strong>Inertia.js</strong>. Each business gets an isolated workspace covering the full flow: Business → Customers → Products → Quotes → Invoices → Payments → Expenses → Transactions → Reports.</p><p className="text-[16px] text-[#484848] leading-8 mb-5">All money moves through <strong>LedgerPostingService</strong> (the only writer) — integer minor units, void-with-reason, derived balances. 10 finance integrations provide two-way sync.</p><p className="text-[16px] text-[#484848] leading-8">MIT licensed. Deploy on any VPS or cPanel, fork and white-label, no licensing costs.</p></div></section>
      <section className="py-16 sm:py-20 bg-[#f9fafb]"><div className="container-page px-4 sm:px-6 lg:px-0"><div className="text-center mb-12"><h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">12 Modules. Full Accounting.</h2></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">{MODULES.map((mod) => (<div key={mod.name} className="bg-white rounded-2xl border border-[#E5E7EC] p-6"><div className="flex items-center gap-3 mb-4"><div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: LIGHT_COLOR }}><svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="10" cy="10" r="9" stroke={COLOR} strokeWidth="1.4" /></svg></div><h3 className="text-[14px] font-semibold text-[#0F1112] leading-tight">{mod.name}</h3></div><ul className="flex flex-col gap-2">{mod.features.map((f) => (<li key={f} className="flex items-start gap-2 text-[13px] text-[#484848] leading-5"><CheckIcon color={COLOR} />{f}</li>))}</ul></div>))}</div></div></section>
      <section className="py-16 sm:py-20 bg-white"><div className="container-page px-4 sm:px-6 lg:px-0"><div className="text-center mb-12"><h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">Built on Modern Stack</h2></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] mx-auto">{TECH_STACK.map((t) => (<div key={t.name} className="rounded-xl border border-[#E5E7EC] bg-white p-5 flex items-start gap-3"><div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: LIGHT_COLOR }}><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="3" stroke={COLOR} strokeWidth="1.5" /><path d="M7 10l2 2 4-4" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div><p className="text-[13px] font-semibold text-[#0F1112]">{t.name}</p><p className="text-[12px] text-[#6b7280] mt-0.5 leading-4">{t.role}</p></div></div>))}</div></div></section>
      <section className="py-16 sm:py-20 bg-[#0F1112]"><div className="container-page px-4 sm:px-6 lg:px-0"><div className="max-w-[820px] mx-auto"><div className="text-center mb-10"><h2 className="text-[28px] sm:text-[36px] font-semibold text-white">Server Requirements</h2><p className="text-[#9ca3af] text-[15px] mt-3 leading-7">Runs on any standard PHP hosting. No Docker required.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{SERVER_REQUIREMENTS.map((r) => (<div key={r.label} className="flex items-center justify-between rounded-xl border border-white/10 px-5 py-4"><span className="text-[14px] text-[#9ca3af] font-medium">{r.label}</span><span className="text-[14px] text-white font-semibold">{r.value}</span></div>))}</div></div></div></section>
      <BookingCTA />
      <section className="py-16 sm:py-20 bg-[#f9fafb]"><div className="container-page px-4 sm:px-6 lg:px-0"><div className="grid grid-cols-12"><div className="col-span-12 lg:col-span-8 lg:col-start-3"><h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112] text-center mb-10">Frequently Asked Questions</h2><div className="flex flex-col gap-4">{FAQ.map((item) => (<div key={item.q} className="rounded-2xl border border-[#E5E7EC] bg-white p-6"><h3 className="text-[15px] font-semibold text-[#0F1112] mb-2">{item.q}</h3><p className="text-[14px] text-[#484848] leading-6">{item.a}</p></div>))}</div></div></div></div></section>
      <section className="py-16 sm:py-20 relative overflow-hidden">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/cta-bg.jpg" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" /><div className="absolute inset-0 bg-black/50" /><div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-6 max-w-[640px] mx-auto relative z-10"><h2 className="text-[28px] sm:text-[38px] font-semibold text-white leading-tight">Download the Free Accounting Software</h2><p className="text-[#d1d5db] text-[15px] leading-7">No account. No credit card. No per-seat fees. MIT license. Get the download link instantly.</p><DownloadButton productName="Genius Books" productColor={COLOR} productLightColor={LIGHT_COLOR} githubUrl={GITHUB_URL} licenseUuid={LICENSE_UUID} label="Get Free Download, No Credit Card" buttonColor="#4f46e5" /><p className="text-[13px] text-[#d1d5db]">Need help? <Link href="/contact" className="text-white underline underline-offset-2 hover:text-[#4f46e5] transition-colors">Contact Xgenious for installation service</Link></p></div></section>
    </>
  );
}
