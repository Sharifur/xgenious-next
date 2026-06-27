import Image from 'next/image';
import Link from 'next/link';
import {
  COLOR,
  COLOR_DARK,
  LIGHT_COLOR,
  DEMO_URL,
  ADMIN_DEMO_URL,
  VENDOR_DEMO_URL,
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

      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-6 relative z-10 max-w-[900px] mx-auto">

        <div className="inline-flex items-center gap-2 bg-white/70 rounded-full px-4 py-1.5 border border-white/80 text-[13px] font-medium text-[#374151]">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
          Multi-Vendor eCommerce Platform — Laravel
        </div>

        <h1 className="text-[34px] leading-[42px] sm:text-[50px] sm:leading-[58px] lg:text-[58px] lg:leading-[66px] font-bold text-[#0F1112] max-w-[860px]">
          Your Own{' '}
          <strong
            className="font-bold underline underline-offset-4 decoration-2"
            style={{ color: COLOR_DARK, textDecorationColor: COLOR }}
          >
            Multi-Vendor eCommerce Platform.
          </strong>{' '}
          No Monthly Fees.
        </h1>

        <p className="text-[#4b5563] text-[15px] sm:text-[17px] leading-7 max-w-[640px]">
          <strong>SafeCart is a multi-vendor eCommerce platform built on Laravel 10.</strong> It ships with separate
          admin, vendor, and customer dashboards, three Flutter mobile apps, a POS system with barcode scanning,
          live delivery tracking, 26+ payment gateways, campaign countdown timers, and 4 no-code builders — for a one-time price.
        </p>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="15" height="15" viewBox="0 0 20 20" fill={i < 3 ? '#F59E0B' : '#E5E7EB'}>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[13px] font-semibold text-[#0F1112]">3.36/5</span>
          <span className="text-[13px] text-[#6b7280]">· 22 reviews · 402 sales on CodeCanyon</span>
        </div>

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
        <p className="text-[12px] text-[#6b7280]">One-time purchase · No monthly fees · Full Laravel source code · Flutter apps in Vendor Bundle &amp; Exclusive Pack</p>

        <div className="flex items-center gap-6 flex-wrap justify-center mt-1">
          {[
            { label: 'Frontend Demo', href: DEMO_URL },
            { label: 'Admin Demo', href: ADMIN_DEMO_URL },
            { label: 'Vendor Demo', href: VENDOR_DEMO_URL },
            { label: 'Documentation', href: DOCS_URL },
            { label: 'Pricing', href: '#pricing' },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-[14px] font-medium text-[#4b5563] underline underline-offset-4 decoration-[#4b5563]/30 hover:text-[#0F1112] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 w-full max-w-[900px]">
          <div className="rounded-t-2xl overflow-hidden shadow-2xl border border-black/5">
            <Image
              src="/products/safecart/hero-landing.png"
              alt="SafeCart multi-vendor eCommerce platform — storefront with product listings, categories, and vendor dashboard"
              width={1100}
              height={1090}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
