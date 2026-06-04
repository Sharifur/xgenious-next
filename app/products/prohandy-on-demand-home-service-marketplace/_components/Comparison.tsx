import { COLOR, LIGHT_COLOR, REGULAR_PRICE } from './constants';
import ScrollToPricing from './ScrollToPricing';

const ROWS = [
  { feature: 'Pricing model',         prohandy: 'One-time $59',           taskrabbit: '$29–$99/mo',        urbancompany: 'Enterprise quote',  handy: '$29/mo per provider' },
  { feature: 'Source code ownership', prohandy: 'Full source code',       taskrabbit: 'None (SaaS)',        urbancompany: 'None (SaaS)',        handy: 'None (SaaS)' },
  { feature: 'Self-hosted',           prohandy: 'Yes — your server',      taskrabbit: 'No',                 urbancompany: 'No',                 handy: 'No' },
  { feature: 'White-label rights',    prohandy: 'Extended license',       taskrabbit: 'No',                 urbancompany: 'No',                 handy: 'No' },
  { feature: 'Client mobile app',     prohandy: 'Flutter (included)',     taskrabbit: 'iOS + Android',      urbancompany: 'iOS + Android',      handy: 'iOS + Android' },
  { feature: 'Provider mobile app',   prohandy: 'Flutter (included)',     taskrabbit: 'iOS + Android',      urbancompany: 'iOS + Android',      handy: 'iOS + Android' },
  { feature: 'Job posting (reverse)', prohandy: 'Yes — built in',         taskrabbit: 'Yes',                urbancompany: 'No',                 handy: 'No' },
  { feature: 'Live chat',             prohandy: 'Real-time built in',     taskrabbit: 'Yes',                urbancompany: 'Yes',                handy: 'Limited' },
  { feature: 'Payment gateways',      prohandy: '19 gateways',           taskrabbit: '2–3 (Stripe/PayPal)', urbancompany: 'Regional only',      handy: 'Stripe only' },
  { feature: 'Social login',          prohandy: 'Google, Facebook, Apple',taskrabbit: 'Google, Facebook',   urbancompany: 'Google, Facebook',   handy: 'Email only' },
  { feature: 'Provider verification', prohandy: 'Identity verification',  taskrabbit: 'Background check',   urbancompany: 'Background check',   handy: 'Basic check' },
  { feature: 'Coupon system',         prohandy: 'Fixed + percentage',     taskrabbit: 'Promo codes',        urbancompany: 'Yes',                handy: 'Limited' },
  { feature: 'Multi-language',        prohandy: 'Full multilingual',      taskrabbit: 'EN only',            urbancompany: 'Regional',           handy: 'EN only' },
  { feature: 'Monthly fees',          prohandy: 'None — ever',            taskrabbit: 'Yes',                urbancompany: 'Yes',                handy: 'Yes' },
];

function Cell({ value, highlight }: { value: string; highlight?: boolean }) {
  const isYes = value.toLowerCase().startsWith('yes') || value.includes('included') || value.includes('Full') || value.includes('None — ever') || value.includes('19') || value.includes('Flutter') || value.includes('Google, Facebook, Apple') || value.includes('Identity') || value.includes('Fixed');
  const isNo = value === 'No' || value.includes('/mo') || value.includes('quote') || value.includes('per provider') || value.includes('None (SaaS)') || value.includes('Limited') || value.includes('Stripe only') || value.includes('EN only') || value.includes('Email only') || value.includes('Regional') || value.includes('Basic') || value.includes('2–3') || value.includes('Promo');

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
            Prohandy vs Alternatives
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Why Build With Prohandy Instead of SaaS Platforms?
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            TaskRabbit, UrbanClap, and Handy charge monthly fees indefinitely and give you no source code. Prohandy is a one-time $59 purchase — full ownership, self-hosted, white-label rights.
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
                      <span>Prohandy</span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ background: LIGHT_COLOR }}>from ${REGULAR_PRICE}</span>
                    </div>
                  </th>
                  <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#6b7280] w-[19.5%]">TaskRabbit</th>
                  <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#6b7280] w-[19.5%]">Urban Company</th>
                  <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#6b7280] w-[19.5%]">Handy</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : '#FAFAFA', borderTop: '1px solid #F3F4F6' }}>
                    <td className="px-4 py-3.5 text-[13px] font-medium text-[#374151]">{row.feature}</td>
                    <Cell value={row.prohandy} highlight />
                    <Cell value={row.taskrabbit} />
                    <Cell value={row.urbancompany} />
                    <Cell value={row.handy} />
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
            Get Prohandy — from ${REGULAR_PRICE}
          </ScrollToPricing>
          <p className="text-[13px] text-[#9ca3af]">One-time payment · No monthly fees · Full source code</p>
        </div>

      </div>
    </section>
  );
}
