import { COLOR, COLOR_DARK, LIGHT_COLOR, DEMO_URL } from './constants';
import Link from 'next/link';

const PILLARS = [
  {
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    label: 'Single or multi-vendor',
    detail: 'Run a one-brand store or open it to unlimited vendors — the same codebase handles both models.',
  },
  {
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    label: '3 Flutter mobile apps',
    detail: 'Customer, Vendor, and Delivery Man apps — Android and iOS ready, in the Vendor Bundle.',
  },
  {
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    label: '26+ payment gateways',
    detail: 'Stripe, PayPal, Razorpay, and 23+ more — plus a dedicated POS gateway for in-store payments.',
  },
  {
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    label: 'Full source code — yours',
    detail: 'Buy once, own forever. No platform lock-in, no revenue cut, no recurring licence fees.',
  },
];

export default function Definition() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <div
              className="inline-flex items-center gap-2 self-start rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest"
              style={{ background: `${COLOR}15`, color: COLOR }}
            >
              What is SafeCart?
            </div>

            <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight">
              Single vendor or multi-vendor —{' '}
              <span style={{ color: COLOR_DARK }}>one codebase, your choice.</span>
            </h2>

            <p className="text-[#374151] text-[16px] leading-8">
              <strong>SafeCart is a self-hosted multi-vendor eCommerce platform built on{' '}
              <a
                href="https://laravel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 decoration-[#9ca3af] hover:decoration-current"
                style={{ color: COLOR_DARK }}
              >
                Laravel 10
              </a></strong>{' '}
              that works as either a
              single-vendor store or a full multi-vendor marketplace. Run it as your own branded shop today,
              then flip on vendor registration when you&apos;re ready to scale — no migration, no rebuild.
              It ships with separate admin, vendor, and customer dashboards, advanced inventory, campaign tools, and a POS system for in-store sales.
            </p>

            <p className="text-[#6b7280] text-[14px] leading-7 border-l-2 pl-4" style={{ borderColor: COLOR }}>
              SafeCart ships with <strong>26+ payment gateways</strong>, <strong>real-time delivery tracking</strong>,
              campaign countdown timers, a digital wallet system, advanced product variants, and GDPR-ready security —
              one purchase, full PHP source code, no monthly fees ever.
            </p>

            <p className="text-[#6b7280] text-[14px] leading-7">
              Building a different kind of store? Compare SafeCart with our{' '}
              <Link href="/products/grenmart-organic-grocery-ecommerce" className="font-semibold underline underline-offset-2 decoration-[#9ca3af] hover:decoration-current" style={{ color: COLOR_DARK }}>
                Grenmart grocery eCommerce script
              </Link>{' '}
              and the{' '}
              <Link href="/products/nazmart-multi-tenancy-ecommerce-platform" className="font-semibold underline underline-offset-2 decoration-[#9ca3af] hover:decoration-current" style={{ color: COLOR_DARK }}>
                Nazmart multi-tenancy eCommerce SaaS
              </Link>
              . You can also buy SafeCart directly on{' '}
              <a href="https://codecanyon.net/item/safecart-multivendor-laravel-ecommerce-platform/49428309" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 decoration-[#9ca3af] hover:decoration-current" style={{ color: COLOR_DARK }}>
                CodeCanyon
              </a>.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-6 py-3 transition-all hover:-translate-y-0.5"
                style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
              >
                See pricing
              </a>
              <Link
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-semibold underline underline-offset-4 decoration-[#9ca3af] hover:decoration-current transition-colors"
                style={{ color: COLOR_DARK }}
              >
                View live demo →
              </Link>
            </div>
          </div>

          {/* Right — 4 pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PILLARS.map((p, i) => (
              <div
                key={p.label}
                className="rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{
                  background: i === 0 ? COLOR : LIGHT_COLOR,
                  border: i === 0 ? 'none' : `1px solid ${COLOR}25`,
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: i === 0 ? 'rgba(255,255,255,0.2)' : `${COLOR}20` }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={i === 0 ? '#fff' : COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={p.icon} />
                  </svg>
                </div>
                <h3
                  className="text-[13px] font-bold leading-snug"
                  style={{ color: i === 0 ? '#fff' : COLOR_DARK }}
                >
                  {p.label}
                </h3>
                <p
                  className="text-[12px] leading-5"
                  style={{ color: i === 0 ? 'rgba(255,255,255,0.8)' : '#6b7280' }}
                >
                  {p.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
