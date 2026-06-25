import Link from 'next/link';
import {
  COLOR,
  COLOR_DARK,
  PURCHASE_URL,
  FULL_PRODUCT_PATH,
  EXCLUSIVE_PRODUCT_PATH,
  REGULAR_PRICE,
  FULL_PRICE,
  FULL_ORIGINAL,
  EXCLUSIVE_PRICE,
  EXCLUSIVE_ORIGINAL,
} from './constants';
import CodeCanyonUpsellButton from '@/components/ui/CodeCanyonUpsellButton';

const FULL_CHECKOUT_URL = `/checkout?product=${FULL_PRODUCT_PATH}`;
const EXCLUSIVE_CHECKOUT_URL = `/checkout?product=${EXCLUSIVE_PRODUCT_PATH}`;

const PURPLE = '#7c3aed';
const PURPLE_DARK = '#1e0d40';

const CORE = [
  'Full ListOcean source code',
  'Unlimited listing categories & locations',
  'Drag & drop page, menu, form & widget builders',
  'Google Maps location integration',
  'Multiple ad formats (image, script, Google Ads)',
  'Review & ratings system',
  'GDPR cookie compliance',
  'Role-based admin permissions',
  'Newsletter module',
  '6 months support + lifetime updates',
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
    <section id="pricing" className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#ecfeff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[620px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            Simple, One-Time Pricing
          </h2>
          <p className="text-[#4b5563] text-[15px] sm:text-[17px] leading-7">
            Buy once and own the full source code. Lifetime updates on every license — no monthly fees, no per-plugin charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto items-stretch">

          {/* Regular License — CodeCanyon */}
          <div className="bg-white rounded-2xl border border-[#E5E7EC] p-7 flex flex-col">
            <div className="mb-6">
              <p className="text-[13px] font-semibold text-[#6b7280] uppercase tracking-widest mb-2">Regular License</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[48px] font-bold text-[#0F1112] leading-none">${REGULAR_PRICE}</span>
                <span className="text-[15px] text-[#9ca3af]">one-time</span>
              </div>
              <p className="text-[13px] text-[#6b7280] leading-5">Base script only. Purchase directly on CodeCanyon.</p>
            </div>

            <CodeCanyonUpsellButton
              codecanyonUrl={PURCHASE_URL}
              regularPrice={REGULAR_PRICE}
              bundlePrice={FULL_PRICE}
              bundleCheckoutUrl={FULL_CHECKOUT_URL}
              bundleItems={['All 4 premium plugins included', 'Live Chat, Membership, Wallet & SMS', 'Saves $181 vs separate purchases']}
              bundleLabel="Full Package (recommended)"
              accentColor={COLOR}
              className="flex items-center justify-center gap-2 font-semibold text-[14px] rounded-xl py-3 mb-6 border border-[#E5E7EC] text-[#0F1112] transition-all hover:bg-[#f9fafb]"
            >
              Buy on CodeCanyon
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </CodeCanyonUpsellButton>

            <div className="flex flex-col gap-2.5">
              {CORE.map((f) => (
                <div key={f} className="flex items-start gap-2.5 text-[13px] text-[#374151]">
                  <CheckIcon />
                  {f}
                </div>
              ))}
              <div className="flex items-start gap-2.5 text-[13px] text-[#9ca3af]">
                <XIcon />
                Premium plugins (Live Chat, Membership, Wallet, SMS)
              </div>
              <div className="flex items-start gap-2.5 text-[13px] text-[#9ca3af]">
                <XIcon />
                Source code modification rights
              </div>
            </div>
          </div>

          {/* Full Package — featured */}
          <div className="rounded-2xl p-7 flex flex-col relative overflow-hidden" style={{ background: COLOR_DARK, border: `2px solid ${COLOR}` }}>
            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full" style={{ background: COLOR, color: '#fff' }}>
                BEST VALUE
              </span>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full" style={{ background: '#0e7490', color: '#fff' }}>
                ALL PLUGINS
              </span>
            </div>

            <div className="mb-4">
              <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${COLOR}cc` }}>Full Package</p>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[20px] font-semibold line-through" style={{ color: '#0e4a5a' }}>${FULL_ORIGINAL}</span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: `${COLOR}30`, color: '#a5f3fc' }}>
                  {Math.round((1 - FULL_PRICE / FULL_ORIGINAL) * 100)}% OFF
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[56px] font-bold text-white leading-none">${FULL_PRICE}</span>
                <span className="text-[15px]" style={{ color: '#67e8f9' }}>one-time</span>
              </div>
              <p className="text-[13px] leading-5 mb-1" style={{ color: '#cffafe' }}>
                Full script plus <strong className="text-white">all 4 premium plugins</strong> — Live Chat, Membership, Wallet &amp; SMS Gateway included.
              </p>
            </div>

            <Link
              href={FULL_CHECKOUT_URL}
              className="flex items-center justify-center gap-2 font-bold text-[15px] rounded-xl py-3.5 mb-6 transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: COLOR, color: '#fff', boxShadow: `0 8px 24px ${COLOR}55` }}
            >
              Get Full Package
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div className="flex flex-col gap-2.5">
              {CORE.map((f) => (
                <div key={f} className="flex items-start gap-2.5 text-[13px]" style={{ color: '#cffafe' }}>
                  <CheckIcon color={COLOR} />
                  {f}
                </div>
              ))}
              {['Live Chat Plugin ($19 value)', 'Membership Plugin ($19 value)', 'Wallet Plugin ($19 value)', 'SMS Gateway Plugin ($19 value)'].map((f) => (
                <div key={f} className="flex items-start gap-2.5 text-[13px]" style={{ color: '#cffafe' }}>
                  <CheckIcon color={COLOR} />
                  <span><strong className="text-white">{f}</strong></span>
                </div>
              ))}
              <div className="flex items-start gap-2.5 text-[13px] text-[#0e7490]">
                <XIcon />
                Source code modification rights
              </div>
            </div>
          </div>

          {/* Exclusive License */}
          <div className="rounded-2xl p-7 flex flex-col" style={{ background: PURPLE_DARK, border: `1px solid ${PURPLE}40` }}>
            <div className="mb-5">
              <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${PURPLE}cc` }}>
                Exclusive License
              </p>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[20px] font-semibold line-through" style={{ color: '#2e1065' }}>${EXCLUSIVE_ORIGINAL}</span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: `${PURPLE}30`, color: '#c4b5fd' }}>
                  {Math.round((1 - EXCLUSIVE_PRICE / EXCLUSIVE_ORIGINAL) * 100)}% OFF
                </span>
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#7c3aed80' }}>
                Introductory price — limited time
              </p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[56px] font-bold text-white leading-none">${EXCLUSIVE_PRICE}</span>
                <span className="text-[15px]" style={{ color: '#7c3aed80' }}>one-time</span>
              </div>

              <div className="rounded-xl p-3.5 mb-5" style={{ background: '#150a2e', border: `1px solid ${PURPLE}30` }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: `${PURPLE}99` }}>
                  Source Code Rights + Install
                </p>
                <div className="flex flex-col gap-2.5">
                  {[
                    'Modify source code freely',
                    'Remove or replace all branding',
                    'Professional installation included',
                    'Priority support — 12 months',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[12px]" style={{ color: '#ede9fe' }}>
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill={`${PURPLE}25`} />
                        <path d="M6 10l3 3 5-5" stroke={PURPLE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
              style={{ background: PURPLE, boxShadow: `0 8px 24px ${PURPLE}55` }}
            >
              Get Exclusive — ${EXCLUSIVE_PRICE}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div className="flex flex-col gap-2.5">
              {[...CORE, 'All 4 premium plugins — included', 'Professional installation on your server', 'Full source code modification rights', 'Remove / replace all branding', 'Priority support — 12 months'].map((f) => (
                <div key={f} className="flex items-start gap-2.5 text-[13px] text-white">
                  <CheckIcon color="#c4b5fd" />
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
