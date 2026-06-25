import { COLOR, LAUNCH_STEPS } from './constants';

const STEP_ICONS = [
  // Install
  <svg key="install" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>,
  // Modules
  <svg key="modules" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>,
  // Design
  <svg key="design" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12-1a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
  </svg>,
  // Go Live
  <svg key="live" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 3l14 9-14 9V3z" />
  </svg>,
];

export default function LaunchSteps() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#f9fafb' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[580px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            How It Works
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            From Install to Live in Four Steps
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-7">
            Nexelit is designed to go live the same day you install it. No complex setup, no custom development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1100px] mx-auto">
          {LAUNCH_STEPS.map((s, i) => (
            <div
              key={s.step}
              className="relative bg-white rounded-2xl border border-[#E5E7EC] p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: i === 0 ? COLOR : `${COLOR}15`, color: i === 0 ? '#fff' : COLOR }}
                >
                  {STEP_ICONS[i]}
                </div>
                <span
                  className="text-[28px] font-black leading-none mt-1"
                  style={{ color: `${COLOR}25` }}
                >
                  {s.step}
                </span>
              </div>
              <h3 className="text-[15px] font-bold text-[#0F1112] mb-2">{s.title}</h3>
              <p className="text-[13px] text-[#6b7280] leading-6">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
