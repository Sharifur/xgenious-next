import type { Metadata } from 'next';
import Button, { ArrowIcon } from '@/components/ui/Button';
import FAQ from '@/components/sections/FAQ';
import BookingCTA from '@/components/sections/BookingCTA';

const FAQS = [
  {
    question: 'What does it cost to build a full eCommerce platform of this scope?',
    answer: 'An eCommerce platform with inventory management, built-in courier integration, fraud detection, dynamic product variants, multi-currency, and multi-language support typically ranges from $30,000 to $80,000. The scope of shipping integrations and the number of supported languages and currencies are the main variables.',
  },
  {
    question: 'How does built-in courier integration work?',
    answer: 'We integrate directly with courier provider APIs — rate calculation, label generation, tracking number assignment, and shipment status polling are all handled server-side. Merchants select a shipping method at checkout and labels are generated automatically on order confirmation without leaving the platform.',
  },
  {
    question: 'How does the fraud detection system work?',
    answer: 'We implement rule-based fraud scoring — velocity checks, IP geolocation against billing address, device fingerprinting, and order value thresholds. High-risk orders are flagged for manual review before fulfillment. The ruleset is configurable from the admin panel without code changes.',
  },
  {
    question: 'How are dynamic product variants handled?',
    answer: 'Products can have any combination of variant attributes — size, color, material, custom options. Each variant combination has its own SKU, stock level, price override, and image. Variant matrix generation is automatic; merchants only configure the attributes and the platform builds the combinations.',
  },
  {
    question: 'How do you handle multi-currency pricing?',
    answer: 'We support both manual pricing per currency and automatic conversion via an exchange rate feed. Displayed prices update in the customer\'s selected currency. Checkout always settles in the merchant\'s base currency with the conversion rate locked at the time of cart creation.',
  },
  {
    question: 'How does the multi-language setup work?',
    answer: 'All customer-facing content — product names, descriptions, category labels, checkout strings — is stored per-language. Merchants manage translations from the admin panel. Language is detected from browser preference or URL prefix and can be overridden by the customer at any time.',
  },
];

export const metadata: Metadata = {
  title: 'Full-Featured eCommerce Platform with Built-In Courier — Case Study | Xgenious',
  description:
    'How Xgenious built a complete eCommerce platform with inventory management, built-in courier integration, fraud detection, dynamic product variants, multi-currency, and multi-language support.',
};

const STATS = [
  { value: 'Built-in', label: 'Courier Integration' },
  { value: 'Dynamic', label: 'Variant Handling' },
  { value: 'Multi', label: 'Currency & Language' },
  { value: 'Fraud', label: 'Detection Engine' },
];

const TECH = [
  { name: 'Laravel', desc: 'Backend API & admin panel' },
  { name: 'MySQL', desc: 'Inventory & order data store' },
  { name: 'Courier API', desc: 'Shipping label & tracking' },
  { name: 'Stripe / PayPal', desc: 'Multi-currency payments' },
  { name: 'Redis', desc: 'Session, cache & queue layer' },
  { name: 'i18n Layer', desc: 'Multi-language content system' },
];

const CHALLENGES = [
  {
    num: '01',
    title: 'Dynamic Variant Matrix Generation',
    body: 'Products with multiple configurable attributes (size × color × material) produce combinatorial SKU sets. The variant engine generates all valid combinations automatically, assigns individual stock levels, and allows per-variant price and image overrides without requiring merchants to create each SKU manually.',
  },
  {
    num: '02',
    title: 'Built-In Courier with Label Generation',
    body: 'Integrating directly with courier APIs so merchants never need to leave the platform to generate shipping labels. On order confirmation, the platform calls the courier API, retrieves a label PDF, stores the tracking number against the order, and notifies the customer — all in a single async job.',
  },
  {
    num: '03',
    title: 'Fraud Detection Without False Positives',
    body: 'Rule-based fraud scoring that catches high-risk orders without blocking legitimate customers. The scoring model weighs velocity, IP-to-billing geolocation mismatch, device signals, and order value against configurable thresholds. Borderline orders route to manual review rather than automatic rejection.',
  },
  {
    num: '04',
    title: 'Multi-Currency Checkout',
    body: 'Customers browse and add to cart in their local currency. Exchange rates are fetched on a configurable schedule and cached. At checkout, the displayed price locks to the rate at cart creation time — customers see a stable price even if rates shift between browsing and payment.',
  },
  {
    num: '05',
    title: 'Multi-Language Product Catalog',
    body: 'Every piece of customer-facing content has a translation record per active language. The translation system is lazy — untranslated content falls back to the default language rather than showing blank fields. Merchants manage translations inline with the product editor.',
  },
];

