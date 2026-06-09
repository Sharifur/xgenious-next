import { COLOR, LIGHT_COLOR, REGULAR_PRICE } from './constants';
import ScrollToPricing from './ScrollToPricing';

const ROWS = [
  { feature: 'Pricing model',         gocar: `One-time $${REGULAR_PRICE}`,  repairsmith: '$89/mo platform fee',  wrench: 'Commission per job',  custom: '$15k–80k+ dev cost' },
  { feature: 'Source code ownership', gocar: 'Full source code',            repairsmith: 'None (SaaS)',          wrench: 'None (SaaS)',         custom: 'Depends on contract' },
  { feature: 'Self-hosted',           gocar: 'Yes — your server',           repairsmith: 'No',                   wrench: 'No',                  custom: 'Yes' },
  { feature: 'White-label rights',    gocar: 'Extended license',            repairsmith: 'No',                   wrench: 'No',                  custom: 'Yes' },
  { feature: 'Flutter mobile app',    gocar: 'Flutter — included',          repairsmith: 'iOS + Android',        wrench: 'iOS + Android',       custom: 'Extra cost' },
  { feature: 'Vehicle selection',     gocar: 'Yes — built in',              repairsmith: 'Yes',                  wrench: 'Yes',                 custom: 'Custom build' },
  { feature: 'Real-time tracking',    gocar: 'Yes — built in',              repairsmith: 'Yes',                  wrench: 'Yes',                 custom: 'Extra cost' },
  { feature: 'Payment gateways',      gocar: '19+ gateways',               repairsmith: 'Stripe only',          wrench: '2–3 gateways',        custom: 'Custom integration' },
  { feature: 'Coupon system',         gocar: 'Fixed + percentage',          repairsmith: 'Promo codes',          wrench: 'No',                  custom: 'Custom build' },
  { feature: 'Multi-location',        gocar: 'Branch management',           repairsmith: 'Yes',                  wrench: 'Limited',             custom: 'Custom build' },
  { feature: 'Role-based access',     gocar: 'Admin + manager roles',       repairsmith: 'Limited',              wrench: 'No',                  custom: 'Custom build' },
  { feature: 'Monthly fees',          gocar: 'None — ever',                 repairsmith: 'Yes',                  wrench: 'Yes',                 custom: 'Hosting only' },
  { feature: 'Time to launch',        gocar: '1–3 days',                   repairsmith: 'Weeks',                wrench: 'Weeks',               custom: '3–12 months' },
];

function Cell({ value, highlight }: { value: string; highlight?: boolean }) {
  const isYes =
    value.toLowerCase().startsWith('yes') ||
    value.includes('included') ||
    value.includes('Full') ||
    value.includes('None — ever') ||
    value.includes('19+') ||
    value.includes('Flutter') ||
    value.includes('Fixed') ||
    value.includes('Branch') ||
    value.includes('Admin') ||
    value.includes('1–3 days');
  const isNo =
    value === 'No' ||
    value.includes('/mo') ||
    value.includes('SaaS') ||
    value.includes('Limited') ||
    value.includes('only') ||
    value.includes('2–3') ||
    value.includes('Commission') ||
    value.includes('Extra cost') ||
    value.includes('Custom build') ||
    value.includes('Custom integration') ||
    value.includes('Depends') ||
    value.includes('k+') ||
    value.includes('Weeks') ||
    value.includes('months');

  return (
    <td
      className={`px-4 py-3.5 text-[13px] text-center ${highlight ? 'font-semibold' : ''}`}
      style={{
        color: highlight ? (isYes ? '#059669' : isNo ? '#dc2626' : '#0F1112') : (isNo ? '#9ca3af' : '#374151'),
        background: highlight ? (isYes ? '#f0fdf4' : '#fff') : 'transparent',
      }}
    >
      {highlight && isYes ? (
        <span className="inline-flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#dcfce7"/><path d="M6 10l3 3 5-5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          {value}
        </span>
      ) : value}
    </td>
  );
}

export default function Comparison() {
  return (
    <section className="pb-20 lg:pb-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            GoCar vs Alternatives
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Why Build With GoCar Instead of SaaS Platforms?
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            RepairSmith and Wrench charge monthly fees and give you no source code. Custom development costs $15k–80k and takes months. GoCar is a one-time ${REGULAR_PRICE} — full ownership, self-hosted, white-label rights.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[#E5E7EC] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr style={{ background: '#F8F9FB' }}>
                  <th className="px-4 py-4 text-left text-[13px] font-semibold text-[#6b7280] w-[22%]">Feature</th>
                  <th className="px-4 py-4 text-center text-[13px] font-bold w-[19.5%]" style={{ color: COLOR }}>
                    <div className="flex flex-col items-center gap-1">
                      <span>GoCar</span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ background: LIGHT_COLOR }}>from ${REGULAR_PRICE}</span>
                    </div>
                  </th>
                  <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#6b7280] w-[19.5%]">RepairSmith</th>
                  <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#6b7280] w-[19.5%]">Wrench</th>
                  <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#6b7280] w-[19.5%]">Custom Dev</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : '#FAFAFA', borderTop: '1px solid #F3F4F6' }}>
                    <td className="px-4 py-3.5 text-[13px] font-medium text-[#374151]">{row.feature}</td>
                    <Cell value={row.gocar} highlight />
                    <Cell value={row.repairsmith} />
                    <Cell value={row.wrench} />
                    <Cell value={row.custom} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <ScrollToPricing
            className="inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-7 py-3 transition-all hover:-translate-y-0.5"
            style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
          >
            Get GoCar — from ${REGULAR_PRICE}
          </ScrollToPricing>
          <p className="text-[13px] text-[#9ca3af]">One-time payment · No monthly fees · Full source code</p>
        </div>

      </div>
    </section>
  );
}
