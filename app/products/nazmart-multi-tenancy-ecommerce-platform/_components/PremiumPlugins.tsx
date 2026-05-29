import { COLOR } from './constants';

const plugins = [
  {
    title: 'AI Integration',
    desc: 'GPT-powered product descriptions, smart search, and AI-assisted customer support built into every store.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2z"/><path d="M12 16a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2v-2a2 2 0 012-2z"/><path d="M4 10a2 2 0 012-2h2a2 2 0 012 2 2 2 0 01-2 2H6a2 2 0 01-2-2z"/><path d="M14 10a2 2 0 012-2h2a2 2 0 012 2 2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
  },
  {
    title: 'Abandoned Cart Recovery',
    desc: 'Auto-email shoppers who left without buying. Recover lost revenue with timed follow-up sequences.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
        <path d="M17 9l-3 3-2-2"/>
      </svg>
    ),
  },
  {
    title: 'Cart Discount',
    desc: 'Coupon codes, percentage and fixed discounts, cart minimums, and product-specific promo rules.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
  },
  {
    title: 'FOMO Notification',
    desc: 'Live purchase popups, low-stock alerts, and visitor counters that drive urgency and increase conversions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
      </svg>
    ),
  },
  {
    title: 'GDPR Data Export',
    desc: "Compliant data export on request. Customers download their personal data in one click — GDPR-ready.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Multi Currency',
    desc: 'Vendors sell in local currencies. Auto exchange rates, currency switcher, and geo-detection built in.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>
      </svg>
    ),
  },
  {
    title: 'Point of Sales',
    desc: 'Physical store POS with barcode scanning, receipt printing, and walk-in order management.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    title: 'Product Badge',
    desc: 'Highlight new arrivals, bestsellers, and sale items with customisable badges on product cards.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    title: 'Site Analytics',
    desc: 'Per-store traffic, sales funnels, revenue charts, and product performance — no third-party tools needed.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    title: 'Shipping Plugin',
    desc: 'Zone-based rates, weight rules, free shipping thresholds, and real-time carrier rate integrations.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    title: 'Affiliate Program',
    desc: 'Referral links, tiered commission tracking, and automated affiliate payout management.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
      </svg>
    ),
  },
  {
    title: 'Google Merchant Feed Sync',
    desc: 'Auto-sync product catalogue to Google Shopping. Increase organic and paid visibility for every vendor.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
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
  {
    title: 'SMS Gateway',
    desc: 'Order confirmations, OTP verification, and marketing SMS sent through Twilio, Nexmo, and more.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    title: 'WooCommerce Import',
    desc: 'One-click migration from WooCommerce. Products, categories, and customers imported automatically.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
    ),
  },
  {
    title: 'Cloud Storage',
    desc: 'Store product images and files on AWS S3, DigitalOcean Spaces, or Wasabi — offload your server.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
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
            16 Premium Plugins,{' '}
            <span style={{ color: COLOR }}>Included Free</span>
          </h2>
          <p className="text-[#8aaa98] text-[15px] leading-6">
            Every premium add-on below is bundled at no extra cost in the Bundle Pack and Complete Package — saving you hundreds of dollars.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
