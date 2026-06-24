import Image from 'next/image';
import Link from 'next/link';
import {
  COLOR,
  COLOR_DARK,
  LIGHT_COLOR,
  DEMO_URL,
  ADMIN_DEMO_URL,
  DOCS_URL,
  REGULAR_PRICE,
} from './constants';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[120px] pb-0 sm:pt-[140px]" style={{ background: LIGHT_COLOR }}>
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] aspect-square rounded-full opacity-[0.10]"
        style={{
          top: '150px',
          background: `radial-gradient(circle, #ffffff 0%, ${COLOR_DARK} 85%, ${COLOR}50 100%)`,
          zIndex: 0,
        }}
      />

      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-6 relative z-10 max-w-[880px] mx-auto">

        <div className="inline-flex items-center gap-2 bg-white/70 rounded-full px-4 py-1.5 border border-white/80 text-[13px] font-medium text-[#3a4a3e]">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
          Organic & Grocery Laravel eCommerce Platform
        </div>

        <h1 className="text-[34px] leading-[42px] sm:text-[50px] sm:leading-[58px] lg:text-[58px] lg:leading-[66px] font-bold text-[#0F1112] max-w-[860px]">
          Launch Your Own{' '}
          <strong
            className="font-bold underline underline-offset-4 decoration-2"
            style={{ color: COLOR_DARK, textDecorationColor: COLOR }}
          >
            Organic Grocery Store
          </strong>{' '}
          Online
        </h1>

        <p className="text-[#3a4a3e] text-[15px] sm:text-[17px] leading-7 max-w-[640px]">
          <strong>Grenmart is an organic grocery &amp; multipurpose eCommerce platform built on Laravel.</strong> It ships
          with a no-code drag &amp; drop page builder, 50+ widgets, 3 home page variants, and 20+ payment gateways — plus
          advanced inventory, shipping, tax, and campaigns. Buy once, own the full source code, no monthly fees.
        </p>

        <div className="flex items-center gap-3 flex-wrap justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
          >
            {`Purchase Now — from $${REGULAR_PRICE}`}
          </a>
          <Link
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-[15px] rounded-full px-8 py-3.5 border-2 text-[#0F1112] border-[#0F1112]/20 bg-white/60 hover:bg-white transition-all hover:-translate-y-0.5"
          >
            View Live Demo
          </Link>
        </div>
        <p className="text-[12px] text-[#5a6b5e]">One-time purchase · No monthly fees · Full Laravel source code · RTL support</p>

        <div className="flex items-center gap-6 flex-wrap justify-center mt-1">
          {[
            { label: 'Frontend Demo', href: DEMO_URL },
            { label: 'Admin Demo', href: ADMIN_DEMO_URL },
            { label: 'Documentation', href: DOCS_URL },
            { label: 'Pricing', href: '#pricing' },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-[14px] font-medium text-[#3a4a3e] underline underline-offset-4 decoration-[#3a4a3e]/30 hover:text-[#0F1112] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 w-full max-w-[900px]">
          <div className="rounded-t-2xl overflow-hidden shadow-2xl border border-black/5">
            <Image
              src="/products/grenmart/hero-landing.png"
              alt="Grenmart organic and grocery Laravel eCommerce storefront homepage"
              width={2000}
              height={1282}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
