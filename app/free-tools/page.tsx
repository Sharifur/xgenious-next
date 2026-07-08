import type { Metadata } from 'next';
import Link from 'next/link';
import { TOOLS, CATEGORY_COLORS, type FreeTool, type ToolCategory } from '@/data/free-tools';

const BASE_URL = 'https://xgenious.com';

export const metadata: Metadata = {
  title: 'Free SaaS Calculators & Online Tools — 52 Developer, HR & Business Tools',
  description:
    'Free SaaS calculators, developer tools, and HR calculators. 52 tools including MRR, churn, LTV, NRR, valuation, payback period, and more — no login, no signup required.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `${BASE_URL}/free-tools` },
  keywords: [
    'free saas calculators',
    'saas calculator free',
    'free online tools',
    'developer tools free',
    'hr calculator online',
    'saas metrics calculator',
    'business tools free',
    'no login tools',
  ],
  openGraph: {
    title: 'Free SaaS Calculators & Online Tools — 52 Developer, HR & Business Tools | Xgenious',
    description:
      'Free SaaS calculators, developer tools, and HR calculators. 52 tools including MRR, churn, LTV, NRR, valuation, payback period, and more — no login, no signup required.',
    url: `${BASE_URL}/free-tools`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@xgenious1',
    creator: '@xgenious1',
    title: 'Free SaaS Calculators & Online Tools — 52 Developer, HR & Business Tools | Xgenious',
    description:
      'Free SaaS calculators, developer tools, and HR calculators. 52 tools including MRR, churn, LTV, NRR, valuation, payback period, and more — no login, no signup required.',
  },
};

const CATEGORIES: { key: string; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'developer', label: 'Developer' },
  { key: 'hr', label: 'HR' },
  { key: 'school', label: 'School' },
  { key: 'saas', label: 'SaaS' },
  { key: 'sales', label: 'Sales' },
  { key: 'business', label: 'Business' },
  { key: 'image', label: 'Image' },
];

const STATS = [
  { value: '52', label: 'Tools' },
  { value: '8', label: 'Categories' },
  { value: '100%', label: 'Free' },
  { value: 'No Account', label: 'Required' },
];

const SAAS_SPOTLIGHT = [
  { slug: 'saas-pricing-calculator', title: 'SaaS Pricing Calculator', desc: 'Model pricing tiers and forecast MRR' },
  { slug: 'churn-rate-calculator', title: 'Churn Rate Calculator', desc: 'Customer churn, retention rate, MRR lost' },
  { slug: 'nrr-calculator', title: 'NRR Calculator', desc: 'Net Revenue Retention from expansion and churn' },
  { slug: 'saas-valuation-calculator', title: 'SaaS Valuation Calculator', desc: 'ARR multiple, Rule of 40, valuation range' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Free Online Tools by Xgenious',
  description:
    'Free online tools for developers, HR teams, schools, SaaS founders, and sales teams.',
  url: `${BASE_URL}/free-tools`,
  numberOfItems: TOOLS.length,
  itemListElement: TOOLS.map((tool, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: tool.title,
    url: `${BASE_URL}/free-tools/${tool.slug}`,
  })),
};

