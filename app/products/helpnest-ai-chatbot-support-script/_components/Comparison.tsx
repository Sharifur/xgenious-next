import { COLOR, LIGHT_COLOR, REGULAR_PRICE } from './constants';

const ROWS = [
  { feature: 'Pricing model',          helpnest: `One-time $${REGULAR_PRICE}`,    crisp: 'From $45/month',    intercom: 'From $29/month',    tidio: 'From $29/month' },
  { feature: 'Platform commission',    helpnest: 'None',                           crisp: 'None',              intercom: 'None',              tidio: 'None' },
  { feature: 'Self-hosted',            helpnest: 'Yes — any VPS',                  crisp: 'No — vendor cloud', intercom: 'No — vendor cloud', tidio: 'No — vendor cloud' },
  { feature: 'Source code included',   helpnest: 'Yes — full Laravel',             crisp: 'No',                intercom: 'No',                tidio: 'No' },
  { feature: 'Multi-tenant SaaS',      helpnest: 'Yes — unlimited clients',        crisp: 'Per workspace',     intercom: 'Per workspace',     tidio: 'Per workspace' },
  { feature: 'AI chatbot',             helpnest: 'Yes — semantic vector search',   crisp: 'Paid add-on',       intercom: 'Paid add-on',       tidio: 'Basic rules-based' },
  { feature: 'AI model support',       helpnest: 'GPT-4 + Claude',                 crisp: 'OpenAI only',       intercom: 'OpenAI only',       tidio: 'Limited' },
  { feature: 'Knowledge base',         helpnest: 'Yes — AI-connected',             crisp: 'Yes',               intercom: 'Yes',               tidio: 'Limited' },
  { feature: 'Ticketing system',       helpnest: 'Yes — full help desk + SLA',     crisp: 'Yes',               intercom: 'Yes',               tidio: 'Basic' },
  { feature: 'Visitor tracking',       helpnest: 'Yes — real-time map',            crisp: 'Yes',               intercom: 'Yes',               tidio: 'Limited' },
  { feature: 'Subscription billing',   helpnest: 'Stripe + PayPal built in',       crisp: 'Vendor-billed',     intercom: 'Vendor-billed',     tidio: 'Vendor-billed' },
  { feature: 'White-label / branding', helpnest: 'Yes — fully',                    crisp: 'No',                intercom: 'No',                tidio: 'No' },
  { feature: 'Ongoing cost',           helpnest: '$0/month',                       crisp: '$45–$295/month',    intercom: '$29–$999+/month',   tidio: '$29–$169/month' },
  { feature: 'Setup time',             helpnest: '< 30 minutes',                   crisp: '< 1 hour',          intercom: '< 1 hour',          tidio: '< 1 hour' },
];

export default function Comparison() {
  return (
    <section className="pb-10 lg:pb-14 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1200px] mx-auto">

        <div className="text-center mb-12 max-w-[680px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            HelpNest vs Alternatives
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            HelpNest vs Crisp vs Intercom vs Tidio
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Why pay $29–$45 per month forever when a one-time $59 purchase gives you full source code and no ongoing fees?
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E5E7EC]">
          <table className="w-full text-[13px] min-w-[800px]">
            <thead>
              <tr>
                <th className="text-left px-6 py-4 text-[#0F1112] font-semibold bg-[#F8F9FB] border-b border-[#E5E7EC] w-[26%]">
                  Feature
                </th>
                <th className="px-4 py-4 font-bold text-white text-center border-b border-[#E5E7EC] w-[18%]"
                  style={{ background: COLOR }}>
                  HelpNest Script
                </th>
                <th className="px-4 py-4 font-semibold text-[#0F1112] text-center bg-[#F8F9FB] border-b border-[#E5E7EC] w-[18%]">
                  Crisp
                </th>
                <th className="px-4 py-4 font-semibold text-[#0F1112] text-center bg-[#F8F9FB] border-b border-[#E5E7EC] w-[19%]">
                  Intercom
                </th>
                <th className="px-4 py-4 font-semibold text-[#0F1112] text-center bg-[#F8F9FB] border-b border-[#E5E7EC] w-[19%]">
                  Tidio
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FB]'}>
                  <td className="px-6 py-3.5 text-[#374151] font-medium border-b border-[#F0F1F3]">
                    {row.feature}
                  </td>
                  <td className="px-4 py-3.5 text-center border-b border-[#F0F1F3]"
                    style={{ background: `${COLOR}08` }}>
                    <span className="font-semibold" style={{ color: COLOR }}>{row.helpnest}</span>
                  </td>
                  <td className="px-4 py-3.5 text-center text-[#6b7280] border-b border-[#F0F1F3]">{row.crisp}</td>
                  <td className="px-4 py-3.5 text-center text-[#6b7280] border-b border-[#F0F1F3]">{row.intercom}</td>
                  <td className="px-4 py-3.5 text-center text-[#6b7280] border-b border-[#F0F1F3]">{row.tidio}</td>
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
            No monthly fees · Full source code · White-label rights
          </p>
        </div>

      </div>
    </section>
  );
}
