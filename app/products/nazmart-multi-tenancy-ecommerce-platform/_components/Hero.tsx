import Image from 'next/image';
import Link from 'next/link';
import { COLOR, PURCHASE_URL, DEMO_URL, QUICK_LINKS, REGULAR_PRICE } from './constants';

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes nazmart-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

      <section
        className="relative overflow-hidden pt-[120px] pb-0 sm:pt-[140px]"
        style={{ background: '#F8FFEE' }}
      >
        {/* Background gradient ball — full-width circle, top half visible */}
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] aspect-square rounded-full opacity-[0.12]"
          style={{
            top: '150px',
            background: 'radial-gradient(circle, #FFFFFF 0%, #154646 85%, rgba(146,231,33,0.5) 100%)',
            zIndex: 0,
          }}
        />

        {/* Center content */}
        <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-6 relative z-10 max-w-[860px] mx-auto">

          <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-4 py-1.5 border border-white/80 text-[13px] font-medium text-[#484848]">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Multi-Tenancy eCommerce SaaS Platform
          </div>

          <h1 className="text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[60px] lg:leading-[68px] font-bold text-[#0F1112] max-w-[860px]">
            Nazmart: Build Your Own{' '}
            <strong
              className="font-bold underline underline-offset-4 decoration-2"
              style={{ color: '#3a7d00', textDecorationColor: COLOR }}
            >
              Multi-Tenant eCommerce
            </strong>{' '}
            Platform
          </h1>

          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7 max-w-[580px]">
            <strong>Nazmart is a multi-tenant eCommerce platform</strong> — a single Laravel installation where unlimited merchants create their own branded online stores, pay you a subscription, and go live with a custom domain. You own the platform, keep 100% of subscription revenue, and scale without rebuilding.
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center mt-1">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: '#ec7161', boxShadow: '0 6px 20px #ec716140' }}
            >
              {`Purchase Now — from $${REGULAR_PRICE}`}
            </a>
            <Link
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[15px] rounded-full px-8 py-3.5 border-2 text-[#0F1112] border-[#0F1112]/20 bg-white/60 hover:bg-white transition-all hover:-translate-y-0.5"
            >
              Explore Demos
            </Link>
          </div>
          <p className="text-[12px] text-[#6b7280]">One-time purchase · No monthly fees · Full source code</p>

          {/* Quick links */}
          <div className="flex items-center gap-6 flex-wrap justify-center mt-1">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-[14px] font-medium text-[#484848] underline underline-offset-4 decoration-[#484848]/30 hover:text-[#0F1112] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hero image */}
          <div className="mt-10 w-full max-w-[900px]">
            <div className="rounded-t-2xl overflow-hidden shadow-2xl">
              <Image sizes="(max-width: 768px) 100vw, 900px"
                src="/products/nazmart-hero.jpg"
                alt="Nazmart multi-tenancy eCommerce SaaS platform dashboard"
                width={900}
                height={540}
                className="w-full object-cover object-top"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
