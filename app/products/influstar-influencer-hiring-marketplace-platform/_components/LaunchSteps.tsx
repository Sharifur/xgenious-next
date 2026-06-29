import { COLOR, COLOR_DARK, DARK_BG, LAUNCH_STEPS } from './constants';

export default function LaunchSteps() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: DARK_BG }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-14 max-w-[620px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}30`, color: '#d8b4fe' }}>
            Launch in Days
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-white leading-tight mb-4">
            From Download to Live Marketplace
          </h2>
          <p className="text-[#9ca3af] text-[15px] sm:text-[17px] leading-7">
            No months of development. Install, brand, configure payments, and open registration — you could be live this week.
          </p>
        </div>

        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {LAUNCH_STEPS.map((s) => (
            <div key={s.step} className="rounded-2xl p-6 flex flex-col gap-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="text-[40px] font-bold leading-none" style={{ color: COLOR }}>{s.step}</span>
              <h3 className="text-[16px] font-bold text-white">{s.title}</h3>
              <p className="text-[13px] text-[#9ca3af] leading-6">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5"
            style={{ background: COLOR, boxShadow: `0 8px 24px ${COLOR}55` }}
          >
            Get Influstar
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="text-[12px] mt-3" style={{ color: COLOR_DARK }}>Documentation &amp; guided installer included · Pro installation available</p>
        </div>

      </div>
    </section>
  );
}
