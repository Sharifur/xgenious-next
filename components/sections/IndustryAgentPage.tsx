'use client';

import Button, { ArrowIcon } from '@/components/ui/Button';
import SectionBadge from '@/components/ui/SectionBadge';
import AgentWorkspaceIndustry from '@/components/sections/AgentWorkspaceIndustry';
import BookCall from '@/app/ai-agent-development-services/_components/BookCall';

export type IndustryPageData = {
  industry: string;
  slug: string;
  heroH1: string;
  heroSubhead: string;
  useCasesHeading: string;
  useCases: Array<{
    title: string;
    desc: string;
    stat: string;
  }>;
  whyHeading: string;
  benefits: Array<{
    title: string;
    desc: string;
  }>;
  ctaText: string;
  metaTitle: string;
  metaDescription: string;
};

export default function IndustryAgentPage({ data }: { data: IndustryPageData }) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[120px] pb-0" style={{ background: '#070b14' }}>
        {/* Stars */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[
            [12,8],[25,18],[38,5],[55,12],[70,7],[85,15],[93,9],[8,35],[20,42],[45,28],[62,38],[78,22],[90,33],
            [15,55],[30,62],[50,48],[68,58],[82,45],[95,52],[5,72],[22,78],[40,68],[58,75],[76,65],[88,70],
            [10,88],[28,92],[48,82],[65,88],[80,80],[92,86],
          ].map(([x, y], i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{ left: `${x}%`, top: `${y}%`, width: i % 4 === 0 ? 2 : 1, height: i % 4 === 0 ? 2 : 1, opacity: 0.2 + (i % 5) * 0.1 }}
            />
          ))}
        </div>

        {/* Gradient orb */}
        <div className="pointer-events-none absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[500px]">
          <div className="absolute inset-0 rounded-full blur-[90px] opacity-50" style={{ background: 'radial-gradient(ellipse at 40% 40%, #e85d8a 0%, #f97316 35%, #06b6d4 70%, transparent 100%)' }} />
        </div>

        {/* Content */}
        <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-6 sm:gap-8 relative z-10">
          <SectionBadge variant="dark">{data.industry}</SectionBadge>
          <h1 className="text-white font-bold text-[32px] leading-[40px] sm:text-[48px] sm:leading-[58px] lg:text-[72px] lg:leading-[82px] max-w-[900px]">
            {data.heroH1}
          </h1>
          <p className="text-[#9ca3af] font-normal text-[14px] leading-[21px] sm:text-[16px] sm:leading-6 lg:text-[18px] lg:leading-[27px] max-w-[580px]">
            {data.heroSubhead}
          </p>
          <div className="flex items-center gap-[17px] flex-wrap justify-center">
            <Button href="/contact" variant="coral" icon={<ArrowIcon />}>
              Build My Agent
            </Button>
            <Button
              href="/ai-agent-development-services#pricing"
              variant="outline"
              icon={<ArrowIcon />}
              className="!bg-transparent !border-white/40 !text-white hover:!border-[#ec7161]"
            >
              View Packages
            </Button>
          </div>
        </div>

        {/* AgentWorkspace animation */}
        <div className="container-page px-4 sm:px-6 lg:px-0 mt-10 md:mt-14 relative z-10">
          <div className="hidden md:block max-w-[1100px] mx-auto">
            <AgentWorkspaceIndustry slug={data.slug} />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ background: '#070b14' }} className="py-14 sm:py-20 lg:py-[120px]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <h2 className="text-[26px] sm:text-[36px] lg:text-[48px] font-bold text-white text-center mb-12 leading-[1.15]">
            {data.useCasesHeading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.useCases.map((uc) => (
              <div
                key={uc.title}
                className="rounded-2xl p-7 flex flex-col gap-4"
                style={{ background: '#0d1120', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <h3 className="text-[18px] leading-[26px] font-semibold text-white">{uc.title}</h3>
                <p className="text-[15px] leading-[1.65]" style={{ color: '#9ca3af' }}>{uc.desc}</p>
                <div
                  className="mt-auto inline-block self-start px-4 py-1.5 rounded-full text-[13px] font-semibold"
                  style={{ background: 'rgba(236,113,97,0.12)', color: '#ec7161' }}
                >
                  {uc.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: '#050406' }} className="py-14 sm:py-20 lg:py-[120px]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <h2 className="text-[26px] sm:text-[36px] lg:text-[48px] font-bold text-white text-center mb-12 leading-[1.15]">
            {data.whyHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl p-7"
                style={{ background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'rgba(236,113,97,0.15)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4.5" stroke="#ec7161" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-[18px] leading-[26px] font-semibold text-white mb-2">{b.title}</h3>
                <p className="text-[15px] leading-[1.65]" style={{ color: '#9ca3af' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BookCall — exact same as AI agent dev page */}
      <BookCall />

      {/* Back link */}
      <section style={{ background: '#070b14' }} className="pb-10">
        <div className="container-page px-4 sm:px-6 lg:px-0 text-center">
          <a
            href="/ai-agent-development-services"
            className="inline-flex items-center gap-1.5 text-[14px] transition-colors duration-200 hover:text-white"
            style={{ color: '#9ca3af' }}
          >
            <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
              <path d="M12.5 7.5h-10M6.5 3.5l-4 4 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to AI Agent Services
          </a>
        </div>
      </section>
    </>
  );
}
