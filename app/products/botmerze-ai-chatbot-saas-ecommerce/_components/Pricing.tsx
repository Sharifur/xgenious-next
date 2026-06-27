import Link from 'next/link';
import { COLOR, REGULAR_PRICE, BUNDLE_PRICE, EXTENDED_PRICE, CODECANYON_URL, DEMO_URL, BUNDLE_PRODUCT_PATH, EXCLUSIVE_PRODUCT_PATH } from './constants';
import CodeCanyonUpsellButton from '@/components/ui/CodeCanyonUpsellButton';

const REGULAR_FEATURES = [
  { label: 'Complete Laravel 12 source code', ok: true },
  { label: 'RAG-powered AI with pgvector', ok: true },
  { label: 'WooCommerce & Shopify integration', ok: true },
  { label: 'Knowledge base (PDF, URL, web pages)', ok: true },
  { label: 'Lead generation & contact capture', ok: true },
  { label: 'Multi-client SaaS management panel', ok: true },
  { label: 'Drag-and-drop widget builder', ok: true },
  { label: '18+ payment gateways', ok: true },
  { label: 'Built-in support ticket system', ok: true },
  { label: 'Product recommendations & cross-sell', ok: true },
  { label: 'Lifetime updates', ok: true },
  { label: '6 months support', ok: true },
  { label: 'SaaS / white-label rights', ok: false },
];

const BUNDLE_FEATURES = [
  { label: 'Everything in Regular License', ok: true },
  { label: 'SaaS rights — sell chatbot subscriptions', ok: true },
  { label: 'Lifetime updates', ok: true },
  { label: '6 months support', ok: true },
  { label: 'White-label branding removal', ok: false },
  { label: 'Priority support', ok: false },
  { label: 'Source code modification rights', ok: false },
];

const EXCLUSIVE_FEATURES = [
  { label: 'Everything in Everything Bundle', ok: true },
  { label: 'White-label — remove all Botmerze branding', ok: true },
  { label: 'Multiple production deployments', ok: true },
  { label: 'Source code modification rights', ok: true },
  { label: 'Priority support — 6 months', ok: true },
  { label: 'Lifetime updates', ok: true },
  { label: 'Cannot be resold or redistributed as-is', ok: 'note' as const },
];

