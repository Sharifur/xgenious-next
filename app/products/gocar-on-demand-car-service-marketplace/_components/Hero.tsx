'use client';

import Link from 'next/link';
import Image from 'next/image';
import { DEMO_URL, REGULAR_PRICE, PLAY_STORE_URL, CODECANYON_URL } from './constants';
import ScrollToPricing from './ScrollToPricing';

const QUICK_LINKS = [
  { label: 'Admin Demo', href: DEMO_URL, external: true },
  { label: 'Customer Demo', href: DEMO_URL, external: true },
  { label: 'Mobile App', href: '#mobile-app', external: false },
  { label: 'Documentation', href: 'https://docs.bytesed.com/docs/gocar-on-demand-mechanic-and-car-service-provider-marketplace-platform/', external: true },
  { label: 'Pricing', href: '#pricing', external: false },
];

export default function Hero() {
  return (
    <>
      <section
        className="overflow-hidden pt-[60px] sm:pt-[100px] lg:pt-[140px] relative"
        style={{
          background: 'linear-gradient(to bottom, #ffffff 0%, #FFCFD0 100%)',
        }}
      >

        <div className="container-page px-4 sm:px-6 lg:px-0 relative z-10">
          <div className="flex flex-col items-center text-center gap-6 max-w-[860px] mx-auto">

            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold"
              style={{ background: 'rgba(220,38,38,0.1)', color: '#DC2626', border: '1px solid rgba(220,38,38,0.25)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              On-Demand Car Service Marketplace Script
            </div>

            <h1 className="text-[30px] leading-[38px] sm:text-[50px] sm:leading-[60px] lg:text-[64px] lg:leading-[74px] font-bold text-[#0F1112]">
              On Demand Car Service<br className="hidden sm:block" />
              Marketplace Platform GoCar
            </h1>

            <p className="text-[#484848] text-[14px] sm:text-[16px] leading-7 max-w-[680px]">
              <strong className="text-[#0F1112]">GoCar</strong> is a Laravel + Flutter script for building a self-hosted car service marketplace. It connects car owners with mechanics and service providers — with vehicle-specific booking, real-time order tracking, push notifications, and 19+ payment gateways. One-time purchase, full source code.
            </p>

            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center text-[13px]">
              <div className="flex items-center gap-1.5 text-[#6b7280]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <span><strong className="text-[#0F1112]">5.0/5</strong> · CodeCanyon</span>
              </div>
              <span className="w-px h-3.5 bg-[#0F1112]/15 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-[#6b7280]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                <span><strong className="text-[#0F1112]">19+</strong> payment gateways</span>
              </div>
              <span className="w-px h-3.5 bg-[#0F1112]/15 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-[#6b7280]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                <span><strong className="text-[#0F1112]">$0/month</strong> — one-time ${REGULAR_PRICE}</span>
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
                className="inline-flex items-center gap-2 font-semibold text-[15px] rounded-full px-8 py-3.5 border-2 border-[#0F1112]/20 text-[#0F1112] bg-white/40 hover:bg-white/70 transition-all hover:-translate-y-0.5 backdrop-blur-sm"
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
                    className="text-[14px] font-medium text-[#374151] underline underline-offset-4 decoration-[#374151]/30 hover:text-[#0F1112] transition-colors"
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
                    className="text-[14px] font-medium text-[#374151] underline underline-offset-4 decoration-[#374151]/30 hover:text-[#0F1112] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

          </div>

          <div className="relative z-10 mt-12 lg:mt-16 max-w-[1100px] mx-auto">
            <div
              className="overflow-hidden shadow-2xl rounded-t-2xl"
              style={{ borderTop: '2px solid rgba(220,38,38,0.2)', borderLeft: '2px solid rgba(220,38,38,0.2)', borderRight: '2px solid rgba(220,38,38,0.2)' }}
            >
              <Image
                src="/products/gocar-hero-preview.png"
                alt="GoCar on-demand car service marketplace platform"
                width={1100}
                height={720}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>

        </div>

        {/* Feature strip */}
        <div className="relative z-20 mt-0 w-full border-t border-[#DC2626]/20" style={{ background: '#0F1112' }}>
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
                <div key={item.label} className="flex items-center gap-2 text-white">
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
