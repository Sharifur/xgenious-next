import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Xgenious',
};

export default function NotFound() {
  return (
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
        {/* 404 number */}
        <div className="relative select-none">
          <span
            className="text-[100px] sm:text-[160px] lg:text-[220px] font-bold leading-none tracking-tight"
            style={{ color: 'rgba(15,17,18,0.06)' }}
          >
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center"
              style={{ background: '#ec7161', boxShadow: '0 0 40px rgba(236,113,97,0.4)' }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 9v4M12 17h.01" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-3 max-w-[540px]">
          <div className="inline-flex items-center gap-2 bg-white/70 rounded-full px-4 py-1.5 border border-[#E5E7EC]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ec7161]" />
            <span className="text-[12px] font-medium text-[#484848]">Page not found</span>
          </div>
          <h1 className="text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] lg:text-[52px] lg:leading-[60px] font-semibold text-[#0F1112]">
            Looks like you&apos;re lost
          </h1>
          <p className="text-[#484848] text-[14px] sm:text-[16px] leading-7">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#0F1112] text-white font-semibold text-[14px] rounded-full px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,17,18,0.25)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0F1112] font-semibold text-[14px] rounded-full px-6 py-3 border border-[#E5E7EC] transition-all hover:-translate-y-0.5 hover:border-[#ec7161] hover:text-[#ec7161]"
          >
            Contact Us
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
                href: '/ai-agent-development',
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
                label: 'About Us',
                desc: 'Meet the Xgenious team',
                href: '/about',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="9" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
                    <path d="M2 21v-2a5 5 0 015-5h4a5 5 0 015 5v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M17 11l1.5 1.5L21 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
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
  );
}
