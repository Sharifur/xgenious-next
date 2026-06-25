import { COLOR, DARK_BG, MODULES } from './constants';

const TAG_COLORS: Record<string, string> = {
  'Sell Online':   '#16a34a',
  'Events':        '#d97706',
  'Fundraising':   '#db2777',
  'Education':     '#7c3aed',
  'Bookings':      '#0ea5e9',
  'Recruitment':   '#64748b',
  'Services':      COLOR,
  'Support':       '#ef4444',
  'Self-Service':  '#0891b2',
};

export default function Modules() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: DARK_BG }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}25`, color: '#a5b4fc' }}>
            9 Built-in Modules
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-white leading-tight mb-4">
            Every Business Model. One Platform.
          </h2>
          <p className="text-[#9ca3af] text-[15px] sm:text-[17px] leading-7">
            Enable the modules your business needs. Disable everything else. No separate tools, no plugin juggling —
            just one admin panel for all your revenue streams and customer support.
          </p>
        </div>

        {/* 3×3 grid — all 9 modules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
          {MODULES.map((m, i) => {
            const tagColor = TAG_COLORS[m.tag] ?? COLOR;
            const isSupport = m.tag === 'Support' || m.tag === 'Self-Service';
            return (
              <div
                key={m.name}
                className="rounded-2xl p-6 border transition-all hover:-translate-y-0.5"
                style={{
                  background: isSupport ? `${tagColor}0a` : '#ffffff08',
                  borderColor: isSupport ? `${tagColor}25` : '#ffffff10',
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest"
                    style={{ background: `${tagColor}25`, color: tagColor }}
                  >
                    {m.tag}
                  </span>
                </div>
                <h3 className="text-[16px] font-bold text-white mb-2">{m.name}</h3>
                <p className="text-[13px] text-[#9ca3af] leading-6 mb-4">{m.desc}</p>
                <ul className="flex flex-col gap-1.5">
                  {m.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-[12px] text-[#d1d5db]">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: tagColor }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[12px] text-[#6b7280] mt-8">
          All 9 modules are included in every license. Toggle on or off from the admin panel — no plugins, no extra cost.
        </p>

      </div>
    </section>
  );
}
