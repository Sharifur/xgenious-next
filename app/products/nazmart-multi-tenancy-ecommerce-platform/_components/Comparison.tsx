import Link from 'next/link';


const rows = [
  { feature: 'Platform ownership',         nazmart: 'You own it 100%',  shopify: 'Rented (SaaS)',   woo: 'Partial',        custom: 'You own it' },
  { feature: 'Monthly SaaS fees',          nazmart: 'None',             shopify: '$39–$399/mo',      woo: 'Hosting only',   custom: '$5K–$20K/yr' },
  { feature: 'One-time purchase price',    nazmart: 'From $69',         shopify: '✗',                woo: 'Free plugin',    custom: '$50K+' },
  { feature: 'Multi-tenancy built-in',     nazmart: '✓',                shopify: '✗',                woo: '✗',              custom: 'Custom build' },
  { feature: 'Vendor subscription billing',nazmart: '✓',                shopify: '✗',                woo: 'Plugin ($)',      custom: 'Custom build' },
  { feature: 'Custom domain per store',    nazmart: '✓ Included',       shopify: '✓ Extra cost',     woo: '✗',              custom: 'Custom build' },
  { feature: 'Flutter mobile app',         nazmart: '✓ Bundle+',        shopify: 'App store only',   woo: '✗',              custom: '6+ months' },
  { feature: '19+ payment gateways',       nazmart: '✓',                shopify: 'Limited + fees',   woo: 'Plugin ($)',      custom: 'Custom build' },
  { feature: 'Revenue model',              nazmart: 'You keep 100%',    shopify: 'Shopify takes %',  woo: 'You keep 100%',  custom: 'You keep 100%' },
  { feature: 'Time to launch',             nazmart: '48–72 hours',      shopify: 'Hours (1 store)',  woo: 'Days (1 store)', custom: '6–12 months' },
];

const highlight = (val: string) =>
  val === '✓' || val.startsWith('✓') || val === 'You own it 100%' || val === 'None' || val === 'From $69' || val === 'You keep 100%' || val === '48–72 hours';

export default function Comparison() {
  return (
    <section className="py-14 sm:py-20" style={{ background: '#F8F9FB' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-3">
            Nazmart vs Shopify vs WooCommerce
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Nazmart is the only option where you own the platform, keep 100% of vendor revenue, and launch in days — not months.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E5E7EC]">
          <table className="w-full min-w-[640px] text-[14px]">
            <thead>
              <tr style={{ background: '#0d2b14' }}>
                <th className="text-left px-5 py-4 text-[13px] font-semibold text-white w-[220px]">Feature</th>
                <th className="px-5 py-4 text-[13px] font-bold text-[#92E721]">Nazmart</th>
                <th className="px-5 py-4 text-[13px] font-semibold text-white">Shopify</th>
                <th className="px-5 py-4 text-[13px] font-semibold text-white">WooCommerce</th>
                <th className="px-5 py-4 text-[13px] font-semibold text-white">Custom Build</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : '#F8F9FB' }}>
                  <td className="px-5 py-3.5 font-medium text-[#374151]">{row.feature}</td>
                  <td className="px-5 py-3.5 text-center font-semibold" style={{ color: highlight(row.nazmart) ? '#2d6a00' : '#374151' }}>
                    {row.nazmart}
                  </td>
                  <td className="px-5 py-3.5 text-center text-[#6b7280]">{row.shopify}</td>
                  <td className="px-5 py-3.5 text-center text-[#6b7280]">{row.woo}</td>
                  <td className="px-5 py-3.5 text-center text-[#6b7280]">{row.custom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all hover:opacity-90"
            style={{ background: '#ec7161' }}
          >
            Get Nazmart — from $69 one-time
          </Link>
          <p className="text-[12px] text-[#9ca3af] mt-3">One-time purchase · No monthly fees · Full source code · 6 months support</p>
        </div>

      </div>
    </section>
  );
}
