import Link from 'next/link';
import { COLOR, COMPARISON_ROWS } from './constants';

const COLS = ['ListOcean', 'Osclass', 'WordPress Classifieds', 'Custom Dev'];

function Cell({ val, highlight }: { val: string; highlight?: boolean }) {
  const isCheck = val.startsWith('✓');
  const isX = val.startsWith('✗');
  return (
    <td
      className="px-4 py-3.5 text-[13px] leading-5"
      style={{ color: highlight ? '#fff' : isCheck ? '#16a34a' : isX ? '#dc2626' : '#6b7280' }}
    >
      {val}
    </td>
  );
}

export default function Comparison() {
  return (
    <section className="pb-16 sm:pb-20 lg:pb-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-10 max-w-[620px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            How ListOcean Compares
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Built-In vs. Pieced Together
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Free classified scripts lack live chat, memberships, and a wallet. WordPress needs plugins for everything.
            Custom dev takes months. ListOcean ships everything ready to monetize from day one.
          </p>
        </div>

        <div className="overflow-x-auto max-w-[1100px] mx-auto rounded-2xl border border-[#E5E7EC] shadow-sm" role="region" aria-label="Classified ads platform comparison table">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-4 text-[12px] font-semibold text-[#6b7280] text-left uppercase tracking-wider bg-[#f9fafb] rounded-tl-2xl border-b border-[#E5E7EC]">
                  Feature
                </th>
                {COLS.map((col, i) => (
                  <th
                    key={col}
                    className="px-4 py-4 text-[12px] font-bold text-left border-b"
                    style={
                      i === 0
                        ? { background: COLOR, color: '#fff', borderColor: `${COLOR}80` }
                        : { background: '#f9fafb', color: '#374151', borderColor: '#E5E7EC' }
                    }
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, ri) => (
                <tr key={row.feature} className={ri % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}>
                  <td className="px-4 py-3.5 text-[13px] font-medium text-[#374151] border-b border-[#f0f0f0]">
                    {row.feature}
                  </td>
                  <td className="px-4 py-3.5 text-[13px] font-semibold border-b" style={{ background: `${COLOR}08`, borderColor: `${COLOR}15` }}>
                    <span style={{ color: row.listocean.startsWith('✓') ? COLOR : '#0c2240' }}>{row.listocean}</span>
                  </td>
                  <Cell val={row.osclass} />
                  <Cell val={row.wordpress} />
                  <Cell val={row.custom} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="max-w-[1100px] mx-auto mt-4 text-[12px] text-[#9ca3af] leading-5">
          ListOcean is built on{' '}
          <a href="https://laravel.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#6b7280] transition-colors">
            Laravel
          </a>
          {' '}— the most-starred PHP framework on GitHub. Osclass comparison based on{' '}
          <a href="https://osclass-classifieds.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#6b7280] transition-colors">
            osclass-classifieds.com
          </a>
          {' '}public feature list.
          Also see:{' '}
          <Link href="/products/multisaas-website-builder-saas" className="underline hover:text-[#6b7280] transition-colors">
            MultiSaas website builder
          </Link>
          {' '}·{' '}
          <Link href="/products/grenmart-organic-grocery-ecommerce" className="underline hover:text-[#6b7280] transition-colors">
            Grenmart ecommerce script
          </Link>
        </p>

      </div>
    </section>
  );
}
