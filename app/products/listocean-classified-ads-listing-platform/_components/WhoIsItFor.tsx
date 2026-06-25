import { COLOR, COLOR_DARK, LIGHT_COLOR, WHO_FOR } from './constants';

export default function WhoIsItFor() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[580px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            Who Is It For?
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Built for Founders Who Want to Own Their Marketplace
          </h2>
          <p className="text-[#4b5563] text-[15px] leading-7">
            ListOcean fits any entrepreneur who wants a classifieds platform — no platform dependency, no commission on sales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {WHO_FOR.map((audience, i) => (
            <div
              key={audience.tag}
              className="rounded-2xl border p-7 flex flex-col gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
              style={{
                background: i === 1 ? LIGHT_COLOR : '#fff',
                borderColor: i === 1 ? `${COLOR}40` : '#E5E7EC',
              }}
            >
              <span
                className="inline-flex self-start text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: `${COLOR}20`, color: COLOR }}
              >
                {audience.tag}
              </span>
              <h3 className="text-[18px] font-bold text-[#0F1112] leading-snug">{audience.title}</h3>
              <p className="text-[14px] text-[#6b7280] leading-6">{audience.desc}</p>
              <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-[#E5E7EC]">
                {audience.fits.map((fit) => (
                  <li key={fit} className="flex items-center gap-2.5 text-[13px] text-[#374151]">
                    <svg className="flex-shrink-0" width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill={`${COLOR}20`} />
                      <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {fit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
