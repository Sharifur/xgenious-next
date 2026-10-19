import { COLOR, REGULAR_PRICE, COMBO_PRICE, EXTENDED_PRICE, PREMIUM_PLUGIN_COUNT } from './constants';
import { PLUGINS } from './plugins';

type Cell = boolean | string;

const ROWS: { label: string; cells: [Cell, Cell, Cell] }[] = [
  { label: 'Price (one-time)', cells: [`$${REGULAR_PRICE}`, `$${COMBO_PRICE}`, `$${EXTENDED_PRICE}`] },
  { label: 'AI chatbot script (web platform, admin, ticketing, KB, widget, billing)', cells: [true, true, true] },
  { label: 'Flutter mobile app', cells: [false, true, true] },
  {
    label: `${PREMIUM_PLUGIN_COUNT} premium plugins (${PLUGINS.map((p) => p.name).join(', ')})`,
    cells: ['Not included, and not sold separately', `All ${PREMIUM_PLUGIN_COUNT} included`, `All ${PREMIUM_PLUGIN_COUNT} included`],
  },
  { label: 'SaaS / white-label rights (sell to paying clients)', cells: [false, true, true] },
  { label: 'Unlimited client workspaces, source code modification rights', cells: [false, false, true] },
  { label: 'Support', cells: ['6 months', '6 months', 'Priority, 6 months'] },
  {
    label: 'Updates',
    cells: ['Lifetime core updates', 'Lifetime core updates + free future plugin updates', 'Lifetime core updates + free future plugin updates'],
  },
];

const HEADS = ['Regular License', 'Everything Bundle', 'Exclusive License'];

function Value({ v }: { v: Cell }) {
  if (v === true) return <span aria-label="Included" className="font-bold text-[#16a34a]">✓</span>;
  if (v === false) return <span aria-label="Not included" className="text-[#9ca3af]">—</span>;
  return <>{v}</>;
}

export default function LicenceTable() {
  return (
    <section id="licences" className="py-14 sm:py-20 scroll-mt-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-10 max-w-[680px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight">
            Which Helpnest Licence Includes the Plugins?
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E5E7EC]">
          <table className="w-full text-[13px] min-w-[720px]">
            <caption className="text-[13px] text-[#6b7280] leading-6 px-4 py-3 text-center caption-top">
              Every licence includes the self-hosted AI chatbot script. The white-label SaaS rights and all {PREMIUM_PLUGIN_COUNT} plugins depend on the licence.
            </caption>
            <thead>
              <tr>
                <td className="bg-[#F8F9FB] border-b border-[#E5E7EC]" />
                {HEADS.map((h, i) => (
                  <th
                    key={h}
                    scope="col"
                    className="px-4 py-4 text-center font-bold border-b border-[#E5E7EC] w-[22%]"
                    style={i === 1 ? { background: COLOR, color: '#fff' } : { background: '#F8F9FB', color: '#0F1112' }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FB]'}>
                  <th scope="row" className="text-left px-5 py-3.5 text-[#374151] font-medium border-b border-[#F0F1F3]">
                    {row.label}
                  </th>
                  {row.cells.map((c, j) => (
                    <td key={j} className="px-4 py-3.5 text-center text-[#374151] border-b border-[#F0F1F3]">
                      <Value v={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[12px] text-[#6b7280] leading-5 mt-4 text-center">
          The {PREMIUM_PLUGIN_COUNT} premium plugins are available only with the Everything Bundle or the Exclusive License. They cannot be bought separately or added to a Regular License.
        </p>

      </div>
    </section>
  );
}
