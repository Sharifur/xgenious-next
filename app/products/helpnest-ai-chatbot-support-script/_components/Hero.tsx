import Link from 'next/link';
import Image from 'next/image';
import { COLOR, DEMO_URL, REGULAR_PRICE } from './constants';
import ScrollToPricing from './ScrollToPricing';

const QUICK_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Live Demo', href: DEMO_URL },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Hero() {
  return (
    <section className="overflow-hidden pt-[100px] sm:pt-[160px] lg:pt-[250px]" style={{ background: '#070208' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="relative flex flex-col items-center text-center gap-6 max-w-[900px] mx-auto">

          {/* decorative circle — dark navy fill with indigo top arc border */}
          <div
            className="pointer-events-none absolute left-1/2 rounded-full z-0"
            style={{
              width: '1400px',
              height: '1400px',
              bottom: '-840px',
              background: 'linear-gradient(#00142B, #00142B) padding-box, linear-gradient(to right, #586BF1 0%, #020B15 64%) border-box',
              border: '20px solid transparent',
              transform: 'translateX(-50%) rotate(90deg)',
            }}
          />

          <div className="relative z-10 flex items-center gap-2 flex-wrap justify-center">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold"
              style={{ background: '#EEF2FF', color: COLOR }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: COLOR }} />
              AI-Powered Chatbot Script
            </div>
          </div>

          <h1 className="relative z-10 text-[28px] leading-[36px] sm:text-[48px] sm:leading-[56px] lg:text-[62px] lg:leading-[70px] font-bold text-white max-w-[860px]">
            Launch Your Own{' '}
            <span style={{ color: COLOR }}>AI Chatbot Support Platform</span>
          </h1>

          <p className="relative z-10 text-[#a89bb5] text-[14px] sm:text-[17px] leading-7 max-w-[580px]">
            A complete Laravel PHP script to build your own AI-powered customer support platform like Crisp, Intercom, or Tidio. Semantic AI chatbot, multi-tenant SaaS, ticketing, and subscription billing — one-time purchase.
          </p>

          <div className="relative z-10 flex items-center gap-4 sm:gap-6 flex-wrap justify-center text-[13px]">
            <div className="flex items-center gap-1.5 text-[#a89bb5]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <span><strong className="text-white">4.8/5</strong> Rating</span>
            </div>
            <span className="hidden sm:block w-px h-3.5 bg-white/15" />
            <div className="flex items-center gap-1.5 text-[#a89bb5]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Setup in <strong className="text-white">&lt;30 min</strong></span>
            </div>
            <span className="hidden sm:block w-px h-3.5 bg-white/15" />
            <div className="flex items-center gap-1.5 text-[#a89bb5]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              <span><strong className="text-white">$0/month</strong> — one-time $59</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-3 flex-wrap justify-center mt-1">
            <ScrollToPricing
              className="inline-flex items-center gap-2 text-white font-semibold text-[14px] sm:text-[15px] rounded-full px-6 sm:px-8 py-3 sm:py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
            >
              {`Get Helpnest — from $${REGULAR_PRICE}`}
            </ScrollToPricing>
            <Link
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[14px] sm:text-[15px] rounded-full px-6 sm:px-8 py-3 sm:py-3.5 border border-white/20 text-white bg-white/10 hover:bg-white/15 transition-all hover:-translate-y-0.5"
            >
              Explore Demo
            </Link>
          </div>

          <div className="relative z-10 flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            {QUICK_LINKS.map((link) =>
              link.href === '#pricing' ? (
                <ScrollToPricing
                  key={link.label}
                  className="text-[13px] sm:text-[14px] font-medium text-[#7a6e85] underline underline-offset-4 decoration-white/20 hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer"
                >
                  {link.label}
                </ScrollToPricing>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-[13px] sm:text-[14px] font-medium text-[#7a6e85] underline underline-offset-4 decoration-white/20 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

        </div>

        <div className="relative z-10 mt-12 lg:mt-16 max-w-[1100px] mx-auto">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/products/helpnest-dashboard.png"
              alt="Helpnest AI customer support platform dashboard"
              width={948}
              height={474}
              className="w-full object-cover"
              priority
            />
          </div>
        </div>

      </div>

      {/* Feature strip */}
      <div className="relative z-20 -mt-16 w-full border-t border-white/10" style={{ background: '#050D1A' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1200px] mx-auto">
          <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-6 lg:gap-10 py-4">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                  </svg>
                ),
                label: 'AI Powered Customer Service',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
                  </svg>
                ),
                label: 'Instant AI chatbot setup',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                ),
                label: 'Advanced AI training',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                ),
                label: 'Performance tracking',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
                  </svg>
                ),
                label: 'Smarter Support',
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
  );
}
