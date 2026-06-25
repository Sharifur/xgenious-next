import { COLOR, COLOR_DARK, LIGHT_COLOR, BUILDERS } from './constants';

export default function NoCode() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#f9fafb' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-5" style={{ background: `${COLOR}15`, color: COLOR }}>
              No-Code Builders
            </div>
            <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-5">
              Design Your Marketplace Without Touching Code
            </h2>
            <p className="text-[#4b5563] text-[15px] leading-7 mb-8">
              ListOcean ships with four drag &amp; drop builders. Compose pages from widgets, create dropdown menus,
              build custom listing forms per category, and manage footer widgets — all from the admin panel.
              No developer needed after setup.
            </p>

            <div className="flex flex-col gap-4">
              {BUILDERS.map((builder, i) => (
                <div key={builder.name} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-[13px] font-bold"
                    style={{ background: i === 0 ? COLOR : `${COLOR}15`, color: i === 0 ? '#fff' : COLOR }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#0F1112] mb-1">{builder.name}</h3>
                    <p className="text-[13px] text-[#6b7280] leading-5">{builder.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {BUILDERS.map((builder, i) => (
              <div
                key={builder.name}
                className="rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{
                  background: i % 2 === 0 ? LIGHT_COLOR : '#fff',
                  border: `1px solid ${COLOR}25`,
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${COLOR}20` }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {i === 0 && <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12-1a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />}
                    {i === 1 && <path d="M4 6h16M4 12h16M4 18h16" />}
                    {i === 2 && <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                    {i === 3 && <path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />}
                  </svg>
                </div>
                <h3 className="text-[13px] font-bold" style={{ color: COLOR_DARK }}>{builder.name}</h3>
                <p className="text-[12px] text-[#6b7280] leading-5">{builder.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
