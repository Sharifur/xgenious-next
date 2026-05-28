import { COLOR, REGULAR_PRICE } from './constants';

const ROWS = [
  { label: 'Upfront Cost',         xilancer: `From $${REGULAR_PRICE} one-time`,  scratch: '$15,000–$50,000+',   saas: '$0 (platform takes 20%)' },
  { label: 'Time to Launch',       xilancer: 'Under 1 hour',           scratch: '6–18 months',        saas: 'Instant (no ownership)' },
  { label: 'You Own the Platform', xilancer: true,                     scratch: true,                  saas: false },
  { label: 'Monthly Fees',         xilancer: 'None',                   scratch: 'Hosting only',       saas: '$0 + 20% commission per job' },
  { label: 'Native Mobile App',    xilancer: true,                     scratch: 'Extra cost',         saas: false },
  { label: 'Escrow Payments',      xilancer: true,                     scratch: 'Build yourself',     saas: 'Platform controlled' },
  { label: 'White-Label / Rebrand',xilancer: true,                     scratch: true,                  saas: false },
  { label: 'Source Code Access',   xilancer: true,                     scratch: true,                  saas: false },
  { label: 'Admin Panel',          xilancer: true,                     scratch: 'Build yourself',     saas: 'Partial' },
  { label: 'Commission You Keep',  xilancer: '100%',                   scratch: '100%',               saas: '~80%' },
];

function CellContent({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ background: '#dcfce7' }}>
        <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
          <path d="M4 10l5 5 7-7" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#fee2e2]">
        <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
          <path d="M5 5l10 10M15 5L5 15" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    );
  }
  return <span className="text-[13px] text-[#374151]">{value as string}</span>;
}

function Cell({ value }: { value: string | boolean }) {
  return (
    <td className="px-5 py-3.5 text-center">
      <CellContent value={value} />
    </td>
  );
}

export default function ComparisonTable() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            Xilancer vs. The Alternatives
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7">
            Why pay monthly fees or spend months building when one purchase gets you a complete, self-hosted freelancing platform?
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E5E7EC] max-w-[860px] mx-auto">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="border-b border-[#E5E7EC]">
                <th className="px-5 py-4 text-left text-[13px] font-semibold text-[#6b7280] w-[38%]">Feature</th>
                <th className="px-5 py-4 text-center text-[13px] font-bold w-[21%] rounded-t-none" style={{ background: `${COLOR}10`, color: COLOR }}>
                  Xilancer Script
                </th>
                <th className="px-5 py-4 text-center text-[13px] font-semibold text-[#6b7280] w-[21%]">Build from Scratch</th>
                <th className="px-5 py-4 text-center text-[13px] font-semibold text-[#6b7280] w-[21%]">Fiverr / Upwork</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-[#F3F4F6] last:border-0 ${i % 2 === 1 ? 'bg-[#fafafa]' : 'bg-white'}`}
                >
                  <td className="px-5 py-3.5 text-[13px] font-medium text-[#0F1112]">{row.label}</td>
                  <td
                    className="px-5 py-3.5 text-center"
                    style={{ background: i % 2 === 1 ? `${COLOR}08` : `${COLOR}05` }}
                  >
                    {typeof row.xilancer === 'boolean' ? (
                      <CellContent value={row.xilancer} />
                    ) : (
                      <span className="text-[13px] font-semibold" style={{ color: '#1a3d3a' }}>{row.xilancer}</span>
                    )}
                  </td>
                  <Cell value={row.scratch} />
                  <Cell value={row.saas} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
