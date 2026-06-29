import { COLOR, COLOR_DARK, DARK_BG, COMPARISON_ROWS } from './constants';

const highlight = (val: string) =>
  val.startsWith('✓') ||
  val === 'None' ||
  val === 'One-time from $39' ||
  val === 'Same day';

export default function Comparison() {
  return (
    <section className="py-14 sm:py-20" style={{ background: '#FFF5F9' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-10 max-w-[700px] mx-auto">
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-3">
            Zaika vs Shopify vs WooCommerce vs Custom Build
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            For a single-vendor store you <strong>own the code and pay once</strong>. Shopify rents you a store with
            monthly fees; WooCommerce needs paid plugins to match these features; a custom build costs months and five
            figures.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#F0D9E2]">
          <table className="w-full min-w-[760px] text-[14px]">
            <thead>
              <tr style={{ background: DARK_BG }}>
                <th className="text-left px-5 py-4 text-[13px] font-semibold text-white w-[200px]">Feature</th>
                <th className="px-5 py-4 text-[13px] font-bold" style={{ color: '#ffa8c8' }}>Zaika</th>
                <th className="px-5 py-4 text-[13px] font-semibold text-white">Shopify</th>
                <th className="px-5 py-4 text-[13px] font-semibold text-white">WooCommerce</th>
                <th className="px-5 py-4 text-[13px] font-semibold text-white">Custom Build</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : '#FFF5F9' }}>
                  <td className="px-5 py-3.5 font-medium text-[#374151]">{row.feature}</td>
                  <td className="px-5 py-3.5 text-center font-semibold" style={{ color: highlight(row.zaika) ? COLOR_DARK : '#374151' }}>
                    {row.zaika}
                  </td>
                  <td className="px-5 py-3.5 text-center text-[#6b7280]">{row.shopify}</td>
                  <td className="px-5 py-3.5 text-center text-[#6b7280]">{row.woo}</td>
                  <td className="px-5 py-3.5 text-center text-[#6b7280]">{row.custom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all hover:opacity-90"
            style={{ background: COLOR }}
          >
            Get Zaika — from $39 one-time
          </a>
          <p className="text-[12px] text-[#9ca3af] mt-3">One-time purchase · No monthly fees · Full Laravel source code · 6 months support</p>
        </div>

      </div>
    </section>
  );
}
