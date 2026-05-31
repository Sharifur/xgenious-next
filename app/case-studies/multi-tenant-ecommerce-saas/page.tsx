import Image from 'next/image';
import type { Metadata } from 'next';
import Button, { ArrowIcon } from '@/components/ui/Button';
import FAQ from '@/components/sections/FAQ';
import BookingCTA from '@/components/sections/BookingCTA';

const FAQS = [
  {
    question: 'What does a multi-tenant SaaS eCommerce platform cost to build?',
    answer: 'A platform of this scope — multi-tenant architecture, 19+ payment gateways, custom domain per tenant, Flutter mobile apps, and a white-label admin panel — typically ranges from $40,000 to $100,000. Complexity, number of payment integrations, and mobile scope are the main variables. We work on fixed-price contracts.',
  },
  {
    question: 'How does multi-tenant architecture differ from a regular eCommerce site?',
    answer: 'In a multi-tenant setup, a single application instance serves multiple merchant stores, each with their own storefront, data, and subdomain or custom domain. Row-level data isolation ensures one tenant can never see another\'s orders or customers. This dramatically reduces infrastructure cost compared to separate deployments per merchant.',
  },
  {
    question: 'Can each store have its own domain and branding?',
    answer: 'Yes. Each tenant gets a subdomain by default, and custom domain mapping is supported via DNS CNAME. Stores can upload their own logo, set brand colors, and choose from multiple themes — all without affecting other tenants.',
  },
  {
    question: 'What payment gateways can you integrate?',
    answer: 'We regularly integrate Stripe, PayPal, Razorpay, Mollie, and regional gateways. For a SaaS marketplace, we implement a split-payment flow where the platform takes a configurable fee and the rest is routed to the merchant.',
  },
  {
    question: 'Do you build the mobile shopping apps as well?',
    answer: 'Yes. We build Flutter mobile apps (iOS + Android) that connect to the same backend API. White-label mobile builds — where each merchant gets their own branded app — are possible with additional configuration.',
  },
  {
    question: 'How do you handle tenant onboarding and subscription billing?',
    answer: 'Tenant registration, plan selection, and billing are handled through the admin panel. Stripe Billing or PayPal Subscriptions handle recurring charges. Free trial periods, plan upgrades, and usage-based limits are all configurable.',
  },
];

export const metadata: Metadata = {
  title: 'Multi-Tenant eCommerce SaaS Platform — Laravel Case Study',
  description:
    'How Xgenious built a multi-tenant SaaS eCommerce platform where entrepreneurs launch stores with custom domains, 19+ payment gateways, and Flutter mobile apps under a single Laravel instance.',
};

const STATS = [
  { value: '50+', label: 'Active Stores' },
  { value: '19+', label: 'Payment Gateways' },
  { value: '10+', label: 'Store Themes' },
  { value: '99.9%', label: 'Uptime SLA' },
];

const TECH = [
  { name: 'Laravel', desc: 'Multi-tenant backend API' },
  { name: 'Flutter', desc: 'iOS & Android shopping apps' },
  { name: 'MySQL', desc: 'Tenant-isolated data store' },
  { name: 'Stripe / PayPal', desc: 'Subscription & split payments' },
  { name: 'Redis', desc: 'Session & cache layer' },
  { name: 'CloudPanel', desc: 'Server & domain management' },
];

const CHALLENGES = [
  {
    num: '01',
    title: 'Tenant Data Isolation',
    body: 'Ensuring that no tenant can ever read or write another tenant\'s data. Implemented via row-level tenant scoping on every Eloquent query, enforced through a global scope middleware that cannot be bypassed.',
  },
  {
    num: '02',
    title: 'Custom Domain Routing',
    body: 'Each tenant can map their own domain to their store. Wildcard DNS handles subdomains; CNAME mapping handles custom domains. Laravel resolves the tenant from the incoming host header before any route is dispatched.',
  },
  {
    num: '03',
    title: 'Payment Gateway Abstraction',
    body: 'Supporting 19+ payment gateways without duplicating checkout logic. A unified payment gateway interface abstracts each provider behind a common contract — add a new gateway by implementing one interface.',
  },
  {
    num: '04',
    title: 'Theme System Per Tenant',
    body: 'Tenants choose from 10+ storefront themes, each customizable with their logo and brand colors. Theme assets are served from a shared CDN path; tenant customizations are stored as JSON and injected at render time.',
  },
  {
    num: '05',
    title: 'Platform Fee Split Payments',
    body: 'The platform charges a configurable fee on every transaction. Implemented via Stripe Connect — funds are routed to the merchant\'s connected account minus the platform fee in a single atomic charge.',
  },
];

