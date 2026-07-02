'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import ForceWhiteNav from '@/components/layout/ForceWhiteNav';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    fetch('/api/crash-report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'React render error',
        message: error.message,
        stack: error.stack ?? '',
        url: typeof window !== 'undefined' ? window.location.href : '',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        digest: error.digest ?? '',
      }),
    }).catch(() => {});
  }, [error]);
  return (
    <>
    <ForceWhiteNav />
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-[80px] pb-[80px]"
      style={{ background: 'linear-gradient(180deg, #f5f6ea 0%, #f3dacd 60%, #fff 100%)' }}
    >
      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,17,18,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,17,18,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Coral glow blob */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(236,113,97,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="container-page px-4 sm:px-6 lg:px-0 relative z-10 flex flex-col items-center text-center gap-5 sm:gap-8 w-full">
        {/* 500 number */}
        <div className="relative select-none">
          <span
            className="text-[100px] sm:text-[160px] lg:text-[220px] font-bold leading-none tracking-tight"
            style={{ color: 'rgba(15,17,18,0.06)' }}
          >
            500
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center"
              style={{ background: '#ec7161', boxShadow: '0 0 40px rgba(236,113,97,0.4)' }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-3 max-w-[540px]">
          <div className="inline-flex items-center gap-2 bg-white/70 rounded-full px-4 py-1.5 border border-[#E5E7EC]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ec7161]" />
            <span className="text-[12px] font-medium text-[#484848]">Something went wrong</span>
          </div>
          <h1 className="text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] lg:text-[52px] lg:leading-[60px] font-semibold text-[#0F1112]">
            Unexpected error occurred
          </h1>
          <p className="text-[#484848] text-[14px] sm:text-[16px] leading-7">
            Something went wrong on our end. Try reloading the page — if the problem persists, contact support.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-[#0F1112] text-white font-semibold text-[14px] rounded-full px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,17,18,0.25)] cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-[#0F1112] font-semibold text-[14px] rounded-full px-6 py-3 border border-[#E5E7EC] transition-all hover:-translate-y-0.5 hover:border-[#ec7161] hover:text-[#ec7161]"
          >
            Back to Home
          </Link>
        </div>

        {/* Service cards */}
        <div className="mt-4 pt-8 border-t border-[#E5E7EC] w-full flex flex-col items-center gap-6">
          <p className="text-[12px] font-medium text-[#6b7280] uppercase tracking-widest">Or explore</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-[900px]">
            {[
              {
                label: 'Web App Dev',
                desc: 'B2B portals & dashboards',
                href: '/web-app-development-company',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                    <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                label: 'AI Agent Dev',
                desc: 'Custom AI & automation',
                href: '/ai-agent-development-services',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M19 3l1.5 1.5L22 3M19 8h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                label: 'SaaS Dev',
                desc: 'MVP to production scale',
                href: '/custom-saas-development-company',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                    <path d="M12 22V12M2.27 6.96L12 12.01l9.73-5.05" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                label: 'Contact Support',
                desc: 'Get help from our team',
                href: '/contact',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-3 bg-white/70 hover:bg-white border border-[#E5E7EC] hover:border-[#ec7161]/30 rounded-2xl p-4 sm:p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,17,18,0.08)]"
              >
                <span className="w-9 h-9 rounded-xl bg-[#fef2ef] flex items-center justify-center text-[#ec7161] flex-shrink-0 group-hover:bg-[#ec7161] group-hover:text-white transition-colors">
                  {item.icon}
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-[#0F1112]">{item.label}</p>
                  <p className="text-[11px] text-[#6b7280] mt-0.5 leading-4">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
