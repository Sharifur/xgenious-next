import { COLOR, LIGHT_COLOR } from './constants';

const ROWS = [
  { feature: 'License', geniusSupport: 'MIT (most permissive)', osTicket: 'GPL-2.0', freeScout: 'AGPL-3.0', zammad: 'AGPL-3.0', uvdesk: 'OSL-3.0' },
  { feature: 'Framework', geniusSupport: 'Laravel + PHP 8.2', osTicket: 'Plain PHP', freeScout: 'Laravel', zammad: 'Ruby on Rails', uvdesk: 'Symfony' },
  { feature: 'Guest ticketing (no login)', geniusSupport: 'Yes: form + email + magic link', osTicket: 'No', freeScout: 'No', zammad: 'No', uvdesk: 'No' },
  { feature: 'Email-to-ticket (IMAP)', geniusSupport: 'Built in', osTicket: 'Built in', freeScout: 'Built in', zammad: 'Built in', uvdesk: 'Built in' },
  { feature: 'Real-time updates', geniusSupport: 'Self-hosted WebSocket (Reverb)', osTicket: 'No', freeScout: 'No', zammad: 'Proprietary', uvdesk: 'No' },
  { feature: 'Knowledge base', geniusSupport: 'Built in', osTicket: 'Add-on', freeScout: 'Paid module', zammad: 'Built in', uvdesk: 'Built in' },
  { feature: 'Module paywall', geniusSupport: 'None', osTicket: 'None', freeScout: '$2.99–$29/module', zammad: 'None', uvdesk: 'Community only' },
  { feature: 'Min server RAM', geniusSupport: '2 GB', osTicket: '~1 GB', freeScout: '~1 GB', zammad: '4–6 GB', uvdesk: '3 GB' },
  { feature: 'Modern UI', geniusSupport: 'Yes', osTicket: 'Dated', freeScout: 'Gmail-like', zammad: 'Modern', uvdesk: 'Modern' },
  { feature: 'Customer portal', geniusSupport: 'Yes', osTicket: 'Yes', freeScout: 'No (shared inbox)', zammad: 'Yes', uvdesk: 'Yes' },
];

function Tick() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="inline-block mr-1.5 flex-shrink-0">
      <circle cx="10" cy="10" r="10" fill={COLOR} fillOpacity="0.12" />
      <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Alternatives() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            Open-Source Alternatives
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112]">
            Genius Support vs osTicket vs FreeScout vs Zammad vs UVdesk
          </h2>
          <p className="text-[#484848] text-[15px] mt-3 max-w-[560px] mx-auto leading-7">
            Looking for an osTicket alternative, a FreeScout alternative, or a Zammad alternative? Here is how Genius Support compares across license, features, and hosting.
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto overflow-x-auto">
          <table className="w-full text-[12px] sm:text-[13px] border-collapse">
            <thead>
              <tr>
                <th className="text-left px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] w-[180px]">Feature</th>
                <th className="px-3 py-3 border-b border-[#E5E7EC] rounded-t-xl" style={{ background: LIGHT_COLOR, color: COLOR }}>
                  <span className="font-bold">Genius Support</span>
                  <span className="block text-[10px] font-normal mt-0.5">MIT · Free</span>
                </th>
                <th className="px-3 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] text-center">osTicket</th>
                <th className="px-3 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] text-center">FreeScout</th>
                <th className="px-3 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] text-center">Zammad</th>
                <th className="px-3 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] text-center">UVdesk</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-[#f9fafb]' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-[#0F1112]">{row.feature}</td>
                  <td className="px-3 py-3 text-center font-semibold" style={{ color: COLOR, background: `${LIGHT_COLOR}60` }}>
                    <Tick />{row.geniusSupport}
                  </td>
                  <td className="px-3 py-3 text-center text-[#6b7280]">{row.osTicket}</td>
                  <td className="px-3 py-3 text-center text-[#6b7280]">{row.freeScout}</td>
                  <td className="px-3 py-3 text-center text-[#6b7280]">{row.zammad}</td>
                  <td className="px-3 py-3 text-center text-[#6b7280]">{row.uvdesk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-[12px] text-[#9ca3af] mt-5 max-w-[560px] mx-auto">
          License and feature data verified from each project&apos;s GitHub repository and documentation, September 2026. AGPL-3.0&apos;s network-use clause may require publishing modifications if you offer the software as a hosted service.
        </p>
      </div>
    </section>
  );
}
