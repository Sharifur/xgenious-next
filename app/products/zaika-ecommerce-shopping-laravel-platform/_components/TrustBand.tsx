import { COLOR, COLOR_DARK, LIGHT_COLOR, TRUST_SIGNALS } from './constants';

/* Inline storefront-in-browser mock (pink) */
function StoreMock() {
  return (
    <svg viewBox="0 0 520 380" className="w-full h-auto block" role="img" aria-label="Zaika single vendor storefront preview">
      <rect x="0" y="0" width="520" height="380" rx="14" fill={LIGHT_COLOR} />
      {/* browser chrome */}
      <rect x="14" y="14" width="492" height="32" rx="8" fill="#fff" stroke="#F0D9E2" />
      <circle cx="32" cy="30" r="4" fill={COLOR} /><circle cx="46" cy="30" r="4" fill={`${COLOR}80`} /><circle cx="60" cy="30" r="4" fill="#F0D9E2" />
      <rect x="84" y="22" width="380" height="16" rx="8" fill="#FBEFF4" />
      <text x="98" y="34" fontSize="9" fill="#a98" fontFamily="sans-serif">yourstore.com</text>
      {/* nav */}
      <rect x="14" y="54" width="492" height="34" fill="#fff" stroke="#F0D9E2" />
      <text x="30" y="76" fontSize="13" fontWeight="800" fill={COLOR} fontFamily="sans-serif">Zaika</text>
      {['Home', 'Shop', 'Sale', 'Blog'].map((t, i) => (
        <text key={t} x={360 + i * 36} y="75" fontSize="9" fontWeight="600" fill="#7a5563" fontFamily="sans-serif">{t}</text>
      ))}
      {/* hero banner */}
      <rect x="14" y="96" width="492" height="96" fill={`${COLOR}12`} />
      <text x="40" y="134" fontSize="16" fontWeight="800" fill={COLOR_DARK} fontFamily="sans-serif">NEW SEASON</text>
      <rect x="40" y="146" width="150" height="8" rx="4" fill={`${COLOR}40`} />
      <rect x="40" y="162" width="92" height="22" rx="11" fill={COLOR} />
      <text x="86" y="177" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff" fontFamily="sans-serif">Shop Now</text>
      {/* product grid */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={20 + i * 122} y="206" width="112" height="150" rx="9" fill="#fff" stroke="#F0D9E2" />
          <rect x={28 + i * 122} y="214" width="96" height="92" rx="6" fill={`${COLOR}16`} />
          {i % 2 === 0 && <><rect x={32 + i * 122} y="218" width="30" height="14" rx="7" fill={COLOR} /><text x={47 + i * 122} y="228" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fff" fontFamily="sans-serif">-30%</text></>}
          <rect x={28 + i * 122} y="314" width="64" height="8" rx="4" fill="#E5C6D2" />
          <rect x={28 + i * 122} y="328" width="40" height="9" rx="4" fill={COLOR} />
          <rect x={100 + i * 122} y="326" width="22" height="22" rx="6" fill={`${COLOR}1e`} />
        </g>
      ))}
    </svg>
  );
}

export default function TrustBand() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1100px] mx-auto">

          <div>
            <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-4 leading-tight">
              A Real Product You Can Inspect Before You Buy
            </h2>
            <p className="text-[#6b7280] text-[15px] leading-7 mb-5">
              Zaika runs a full live demo with admin access. Test the storefront, the page builder, and the checkout
              yourself, and buy with confidence — every license ships with the full Laravel source code and lifetime
              updates. Roughly{' '}
              <a href="https://baymard.com/lists/cart-abandonment-rate" target="_blank" rel="noopener noreferrer" className="underline decoration-[#d6336c]/40 hover:decoration-[#d6336c]" style={{ color: COLOR_DARK }}>
                70% of online shopping carts are abandoned (Baymard Institute)
              </a>
              , so Zaika builds in autocomplete search, quick view, wishlist, related products, and flash-sale campaigns
              to recover more of those sales.
            </p>

            <p className="text-[13px] text-[#6b7280] leading-6 mb-7 pl-3 border-l-2" style={{ borderColor: `${COLOR}40` }}>
              <strong className="text-[#0F1112]">Built and supported by Xgenious</strong> — Zaika has{' '}
              <strong className="text-[#0F1112]">350+ sales</strong> and a{' '}
              <strong className="text-[#0F1112]">4.4&#9733; rating</strong> on Envato CodeCanyon (item version 2.1.0),
              backed by full documentation and a real support team.
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

            <div className="flex items-center gap-3 flex-wrap">
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
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-[#F0D9E2] shadow-xl bg-white p-3">
              <StoreMock />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-lg border border-[#F0D9E2]">
              <span className="font-bold text-[15px]" style={{ color: COLOR_DARK }}>Live demo</span>
              <span className="text-[12px] text-[#6b7280] leading-4">+ admin access<br />available now</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
