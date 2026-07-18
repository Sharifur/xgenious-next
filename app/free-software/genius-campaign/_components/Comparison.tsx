import { COLOR, LIGHT_COLOR } from './constants';

const ROWS = [
  { feature: 'Price', geniusCampaign: 'Free forever', mailchimp: '$13–$350/mo', activeCampaign: '$29–$149/mo', klaviyo: '$20–$1,700/mo' },
  { feature: 'Self-hosted', geniusCampaign: 'Yes — your server', mailchimp: 'No (SaaS only)', activeCampaign: 'No (SaaS only)', klaviyo: 'No (SaaS only)' },
  { feature: 'Source code access', geniusCampaign: 'Full (MIT license)', mailchimp: 'No', activeCampaign: 'No', klaviyo: 'No' },
  { feature: 'Pricing model', geniusCampaign: 'No per-contact fee', mailchimp: 'Scales with contacts', activeCampaign: 'Scales with contacts', klaviyo: 'Scales with contacts' },
  { feature: 'Sequence / automation builder', geniusCampaign: 'Built in', mailchimp: 'Available', activeCampaign: 'Available', klaviyo: 'Available' },
  { feature: 'Webhooks', geniusCampaign: 'Built in', mailchimp: 'Available', activeCampaign: 'Available', klaviyo: 'Available' },
  { feature: 'AI writing assistance', geniusCampaign: 'Built in', mailchimp: 'Available', activeCampaign: 'Available', klaviyo: 'Available' },
  { feature: 'Data ownership', geniusCampaign: 'Your server, your data', mailchimp: 'Vendor servers', activeCampaign: 'Vendor servers', klaviyo: 'Vendor servers' },
  { feature: 'Vendor lock-in', geniusCampaign: 'None', mailchimp: 'Moderate', activeCampaign: 'Moderate', klaviyo: 'Moderate' },
];

function Tick() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="inline-block mr-1.5 flex-shrink-0">
      <circle cx="10" cy="10" r="10" fill={COLOR} fillOpacity="0.12" />
      <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Comparison() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            Comparison
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112]">
            Genius Campaign vs Mailchimp vs ActiveCampaign vs Klaviyo
          </h2>
          <p className="text-[#484848] text-[15px] mt-3 max-w-[560px] mx-auto leading-7">
            Same core workflow. No per-contact fees. No SaaS contract. Your server.
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto overflow-x-auto">
          <table className="w-full text-[13px] sm:text-[14px] border-collapse">
            <thead>
              <tr>
                <th className="text-left px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] w-[180px]">Feature</th>
                <th className="px-4 py-3 border-b border-[#E5E7EC] rounded-t-xl" style={{ background: LIGHT_COLOR, color: COLOR }}>
                  <span className="font-bold">Genius Campaign</span>
                  <span className="block text-[11px] font-normal mt-0.5">Free · Open Source</span>
                </th>
                <th className="px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] text-center">Mailchimp</th>
                <th className="px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] text-center">ActiveCampaign</th>
                <th className="px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] text-center">Klaviyo</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-[#f9fafb]' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-[#0F1112]">{row.feature}</td>
                  <td className="px-4 py-3 text-center font-semibold" style={{ color: COLOR, background: `${LIGHT_COLOR}60` }}>
                    <Tick />{row.geniusCampaign}
                  </td>
                  <td className="px-4 py-3 text-center text-[#6b7280]">{row.mailchimp}</td>
                  <td className="px-4 py-3 text-center text-[#6b7280]">{row.activeCampaign}</td>
                  <td className="px-4 py-3 text-center text-[#6b7280]">{row.klaviyo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-[12px] text-[#9ca3af] mt-5 max-w-[560px] mx-auto">
          Mailchimp, ActiveCampaign, and Klaviyo pricing as of 2025. Costs scale with contact list size — Genius Campaign does not.
        </p>
      </div>
    </section>
  );
}
