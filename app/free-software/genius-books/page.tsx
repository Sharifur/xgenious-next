import type { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/ui/DownloadButton';
import BookingCTA from '@/components/sections/BookingCTA';
import ScreenshotGallery from '@/components/ui/ScreenshotGallery';

const BASE_URL = 'https://xgenious.com';
const COLOR = '#4f46e5';
const LIGHT_COLOR = '#eef2ff';
const GITHUB_URL = 'https://github.com/XgeniousLLC/geniusBooks/archive/refs/tags/v1.0.0.zip';
const LICENSE_UUID = '56704006-b4c5-4fbb-9b82-0b95d0437014';
const DEMO_URL = 'https://genius-book.xgenious.com/portal/login';
const REPO_URL = 'https://github.com/XgeniousLLC/geniusBooks';

export const metadata: Metadata = {
  title: 'Free Open Source Accounting Software: Laravel 13 + React 19',
  description:
    'Download free self-hosted accounting software. Multi-tenant, invoices, payments, expenses, bank reconciliation, ledger & reports. 10 finance integrations (Xero, QuickBooks, HubSpot, FreshBooks), REST API. MIT licensed.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `${BASE_URL}/free-software/genius-books` },
  openGraph: {
    title: 'Free Open Source Accounting Software: Laravel 13 + React 19 | Xgenious',
    description:
      'Self-hosted QuickBooks/Xero alternative with unlimited invoices, unlimited businesses, full REST API and 10 two-way finance integrations. No per-seat fees, MIT licensed.',
    url: `${BASE_URL}/free-software/genius-books`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Open Source Accounting Software: Laravel 13 + React 19',
    description: 'Self-hosted accounting SaaS: invoices, payments, expenses, ledger, reports, API + 10 integrations. MIT licensed.',
    images: ['/og-image.png'],
  },
  keywords: [
    'free accounting software',
    'free accounting software for small business',
    'open source accounting software',
    'self hosted accounting software',
    'free invoicing software',
    'free bookkeeping software',
    'multi-tenant accounting saas',
    'laravel accounting software',
    'accounting software with api',
    'quickbooks alternative',
    'xero alternative',
    'wave accounting alternative',
    'zoho books alternative',
    'akaunting alternative',
    'free invoice management software',
    'free expense tracking software',
    'bank reconciliation software free',
    'free accounting software with xero integration',
    'download accounting software source code',
    'MIT licensed accounting software',
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
    'Free self-hosted multi-tenant accounting software — customers, quotes, invoices, payments, expenses, bank reconciliation, chart of accounts, ledger and reports. 10 finance integrations and a full REST API.',
  url: `${BASE_URL}/free-software/genius-books`,
  author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
  license: 'https://opensource.org/licenses/MIT',
  programmingLanguage: ['PHP', 'TypeScript'],
  sameAs: [REPO_URL],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Genius Books really free with no invoice limits?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. MIT licensed with no paid tier and no feature locks. Unlimited businesses, customers, invoices, payments and expenses. Every module in the public repository is free.' } },
    { '@type': 'Question', name: 'Is it a good QuickBooks, Xero or Wave alternative?', acceptedAnswer: { '@type': 'Answer', text: 'Genius Books covers the same core workflows (invoicing, payments, expenses, bank reconciliation, chart of accounts, P&L and receivables) and, unlike most cloud tools, it is self-hosted, multi-tenant and includes a full REST API at no cost.' } },
    { '@type': 'Question', name: 'Does it support multiple companies?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. It is built multi-tenant from the ground up: one installation can host unlimited businesses with strict company_id isolation, a company switcher and per-company roles (Owner, Accountant, Staff).' } },
    { '@type': 'Question', name: 'Can I sync with Xero, QuickBooks or HubSpot?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Ten finance platforms are supported for two-way push/pull sync: Xero, QuickBooks Online, FreshBooks, HubSpot, Zoho Books, Wave, Sage Business Cloud, Oracle NetSuite, MYOB and Kashoo. Tokens are encrypted and every sync is logged.' } },
    { '@type': 'Question', name: 'Is there an API for building integrations?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Create Bearer tokens under Settings → API applications and call /api/v1 for customers, products, quotes, invoices, payments, expenses, vendors and the ledger. Tokens are company-scoped and revocable.' } },
    { '@type': 'Question', name: 'Can I self-host on shared hosting or a VPS?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. PHP 8.4 + MySQL runs on any VPS (Nginx or Apache). Shared cPanel hosting works too — the queue runs from cron with --stop-when-empty. No Docker is required.' } },
    { '@type': 'Question', name: 'Can I modify the source code?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The full Laravel + React source is included under the MIT license. Modify, white-label, redistribute or build commercial products on top with no restrictions.' } },
    { '@type': 'Question', name: 'How do I upgrade when a new version is released?', acceptedAnswer: { '@type': 'Answer', text: 'Pull the latest code, run composer install and npm run build, then php artisan migrate. The project uses semantic versioning and ships migration guides per release.' } },
  ],
};

