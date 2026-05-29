const personas = [
  {
    title: 'SaaS Entrepreneurs',
    subtitle: 'Building the next Shopify',
    bullets: [
      'Launch your own eCommerce SaaS and charge vendors monthly',
      'Compete with Shopify in your niche or region',
      'Own 100% of subscription revenue — no platform cut',
      'Scale from 10 to 10,000 stores on one installation',
    ],
    bg: '#F0FDE4',
    border: '#92E72140',
    accent: '#2d6a00',
    iconBg: '#92E721',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d2b14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    title: 'Digital Agencies',
    subtitle: 'White-label for clients',
    bullets: [
      'Offer clients a branded marketplace as a managed service',
      'Resell subscriptions with your own pricing tiers',
      'Customise themes and branding without touching the core',
      'One Nazmart install supports unlimited client projects',
    ],
    bg: '#EAF6FF',
    border: '#3b82f640',
    accent: '#1e40af',
    iconBg: '#3b82f6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    title: 'Regional Marketplace Builders',
    subtitle: 'Local Amazon & Etsy alternatives',
    bullets: [
      'Launch a country-specific multi-vendor marketplace',
      'Support local payment gateways and RTL languages',
      'Vendors join and sell immediately — no coding needed',
      'Full admin control over commissions, disputes, payouts',
    ],
    bg: '#FDF3F0',
    border: '#F26B4E40',
    accent: '#c2410c',
    iconBg: '#F26B4E',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
];

export default function WhoIsItFor() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[560px] mx-auto">
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-3">
            Who is Nazmart For?
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Three types of builders use Nazmart to launch revenue-generating marketplace platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {personas.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-7 flex flex-col gap-5 border"
              style={{ background: p.bg, borderColor: p.border }}
            >
              <div>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: p.iconBg }}>
                  {p.icon}
                </div>
                <h3 className="text-[20px] font-bold text-[#0F1112] mb-1">{p.title}</h3>
                <p className="text-[13px] font-medium" style={{ color: p.accent }}>{p.subtitle}</p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[13px] text-[#374151]">
                    <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill={p.accent} fillOpacity="0.15" />
                      <path d="M6 10l3 3 5-5" stroke={p.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
