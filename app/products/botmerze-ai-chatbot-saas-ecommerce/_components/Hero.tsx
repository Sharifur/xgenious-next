import Link from 'next/link';
import Image from 'next/image';
import { COLOR, DEMO_URL, REGULAR_PRICE, CODECANYON_URL } from './constants';
import ScrollLink from './ScrollLink';

const BADGES = [
  'WooCommerce & Shopify',
  'RAG-Powered AI',
  'Multi-Client SaaS',
  '18+ Payment Gateways',
  'Laravel 12',
];

export default function Hero() {
  return (
    <section
      className="overflow-hidden pt-[60px] sm:pt-[100px] lg:pt-[140px] pb-0 relative"
      style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #E0F2F1 100%)' }}
    >
      <div className="container-page px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="flex flex-col items-center text-center gap-6 max-w-[860px] mx-auto">

          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold"
            style={{ background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}40` }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            AI Chatbot SaaS Script for E-commerce
          </div>

          <h1 className="text-[30px] leading-[38px] sm:text-[50px] sm:leading-[60px] lg:text-[64px] lg:leading-[74px] font-bold text-[#0F1112]">
            AI Chatbot SaaS for<br className="hidden sm:block" />
            WooCommerce & Shopify
          </h1>

          <p className="text-[#484848] text-[14px] sm:text-[16px] leading-7 max-w-[680px] mt-4">
            <strong className="text-[#0F1112]">Botmerze</strong> is a self-hosted AI chatbot SaaS script powered by <strong className="text-[#0F1112]">RAG (Retrieval-Augmented Generation)</strong> and <strong className="text-[#0F1112]">pgvector</strong>. Train the chatbot on your store&apos;s knowledge base, sync live product and order data, capture leads, and automate customer support — on WooCommerce, Shopify, and any custom store.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {BADGES.map((b) => (
              <span
                key={b}
                className="text-[12px] font-semibold px-3 py-1 rounded-full border"
                style={{ background: `${COLOR}0f`, borderColor: `${COLOR}35`, color: COLOR }}
              >
                {b}
              </span>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 mt-1">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <ScrollLink
                href="#pricing"
                className="inline-flex items-center gap-2 font-bold text-[15px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg text-white"
                style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}66` }}
              >
                {`Get Botmerze — $${REGULAR_PRICE}`}
              </ScrollLink>
              <Link
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-[15px] rounded-full px-8 py-3.5 border-2 border-[#0F1112]/20 text-[#0F1112] bg-white/40 hover:bg-white/70 transition-all hover:-translate-y-0.5 backdrop-blur-sm"
              >
                Explore Demo
              </Link>
            </div>
            <p className="text-[12px] text-[#6b7280]">One-time purchase · No monthly fees · Full source code</p>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 mt-1">
              <span className="flex items-center gap-1.5 text-[11px] text-[#6b7280]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                6 months support included
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-[#6b7280]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.13-3.36L23 10M1 14l5.36 4.36A9 9 0 0020.49 15"/></svg>
                Lifetime updates
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-[#6b7280]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                CodeCanyon verified
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] text-[#6b7280] mt-2">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="#10b981"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              Reduces support tickets by 80%*
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="#10b981"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              35% higher average order value
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="#10b981"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              24/7 automated responses
            </span>
          </div>

        </div>

        {/* Hero screenshot */}
        <div className="mt-14 relative max-w-[1100px] mx-auto">
          <div className="rounded-t-2xl overflow-hidden border border-b-0 border-[#E5E7EC]" style={{ boxShadow: `0 -8px 60px ${COLOR}25` }}>
            <Image
              src="/products/botmerze-hero-v2.png"
              alt="Botmerze AI chatbot dashboard — chatbot builder and live chat widget preview"
              width={1200}
              height={720}
              className="w-full h-auto block"
              priority
            />
          </div>
        </div>

      </div>

      {/* Feature bar — full width */}
      <div className="w-full px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3" style={{ background: '#0d0f14' }}>
        {[
          { label: 'AI Powered Customer Service', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg> },
          { label: 'Instant AI chatbot setup', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg> },
          { label: 'Advanced AI training', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
          { label: 'Performance tracking', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
          { label: 'Smarter Support', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg> },
        ].map((item) => (
          <span key={item.label} className="flex items-center gap-2 text-[13px] font-medium text-white/70">
            <span className="text-white/50">{item.icon}</span>
            {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}