const MODULES = [
  {
    name: 'Multi-Tenancy & Onboarding',
    features: [
      'One install, unlimited businesses with strict company_id isolation',
      '3-step onboarding wizard: business, currency & financial year, tax & invoice numbering',
      'Company switcher for accountants managing several clients',
      'Auto-seeded chart of accounts, expense categories and email templates',
      'Cross-tenant guard blocks any read or write outside the active business',
    ],
  },
  {
    name: 'Customers',
    features: [
      'Full CRM-lite records: contact, tax ID, billing & shipping addresses, payment terms',
      'Search, status filters and bulk archive/activate',
      'CSV import with all-or-nothing validation and duplicate skipping',
      'Customer profile: invoiced, paid, credited, opening, outstanding and credit balance',
      'Statement export (CSV/PDF) and ledger-posted opening balances',
    ],
  },
  {
    name: 'Products & Services',
    features: [
      'SKU unique per company, product/service type, unit price, tax rate and category',
      'Search by name or SKU, filter by type/category/status, bulk actions',
      'CSV import with the same validation rules as customers',
      'Reusable line items across invoices and quotes',
    ],
  },
  {
    name: 'Quotes & Estimates',
    features: [
      'Same line-item, discount and tax engine as invoices',
      'Lifecycle: Draft → Sent → Accepted / Declined, auto-Expired past valid-until',
      'One-click Convert to a draft invoice with a fresh number',
      'Keep your pipeline moving without re-entering data',
    ],
  },
  {
    name: 'Invoices — Authoritative Engine',
    features: [
      'Server-side InvoiceCalculator: line subtotal → discounts → per-line tax (inclusive or exclusive)',
      'Statuses: Draft, Sent, Viewed, Partially paid, Paid, Overdue (derived) and Cancelled',
      'Edit drafts only; sent invoices are immutable, cancelled never deleted',
      'Signed public view + PDF, email delivery and queued reminders',
      'Recurring invoices (weekly/monthly/yearly) with atomic per-company numbering',
    ],
  },
  {
    name: 'Payments & Credit',
    features: [
      'Partial, over- and multi-invoice settlement with payment_allocations',
      'Unapplied credit becomes visible customer credit',
      'Idempotent recording protects against double-submits',
      'Void with automatic ledger reversal and invoice recompute',
      'Credit notes with optional refund out of a chosen bank account',
    ],
  },
  {
    name: 'Expenses & Vendors',
    features: [
      '12 default categories plus unlimited custom categories',
      'Vendor directory with address and tax ID; delete guarded when in use',
      'Amount plus included tax, description, reference and notes',
      'Receipt attachments (PDF/JPG/PNG) stored privately with authorized downloads',
      'Recurring expenses generated on schedule and posted to the ledger',
    ],
  },
  {
    name: 'Bank Accounts & Reconciliation',
    features: [
      'Bank, cash and other accounts with ledger-derived running balances',
      'Import bank statements via CSV (date, description, amount, reference)',
      'Automatic matching by amount within a few days, plus manual match/unmatch',
      'Create a transaction straight from an unmatched line',
      'Reconcile to lock lines — your books always agree with the bank',
    ],
  },
  {
    name: 'Chart of Accounts & Ledger',
    features: [
      'Assets, Liabilities, Equity, Revenue and Expenses with parent/child hierarchy',
      'LedgerPostingService is the single writer for every money movement',
      'Paired transfers and counter-entry reversals keep history intact',
      'Unified transaction list with type, direction, account, date and text filters',
      'Manual transfers, adjustments and direct income posting',
    ],
  },
  {
    name: 'Reports & Statements',
    features: [
      'Profit & Loss, Income by customer/month and Expenses by category/vendor',
      'Accounts Receivable with aging buckets (current, 1–30, 31–60, 61–90, 90+)',
      'Tax Summary (collected, paid, taxable) and General Ledger with closing balances',
      'Customer statements with opening/closing balance',
      'Financial-year aware ranges with CSV and PDF export on every report',
    ],
  },
  {
    name: 'REST API & Developer Access',
    features: [
      'Owner-issued Bearer tokens (gb_*, SHA-256 hashed, one-time reveal, optional expiry)',
      'Company-scoped /api/v1 endpoints for customers, products, quotes, invoices, payments, expenses, vendors and transactions',
      'Paginated JSON responses with per_page up to 100',
      'Revoke instantly; last_used_at audit trail',
      'Same ledger-backed services as the UI — integrations cannot bypass the rules',
    ],
  },
  {
    name: 'Dashboard, Settings & Team',
    features: [
      'Dashboard KPIs: revenue, expenses, outstanding, overdue and net income',
      'Revenue vs expenses and revenue trend charts with expense breakdown',
      'Owner/Accountant/Staff roles with last-owner protection and server-side gates',
      'Business, invoice, tax, email and SMS settings, plus Stripe online payments',
      'ZIP data export and a platform admin console for operators',
    ],
  },
];

