import { COLOR, LAUNCH_STEPS } from './constants';

const ICONS: React.ReactNode[] = [
  // Install on server
  <svg key="i0" width="30" height="30" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="2" /><rect x="2" y="15" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="2" /><path d="M6 6h.01M6 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
  // Add products
  <svg key="i1" width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  // Page builder
  <svg key="i2" width="30" height="30" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" /><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" /><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" /><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" /></svg>,
  // Go live (rocket)
  <svg key="i3" width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
];

export default function LaunchSteps() {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-[100px] pb-0" style={{ background: '#FFF5F9' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-14 max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            How It Works
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-4 leading-tight">
            From Install to First Order in Four Steps
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            No long build cycle. Install Zaika, add your catalog, design with the builder, and start selling — often
            the same day.
          </p>
        </div>

        <div className="relative max-w-[1080px] mx-auto">
          <div
            className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-[2px] border-t-2 border-dashed"
            style={{ borderColor: `${COLOR}30` }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 relative">
            {LAUNCH_STEPS.map((s, i) => (
              <div key={s.step} className="text-center group">
                <div className="flex justify-center mb-5">
                  <div className="relative">
                    <div
                      className="w-[104px] h-[104px] rounded-2xl flex items-center justify-center bg-white transition-all group-hover:-translate-y-1"
                      style={{ color: COLOR, border: `2px solid ${COLOR}`, boxShadow: `0 10px 28px ${COLOR}22` }}
                    >
                      <span className="absolute inset-1.5 rounded-xl" style={{ background: `${COLOR}0d` }} aria-hidden />
                      <span className="relative">{ICONS[i]}</span>
                    </div>
                    <span
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold text-white"
                      style={{ background: COLOR, boxShadow: `0 4px 10px ${COLOR}55` }}
                    >
                      {s.step}
                    </span>
                  </div>
                </div>
                <h3 className="text-[17px] font-semibold text-[#0F1112] mb-2">{s.title}</h3>
                <p className="text-[13px] text-[#6b7280] leading-6 max-w-[240px] mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-7 py-3 transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: COLOR, boxShadow: `0 6px 18px ${COLOR}35` }}
          >
            Start Building — from $39
          </a>
        </div>

      </div>
    </section>
  );
}
