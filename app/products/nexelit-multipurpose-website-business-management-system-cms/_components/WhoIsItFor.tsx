import { COLOR, LIGHT_COLOR, WHO_FOR } from './constants';

export default function WhoIsItFor() {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[580px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            Who It&apos;s For
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Built for Anyone Who Needs a Business Website
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-7">
            Whether you build websites for clients or run a business of your own, Nexelit has the modules and flexibility you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {WHO_FOR.map((w, i) => (
            <div
              key={w.tag}
              className="rounded-2xl border p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
              style={{
                background: i === 0 ? LIGHT_COLOR : '#fff',
                borderColor: i === 0 ? `${COLOR}30` : '#E5E7EC',
              }}
            >
              <span
                className="inline-flex text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4"
                style={{ background: `${COLOR}15`, color: COLOR }}
              >
                {w.tag}
              </span>
              <h3 className="text-[17px] font-bold text-[#0F1112] mb-3">{w.title}</h3>
              <p className="text-[13px] text-[#6b7280] leading-6 mb-5">{w.desc}</p>
              <ul className="flex flex-col gap-2">
                {w.fits.map((fit) => (
                  <li key={fit} className="flex items-center gap-2 text-[13px] text-[#374151]">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
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
