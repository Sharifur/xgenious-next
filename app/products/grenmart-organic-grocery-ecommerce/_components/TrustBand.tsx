import Image from 'next/image';
import { COLOR, COLOR_DARK, TRUST_SIGNALS } from './constants';

export default function TrustBand() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1100px] mx-auto">

          <div>
            <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-4 leading-tight">
              A Real Product You Can Inspect Before You Buy
            </h2>
            <p className="text-[#6b7280] text-[15px] leading-7 mb-8">
              Grenmart runs a full live demo with admin access. Test the storefront, the page builder, and the checkout
              yourself, and buy with confidence — every license ships with the full Laravel source code and lifetime
              updates.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {TRUST_SIGNALS.map((s) => (
                <div key={s.label} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5" style={{ background: `${COLOR}15`, color: COLOR }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-[14px] font-semibold text-[#0F1112] leading-5">{s.label}</h3>
                    <p className="text-[12px] text-[#6b7280] leading-5">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-[14px] font-semibold rounded-full px-6 py-3 text-white transition-all hover:-translate-y-0.5"
              style={{ background: COLOR, boxShadow: `0 8px 24px ${COLOR}40` }}
            >
              View pricing &amp; licenses
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-[#E5E7EC] shadow-xl">
              <Image
                src="/products/grenmart/feat-cart.png"
                alt="Grenmart cart, wishlist and product comparison in the live storefront"
                width={645}
                height={485}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-lg border border-[#E5E7EC]">
              <span className="font-bold text-[15px]" style={{ color: COLOR_DARK }}>Live demo</span>
              <span className="text-[12px] text-[#6b7280] leading-4">+ admin access<br />available now</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
