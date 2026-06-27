import Link from 'next/link';
import { COLOR, REGULAR_PRICE, COMBO_PRICE, EXTENDED_PRICE, PURCHASE_URL } from './constants';
import CodeCanyonUpsellButton from '@/components/ui/CodeCanyonUpsellButton';

const ACCENT = '#a78bfa';

const REGULAR_FEATURES = [
  { label: 'Fundorex Web Platform', ok: true },
  { label: 'Admin Panel & Analytics', ok: true },
  { label: 'All Platform Features', ok: true },
  { label: '20+ Payment Gateways', ok: true },
  { label: 'Event Ticketing Module', ok: true },
  { label: 'Lifetime License + Updates', ok: true },
  { label: '6 Months Support', ok: true },
  { label: 'Flutter Mobile App', ok: false },
  { label: 'Source Code Modification Rights', ok: false },
];

const BUNDLE_FEATURES = [
  { label: 'Fundorex Web Platform', ok: true },
  { label: 'Admin Panel & Analytics', ok: true },
  { label: 'All Platform Features', ok: true },
  { label: '20+ Payment Gateways', ok: true },
  { label: 'Event Ticketing Module', ok: true },
  { label: 'Lifetime License + Updates', ok: true },
  { label: '6 Months Support', ok: true },
  { label: 'Flutter Mobile App', ok: true },
  { label: 'Source Code Modification Rights', ok: false },
];

const EXCLUSIVE_FEATURES = [
  { label: 'Everything in Bundle Pack', ok: true },
  { label: 'Full Source Code Modification Rights', ok: true },
  { label: 'Remove / Replace Any Branding', ok: true },
  { label: 'Commercial Use — Unlimited Projects', ok: true },
  { label: 'Priority Support — 6 Months', ok: true },
  { label: 'Lifetime License + Free Updates', ok: true },
  { label: 'Cannot be resold or redistributed as-is', ok: 'note' as const },
];

