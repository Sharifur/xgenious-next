import type { Metadata } from 'next';
import Link from 'next/link';
import SectionBadge from '@/components/ui/SectionBadge';
import AccordionItem from '@/components/ui/AccordionItem';

const BASE_URL = 'https://xgenious.com';

export const metadata: Metadata = {
  title: 'Free SaaS Calculators — Pricing, MRR, Churn & Growth',
  description:
    'Free SaaS calculators for pricing, MRR, churn, CAC, LTV, runway, NRR, and valuation. No login, no signup. Built for SaaS founders and operators.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `${BASE_URL}/free-tools/saas-calculators` },
  keywords: [
    'free saas calculators',
    'saas calculator free',
    'saas metrics calculator',
    'mrr calculator',
    'churn rate calculator free',
    'saas pricing calculator',
    'startup calculators free',
  ],
  openGraph: {
    title: 'Free SaaS Calculators — Pricing, MRR, Churn & Growth | Xgenious',
    description:
      'Free SaaS calculators for pricing, MRR, churn, CAC, LTV, runway, NRR, and valuation. No login, no signup. Built for SaaS founders and operators.',
    url: `${BASE_URL}/free-tools/saas-calculators`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@xgenious1',
    creator: '@xgenious1',
    title: 'Free SaaS Calculators — Pricing, MRR, Churn & Growth | Xgenious',
    description:
      'Free SaaS calculators for pricing, MRR, churn, CAC, LTV, runway, NRR, and valuation. No login, no signup. Built for SaaS founders and operators.',
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const CORAL = '#f26b4e';
const CORAL_LIGHT = '#FFE8E1';

interface CalcTool {
  slug: string;
  title: string;
  tagline: string;
  comingSoon?: boolean;
}

const TOOLS: CalcTool[] = [
  {
    slug: 'saas-pricing-calculator',
    title: 'SaaS Pricing Calculator',
    tagline: 'Model pricing tiers and forecast monthly recurring revenue.',
  },
  {
    slug: 'saas-runway-calculator',
    title: 'SaaS Runway Calculator',
    tagline: 'Calculate cash runway and project your break-even month.',
  },
  {
    slug: 'churn-rate-calculator',
    title: 'Churn Rate Calculator',
    tagline: 'Measure customer churn, logo retention, and revenue retention.',
  },
  {
    slug: 'customer-ltv-calculator',
    title: 'Customer LTV Calculator',
    tagline: 'Estimate lifetime value per customer and LTV:CAC ratio.',
  },
  {
    slug: 'mrr-growth-simulator',
    title: 'MRR Growth Simulator',
    tagline: 'Simulate monthly recurring revenue growth over 24 months.',
  },
  {
    slug: 'cac-calculator',
    title: 'CAC Calculator',
    tagline: 'Calculate customer acquisition cost by channel and campaign.',
  },
  {
    slug: 'build-vs-buy-calculator',
    title: 'Build vs Buy Calculator',
    tagline: 'Analyse total cost of ownership for make vs buy decisions.',
  },
  {
    slug: 'mvp-cost-estimator',
    title: 'MVP Cost Estimator',
    tagline: 'Estimate software development cost for your MVP build.',
  },
  {
    slug: 'cold-email-roi-calculator',
    title: 'Cold Email ROI Calculator',
    tagline: 'Calculate return on investment for outbound email campaigns.',
  },
  {
    slug: 'sales-pipeline-calculator',
    title: 'Sales Pipeline Calculator',
    tagline: 'Forecast pipeline value and revenue from conversion rates.',
  },
  {
    slug: 'sprint-velocity-calculator',
    title: 'Sprint Velocity Calculator',
    tagline: 'Plan agile sprints and track team delivery capacity.',
  },
  {
    slug: 'custom-software-roi-calculator',
    title: 'Custom Software ROI Calculator',
    tagline: 'Calculate return on investment for a custom software build.',
  },
  {
    slug: 'equity-dilution-calculator',
    title: 'Equity Dilution Calculator',
    tagline: 'Model founder and investor equity through funding rounds.',
  },
  {
    slug: 'tech-stack-recommender',
    title: 'Tech Stack Recommender',
    tagline: 'Get a personalised technology stack recommendation for your SaaS.',
  },
  {
    slug: 'break-even-calculator',
    title: 'Break-Even Calculator',
    tagline: 'Find the revenue point where costs and income balance out.',
  },
  {
    slug: 'saas-valuation-calculator',
    title: 'SaaS Valuation Calculator',
    tagline: 'Estimate company valuation using ARR multiples and benchmarks.',
  },
  {
    slug: 'nrr-calculator',
    title: 'NRR Calculator',
    tagline: 'Measure net revenue retention from expansions and churn.',
  },
  {
    slug: 'payback-period-calculator',
    title: 'Payback Period Calculator',
    tagline: 'Calculate months to recover customer acquisition cost.',
  },
];

const EXISTING_TOOLS = TOOLS.filter((t) => !t.comingSoon);

const STATS = [
  { value: '18', label: 'Tools' },
  { value: '100%', label: 'Free' },
  { value: 'No Signup', label: 'Required' },
  { value: 'Browser', label: 'Only' },
];

const COMPARISON_ROWS: { tool: string; calculates: string; usedBy: string }[] = [
  {
    tool: 'SaaS Pricing Calculator',
    calculates: 'Tier pricing, MRR forecast, revenue per plan',
    usedBy: 'Founders, product managers',
  },
  {
    tool: 'SaaS Runway Calculator',
    calculates: 'Cash runway (months), break-even date',
    usedBy: 'Founders, CFOs, investors',
  },
  {
    tool: 'Churn Rate Calculator',
    calculates: 'Monthly/annual churn %, logo and revenue retention',
    usedBy: 'Customer success, growth teams',
  },
  {
    tool: 'Customer LTV Calculator',
    calculates: 'Lifetime value, LTV:CAC ratio, payback period',
    usedBy: 'Founders, growth marketers',
  },
  {
    tool: 'MRR Growth Simulator',
    calculates: '24-month MRR, ARR trajectory, growth rate',
    usedBy: 'Founders, VCs, revenue teams',
  },
  {
    tool: 'CAC Calculator',
    calculates: 'Customer acquisition cost by channel',
    usedBy: 'Growth teams, paid marketers',
  },
  {
    tool: 'Build vs Buy Calculator',
    calculates: 'Total cost of ownership, ROI, break-even',
    usedBy: 'CTOs, engineering managers',
  },
  {
    tool: 'MVP Cost Estimator',
    calculates: 'Development cost, timeline, team size',
    usedBy: 'Founders, product owners',
  },
  {
    tool: 'Cold Email ROI Calculator',
    calculates: 'Campaign ROI, revenue per send, cost per lead',
    usedBy: 'SDRs, outbound sales teams',
  },
  {
    tool: 'Sales Pipeline Calculator',
    calculates: 'Pipeline value, weighted revenue, close rate',
    usedBy: 'Sales leaders, AEs',
  },
  {
    tool: 'Sprint Velocity Calculator',
    calculates: 'Story points per sprint, capacity, delivery date',
    usedBy: 'Scrum masters, engineering leads',
  },
  {
    tool: 'Custom Software ROI Calculator',
    calculates: 'Build ROI, savings vs off-the-shelf, payback',
    usedBy: 'CTOs, operations managers',
  },
  {
    tool: 'Equity Dilution Calculator',
    calculates: 'Founder equity after funding rounds, dilution %',
    usedBy: 'Founders, early employees',
  },
  {
    tool: 'Tech Stack Recommender',
    calculates: 'Recommended stack by use case, team size, budget',
    usedBy: 'Founders, CTOs, engineers',
  },
];

const FAQS = [
  {
    question: 'What metrics do SaaS calculators help with?',
    answer:
      'SaaS calculators cover the five core subscription metrics: MRR/ARR (revenue), churn rate (customer loss), customer LTV (revenue per customer over their lifetime), CAC (cost to acquire a customer), and runway (months until cash runs out). Together they give founders and operators a complete view of subscription health.',
  },
  {
    question: 'How do I calculate SaaS churn rate?',
    answer:
      'Divide churned customers in the period by customers at the start of the period, then multiply by 100. For example, 50 churned from 1,000 starting = 5% monthly churn. Healthy B2B SaaS churn is below 2% monthly; consumer SaaS below 5%. Use our free churn rate calculator for the full breakdown.',
  },
  {
    question: 'What is a good MRR growth rate for SaaS?',
    answer:
      'Early-stage SaaS should target 10–15% month-over-month MRR growth (T2D3: triple, triple, double, double, double over 5 years). Series A-stage companies typically grow 15–20% MoM. At scale, 3–5% MoM is strong. Benchmark against ARR: below $1M ARR, 10%+ MoM is achievable; above $10M ARR, 5% MoM is excellent.',
  },
  {
    question: 'How do you calculate customer LTV for SaaS?',
    answer:
      'LTV equals average revenue per user (ARPU) divided by monthly churn rate. If ARPU is $100 and monthly churn is 2%, LTV = $100 / 0.02 = $5,000. The LTV:CAC ratio should be at least 3:1 for a healthy SaaS business. Use our free customer LTV calculator for instant results.',
  },
  {
    question: 'What is NRR (Net Revenue Retention) in SaaS?',
    answer:
      'Net Revenue Retention (NRR) measures revenue retained from existing customers after churn, downgrades, and expansions (upsells). NRR above 100% means existing customers are growing in value — the hallmark of product-led growth. World-class SaaS like Snowflake and Slack sustain NRR of 120%+. Benchmark: 100%+ is good, 120%+ is exceptional.',
  },
  {
    question: 'How do I calculate SaaS startup runway?',
    answer:
      'Divide current cash balance by monthly burn rate (operating expenses minus revenue). If you have $500,000 cash and burn $50,000 per month net, runway is 10 months. Always calculate both gross and net burn. Most investors recommend maintaining 18–24 months of runway before starting the next fundraising round.',
  },
  {
    question: 'What is CAC payback period in SaaS?',
    answer:
      'CAC payback period is how many months it takes to recover the cost of acquiring a customer through their subscription revenue. Divide CAC by (ARPU × gross margin). Best-in-class SaaS achieves payback under 12 months for SMB and under 18 months for mid-market. Longer payback periods increase funding requirements and reduce resilience.',
  },
  {
    question: 'Are these SaaS calculators free to use?',
    answer:
      'Yes, all 18 calculators are completely free — no login, no email, no signup required. Every calculation runs locally in your browser; no data is sent to any server. They are built and maintained by Xgenious, a SaaS development company, as a resource for founders and operators.',
  },
];

// ─── JSON-LD ─────────────────────────────────────────────────────────────────

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Free SaaS Calculators by Xgenious',
  description:
    'Free SaaS calculators for pricing, MRR, churn rate, CAC, LTV, runway, NRR, and valuation.',
  url: `${BASE_URL}/free-tools/saas-calculators`,
  numberOfItems: TOOLS.length,
  itemListElement: TOOLS.map((tool, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: tool.title,
    url: tool.comingSoon ? undefined : `${BASE_URL}/free-tools/${tool.slug}`,
  })),
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Free Tools', item: `${BASE_URL}/free-tools` },
    { '@type': 'ListItem', position: 3, name: 'SaaS Calculators', item: `${BASE_URL}/free-tools/saas-calculators` },
  ],
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function CalcIcon() {
  return (
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ background: CORAL_LIGHT }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="2" width="14" height="16" rx="2" stroke={CORAL} strokeWidth="1.5" />
        <path d="M6.5 7h7M6.5 10h7M6.5 13h4" stroke={CORAL} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function ToolCard({ tool }: { tool: CalcTool }) {
  const cardInner = (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-start justify-between gap-3">
        <CalcIcon />
        {tool.comingSoon && (
          <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#F5F6F8] text-[#6b7280] border border-[#E5E7EC]">
            Coming Soon
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1.5 flex-1">
        <h3 className="text-[15px] font-semibold text-[#0F1112] leading-[22px] group-hover:text-[#f26b4e] transition-colors duration-200">
          {tool.title}
        </h3>
        <p className="text-[13px] text-[#484848] leading-[20px] flex-1">{tool.tagline}</p>
      </div>
      {!tool.comingSoon && (
        <span
          className="text-[12px] font-semibold flex items-center gap-1 transition-colors duration-200"
          style={{ color: CORAL }}
        >
          Try Free
          <svg width="12" height="12" viewBox="0 0 15 15" fill="none">
            <path
              d="M2.5 7.5h10M8.5 3.5l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </div>
  );

  if (tool.comingSoon) {
    return (
      <div className="group flex flex-col rounded-2xl border border-[#E5E7EC] bg-white p-5 opacity-60 cursor-default">
        {cardInner}
      </div>
    );
  }

  return (
    <Link
      href={`/free-tools/${tool.slug}`}
      className="group flex flex-col rounded-2xl border border-[#E5E7EC] bg-white p-5 hover:border-[#d0d4dc] hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-all duration-300"
    >
      {cardInner}
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SaasCalculatorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-white pt-[88px] sm:pt-[100px]">
        <div className="container-page px-4 sm:px-6 lg:px-0 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-[#6b7280]">
            <Link href="/" className="hover:text-[#0F1112] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/free-tools" className="hover:text-[#0F1112] transition-colors">Free Tools</Link>
            <span>/</span>
            <span className="text-[#0F1112] font-medium">SaaS Calculators</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-12 sm:pb-16 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0 pt-8 sm:pt-12">
          <div className="flex flex-col gap-6 max-w-[720px]">
            <SectionBadge className="self-start">Free SaaS Calculators</SectionBadge>
            <h1 className="text-[36px] leading-[44px] sm:text-[48px] sm:leading-[56px] lg:text-[52px] lg:leading-[62px] font-semibold text-[#0F1112] tracking-[-0.01em]">
              Free SaaS Calculators —{' '}
              <em className="font-medium italic">Pricing, MRR, Churn &amp; Growth Tools</em>
            </h1>
            <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#484848] max-w-[560px]">
              18 free calculators for SaaS founders and operators. Model pricing, forecast MRR,
              measure churn, calculate LTV and CAC, and stress-test your runway — no login, no
              signup, all in your browser.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col gap-0.5 rounded-xl border border-[#E5E7EC] bg-white px-4 py-3"
                >
                  <span className="text-[22px] font-semibold text-[#0F1112]">{s.value}</span>
                  <span className="text-[12px] text-[#6b7280]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Definition block */}
      <section className="bg-[#F5F6F8] py-12 sm:py-16">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

            {/* Left: text */}
            <div className="flex flex-col gap-4 lg:max-w-[480px]">
              <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: CORAL }}>What are SaaS calculators?</p>
              <h2 className="text-[24px] sm:text-[30px] leading-[32px] sm:leading-[38px] font-semibold text-[#0F1112] tracking-[-0.01em]">
                The metrics that make or break a subscription business
              </h2>
              <p className="text-[15px] leading-[26px] text-[#484848]">
                <strong>SaaS calculators</strong> are browser-based tools that help subscription business founders and operators model the core metrics that determine product health and investor readiness — MRR, churn rate, customer lifetime value, CAC, NRR, and cash runway. They replace manual spreadsheets with instant, structured outputs.
              </p>
              <Link
                href="/free-tools/saas-calculators#tools"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold self-start"
                style={{ color: CORAL }}
              >
                Browse all 18 tools
                <svg width="13" height="13" viewBox="0 0 15 15" fill="none">
                  <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Right: metric cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-1">
              {[
                {
                  metric: 'MRR / ARR',
                  desc: 'Monthly and annual recurring revenue tracking',
                  href: '/free-tools/mrr-growth-simulator',
                  path: 'M3 17l4-8 4 4 4-6 4 2M3 21h18',
                },
                {
                  metric: 'Churn Rate',
                  desc: 'Customer and revenue loss per period',
                  href: '/free-tools/churn-rate-calculator',
                  path: 'M17 7l-10 10M7 7h10v10',
                },
                {
                  metric: 'Customer LTV',
                  desc: 'Lifetime value and LTV:CAC ratio',
                  href: '/free-tools/customer-ltv-calculator',
                  path: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8v1m0 7v1m-6-4h1m10 0h1M5.636 5.636l.707.707M17.657 17.657l.707.707M5.636 18.364l.707-.707M17.657 6.343l.707-.707',
                },
                {
                  metric: 'CAC Payback',
                  desc: 'Months to recover acquisition cost',
                  href: '/free-tools/payback-period-calculator',
                  path: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                },
                {
                  metric: 'NRR',
                  desc: 'Net revenue retention including expansion',
                  href: '/free-tools/nrr-calculator',
                  path: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
                },
                {
                  metric: 'Valuation',
                  desc: 'ARR multiple and Rule of 40 score',
                  href: '/free-tools/saas-valuation-calculator',
                  path: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                },
              ].map(({ metric, desc, href, path }) => (
                <Link
                  key={metric}
                  href={href}
                  className="group flex flex-col gap-2.5 rounded-2xl border border-[#E5E7EC] bg-white p-4 sm:p-5 hover:border-[#f26b4e]/40 hover:shadow-[0_4px_18px_rgba(0,0,0,0.07)] transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200" style={{ background: CORAL_LIGHT }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d={path} stroke={CORAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-[13px] font-semibold text-[#0F1112] group-hover:text-[#f26b4e] transition-colors duration-200">{metric}</p>
                  <p className="text-[12px] text-[#6b7280] leading-[18px]">{desc}</p>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Tool grid */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col gap-3 mb-10">
            <SectionBadge className="self-start">All 18 Tools</SectionBadge>
            <h2 className="text-[28px] sm:text-[34px] leading-[36px] sm:leading-[42px] font-semibold text-[#0F1112] tracking-[-0.01em] max-w-[560px]">
              Every SaaS metric, one free calculator
            </h2>
            <p className="text-[15px] text-[#484848] max-w-[540px]">
              Open any tool and start calculating instantly. No account, no email wall, no paywall.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOOLS.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-[#F5F6F8] py-14 sm:py-16 lg:py-20">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col gap-3 mb-10">
            <SectionBadge className="self-start">Quick Reference</SectionBadge>
            <h2 className="text-[28px] sm:text-[34px] leading-[36px] sm:leading-[42px] font-semibold text-[#0F1112] tracking-[-0.01em] max-w-[560px]">
              What each SaaS calculator measures
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EC] bg-white">
            <table className="w-full text-[13px] sm:text-[14px] text-left">
              <thead>
                <tr className="border-b border-[#E5E7EC]">
                  <th className="px-5 py-4 font-semibold text-[#0F1112] w-[240px]">Tool</th>
                  <th className="px-5 py-4 font-semibold text-[#0F1112]">What it calculates</th>
                  <th className="px-5 py-4 font-semibold text-[#0F1112] hidden sm:table-cell">Who uses it</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => {
                  const tool = EXISTING_TOOLS[i];
                  return (
                    <tr
                      key={row.tool}
                      className="border-b border-[#E5E7EC] last:border-0 hover:bg-[#FAFAFA] transition-colors"
                    >
                      <td className="px-5 py-4">
                        {tool ? (
                          <Link
                            href={`/free-tools/${tool.slug}`}
                            className="font-medium text-[#0F1112] hover:text-[#f26b4e] transition-colors"
                          >
                            {row.tool}
                          </Link>
                        ) : (
                          <span className="font-medium text-[#0F1112]">{row.tool}</span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-[#484848]">{row.calculates}</td>
                      <td className="px-5 py-4 text-[#6b7280] hidden sm:table-cell">{row.usedBy}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f26b4e 0%, #e0522f 100%)' }}>
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10" style={{ background: 'white' }} />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-[0.07]" style={{ background: 'white' }} />

        <div className="container-page px-4 sm:px-6 lg:px-0 relative">
          <div className="flex flex-col items-center text-center gap-6 max-w-[620px] mx-auto">
            {/* Label */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-[12px] font-semibold tracking-wide uppercase">
              Custom SaaS Development
            </span>

            <h2 className="text-[28px] sm:text-[38px] leading-[36px] sm:leading-[46px] font-semibold text-white tracking-[-0.02em]">
              Turn these numbers into a real product
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-white/80 max-w-[480px]">
              We&apos;ve shipped 40+ SaaS products end-to-end. Book a free call — we&apos;ll review your idea, stack, and roadmap with no obligation.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-3 pt-1">
              <Link
                href="/book-a-call"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] active:scale-95"
                style={{ color: '#f26b4e' }}
              >
                Book a free call
                <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
                  <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/custom-saas-development-company"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white text-[14px] font-semibold transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5 active:scale-95"
              >
                See our work
              </Link>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-1">
              {['40+ SaaS products shipped', '6–8 week delivery', 'Fixed price contracts'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-[12px] text-white/70">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke="white" strokeOpacity="0.5" strokeWidth="1.2" />
                    <path d="M3.5 6l2 2 3-3" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col items-center gap-3 mb-10 text-center">
            <SectionBadge>FAQ</SectionBadge>
            <h2 className="text-[28px] sm:text-[34px] leading-[36px] sm:leading-[42px] font-semibold text-[#0F1112] tracking-[-0.01em] max-w-[560px]">
              Common questions about SaaS metrics
            </h2>
          </div>

          <div className="flex flex-col gap-3 max-w-[720px] mx-auto">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="bg-[#F5F6F8] py-12 sm:py-14">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <h2 className="text-[18px] sm:text-[20px] font-semibold text-[#0F1112] mb-6">
            More free tools and resources for SaaS founders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: 'Custom SaaS Development',
                desc: 'End-to-end SaaS products built for your exact requirements.',
                href: '/custom-saas-development-company',
              },
              {
                label: 'SaaS MVP Development',
                desc: 'Working MVP in 6–8 weeks. Fixed price, committed timeline.',
                href: '/saas-mvp-development',
              },
              {
                label: 'AI Agents for SaaS',
                desc: 'AI-powered automation for support, onboarding, and revenue ops.',
                href: '/ai-agents-for-saas',
              },
              {
                label: 'All Free Tools',
                desc: '52 free tools for developers, HR teams, schools, and more.',
                href: '/free-tools',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col gap-2 rounded-2xl border border-[#E5E7EC] bg-white p-5 hover:border-[#d0d4dc] hover:shadow-[0_4px_18px_rgba(0,0,0,0.06)] transition-all duration-200"
              >
                <span className="text-[14px] font-semibold text-[#0F1112] group-hover:text-[#f26b4e] transition-colors duration-200">
                  {link.label}
                </span>
                <span className="text-[13px] text-[#484848] leading-[20px]">{link.desc}</span>
              </Link>
            ))}
          </div>

          {/* External authority links */}
          <div className="mt-8 pt-8 border-t border-[#E5E7EC]">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#6b7280] mb-4">Further reading</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { label: 'SaaS Metrics 2.0 — David Skok (ForEntrepreneurs)', href: 'https://www.forentrepreneurs.com/saas-metrics-2/' },
                { label: 'SaaS Capital — Unit Economics Guide', href: 'https://www.saas-capital.com/blog/unit-economics/' },
                { label: 'OpenView — SaaS Benchmarks Report', href: 'https://openviewpartners.com/saas-benchmarks-report/' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#484848] hover:text-[#f26b4e] underline underline-offset-2 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
