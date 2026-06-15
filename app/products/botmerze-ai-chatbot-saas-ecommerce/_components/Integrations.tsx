import { COLOR, LIGHT_COLOR } from './constants';

const PLATFORMS = [
  {
    name: 'WooCommerce',
    desc: 'Sync products, orders, inventory & customers in real time',
    color: '#96588A',
    icon: (
      <svg viewBox="0 0 100 100" width="32" height="32" fill="none">
        <rect width="100" height="100" rx="16" fill="#96588A"/>
        <text x="50" y="66" textAnchor="middle" fontSize="48" fontWeight="bold" fill="white">W</text>
      </svg>
    ),
  },
  {
    name: 'Shopify',
    desc: 'Live product catalog, order tracking & customer lookup',
    color: '#96BF48',
    icon: (
      <svg viewBox="0 0 100 100" width="32" height="32" fill="none">
        <rect width="100" height="100" rx="16" fill="#96BF48"/>
        <text x="50" y="66" textAnchor="middle" fontSize="48" fontWeight="bold" fill="white">S</text>
      </svg>
    ),
  },
  {
    name: 'Magento',
    desc: 'Connect via REST API for product and order automation',
    color: '#F26322',
    icon: (
      <svg viewBox="0 0 100 100" width="32" height="32" fill="none">
        <rect width="100" height="100" rx="16" fill="#F26322"/>
        <text x="50" y="66" textAnchor="middle" fontSize="48" fontWeight="bold" fill="white">M</text>
      </svg>
    ),
  },
  {
    name: 'BigCommerce',
    desc: 'Full storefront sync including reviews and categories',
    color: '#34313F',
    icon: (
      <svg viewBox="0 0 100 100" width="32" height="32" fill="none">
        <rect width="100" height="100" rx="16" fill="#34313F"/>
        <text x="50" y="66" textAnchor="middle" fontSize="48" fontWeight="bold" fill="white">B</text>
      </svg>
    ),
  },
  {
    name: 'Custom API',
    desc: 'Connect any store or platform via REST API endpoints',
    color: '#4F46E5',
    icon: (
      <svg viewBox="0 0 100 100" width="32" height="32" fill="none">
        <rect width="100" height="100" rx="16" fill="#4F46E5"/>
        <text x="50" y="66" textAnchor="middle" fontSize="48" fontWeight="bold" fill="white">{'</>'}</text>
      </svg>
    ),
  },
  {
    name: 'OpenAI GPT',
    desc: 'GPT-4o / GPT-4 / GPT-3.5 — your API key, your cost',
    color: '#10A37F',
    icon: (
      <svg viewBox="0 0 100 100" width="32" height="32" fill="none">
        <rect width="100" height="100" rx="16" fill="#10A37F"/>
        <text x="50" y="66" textAnchor="middle" fontSize="48" fontWeight="bold" fill="white">AI</text>
      </svg>
    ),
  },
];

export default function Integrations() {
  return (
    <section className="py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-14 max-w-[560px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Platform Integrations
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Works with Your Existing Store
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Connect Botmerze to WooCommerce, Shopify, Magento, or any custom store via API. Real-time sync — the chatbot always has current product and order data.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLATFORMS.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-[#E5E7EC] p-5 flex items-start gap-4 hover:shadow-md transition-shadow bg-white"
            >
              <div className="flex-shrink-0">{p.icon}</div>
              <div>
                <h3 className="text-[14px] font-bold text-[#0F1112] mb-1">{p.name}</h3>
                <p className="text-[12px] text-[#6b7280] leading-5">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
