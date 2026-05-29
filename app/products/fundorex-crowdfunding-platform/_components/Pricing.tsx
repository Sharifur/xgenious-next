import Link from 'next/link';
import { COLOR, LIGHT_COLOR, PURCHASE_URL, REGULAR_PRICE, COMBO_PRICE, EXTENDED_PRICE } from './constants';

const TIERS = [
  {
    name: 'Regular License',
    price: REGULAR_PRICE,
    original: 69,
    badge: null,
    desc: 'Web platform only. Single domain.',
    cta: 'Buy on CodeCanyon',
    href: PURCHASE_URL,
    external: true,
    features: [
      { label: 'Fundorex Web Platform', ok: true },
      { label: 'Mobile App (Flutter)', ok: false },
      { label: 'Lifetime License + Updates', ok: true },
      { label: '6 Months Support', ok: true },
      { label: 'All Premium Features', ok: true },
      { label: '1 Domain', ok: true },
      { label: 'Commercial Use', ok: false },
      { label: 'Priority Support', ok: false },
    ],
  },
  {
    name: 'Combo Pack',
    price: COMBO_PRICE,
    original: 120,
    badge: 'BEST VALUE',
    desc: 'Web platform + Flutter mobile app.',
    cta: `Get Combo — $${COMBO_PRICE}`,
    href: PURCHASE_URL,
    external: true,
    features: [
      { label: 'Fundorex Web Platform', ok: true },
      { label: 'Mobile App (Flutter)', ok: true },
      { label: 'Lifetime License + Updates', ok: true },
      { label: '6 Months Support', ok: true },
      { label: 'All Premium Features', ok: true },
      { label: '1 Domain', ok: true },
      { label: 'Commercial Use', ok: true },
      { label: 'Priority Support', ok: false },
    ],
  },
  {
    name: 'Extended License',
    price: EXTENDED_PRICE,
    original: 299,
    badge: 'FOR BUSINESS',
    desc: 'Commercial use. Unlimited end products.',
    cta: `Get Extended — $${EXTENDED_PRICE}`,
    href: PURCHASE_URL,
    external: true,
    features: [
      { label: 'Fundorex Web Platform', ok: true },
      { label: 'Mobile App (Flutter)', ok: true },
      { label: 'Lifetime License + Updates', ok: true },
      { label: '6 Months Support', ok: true },
      { label: 'All Premium Features', ok: true },
      { label: 'Unlimited Domains', ok: true },
      { label: 'Commercial Use', ok: true },
      { label: 'Priority Support', ok: true },
    ],
  },
];

function CheckIcon({ ok }: { ok: boolean }) {
  if (ok) {
    return (
      <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="10" fill="#dcfce7" />
        <path d="M6 10l3 3 5-5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#F3F4F6" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[540px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Pricing
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Simple, One-Time Pricing
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            No monthly fees. No platform commission. You keep 100% of what your campaigns raise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
          {TIERS.map((tier, i) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-7 flex flex-col ${i === 1 ? '' : 'border border-[#E5E7EC]'}`}
              style={i === 1 ? { background: '#1a1a1a', border: `2px solid ${COLOR}` } : { background: '#fff' }}
            >
              {tier.badge && (
                <div className="mb-4">
                  <span
                    className="text-[11px] font-bold px-3 py-1 rounded-full"
                    style={{ background: COLOR, color: '#fff' }}
                  >
                    {tier.badge}
                  </span>
                </div>
              )}

              <p className={`text-[13px] font-semibold uppercase tracking-widest mb-2 ${i === 1 ? 'opacity-70' : 'text-[#6b7280]'}`}
                style={i === 1 ? { color: COLOR } : {}}>
                {tier.name}
              </p>

              {tier.original > tier.price && (
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[18px] font-semibold line-through ${i === 1 ? 'opacity-30 text-white' : 'text-[#9ca3af]'}`}>
                    ${tier.original}
                  </span>
                  <span
                    className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `${COLOR}20`, color: COLOR }}
                  >
                    {Math.round((1 - tier.price / tier.original) * 100)}% OFF
                  </span>
                </div>
              )}

              <div className="flex items-baseline gap-2 mb-3">
                <span className={`text-[48px] font-bold leading-none ${i === 1 ? 'text-white' : 'text-[#0F1112]'}`}>
                  ${tier.price}
                </span>
                <span className={`text-[14px] ${i === 1 ? 'text-white/40' : 'text-[#9ca3af]'}`}>one-time</span>
              </div>

              <p className={`text-[13px] mb-6 ${i === 1 ? 'text-white/60' : 'text-[#6b7280]'}`}>{tier.desc}</p>

              <Link
                href={tier.href}
                target={tier.external ? '_blank' : undefined}
                rel={tier.external ? 'noopener noreferrer' : undefined}
                className={`flex items-center justify-center gap-2 font-semibold text-[14px] rounded-xl py-3 mb-6 transition-all hover:opacity-90 ${i === 1 ? 'text-white' : 'text-[#0F1112] border border-[#E5E7EC] hover:bg-gray-50'}`}
                style={i === 1 ? { background: COLOR, boxShadow: `0 6px 20px ${COLOR}55` } : {}}
              >
                {tier.cta}
                {tier.external && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>

              <div className="flex flex-col gap-2.5">
                {tier.features.map((f) => (
                  <div
                    key={f.label}
                    className={`flex items-start gap-2.5 text-[13px] ${i === 1 ? (f.ok ? 'text-white/90' : 'text-white/25') : (f.ok ? 'text-[#374151]' : 'text-[#9ca3af]')}`}
                  >
                    <CheckIcon ok={f.ok} />
                    {f.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[12px] text-[#9ca3af] mt-8 max-w-[500px] mx-auto">
          All prices in USD. Purchased and licensed through{' '}
          <Link href={PURCHASE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[#6b7280]">
            Envato CodeCanyon
          </Link>
          . Lifetime validity. One-time payment.
        </p>

      </div>
    </section>
  );
}
