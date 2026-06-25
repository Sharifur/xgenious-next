import { COLOR, COLOR_DARK, LIGHT_COLOR, FEATURES } from './constants';

const ICONS: Record<string, string> = {
  modules: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
  builder: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12-1a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
  menu: 'M4 6h16M4 12h16M4 18h16',
  form: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  variants: 'M4 5h7M4 9h7M4 13h7M16 5l2 2-2 2M16 9l2 2-2 2M16 13l2 2-2 2',
  roles: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  gateways: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  rtl: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129',
  ticket: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z',
  seo: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  dark: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
  security: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  widget: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z',
};

export default function Features() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#f9fafb' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[620px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            Everything Included
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            A Complete Business Platform Out of the Box
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7">
            Every feature needed to run a professional website business — CMS, commerce, bookings, support, and SEO —
            built-in with no extra plugins required.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
          {FEATURES.map((f, i) => {
            const iconPath = ICONS[f.icon] ?? ICONS.modules;
            const isLine = ['menu', 'form', 'variants', 'rtl', 'seo'].includes(f.icon);
            return (
              <div
                key={f.name}
                className="bg-white rounded-2xl border border-[#E5E7EC] p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: i === 0 ? COLOR : `${COLOR}15` }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={isLine ? 'none' : (i === 0 ? '#fff' : COLOR)} stroke={isLine ? (i === 0 ? '#fff' : COLOR) : 'none'} strokeWidth={isLine ? '2' : '0'} strokeLinecap="round" strokeLinejoin="round">
                    <path d={iconPath} />
                  </svg>
                </div>
                <h3 className="text-[15px] font-bold text-[#0F1112] mb-2">{f.name}</h3>
                <p className="text-[13px] text-[#6b7280] leading-6">{f.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
