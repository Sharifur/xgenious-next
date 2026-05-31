import { COLOR, LIGHT_COLOR, PURCHASE_URL } from './constants';
import Link from 'next/link';

const ROWS = [
  { feature: 'Pricing model',         fundorex: 'One-time $69',       saas: 'Monthly $99–$499+',    custom: 'Project-based $10k+' },
  { feature: 'Platform commission',   fundorex: 'None — you keep 100%', saas: '3–8% per transaction', custom: 'None' },
  { feature: 'Source code included',  fundorex: 'Yes — full Laravel',  saas: 'No',                   custom: 'Yes' },
  { feature: 'Flutter mobile app',    fundorex: 'Yes (Combo pack)',    saas: 'Sometimes extra',       custom: 'Extra cost' },
  { feature: 'Community campaigns',   fundorex: 'Yes',                  saas: 'Rarely',               custom: 'Custom build' },
  { feature: 'Volunteer management',  fundorex: 'Yes',                  saas: 'No',                   custom: 'Custom build' },
  { feature: 'Built-in donor wallet', fundorex: 'Yes',                  saas: 'Rarely',               custom: 'Custom build' },
  { feature: 'Event ticketing',       fundorex: 'Yes',                  saas: 'Rarely',               custom: 'Extra module' },
  { feature: 'Payment gateways',      fundorex: '20+ included',         saas: '3–10 included',        custom: 'Custom integration' },
  { feature: 'Gift-based donations',  fundorex: 'Yes',                  saas: 'Some',                 custom: 'Custom build' },
  { feature: 'White-label / own brand', fundorex: 'Yes — fully',        saas: 'Limited',              custom: 'Yes' },
  { feature: 'Self-hosted',           fundorex: 'Yes — any VPS',        saas: 'No — vendor cloud',    custom: 'Yes' },
  { feature: 'Multi-language + RTL',  fundorex: 'Yes',                  saas: 'Varies',               custom: 'Custom build' },
  { feature: 'Setup time',            fundorex: '< 30 minutes',         saas: '< 1 hour',             custom: '3–12 months' },
  { feature: 'Ongoing cost',          fundorex: '$0/month',             saas: '$99–$499/month',       custom: 'Maintenance contract' },
];

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#dcfce7" />
      <path d="M6 10l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Comparison() {
  return (
    <section className="pb-10 lg:pb-14 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Fundorex vs Alternatives
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Fundorex vs SaaS Platforms vs Custom Development
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            See why 734+ teams chose Fundorex — a self-hosted crowdfunding platform script with zero monthly fees and full source code.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E5E7EC]">
          <table className="w-full text-[13px] min-w-[680px]">
            <thead>
              <tr>
                <th className="text-left px-6 py-4 text-[#0F1112] font-semibold bg-[#F8F9FB] border-b border-[#E5E7EC] w-[30%]">
                  Feature
                </th>
                <th className="px-6 py-4 font-bold text-white text-center border-b border-[#E5E7EC] w-[23%]"
                  style={{ background: COLOR }}>
                  Fundorex Script
                </th>
                <th className="px-6 py-4 font-semibold text-[#0F1112] text-center bg-[#F8F9FB] border-b border-[#E5E7EC] w-[23%]">
                  SaaS Platforms
                </th>
                <th className="px-6 py-4 font-semibold text-[#0F1112] text-center bg-[#F8F9FB] border-b border-[#E5E7EC] w-[24%]">
                  Custom Development
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FB]'}>
                  <td className="px-6 py-3.5 text-[#374151] font-medium border-b border-[#F0F1F3]">
                    {row.feature}
                  </td>
                  <td className="px-6 py-3.5 text-center border-b border-[#F0F1F3]"
                    style={{ background: `${COLOR}08` }}>
                    <span className="font-semibold" style={{ color: COLOR }}>{row.fundorex}</span>
                  </td>
                  <td className="px-6 py-3.5 text-center text-[#6b7280] border-b border-[#F0F1F3]">
                    {row.saas}
                  </td>
                  <td className="px-6 py-3.5 text-center text-[#6b7280] border-b border-[#F0F1F3]">
                    {row.custom}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
          >
            See Pricing — One-Time Purchase
          </a>
          <p className="text-[13px] text-[#9ca3af]">
            No monthly fees · Full source code · 6 months support included
          </p>
        </div>

      </div>
    </section>
  );
}
