import { COLOR, WHO_FOR } from './constants';

const ICONS: React.ReactNode[] = [
  // Grocery basket
  <svg key="w0" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 11h14l-1.2 8.2a2 2 0 01-2 1.8H8.2a2 2 0 01-2-1.8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M9 11l2-6M15 11l-2-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M3 11h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
  // Storefront / tags
  <svg key="w1" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0l-7-7a2 2 0 01-.6-1.4V4a2 2 0 012-2h7.8a2 2 0 011.4.6l6.4 6.4a2 2 0 010 2.8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" /></svg>,
  // Agencies / rocket-launch building
  <svg key="w2" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M2 22V11a2 2 0 012-2h16a2 2 0 012 2v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 9V5a2 2 0 012-2h8a2 2 0 012 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><rect x="9" y="13" width="6" height="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
];

export default function WhoIsItFor() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#F8FBF8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[620px] mx-auto">
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-4 leading-tight">
            Who Grenmart Is For
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Built for grocery first, flexible enough for any catalog. One license, full source code, no monthly fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
          {WHO_FOR.map((p, i) => (
            <div key={p.title} className="bg-white rounded-2xl border border-[#E5E7EC] p-7 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${COLOR}15`, color: COLOR }}>
                {ICONS[i]}
              </div>
              <h3 className="text-[18px] font-semibold text-[#0F1112] mb-3">{p.title}</h3>
              <p className="text-[14px] text-[#6b7280] leading-7">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
