'use client';

import Link from 'next/link';
import Image from 'next/image';
import { DEMO_URL, REGULAR_PRICE, CODECANYON_URL } from './constants';
import ScrollToPricing from './ScrollToPricing';

const QUICK_LINKS = [
  { label: 'Admin Demo', href: `${DEMO_URL}login/admin`, external: true },
  { label: 'Buyer Demo', href: DEMO_URL, external: true },
  { label: 'Seller Demo', href: `${DEMO_URL}login`, external: true },
  { label: 'Documentation', href: 'https://docs.bytesed.com/docs/qixer-service-marketplace-and-service-finder/', external: true },
  { label: 'Pricing', href: '#pricing', external: false },
];

export default function Hero() {
  return (
    <>
      <section
        className="overflow-hidden pt-[60px] sm:pt-[100px] lg:pt-[140px] relative"
        style={{
          background: 'linear-gradient(to bottom, #ffffff 0%, #E0E1FD 100%)',
        }}
      >

        <div className="container-page px-4 sm:px-6 lg:px-0 relative z-10">
          <div className="flex flex-col items-center text-center gap-6 max-w-[860px] mx-auto">

            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold"
              style={{ background: 'rgba(99,105,241,0.1)', color: '#6369F1', border: '1px solid rgba(99,105,241,0.25)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6369F1]" />
              Multi-Vendor On-Demand Service Marketplace Script
            </div>

            <h1 className="text-[30px] leading-[38px] sm:text-[50px] sm:leading-[60px] lg:text-[64px] lg:leading-[74px] font-bold text-[#0F1112]">
              Launch a Multi-Vendor On-Demand<br className="hidden sm:block" />
              Service Marketplace
            </h1>

            <p className="text-[#484848] text-[14px] sm:text-[16px] leading-7 max-w-[680px]">
              <strong className="text-[#0F1112]">Qixer</strong> gives you everything to build a TaskRabbit-style platform — buyer app, seller app, drag-and-drop builders, dual revenue models, and 20+ payment gateways. One purchase, lifetime license.
            </p>

            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center text-[13px]">
              <div className="flex items-center gap-1.5 text-[#6b7280]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <span><strong className="text-[#0F1112]">712 Sales</strong> · CodeCanyon</span>
              </div>
              <span className="w-px h-3.5 bg-[#0F1112]/15 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-[#6b7280]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <span><strong className="text-[#0F1112]">4.5 Stars</strong> · 46 reviews</span>
              </div>
              <span className="w-px h-3.5 bg-[#0F1112]/15 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-[#6b7280]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                <span><strong className="text-[#0F1112]">Laravel 12</strong></span>
              </div>
              <span className="w-px h-3.5 bg-[#0F1112]/15 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-[#6b7280]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span><strong className="text-[#0F1112]">Lifetime Updates</strong></span>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap justify-center mt-1">
              <Link
                href={CODECANYON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-[15px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg text-white"
                style={{ background: '#6369F1', boxShadow: '0 6px 20px rgba(99,105,241,0.4)' }}
              >
                {`Get Qixer — from $${REGULAR_PRICE}`}
              </Link>
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
              style={{ borderTop: '2px solid rgba(99,105,241,0.2)', borderLeft: '2px solid rgba(99,105,241,0.2)', borderRight: '2px solid rgba(99,105,241,0.2)' }}
            >
              <Image
                src="/products/qixer-hero-preview.png"
                alt="Qixer multi-vendor on-demand service marketplace platform"
                width={1100}
                height={720}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>

        </div>

        <div className="relative z-20 mt-0 w-full border-t border-[#6369F1]/20" style={{ background: '#0F1112' }}>
          <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1200px] mx-auto">
            <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-6 lg:gap-10 py-4">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>
                  ),
                  label: 'Buyer App',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>
                  ),
                  label: 'Seller App',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  ),
                  label: '20+ Gateways',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                    </svg>
                  ),
                  label: 'Commission + Subscription',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                    </svg>
                  ),
                  label: 'Drag & Drop Builders',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  ),
                  label: '712 Sales',
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
