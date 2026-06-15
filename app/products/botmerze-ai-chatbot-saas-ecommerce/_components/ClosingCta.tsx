import Link from 'next/link';
import { COLOR, DEMO_URL, REGULAR_PRICE, BUNDLE_PRODUCT_PATH } from './constants';

export default function ClosingCta() {
  return (
    <section className="py-20 lg:py-[100px]" style={{ background: '#0d0f14' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[760px] mx-auto text-center">

        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-6"
          style={{ background: `${COLOR}20`, color: COLOR, border: `1px solid ${COLOR}40` }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
          One-time purchase — no monthly fees
        </div>

        <h2 className="text-[28px] sm:text-[40px] font-bold text-white leading-tight mb-5">
          Stop paying $499/mo.<br className="hidden sm:block" />
          Own your AI chatbot SaaS — from $49.
        </h2>

        <p className="text-[15px] sm:text-[17px] leading-7 mb-8" style={{ color: '#8aaa98' }}>
          Full source code. Self-hosted. WooCommerce &amp; Shopify ready out of the box.
          Your OpenAI key, your data, your recurring revenue.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/checkout?product=${BUNDLE_PRODUCT_PATH}`}
            className="inline-flex items-center gap-2 font-bold text-[15px] rounded-full px-8 py-3.5 text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: COLOR, boxShadow: `0 6px 24px ${COLOR}55` }}
          >
            Get Everything Bundle — $69
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-[15px] rounded-full px-8 py-3.5 border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all"
          >
            Explore Live Demo
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[12px] mt-6" style={{ color: '#4b6b5a' }}>
          <span>Lifetime updates</span>
          <span>·</span>
          <span>6 months support</span>
          <span>·</span>
          <span>Full source code</span>
          <span>·</span>
          <span>CodeCanyon verified</span>
        </div>

      </div>
    </section>
  );
}
