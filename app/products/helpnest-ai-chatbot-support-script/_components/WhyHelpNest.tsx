import { COLOR, LIGHT_COLOR } from './constants';

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="10" fill={COLOR} fillOpacity="0.12" />
      <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Yes() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
      <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
        <path d="M5 10l3.5 3.5 6.5-7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function No() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50">
      <svg width="10" height="10" viewBox="0 0 20 20" fill="none">
        <path d="M5 5l10 10M15 5L5 15" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

type Row = { label: string; helpnest: boolean | string; crisp: boolean | string; intercom: boolean | string; tidio: boolean | string };

const PRICING_ROWS: Row[] = [
  { label: 'Monthly cost',    helpnest: '$0/month',  crisp: '$45+/mo',  intercom: '$29+/mo', tidio: '$29+/mo' },
  { label: 'One-time price',  helpnest: '$59',        crisp: '—',        intercom: '—',       tidio: '—' },
  { label: 'Self-hosted',     helpnest: true,         crisp: false,      intercom: false,     tidio: false },
  { label: 'Full source code',helpnest: true,         crisp: false,      intercom: false,     tidio: false },
  { label: 'White-label',     helpnest: true,         crisp: false,      intercom: false,     tidio: false },
  { label: 'Data ownership',  helpnest: true,         crisp: false,      intercom: false,     tidio: false },
];

const FEATURES_ROWS: Row[] = [
  { label: 'Semantic AI chatbot',    helpnest: true,       crisp: false,  intercom: 'Paid add-on', tidio: 'Basic' },
  { label: 'Knowledge base',         helpnest: true,       crisp: true,   intercom: true,          tidio: 'Limited' },
  { label: 'Live chat + hand-off',   helpnest: true,       crisp: true,   intercom: true,          tidio: true },
  { label: 'Visitor tracking',       helpnest: true,       crisp: true,   intercom: true,          tidio: 'Limited' },
  { label: 'Multi-tenant SaaS',      helpnest: true,       crisp: false,  intercom: false,         tidio: false },
  { label: 'Subscription billing',   helpnest: true,       crisp: false,  intercom: false,         tidio: false },
];

function CompareTable({ rows }: { rows: Row[] }) {
  return (
    <div className="flex-1 w-full rounded-2xl overflow-x-auto border border-[#E5E7EC] shadow-sm bg-white">
      <table className="w-full text-[12px] min-w-[420px]">
        <thead>
          <tr>
            <th className="text-left px-4 py-3 text-[#6b7280] font-medium bg-[#F8F9FB] border-b border-[#E5E7EC] w-[34%]" />
            <th className="px-3 py-3 text-center font-bold text-white border-b border-[#E5E7EC] w-[18%]" style={{ background: COLOR }}>
              Helpnest
            </th>
            <th className="px-3 py-3 text-center text-[#374151] font-semibold bg-[#F8F9FB] border-b border-[#E5E7EC] w-[16%]">Crisp</th>
            <th className="px-3 py-3 text-center text-[#374151] font-semibold bg-[#F8F9FB] border-b border-[#E5E7EC] w-[16%]">Intercom</th>
            <th className="px-3 py-3 text-center text-[#374151] font-semibold bg-[#F8F9FB] border-b border-[#E5E7EC] w-[16%]">Tidio</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FB]'}>
              <td className="px-4 py-3 text-[#374151] font-medium border-b border-[#F0F1F3]">{row.label}</td>
              <td className="px-3 py-3 text-center border-b border-[#F0F1F3]" style={{ background: `${COLOR}08` }}>
                {typeof row.helpnest === 'boolean'
                  ? (row.helpnest ? <Yes /> : <No />)
                  : <span className="font-bold text-[11px]" style={{ color: COLOR }}>{row.helpnest}</span>}
              </td>
              {(['crisp', 'intercom', 'tidio'] as const).map((col) => (
                <td key={col} className="px-3 py-3 text-center text-[#6b7280] border-b border-[#F0F1F3]">
                  {typeof row[col] === 'boolean'
                    ? (row[col] ? <Yes /> : <No />)
                    : <span className="text-[11px]">{row[col] as string}</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const ITEMS = [
  {
    title: 'Self-Hosted AI Chatbot Script vs SaaS Subscriptions',
    desc: 'While platforms like Intercom, Crisp, and Tidio charge $50–1,000 per month, Helpnest is a self-hosted script — you pay once and own it forever, eliminating recurring fees.',
    points: [
      'One-time payment instead of recurring monthly fees',
      'Complete data ownership and privacy control',
      'Full source code access for unlimited customisation',
      'Resell and white-label with unlimited client agents',
      'White-label ready for agencies and resellers',
    ],
    rows: PRICING_ROWS,
    imgBg: '#F2F0FF',
  },
  {
    title: 'Everything Modern Support Scripts Should Have',
    desc: 'When evaluating customer support scripts and help desk solutions, you need features that scale with your business. Helpnest delivers everything expected from enterprise software.',
    points: [
      'Semantic Search: AI understands meaning, not just keywords',
      'Knowledge Base: Train chatbots with your docs and FAQs',
      'Multi-Team: Real chat with live agent hand-off and escalation',
      'Live Visitor Tracking: Geo-map active users in real time',
      'Analytics: Track performance and customer satisfaction',
    ],
    rows: FEATURES_ROWS,
    imgBg: '#E0EDFC',
  },
];

export default function WhyHelpNest() {
  return (
    <section className="pb-16 lg:pb-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-16 max-w-[620px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Why Helpnest
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            The Smarter Way to Build AI Customer Support
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Stop paying month-to-month. Own your platform, control your data, and keep 100% of the revenue.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-10 rounded-2xl p-4 sm:p-6 lg:p-[30px]`}
              style={item.imgBg ? { background: item.imgBg } : {}}
            >
              <div className="flex-1 flex flex-col gap-5">
                <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0F1112] leading-tight">{item.title}</h3>
                <p className="text-[15px] text-[#6b7280] leading-7">{item.desc}</p>
                <ul className="flex flex-col gap-2.5">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14px] text-[#374151]">
                      <Check />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <CompareTable rows={item.rows} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