const INTEGRATIONS = [
  {
    name: 'Xero',
    api: 'api.xero.com/api.xro/2.0',
    entities: 'Contacts, invoices, payments, chart of accounts',
    note: 'Keep Xero and Genius Books in step in both directions.',
  },
  {
    name: 'QuickBooks Online',
    api: 'quickbooks.api.intuit.com/v3',
    entities: 'Customers, invoices, payments, accounts',
    note: 'Two-way sync with the world’s most-used small-business accounting tool.',
  },
  {
    name: 'FreshBooks',
    api: 'api.freshbooks.com',
    entities: 'Clients, invoices, payments',
    note: 'Ideal for service businesses already invoicing in FreshBooks.',
  },
  {
    name: 'HubSpot',
    api: 'api.hubapi.com',
    entities: 'Contacts, deals',
    note: 'Push billing customers and pull CRM contacts automatically.',
  },
  {
    name: 'Zoho Books',
    api: 'zohoapis.com/books/v3',
    entities: 'Contacts, invoices, bills',
    note: 'Sync customers and invoices with the Zoho finance suite.',
  },
  {
    name: 'Wave',
    api: 'gql.waveapps.com',
    entities: 'Customers, invoices, transactions',
    note: 'A free-to-free bridge for teams moving off Wave.',
  },
  {
    name: 'Sage Business Cloud',
    api: 'api.sage.com',
    entities: 'Customers, invoices, payments',
    note: 'Enterprise-ready accounting sync for Sage users.',
  },
  {
    name: 'Oracle NetSuite',
    api: 'suitetalk.api.netsuite.com',
    entities: 'Customers, invoices, journal entries',
    note: 'Connect Genius Books to a NetSuite back office.',
  },
  {
    name: 'MYOB',
    api: 'api.myob.com/accountright',
    entities: 'Customers, invoices, payments',
    note: 'Built for Australian and New Zealand accounting workflows.',
  },
  {
    name: 'Kashoo',
    api: 'api.kashoo.com',
    entities: 'Customers, invoices, expenses',
    note: 'Straightforward two-way sync for Kashoo books.',
  },
];

