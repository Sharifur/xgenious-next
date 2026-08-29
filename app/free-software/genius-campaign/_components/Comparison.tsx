import { COLOR, LIGHT_COLOR } from './constants';

const ROWS = [
  { feature: 'Price', geniusCampaign: 'Free forever', smartlead: '$39–$379/mo', instantly: '$37.60–$358+/mo', mailchimp: '$13–$350/mo' },
  { feature: 'Self-hosted', geniusCampaign: 'Yes, your infrastructure', smartlead: 'No (SaaS only)', instantly: 'No (SaaS only)', mailchimp: 'No (SaaS only)' },
  { feature: 'Source code access', geniusCampaign: 'Full (MIT license)', smartlead: 'No', instantly: 'No', mailchimp: 'No' },
  { feature: 'Sending infrastructure', geniusCampaign: 'Your own AWS SES / Gmail Workspace', smartlead: 'Vendor mailbox infrastructure', instantly: 'Vendor mailbox infrastructure', mailchimp: 'Vendor-managed sending' },
  { feature: 'Sender rotation', geniusCampaign: 'Built in, quota-aware', smartlead: 'Built in', instantly: 'Built in', mailchimp: 'Not applicable' },
  { feature: 'Sequences / drip automation', geniusCampaign: 'Built in', smartlead: 'Built in', instantly: 'Built in', mailchimp: 'Available' },
  { feature: 'Webhooks & triggers', geniusCampaign: 'Built in (inbound + outbound)', smartlead: 'Pro plan and up', instantly: 'Available', mailchimp: 'Available' },
  { feature: 'AI writing assistance', geniusCampaign: 'Built in', smartlead: 'Available', instantly: 'Available', mailchimp: 'Available' },
  { feature: 'Email verification', geniusCampaign: 'Built in (Reoon + NeverBounce)', smartlead: 'Add-on credits', instantly: 'Add-on module', mailchimp: 'Not built in' },
  { feature: 'Data ownership', geniusCampaign: 'Your server, your data', smartlead: 'Vendor servers', instantly: 'Vendor servers', mailchimp: 'Vendor servers' },
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
            Genius Campaign vs Smartlead vs Instantly vs Mailchimp
          </h2>
          <p className="text-[#484848] text-[15px] mt-3 max-w-[600px] mx-auto leading-7">
            Same core sequence-and-campaign workflow. No per-contact or per-send fee. Your infrastructure.
          </p>
        </div>

        <div className="max-w-[1050px] mx-auto overflow-x-auto">
          <table className="w-full text-[13px] sm:text-[14px] border-collapse">
            <thead>
              <tr>
                <th className="text-left px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] w-[200px]">Feature</th>
                <th className="px-4 py-3 border-b border-[#E5E7EC] rounded-t-xl" style={{ background: LIGHT_COLOR, color: COLOR }}>
                  <span className="font-bold">Genius Campaign</span>
                  <span className="block text-[11px] font-normal mt-0.5">Free · Open Source</span>
                </th>
                <th className="px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] text-center">Smartlead</th>
                <th className="px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] text-center">Instantly</th>
                <th className="px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] text-center">Mailchimp</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-[#f9fafb]' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-[#0F1112]">{row.feature}</td>
                  <td className="px-4 py-3 text-center font-semibold" style={{ color: COLOR, background: `${LIGHT_COLOR}60` }}>
                    <Tick />{row.geniusCampaign}
                  </td>
                  <td className="px-4 py-3 text-center text-[#6b7280]">{row.smartlead}</td>
                  <td className="px-4 py-3 text-center text-[#6b7280]">{row.instantly}</td>
                  <td className="px-4 py-3 text-center text-[#6b7280]">{row.mailchimp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-[12px] text-[#9ca3af] mt-5 max-w-[620px] mx-auto">
          Smartlead, Instantly, and Mailchimp pricing per each vendor&apos;s published plans, 2026. Costs scale with contacts and send volume; Genius Campaign does not.
        </p>
      </div>
    </section>
  );
}
