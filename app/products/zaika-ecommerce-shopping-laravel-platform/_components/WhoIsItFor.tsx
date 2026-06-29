import { COLOR, COLOR_DARK, WHO_FOR } from './constants';

const ICONS: React.ReactNode[] = [
  // Storefront basket
  <svg key="w0" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 11h14l-1.2 8.2a2 2 0 01-2 1.8H8.2a2 2 0 01-2-1.8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M9 11l2-6M15 11l-2-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M3 11h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
  // Storefront / tags
  <svg key="w1" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0l-7-7a2 2 0 01-.6-1.4V4a2 2 0 012-2h7.8a2 2 0 011.4.6l6.4 6.4a2 2 0 010 2.8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" /></svg>,
  // Agencies / rocket-launch building
  <svg key="w2" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M2 22V11a2 2 0 012-2h16a2 2 0 012 2v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 9V5a2 2 0 012-2h8a2 2 0 012 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><rect x="9" y="13" width="6" height="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
];

export default function WhoIsItFor() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#FFF5F9' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            One Store, One Owner
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-4 leading-tight">
            Who Zaika Single Vendor eCommerce Is For
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Built for one brand selling its own products — not a marketplace of vendors. Own the full source code, launch
            on a one-time license, and keep <strong className="text-[#0F1112]">100% of every sale</strong> — no monthly
            fees, no commission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
          {WHO_FOR.map((p, i) => (
            <div key={p.title} className="bg-white rounded-2xl border border-[#E5E7EC] p-7 flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${COLOR}15`, color: COLOR }}>
                  {ICONS[i]}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: `${COLOR}12`, color: COLOR_DARK }}>
                  {p.tag}
                </span>
              </div>
              <h3 className="text-[18px] font-semibold text-[#0F1112] mb-3">{p.title}</h3>
              <p className="text-[14px] text-[#6b7280] leading-7 mb-5">{p.desc}</p>
              <ul className="mt-auto flex flex-col gap-2 pt-4 border-t border-[#EEF2EF]">
                {p.fits.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[13px] text-[#374151]">
                    <svg className="flex-shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill={`${COLOR}1a`} />
                      <path d="M8 12.5l2.5 2.5 5-5.5" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
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
