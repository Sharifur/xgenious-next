import { COLOR, COLOR_DARK, LIGHT_COLOR, WHO_FOR } from './constants';

export default function WhoIsItFor() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-14 max-w-[620px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            Who It&apos;s For
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Built for Anyone Launching a Creator Economy Business
          </h2>
        </div>

        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
          {WHO_FOR.map((w) => (
            <div key={w.title} className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: LIGHT_COLOR, border: `1px solid ${COLOR}20` }}>
              <span className="self-start text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ background: COLOR, color: '#fff' }}>{w.tag}</span>
              <h3 className="text-[18px] font-bold text-[#0F1112]">{w.title}</h3>
              <p className="text-[13px] text-[#6b7280] leading-6">{w.desc}</p>
              <div className="flex flex-col gap-2 mt-1">
                {w.fits.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-[13px]" style={{ color: COLOR_DARK }}>
                    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill={`${COLOR}20`} />
                      <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
