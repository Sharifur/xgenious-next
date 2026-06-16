import Link from 'next/link';
import {
  COLOR,
  PURCHASE_URL,
  PRICING_TIERS,
  BUNDLE_PRODUCT_PATH,
  REGULAR_PRICE,
  BUNDLE_PRICE,
  LAUNCH_BUNDLE_PRICE,
  LAUNCH_BUNDLE_ITEMS,
} from './constants';
import CodeCanyonUpsellButton from '@/components/ui/CodeCanyonUpsellButton';

const BUNDLE_CHECKOUT_URL = `/checkout?product=${BUNDLE_PRODUCT_PATH}`;

function CheckIcon({ color = '#16a34a' }: { color?: string }) {
  return (
    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill={`${color}25`} />
      <path d="M6 10l3 3 5-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  const [regular, extended, bundle] = PRICING_TIERS;

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
              bundleItems={['Hotel Plugin', 'Restaurant Plugin', 'Domain Reseller', 'Cloud Storage', 'Site Analytics']}
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
                <div key={f.label} className="flex items-start gap-2.5 text-[13px] text-[#374151]">
                  <CheckIcon />
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
              <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${COLOR}cc` }}>
                {bundle.name}
              </p>

              {bundle.original && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[20px] font-semibold line-through" style={{ color: '#7a3a3a' }}>${bundle.original}</span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: `${COLOR}25`, color: COLOR }}>
                    {Math.round((1 - bundle.price / bundle.original) * 100)}% OFF
                  </span>
                </div>
              )}

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[56px] font-bold text-white leading-none">${bundle.price}</span>
                <span className="text-[15px]" style={{ color: '#a07570' }}>one-time</span>
              </div>

              <p className="text-[13px] leading-6 mb-4" style={{ color: '#d9b7b0' }}>{bundle.desc}</p>
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
                <div key={f.label} className="flex items-start gap-2.5 text-[13px]" style={{ color: '#f3d9d3' }}>
                  <CheckIcon color={COLOR} />
                  {f.label}
                </div>
              ))}
            </div>
          </div>

          {/* Extended License */}
          <div className="bg-white rounded-2xl border border-[#E5E7EC] p-7 flex flex-col">
            <div className="mb-6">
              <p className="text-[13px] font-semibold text-[#6b7280] uppercase tracking-widest mb-2">{extended.name}</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[48px] font-bold text-[#0F1112] leading-none">${extended.price}</span>
                <span className="text-[15px] text-[#9ca3af]">one-time</span>
              </div>
              <p className="text-[13px] text-[#6b7280] leading-5">{extended.desc}</p>
            </div>

            <a
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-semibold text-[14px] rounded-xl py-3 mb-6 border border-[#E5E7EC] text-[#0F1112] transition-all hover:bg-[#f9fafb]"
            >
              Buy Extended License
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <div className="flex flex-col gap-2.5">
              {extended.plan.map((f) => (
                <div key={f.label} className="flex items-start gap-2.5 text-[13px] text-[#374151]">
                  <CheckIcon />
                  {f.label}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Complete Launch Bundle */}
        <div className="mt-10 max-w-[1100px] mx-auto rounded-2xl p-7 sm:p-10 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a14 0%, #1a0a08 100%)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">

            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#16a34a] text-white">DONE-FOR-YOU</span>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full" style={{ background: `${COLOR}30`, color: COLOR }}>SAVE $2,798</span>
              </div>
              <h3 className="text-[24px] sm:text-[28px] font-bold text-white mb-3 leading-tight">
                Complete Launch Bundle — Professional Setup + Free VPS for 1 Year
              </h3>
              <p className="text-[14px] leading-7 mb-5" style={{ color: '#c9c5c2' }}>
                Skip the install, server config, and maintenance. Our team handles everything so you launch your MultiSaas SaaS in 48 hours. Web script purchased separately.
              </p>

              <div className="rounded-xl p-4 mb-5" style={{ background: '#15090a', border: `1px solid ${COLOR}30` }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: `${COLOR}99` }}>What&apos;s included</p>
                <div className="flex flex-col gap-2.5">
                  {LAUNCH_BUNDLE_ITEMS.map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-[13px]">
                      <span style={{ color: '#d9b7b0' }}>{item.label}</span>
                      <span className="font-semibold line-through" style={{ color: '#7a3a3a' }}>${item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[12px] text-[#9ca3af] italic">
                Note: MultiSaas web script is purchased separately above. This bundle covers installation, hosting, plugins/themes setup, and maintenance services only.
              </p>
            </div>

            <div className="lg:col-span-2 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-[18px] font-semibold line-through text-[#7a3a3a]">$4,097</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${COLOR}30`, color: COLOR }}>68% OFF</span>
              </div>
              <div className="mb-1">
                <span className="text-[64px] font-bold text-white leading-none">${LAUNCH_BUNDLE_PRICE}</span>
              </div>
              <p className="text-[13px] mb-5" style={{ color: '#a07570' }}>One-time service fee</p>

              <a
                href="https://bytesed.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full font-bold text-[15px] rounded-xl py-3.5 transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: COLOR, color: '#fff', boxShadow: `0 8px 24px ${COLOR}55` }}
              >
                Get Launch Bundle
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <p className="text-[12px] text-[#9ca3af] mt-3">No setup fees · No hidden costs · Instant support</p>
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
