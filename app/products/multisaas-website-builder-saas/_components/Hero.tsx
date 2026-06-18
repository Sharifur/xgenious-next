import Image from 'next/image';
import Link from 'next/link';
import { COLOR, PURCHASE_URL, DEMO_URL, ADMIN_DEMO_URL, DOCS_URL, REGULAR_PRICE } from './constants';

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes multisaas-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <section
        className="relative overflow-hidden pt-[120px] pb-0 sm:pt-[140px]"
        style={{ background: '#FEF3F1' }}
      >
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] aspect-square rounded-full opacity-[0.10]"
          style={{
            top: '150px',
            background: `radial-gradient(circle, #ffffff 0%, #c0392b 85%, ${COLOR}50 100%)`,
            zIndex: 0,
          }}
        />

        <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-6 relative z-10 max-w-[860px] mx-auto">

          <div className="inline-flex items-center gap-2 bg-white/70 rounded-full px-4 py-1.5 border border-white/80 text-[13px] font-medium text-[#484848]">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Multi-Tenancy Website Builder SaaS Platform
          </div>

          <h1 className="text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[60px] lg:leading-[68px] font-bold text-[#0F1112] max-w-[860px]">
            Launch Your Own{' '}
            <strong
              className="font-bold underline underline-offset-4 decoration-2"
              style={{ color: '#b83a2b', textDecorationColor: COLOR }}
            >
              Website Builder SaaS
            </strong>{' '}
            Business
          </h1>

          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7 max-w-[600px]">
            <strong>MultiSaas is a multi-tenant website builder SaaS platform</strong> — one installation where your customers (tenants) log in, pick a subscription plan, choose a theme, set their domain, and launch a working website in minutes. You collect the subscription revenue. You own the platform.
          </p>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#F59E0B">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[13px] font-semibold text-[#0F1112]">5.0/5</span>
            <span className="text-[13px] text-[#6b7280]">· 550+ clients using the platform</span>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center mt-1">
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
              Explore Demos
            </Link>
          </div>
          <p className="text-[12px] text-[#6b7280]">One-time purchase · No monthly fees · 200+ languages · Full source code</p>

          <div className="flex items-center gap-6 flex-wrap justify-center mt-1">
            {[
              { label: 'Admin Demo', href: ADMIN_DEMO_URL },
              { label: 'Explore Demos', href: DEMO_URL },
              { label: 'Documentation', href: DOCS_URL },
              { label: 'Pricing', href: '#pricing' },
            ].map((link) => (
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

          <div className="mt-10 w-full max-w-[900px]">
            <div className="rounded-t-2xl overflow-hidden shadow-2xl">
              <Image
                src="/products/multisaas-hero.png"
                alt="MultiSaas multi-tenant website builder SaaS platform landing page"
                width={1763}
                height={2000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
