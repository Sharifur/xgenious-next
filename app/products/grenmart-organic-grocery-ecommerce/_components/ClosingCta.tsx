import Link from 'next/link';
import { COLOR, DARK_BG, DEMO_URL, REGULAR_PRICE } from './constants';

export default function ClosingCta() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: DARK_BG }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="max-w-[760px] mx-auto text-center">

          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-6" style={{ background: `${COLOR}25`, color: '#7ee29a' }}>
            Full Source Code · Lifetime Updates · One-Time Price
          </div>

          <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-tight mb-5">
            Launch Your Grocery Store This Week
          </h2>

          <p className="text-[15px] sm:text-[17px] leading-7 mb-8" style={{ color: '#bfe0c8' }}>
            Stop paying monthly platform fees and waiting months for a custom build. Grenmart gives you a complete,
            SEO-ready online store — page builder, 20+ gateways, advanced inventory, and full Laravel source — for less
            than a single month of a hosted platform.
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-white font-semibold text-[16px] rounded-full px-9 py-4 transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: COLOR, boxShadow: `0 10px 30px ${COLOR}55` }}
            >
              {`Get Grenmart — from $${REGULAR_PRICE}`}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <Link
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[16px] rounded-full px-9 py-4 border-2 transition-all hover:-translate-y-0.5"
              style={{ borderColor: `${COLOR}40`, color: '#fff', background: 'transparent' }}
            >
              View Live Demo
            </Link>
          </div>

          <p className="text-[12px] mt-6" style={{ color: '#6fa67e' }}>
            One-time purchase · Lifetime updates · 6-month support · Installation support available
          </p>

        </div>
      </div>
    </section>
  );
}
