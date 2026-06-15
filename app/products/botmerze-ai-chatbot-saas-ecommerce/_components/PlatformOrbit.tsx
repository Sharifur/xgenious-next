import Image from 'next/image';
import { COLOR, LIGHT_COLOR } from './constants';

const PLATFORMS = [
  { name: 'WooCommerce', desc: 'WordPress plugin',  logo: '/products/logos/woocommerce.svg', bg: '#96588A' },
  { name: 'Shopify',     desc: 'Native app',        logo: '/products/logos/shopify.svg',     bg: '#7AB55C' },
  { name: 'WordPress',   desc: 'Script embed',      logo: '/products/logos/wordpress.svg',   bg: '#21759B' },
  { name: 'Magento',     desc: 'Extension',         logo: '/products/logos/magento.svg',     bg: '#EE672F' },
  { name: 'BigCommerce', desc: 'App integration',   logo: '/products/logos/bigcommerce.svg', bg: '#1C4E9A' },
  { name: 'Wix',         desc: 'Script embed',      logo: '/products/logos/wix.svg',         bg: '#0C6EFC' },
];

const STATS = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    text: 'Any custom store via REST API',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    text: 'Real-time product & order sync',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    text: '5-minute setup, one script tag',
  },
];

export default function PlatformOrbit() {
  return (
    <section className="py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-14 max-w-[560px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Seamless Integrations
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Connects With Any Platform
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Paste one script tag and Botmerze is live — on WooCommerce, Shopify, WordPress, Wix, or any custom store. Real-time data sync included.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {PLATFORMS.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-[#E5E7EC] bg-white p-5 flex flex-col items-center gap-4 text-center hover:border-[#D0D5DD] hover:shadow-sm transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${p.bg}15` }}
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div>
                <div className="text-[13px] font-bold text-[#0F1112] leading-5">{p.name}</div>
                <div className="text-[11px] text-[#9CA3AF] mt-0.5">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[#E5E7EC] bg-[#F9FAFB] px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {STATS.map((s) => (
            <span key={s.text} className="flex items-center gap-2 text-[13px] text-[#6b7280]">
              {s.icon}
              {s.text}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