const TECH_STACK = [
  { name: 'Laravel 13', role: 'PHP backend, routing, ORM, queues' },
  { name: 'React 19', role: 'TypeScript UI with Inertia.js' },
  { name: 'Tailwind CSS 4', role: 'Utility-first styling' },
  { name: 'MySQL 8 / SQLite', role: 'Production / local database' },
  { name: 'Spatie Permission', role: 'Team-scoped role-based access' },
  { name: 'Barryvdh DomPDF', role: 'Invoice and report PDFs' },
  { name: 'Vite 7', role: 'Frontend build pipeline' },
  { name: 'Laravel Queue', role: 'Email, reminders, recurring jobs' },
  { name: 'Stripe (no SDK)', role: 'Online invoice payments + webhooks' },
];

const SERVER_REQUIREMENTS = [
  { label: 'PHP', value: '8.4+' },
  { label: 'Database', value: 'MySQL 8.0+ / MariaDB 10.4+' },
  { label: 'Composer', value: '2.x' },
  { label: 'Node.js', value: '20+ (build assets)' },
  { label: 'Web Server', value: 'Nginx / Apache / cPanel' },
];

const ROLES = [
  { role: 'Owner', desc: 'Everything: settings, team, data export and all financial modules.' },
  { role: 'Accountant', desc: 'Customers, products, invoices, payments, expenses, accounts and reports — no business settings or team management.' },
  { role: 'Staff', desc: 'Day-to-day selling and spending: customers, products, invoices, payments and expenses. Cannot void payments, manage accounts or view reports.' },
];

