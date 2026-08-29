import { COLOR, LIGHT_COLOR } from './constants';

const ROWS = [
  { feature: 'Monthly cost', geniusCommerz: 'Free, your server only', shopify: '$29–$299+/mo', woocommerce: 'Free (WordPress + hosting)' },
  { feature: 'Commission on sales', geniusCommerz: '0%', shopify: '0–2% unless using Shopify Payments', woocommerce: '0%' },
  { feature: 'Regional payment gateways', geniusCommerz: '39, built in', shopify: 'Varies by region, via app store', woocommerce: 'Usually a separate paid extension per gateway' },
  { feature: 'Shipping carriers', geniusCommerz: '19 + 3 BD couriers, built in', shopify: 'Built-in + paid apps', woocommerce: 'Usually a separate paid extension per carrier' },
  { feature: 'Tax templates', geniusCommerz: 'EU VAT, UK VAT, US, Canada, built in', shopify: 'Built-in (Shopify Tax)', woocommerce: 'Usually a separate paid extension' },
  { feature: 'Hosting', geniusCommerz: 'Your infrastructure', shopify: 'Shopify-managed', woocommerce: 'Your infrastructure' },
  { feature: 'Data ownership', geniusCommerz: '100% yours', shopify: 'Vendor-held', woocommerce: '100% yours' },
  { feature: 'Vendor support', geniusCommerz: 'Community + docs', shopify: 'Managed service with vendor support', woocommerce: 'Community + plugin vendors' },
  { feature: 'Ecosystem size', geniusCommerz: 'Growing', shopify: 'Large app store', woocommerce: 'Largest plugin ecosystem' },
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
            Genius Commerz vs Shopify vs WooCommerce
          </h2>
          <p className="text-[#484848] text-[15px] mt-3 max-w-[640px] mx-auto leading-7">
            Shopify charges monthly and takes a cut of sales unless you use Shopify Payments. WooCommerce is free, but each regional gateway, courier, and tax setup is typically a separate paid extension. Genius Commerz ships those in the box on one integration layer, at no cost and no commission. WooCommerce still has the larger plugin ecosystem, and Shopify remains the only one of the three with a managed, vendor-supported service.
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto overflow-x-auto">
          <table className="w-full text-[13px] sm:text-[14px] border-collapse">
            <thead>
              <tr>
                <th className="text-left px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] w-[200px]">Feature</th>
                <th className="px-4 py-3 border-b border-[#E5E7EC] rounded-t-xl" style={{ background: LIGHT_COLOR, color: COLOR }}>
                  <span className="font-bold">Genius Commerz</span>
                  <span className="block text-[11px] font-normal mt-0.5">Free · Open Source</span>
                </th>
                <th className="px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] text-center">Shopify</th>
                <th className="px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] text-center">WooCommerce</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-[#f9fafb]' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-[#0F1112]">{row.feature}</td>
                  <td className="px-4 py-3 text-center font-semibold" style={{ color: COLOR, background: `${LIGHT_COLOR}60` }}>
                    <Tick />{row.geniusCommerz}
                  </td>
                  <td className="px-4 py-3 text-center text-[#6b7280]">{row.shopify}</td>
                  <td className="px-4 py-3 text-center text-[#6b7280]">{row.woocommerce}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
