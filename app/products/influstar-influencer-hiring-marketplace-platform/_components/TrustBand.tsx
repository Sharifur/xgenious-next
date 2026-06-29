import { COLOR, COLOR_DARK, LIGHT_COLOR, TRUST_SIGNALS } from './constants';

export default function TrustBand() {
  return (
    <section className="py-16 sm:py-20" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="max-w-[1000px] mx-auto rounded-3xl p-8 sm:p-10" style={{ background: LIGHT_COLOR, border: `1px solid ${COLOR}20` }}>

          <div className="text-center mb-8 max-w-[560px] mx-auto">
            <h2 className="text-[24px] sm:text-[32px] font-bold text-[#0F1112] leading-tight mb-3">
              Production-Ready &amp; Built to Own
            </h2>
            <p className="text-[#6b7280] text-[14px] leading-7">
              Influstar is a maintained influencer marketplace platform on Laravel 12 — buy once, own the full source,
              and keep every dollar your marketplace earns.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {TRUST_SIGNALS.map((t) => (
              <div key={t.label} className="bg-white rounded-2xl p-5 text-center border border-[#E5E7EC]">
                <p className="text-[14px] font-bold mb-1" style={{ color: COLOR_DARK }}>{t.label}</p>
                <p className="text-[12px] text-[#6b7280] leading-5">{t.detail}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[13px] text-[#9ca3af]">
            Buy once · Own the full Laravel 12 source · Lifetime updates · No monthly fees
          </p>

        </div>
      </div>
    </section>
  );
}