function ToolIcon({ color, lightColor }: { color: string; lightColor: string }) {
  return (
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ background: lightColor }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="3" stroke={color} strokeWidth="1.5" />
        <path
          d="M6.5 10l2.5 2.5 4.5-5"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function CategoryBadge({ category }: { category: ToolCategory }) {
  const palette = CATEGORY_COLORS[category];
  return (
    <span
      className="inline-block px-2 py-0.5 rounded-full text-[11px] font-medium capitalize"
      style={{ background: palette.light, color: palette.color }}
    >
      {category}
    </span>
  );
}

function ToolCard({ tool }: { tool: FreeTool }) {
  return (
    <Link
      href={`/free-tools/${tool.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-[#E5E7EC] bg-white p-5 hover:border-[#d0d4dc] hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <ToolIcon color={tool.color} lightColor={tool.lightColor} />
        {tool.tier === 1 && (
          <span
            className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold"
            style={{ background: tool.lightColor, color: tool.color }}
          >
            Popular
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5 flex-1">
        <h2 className="text-[15px] font-semibold text-[#0F1112] leading-[22px] group-hover:text-[#ec7161] transition-colors duration-200">
          {tool.title}
        </h2>
        <p className="text-[13px] text-[#484848] leading-[20px] flex-1">{tool.tagline}</p>
      </div>

      <div className="flex items-center justify-between pt-1">
        <CategoryBadge category={tool.category} />
        <span
          className="text-[12px] font-semibold flex items-center gap-1 transition-colors duration-200"
          style={{ color: tool.color }}
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
      </div>
    </Link>
  );
}

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function FreeToolsPage({ searchParams }: PageProps) {
  const { category } = await searchParams;
  const activeCategory = category && category !== 'all' ? (category as ToolCategory) : null;

  const validCategories: ToolCategory[] = ['developer', 'hr', 'school', 'saas', 'sales', 'business', 'image'];
  const isValidCategory = activeCategory && validCategories.includes(activeCategory);

  const filtered = isValidCategory
    ? TOOLS.filter((t) => t.category === activeCategory)
    : TOOLS;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-[120px] sm:pt-[160px] pb-12 sm:pb-16 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col gap-6 max-w-[720px]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-medium bg-[#FFE8E1] text-[#F26B4E] self-start">
              Free Tools
            </div>
            <h1 className="text-[36px] leading-[44px] sm:text-[48px] sm:leading-[56px] lg:text-[52px] lg:leading-[62px] font-semibold text-[#0F1112] tracking-[-0.01em]">
              Free Online Tools —{' '}
              <em className="font-medium italic">No Login, No Signup, No Email</em>
            </h1>
            <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#484848] max-w-[540px]">
              Open a tool, use it, leave. No account creation, no email walls, no paywalls. Built
              for developers, HR teams, SaaS founders, and everyone in between.
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

      {/* SaaS Founders Spotlight */}
      <section className="py-10 sm:py-12 bg-white border-t border-[#F0F1F3]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#f26b4e] mb-1">Popular for SaaS Founders</p>
              <h2 className="text-[18px] sm:text-[20px] font-semibold text-[#0F1112]">Free SaaS Calculators</h2>
            </div>
            <Link
              href="/free-tools/saas-calculators"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#f26b4e] hover:underline flex-shrink-0"
            >
              See all 18 SaaS tools
              <svg width="12" height="12" viewBox="0 0 15 15" fill="none">
                <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SAAS_SPOTLIGHT.map((tool) => (
              <Link
                key={tool.slug}
                href={`/free-tools/${tool.slug}`}
                className="group flex flex-col gap-3 rounded-2xl border border-[#E5E7EC] bg-[#F5F6F8] p-5 hover:border-[#f26b4e]/40 hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#fff1ee' }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="2" width="16" height="16" rx="3" stroke="#f26b4e" strokeWidth="1.5" />
                    <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#f26b4e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#0F1112] group-hover:text-[#f26b4e] transition-colors duration-200 leading-[20px] mb-1">{tool.title}</p>
                  <p className="text-[12px] text-[#6b7280] leading-[18px]">{tool.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category filter + grid */}
      <section className="pb-16 sm:pb-20 lg:pb-[120px]" style={{ background: '#F5F6F8' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0 pt-10 sm:pt-14">

          {/* Horizontal pill tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
            {CATEGORIES.map(({ key, label }) => {
              const isActive =
                key === 'all'
                  ? !activeCategory || !isValidCategory
                  : activeCategory === key;

              return (
                <Link
                  key={key}
                  href={key === 'all' ? '/free-tools' : `/free-tools?category=${key}`}
                  className="flex-shrink-0 px-4 py-2 rounded-full text-[13px] font-medium border transition-all duration-200"
                  style={
                    isActive
                      ? { background: '#0F1112', color: '#ffffff', borderColor: '#0F1112' }
                      : { background: '#ffffff', color: '#484848', borderColor: '#E5E7EC' }
                  }
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Count line */}
          <p className="text-[13px] text-[#6b7280] mb-6">
            Showing {filtered.length} {filtered.length === 1 ? 'tool' : 'tools'}
            {isValidCategory ? ` in ${activeCategory}` : ''}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
