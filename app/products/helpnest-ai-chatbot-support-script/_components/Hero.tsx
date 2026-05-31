import Link from 'next/link';
import Image from 'next/image';
import { COLOR, DEMO_URL, REGULAR_PRICE } from './constants';

const QUICK_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Live Demo', href: DEMO_URL },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Hero() {
  return (
    <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 overflow-hidden" style={{ background: '#070208' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="relative flex flex-col items-center text-center gap-6 max-w-[900px] mx-auto">

          {/* decorative circle — dark navy fill with indigo top arc border */}
          <div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: '860px',
              height: '860px',
              bottom: '-560px',
              background: '#020c1e',
              border: '2.5px solid #4f6af0',
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
            <span style={{ color: COLOR }}>AI Support Platform</span>
          </h1>

          <p className="relative z-10 text-[#a89bb5] text-[14px] sm:text-[17px] leading-7 max-w-[580px]">
            A complete Laravel PHP script to build your own AI-powered customer support platform like Crisp, Intercom, or Tidio. Semantic AI chatbot, multi-tenant SaaS, ticketing, and subscription billing — one-time purchase.
          </p>

          <div className="relative z-10 flex items-center gap-3 flex-wrap justify-center mt-1">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-white font-semibold text-[14px] sm:text-[15px] rounded-full px-6 sm:px-8 py-3 sm:py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
            >
              {`Get HelpNest — from $${REGULAR_PRICE}`}
            </a>
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
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-[13px] sm:text-[14px] font-medium text-[#7a6e85] underline underline-offset-4 decoration-white/20 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

        </div>

        <div className="mt-12 lg:mt-16 relative max-w-[1100px] mx-auto">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/products/helpnest-hero.jpg"
              alt="HelpNest AI customer support platform dashboard"
              width={1100}
              height={620}
              className="w-full object-cover"
              priority
            />
          </div>
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 rounded-2xl border border-white/10 shadow-lg px-6 py-3"
            style={{ background: '#13101a' }}
          >
            {[
              { label: 'AI Model', value: 'GPT-4 + Claude' },
              { label: 'Framework', value: 'Laravel 12' },
              { label: 'License', value: 'One-time' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-0.5">
                <span className="text-[13px] font-bold text-white">{stat.value}</span>
                <span className="text-[11px] text-[#6b6074]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
