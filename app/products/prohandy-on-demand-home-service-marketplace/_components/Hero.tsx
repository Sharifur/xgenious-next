'use client';

import Link from 'next/link';
import Image from 'next/image';
import { DEMO_URL, REGULAR_PRICE } from './constants';
import ScrollToPricing from './ScrollToPricing';

const QUICK_LINKS = [
  { label: 'Admin Demo', href: DEMO_URL, external: true },
  { label: 'Website Demo', href: DEMO_URL, external: true },
  { label: 'Mobile App', href: '#mobile-app', external: false },
  { label: 'Documentation', href: 'https://docs.xgenious.com/docs/prohandy-admin-panel/', external: true },
  { label: 'Pricing', href: '#pricing', external: false },
];

export default function Hero() {
  return (
    <>
    <style>{`
      @keyframes prohandy-float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-14px) rotate(4deg); }
      }
      @keyframes prohandy-twinkle {
        0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.8; }
        33% { transform: rotate(12deg) scale(1.12); opacity: 1; }
        66% { transform: rotate(-8deg) scale(0.95); opacity: 0.7; }
      }
      .prohandy-lightning { animation: prohandy-float 4s ease-in-out infinite; }
      .prohandy-star      { animation: prohandy-twinkle 5s ease-in-out infinite; }
    `}</style>
    <section
      className="overflow-hidden pt-[100px] sm:pt-[160px] lg:pt-[220px] relative"
      style={{
        backgroundImage: 'url(/products/prohandy-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Lightning bolt — left */}
      <div className="prohandy-lightning pointer-events-none absolute left-[4%] top-[28%] hidden lg:block opacity-80">
        <Image
          src="/products/prohandy-lightning.svg"
          alt=""
          width={95}
          height={103}
        />
      </div>

      {/* Star / sparkle — right */}
      <div className="prohandy-star pointer-events-none absolute right-[5%] top-[18%] hidden lg:block opacity-80">
        <Image
          src="/products/prohandy-star.svg"
          alt=""
          width={97}
          height={122}
        />
      </div>

      {/* Subtle center dashed divider */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-full hidden lg:block"
        style={{ width: '1px', background: 'repeating-linear-gradient(to bottom, rgba(99,179,237,0.25) 0px, rgba(99,179,237,0.25) 6px, transparent 6px, transparent 14px)' }}
      />

      <div className="container-page px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="flex flex-col items-center text-center gap-6 max-w-[860px] mx-auto">

          <h1 className="text-[30px] leading-[38px] sm:text-[50px] sm:leading-[60px] lg:text-[64px] lg:leading-[74px] font-bold text-white">
            On Demand Home Service<br className="hidden sm:block" />
            Marketplace Platform Prohandy
          </h1>

          <p className="text-white/65 text-[14px] sm:text-[16px] leading-7 max-w-[680px]">
            <strong className="text-white">Prohandy</strong> is a Laravel 12 + Flutter 3.32 script for building a self-hosted on-demand service marketplace. It connects clients and providers across any service vertical — home services, beauty, automotive, pet care, and more — with cart-based booking, job posting, real-time chat, and 19 payment gateways. One-time purchase, full source code.
          </p>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center text-[13px]">
            <div className="flex items-center gap-1.5 text-white/60">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <span><strong className="text-white">5.0/5</strong> · 6 reviews</span>
            </div>
            <span className="w-px h-3.5 bg-white/15 hidden sm:block" />
            <div className="flex items-center gap-1.5 text-white/60">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              <span><strong className="text-white">73+</strong> marketplaces built</span>
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
              style={{ background: '#FF5B3A', boxShadow: '0 6px 20px rgba(255,91,58,0.4)' }}
            >
              {`Get Prohandy — from $${REGULAR_PRICE}`}
            </ScrollToPricing>
            <Link
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[15px] rounded-full px-8 py-3.5 border-2 border-white/30 text-white bg-white/5 hover:bg-white/15 transition-all hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Explore Demos
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

        {/* Dashboard screenshot */}
        <div className="relative z-10 mt-12 lg:mt-16 max-w-[1100px] mx-auto">
          <div
            className="overflow-hidden shadow-2xl"
            style={{ border: '3px solid rgba(255,255,255,0.15)', background: '#fff' }}
          >
            <Image
              src="/products/prohandy-dashboard.jpg"
              alt="Prohandy on-demand home service marketplace platform dashboard"
              width={1100}
              height={620}
              className="w-full object-cover"
              priority
            />
          </div>
        </div>

      </div>

      {/* Feature strip */}
      <div className="relative z-20 mt-0 w-full border-t border-white/10" style={{ background: 'rgba(3,13,36,0.85)', backdropFilter: 'blur(8px)' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1200px] mx-auto">
          <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-6 lg:gap-10 py-4">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                label: 'Dual-Sided Marketplace',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                  </svg>
                ),
                label: 'Cart & Multi-Service Booking',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                ),
                label: 'Real-Time Live Chat',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                label: 'Google Maps Integration',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
                  </svg>
                ),
                label: 'Flutter Mobile Apps',
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
