import { COLOR, COLOR_DARK, LIGHT_COLOR, BUILDERS } from './constants';

const BUILDER_ICONS = [
  // Page Builder
  <svg key="page" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>,
  // Menu Builder
  <svg key="menu" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M4 12h16M4 18h10" />
  </svg>,
  // Form Builder
  <svg key="form" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  // Widget Builder
  <svg key="widget" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>,
];

export default function NoCode() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1100px] mx-auto">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
              No-Code Builders
            </div>
            <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-5">
              Build Any Page. Design Any Site. No Code Required.
            </h2>
            <p className="text-[#6b7280] text-[15px] leading-7 mb-8">
              Nexelit ships with four visual builders that cover every part of your site — pages, navigation, forms, and
              footer widgets. Compose, rearrange, and publish directly from the admin panel without touching a file.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-6 py-3 transition-all hover:-translate-y-0.5"
              style={{ background: COLOR, boxShadow: `0 8px 24px ${COLOR}40` }}
            >
              Get started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {BUILDERS.map((b, i) => (
              <div
                key={b.name}
                className="rounded-2xl border border-[#E5E7EC] p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{ background: i === 0 ? LIGHT_COLOR : '#fff' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: i === 0 ? COLOR : `${COLOR}15`, color: i === 0 ? '#fff' : COLOR }}
                >
                  {BUILDER_ICONS[i]}
                </div>
                <h3 className="text-[14px] font-bold text-[#0F1112] mb-1">{b.name}</h3>
                <p className="text-[12px] text-[#6b7280] leading-5">{b.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
