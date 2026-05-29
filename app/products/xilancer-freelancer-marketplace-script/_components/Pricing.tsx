import Link from 'next/link';
import { COLOR, PURCHASE_URL, REGULAR_PRICE, BUNDLE_PRICE, BUNDLE_PRODUCT_PATH, EXCLUSIVE_PRICE, EXCLUSIVE_PRODUCT_PATH } from './constants';

const REGULAR_FEATURES = [
  { label: 'Xilancer Web Platform', ok: true },
  { label: 'Admin Panel & Analytics', ok: true },
  { label: 'All Web Premium Features', ok: true },
  { label: 'Escrow Payment System', ok: true },
  { label: 'Real-Time Chat', ok: true },
  { label: 'Lifetime License + Updates', ok: true },
  { label: '6 Months Support', ok: true },
  { label: 'Freelancer Mobile App (Flutter)', ok: false },
  { label: 'Client Mobile App (Flutter)', ok: false },
  { label: 'Freelancer Level Plugin', ok: false },
  { label: 'Promotional Ads Plugin', ok: false },
  { label: 'Security Plugin', ok: false },
  { label: 'Cloud Storage Plugin', ok: false },
  { label: 'Hourly Hiring Plugin', ok: false },
  { label: 'Community Plugin', ok: false },
  { label: 'Source Code Modification Rights', ok: false },
];

const BUNDLE_FEATURES = [
  { label: 'Xilancer Web Platform', ok: true },
  { label: 'Admin Panel & Analytics', ok: true },
  { label: 'All Web Premium Features', ok: true },
  { label: 'Escrow Payment System', ok: true },
  { label: 'Real-Time Chat', ok: true },
  { label: 'Lifetime License + Updates', ok: true },
  { label: '6 Months Support', ok: true },
  { label: 'Freelancer Mobile App (Flutter)', ok: true },
  { label: 'Client Mobile App (Flutter)', ok: true },
  { label: 'Freelancer Level Plugin', ok: true },
  { label: 'Promotional Ads Plugin', ok: true },
  { label: 'Security Plugin', ok: true },
  { label: 'Cloud Storage Plugin', ok: true },
  { label: 'Hourly Hiring Plugin', ok: true },
  { label: 'Community Plugin', ok: true },
  { label: 'Source Code Modification Rights', ok: false },
];

const EXCLUSIVE_FEATURES = [
  { label: 'Everything in Bundle Pack', ok: true },
  { label: 'Full Source Code Modification Rights', ok: true },
  { label: 'Remove / Replace Any Branding', ok: true },
  { label: 'No License Key Enforcement', ok: true },
  { label: 'Priority Support — 12 Months', ok: true },
  { label: 'Commercial Use — Unlimited Projects', ok: true },
  { label: 'Lifetime License + Free Updates', ok: true },
  { label: 'Cannot be resold or redistributed as-is', ok: 'note' as const },
];

const ACCENT = '#a78bfa';

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

const BUNDLE_CHECKOUT_URL = `/checkout?product=${BUNDLE_PRODUCT_PATH}`;
const EXCLUSIVE_CHECKOUT_URL = `/checkout?product=${EXCLUSIVE_PRODUCT_PATH}`;

