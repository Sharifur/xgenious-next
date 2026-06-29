import { COLOR, COLOR_DARK, COMPARISON_ROWS } from './constants';

export default function Comparison() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#f9fafb' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            Compare
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Influstar vs. Hosted Platforms &amp; Custom Builds
          </h2>
          <p className="text-[#4b5563] text-[15px] sm:text-[17px] leading-7">
            Own your influencer marketplace outright instead of renting one — no monthly fees, no commission taken from your revenue.
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto overflow-x-auto rounded-2xl border border-[#E5E7EC] bg-white">
          <table className="w-full text-left border-collapse min-w-[680px]">
            <thead>
              <tr style={{ background: COLOR_DARK }}>
                <th className="text-[13px] font-semibold text-white/70 px-5 py-4">Feature</th>
                <th className="text-[13px] font-bold text-white px-5 py-4">Influstar</th>
                <th className="text-[13px] font-semibold text-white/70 px-5 py-4">Hosted SaaS</th>
                <th className="text-[13px] font-semibold text-white/70 px-5 py-4">Agency / DIY</th>
                <th className="text-[13px] font-semibold text-white/70 px-5 py-4">Custom Build</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : '#faf5ff' }}>
                  <td className="text-[13px] font-medium text-[#0F1112] px-5 py-3.5 border-t border-[#eef0f2]">{row.feature}</td>
                  <td className="text-[13px] font-bold px-5 py-3.5 border-t border-[#eef0f2]" style={{ color: COLOR_DARK }}>{row.influstar}</td>
                  <td className="text-[13px] text-[#6b7280] px-5 py-3.5 border-t border-[#eef0f2]">{row.saas}</td>
                  <td className="text-[13px] text-[#6b7280] px-5 py-3.5 border-t border-[#eef0f2]">{row.agency}</td>
                  <td className="text-[13px] text-[#6b7280] px-5 py-3.5 border-t border-[#eef0f2]">{row.custom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
