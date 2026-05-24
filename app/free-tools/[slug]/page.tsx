import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TOOLS } from '@/data/free-tools';
import ToolRenderer from '@/components/free-tools/ToolRenderer';
import SectionBadge from '@/components/ui/SectionBadge';
import AccordionItem from '@/components/ui/AccordionItem';

const BASE_URL = 'https://xgenious.com';

const SERVICE_LINKS: Record<string, { label: string; desc: string; href: string; icon: string }[]> = {
  developer: [
    { label: 'Custom SaaS Development', desc: 'End-to-end SaaS — API, auth, billing, dashboard, deployment.', href: '/custom-saas-development-company', icon: 'M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V9l-6-6zM9 3v6h6' },
    { label: 'MVP Development', desc: 'Working product in 6–8 weeks. Fixed price, committed timeline.', href: '/saas-mvp-development', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { label: 'AI Agent Development', desc: 'Custom AI agents and workflow automation for your stack.', href: '/ai-agent-development-services', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
    { label: 'Web App Development', desc: 'Full-stack web apps built with modern frameworks and best practices.', href: '/web-app-development-company', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9' },
  ],
  hr: [
    { label: 'Genius HRM — Free HR Software', desc: 'Self-hosted HRM: payroll, leave, attendance, appraisals.', href: '/free-software/genius-hrm', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
    { label: 'AI Agents for HR & Recruiting', desc: 'Automate candidate screening, onboarding, and HR workflows.', href: '/ai-agents-for-hr-recruiting', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
    { label: 'Custom SaaS Development', desc: 'Need a custom HRM or workforce platform? We build it end-to-end.', href: '/custom-saas-development-company', icon: 'M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V9l-6-6zM9 3v6h6' },
    { label: 'MVP Development', desc: 'Launch your HR product in 6–8 weeks. Fixed price, committed timeline.', href: '/saas-mvp-development', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  ],
  school: [
    { label: 'Genius School ERP — Free', desc: 'Free Laravel + React school ERP: fees, attendance, grades, timetable.', href: '/free-software/genius-school-management', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
    { label: 'AI Agents for Education', desc: 'Automate admissions, grading, and student support with AI.', href: '/ai-agents-for-education', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
    { label: 'Custom SaaS Development', desc: 'Need a custom EdTech platform or LMS? We build it end-to-end.', href: '/custom-saas-development-company', icon: 'M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V9l-6-6zM9 3v6h6' },
    { label: 'MVP Development', desc: 'Launch your EdTech product in 6–8 weeks. Fixed price.', href: '/saas-mvp-development', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  ],
  saas: [
    { label: 'Custom SaaS Development', desc: 'End-to-end SaaS — from schema design to production deployment.', href: '/custom-saas-development-company', icon: 'M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V9l-6-6zM9 3v6h6' },
    { label: 'MVP Development', desc: 'Working product in 6–8 weeks. Fixed price, committed timeline.', href: '/saas-mvp-development', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { label: 'AI Agents for SaaS', desc: 'AI-powered automation for support, onboarding, and revenue ops.', href: '/ai-agents-for-saas', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
    { label: 'Web App Development', desc: 'Full-stack web apps with modern architecture and cloud deployment.', href: '/web-app-development-company', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9' },
  ],
  sales: [
    { label: 'Genius CRM — Free CRM Software', desc: 'Self-hosted CRM: pipeline, contacts, deals, and email sequences.', href: '/free-software/genius-crm', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { label: 'AI Agents for Sales', desc: 'Automate lead qualification, follow-up, and CRM data entry with AI.', href: '/ai-agents-for-saas', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
    { label: 'Custom SaaS Development', desc: 'Need a custom CRM or sales platform? We build it end-to-end.', href: '/custom-saas-development-company', icon: 'M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V9l-6-6zM9 3v6h6' },
    { label: 'MVP Development', desc: 'Launch your sales product in 6–8 weeks. Fixed price, committed timeline.', href: '/saas-mvp-development', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  ],
  business: [
    { label: 'Custom SaaS Development', desc: 'End-to-end SaaS products built for your exact business workflow.', href: '/custom-saas-development-company', icon: 'M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V9l-6-6zM9 3v6h6' },
    { label: 'MVP Development', desc: 'Launch your product idea in 6–8 weeks. Fixed price, committed timeline.', href: '/saas-mvp-development', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { label: 'AI Agent Development', desc: 'Custom AI agents that automate business operations and decisions.', href: '/ai-agent-development-services', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
    { label: 'Web App Development', desc: 'Full-stack business web apps with modern frameworks and cloud deployment.', href: '/web-app-development-company', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9' },
  ],
  image: [
    { label: 'Web App Development', desc: 'Full-stack web applications built with modern frameworks.', href: '/web-app-development-company', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9' },
    { label: 'Custom SaaS Development', desc: 'Image processing or media workflows built into your product.', href: '/custom-saas-development-company', icon: 'M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V9l-6-6zM9 3v6h6' },
    { label: 'MVP Development', desc: 'Launch your product in 6–8 weeks. Fixed price, committed timeline.', href: '/saas-mvp-development', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { label: 'AI Agent Development', desc: 'Custom AI agents for media processing, tagging, and automation.', href: '/ai-agent-development-services', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  ],
};

export function generateStaticParams() {
  return TOOLS.map((tool) => ({ slug: tool.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = TOOLS.find((t) => t.slug === slug);
  if (!tool) return {};

  const canonicalUrl = `${BASE_URL}/free-tools/${slug}`;

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    keywords: tool.keywords,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      url: canonicalUrl,
      siteName: 'Xgenious',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@xgenious1',
      creator: '@xgenious1',
      title: tool.metaTitle,
      description: tool.metaDescription,
    },
  };
}

function RelatedToolCard({ slug, iconColor, iconBg }: { slug: string; iconColor: string; iconBg: string }) {
  const tool = TOOLS.find((t) => t.slug === slug);
  if (!tool) return null;

  return (
    <Link
      href={`/free-tools/${tool.slug}`}
      className="group flex flex-col gap-3 rounded-2xl border border-[#E5E7EC] bg-white p-5 hover:border-[#d0d4dc] hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-200"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: iconBg }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="2" width="16" height="16" rx="3" stroke={iconColor} strokeWidth="1.5" />
          <path d="M6.5 10l2.5 2.5 4.5-5" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="text-[13px] font-semibold text-[#0F1112] leading-[20px] group-hover:text-[#ec7161] transition-colors duration-200">
          {tool.title}
        </p>
        <p className="text-[12px] text-[#6b7280] leading-[18px] mt-0.5">{tool.tagline}</p>
      </div>
    </Link>
  );
}

export default async function FreeToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = TOOLS.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  const toolUrl = `${BASE_URL}/free-tools/${slug}`;

  const softwareAppLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.title,
    description: tool.metaDescription,
    url: toolUrl,
    applicationCategory: tool.applicationCategory ?? 'WebApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    provider: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
    ...(tool.featureList ? { featureList: tool.featureList } : {}),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Free Tools', item: `${BASE_URL}/free-tools` },
      { '@type': 'ListItem', position: 2, name: tool.category.charAt(0).toUpperCase() + tool.category.slice(1), item: `${BASE_URL}/free-tools?category=${tool.category}` },
      { '@type': 'ListItem', position: 3, name: tool.title, item: toolUrl },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tool.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const howToLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to use ${tool.title}`,
    description: tool.intro,
    step: tool.howToUse.map(({ step, desc }, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step,
      text: desc,
    })),
    tool: [{ '@type': 'HowToTool', name: tool.title }],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="pt-[100px] sm:pt-[140px] pb-12 sm:pb-16"
        style={{ background: `linear-gradient(180deg, ${tool.lightColor} 0%, #ffffff 100%)` }}
      >
        <div className="container-page px-4 sm:px-6 lg:px-0">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[12px] text-[#6b7280] mb-8 flex-wrap">
            <Link href="/free-tools" className="hover:text-[#0F1112] transition-colors duration-150">
              Free Tools
            </Link>
            <span>/</span>
            <Link
              href={`/free-tools?category=${tool.category}`}
              className="capitalize hover:text-[#0F1112] transition-colors duration-150"
            >
              {tool.category}
            </Link>
            <span>/</span>
            <span className="text-[#0F1112] font-medium">{tool.title}</span>
          </nav>

          <div className="flex flex-col gap-5 max-w-[760px]">
            <SectionBadge className="w-fit capitalize">{tool.category}</SectionBadge>

            <h1 className="text-[30px] leading-[38px] sm:text-[44px] sm:leading-[52px] lg:text-[52px] lg:leading-[60px] font-semibold text-[#0F1112] tracking-[-0.02em]">
              {tool.h1}
            </h1>

            <p className="text-[15px] sm:text-[17px] leading-[27px] text-[#484848] max-w-[640px]">
              {tool.intro}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { label: 'Free — No Signup', icon: true },
                { label: 'Runs in Browser', icon: true },
                { label: 'Data Never Uploaded', icon: true },
              ].map(({ label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium bg-white border border-[#E5E7EC] text-[#484848] shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke="#059669" strokeWidth="1.5" />
                    <path d="M3.5 6l2 2 3-3" stroke="#059669" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {label}
                </span>
              ))}
              {tool.tier === 1 && (
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium border shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
                  style={{ background: tool.lightColor, borderColor: tool.color + '40', color: tool.color }}
                >
                  Popular tool
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tool widget ──────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16" style={{ background: '#F5F6F8' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-10 items-start">

            {/* Left: tagline + feature list */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase mb-2" style={{ color: tool.color }}>{tool.category}</p>
                <p className="text-[20px] sm:text-[22px] font-semibold text-[#0F1112] leading-[1.35] tracking-[-0.01em]">{tool.tagline}</p>
              </div>

              {tool.featureList && tool.featureList.length > 0 && (
                <ul className="flex flex-col gap-2.5">
                  {tool.featureList.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] text-[#484848]">
                      <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: tool.lightColor }}>
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke={tool.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Right: tool */}
            <div className="bg-white rounded-2xl border border-[#E5E7EC] shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-5 sm:p-6">
              <ToolRenderer slug={tool.slug} />
            </div>

          </div>
        </div>
      </section>

      {/* ── Feature cards ────────────────────────────────────────────────── */}
      {tool.featureCards && (
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container-page px-4 sm:px-6 lg:px-0">
            <div className="mb-10 sm:mb-12">
              <SectionBadge className="mb-4">Features</SectionBadge>
              <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] leading-[32px] sm:leading-[40px] lg:leading-[48px] font-semibold text-[#0F1112] tracking-[-0.01em]">
                Everything you need in one {tool.title.replace(/^Free\s+/i, '').split('&')[0].trim()}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {tool.featureCards.map(({ title, desc }) => (
                <div key={title} className="rounded-2xl border border-[#E5E7EC] bg-[#F5F6F8] p-6">
                  <h3 className="text-[15px] font-semibold text-[#0F1112] mb-2">{title}</h3>
                  <p className="text-[13px] text-[#484848] leading-[21px]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Strength tips ────────────────────────────────────────────────── */}
      {tool.strengthTips && (
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container-page px-4 sm:px-6 lg:px-0">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              {/* Left: header + intro */}
              <div className="lg:w-[340px] flex-shrink-0">
                <SectionBadge className="mb-4">Best Practices</SectionBadge>
                <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] leading-[32px] sm:leading-[38px] lg:leading-[44px] font-semibold text-[#0F1112] tracking-[-0.01em] mb-4">
                  {tool.strengthTips.heading}
                </h2>
                <p className="text-[14px] text-[#6b7280] leading-[24px]">
                  {tool.strengthTips.intro}
                </p>
              </div>
              {/* Right: numbered tips */}
              <ul className="flex-1 flex flex-col gap-0 divide-y divide-[#F0F1F3] border border-[#E5E7EC] rounded-2xl overflow-hidden bg-[#FAFAFA]">
                {tool.strengthTips.tips.map((tip, i) => (
                  <li key={tip} className="flex items-start gap-4 px-6 py-5 hover:bg-white transition-colors duration-150">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F0FDF4] border border-[#bbf7d0] flex items-center justify-center text-[12px] font-bold text-[#16a34a] mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[14px] text-[#374151] leading-[24px]">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ── How to use ───────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="mb-10 sm:mb-12">
            <SectionBadge className="mb-4">How It Works</SectionBadge>
            <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] leading-[32px] sm:leading-[40px] lg:leading-[48px] font-semibold text-[#0F1112] tracking-[-0.01em]">
              How to use {tool.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {tool.howToUse.map(({ step, desc }, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 rounded-2xl border border-[#E5E7EC] bg-[#F5F6F8] p-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0"
                    style={{ background: tool.lightColor, color: tool.color }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[14px] font-semibold text-[#0F1112]">{step}</p>
                </div>
                <p className="text-[13px] text-[#484848] leading-[21px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table (optional) ──────────────────────────────────── */}
      {tool.comparisonTable && (
        <section className="py-12 sm:py-16 lg:py-20" style={{ background: '#F5F6F8' }}>
          <div className="container-page px-4 sm:px-6 lg:px-0">
            <div className="mb-10 sm:mb-12">
              <SectionBadge className="mb-4">Format Comparison</SectionBadge>
              <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] leading-[32px] sm:leading-[40px] lg:leading-[48px] font-semibold text-[#0F1112] tracking-[-0.01em]">
                {tool.comparisonTable.caption}
              </h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-[#E5E7EC] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <table className="w-full text-[13px] sm:text-[14px]">
                <thead>
                  <tr style={{ background: tool.lightColor }}>
                    {tool.comparisonTable.headers.map((h) => (
                      <th
                        key={h}
                        className="px-5 py-3.5 text-left font-semibold text-[#0F1112] first:rounded-tl-2xl last:rounded-tr-2xl"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tool.comparisonTable.rows.map((row, ri) => (
                    <tr
                      key={ri}
                      className="border-t border-[#F0F1F3] hover:bg-[#FAFAFA] transition-colors"
                    >
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`px-5 py-3.5 ${ci === 0 ? 'font-medium text-[#0F1112]' : 'text-[#484848]'}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── Common errors ────────────────────────────────────────────────── */}
      {tool.commonErrors && (
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container-page px-4 sm:px-6 lg:px-0">
            <div className="mb-10 sm:mb-12">
              <SectionBadge className="mb-4">Troubleshooting</SectionBadge>
              <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] leading-[32px] sm:leading-[40px] lg:leading-[48px] font-semibold text-[#0F1112] tracking-[-0.01em]">
                How to fix common syntax errors
              </h2>
              <p className="text-[15px] text-[#484848] mt-3 max-w-[640px] leading-[26px]">
                Most &ldquo;invalid JSON&rdquo; failures come from a small set of mistakes. Paste the failing JSON above, click Validate, and the tool points you at the exact line and column.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tool.commonErrors.map(({ error, code, fix }) => (
                <div key={error} className="rounded-2xl border border-[#E5E7EC] bg-[#F5F6F8] px-6 py-5">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <strong className="text-[14px] font-semibold text-[#0F1112]">{error}</strong>
                    <code className="text-[12px] font-mono bg-white border border-[#E5E7EC] text-[#484848] px-2 py-0.5 rounded-md">{code}</code>
                  </div>
                  <p className="text-[13px] text-[#484848] leading-[21px]">{fix}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-10 sm:mb-12 max-w-[560px] mx-auto">
            <SectionBadge className="mb-4">FAQ</SectionBadge>
            <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] leading-[32px] sm:leading-[40px] lg:leading-[48px] font-semibold text-[#0F1112] tracking-[-0.01em]">
              Frequently asked questions
            </h2>
          </div>
          <div className="w-full lg:max-w-[66.666%] mx-auto space-y-3">
            {tool.faq.map(({ q, a }, i) => (
              <AccordionItem
                key={q}
                question={q}
                answer={a}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Genius School ERP promo (School tools only) ─────────────────── */}
      {tool.category === 'school' && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="container-page px-4 sm:px-6 lg:px-0">
            <div className="rounded-2xl border border-[#E5E7EC] overflow-hidden bg-[#F5F6F8]">
              <div className="p-8 sm:p-10 flex flex-col gap-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#fff1ee' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="#f26b4e" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#f26b4e' }}>Free Software</span>
                </div>

                <div>
                  <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#0F1112] leading-[32px] tracking-[-0.01em] mb-2">
                    Genius School Management — Free School ERP
                  </h2>
                  <p className="text-[14px] text-[#484848] leading-[24px] max-w-[600px]">
                    Beyond calculators — run your entire school with Genius School Management. Self-hosted, open source, and free forever. Fee collection, attendance tracking, grade management, timetables, exams, and parent communication all in one platform.
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2.5">
                  {['Fee collection & invoicing', 'Attendance tracking', 'Grade & exam management', 'Timetable scheduling', 'Self-hosted & free'].map((f) => (
                    <span key={f} className="flex items-center gap-1.5 text-[13px] text-[#484848]">
                      <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#fff1ee' }}>
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="#f26b4e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <Link
                    href="/free-software/genius-school-management"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                    style={{ background: '#f26b4e', boxShadow: '0 4px 16px rgba(242,107,78,0.30)' }}
                  >
                    Download Free
                    <svg width="13" height="13" viewBox="0 0 15 15" fill="none">
                      <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <span className="text-[12px] text-[#9ca3af]">MIT licence · No subscription · Self-hosted</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Genius HRM promo (HR tools only) ────────────────────────────── */}
      {tool.category === 'hr' && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="container-page px-4 sm:px-6 lg:px-0">
            <div className="rounded-2xl border border-[#E5E7EC] overflow-hidden bg-[#F5F6F8]">
              <div className="p-8 sm:p-10 flex flex-col gap-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#fff1ee' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="#f26b4e" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#f26b4e' }}>Free Software</span>
                </div>

                <div>
                  <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#0F1112] leading-[32px] tracking-[-0.01em] mb-2">
                    Genius HRM — Free HR Management Software
                  </h2>
                  <p className="text-[14px] text-[#484848] leading-[24px] max-w-[600px]">
                    Beyond calculators — manage your entire HR operation with Genius HRM. Self-hosted, open source, and free forever. Payroll, leave management, attendance tracking, performance appraisals, and employee records all in one platform.
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2.5">
                  {['Payroll processing', 'Leave & attendance', 'Performance appraisals', 'Employee records', 'Self-hosted & free'].map((f) => (
                    <span key={f} className="flex items-center gap-1.5 text-[13px] text-[#484848]">
                      <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#fff1ee' }}>
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="#f26b4e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <Link
                    href="/free-software/genius-hrm"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                    style={{ background: '#f26b4e', boxShadow: '0 4px 16px rgba(242,107,78,0.30)' }}
                  >
                    Download Free
                    <svg width="13" height="13" viewBox="0 0 15 15" fill="none">
                      <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <span className="text-[12px] text-[#9ca3af]">MIT licence · No subscription · Self-hosted</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Related tools ────────────────────────────────────────────────── */}
      {tool.relatedTools.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20" style={{ background: '#F5F6F8' }}>
          <div className="container-page px-4 sm:px-6 lg:px-0">
            <div className="mb-8 sm:mb-10">
              <SectionBadge className="mb-4">Related Tools</SectionBadge>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#0F1112] tracking-[-0.01em]">
                You might also need
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {tool.relatedTools.slice(0, 8).map((relSlug) => (
                <RelatedToolCard key={relSlug} slug={relSlug} iconColor={tool.color} iconBg={tool.lightColor} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── External links ───────────────────────────────────────────────── */}
      {tool.externalLinks.length > 0 && (
        <section className="py-12 sm:py-16" style={{ background: '#F5F6F8' }}>
          <div className="container-page px-4 sm:px-6 lg:px-0">
            <div className="mb-8">
              <SectionBadge className="mb-4">References</SectionBadge>
              <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#0F1112] tracking-[-0.01em]">
                Further reading
              </h2>
              <p className="text-[13px] text-[#6b7280] mt-1.5">
                Authority documentation and specifications behind this tool.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {tool.externalLinks.map(({ label, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 rounded-2xl border border-[#E5E7EC] bg-white p-5 hover:border-[#d0d4dc] hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)] transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#F5F6F8] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#6b7280] group-hover:text-[#ec7161] transition-colors duration-200">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-medium text-[#0F1112] group-hover:text-[#ec7161] transition-colors duration-200 leading-[20px]">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

{/* ── Related Services ─────────────────────────────────────────────── */}
      {SERVICE_LINKS[tool.category] && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="container-page px-4 sm:px-6 lg:px-0">
            <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <SectionBadge className="mb-4">Our Services</SectionBadge>
                <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#0F1112] tracking-[-0.01em]">
                  Need this built into your product?
                </h2>
                <p className="text-[14px] text-[#6b7280] mt-2 max-w-[480px]">
                  We design and build custom software — SaaS platforms, MVPs, AI agents, and web apps.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ec7161] text-white text-[13px] font-semibold hover:bg-[#e05e4d] transition-colors flex-shrink-0"
              >
                Let&apos;s talk
                <svg width="13" height="13" viewBox="0 0 15 15" fill="none">
                  <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICE_LINKS[tool.category].map(({ label, desc, href, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex flex-col gap-4 rounded-2xl border border-[#E5E7EC] bg-[#F5F6F8] p-5 hover:border-[#d0d4dc] hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EC] flex items-center justify-center flex-shrink-0 group-hover:border-[#ec7161]/30 transition-colors duration-200">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#6b7280] group-hover:text-[#ec7161] transition-colors duration-200">
                      <path d={icon} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#0F1112] group-hover:text-[#ec7161] transition-colors duration-200 leading-[20px] mb-1.5">
                      {label}
                    </p>
                    <p className="text-[12px] text-[#6b7280] leading-[18px]">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ background: tool.lightColor }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #ec7161 0%, #e05a47 100%)' }}>
            <div className="px-8 sm:px-12 py-10 sm:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-[20px] sm:text-[24px] font-semibold text-white leading-[30px]">
                  Have a project in mind?
                </p>
                <p className="text-[14px] text-white/80 max-w-[440px] leading-[22px]">
                  We turn ideas into production-ready software — SaaS, web apps, mobile, and AI agents. Fixed price. Committed timeline. No surprises.
                </p>
              </div>
              <Link
                href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold bg-white transition-all duration-200 hover:shadow-[0_6px_24px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                style={{ color: '#ec7161' }}
              >
                Let&apos;s talk
                <svg width="13" height="13" viewBox="0 0 15 15" fill="none">
                  <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
