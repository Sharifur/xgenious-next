import { COLOR, LIGHT_COLOR, CODECANYON_URL } from './constants';
import ScrollLink from './ScrollLink';

const ROWS = [
  { feature: 'One-time price', botmerze: '$49', tidio: '$29–$499/mo', intercom: '$74+/mo', gorgias: '$50+/mo', custom: '$10,000+' },
  { feature: 'Self-hosted', botmerze: true, tidio: false, intercom: false, gorgias: false, custom: true },
  { feature: 'RAG knowledge base', botmerze: true, tidio: false, intercom: false, gorgias: false, custom: 'Build it' },
  { feature: 'WooCommerce sync', botmerze: true, tidio: 'Partial', intercom: false, gorgias: true, custom: 'Build it' },
  { feature: 'Shopify sync', botmerze: true, tidio: true, intercom: 'Partial', gorgias: true, custom: 'Build it' },
  { feature: 'Multi-client SaaS', botmerze: true, tidio: false, intercom: false, gorgias: false, custom: 'Build it' },
  { feature: 'Lead capture', botmerze: true, tidio: true, intercom: true, gorgias: false, custom: 'Build it' },
  { feature: 'PDF / URL training', botmerze: true, tidio: false, intercom: false, gorgias: false, custom: 'Build it' },
  { feature: 'Your own AI key', botmerze: true, tidio: false, intercom: false, gorgias: false, custom: 'Build it' },
  { feature: 'Full source code', botmerze: true, tidio: false, intercom: false, gorgias: false, custom: true },
  { feature: 'Monthly fees', botmerze: '$0', tidio: '$29–$499', intercom: '$74+', gorgias: '$50+', custom: '$0' },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return <span className="text-[#10b981] font-bold text-[15px]">✓</span>;
  if (value === false)
    return <span className="text-[#ef4444] text-[14px]">✗</span>;
  return <span className="text-[13px] text-[#6b7280]">{value}</span>;
}

export default function Comparison() {
  return (
    <section className="py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-14 max-w-[600px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Botmerze vs Alternatives
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Why Pay Monthly When You Can Own It?
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Tidio costs $348–$5,988/year. Intercom starts at $888/year. Botmerze is a one-time $49 — self-hosted, no subscriptions, full source code included.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E5E7EC]">
          <table className="w-full min-w-[700px] text-[13px]">
            <thead>
              <tr className="border-b border-[#E5E7EC]">
                <th className="text-left px-5 py-4 text-[12px] font-semibold text-[#9ca3af] uppercase tracking-wide w-[200px]">Feature</th>
                <th
                  className="px-5 py-4 text-center text-[13px] font-bold"
                  style={{ color: COLOR, background: `${COLOR}08` }}
                >
                  Botmerze
                </th>
                <th className="px-5 py-4 text-center text-[12px] font-semibold text-[#6b7280]">Tidio</th>
                <th className="px-5 py-4 text-center text-[12px] font-semibold text-[#6b7280]">Intercom</th>
                <th className="px-5 py-4 text-center text-[12px] font-semibold text-[#6b7280]">Gorgias</th>
                <th className="px-5 py-4 text-center text-[12px] font-semibold text-[#6b7280]">Custom Dev</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-[#E5E7EC] last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}
                >
                  <td className="px-5 py-3.5 font-medium text-[#0F1112]">{row.feature}</td>
                  <td className="px-5 py-3.5 text-center" style={{ background: `${COLOR}05` }}>
                    <Cell value={row.botmerze} />
                  </td>
                  <td className="px-5 py-3.5 text-center"><Cell value={row.tidio} /></td>
                  <td className="px-5 py-3.5 text-center"><Cell value={row.intercom} /></td>
                  <td className="px-5 py-3.5 text-center"><Cell value={row.gorgias} /></td>
                  <td className="px-5 py-3.5 text-center"><Cell value={row.custom} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <ScrollLink
            href="#pricing"
            className="inline-flex items-center gap-2 font-bold text-[15px] rounded-full px-8 py-3.5 text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
          >
            Start from $49 — See Pricing →
          </ScrollLink>
          <p className="text-[12px] text-[#9ca3af] mt-3">No monthly fees. Full source code. Self-hosted.</p>
        </div>

      </div>
    </section>
  );
}
