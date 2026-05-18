'use client';

import { useState } from 'react';
import Image from 'next/image';

function SaaSIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.8"/>
      <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.8"/>
      <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.8"/>
      <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.8"/>
    </svg>
  );
}

function RealEstateIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M9 21V12h6v9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function EcommerceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M3 6h18" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M16 10a4 4 0 01-8 0" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function FinanceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="white" strokeWidth="1.8"/>
      <path d="M2 10h20" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M6 15h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function HealthIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 20s-8-5-8-11a5 5 0 0116 0c0 6-8 11-8 11z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M9 12h6M12 9v6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L2 8l10 5 10-5-10-5z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M22 8v5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function LogisticsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="1" y="3" width="15" height="13" rx="1" stroke="white" strokeWidth="1.8"/>
      <path d="M16 8h4l3 4v5h-7V8z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
      <circle cx="5.5" cy="18.5" r="2" stroke="white" strokeWidth="1.5"/>
      <circle cx="18.5" cy="18.5" r="2" stroke="white" strokeWidth="1.5"/>
    </svg>
  );
}

function HRIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="7" r="3.5" stroke="white" strokeWidth="1.8"/>
      <path d="M2 21v-2a5 5 0 015-5h4a5 5 0 015 5v2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M17 8l1.5 1.5L22 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

type Industry = {
  icon: React.ReactNode;
  industry: string;
  useCases: string;
  image: string | null;
};

const INDUSTRIES: Industry[] = [
  { icon: <SaaSIcon />,       industry: 'SaaS',           useCases: 'Onboarding Automation • Churn Prevention',  image: '/products/helpnest.png' },
  { icon: <RealEstateIcon />, industry: 'Real Estate',    useCases: 'Lead Nurturing • Market Insights',          image: '/products/nexelit.png' },
  { icon: <EcommerceIcon />,  industry: 'E-Commerce',     useCases: 'Cart Recovery • Personalisation',           image: '/products/nazmart.png' },
  { icon: <FinanceIcon />,    industry: 'Finance',        useCases: 'Fraud Detection • Customer Onboarding',     image: '/products/fundorex.png' },
  { icon: <HealthIcon />,     industry: 'Healthcare',     useCases: 'Patient Intake • Appointment Scheduling',   image: '/products/prohandy.png' },
  { icon: <EducationIcon />,  industry: 'Education',      useCases: 'Student Support • Content Generation',      image: '/products/xilancer.png' },
  { icon: <LogisticsIcon />,  industry: 'Logistics',      useCases: 'Route Optimisation • Delivery Tracking',    image: null },
  { icon: <HRIcon />,         industry: 'HR & Recruiting', useCases: 'Resume Screening • Candidate Outreach',    image: null },
];

function IndustryCard({ icon, industry, useCases, image }: Industry) {
  return (
    <div className="group relative rounded-[20px] overflow-hidden flex-shrink-0 w-[300px] h-[420px]"
      style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      {image && (
        <Image
          src={image}
          alt={industry}
          fill
          className="object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-60"
        />
      )}

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400" />

      {/* Icon badge */}
      <div
        className="absolute top-5 left-5 w-9 h-9 rounded-full flex items-center justify-center z-10"
        style={{ background: '#ec7161', boxShadow: '0 0 16px rgba(236,113,97,0.4)' }}
      >
        {icon}
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="text-white font-semibold text-[22px] leading-[28px]">{industry}</h3>
        <p className="mt-1.5 text-[#9ca3af] text-[13px] leading-[20px]">{useCases}</p>
      </div>
    </div>
  );
}

export default function IndustryUseCases() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="pb-14 sm:pb-20 lg:pb-[120px] relative" style={{ background: '#070b14' }}>
      {/* Header */}
      <div className="container-page px-4 sm:px-6 lg:px-0 mb-10 sm:mb-14">
        <div className="text-center max-w-[600px] mx-auto flex flex-col gap-5">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-[2px] bg-[#ec7161] rounded-full" />
            <span className="text-[#ec7161] text-[14px] font-medium">Use Cases</span>
          </div>
          <h2 className="font-bold text-white text-[26px] leading-[34px] sm:text-[36px] sm:leading-[44px] lg:text-[48px] lg:leading-[58px]">
            AI Agents Deployed<br />Across Every Industry
          </h2>
          <p className="text-[#9ca3af] text-[14px] sm:text-[16px] leading-6">
            From SaaS to healthcare — purpose-built AI agents that understand your domain, speak your terminology, and automate your highest-value workflows.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div
          className="hidden sm:block absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #070b14 0%, transparent 100%)' }}
        />
        {/* Right fade */}
        <div
          className="hidden sm:block absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #070b14 0%, transparent 100%)' }}
        />

        <div
          className="flex gap-5 px-5 w-max"
          style={{
            animation: 'marquee-left 40s linear infinite',
            animationPlayState: paused ? 'paused' : 'running',
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {[...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES].map((item, i) => (
            <IndustryCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
