import { COLOR, LIGHT_COLOR, REGULAR_PRICE } from './constants';
import ScrollToPricing from './ScrollToPricing';

const ROWS = [
  { feature: 'One-time purchase',         qixer: '✓',              taskrabbit: '✗',              thumbtack: '✗',              custom: '✓' },
  { feature: 'Monthly fees',              qixer: 'None',           taskrabbit: 'From $30/mo',    thumbtack: 'From $30/mo',    custom: 'None' },
  { feature: 'Full source code',          qixer: '✓',              taskrabbit: '✗',              thumbtack: '✗',              custom: '✓' },
  { feature: 'Buyer + Seller Apps',       qixer: '✓ (both)',       taskrabbit: '✗',              thumbtack: '✗',              custom: 'On request' },
  { feature: 'Drag & Drop Builders',      qixer: '✓',              taskrabbit: '✗',              thumbtack: '✗',              custom: 'On request' },
  { feature: 'Commission + Subscription', qixer: 'Both',           taskrabbit: 'Commission',     thumbtack: 'Lead fees',      custom: 'Custom' },
  { feature: '20+ Payment Gateways',      qixer: '✓',              taskrabbit: 'Limited',        thumbtack: 'Limited',        custom: 'Custom' },
  { feature: 'GPS Service Discovery',     qixer: '✓',              taskrabbit: '✓',              thumbtack: '✓',              custom: 'Custom' },
  { feature: 'Multi-Language + RTL',      qixer: '✓',              taskrabbit: '✗',              thumbtack: '✗',              custom: 'Custom' },
  { feature: 'White-label ready',         qixer: '✓',              taskrabbit: '✗',              thumbtack: '✗',              custom: '✓' },
  { feature: 'Lifetime updates',          qixer: '✓',              taskrabbit: 'N/A',            thumbtack: 'N/A',            custom: 'Paid' },
  { feature: 'Setup time',               qixer: '< 1 day',        taskrabbit: 'N/A',            thumbtack: 'N/A',            custom: '3–6 months' },
  { feature: 'Starting price',            qixer: `$${REGULAR_PRICE}`, taskrabbit: 'Commission %', thumbtack: 'Lead fees',  custom: '$15,000+' },
];

function Cell({ value, highlight }: { value: string; highlight?: boolean }) {
  const isYes =
    value === '✓' ||
    value === 'Both' ||
    value.includes('(both)') ||
    value === 'None' ||
    value.includes('< 1 day') ||
    value.startsWith('$4') ||
    value.startsWith('$5');
  const isNo =
    value === '✗' ||
    value.includes('/mo') ||
    value === 'Limited' ||
    value === 'Commission' ||
    value === 'Lead fees' ||
    value === 'Paid' ||
    value.includes('months') ||
    value.includes('15,000') ||
    value === 'On request' ||
    value === 'Custom' ||
    value === 'N/A';

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
            Qixer vs Alternatives
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Why Build With Qixer Instead of TaskRabbit or Thumbtack?
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            TaskRabbit and Thumbtack charge commission and lead fees — you never own the platform. Custom development costs $15,000+ and takes months. Qixer is a one-time ${REGULAR_PRICE} — full ownership, self-hosted, white-label rights.
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
                      <span>Qixer</span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ background: LIGHT_COLOR }}>from ${REGULAR_PRICE}</span>
                    </div>
                  </th>
                  <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#6b7280] w-[19.5%]">TaskRabbit</th>
                  <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#6b7280] w-[19.5%]">Thumbtack</th>
                  <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#6b7280] w-[19.5%]">Custom Dev</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : '#FAFAFA', borderTop: '1px solid #F3F4F6' }}>
                    <td className="px-4 py-3.5 text-[13px] font-medium text-[#374151]">{row.feature}</td>
                    <Cell value={row.qixer} highlight />
                    <Cell value={row.taskrabbit} />
                    <Cell value={row.thumbtack} />
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
            Get Qixer — from ${REGULAR_PRICE}
          </ScrollToPricing>
          <p className="text-[13px] text-[#9ca3af]">One-time payment · No monthly fees · Full source code</p>
        </div>

      </div>
    </section>
  );
}