const FEATURES = [
  'Multi-tenant store creation',
  'Custom subdomain & domain mapping',
  '19+ payment gateway integrations',
  '10+ customizable storefront themes',
  'Flutter iOS & Android shopping apps',
  'POS plugin for in-store sales',
  'WooCommerce product import',
  'Google Analytics & Facebook Pixel',
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

export default function MultiTenantEcommerceCaseStudy() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-[120px] sm:pt-[160px] pb-16 sm:pb-20" style={{ background: 'linear-gradient(180deg, #fff8f0 0%, #f5ede0 100%)' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Tag>eCommerce SaaS</Tag>
                <Tag>Multi-Tenant</Tag>
                <Tag>Laravel</Tag>
              </div>

              <h1 className="text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[56px] lg:leading-[64px] font-semibold text-[#0F1112]">
                Multi-Vendor eCommerce SaaS Built for Scale
              </h1>

              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#484848]">
                A single Laravel platform that powers 50+ independent online stores — each with
                their own storefront, custom domain, branding, and dashboard, managed from one
                admin panel.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/contact" variant="coral" icon={<ArrowIcon />}>
                  Start a Similar Project
                </Button>
              </div>
            </div>

            <div className="w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3', minHeight: 360 }}>
              <Image
                src="/site-images/case-studies/04-multi-tenant-ecommerce.svg"
                alt="Project screenshot"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
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
                One platform, unlimited stores
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Our client needed a SaaS platform where entrepreneurs could launch their own
                  eCommerce stores under a subscription model. Every store had to feel fully
                  independent — custom domain, branded storefront, private inventory — while
                  running on a single shared backend.
                </p>
                <p>
                  We built a multi-tenant Laravel application with complete data isolation between
                  tenants, a white-label theme system, and Flutter mobile apps that connect to
                  the same API as the web storefronts. The platform supports over 50 active stores
                  in production.
                </p>
                <p>
                  <strong className="text-[#0F1112]">Core product message:</strong> Launch and grow an online store in minutes — no server setup, no development cost.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-[#e5e7ec] divide-y divide-[#f0f0f0] overflow-hidden">
                {[
                  { label: 'Industry', value: 'eCommerce / SaaS' },
                  { label: 'Architecture', value: 'Multi-Tenant Laravel' },
                  { label: 'Mobile', value: 'Flutter (iOS + Android)' },
                  { label: 'Payments', value: '19+ Gateways' },
                  { label: 'Stores Live', value: '50+' },
                  { label: 'Engagement', value: 'Full-Stack SaaS Build' },
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
              Making every store feel independent while sharing one infrastructure
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
              The hardest part of multi-tenant SaaS is maintaining the illusion of a dedicated
              platform for each merchant. Tenant isolation, custom domains, branded storefronts,
              and per-tenant payment configuration all had to work seamlessly at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Strict data isolation across all tenants',
              'Custom subdomain and CNAME domain routing',
              'Per-tenant theme and branding customization',
              '19+ payment gateways with split-payment logic',
              'Platform fee collection without touching merchant data',
              'Flutter mobile apps shared across all storefronts',
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
                A Shopify-style SaaS on infrastructure the client owns
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  We built a full SaaS eCommerce platform on Laravel with a global Eloquent scope
                  that enforces tenant isolation on every database query. Tenants never share data,
                  sessions, or cache. Each store resolves from the incoming domain at the middleware
                  layer before any route logic runs.
                </p>
                <p>
                  The theme system is built on JSON-driven customization. Tenants pick a base
                  theme and configure colors, logo, and layout options — all stored per-tenant and
                  injected at render. A WooCommerce import tool allows merchants to migrate existing
                  product catalogs in minutes.
                </p>
              </div>
            </div>

            <div className="rounded-2xl p-7 sm:p-8 flex flex-col gap-4" style={{ background: '#fff8f0', border: '1px solid #f0e0c8' }}>
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
                Row-level isolation, global payment abstraction
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Tenant resolution happens at the HTTP middleware layer. Every subsequent database
                  query is scoped to the resolved tenant via a global Eloquent scope. There is no
                  code path that can retrieve data across tenant boundaries.
                </p>
                <p>
                  The payment gateway layer abstracts all 19+ providers behind a single interface.
                  Split payments use Stripe Connect to route merchant funds and deduct platform fees
                  atomically in one API call — no reconciliation jobs required.
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                {[
                  'Global Eloquent scope enforces tenant isolation',
                  'Host-header-based tenant resolution middleware',
                  'Wildcard DNS + CNAME for custom domain routing',
                  'Unified payment gateway interface (19+ providers)',
                  'Stripe Connect split payments with platform fee',
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
                <span className="text-[32px] font-semibold text-[#f5e8dc] leading-none flex-shrink-0 select-none">{c.num}</span>
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
                50+ stores, one platform, zero vendor lock-in
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                The platform runs 50+ active merchant stores in production with 99.9% uptime. New
                merchants can self-onboard, configure their store, and start accepting orders within
                minutes — no engineering required.
              </p>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                The client owns the platform outright. Adding new payment gateways, themes, or
                features is an internal decision — not a negotiation with a SaaS vendor. The
                architecture scales horizontally as merchant volume grows.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '50+', label: 'Active stores in production' },
                { value: '19+', label: 'Payment gateways live' },
                { value: '99.9%', label: 'Platform uptime' },
                { value: '3×', label: 'Revenue growth for merchants' },
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
        title="Questions about building a multi-tenant eCommerce SaaS?"
        description="Common questions from founders before starting a SaaS platform engagement."
      />
    </>
  );
}