export default function Pricing() {
  return (
    <section id="pricing" className="pb-16 sm:pb-20 lg:pb-[100px]" style={{ background: '#F5F6F8' }}>

      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[560px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7">
            One-time purchase. No monthly fees. No platform commission. You keep 100% of what your marketplace earns.
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
              <p className="text-[13px] text-[#6b7280] leading-5">Web platform only. Buy directly on CodeCanyon.</p>
            </div>

            <Link
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-semibold text-[14px] rounded-xl py-3 mb-6 border border-[#E5E7EC] text-[#0F1112] transition-all hover:bg-[#f9fafb]"
            >
              Buy on CodeCanyon
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

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
            {/* Top badges */}
            <div className="flex items-center gap-2 flex-wrap mb-6">
              <span
                className="text-[11px] font-bold px-3 py-1 rounded-full"
                style={{ background: COLOR, color: '#fff' }}
              >
                BEST VALUE
              </span>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#16a34a] text-white">
                COMMERCIAL USE
              </span>
            </div>

            <div className="mb-5">
              <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${COLOR}cc` }}>Everything Bundle</p>

              <div className="flex items-center gap-2 mb-1">
                <span className="text-[20px] font-semibold line-through" style={{ color: '#4b6b5a' }}>$282</span>
                <span
                  className="text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                  style={{ background: `${COLOR}25`, color: COLOR }}
                >
                  66% OFF
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[56px] font-bold text-white leading-none">${BUNDLE_PRICE}</span>
                <span className="text-[15px] text-[#6b8a7a]">one-time</span>
              </div>

              <div className="rounded-xl p-3 flex flex-col gap-1.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: `${COLOR}99` }}>What you&apos;re getting</p>
                {[
                  ['Web Platform', '$59'],
                  ['Freelancer Mobile App', '$49'],
                  ['Client Mobile App', '$49'],
                  ['6 Premium Plugins', '$126'],
                ].map(([item, price]) => (
                  <div key={item} className="flex items-center justify-between">
                    <span className="text-[12px]" style={{ color: '#8aaa98' }}>{item}</span>
                    <span className="text-[12px] font-semibold line-through" style={{ color: '#4b6b5a' }}>{price}</span>
                  </div>
                ))}
                <div className="border-t mt-1 pt-1.5 flex items-center justify-between" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <span className="text-[12px] font-bold text-white">Total value</span>
                  <span className="text-[12px] font-bold" style={{ color: COLOR }}>$283 → ${BUNDLE_PRICE}</span>
                </div>
              </div>
            </div>

            <a
              href={BUNDLE_CHECKOUT_URL}
              className="flex items-center justify-center gap-2 text-white font-bold text-[15px] rounded-xl py-3.5 mb-6 transition-all hover:opacity-90 hover:-translate-y-0.5 cursor-pointer"
              style={{ background: COLOR, boxShadow: `0 8px 24px ${COLOR}55` }}
            >
              Get Everything — $99 one-time
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <div className="flex flex-col gap-2.5">
              {BUNDLE_FEATURES.map((f) => (
                <div key={f.label} className="flex items-start gap-2.5 text-[13px]" style={{ color: f.ok ? '#d1fae5' : '#4b6b5a' }}>
                  <CheckIcon ok={f.ok} />
                  {f.label}
                </div>
              ))}
            </div>
          </div>

          {/* Exclusive License */}
          <div
            className="rounded-2xl p-7 flex flex-col relative overflow-hidden"
            style={{ background: '#0d0f14', border: `2px solid ${ACCENT}` }}
          >
            {/* Top badges */}
            <div className="flex items-center gap-2 flex-wrap mb-6">
              <span
                className="text-[11px] font-bold px-3 py-1 rounded-full"
                style={{ background: ACCENT, color: '#fff' }}
              >
                EXCLUSIVE
              </span>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#1d4ed8] text-white">
                FOR BUSINESS
              </span>
            </div>

            <div className="mb-5">
              <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${ACCENT}cc` }}>Exclusive License</p>

              <div className="flex items-center gap-2 mb-1">
                <span className="text-[20px] font-semibold line-through" style={{ color: '#3d3a52' }}>$500</span>
                <span
                  className="text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                  style={{ background: `${ACCENT}25`, color: ACCENT }}
                >
                  40% OFF
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[56px] font-bold text-white leading-none">${EXCLUSIVE_PRICE}</span>
                <span className="text-[15px]" style={{ color: '#6b6880' }}>one-time</span>
              </div>

              <div className="rounded-xl p-3 flex flex-col gap-1.5" style={{ background: 'rgba(167,139,250,0.07)' }}>
                <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: `${ACCENT}80` }}>Built for organisations</p>
                {[
                  'Modify source code freely',
                  'Remove or replace all branding',
                  'No license key restrictions',
                  'Deploy across unlimited internal projects',
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

            <a
              href={EXCLUSIVE_CHECKOUT_URL}
              className="flex items-center justify-center gap-2 text-white font-bold text-[15px] rounded-xl py-3.5 mb-6 transition-all hover:opacity-90 hover:-translate-y-0.5 cursor-pointer"
              style={{ background: ACCENT, boxShadow: `0 8px 24px ${ACCENT}45` }}
            >
              Get Exclusive License — ${EXCLUSIVE_PRICE}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

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
          All prices in USD. Secure checkout powered by FastSpring.{' '}
          <Link href={PURCHASE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[#6b7280]">
            Also available on CodeCanyon
          </Link>
          {' '}(Regular License only).
        </p>

      </div>
    </section>
  );
}
