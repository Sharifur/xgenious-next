import { COLOR, COLOR_DARK } from './constants';

const FACTS = [
  { k: 'Built on Laravel + PHP', d: 'Modern, secure framework' },
  { k: 'Self-hosted — you own it', d: 'Full source code, no SaaS lock-in' },
  { k: 'No-code page builder', d: '50+ drag & drop widgets' },
  { k: 'Web + Flutter app', d: 'Sell on web, Android & iOS' },
];

export default function Definition() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#EEF2EF]">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="max-w-[780px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            About Grenmart
          </div>
          <h2 className="text-[26px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-5">
            An Organic Grocery &amp; Multipurpose Laravel eCommerce Script
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-8">
            <strong className="text-[#0F1112]">Grenmart is a self-hosted organic grocery and multipurpose eCommerce script built on the
            Laravel PHP framework.</strong> It gives you a complete online store — a no-code drag &amp; drop page builder with
            50+ widgets, 3 home page variants, 20+ payment gateways, and advanced inventory, shipping, tax, coupon, and
            campaign systems — for a <strong className="text-[#0F1112]">one-time price with no monthly fees</strong>. Use it
            for grocery, fashion, electronics, or any catalog, and sell on web plus native Android &amp; iOS.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-[920px] mx-auto mt-10">
          {FACTS.map((f) => (
            <div key={f.k} className="rounded-2xl border border-[#E5E7EC] p-5 text-center hover:shadow-md transition-all">
              <p className="text-[14px] font-semibold text-[#0F1112] leading-snug mb-1" style={{ color: COLOR_DARK }}>{f.k}</p>
              <p className="text-[12px] text-[#6b7280] leading-5">{f.d}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
