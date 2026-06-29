import { COLOR, COLOR_DARK } from './constants';

const FACTS = [
  { k: 'Built on Laravel + PHP', d: 'Modern, secure framework' },
  { k: 'Self-hosted — you own it', d: 'Full source code, no SaaS lock-in' },
  { k: 'No-code page builder', d: '30+ drag & drop widgets' },
  { k: 'Single vendor, zero commission', d: 'One store, you keep every sale' },
];

export default function Definition() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#F3E6EC]">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="max-w-[820px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            What Is Single Vendor eCommerce?
          </div>
          <h2 className="text-[26px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-5">
            A Single Vendor eCommerce Platform Built on Laravel
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-8">
            <strong className="text-[#0F1112]">Single vendor eCommerce is an online store run by one seller</strong> —
            you own the catalog, the checkout, and 100% of every sale, unlike a multi-vendor marketplace that hosts many
            sellers and splits commission. <strong className="text-[#0F1112]">Zaika is a self-hosted single-vendor
            eCommerce CMS built on the Laravel PHP framework.</strong> It gives you a complete online store — a no-code
            drag &amp; drop page builder with 30+ widgets, 15+ payment gateways, and advanced inventory,
            shipping, tax, coupon, and campaign systems — for a <strong className="text-[#0F1112]">one-time price with no
            monthly fees</strong>.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-[920px] mx-auto mt-10">
          {FACTS.map((f) => (
            <div key={f.k} className="rounded-2xl border border-[#F0D9E2] p-5 text-center hover:shadow-md transition-all">
              <p className="text-[14px] font-semibold leading-snug mb-1" style={{ color: COLOR_DARK }}>{f.k}</p>
              <p className="text-[12px] text-[#6b7280] leading-5">{f.d}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
