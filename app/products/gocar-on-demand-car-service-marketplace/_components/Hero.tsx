'use client';

import Link from 'next/link';
import { DEMO_URL, REGULAR_PRICE, PLAY_STORE_URL, CODECANYON_URL } from './constants';
import ScrollToPricing from './ScrollToPricing';

const QUICK_LINKS = [
  { label: 'Admin Demo', href: DEMO_URL, external: true },
  { label: 'Customer Demo', href: DEMO_URL, external: true },
  { label: 'Play Store', href: PLAY_STORE_URL, external: true },
  { label: 'Documentation', href: 'https://docs.xgenious.com/docs/gocar/', external: true },
  { label: 'Pricing', href: '#pricing', external: false },
];

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes gocar-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes gocar-spin {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.7; }
          50% { transform: rotate(180deg) scale(1.1); opacity: 1; }
        }
        .gocar-float { animation: gocar-float 5s ease-in-out infinite; }
        .gocar-spin  { animation: gocar-spin 8s ease-in-out infinite; }
      `}</style>
      <section
        className="overflow-hidden pt-[100px] sm:pt-[160px] lg:pt-[220px] relative"
        style={{
          background: 'linear-gradient(135deg, #0f0f0f 0%, #1a0a0a 40%, #2d0e0e 100%)',
        }}
      >
        {/* Decorative gear — left */}
        <div className="gocar-spin pointer-events-none absolute left-[3%] top-[22%] hidden lg:block opacity-30">
          <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="1">
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.623 2.37-2.707 1.113L6 4 4 6l1.475 1.745-1.097 2.65L2 11v2l2.378.61 1.097 2.65L4 18l2 2 1.735-1.483 2.707 1.113L11.065 22h1.954l.623-2.37 2.707-1.113L18 20l2-2-1.475-1.745 1.097-2.65L22 13v-2l-2.378-.605z"/>
          </svg>
        </div>

        {/* Wrench icon — right */}
        <div className="gocar-float pointer-events-none absolute right-[4%] top-[16%] hidden lg:block opacity-25">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="1">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>

        {/* Subtle center dashed divider */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 h-full hidden lg:block"
          style={{ width: '1px', background: 'repeating-linear-gradient(to bottom, rgba(220,38,38,0.2) 0px, rgba(220,38,38,0.2) 6px, transparent 6px, transparent 14px)' }}
        />

        <div className="container-page px-4 sm:px-6 lg:px-0 relative z-10">
          <div className="flex flex-col items-center text-center gap-6 max-w-[860px] mx-auto">

            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold"
              style={{ background: 'rgba(220,38,38,0.15)', color: '#f87171', border: '1px solid rgba(220,38,38,0.3)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f87171]" />
              On-Demand Car Service Marketplace Script
            </div>

            <h1 className="text-[30px] leading-[38px] sm:text-[50px] sm:leading-[60px] lg:text-[64px] lg:leading-[74px] font-bold text-white">
              On Demand Car Service<br className="hidden sm:block" />
              Marketplace Platform GoCar
            </h1>

            <p className="text-white/65 text-[14px] sm:text-[16px] leading-7 max-w-[680px]">
              <strong className="text-white">GoCar</strong> is a Laravel + Flutter script for building a self-hosted car service marketplace. It connects car owners with mechanics and service providers — with vehicle-specific booking, real-time order tracking, push notifications, and 19+ payment gateways. One-time purchase, full source code.
            </p>

            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center text-[13px]">
              <div className="flex items-center gap-1.5 text-white/60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <span><strong className="text-white">5.0/5</strong> · CodeCanyon</span>
              </div>
              <span className="w-px h-3.5 bg-white/15 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-white/60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                <span><strong className="text-white">19+</strong> payment gateways</span>
              </div>
              <span className="w-px h-3.5 bg-white/15 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-white/60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                <span><strong className="text-white">$0/month</strong> — one-time ${REGULAR_PRICE}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap justify-center mt-1">
              <ScrollToPricing
                className="inline-flex items-center gap-2 font-bold text-[15px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg text-white"
                style={{ background: '#DC2626', boxShadow: '0 6px 20px rgba(220,38,38,0.4)' }}
              >
                {`Get GoCar — from $${REGULAR_PRICE}`}
              </ScrollToPricing>
              <Link
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-[15px] rounded-full px-8 py-3.5 border-2 border-white/30 text-white bg-white/5 hover:bg-white/15 transition-all hover:-translate-y-0.5 backdrop-blur-sm"
              >
                Explore Demo
              </Link>
            </div>

            <div className="flex items-center gap-5 flex-wrap justify-center">
              {QUICK_LINKS.map((link) =>
                link.external ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-medium text-white/70 underline underline-offset-4 decoration-white/30 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = link.href.replace('#', '');
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[14px] font-medium text-white/70 underline underline-offset-4 decoration-white/30 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

          </div>

          {/* Dashboard placeholder — replace with /products/gocar-dashboard.jpg when available */}
          <div className="relative z-10 mt-12 lg:mt-16 max-w-[1100px] mx-auto">
            <div
              className="overflow-hidden shadow-2xl rounded-xl"
              style={{ border: '3px solid rgba(220,38,38,0.25)', background: '#1a0a0a' }}
            >
              <div className="w-full flex items-center justify-center" style={{ minHeight: '420px' }}>
                <div className="flex flex-col items-center gap-4 opacity-30">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18M9 21V9"/>
                  </svg>
                  <span className="text-white text-[14px]">Admin Dashboard</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Feature strip */}
        <div className="relative z-20 mt-0 w-full border-t border-white/10" style={{ background: 'rgba(15,0,0,0.85)', backdropFilter: 'blur(8px)' }}>
          <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1200px] mx-auto">
            <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-6 lg:gap-10 py-4">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 17H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z"/><path d="M7 17v2M17 17v2M9 11l2 2 4-4"/>
                    </svg>
                  ),
                  label: 'Vehicle-Specific Booking',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  ),
                  label: 'Real-Time Order Tracking',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  label: 'Branch Location Management',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>
                  ),
                  label: 'Flutter Mobile App',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  ),
                  label: '19+ Payment Gateways',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-[#EBECEE]">
                  {item.icon}
                  <span className="text-[13px] font-medium whitespace-nowrap">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
