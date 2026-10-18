import Link from 'next/link';
import { COLOR, LIGHT_COLOR, REGULAR_PRICE, COMBO_PRICE, EXTENDED_PRICE, PREMIUM_PLUGIN_COUNT } from './constants';
import ScrollToPricing from './ScrollToPricing';

const NA = '—';

// Competitor prices checked on vendor pricing pages on 2026-10-18. Cells without a verified
// source are NA (no claim); recheck quarterly.
const ROWS = [
  { feature: 'Pricing model',          helpnest: `One-time $${REGULAR_PRICE} core; $${COMBO_PRICE} or $${EXTENDED_PRICE} with all ${PREMIUM_PLUGIN_COUNT} plugins`, sb: 'One-time $49 + paid apps', crisp: '$0–$295/month per workspace', intercom: '$29–$132 per seat/month + $0.99 per Fin resolution', tidio: 'Free; Starter $24.17/mo, Growth from $49.17/mo, Plus from $300/mo' },
  { feature: 'Platform commission',    helpnest: 'None',                           sb: NA,                  crisp: 'None',              intercom: 'None',              tidio: 'None' },
  { feature: 'Self-hosted',            helpnest: 'Yes — any VPS',                  sb: 'Yes (PHP)',         crisp: 'No — vendor cloud', intercom: 'No — vendor cloud', tidio: 'No — vendor cloud' },
  { feature: 'Source code included',   helpnest: 'Yes — full Laravel',             sb: 'Yes (PHP)',         crisp: 'No',                intercom: 'No',                tidio: 'No' },
  { feature: 'Multi-tenant SaaS',      helpnest: 'Everything Bundle & Exclusive License', sb: 'Separate SaaS version',           crisp: 'Per workspace',     intercom: 'Per workspace',     tidio: 'Per workspace' },
  { feature: 'AI chatbot',             helpnest: 'Included — OpenAI + 4 more providers', sb: 'Paid app ($29)', crisp: 'AI credits by plan', intercom: 'Fin, $0.99 per outcome', tidio: 'Lyro add-on from $32.50/mo' },
  { feature: 'WhatsApp',               helpnest: 'Official Cloud API plugin, included in Bundle & Exclusive', sb: 'Paid app ($29)', crisp: 'Paid plans (from $45/mo)', intercom: 'Charged per conversation', tidio: 'Paid plans (from $24.17/mo)' },
  { feature: 'Messenger & Instagram',  helpnest: 'Plugin, included in Bundle & Exclusive', sb: 'Messenger app ($29)', crisp: 'Messenger on paid plans', intercom: NA, tidio: 'Paid plans' },
  { feature: 'Slack',                  helpnest: 'Plugin (Integrations Hub)',      sb: 'Paid app ($29)',    crisp: 'Paid plans (from $45/mo)',                 intercom: NA,                 tidio: 'Premium plan only' },
  { feature: 'Knowledge base',         helpnest: 'Yes — AI-connected',             sb: NA,                  crisp: 'Yes',               intercom: 'Yes',               tidio: 'Limited' },
  { feature: 'Ticketing system',       helpnest: 'Yes — full help desk + SLA',     sb: NA,                  crisp: 'Yes',               intercom: 'Yes',               tidio: 'Basic' },
  { feature: 'Subscription billing',   helpnest: 'Stripe + PayPal built in',       sb: NA,                  crisp: 'Vendor-billed',     intercom: 'Vendor-billed',     tidio: 'Vendor-billed' },
  { feature: 'White-label / branding', helpnest: 'Yes — Bundle & Exclusive',       sb: NA,                  crisp: 'No',                intercom: 'No',                tidio: 'No' },
  { feature: 'Setup time',             helpnest: '< 30 minutes',                   sb: NA,                  crisp: '< 1 hour',          intercom: '< 1 hour',          tidio: '< 1 hour' },
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
            Helpnest vs Alternatives
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Helpnest vs Support Board vs Crisp vs Intercom vs Tidio
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Self-hosted AI chatbot script with a one-time licence vs monthly SaaS subscriptions. See also: <Link href="/self-hosted-ai-chatbot" className="underline underline-offset-2" style={{ color: COLOR }}>self-hosted AI chatbots compared</Link> and the <Link href="/best-ai-customer-service-chatbot" className="underline underline-offset-2" style={{ color: COLOR }}>best AI customer service chatbots</Link>.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E5E7EC]">
          <table className="w-full text-[13px] min-w-[1000px]">
            <thead>
              <tr>
                <th className="text-left px-6 py-4 text-[#0F1112] font-semibold bg-[#F8F9FB] border-b border-[#E5E7EC] w-[18%]">
                  Feature
                </th>
                <th className="px-4 py-4 font-bold text-white text-center border-b border-[#E5E7EC] w-[18%]"
                  style={{ background: COLOR }}>
                  Helpnest Script
                </th>
                <th className="px-4 py-4 font-semibold text-[#0F1112] text-center bg-[#F8F9FB] border-b border-[#E5E7EC] w-[16%]">
                  Support Board
                </th>
                <th className="px-4 py-4 font-semibold text-[#0F1112] text-center bg-[#F8F9FB] border-b border-[#E5E7EC] w-[16%]">
                  Crisp
                </th>
                <th className="px-4 py-4 font-semibold text-[#0F1112] text-center bg-[#F8F9FB] border-b border-[#E5E7EC] w-[16%]">
                  Intercom
                </th>
                <th className="px-4 py-4 font-semibold text-[#0F1112] text-center bg-[#F8F9FB] border-b border-[#E5E7EC] w-[16%]">
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
                  <td className="px-4 py-3.5 text-center text-[#6b7280] border-b border-[#F0F1F3]">{row.sb}</td>
                  <td className="px-4 py-3.5 text-center text-[#6b7280] border-b border-[#F0F1F3]">{row.crisp}</td>
                  <td className="px-4 py-3.5 text-center text-[#6b7280] border-b border-[#F0F1F3]">{row.intercom}</td>
                  <td className="px-4 py-3.5 text-center text-[#6b7280] border-b border-[#F0F1F3]">{row.tidio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[12px] text-[#9ca3af] mt-3 text-center">
          Prices checked October 2026 on each vendor&apos;s pricing page. A dash means we have not verified that cell.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <ScrollToPricing
            className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
          >
            See Pricing — One-Time Purchase
          </ScrollToPricing>
          <p className="text-[13px] text-[#9ca3af]">
            No monthly fees · Full source code · White-label rights
          </p>
        </div>

      </div>
    </section>
  );
}
