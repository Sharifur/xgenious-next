import Link from 'next/link';
import {
  COLOR,
  COLOR_DARK,
  PURCHASE_URL,
  BUNDLE_PRODUCT_PATH,
  EXCLUSIVE_PRODUCT_PATH,
  REGULAR_PRICE,
  REGULAR_ORIGINAL,
  BUNDLE_PRICE,
  BUNDLE_ORIGINAL,
  EXCLUSIVE_PRICE,
  EXCLUSIVE_ORIGINAL,
} from './constants';
import CodeCanyonUpsellButton from '@/components/ui/CodeCanyonUpsellButton';

const BUNDLE_CHECKOUT_URL = `/checkout?product=${BUNDLE_PRODUCT_PATH}`;
const EXCLUSIVE_CHECKOUT_URL = `/checkout?product=${EXCLUSIVE_PRODUCT_PATH}`;

const TEAL = '#0d9488';
const TEAL_DARK = '#06241f';

// Shared core checklist
const CORE = [
  'Full Laravel source code',
  'Drag & drop page builder (50+ widgets)',
  '3 home page variants + shop layouts',
  '20+ payment gateways',
  'Advanced inventory, shipping & tax',
  'Coupons, campaigns & autocomplete search',
  'SEO tools + sitemap generation',
  'Admin-set language + RTL support',
];

const REGULAR_PLAN = [
  ...CORE.map((label) => ({ label, ok: true })),
  { label: 'Grenmart Flutter app (Android & iOS)', ok: false },
  { label: 'Full source modification rights', ok: false },
  { label: 'Remove / replace branding', ok: false },
  { label: '6 months support + lifetime updates', ok: true },
];

const BUNDLE_PLAN = [
  ...CORE.map((label) => ({ label, ok: true })),
  { label: 'Grenmart Flutter app (Android & iOS)', ok: true },
  { label: 'Full source modification rights', ok: false },
  { label: 'Remove / replace branding', ok: false },
  { label: '6 months support + lifetime updates', ok: true },
];

const EXCLUSIVE_PLAN = [
  'Everything in the Everything Bundle',
  'Grenmart Flutter app — Android & iOS',
  'Full source modification rights',
  'Remove / replace all branding',
  'Unlimited commercial projects',
  'Priority support — 12 months',
  'Lifetime license + free updates',
];

