'use client';

import Image from 'next/image';

type Stat = { value: string; label: string };
type CaseStudy = {
  title: string;
  description: string;
  stats: Stat[];
  tags: string[];
  href: string;
  image: string;
  imageBg: string;
  imageRight: boolean;
};

const CASES: CaseStudy[] = [
  {
    title: 'AI-Powered Customer Support SaaS Platform',
    description:
      'A self-hostable, multi-tenant Laravel platform with semantic AI chatbots, support ticketing, knowledge base builder, and Stripe billing — 40–60% AI deflection rate achieved in production.',
    stats: [
      { value: '40–60%', label: 'AI Deflection Rate' },
      { value: 'Multi-tenant', label: 'Architecture' },
      { value: 'GPT-4', label: 'AI Engine' },
    ],
    tags: ['Laravel', 'AI / LLM', 'SaaS'],
    href: '/case-studies/ai-support-saas-platform',
    image: '/site-images/case-studies/01-ai-chatbot.svg',
    imageBg: '#E8EDF8',
    imageRight: true,
  },
  {
    title: 'Freelance Marketplace Platform Launched in 8 Weeks',
    description:
      'Full-stack freelancer marketplace with escrow payments, bidding, dispute resolution, real-time chat, and Flutter mobile apps — shipped on schedule in 8 weeks.',
    stats: [
      { value: '8wk', label: 'Time to Launch' },
      { value: '500+', label: 'Active Freelancers' },
      { value: '98%', label: 'Client Satisfaction' },
    ],
    tags: ['Marketplace', 'Escrow Payments', 'Flutter'],
    href: '/case-studies/freelancer-marketplace-platform',
    image: '/site-images/case-studies/03-freelance-marketplace.svg',
    imageBg: '#D8E4F0',
    imageRight: false,
  },
];

function StatBlock({ stat }: { stat: Stat }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[24px] font-medium text-white leading-none">{stat.value}</span>
      <span className="text-[12px] text-[#6b7280] leading-none">{stat.label}</span>
    </div>
  );
}

function CaseCard({ cs }: { cs: CaseStudy }) {
  const content = (
    <div className={`flex flex-col gap-4 sm:gap-6 flex-1 p-5 sm:p-8 lg:p-10 lg:pr-[60px]${cs.imageRight ? ' lg:order-first' : ''}`}>
      <div>
        <h3 className="text-[20px] leading-[28px] sm:text-[26px] sm:leading-[34px] font-bold text-white mb-2 sm:mb-3">{cs.title}</h3>
        <p className="text-[13px] sm:text-[14px] text-[#9ca3af] leading-[21px] sm:leading-[22px]">{cs.description}</p>
      </div>

      <div className="flex gap-6 sm:gap-8 mt-[10px] sm:mt-[20px]">
        {cs.stats.map((s) => (
          <StatBlock key={s.label} stat={s} />
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {cs.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-[12px] font-medium text-[#9ca3af]"
            style={{ border: '1px solid rgba(255,255,255,0.12)' }}
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={cs.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full text-white text-[13px] font-semibold mt-6 sm:mt-[60px] transition-all duration-300 hover:-translate-y-0.5"
        style={{ background: '#ec7161', boxShadow: '0 0 0 rgba(236,113,97,0)' }}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 22px rgba(236,113,97,0.4)')}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 0 rgba(236,113,97,0)')}
      >
        Read Full Case Study
        <svg width="14" height="14" viewBox="0 0 15 15" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
          <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  );

  return (
    <div
      className="flex flex-col lg:flex-row rounded-2xl overflow-hidden"
      style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div
        className={`w-full lg:w-[45%] flex-shrink-0 flex items-center justify-center overflow-hidden p-5 sm:p-8 lg:p-10${cs.imageRight ? ' lg:order-last' : ''}`}
        style={{
          background: '#0d1017',
          borderRadius: cs.imageRight ? '0 16px 16px 0' : '16px 0 0 16px',
        }}
      >
        <Image
          src={cs.image}
          alt={cs.title}
          width={480}
          height={360}
          className="w-full h-auto rounded-lg object-contain"
        />
      </div>
      {content}
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="py-14 sm:py-20 lg:pb-[120px]" style={{ background: '#070b14' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between px-0 gap-6 sm:gap-8 mb-10 sm:mb-14">
          <div className="flex flex-col gap-4 max-w-[480px]">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ec7161] rounded-full" />
              <span className="text-[#ec7161] text-[14px] font-medium">Case Studies</span>
            </div>
            <h2 className="text-[26px] leading-[34px] sm:text-[36px] sm:leading-[44px] lg:text-[52px] lg:leading-[60px] font-semibold text-white tracking-[-0.01em]">
              Where Code Meets{' '}
              <em className="font-medium italic">Conversion.</em>
            </h2>
          </div>
          <div className="max-w-[380px] lg:pt-2">
            <p className="text-[14px] sm:text-[15px] leading-[24px] text-[#9ca3af]">
              Custom-built platforms with measurable outcomes. Published scope, fixed pricing, and a committed delivery date — shipped, scaled, and proven in production.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {CASES.map((cs) => (
            <CaseCard key={cs.title} cs={cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
