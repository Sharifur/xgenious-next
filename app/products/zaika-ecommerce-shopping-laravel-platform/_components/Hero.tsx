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

        <div className="inline-flex items-center gap-2 bg-white/70 rounded-full px-4 py-1.5 border border-white/80 text-[13px] font-medium text-[#5a3a47]">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
          Single Vendor eCommerce Laravel Platform
        </div>

        <h1 className="text-[34px] leading-[42px] sm:text-[50px] sm:leading-[58px] lg:text-[56px] lg:leading-[64px] font-bold text-[#0F1112] max-w-[860px]">
          Launch Your Own{' '}
          <strong
            className="font-bold underline underline-offset-4 decoration-2"
            style={{ color: COLOR_DARK, textDecorationColor: COLOR }}
          >
            Single Vendor eCommerce
          </strong>{' '}
          Platform
        </h1>

        <p className="text-[#5a3a47] text-[15px] sm:text-[17px] leading-7 max-w-[660px]">
          <strong>Zaika is a single-vendor eCommerce CMS built on Laravel.</strong> One store, one owner, zero
          commission — with a no-code drag &amp; drop page builder, 30+ widgets, and 15+ payment
          gateways, plus advanced inventory, shipping, tax, and campaigns. Buy once, own the full source code, no
          monthly fees.
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
        <p className="text-[12px] text-[#7a5563]">One-time purchase · No monthly fees · Full Laravel source code · RTL support</p>

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
              className="text-[14px] font-medium text-[#5a3a47] underline underline-offset-4 decoration-[#5a3a47]/30 hover:text-[#0F1112] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 w-full max-w-[940px]">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-black/5 bg-white">
            {/* browser chrome */}
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-black/5 bg-[#FBF3F7]">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: COLOR }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: `${COLOR}80` }} />
              <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
              <span className="ml-3 text-[11px] text-[#9a7585]">zaika.bytesed.com</span>
            </div>
            <Image
              src="/products/zaika/hero-storefront.png"
              alt="Zaika single vendor eCommerce Laravel storefront — fashion homepage with big sale banner and product grid"
              width={2000}
              height={1974}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
