import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TOOLS } from '@/data/free-tools';
import ToolRenderer from '@/components/free-tools/ToolRenderer';
import SectionBadge from '@/components/ui/SectionBadge';
import AccordionItem from '@/components/ui/AccordionItem';

const BASE_URL = 'https://xgenious.com';

const SERVICE_LINKS: Record<string, { label: string; desc: string; href: string }[]> = {
  developer: [
    { label: 'Custom SaaS Development', desc: 'End-to-end SaaS products — API, auth, billing, dashboard, deployment.', href: '/custom-saas-development-company' },
    { label: 'MVP Development', desc: 'Working product in 6–8 weeks. Fixed price, committed timeline.', href: '/saas-mvp-development' },
    { label: 'AI Agent Development', desc: 'Custom AI agents and workflow automation built for your stack.', href: '/ai-agent-development-services' },
  ],
  hr: [
    { label: 'Genius HRM — Free HR Software', desc: 'Self-hosted HR management system: payroll, leave, attendance, appraisals.', href: '/free-software/genius-hrm' },
    { label: 'AI Agents for HR & Recruiting', desc: 'Automate candidate screening, onboarding, and HR workflows with AI.', href: '/ai-agents-for-hr-recruiting' },
    { label: 'Custom SaaS Development', desc: 'Need a custom HRM or workforce platform? We build it end-to-end.', href: '/custom-saas-development-company' },
  ],
  school: [
    { label: 'Genius School Management — Free ERP', desc: 'Free Laravel + React school ERP: fees, attendance, grades, timetable.', href: '/free-software/genius-school-management' },
    { label: 'AI Agents for Education', desc: 'Automate admissions, grading, and student support with AI agents.', href: '/ai-agents-for-education' },
    { label: 'Custom SaaS Development', desc: 'Need a custom EdTech platform or LMS? We build it end-to-end.', href: '/custom-saas-development-company' },
  ],
  saas: [
    { label: 'Custom SaaS Development', desc: 'End-to-end SaaS products — from schema design to production deployment.', href: '/custom-saas-development-company' },
    { label: 'MVP Development', desc: 'Working product in 6–8 weeks. Fixed price, committed timeline.', href: '/saas-mvp-development' },
    { label: 'AI Agents for SaaS', desc: 'Add AI-powered automation to your SaaS — support, onboarding, revenue ops.', href: '/ai-agents-for-saas' },
  ],
  sales: [
    { label: 'Genius CRM — Free CRM Software', desc: 'Self-hosted CRM: pipeline, contacts, deals, tasks, and email sequences.', href: '/free-software/genius-crm' },
    { label: 'AI Agents for SaaS & Sales', desc: 'Automate lead qualification, follow-up, and CRM data entry with AI.', href: '/ai-agents-for-saas' },
    { label: 'Custom SaaS Development', desc: 'Need a custom CRM or sales platform? We build it end-to-end.', href: '/custom-saas-development-company' },
  ],
  business: [
    { label: 'Custom SaaS Development', desc: 'End-to-end SaaS products built for your exact business workflow.', href: '/custom-saas-development-company' },
    { label: 'MVP Development', desc: 'Launch your product idea in 6–8 weeks. Fixed price, committed timeline.', href: '/saas-mvp-development' },
    { label: 'AI Agent Development', desc: 'Custom AI agents that automate business operations and decision-making.', href: '/ai-agent-development-services' },
  ],
  image: [
    { label: 'Web App Development', desc: 'Full-stack web applications built with modern frameworks and best practices.', href: '/web-app-development-company' },
    { label: 'Custom SaaS Development', desc: 'Need image processing or media workflows built into your product?', href: '/custom-saas-development-company' },
    { label: 'MVP Development', desc: 'Launch your product in 6–8 weeks. Fixed price, committed timeline.', href: '/saas-mvp-development' },
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

function RelatedToolCard({ slug }: { slug: string }) {
  const tool = TOOLS.find((t) => t.slug === slug);
  if (!tool) return null;

  return (
    <Link
      href={`/free-tools/${tool.slug}`}
      className="group flex flex-col gap-3 rounded-2xl border border-[#E5E7EC] bg-white p-5 hover:border-[#d0d4dc] hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-200"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: tool.lightColor }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="2" width="16" height="16" rx="3" stroke={tool.color} strokeWidth="1.5" />
          <path d="M6.5 10l2.5 2.5 4.5-5" stroke={tool.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
    applicationCategory: 'WebApplication',
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
          <div className="bg-white rounded-2xl border border-[#E5E7EC] shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-6 sm:p-8">
            <ToolRenderer slug={tool.slug} />
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
                One tool — format, validate, beautify, and minify {tool.title.replace(/^Free\s+/i, '').split('&')[0].trim()}
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
                <RelatedToolCard key={relSlug} slug={relSlug} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── External links ───────────────────────────────────────────────── */}
      {tool.externalLinks.length > 0 && (
        <section className="py-12 sm:py-16 bg-white">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[860px]">
              {tool.externalLinks.map(({ label, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-[#E5E7EC] bg-[#F5F6F8] px-5 py-4 hover:border-[#d0d4dc] hover:bg-white hover:shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-200 group"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-[#6b7280]">
                    <path d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3M10 2h4m0 0v4m0-4L7 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[13px] font-medium text-[#0F1112] group-hover:text-[#ec7161] transition-colors duration-200">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Last updated ─────────────────────────────────────────────────── */}
      {tool.lastUpdated && (
        <div className="container-page px-4 sm:px-6 lg:px-0 py-4">
          <p className="text-[12px] text-[#9ca3af]">
            Built and maintained by the engineering team at Xgenious · Last updated {tool.lastUpdated}
          </p>
        </div>
      )}

      {/* ── Related Services ─────────────────────────────────────────────── */}
      {SERVICE_LINKS[tool.category] && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="container-page px-4 sm:px-6 lg:px-0">
            <div className="mb-8 sm:mb-10">
              <SectionBadge className="mb-4">Our Services</SectionBadge>
              <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#0F1112] tracking-[-0.01em]">
                Need this built into your product?
              </h2>
              <p className="text-[14px] text-[#6b7280] mt-2 max-w-[480px]">
                We design and build custom software — SaaS platforms, MVPs, AI agents, and web apps.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[920px]">
              {SERVICE_LINKS[tool.category].map(({ label, desc, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex flex-col gap-2 rounded-2xl border border-[#E5E7EC] bg-[#F5F6F8] px-5 py-5 hover:border-[#d0d4dc] hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-semibold text-[#0F1112] group-hover:text-[#ec7161] transition-colors duration-200 leading-[20px]">
                      {label}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 text-[#9ca3af] group-hover:text-[#ec7161] transition-colors duration-200 -rotate-45">
                      <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-[13px] text-[#6b7280] leading-[20px]">{desc}</p>
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
