import { COLOR, DARK_BG, LAUNCH_STEPS } from './constants';

export default function LaunchSteps() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: DARK_BG }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[580px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}25`, color: `${COLOR}` }}>
            How to Launch
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-white leading-tight mb-4">
            From Purchase to Live Marketplace in 4 Steps
          </h2>
          <p className="text-[#9ca3af] text-[15px] leading-7">
            SafeCart is designed for a fast, guided setup. Follow these four steps and your multi-vendor
            marketplace will be live and accepting vendor registrations the same day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1100px] mx-auto">
          {LAUNCH_STEPS.map((step, i) => (
            <div
              key={step.step}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[15px] font-black"
                style={{ background: i === 0 ? COLOR : `${COLOR}20`, color: i === 0 ? '#fff' : COLOR }}
              >
                {step.step}
              </div>
              <h3 className="text-[15px] font-bold text-white">{step.title}</h3>
              <p className="text-[13px] leading-6" style={{ color: '#9ca3af' }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 font-semibold text-[14px] rounded-full px-7 py-3.5 text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: COLOR, boxShadow: `0 8px 24px ${COLOR}40` }}
          >
            Get Started Today
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