function CheckIcon({ ok }: { ok: boolean | 'note' }) {
  if (ok === 'note') {
    return (
      <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="10" fill="rgba(167,139,250,0.15)" />
        <path d="M10 6v4M10 13v1" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (ok) {
    return (
      <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="10" fill="#dcfce7" />
        <path d="M6 10l3 3 5-5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#F3F4F6" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[560px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7">
            One-time purchase. No monthly fees. No platform commission. You keep 100% of what your campaigns raise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1240px] mx-auto">

          {/* Regular License */}
          <div className="bg-white rounded-2xl border border-[#E5E7EC] p-7 flex flex-col">
            <div className="mb-6">
              <p className="text-[13px] font-semibold text-[#6b7280] uppercase tracking-widest mb-2">Regular License</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[48px] font-bold text-[#0F1112] leading-none">${REGULAR_PRICE}</span>
                <span className="text-[15px] text-[#9ca3af]">one-time</span>
              </div>
              <p className="text-[13px] text-[#6b7280] leading-5">Web platform only. One-time purchase, no monthly fees.</p>
            </div>

            <CodeCanyonUpsellButton
              codecanyonUrl={PURCHASE_URL}
              regularPrice={REGULAR_PRICE}
              bundlePrice={COMBO_PRICE}
              bundleCheckoutUrl="/checkout?product=fundorex-bundle-pack"
              bundleItems={['Flutter Mobile App']}
              bundleLabel="Bundle Pack"
              accentColor={COLOR}
              className="flex items-center justify-center gap-2 font-semibold text-[14px] rounded-xl py-3 mb-6 border border-[#E5E7EC] text-[#0F1112] transition-all hover:bg-[#f9fafb]"
            >
              Get Regular License
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </CodeCanyonUpsellButton>

            <div className="flex flex-col gap-2.5">
              {REGULAR_FEATURES.map((f) => (
                <div key={f.label} className="flex items-start gap-2.5 text-[13px]" style={{ color: f.ok ? '#374151' : '#9ca3af' }}>
                  <CheckIcon ok={f.ok} />
                  {f.label}
                </div>
              ))}
            </div>
          </div>

          {/* Everything Bundle */}
          <div
            className="rounded-2xl p-7 flex flex-col relative overflow-hidden"
            style={{ background: '#0f2620', border: `2px solid ${COLOR}` }}
          >
            <div className="flex items-center gap-2 flex-wrap mb-6">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full" style={{ background: COLOR, color: '#fff' }}>
                BEST VALUE
              </span>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#16a34a] text-white">
                MOBILE APP
              </span>
            </div>

            <div className="mb-5">
              <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${COLOR}cc` }}>Everything Bundle</p>

              <div className="flex items-center gap-2 mb-1">
                <span className="text-[20px] font-semibold line-through" style={{ color: '#4b6b5a' }}>$118</span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: `${COLOR}25`, color: COLOR }}>
                  33% OFF
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[56px] font-bold text-white leading-none">${COMBO_PRICE}</span>
                <span className="text-[15px] text-[#6b8a7a]">one-time</span>
              </div>

              <div className="rounded-xl p-3 flex flex-col gap-1.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: `${COLOR}99` }}>What you&apos;re getting</p>
                {[
                  ['Web Platform', `$${REGULAR_PRICE}`],
                  ['Flutter Mobile App', '$49'],
                ].map(([item, price]) => (
                  <div key={item} className="flex items-center justify-between">
                    <span className="text-[12px]" style={{ color: '#8aaa98' }}>{item}</span>
                    <span className="text-[12px] font-semibold line-through" style={{ color: '#4b6b5a' }}>{price}</span>
                  </div>
                ))}
                <div className="border-t mt-1 pt-1.5 flex items-center justify-between" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <span className="text-[12px] font-bold text-white">Total value</span>
                  <span className="text-[12px] font-bold" style={{ color: COLOR }}>${REGULAR_PRICE + 49} → ${COMBO_PRICE}</span>
                </div>
              </div>
            </div>

            <Link
              href="/checkout?product=fundorex-bundle-pack"
              className="flex items-center justify-center gap-2 text-white font-bold text-[15px] rounded-xl py-3.5 mb-6 transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: COLOR, boxShadow: `0 8px 24px ${COLOR}55` }}
            >
              Get Everything — ${COMBO_PRICE} one-time
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div className="flex flex-col gap-2.5">
              {BUNDLE_FEATURES.map((f) => (
                <div key={f.label} className="flex items-start gap-2.5 text-[13px]" style={{ color: f.ok ? '#d1fae5' : '#4b6b5a' }}>
                  <CheckIcon ok={f.ok} />
                  {f.label}
                </div>
              ))}
            </div>
          </div>

          {/* Extended License */}
          <div
            className="rounded-2xl p-7 flex flex-col relative overflow-hidden"
            style={{ background: '#0d0f14', border: `2px solid ${ACCENT}` }}
          >
            <div className="flex items-center gap-2 flex-wrap mb-6">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full" style={{ background: ACCENT, color: '#fff' }}>
                EXTENDED
              </span>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#1d4ed8] text-white">
                FOR BUSINESS
              </span>
            </div>

            <div className="mb-5">
              <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${ACCENT}cc` }}>Extended License</p>

              <div className="flex items-center gap-2 mb-1">
                <span className="text-[20px] font-semibold line-through" style={{ color: '#3d3a52' }}>$299</span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: `${ACCENT}25`, color: ACCENT }}>
                  33% OFF
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[56px] font-bold text-white leading-none">${EXTENDED_PRICE}</span>
                <span className="text-[15px]" style={{ color: '#6b6880' }}>one-time</span>
              </div>

              <div className="rounded-xl p-3 flex flex-col gap-1.5" style={{ background: 'rgba(167,139,250,0.07)' }}>
                <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: `${ACCENT}80` }}>Built for organisations</p>
                {[
                  'Modify source code freely',
                  'Remove or replace all branding',
                  'Commercial use — unlimited projects',
                  'Priority support — 6 months',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                      <circle cx="10" cy="10" r="10" fill="rgba(167,139,250,0.15)" />
                      <path d="M6 10l3 3 5-5" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[12px]" style={{ color: '#9d99b8' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/checkout?product=fundorex-exclusive-pack"
              className="flex items-center justify-center gap-2 text-white font-bold text-[15px] rounded-xl py-3.5 mb-6 transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: ACCENT, boxShadow: `0 8px 24px ${ACCENT}45` }}
            >
              Get Extended — ${EXTENDED_PRICE}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div className="flex flex-col gap-2.5">
              {EXCLUSIVE_FEATURES.map((f) => (
                <div
                  key={f.label}
                  className="flex items-start gap-2.5 text-[13px]"
                  style={{ color: f.ok === 'note' ? `${ACCENT}99` : f.ok ? '#e0dbff' : '#3d3a52' }}
                >
                  <CheckIcon ok={f.ok} />
                  {f.label}
                </div>
              ))}
            </div>
          </div>

        </div>

        <p className="text-center text-[12px] text-[#9ca3af] mt-8 max-w-[500px] mx-auto">
          All prices in USD. Lifetime validity. One-time payment. No monthly fees.
        </p>

      </div>
    </section>
  );
}
