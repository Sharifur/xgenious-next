import { COLOR } from './constants';

const PROFILES = [
  {
    title: 'SaaS Founders',
    desc: 'Launch your own website-builder SaaS business without building the platform from scratch. MultiSaas ships everything — billing, themes, modules, gateways, and tenant management — so you go live in days, not months.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Agencies & Studios',
    desc: 'Stop rebuilding infrastructure for every client engagement. Spin up tenant sites on a single MultiSaas installation and manage all client websites from one admin panel.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 22V11a2 2 0 012-2h16a2 2 0 012 2v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 9V5a2 2 0 012-2h8a2 2 0 012 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="13" width="6" height="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Niche SaaS Operators',
    desc: 'Target a specific vertical — hotel booking, restaurant ordering, job boards, events. Use the relevant module as your core product and build a focused, profitable SaaS around it.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

export default function WhoIsItFor() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#F8F9FB' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-4 leading-tight">
            Built for Operators Who Sell Websites
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            MultiSaas works whether you serve thousands of self-serve tenants or a focused list of agency clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
          {PROFILES.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl border border-[#E5E7EC] p-7 hover:shadow-lg transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${COLOR}15`, color: COLOR }}
              >
                {p.icon}
              </div>
              <h3 className="text-[18px] font-semibold text-[#0F1112] mb-3">{p.title}</h3>
              <p className="text-[14px] text-[#6b7280] leading-7">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
