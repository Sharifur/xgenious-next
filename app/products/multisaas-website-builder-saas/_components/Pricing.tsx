import Link from 'next/link';
import {
  COLOR,
  PURCHASE_URL,
  PRICING_TIERS,
  BUNDLE_PRODUCT_PATH,
  EXCLUSIVE_PRODUCT_PATH,
  REGULAR_PRICE,
  BUNDLE_PRICE,
  EXCLUSIVE_PRICE,
  EXCLUSIVE_ORIGINAL,
  BUNDLE_ITEMS,
  BUNDLE_ITEMS_TOTAL,
  EXCLUSIVE_FEATURES,
} from './constants';
import CodeCanyonUpsellButton from '@/components/ui/CodeCanyonUpsellButton';

const BUNDLE_CHECKOUT_URL = `/checkout?product=${BUNDLE_PRODUCT_PATH}`;
const EXCLUSIVE_CHECKOUT_URL = `/checkout?product=${EXCLUSIVE_PRODUCT_PATH}`;

const PURPLE = '#8b5cf6';
const PURPLE_DARK = '#0f0f23';

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
  const [regular, bundle] = PRICING_TIERS;

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7">
            One-time purchase. Lifetime updates. 6 months support. You collect 100% of subscription revenue from every tenant on your platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto">

          {/* Regular License */}
          <div className="bg-white rounded-2xl border border-[#E5E7EC] p-7 flex flex-col">
            <div className="mb-6">
              <p className="text-[13px] font-semibold text-[#6b7280] uppercase tracking-widest mb-2">{regular.name}</p>
              {regular.original && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[16px] font-semibold line-through text-[#9ca3af]">${regular.original}</span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: `${COLOR}20`, color: COLOR }}>
                    SAVE ${regular.original - regular.price}
                  </span>
                </div>
              )}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[48px] font-bold text-[#0F1112] leading-none">${regular.price}</span>
                <span className="text-[15px] text-[#9ca3af]">one-time</span>
              </div>
              <p className="text-[13px] text-[#6b7280] leading-5">{regular.desc}</p>
            </div>

            <CodeCanyonUpsellButton
              codecanyonUrl={PURCHASE_URL}
              regularPrice={REGULAR_PRICE}
              bundlePrice={BUNDLE_PRICE}
              bundleCheckoutUrl={BUNDLE_CHECKOUT_URL}
              bundleItems={['Cloud Storage', 'Site Analytics', 'Domain Reseller', 'Restaurant', 'Hotel']}
              bundleLabel="Bundle Pack"
              accentColor={COLOR}
              className="flex items-center justify-center gap-2 font-semibold text-[14px] rounded-xl py-3 mb-6 border border-[#E5E7EC] text-[#0F1112] transition-all hover:bg-[#f9fafb]"
            >
              Buy on CodeCanyon
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </CodeCanyonUpsellButton>

            <div className="flex flex-col gap-2.5">
              {regular.plan.map((f) => (
                <div key={f.label} className="flex items-start gap-2.5 text-[13px]" style={{ color: f.ok ? '#374151' : '#9ca3af' }}>
                  {f.ok ? <CheckIcon /> : <XIcon />}
                  {f.label}
                </div>
              ))}
            </div>
          </div>

          {/* Bundle Pack — featured */}
          <div
            className="rounded-2xl p-7 flex flex-col relative overflow-hidden"
            style={{ background: '#1a0a08', border: `2px solid ${COLOR}` }}
          >
            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full" style={{ background: COLOR, color: '#fff' }}>
                BEST VALUE
              </span>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#16a34a] text-white">
                COMMERCIAL USE
              </span>
            </div>

            <div className="mb-4">
              <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${COLOR}cc` }}>{bundle.name}</p>

              <div className="flex items-center gap-2 mb-1">
                <span className="text-[20px] font-semibold line-through" style={{ color: '#7a3a3a' }}>${BUNDLE_ITEMS_TOTAL}</span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: `${COLOR}25`, color: COLOR }}>
                  {Math.round((1 - bundle.price / BUNDLE_ITEMS_TOTAL) * 100)}% OFF
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[56px] font-bold text-white leading-none">${bundle.price}</span>
                <span className="text-[15px]" style={{ color: '#a07570' }}>one-time</span>
              </div>

              {/* Value breakdown */}
              <div className="rounded-xl p-3.5 mb-4" style={{ background: '#0f0605', border: `1px solid ${COLOR}30` }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: `${COLOR}99` }}>What you&apos;re getting</p>
                <div className="flex flex-col gap-2">
                  {BUNDLE_ITEMS.map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-[12px]">
                      <span style={{ color: '#caa9a3' }}>{item.label}</span>
                      <span className="font-semibold line-through" style={{ color: '#7a3a3a' }}>${item.value}</span>
                    </div>
                  ))}
                  <div className="border-t mt-1 pt-2 flex items-center justify-between" style={{ borderColor: `${COLOR}25` }}>
                    <span className="text-[12px] font-bold text-white">Total value</span>
                    <span className="text-[13px] font-bold" style={{ color: COLOR }}>
                      ${BUNDLE_ITEMS_TOTAL} → ${bundle.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href={BUNDLE_CHECKOUT_URL}
              className="flex items-center justify-center gap-2 font-bold text-[15px] rounded-xl py-3.5 mb-6 transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: COLOR, color: '#fff', boxShadow: `0 8px 24px ${COLOR}55` }}
            >
              Get Bundle Pack
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div className="flex flex-col gap-2.5">
              {bundle.plan.map((f) => (
                <div key={f.label} className="flex items-start gap-2.5 text-[13px]" style={{ color: f.ok ? '#f3d9d3' : '#7a5a55' }}>
                  {f.ok ? <CheckIcon color={COLOR} /> : <XIcon />}
                  {f.label}
                </div>
              ))}
            </div>
          </div>

          {/* Exclusive Bundle Pack — dark navy/purple */}
          <div
            className="rounded-2xl p-7 flex flex-col"
            style={{ background: PURPLE_DARK, border: `1px solid ${PURPLE}40` }}
          >
            <div className="mb-5">
              <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${PURPLE}cc` }}>
                Exclusive Bundle Pack
              </p>

              <div className="flex items-center gap-2 mb-1">
                <span className="text-[20px] font-semibold line-through" style={{ color: '#3a3a5e' }}>${EXCLUSIVE_ORIGINAL}</span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: `${PURPLE}30`, color: PURPLE }}>
                  {Math.round((1 - EXCLUSIVE_PRICE / EXCLUSIVE_ORIGINAL) * 100)}% OFF
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-[56px] font-bold text-white leading-none">${EXCLUSIVE_PRICE}</span>
                <span className="text-[15px]" style={{ color: '#6b6b9a' }}>one-time</span>
              </div>

              {/* Built for Organisations box */}
              <div className="rounded-xl p-3.5 mb-5" style={{ background: '#1a1a35', border: `1px solid ${PURPLE}30` }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: `${PURPLE}99` }}>
                  Built for Organisations
                </p>
                <div className="flex flex-col gap-2.5">
                  {[
                    'Modify source code freely',
                    'Remove or replace all branding',
                    'No license key restrictions',
                    'Deploy across unlimited projects',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[12px]" style={{ color: '#a5b4fc' }}>
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
              Get Everything — ${EXCLUSIVE_PRICE}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div className="flex flex-col gap-2.5">
              {EXCLUSIVE_FEATURES.map((f) => (
                <div key={f} className="flex items-start gap-2.5 text-[13px] text-white">
                  <CheckIcon color="#a78bfa" />
                  {f}
                </div>
              ))}
              <div className="flex items-start gap-2.5 text-[12px] mt-1" style={{ color: '#6b6b9a' }}>
                <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#1a1a35" />
                  <path d="M10 6v5M10 13h.01" stroke="#6b6b9a" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                Cannot be resold or redistributed as-is
              </div>
            </div>
          </div>

        </div>

        <p className="text-center text-[13px] text-[#9ca3af] mt-8">
          All licenses include lifetime updates · CodeCanyon purchase · 6-month support · Prices in USD
        </p>
      </div>
    </section>
  );
}