const COMPARISON = [
  { feature: 'License', genius: 'MIT — fully open source', typical: 'Freemium / open-core, paid apps' },
  { feature: 'Hosting', genius: 'Self-hosted, your server', typical: 'Vendor cloud only' },
  { feature: 'Businesses per install', genius: 'Unlimited (multi-tenant)', typical: 'One company per account' },
  { feature: 'Invoices', genius: 'Unlimited', typical: 'Capped on free tiers' },
  { feature: 'REST API', genius: 'Included, company-scoped tokens', typical: 'Paid plan or partner app' },
  { feature: 'Finance integrations', genius: '10 two-way syncs included', typical: 'Limited or marketplace paid' },
  { feature: 'Data ownership', genius: 'Yours, export anytime (CSV/PDF)', typical: 'Vendor-held' },
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

      {/* Hero */}
      <section
        className="pt-[120px] pb-16 sm:pt-[160px] sm:pb-24"
        style={{ background: 'linear-gradient(180deg, #eef2ff 0%, #f5f6ea 100%)' }}
      >
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col items-center text-center gap-6 max-w-[880px] mx-auto">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
                Free &amp; Open Source
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
                MIT License
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
                Laravel 13 · React 19
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
                Multi-Tenant
              </span>
            </div>

            <h1 className="text-[36px] leading-[44px] sm:text-[54px] sm:leading-[62px] lg:text-[66px] lg:leading-[74px] font-semibold text-[#0F1112]">
              Free Open-Source Accounting Software: Self-Hosted Forever
            </h1>

            <p className="text-[#484848] text-[16px] sm:text-[18px] leading-8 max-w-[700px]">
              A complete, self-hosted accounting platform for small businesses, accountants and agencies.
              Customers, quotes, invoices, payments, expenses, bank reconciliation, ledger and reports —
              <strong> plus 10 two-way finance integrations and a full REST API</strong>. Built with
              <strong> Laravel 13</strong> and <strong>React 19</strong>. No per-seat pricing. No invoice caps. Your data on your server.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 flex-wrap justify-center">
              <DownloadButton
                productName="Genius Books"
                productColor={COLOR}
                productLightColor={LIGHT_COLOR}
                githubUrl={GITHUB_URL}
                licenseUuid={LICENSE_UUID}
                label="Download Free, No Account Needed"
                buttonColor="#4f46e5"
                className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:-translate-y-0.5"
              />
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-[#E5E7EC] text-[#0F1112] font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:border-[#0F1112]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                  <polygon points="10,8 16,12 10,16" fill="currentColor" />
                </svg>
                Try Live Demo
              </a>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-[#E5E7EC] text-[#0F1112] font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:border-[#0F1112]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0024 12.5C24 5.87 18.63.5 12 .5z" />
                </svg>
                View Source
              </a>
            </div>

            <p className="text-[13px] text-[#6b7280]">
              MIT License · No account required · No credit card · Unlimited businesses &amp; invoices
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-white border-b border-[#E5E7EC]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-[960px] mx-auto text-center">
            {[
              { value: '12+', label: 'Modules' },
              { value: '3', label: 'Roles' },
              { value: '10', label: 'Integrations' },
              { value: '∞', label: 'Businesses' },
              { value: 'PHP 8.4+', label: 'Backend' },
              { value: 'MIT', label: 'Forever Free' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-[28px] font-bold" style={{ color: COLOR }}>{s.value}</p>
                <p className="text-[12px] text-[#6b7280] font-medium mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4" style={{ background: LIGHT_COLOR, color: COLOR }}>
              Screenshots
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
              See It in Action
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[560px] mx-auto leading-7">
              Real screenshots from the live demo. Every screen shown is fully functional and included free.
            </p>
          </div>

          <ScreenshotGallery
            demoUrl={DEMO_URL}
            screenshots={[
              {
                src: '/site-images/free-software/genius-books/dashboard.png',
                alt: 'Genius Books dashboard showing revenue, expenses, outstanding and overdue KPIs, revenue vs expenses chart, expense breakdown, recent transactions and outstanding invoices',
                title: 'Financial Dashboard',
                description: 'KPIs, revenue vs expenses, expense breakdown and outstanding invoices at a glance',
              },
              {
                src: '/site-images/free-software/genius-books/invoices.png',
                alt: 'Genius Books invoice list with search, customer and status filters, invoice numbers, issue and due dates, status badges and totals',
                title: 'Invoice Management',
                description: 'Filter by customer and status, track Draft, Sent, Partially paid and Overdue',
              },
              {
                src: '/site-images/free-software/genius-books/invoice-builder.png',
                alt: 'Genius Books new invoice form with customer, issue and due dates, dynamic line items, line and invoice discounts, tax percentage and a live totals summary',
                title: 'Invoice Builder',
                description: 'Line items, discounts, inclusive/exclusive tax and a live totals summary',
              },
              {
                src: '/site-images/free-software/genius-books/payments.png',
                alt: 'Genius Books payments list showing received payments with customer, account, method, reference and allocated amounts',
                title: 'Payments & Credit',
                description: 'Partial, over- and multi-invoice settlement with unapplied customer credit',
              },
              {
                src: '/site-images/free-software/genius-books/expenses.png',
                alt: 'Genius Books expenses list with categories, vendors, accounts, dates, tax and amounts, plus a filtered total',
                title: 'Expenses & Vendors',
                description: 'Categorised spending, receipts, vendors and recurring expenses posted to the ledger',
              },
              {
                src: '/site-images/free-software/genius-books/transactions.png',
                alt: 'Genius Books unified transaction ledger with type, direction, account, date and source document filters',
                title: 'Ledger & Transactions',
                description: 'One auditable ledger for every money movement, with source drill-through',
              },
              {
                src: '/site-images/free-software/genius-books/reports.png',
                alt: 'Genius Books accounts receivable report with outstanding, overdue and opening balances, aging buckets and an open invoices list',
                title: 'Reports & Aging',
                description: 'Receivables aging, P&L, tax summary and general ledger with CSV/PDF export',
              },
              {
                src: '/site-images/free-software/genius-books/integrations.png',
                alt: 'Genius Books finance integrations page listing Xero, QuickBooks Online, FreshBooks, HubSpot, Zoho Books, Wave, Sage, NetSuite, MYOB and Kashoo with connect controls',
                title: '10 Finance Integrations',
                description: 'Connect Xero, QuickBooks, HubSpot and 7 more for two-way sync',
              },
              {
                src: '/site-images/free-software/genius-books/api.png',
                alt: 'Genius Books API applications page for creating company-scoped Bearer tokens used by the REST API at /api/v1',
                title: 'REST API Tokens',
                description: 'Issue company-scoped Bearer tokens for the full /api/v1 REST API',
              },
            ]}
          />
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[820px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112] mb-5 text-center">
            What is Genius Books?
          </h2>
          <p className="text-[16px] text-[#484848] leading-8 mb-5">
            Genius Books is a free, open-source accounting platform built with <strong>Laravel 13</strong>,
            <strong> React 19</strong> and <strong>Inertia.js</strong>. Each business gets a fully isolated
            workspace covering the complete workflow: Business → Customers → Products &amp; Services → Quotes →
            Invoices → Payments → Expenses → Transactions → Reports.
          </p>
          <p className="text-[16px] text-[#484848] leading-8 mb-5">
            Unlike cloud-only tools that cap invoices or lock features, Genius Books is self-hosted and
            <strong> multi-tenant</strong> — one installation can serve unlimited businesses with strict
            <code className="mx-1 rounded bg-[#f1f5f9] px-1.5 py-0.5 text-[14px]">company_id</code>
            isolation. All money moves through a single ledger service with integer minor units, void-with-reason
            and fully derived balances, so the books stay trustworthy and auditable.
          </p>
          <p className="text-[16px] text-[#484848] leading-8">
            It is MIT licensed: deploy on a VPS or cPanel, fork the codebase, white-label it or build commercial
            products on top — with no licensing costs, no per-seat fees and no vendor lock-in.
          </p>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 sm:py-20 bg-[#f9fafb]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
              12 Modules. Complete Books.
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[600px] mx-auto leading-7">
              From the first customer to the annual reports — every accounting workflow is built in and ready to use.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MODULES.map((mod) => (
              <div key={mod.name} className="bg-white rounded-2xl border border-[#E5E7EC] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: LIGHT_COLOR }}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="10" cy="10" r="9" stroke={COLOR} strokeWidth="1.4" />
                    </svg>
                  </div>
                  <h3 className="text-[14px] font-semibold text-[#0F1112] leading-tight">{mod.name}</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {mod.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-[#484848] leading-5">
                      <CheckIcon color={COLOR} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations — detailed */}
      <section id="integrations" className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4" style={{ background: LIGHT_COLOR, color: COLOR }}>
              Integrations
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
              10 Finance Platforms. Two-Way Sync.
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[640px] mx-auto leading-7">
              Connect your books to the tools your clients and team already use. Push local records out and pull
              remote records in — with encrypted tokens and a full audit log of every sync.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
            {INTEGRATIONS.map((i) => (
              <div key={i.name} className="rounded-2xl border border-[#E5E7EC] bg-white p-5 hover:border-[#c7d2fe] hover:shadow-[0_6px_24px_rgba(79,70,229,0.08)] transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-[13px] font-bold text-white" style={{ background: COLOR }}>
                    {i.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[14px] font-semibold text-[#0F1112] leading-tight">{i.name}</p>
                    <p className="text-[11px] text-[#6b7280] font-mono truncate">{i.api}</p>
                  </div>
                </div>
                <p className="text-[12px] font-medium text-[#4f46e5] mb-1.5">Syncs: {i.entities}</p>
                <p className="text-[13px] text-[#484848] leading-5">{i.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-[900px] mx-auto rounded-2xl border border-[#E5E7EC] bg-[#f9fafb] p-6 sm:p-8">
            <h3 className="text-[16px] font-semibold text-[#0F1112] mb-4">How two-way sync works</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { t: 'Connect once', d: 'Add the provider access token (and refresh token / org ID where required) under Settings → Integrations. Tokens are encrypted at rest.' },
                { t: 'Push', d: 'Send local customers, invoices and payments out to the provider with the correct mapped fields.' },
                { t: 'Pull', d: 'Fetch remote records and create or update the matching local record.' },
                { t: 'Audit everything', d: 'Every push and pull writes a sync log (direction, entity, status, payload) and updates last_sync_at / last_error.' },
              ].map((s) => (
                <div key={s.t} className="flex items-start gap-3">
                  <CheckIcon color={COLOR} />
                  <div>
                    <p className="text-[13px] font-semibold text-[#0F1112]">{s.t}</p>
                    <p className="text-[13px] text-[#484848] leading-5">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[13px] text-[#6b7280] leading-6">
              Sync runs from the portal or programmatically through the REST API once a provider is connected.
              Integrations are strictly company-isolated: a sync started in one business can never read another.
            </p>
          </div>
        </div>
      </section>

      {/* API */}
      <section id="api" className="py-16 sm:py-20 bg-[#f9fafb]">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1000px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
              A Full REST API, Included
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[620px] mx-auto leading-7">
              Build your own integrations, mobile apps or automations. Create company-scoped Bearer tokens and
              use the same ledger-backed API the UI is built on.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-2xl border border-[#E5E7EC] bg-white p-6">
              <h3 className="text-[15px] font-semibold text-[#0F1112] mb-3">Endpoints</h3>
              <div className="space-y-2 text-[13px] text-[#484848]">
                {['GET /api/v1/me', 'customers', 'products', 'quotes', 'invoices', 'payments (+void)', 'expenses (+void)', 'vendors', 'transactions (+transfer / income / adjustment)'].map((e) => (
                  <div key={e} className="flex items-start gap-2">
                    <CheckIcon color={COLOR} />
                    <span className="font-mono">{e.startsWith('GET') ? e : `/api/v1/${e}`}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[12px] text-[#6b7280]">JSON, paginated with <code className="rounded bg-[#f1f5f9] px-1">?page=1&amp;per_page=15</code> (max 100).</p>
            </div>
            <div className="rounded-2xl border border-[#E5E7EC] bg-[#0f172a] p-6 overflow-x-auto">
              <p className="text-[12px] text-[#94a3b8] mb-3">Create a customer</p>
              <pre className="text-[12px] leading-6 text-[#e2e8f0]"><code>{`curl -H "Authorization: Bearer gb_..." \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Acme Corp","email":"acme@example.com"}' \\
  https://your-app.com/api/v1/customers`}</code></pre>
              <p className="text-[12px] text-[#94a3b8] mt-4 mb-3">Create an invoice</p>
              <pre className="text-[12px] leading-6 text-[#e2e8f0]"><code>{`curl -H "Authorization: Bearer gb_..." \\
  -H "Content-Type: application/json" -d '{
    "customer_id":1,
    "issue_date":"2026-09-25",
    "due_date":"2026-10-09",
    "items":[{"description":"Consulting",
              "quantity":10,"unit_price":"75.00",
              "tax_rate":10}]
  }' https://your-app.com/api/v1/invoices`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[900px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112]">
              How Genius Books Compares
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[620px] mx-auto leading-7">
              A self-hosted, MIT-licensed alternative to freemium and open-core accounting tools.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#E5E7EC]">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#f9fafb] text-[12px] uppercase tracking-wider text-[#6b7280]">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold" style={{ color: COLOR }}>Genius Books</th>
                  <th className="px-4 py-3 font-semibold">Typical free tool</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature} className="border-t border-[#E5E7EC] text-[13px]">
                    <td className="px-4 py-3 font-medium text-[#0F1112]">{row.feature}</td>
                    <td className="px-4 py-3 text-[#484848]">{row.genius}</td>
                    <td className="px-4 py-3 text-[#6b7280]">{row.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RBAC */}
      <section className="py-16 sm:py-20 bg-[#f9fafb]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
              Roles That Match Your Team
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[540px] mx-auto leading-7">
              Three roles per business, enforced on the server — hiding the button is never the only control.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[900px] mx-auto">
            {ROLES.map((r) => (
              <div key={r.role} className="rounded-2xl border border-[#E5E7EC] bg-white p-6">
                <p className="text-[14px] font-semibold mb-2" style={{ color: COLOR }}>{r.role}</p>
                <p className="text-[13px] text-[#484848] leading-6">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
              Built on a Modern, Battle-Tested Stack
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[540px] mx-auto leading-7">
              No Docker required. Runs on any standard PHP hosting: Laravel Herd, Forge, a VPS or shared cPanel.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] mx-auto">
            {TECH_STACK.map((t) => (
              <div key={t.name} className="rounded-xl border border-[#E5E7EC] bg-white p-5 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: LIGHT_COLOR }}>
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="2" width="16" height="16" rx="3" stroke={COLOR} strokeWidth="1.5" />
                    <path d="M7 10l2 2 4-4" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#0F1112]">{t.name}</p>
                  <p className="text-[12px] text-[#6b7280] mt-0.5 leading-4">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Server requirements */}
      <section className="py-16 sm:py-20 bg-[#0F1112]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="max-w-[820px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-[28px] sm:text-[36px] font-semibold text-white">
                Server Requirements
              </h2>
              <p className="text-[#9ca3af] text-[15px] mt-3 leading-7">
                Runs on any standard PHP hosting. No Docker required.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVER_REQUIREMENTS.map((r) => (
                <div key={r.label} className="flex items-center justify-between rounded-xl border border-white/10 px-5 py-4">
                  <span className="text-[14px] text-[#9ca3af] font-medium">{r.label}</span>
                  <span className="text-[14px] text-white font-semibold">{r.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 px-5 py-4">
              <p className="text-[13px] text-[#9ca3af] leading-6">
                Queue and scheduler run from cron on shared hosting:
                <code className="mx-1 text-[#e2e8f0]">queue:work --stop-when-empty</code> and
                <code className="mx-1 text-[#e2e8f0]">schedule:run</code> every minute.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-[#f9fafb]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112] text-center mb-10">
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col gap-4">
                {faqSchema.mainEntity.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-[#E5E7EC] bg-white p-6">
                    <h3 className="text-[15px] font-semibold text-[#0F1112] mb-2">{item.name}</h3>
                    <p className="text-[14px] text-[#484848] leading-6">{item.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/cta-bg.jpg" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-6 max-w-[660px] mx-auto relative z-10">
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-white leading-tight">
            Download the Free Accounting Software
          </h2>
          <p className="text-[#d1d5db] text-[15px] leading-7">
            No account. No credit card. No per-seat fees, no invoice caps. MIT license. Enter your email and get
            the download link instantly.
          </p>
          <DownloadButton
            productName="Genius Books"
            productColor={COLOR}
            productLightColor={LIGHT_COLOR}
            githubUrl={GITHUB_URL}
            licenseUuid={LICENSE_UUID}
            label="Get Free Download, No Credit Card"
            buttonColor="#4f46e5"
          />
          <p className="text-[13px] text-[#d1d5db]">
            Need help setting it up?{' '}
            <Link href="/contact" className="text-white underline underline-offset-2 hover:text-[#a5b4fc] transition-colors">
              Contact Xgenious for an installation service
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
