import { COLOR, COLOR_DARK, LIGHT_COLOR, DEMO_URL } from './constants';
import Link from 'next/link';

const PILLARS = [
  {
    icon: 'M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V5m0 14v-3m7-4h-3M8 12H5',
    label: 'Two-sided marketplace',
    detail: 'Brands post campaigns or browse creators; influencers list packages or pitch. Both sides in one platform.',
  },
  {
    icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6',
    label: 'Escrow-secured payments',
    detail: 'Money is held safely until work is approved — trust built into every transaction.',
  },
  {
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    label: '20+ payment gateways',
    detail: 'Stripe, PayPal, Razorpay, Flutterwave and more — collect from brands and pay out influencers.',
  },
  {
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    label: 'Full source — yours',
    detail: 'Buy once on Laravel 12, own forever. No platform lock-in, no revenue cut, no recurring fees.',
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
              What is Influstar?
            </div>

            <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight">
              The platform where brands{' '}
              <span style={{ color: COLOR_DARK }}>hire influencers and pay securely.</span>
            </h2>

            <p className="text-[#374151] text-[16px] leading-8">
              <strong>Influstar is a self-hosted influencer hiring marketplace built on{' '}
              <a
                href="https://laravel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 decoration-[#9ca3af] hover:decoration-current"
                style={{ color: COLOR_DARK }}
              >
                Laravel 12
              </a></strong>{' '}
              that connects brands with influencers and content creators. Brands post campaigns or browse creator packages,
              negotiate over real-time chat, and pay through a built-in <strong>escrow</strong> system — while you earn
              commission on every booking and recurring revenue from influencer subscriptions.
            </p>

            <p className="text-[#6b7280] text-[14px] leading-7 border-l-2 pl-4" style={{ borderColor: COLOR }}>
              Influstar ships with <strong>service packages &amp; custom offers</strong>, a wallet &amp; withdrawal system,
              identity verification &amp; 2FA, reviews &amp; ratings, 20+ payment gateways, and no-code drag &amp; drop builders —
              one purchase, full PHP source code, no monthly fees ever.
            </p>

            <p className="text-[#6b7280] text-[14px] leading-7">
              Exploring other Xgenious marketplace scripts? Compare Influstar with our{' '}
              <Link href="/products/xilancer-freelancer-marketplace-script" className="font-semibold underline underline-offset-2 decoration-[#9ca3af] hover:decoration-current" style={{ color: COLOR_DARK }}>
                Xilancer freelancer marketplace
              </Link>{' '}
              and{' '}
              <Link href="/products/prohandy-on-demand-home-service-marketplace" className="font-semibold underline underline-offset-2 decoration-[#9ca3af] hover:decoration-current" style={{ color: COLOR_DARK }}>
                Prohandy service marketplace
              </Link>
              .
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
                style={{ background: i === 0 ? COLOR : LIGHT_COLOR, border: i === 0 ? 'none' : `1px solid ${COLOR}25` }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: i === 0 ? 'rgba(255,255,255,0.2)' : `${COLOR}20` }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={i === 0 ? '#fff' : COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={p.icon} />
                  </svg>
                </div>
                <h3 className="text-[13px] font-bold leading-snug" style={{ color: i === 0 ? '#fff' : COLOR_DARK }}>
                  {p.label}
                </h3>
                <p className="text-[12px] leading-5" style={{ color: i === 0 ? 'rgba(255,255,255,0.8)' : '#6b7280' }}>
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
