import { COLOR, LIGHT_COLOR } from './constants';

const ROWS = [
  { feature: 'Price', geniusSupport: 'Free forever', zendesk: '$19–$115/agent/mo', freshdesk: '$15–$79/agent/mo' },
  { feature: 'Self-hosted', geniusSupport: 'Yes — your server', zendesk: 'No (SaaS only)', freshdesk: 'No (SaaS only)' },
  { feature: 'Source code access', geniusSupport: 'Full (MIT license)', zendesk: 'No', freshdesk: 'No' },
  { feature: 'Email-to-ticket (IMAP)', geniusSupport: 'Built in', zendesk: 'Built in', freshdesk: 'Built in' },
  { feature: 'Real-time updates', geniusSupport: 'Self-hosted WebSocket', zendesk: 'Proprietary', freshdesk: 'Proprietary' },
  { feature: 'Knowledge base', geniusSupport: 'Built in', zendesk: 'Built in', freshdesk: 'Built in' },
  { feature: 'Agent limit', geniusSupport: 'Unlimited', zendesk: 'Per-seat pricing', freshdesk: 'Per-seat pricing' },
  { feature: 'Data ownership', geniusSupport: 'Your server, your data', zendesk: 'Zendesk servers', freshdesk: 'Freshdesk servers' },
  { feature: 'White-label / branding', geniusSupport: 'Full control', zendesk: 'Limited', freshdesk: 'Limited' },
  { feature: 'Vendor lock-in', geniusSupport: 'None', zendesk: 'High', freshdesk: 'High' },
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
            Genius Support vs Zendesk vs Freshdesk
          </h2>
          <p className="text-[#484848] text-[15px] mt-3 max-w-[520px] mx-auto leading-7">
            Same core features. No per-agent fees. No SaaS contract. Your server.
          </p>
        </div>

        <div className="max-w-[900px] mx-auto overflow-x-auto">
          <table className="w-full text-[13px] sm:text-[14px] border-collapse">
            <thead>
              <tr>
                <th className="text-left px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] w-[200px]">Feature</th>
                <th className="px-4 py-3 border-b border-[#E5E7EC] rounded-t-xl" style={{ background: LIGHT_COLOR, color: COLOR }}>
                  <span className="font-bold">Genius Support</span>
                  <span className="block text-[11px] font-normal mt-0.5">Free · Open Source</span>
                </th>
                <th className="px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] text-center">Zendesk</th>
                <th className="px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] text-center">Freshdesk</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-[#f9fafb]' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-[#0F1112]">{row.feature}</td>
                  <td className="px-4 py-3 text-center font-semibold" style={{ color: COLOR, background: `${LIGHT_COLOR}60` }}>
                    <Tick />{row.geniusSupport}
                  </td>
                  <td className="px-4 py-3 text-center text-[#6b7280]">{row.zendesk}</td>
                  <td className="px-4 py-3 text-center text-[#6b7280]">{row.freshdesk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-[12px] text-[#9ca3af] mt-5 max-w-[500px] mx-auto">
          Zendesk and Freshdesk pricing as of 2025. Per-agent costs scale with team size — Genius Support does not.
        </p>
      </div>
    </section>
  );
}
