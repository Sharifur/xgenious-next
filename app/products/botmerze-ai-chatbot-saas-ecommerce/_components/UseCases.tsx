import { COLOR, LIGHT_COLOR, CODECANYON_URL } from './constants';
import ScrollLink from './ScrollLink';

const C = COLOR;
const L = LIGHT_COLOR;

const PERSONAS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
    title: 'E-commerce Store Owner',
    desc: 'Deploy an AI chatbot on your WooCommerce or Shopify store. Automate product discovery, order tracking, and returns — reducing support tickets by 80%.',
    tags: ['WooCommerce', 'Shopify', 'Order Tracking'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Agency / Freelancer',
    desc: 'Host multiple client stores under one installation. Each client gets an isolated chatbot environment — bill them monthly and manage from one dashboard.',
    tags: ['Multi-client', 'One install', 'Recurring revenue'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'SaaS Entrepreneur',
    desc: 'Sell Botmerze as your own branded chatbot SaaS. Set subscription plans, collect revenue via 18+ payment gateways, and grow without per-seat AI fees.',
    tags: ['White-label', 'Subscriptions', '18+ gateways'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Developer',
    desc: 'Full Laravel 12 source code with documented REST API, webhook hooks, and deep customization points. Build additional features on a production-grade AI stack.',
    tags: ['Full source code', 'Laravel 12', 'REST API'],
  },
];

const BYOK_POINTS = [
  'Each of your SaaS clients connects their own OpenAI API key',
  'You never absorb AI costs — clients pay OpenAI directly',
  'No token quotas to manage, no usage billing headaches',
  'Scales to unlimited clients without increasing your infrastructure cost',
];

const SAAS_STEPS = [
  { n: '1', label: 'Install Botmerze on your VPS' },
  { n: '2', label: 'Set your subscription plans & pricing' },
  { n: '3', label: 'Clients sign up, connect their store & API key' },
  { n: '4', label: 'Collect recurring revenue via 18+ gateways' },
];

export default function UseCases() {
  return (
    <section className="pb-20 lg:pb-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="text-center mb-14 max-w-[600px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: L, color: C }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: C }} />
            Built for Every Use Case
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Who Is Botmerze For?
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            One script — four ways to profit. Deploy it for yourself, offer it as a service, or sell it as a full SaaS product.
          </p>
        </div>

        {/* Persona grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {PERSONAS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-6 flex flex-col gap-4 border border-[#E5E7EC] bg-white hover:border-[color:var(--c)] transition-colors"
              style={{ '--c': `${C}50` } as React.CSSProperties}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: L }}
              >
                {p.icon}
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-[#0F1112] mb-2">{p.title}</h3>
                <p className="text-[12px] text-[#6b7280] leading-5">{p.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: `${C}10`, color: C }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* BYOK + SaaS model — 2 col */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* BYOK */}
          <div className="rounded-2xl p-8 border border-[#E5E7EC] bg-white">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold mb-5"
              style={{ background: `${C}12`, color: C }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
              </svg>
              Bring Your Own Key (BYOK)
            </div>
            <h3 className="text-[20px] font-bold text-[#0F1112] mb-3">
              Clients Use Their Own OpenAI Key
            </h3>
            <p className="text-[13px] text-[#6b7280] leading-6 mb-6">
              Botmerze never requires a central AI subscription. Each client connects their own OpenAI API key — you run the platform, they pay the AI provider directly.
            </p>
            <ul className="flex flex-col gap-3">
              {BYOK_POINTS.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-[13px] text-[#374151]">
                  <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 20 20" fill={C}>
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* SaaS model */}
          <div className="rounded-2xl p-8 border border-[#E5E7EC] text-white" style={{ background: C }}>
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold mb-5"
              style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-4 0v2M12 12v4M10 14h4"/>
              </svg>
              SaaS Business Model
            </div>
            <h3 className="text-[20px] font-bold mb-3">
              Launch Your Own Chatbot SaaS
            </h3>
            <p className="text-[13px] leading-6 mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Buy once, earn forever. Install Botmerze, set your subscription plans, and start collecting recurring revenue from e-commerce clients who need AI chatbots.
            </p>
            <div className="flex flex-col gap-4 mb-8">
              {SAAS_STEPS.map((s) => (
                <div key={s.n} className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}
                  >
                    {s.n}
                  </span>
                  <span className="text-[13px] font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>{s.label}</span>
                </div>
              ))}
            </div>
            <ScrollLink
              href="#pricing"
              className="inline-flex items-center gap-2 font-bold text-[13px] rounded-full px-6 py-3 transition-all hover:opacity-90"
              style={{ background: 'white', color: C }}
            >
              Get Botmerze — Start Your SaaS
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </ScrollLink>
          </div>

        </div>
      </div>
    </section>
  );
}
