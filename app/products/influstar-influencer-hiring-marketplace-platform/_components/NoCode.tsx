import { COLOR, COLOR_DARK, BUILDERS } from './constants';

const ICONS: Record<string, string> = {
  page:   'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12-1a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
  menu:   'M4 6h16M4 12h16M4 18h16',
  widget: 'M4 4h7v7H4V4zm9 0h7v4h-7V4zm0 6h7v10h-7V10zM4 13h7v7H4v-7z',
  mail:   'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
};

export default function NoCode() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-5" style={{ background: `${COLOR}15`, color: COLOR }}>
              No-Code Builders
            </div>
            <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-5">
              Design Your Marketplace — No Developer Needed
            </h2>
            <p className="text-[#4b5563] text-[15px] leading-7 mb-8">
              Influstar ships with drag &amp; drop builders in the Laravel admin panel. Compose pages, build menus, arrange
              homepage widgets, and edit email templates visually — brand and shape your platform without touching code.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BUILDERS.map((b) => (
                <div key={b.name} className="rounded-2xl p-5 flex flex-col gap-2" style={{ background: '#faf5ff', border: `1px solid ${COLOR}20` }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${COLOR}20` }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={ICONS[b.icon] ?? ICONS.page} />
                    </svg>
                  </div>
                  <h3 className="text-[14px] font-bold" style={{ color: COLOR_DARK }}>{b.name}</h3>
                  <p className="text-[12px] text-[#6b7280] leading-5">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* visual */}
          <div className="rounded-2xl overflow-hidden border border-[#eef0f2] shadow-xl">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#eef0f2]" style={{ background: '#f7f8fa' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-[11px] text-[#9ca3af]">admin · page builder</span>
            </div>
            <div className="p-4" style={{ background: '#faf5ff' }}>
              <svg width="100%" viewBox="0 0 360 216" fill="none" role="img" aria-label="Animation: dragging a Categories widget from the palette and dropping it into the page canvas">
                <defs>
                  <linearGradient id="ncHero" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor={COLOR_DARK} />
                    <stop offset="1" stopColor={COLOR} />
                  </linearGradient>
                </defs>

                {/* ── palette ── */}
                <rect x="8" y="10" width="104" height="196" rx="9" fill="#ffffff" stroke="#e9d5ff" />
                <text x="20" y="27" fontSize="8" fontWeight="800" fill={COLOR} letterSpacing="0.6">WIDGETS</text>
                {[
                  { label: 'Hero', y: 36 },
                  { label: 'Categories', y: 62, active: true },
                  { label: 'Featured', y: 88 },
                  { label: 'CTA', y: 114 },
                  { label: 'Footer', y: 140 },
                ].map((c) => (
                  <g key={c.label}>
                    <rect x="16" y={c.y} width="88" height="20" rx="5" fill={c.active ? COLOR : '#fff'} stroke={c.active ? COLOR : '#e9d5ff'} />
                    <circle cx="25" cy={c.y + 7} r="1.1" fill={c.active ? '#fff' : COLOR} />
                    <circle cx="29" cy={c.y + 7} r="1.1" fill={c.active ? '#fff' : COLOR} />
                    <circle cx="25" cy={c.y + 13} r="1.1" fill={c.active ? '#fff' : COLOR} />
                    <circle cx="29" cy={c.y + 13} r="1.1" fill={c.active ? '#fff' : COLOR} />
                    <text x="36" y={c.y + 13} fontSize="9" fontWeight={c.active ? '700' : '500'} fill={c.active ? '#fff' : '#6b7280'}>{c.label}</text>
                  </g>
                ))}

                {/* ── canvas ── */}
                <rect x="124" y="10" width="228" height="196" rx="9" fill="#ffffff" stroke="#e9d5ff" />
                {/* hero block (static) */}
                <rect x="136" y="22" width="204" height="36" rx="6" fill="url(#ncHero)" />
                <rect x="146" y="32" width="80" height="6" rx="3" fill="#ffffff" fillOpacity="0.55" />
                <rect x="146" y="42" width="50" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.35" />

                {/* drop zone — empty state */}
                <g>
                  <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.66;0.7;0.96;1" dur="5s" repeatCount="indefinite" />
                  <rect x="136" y="66" width="204" height="40" rx="6" fill={`${COLOR}08`} stroke={COLOR} strokeWidth="1.4" strokeDasharray="5 4">
                    <animate attributeName="stroke-opacity" values="0.3;0.3;0.3;1;1;0.3" keyTimes="0;0.3;0.45;0.5;0.66;1" dur="5s" repeatCount="indefinite" />
                  </rect>
                  <text x="238" y="90" textAnchor="middle" fontSize="9" fontWeight="700" fill={COLOR} fillOpacity="0.7">Drop widget here</text>
                </g>

                {/* drop zone — filled "Categories" widget */}
                <g>
                  <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.68;0.72;0.94;0.98" dur="5s" repeatCount="indefinite" />
                  <rect x="136" y="66" width="204" height="40" rx="6" fill={`${COLOR}10`} stroke={COLOR} strokeWidth="1" strokeOpacity="0.4" />
                  {[150, 205, 260].map((x) => (
                    <g key={x}>
                      <rect x={x} y="74" width="44" height="18" rx="4" fill="#ffffff" stroke="#e9d5ff" />
                      <circle cx={x + 10} cy="83" r="4" fill={`${COLOR}30`} />
                      <rect x={x + 18} y="80" width="20" height="3.5" rx="1.75" fill={`${COLOR}40`} />
                      <rect x={x + 18} y="86" width="13" height="3" rx="1.5" fill={`${COLOR}25`} />
                    </g>
                  ))}
                  {/* success check */}
                  <circle cx="330" cy="72" r="7" fill="#22c55e" />
                  <path d="M326.5 72 l2.5 2.5 l4.5 -5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* footer block (static, faint) */}
                <rect x="136" y="116" width="204" height="20" rx="5" fill={`${COLOR}10`} />

                {/* ── dragged ghost widget ── */}
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0 0;0 0;178 19;178 19;178 19" keyTimes="0;0.16;0.66;0.72;1" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;1;1;0;0" keyTimes="0;0.16;0.2;0.66;0.72;1" dur="5s" repeatCount="indefinite" />
                  <rect x="16" y="62" width="88" height="20" rx="5" fill={COLOR} opacity="0.95" />
                  <circle cx="25" cy="69" r="1.1" fill="#fff" />
                  <circle cx="29" cy="69" r="1.1" fill="#fff" />
                  <circle cx="25" cy="75" r="1.1" fill="#fff" />
                  <circle cx="29" cy="75" r="1.1" fill="#fff" />
                  <text x="36" y="75" fontSize="9" fontWeight="700" fill="#fff">Categories</text>
                </g>

                {/* ── cursor ── */}
                <g>
                  <animateTransform attributeName="transform" type="translate" values="92 78;92 78;254 97;254 97;92 78" keyTimes="0;0.16;0.66;0.82;1" dur="5s" repeatCount="indefinite" />
                  <path d="M0 0 L0 13 L4 9 L7 15 L9.5 14 L6.5 8 L11 8 Z" fill="#0f172a" stroke="#fff" strokeWidth="0.8" />
                </g>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
