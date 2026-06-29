import { COLOR, COLOR_DARK, LIGHT_COLOR, HOW_IT_WORKS } from './constants';

const ICONS = [
  'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  'M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6',
  'M5 13l4 4L19 7',
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-14 max-w-[620px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            How It Works
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            From Listing to Payout — in Four Steps
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7">
            Influstar runs a two-sided marketplace: influencers list services, brands book them, escrow protects the deal,
            and you earn on every transaction.
          </p>
        </div>

        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOW_IT_WORKS.map((s, i) => (
            <div key={s.step} className="relative rounded-2xl p-6 flex flex-col gap-3" style={{ background: LIGHT_COLOR, border: `1px solid ${COLOR}20` }}>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: COLOR }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={ICONS[i]} />
                  </svg>
                </div>
                <span className="text-[34px] font-bold leading-none" style={{ color: `${COLOR}25` }}>{s.step}</span>
              </div>
              <h3 className="text-[16px] font-bold" style={{ color: COLOR_DARK }}>{s.title}</h3>
              <p className="text-[13px] text-[#6b7280] leading-6">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
