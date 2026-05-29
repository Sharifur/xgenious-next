import { COLOR } from './constants';

const plugins = [
  {
    title: 'Multi-Language',
    desc: 'Full translation system with RTL support. Launch in any language without touching code.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 6.37C9 10.79 6.76 13 4 13"/><path d="M4 6.37H11"/><path d="M5 9c0 2.14 2.25 3.91 6 4"/>
        <path d="M12 20l4-9 4 9"/><path d="M19.1 18H12.9"/>
      </svg>
    ),
  },
  {
    title: 'Built-in Variants',
    desc: 'Size, colour, material — unlimited attribute combinations per product, with individual stock control.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><circle cx="8" cy="16" r="3"/><circle cx="16" cy="16" r="3"/>
      </svg>
    ),
  },
  {
    title: 'Inventory Management',
    desc: 'Real-time stock tracking, low-stock alerts, and warehouse management across all tenant stores.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: 'Campaign Manager',
    desc: 'Flash sales, limited-time offers, and promotional banners — scheduled and automated.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    title: 'Digital Products',
    desc: 'Sell downloadable files, software licences, and digital goods with secure delivery links.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
  },
  {
    title: 'Affiliate System',
    desc: 'Referral links, commission tracking, and automated payout management for your affiliate network.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
      </svg>
    ),
  },
  {
    title: 'Discount Rules',
    desc: 'Coupon codes, bulk discounts, cart minimums, and product-specific rules — fully customisable.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
  },
  {
    title: 'Google Merchant Center',
    desc: 'Auto-sync your product catalogue to Google Shopping for maximum organic and paid visibility.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    title: 'Server-Side Tracking',
    desc: 'Accurate purchase events sent server-side to Meta CAPI and Google — bypasses ad blockers.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: 'Loyalty Points',
    desc: 'Reward customers with points on every purchase. Redeem at checkout to drive repeat orders.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

export default function PremiumPlugins() {
  return (
    <section className="py-14 sm:py-20" style={{ background: '#0d2b14' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[620px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest mb-4"
            style={{ background: `${COLOR}20`, color: COLOR }}
          >
            Bundle &amp; Complete Pack Only
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-white mb-3 leading-tight">
            10+ Premium Plugins,{' '}
            <span style={{ color: COLOR }}>Included Free</span>
          </h2>
          <p className="text-[#8aaa98] text-[15px] leading-6">
            Every premium add-on below is bundled at no extra cost in the Bundle Pack and Complete Package — saving you hundreds of dollars.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {plugins.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-5 flex flex-col gap-3 border transition-all duration-300 hover:-translate-y-1 hover:border-[#92E72140]"
              style={{ background: '#0F1F13', borderColor: '#1a3d20' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${COLOR}20`, color: COLOR }}
              >
                {p.icon}
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-white mb-1 leading-snug">{p.title}</h3>
                <p className="text-[12px] leading-5" style={{ color: '#6b8a7a' }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] mt-8" style={{ color: '#4b6b5a' }}>
          All plugins included in Bundle Pack ($149) and Complete Package ($279) · Regular License gets core platform only
        </p>

      </div>
    </section>
  );
}
