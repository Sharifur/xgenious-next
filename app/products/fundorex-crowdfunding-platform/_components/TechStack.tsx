import { COLOR, LIGHT_COLOR, STATS, TECH } from './constants';

export default function TechStack() {
  return (
    <section className="py-20 lg:py-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Stats */}
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-5"
              style={{ background: LIGHT_COLOR, color: COLOR }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
              By the numbers
            </div>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0F1112] leading-tight mb-8">
              Trusted by Fundraisers Worldwide
            </h2>
            <div className="grid grid-cols-2 gap-5">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl border border-[#E5E7EC] p-5">
                  <p className="text-[32px] font-bold leading-none mb-1.5" style={{ color: COLOR }}>{s.value}</p>
                  <p className="text-[13px] text-[#6b7280]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech */}
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-5"
              style={{ background: LIGHT_COLOR, color: COLOR }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
              Tech Stack
            </div>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0F1112] leading-tight mb-8">
              Built on Proven Technology
            </h2>
            <div className="flex flex-col gap-3">
              {TECH.map((t) => (
                <div key={t.name} className="bg-white rounded-xl border border-[#E5E7EC] px-5 py-4 flex items-center gap-4">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: COLOR }}
                  />
                  <div>
                    <span className="text-[14px] font-semibold text-[#0F1112]">{t.name}</span>
                    <span className="text-[13px] text-[#6b7280] ml-2">— {t.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