function CheckIcon({ ok }: { ok: boolean | 'note' }) {
  if (ok === 'note') {
    return (
      <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="10" fill="rgba(0,112,102,0.15)" />
        <path d="M10 6v4M10 13v1" stroke={COLOR} strokeWidth="2" strokeLinecap="round" />
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
            One-time purchase. No monthly fees. No per-agent charges. You own the platform forever.
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
              <p className="text-[13px] text-[#6b7280] leading-5">Deploy on one domain. Full platform — AI training, widget builder, lead capture, 18+ payment gateways.</p>
            </div>

            <CodeCanyonUpsellButton
              codecanyonUrl={CODECANYON_URL}
              regularPrice={REGULAR_PRICE}
              bundlePrice={BUNDLE_PRICE}
              bundleCheckoutUrl={`/checkout?product=${BUNDLE_PRODUCT_PATH}`}
              bundleItems={['SaaS rights — sell chatbot subscriptions to clients']}
              bundleLabel="Everything Bundle"
              accentColor={COLOR}
              className="flex items-center justify-center gap-2 font-semibold text-[14px] rounded-xl py-3 mb-6 border border-[#E5E7EC] text-[#0F1112] transition-all hover:bg-[#f9fafb]"
            >
              Purchase on CodeCanyon
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                SAAS RIGHTS
              </span>
            </div>

            <div className="mb-5">
              <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${COLOR}cc` }}>Everything Bundle</p>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[44px] sm:text-[56px] font-bold text-white leading-none">${BUNDLE_PRICE}</span>
                <span className="text-[15px]" style={{ color: '#6b8a7a' }}>one-time</span>
              </div>

              <div className="rounded-xl p-3 flex flex-col gap-1.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: `${COLOR}99` }}>What you&apos;re getting</p>
                {[
                  ['Regular License', `$${REGULAR_PRICE}`],
                  ['SaaS Rights', '$100'],
                ].map(([item, price]) => (
                  <div key={item} className="flex items-center justify-between">
                    <span className="text-[12px]" style={{ color: '#8aaa98' }}>{item}</span>
                    <span className="text-[12px] font-semibold line-through" style={{ color: '#4b6b5a' }}>{price}</span>
                  </div>
                ))}
                <div className="border-t mt-1 pt-1.5 flex items-center justify-between" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <span className="text-[12px] font-bold text-white">Total value</span>
                  <span className="text-[12px] font-bold" style={{ color: COLOR }}>${REGULAR_PRICE + 100} → ${BUNDLE_PRICE}</span>
                </div>
              </div>
            </div>

            <Link
              href={`/checkout?product=${BUNDLE_PRODUCT_PATH}`}
              className="flex items-center justify-center gap-2 text-white font-bold text-[15px] rounded-xl py-3.5 mb-6 transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: COLOR, boxShadow: `0 8px 24px ${COLOR}55` }}
            >
              Get Everything Bundle — ${BUNDLE_PRICE}
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

          {/* Exclusive License */}
          <div
            className="rounded-2xl p-7 flex flex-col relative overflow-hidden"
            style={{ background: '#0d0f14', border: `2px solid ${COLOR}` }}
          >
            <div className="flex items-center gap-2 flex-wrap mb-6">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full" style={{ background: COLOR, color: '#fff' }}>
                EXCLUSIVE
              </span>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#1d4ed8] text-white">
                WHITE-LABEL
              </span>
            </div>

            <div className="mb-5">
              <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${COLOR}cc` }}>Exclusive License</p>

              <div className="flex items-center gap-2 mb-1">
                <span className="text-[20px] font-semibold line-through" style={{ color: '#4b6b5a' }}>$299</span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: `${COLOR}25`, color: COLOR }}>
                  33% OFF
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[44px] sm:text-[56px] font-bold text-white leading-none">${EXTENDED_PRICE}</span>
                <span className="text-[15px]" style={{ color: '#6b8a7a' }}>one-time</span>
              </div>

              <div className="rounded-xl p-3 flex flex-col gap-1.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: `${COLOR}99` }}>Built for SaaS businesses</p>
                {[
                  'Sell chatbot access to unlimited clients',
                  'White-label — remove all Botmerze branding',
                  'Modify source code freely',
                  'Recurring revenue from day one',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                      <circle cx="10" cy="10" r="10" fill={`${COLOR}30`} />
                      <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[12px]" style={{ color: '#8aaa98' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={`/checkout?product=${EXCLUSIVE_PRODUCT_PATH}`}
              className="flex items-center justify-center gap-2 text-white font-bold text-[15px] rounded-xl py-3.5 mb-6 transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: COLOR, boxShadow: `0 8px 24px ${COLOR}55` }}
            >
              Get Exclusive — ${EXTENDED_PRICE}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div className="flex flex-col gap-2.5">
              {EXCLUSIVE_FEATURES.map((f) => (
                <div
                  key={f.label}
                  className="flex items-start gap-2.5 text-[13px]"
                  style={{ color: f.ok === 'note' ? `${COLOR}99` : f.ok ? '#d1fae5' : '#4b6b5a' }}
                >
                  <CheckIcon ok={f.ok} />
                  {f.label}
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-8 text-center flex flex-col items-center gap-2">
          <Link
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-semibold underline underline-offset-2"
            style={{ color: COLOR }}
          >
            Explore live demo before buying →
          </Link>
          <p className="text-[12px] text-[#9ca3af]">All prices in USD · Lifetime validity · One-time payment · No monthly fees</p>
        </div>

      </div>
    </section>
  );
}