const FEATURES = [
  'Full inventory management system',
  'Built-in courier API with label generation',
  'Real-time shipment tracking',
  'Fraud detection & order risk scoring',
  'Dynamic product variant matrix',
  'Multi-currency pricing & checkout',
  'Multi-language storefront & admin',
  'Order management & fulfillment flow',
];

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium bg-[#f5f6f8] text-[#484848] border border-[#e5e7ec]">
      {children}
    </span>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1.5 p-6 rounded-2xl bg-white border border-[#e5e7ec]">
      <span className="text-[36px] sm:text-[44px] font-semibold text-[#0F1112] leading-none">{value}</span>
      <span className="text-[13px] text-[#8a8f99]">{label}</span>
    </div>
  );
}

export default function EcommerceCourierCaseStudy() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-[120px] sm:pt-[160px] pb-16 sm:pb-20" style={{ background: 'linear-gradient(180deg, #fff4f0 0%, #f8e8e0 100%)' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Tag>eCommerce</Tag>
                <Tag>Courier Integration</Tag>
                <Tag>Multi-Language</Tag>
              </div>

              <h1 className="text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[56px] lg:leading-[64px] font-semibold text-[#0F1112]">
                Full-Featured eCommerce Platform with Built-In Courier
              </h1>

              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#484848]">
                A complete eCommerce platform with inventory management, built-in courier
                integration for automated label generation, fraud detection, dynamic product
                variants, multi-currency checkout, and multi-language storefront.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/contact" variant="coral" icon={<ArrowIcon />}>
                  Start a Similar Project
                </Button>
              </div>
            </div>

            <div
              className="w-full rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: '#f0d8c8', aspectRatio: '4/3', minHeight: 340 }}
            >
              <span className="text-[13px] text-[#b08070]">Project screenshot</span>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#f0f0f0]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Introduction ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 lg:gap-20 items-start">
            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-semibold text-[#ec7161] uppercase tracking-[0.1em]">Introduction</span>
              <h2 className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px] font-semibold text-[#0F1112]">
                An eCommerce platform built to operate without third-party logistics software
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Our client needed a complete eCommerce solution where shipping, inventory, and
                  fraud handling were built into the platform — not bolted on via external tools.
                  Merchants had to manage their entire operation from one admin panel, in multiple
                  languages, accepting payments in multiple currencies.
                </p>
                <p>
                  We built a Laravel-based eCommerce platform with direct courier API integration
                  for label generation and tracking, a dynamic variant engine that handles
                  complex product configurations, and a fraud scoring system that routes
                  high-risk orders to review before fulfillment.
                </p>
                <p>
                  <strong className="text-[#0F1112]">Core product message:</strong> Run your entire eCommerce business — orders, shipping, inventory — from a single platform you own.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-[#e5e7ec] divide-y divide-[#f0f0f0] overflow-hidden">
                {[
                  { label: 'Industry', value: 'eCommerce' },
                  { label: 'Backend', value: 'Laravel + MySQL' },
                  { label: 'Shipping', value: 'Built-in courier API' },
                  { label: 'Payments', value: 'Multi-currency checkout' },
                  { label: 'Languages', value: 'Multi-language i18n' },
                  { label: 'Engagement', value: 'Full-Stack eCommerce Build' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between px-5 py-3.5">
                    <span className="text-[12px] font-medium text-[#8a8f99]">{label}</span>
                    <span className="text-[13px] font-semibold text-[#0F1112]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Challenge ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#0F1112' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col gap-4 mb-12 lg:mb-16 max-w-[640px]">
            <span className="text-[12px] font-semibold text-[#ec7161] uppercase tracking-[0.1em]">The Challenge</span>
            <h2 className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px] font-semibold text-white">
              Replacing a stack of third-party tools with one owned platform
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
              Most eCommerce operators rely on a patchwork of shipping software, fraud tools,
              and inventory apps. The client wanted a single platform — unified data, unified
              admin, zero external SaaS dependencies for core operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Courier API integration with automated label generation',
              'Fraud detection without blocking legitimate orders',
              'Dynamic variant matrix for complex products',
              'Multi-currency checkout with locked exchange rates',
              'Multi-language storefront with fallback content',
              'Unified inventory tracking across all product variants',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                  <circle cx="8" cy="8" r="8" fill="#ec7161" fillOpacity="0.2" />
                  <path d="M5 8l2 2 4-4" stroke="#ec7161" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[14px] text-[#d1d5db] leading-[22px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Solution ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-semibold text-[#ec7161] uppercase tracking-[0.1em]">The Solution</span>
              <h2 className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px] font-semibold text-[#0F1112]">
                Every operation in one admin panel
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Courier integration runs inside the order fulfillment flow. When an order is
                  marked ready to ship, the platform calls the courier API, generates a label,
                  attaches the tracking number to the order record, and sends the customer a
                  tracking link — without any external tool or manual step.
                </p>
                <p>
                  The variant engine builds SKU combinations from attribute definitions. A product
                  with three sizes and four colors produces twelve SKUs automatically, each with
                  independent stock, price, and image. Merchants never manually create variant
                  records.
                </p>
              </div>
            </div>

            <div className="rounded-2xl p-7 sm:p-8 flex flex-col gap-4" style={{ background: '#fff4f0', border: '1px solid #f0d8c8' }}>
              <h3 className="text-[15px] font-semibold text-[#0F1112] mb-1">Platform Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FEATURES.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                      <circle cx="8" cy="8" r="7" fill="#ec7161" />
                      <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[13px] text-[#484848]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technical Architecture ───────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#f5f6f8' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-semibold text-[#ec7161] uppercase tracking-[0.1em]">Technical Architecture</span>
              <h2 className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px] font-semibold text-[#0F1112]">
                Laravel + async courier jobs + i18n content layer
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Courier API calls are dispatched as async queue jobs after order confirmation.
                  If a courier API call fails, the job retries with exponential backoff and alerts
                  the admin on repeated failure — label generation never blocks the checkout flow.
                </p>
                <p>
                  The i18n layer stores translations as separate content records linked to their
                  parent entities. Language detection resolves from URL prefix, with browser
                  preference as fallback. Untranslated content falls back to the default language
                  at the query level — no missing content in production.
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                {[
                  'Async queue jobs for courier API label generation',
                  'Fraud scoring on every order before fulfillment gate',
                  'Variant matrix built from attribute definition records',
                  'Exchange rate cache locked per cart at creation time',
                  'i18n content layer with default-language fallback',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                      <circle cx="8" cy="8" r="7" fill="#ec7161" />
                      <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[14px] text-[#484848] leading-[22px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TECH.map((t) => (
                <div key={t.name} className="flex flex-col gap-1.5 p-5 rounded-2xl border border-[#e5e7ec]" style={{ background: '#fafafa' }}>
                  <span className="text-[14px] font-semibold text-[#0F1112]">{t.name}</span>
                  <span className="text-[12px] text-[#8a8f99]">{t.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Technical Challenges ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col gap-4 mb-12 max-w-[640px]">
            <span className="text-[12px] font-semibold text-[#ec7161] uppercase tracking-[0.1em]">Key Technical Challenges</span>
            <h2 className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px] font-semibold text-[#0F1112]">
              Hard problems, solved cleanly
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {CHALLENGES.map((c) => (
              <div key={c.num} className="flex flex-col sm:flex-row gap-5 sm:gap-8 p-6 sm:p-8 rounded-2xl bg-white border border-[#e5e7ec]">
                <span className="text-[32px] font-semibold text-[#f8e8e0] leading-none flex-shrink-0 select-none">{c.num}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[16px] font-semibold text-[#0F1112]">{c.title}</h3>
                  <p className="text-[14px] text-[#6b7280] leading-[22px]">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcome ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#0F1112' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-semibold text-[#ec7161] uppercase tracking-[0.1em]">Outcome</span>
              <h2 className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px] font-semibold text-white">
                A self-contained eCommerce operation with no third-party logistics dependency
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                The platform handles the full eCommerce lifecycle — product setup, inventory
                tracking, checkout in any currency, shipping label generation, fraud screening, and
                order fulfillment — from a single admin panel. No external SaaS subscriptions
                required for any core operation.
              </p>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                Multi-language support opened the platform to customers across language regions
                without additional development. Multi-currency checkout increased conversion for
                international buyers who previously abandoned at the pricing page. The client owns
                every layer of the stack.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 'Auto', label: 'Shipping label generation' },
                { value: 'Zero', label: 'External logistics tools' },
                { value: 'Dynamic', label: 'Variant SKU matrix' },
                { value: 'Global', label: 'Multi-currency & language' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-2 p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="text-[28px] sm:text-[32px] font-semibold text-white leading-none">{s.value}</span>
                  <span className="text-[12px] text-[#6b7280]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />

      <FAQ
        faqs={FAQS}
        title="Questions about building a full eCommerce platform?"
        description="Common questions from founders before starting an eCommerce platform engagement."
      />
    </>
  );
}
