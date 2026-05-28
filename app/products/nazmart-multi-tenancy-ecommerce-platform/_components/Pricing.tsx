import Link from 'next/link';
import { COLOR, PURCHASE_URL, PRICING_TIERS } from './constants';

function CheckIcon({ ok }: { ok: boolean }) {
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
  const [regular, bundle, complete] = PRICING_TIERS;

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[560px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7">
            One-time purchase. No monthly fees. No platform commission. You keep 100% of what your marketplace earns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto">

          {/* Regular */}
          <div className="bg-white rounded-2xl border border-[#E5E7EC] p-7 flex flex-col">
            <div className="mb-6">
              <p className="text-[13px] font-semibold text-[#6b7280] uppercase tracking-widest mb-2">{regular.name}</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[48px] font-bold text-[#0F1112] leading-none">${regular.price}</span>
                <span className="text-[15px] text-[#9ca3af]">one-time</span>
              </div>
              <p className="text-[13px] text-[#6b7280] leading-5">{regular.desc}</p>
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
              {regular.plan.map((f) => (
                <div key={f.label} className="flex items-start gap-2.5 text-[13px]" style={{ color: f.ok ? '#374151' : '#9ca3af' }}>
                  <CheckIcon ok={f.ok} />
                  {f.label}
                </div>
              ))}
            </div>
          </div>

          {/* Bundle — featured */}
          <div
            className="rounded-2xl p-7 flex flex-col relative overflow-hidden"
            style={{ background: '#0d2b14', border: `2px solid ${COLOR}` }}
          >
            <div className="flex items-center gap-2 flex-wrap mb-6">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full" style={{ background: COLOR, color: '#0d2b14' }}>
                BEST VALUE
              </span>
              {bundle.badge && (
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#16a34a] text-white">
                  {bundle.badge}
                </span>
              )}
            </div>

            <div className="mb-5">
              <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${COLOR}cc` }}>{bundle.name}</p>

              <div className="flex items-center gap-2 mb-1">
                <span className="text-[20px] font-semibold line-through" style={{ color: '#3a5e3a' }}>${bundle.original}</span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: `${COLOR}25`, color: COLOR }}>
                  25% OFF
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[56px] font-bold text-white leading-none">${bundle.price}</span>
                <span className="text-[15px]" style={{ color: '#6b8a7a' }}>one-time</span>
              </div>
              <p className="text-[13px] leading-5" style={{ color: '#8aaa98' }}>{bundle.desc}</p>
            </div>

            <Link
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-bold text-[15px] rounded-xl py-3.5 mb-6 transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: COLOR, color: '#0d2b14', boxShadow: `0 8px 24px ${COLOR}55` }}
            >
              Get Bundle Pack
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div className="flex flex-col gap-2.5">
              {bundle.plan.map((f) => (
                <div key={f.label} className="flex items-start gap-2.5 text-[13px]" style={{ color: f.ok ? '#d1fae5' : '#4b6b5a' }}>
                  <CheckIcon ok={f.ok} />
                  {f.label}
                </div>
              ))}
            </div>
          </div>

          {/* Complete Package */}
          <div className="bg-white rounded-2xl border border-[#E5E7EC] p-7 flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-[13px] font-semibold text-[#6b7280] uppercase tracking-widest">{complete.name}</p>
                {complete.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${COLOR}20`, color: '#3a7d00' }}>
                    {complete.badge}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[18px] font-semibold line-through text-[#9ca3af]">${complete.original}</span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full text-white" style={{ background: '#16a34a' }}>30% OFF</span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[48px] font-bold text-[#0F1112] leading-none">${complete.price}</span>
                <span className="text-[15px] text-[#9ca3af]">one-time</span>
              </div>
              <p className="text-[13px] text-[#6b7280] leading-5">{complete.desc}</p>
            </div>

            <Link
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white font-semibold text-[14px] rounded-xl py-3 mb-6 transition-all hover:opacity-90"
              style={{ background: '#ec7161' }}
            >
              Get Complete Package
            </Link>

            <div className="flex flex-col gap-2.5">
              {complete.plan.map((f) => (
                <div key={f.label} className="flex items-start gap-2.5 text-[13px]" style={{ color: f.ok ? '#374151' : '#9ca3af' }}>
                  <CheckIcon ok={f.ok} />
                  {f.label}
                </div>
              ))}
            </div>
          </div>

        </div>

        <p className="text-center text-[13px] text-[#9ca3af] mt-8">
          All licenses include lifetime updates · CodeCanyon purchase · 6-month support included
        </p>
      </div>
    </section>
  );
}
