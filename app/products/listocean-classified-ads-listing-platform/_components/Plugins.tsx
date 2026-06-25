import { COLOR, COLOR_DARK, LIGHT_COLOR, PLUGINS, FULL_PRICE } from './constants';

export default function Plugins() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[660px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            Premium Add-On Plugins
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Four Plugins That Power Your Revenue
          </h2>
          <p className="text-[#4b5563] text-[15px] sm:text-[17px] leading-7">
            Live Chat, Membership, Wallet, and SMS Gateway — each plugin is available separately for $19.
            The <strong>Full Package bundles all four</strong> at $95 (vs $76 standalone), saving you $181
            compared to building each feature from scratch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {PLUGINS.map((plugin, i) => (
            <div
              key={plugin.name}
              className="rounded-2xl border p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
              style={{
                background: i % 2 === 0 ? LIGHT_COLOR : '#fff',
                borderColor: `${COLOR}30`,
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span
                    className="inline-flex text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2"
                    style={{ background: `${COLOR}20`, color: COLOR }}
                  >
                    {plugin.tag}
                  </span>
                  <h3 className="text-[16px] font-bold text-[#0F1112]">{plugin.name}</h3>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className="text-[11px] text-[#9ca3af] leading-4">standalone</p>
                  <p className="text-[18px] font-bold" style={{ color: COLOR_DARK }}>${plugin.value}</p>
                </div>
              </div>
              <p className="text-[13px] text-[#6b7280] leading-6">{plugin.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="max-w-[900px] mx-auto mt-8 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: `${COLOR}10`, border: `1px solid ${COLOR}30` }}
        >
          <div>
            <p className="text-[14px] font-bold text-[#0F1112] mb-1">All 4 plugins included in the Full Package</p>
            <p className="text-[13px] text-[#6b7280]">
              Bundled at <strong className="text-[#0F1112]">${FULL_PRICE}</strong> — saves $181 vs separate purchases plus custom integration time
            </p>
          </div>
          <a
            href="#pricing"
            className="flex-shrink-0 inline-flex items-center gap-2 text-white font-semibold text-[13px] rounded-full px-6 py-3 transition-all hover:-translate-y-0.5"
            style={{ background: COLOR, boxShadow: `0 4px 16px ${COLOR}40` }}
          >
            View Full Package pricing
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
