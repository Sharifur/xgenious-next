import { COLOR, PLUGINS, FULL_PRICE, EXCLUSIVE_PRICE } from './constants';

const PLUGIN_COLORS = [
  { bg: '#ecfeff', border: '#0891b230', tag: '#0891b2', light: '#0891b215' },   // Cyan — Live Chat
  { bg: '#faf5ff', border: '#7c3aed30', tag: '#7c3aed', light: '#7c3aed15' },   // Purple — Membership
  { bg: '#f0fdf4', border: '#05966930', tag: '#059669', light: '#05966915' },   // Emerald — Wallet
  { bg: '#fff7ed', border: '#d9770630', tag: '#d97706', light: '#d9770615' },   // Amber — SMS Gateway
];

export default function Plugins() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[680px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            Premium Add-On Plugins
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Four Plugins That Power Your Revenue
          </h2>
          <p className="text-[#4b5563] text-[15px] sm:text-[17px] leading-7">
            Each plugin costs $19 separately.{' '}
            <strong>All four are included free</strong> in the Everything Bundle and Exclusive Pack —
            not available in the Regular License.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[900px] mx-auto">
          {PLUGINS.map((plugin, i) => {
            const c = PLUGIN_COLORS[i];
            return (
              <div
                key={plugin.name}
                className="rounded-2xl border p-6 hover:shadow-md hover:-translate-y-0.5 transition-all relative overflow-hidden"
                style={{ background: c.bg, borderColor: c.border }}
              >
                {/* Availability badges */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: `${COLOR}20`, color: COLOR }}>
                    Everything Bundle
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#7c3aed20] text-[#7c3aed]">
                    Exclusive Pack
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#f3f4f6] text-[#9ca3af] line-through">
                    Regular ✗
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span
                      className="inline-flex text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2"
                      style={{ background: c.light, color: c.tag }}
                    >
                      {plugin.tag}
                    </span>
                    <h3 className="text-[16px] font-bold text-[#0F1112]">{plugin.name}</h3>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-[10px] text-[#9ca3af] leading-4">standalone</p>
                    <p className="text-[17px] font-bold line-through" style={{ color: '#d1d5db' }}>${plugin.value}</p>
                    <p className="text-[11px] font-bold" style={{ color: c.tag }}>Included</p>
                  </div>
                </div>

                <p className="text-[13px] text-[#6b7280] leading-6">{plugin.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="max-w-[900px] mx-auto mt-8 rounded-2xl p-6"
          style={{ background: `${COLOR}08`, border: `1px solid ${COLOR}25` }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-[15px] font-bold text-[#0F1112] mb-1">
                All 4 plugins included — Everything Bundle &amp; Exclusive Pack only
              </p>
              <p className="text-[13px] text-[#6b7280]">
                Everything Bundle at <strong className="text-[#0F1112]">${FULL_PRICE}</strong> · Exclusive Pack at <strong className="text-[#0F1112]">${EXCLUSIVE_PRICE}</strong> · Regular License does <strong className="text-[#dc2626]">not</strong> include any plugins
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-white font-semibold text-[13px] rounded-full px-6 py-3 transition-all hover:-translate-y-0.5"
                style={{ background: COLOR, boxShadow: `0 4px 16px ${COLOR}40` }}
              >
                Compare plans
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
