import { COLOR, COLOR_DARK, LIGHT_COLOR, BUILDERS } from './constants';

/* Inline page-builder canvas mock — drag a widget from the tray onto the page */
function BuilderMock() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto block" role="img" aria-label="Zaika drag and drop page builder canvas">
      <defs>
        <style>{`
          @keyframes zk-drag { 0%{transform:translate(0,0);opacity:0} 8%{opacity:1} 46%{transform:translate(264px,150px)} 60%{transform:translate(264px,150px)} 64%{opacity:0} 100%{opacity:0} }
          @keyframes zk-drop { 0%,52%{opacity:0;transform:scale(.96)} 60%{opacity:1;transform:scale(1)} 100%{opacity:1;transform:scale(1)} }
          .zk-ghost{ animation: zk-drag 4.5s ease-in-out infinite; }
          .zk-dropped{ animation: zk-drop 4.5s ease-in-out infinite; transform-origin:center; }
        `}</style>
      </defs>
      <rect x="0" y="0" width="520" height="360" rx="14" fill={LIGHT_COLOR} />
      {/* toolbar */}
      <rect x="14" y="14" width="492" height="30" rx="7" fill="#fff" stroke="#F0D9E2" />
      <circle cx="30" cy="29" r="4" fill={COLOR} /><circle cx="44" cy="29" r="4" fill={`${COLOR}80`} /><circle cx="58" cy="29" r="4" fill="#F0D9E2" />
      <rect x="360" y="22" width="62" height="14" rx="7" fill={`${COLOR}22`} />
      <rect x="430" y="22" width="62" height="14" rx="7" fill={COLOR} />
      {/* widget tray */}
      <rect x="14" y="56" width="120" height="290" rx="10" fill="#fff" stroke="#F0D9E2" />
      <text x="28" y="76" fontSize="10" fontWeight="700" fill={COLOR_DARK} fontFamily="sans-serif">WIDGETS</text>
      {['Hero Slider', 'Product Grid', 'Category', 'Banner', 'Countdown'].map((w, i) => (
        <g key={w}>
          <rect x="26" y={88 + i * 34} width="96" height="26" rx="6" fill={`${COLOR}10`} stroke={`${COLOR}30`} />
          <rect x="34" y={97 + i * 34} width="10" height="8" rx="2" fill={COLOR} />
          <text x="50" y={104 + i * 34} fontSize="9" fontWeight="600" fill="#7a5563" fontFamily="sans-serif">{w}</text>
        </g>
      ))}
      {/* canvas */}
      <rect x="148" y="56" width="358" height="290" rx="10" fill="#fff" stroke="#F0D9E2" />
      <rect x="166" y="74" width="322" height="60" rx="8" fill={`${COLOR}14`} />
      <text x="182" y="100" fontSize="11" fontWeight="700" fill={COLOR_DARK} fontFamily="sans-serif">NEW SEASON SALE</text>
      <rect x="182" y="108" width="120" height="9" rx="4" fill={`${COLOR}40`} />
      <rect x="408" y="98" width="62" height="20" rx="10" fill={COLOR} />
      {/* product row */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={166 + i * 108} y="150" width="98" height="80" rx="7" fill="#FBEFF4" stroke="#F0D9E2" />
          <rect x={176 + i * 108} y="160" width="78" height="44" rx="5" fill={`${COLOR}1e`} />
          <rect x={176 + i * 108} y="210" width="50" height="7" rx="3" fill="#E5C6D2" />
          <rect x={176 + i * 108} y="221" width="30" height="7" rx="3" fill={COLOR} />
        </g>
      ))}
      {/* drop target highlight */}
      <rect className="zk-dropped" x="166" y="246" width="322" height="56" rx="8" fill={`${COLOR}0d`} stroke={COLOR} strokeWidth="2" strokeDasharray="6 5" />
      <text className="zk-dropped" x="327" y="278" textAnchor="middle" fontSize="10" fontWeight="700" fill={COLOR_DARK} fontFamily="sans-serif">Countdown widget dropped here</text>
      {/* dragging ghost */}
      <g className="zk-ghost">
        <rect x="40" y="200" width="96" height="26" rx="6" fill="#fff" stroke={COLOR} strokeWidth="1.5" />
        <rect x="48" y="209" width="10" height="8" rx="2" fill={COLOR} />
        <text x="64" y="216" fontSize="9" fontWeight="700" fill={COLOR_DARK} fontFamily="sans-serif">Countdown</text>
      </g>
    </svg>
  );
}

export default function NoCode() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1100px] mx-auto">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
              100% No-Code
            </div>
            <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-4 leading-tight">
              Build Every Page by Dragging &amp; Dropping
            </h2>
            <p className="text-[#6b7280] text-[15px] leading-7 mb-8">
              Zaika ships with four visual builders so you control the whole store without a developer. Compose pages
              from <strong className="text-[#0F1112]">30+ widgets</strong>, design menus and forms, and customize the
              footer — all from the admin panel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BUILDERS.map((b) => (
                <div key={b.name} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ background: `${COLOR}15`, color: COLOR }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#0F1112] mb-0.5">{b.name}</h3>
                    <p className="text-[13px] text-[#6b7280] leading-6">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-7 py-3 mt-8 transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: COLOR, boxShadow: `0 6px 18px ${COLOR}35` }}
            >
              Get Zaika — from $39
            </a>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-[#F0D9E2] shadow-xl bg-white p-3">
              <BuilderMock />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-lg border border-[#F0D9E2]">
              <span className="text-[22px] font-bold" style={{ color: COLOR_DARK }}>30+</span>
              <span className="text-[12px] text-[#6b7280] leading-4">page builder<br />widgets included</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
