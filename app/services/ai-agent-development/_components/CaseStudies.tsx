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
    title: 'Client Portal Software for Agencies and Freelancers',
    description:
      'Taskip is the all-in-one agency management platform and client portal software that helps freelancers and digital agencies run their entire business.',
    stats: [
      { value: '3.4×', label: 'Faster Onboarding' },
      { value: '1k+', label: 'Active Workspaces' },
      { value: '62%', label: 'LCP Score' },
    ],
    tags: ['Client Portal', 'Agencies', 'Freelancers'],
    href: 'https://taskip.net',
    image: '/images/saas-dev/taskip-case-studies.jpg',
    imageBg: '#C8EDE6',
    imageRight: true,
  },
  {
    title: 'Multi-Vendor Marketplace Built for Scale',
    description:
      'Nazmart powers multi-tenant eCommerce stores where every seller gets their own storefront, subdomain, and dashboard — all managed from a single admin panel.',
    stats: [
      { value: '50+', label: 'Active Stores' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '3×', label: 'Revenue Growth' },
    ],
    tags: ['eCommerce', 'Multi-Tenant', 'SaaS'],
    href: 'https://xgenious.com/our-products/nazmart-multi-tenancy-ecommerce-platform-saas/',
    image: '/images/saas-dev/taskip-case-studies.jpg',
    imageBg: '#F5E8DC',
    imageRight: false,
  },
  {
    title: 'Freelance Marketplace Platform Launched in 8 Weeks',
    description:
      'Xilancer gave a startup a fully operational freelance platform with escrow payments, bidding, dispute resolution, and a mobile-ready UI — shipped on schedule.',
    stats: [
      { value: '8wk', label: 'Time to Launch' },
      { value: '500+', label: 'Active Freelancers' },
      { value: '98%', label: 'Client Satisfaction' },
    ],
    tags: ['Marketplace', 'Payments', 'Freelancers'],
    href: 'https://xgenious.com/our-products/xilancer-freelancer-marketplace-platform/',
    image: '/images/saas-dev/taskip-case-studies.jpg',
    imageBg: '#D8E4F0',
    imageRight: true,
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
    <div className="flex flex-col gap-6 flex-1 p-8 lg:p-10 lg:pr-[60px]">
      <div>
        <h3 className="text-[26px] font-bold text-white leading-[34px] mb-3">{cs.title}</h3>
        <p className="text-[14px] text-[#9ca3af] leading-[22px]">{cs.description}</p>
      </div>

      <div className="flex gap-8 mt-[20px]">
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
        className="group inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full text-white text-[13px] font-semibold mt-[60px] transition-all duration-300 hover:-translate-y-0.5"
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

  const visual = (
    <div
      className="w-full lg:w-[45%] flex-shrink-0 flex items-center justify-center overflow-hidden p-8 lg:p-10"
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
  );

  return (
    <div
      className="flex flex-col lg:flex-row rounded-2xl overflow-hidden"
      style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      {cs.imageRight ? (
        <>{content}{visual}</>
      ) : (
        <>{visual}{content}</>
      )}
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="pb-[120px]" style={{ background: '#070b14' }}>
      <div className="container-page">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-14">
          <div className="flex flex-col gap-4 max-w-[480px]">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ec7161] rounded-full" />
              <span className="text-[#ec7161] text-[14px] font-medium">Case Studies</span>
            </div>
            <h2 className="text-[52px] leading-[60px] font-semibold text-white tracking-[-0.01em]">
              Where Code Meets{' '}
              <em className="font-medium italic">Conversion.</em>
            </h2>
          </div>
          <div className="max-w-[380px] lg:pt-2">
            <p className="text-[15px] leading-[24px] text-[#9ca3af]">
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