function CheckIcon({ color = '#16a34a' }: { color?: string }) {
  return (
    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill={`${color}25`} />
      <path d="M6 10l3 3 5-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#F3F4F6" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#F5F7F5' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[620px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            Simple, One-Time Pricing
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7">
            Buy once and own the full source code. Lifetime updates on every license — no monthly fees, no platform
            commission on your sales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto items-start">

          {/* Regular License */}
          <div className="bg-white rounded-2xl border border-[#E5E7EC] p-7 flex flex-col">
            <div className="mb-6">
              <p className="text-[13px] font-semibold text-[#6b7280] uppercase tracking-widest mb-2">Regular License</p>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[16px] font-semibold line-through text-[#9ca3af]">${REGULAR_ORIGINAL}</span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: `${COLOR}20`, color: COLOR_DARK }}>
                  SAVE ${REGULAR_ORIGINAL - REGULAR_PRICE}
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[48px] font-bold text-[#0F1112] leading-none">${REGULAR_PRICE}</span>
                <span className="text-[15px] text-[#9ca3af]">one-time</span>
              </div>
              <p className="text-[13px] text-[#6b7280] leading-5">The Grenmart web store. Mobile app and full rights not included.</p>
            </div>

            <CodeCanyonUpsellButton
              codecanyonUrl={PURCHASE_URL}
              regularPrice={REGULAR_PRICE}
              bundlePrice={BUNDLE_PRICE}
              bundleCheckoutUrl={BUNDLE_CHECKOUT_URL}
              bundleItems={['Grenmart Flutter app (Android & iOS)', 'Web + mobile in one bundle', 'Lifetime updates', '6 months support']}
              bundleLabel="Everything Bundle"
              accentColor={COLOR}
              className="flex items-center justify-center gap-2 font-semibold text-[14px] rounded-xl py-3 mb-6 border border-[#E5E7EC] text-[#0F1112] transition-all hover:bg-[#f9fafb]"
            >
              Buy on CodeCanyon
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </CodeCanyonUpsellButton>

            <div className="flex flex-col gap-2.5">
              {REGULAR_PLAN.map((f) => (
                <div key={f.label} className="flex items-start gap-2.5 text-[13px]" style={{ color: f.ok ? '#374151' : '#9ca3af' }}>
                  {f.ok ? <CheckIcon /> : <XIcon />}
                  {f.label}
                </div>
              ))}
            </div>
          </div>

          {/* Everything Bundle — featured */}
          <div className="rounded-2xl p-7 flex flex-col relative overflow-hidden" style={{ background: '#08210f', border: `2px solid ${COLOR}` }}>
            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full" style={{ background: COLOR, color: '#fff' }}>
                BEST VALUE
              </span>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#16a34a] text-white">
                WEB + APP
              </span>
            </div>

            <div className="mb-4">
              <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${COLOR}cc` }}>Everything Bundle</p>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[20px] font-semibold line-through" style={{ color: '#3a6b48' }}>${BUNDLE_ORIGINAL}</span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: `${COLOR}25`, color: '#7ee29a' }}>
                  {Math.round((1 - BUNDLE_PRICE / BUNDLE_ORIGINAL) * 100)}% OFF
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[56px] font-bold text-white leading-none">${BUNDLE_PRICE}</span>
                <span className="text-[15px]" style={{ color: '#7ea98b' }}>one-time</span>
              </div>
              <p className="text-[13px] leading-5 mb-1" style={{ color: '#bfe0c8' }}>
                The web store <strong className="text-white">plus the Grenmart Flutter app</strong> — sell on web, Android &amp; iOS.
              </p>
            </div>

            <Link
              href={BUNDLE_CHECKOUT_URL}
              className="flex items-center justify-center gap-2 font-bold text-[15px] rounded-xl py-3.5 mb-6 transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: COLOR, color: '#fff', boxShadow: `0 8px 24px ${COLOR}55` }}
            >
              Get the Everything Bundle
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div className="flex flex-col gap-2.5">
              {BUNDLE_PLAN.map((f) => (
                <div key={f.label} className="flex items-start gap-2.5 text-[13px]" style={{ color: f.ok ? '#d6efdd' : '#5a8568' }}>
                  {f.ok ? <CheckIcon color={COLOR} /> : <XIcon />}
                  {f.label}
                </div>
              ))}
            </div>
          </div>

          {/* Exclusive License — dark teal */}
          <div className="rounded-2xl p-7 flex flex-col" style={{ background: TEAL_DARK, border: `1px solid ${TEAL}40` }}>
            <div className="mb-5">
              <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${TEAL}cc` }}>
                Exclusive License
              </p>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[20px] font-semibold line-through" style={{ color: '#2a4a45' }}>${EXCLUSIVE_ORIGINAL}</span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: `${TEAL}30`, color: '#5eead4' }}>
                  {Math.round((1 - EXCLUSIVE_PRICE / EXCLUSIVE_ORIGINAL) * 100)}% OFF
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-[56px] font-bold text-white leading-none">${EXCLUSIVE_PRICE}</span>
                <span className="text-[15px]" style={{ color: '#5a8580' }}>one-time</span>
              </div>

              <div className="rounded-xl p-3.5 mb-5" style={{ background: '#0a3029', border: `1px solid ${TEAL}30` }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: `${TEAL}99` }}>
                  Done-For-You &amp; Full Rights
                </p>
                <div className="flex flex-col gap-2.5">
                  {['Grenmart Flutter app — Android & iOS', 'Modify source code freely', 'Remove or replace all branding', 'Unlimited commercial projects'].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[12px]" style={{ color: '#99f6e4' }}>
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill={`${TEAL}25`} />
                        <path d="M6 10l3 3 5-5" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href={EXCLUSIVE_CHECKOUT_URL}
              className="flex items-center justify-center gap-2 font-bold text-[15px] rounded-xl py-3.5 mb-6 text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: TEAL, boxShadow: `0 8px 24px ${TEAL}55` }}
            >
              Get Everything — ${EXCLUSIVE_PRICE}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div className="flex flex-col gap-2.5">
              {EXCLUSIVE_PLAN.map((f) => (
                <div key={f} className="flex items-start gap-2.5 text-[13px] text-white">
                  <CheckIcon color="#5eead4" />
                  {f}
                </div>
              ))}
            </div>
          </div>

        </div>

        <p className="text-center text-[13px] text-[#9ca3af] mt-8">
          All licenses include lifetime updates · Full Laravel source code · Prices in USD
        </p>
      </div>
    </section>
  );
}
