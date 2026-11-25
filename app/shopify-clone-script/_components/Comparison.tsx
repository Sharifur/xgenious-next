export default function Comparison() {
  const rows = [
    ['Who owns the platform', 'Shopify', 'You'],
    ['Your cost', '$29–$299 per store per month (annual billing), plus 2%–0.6% fee with outside gateways', 'One-time $99 Everything Bundle (the licence that lets you charge tenants), plus your server'],
    ['Revenue from other stores', 'None', 'Every store’s subscription'],
    ['Payment gateways', 'Shopify Payments where available, others with a fee', '20+ gateways, including regional ones'],
    ['Code and data', 'Hosted by Shopify', 'Self-hosted, your server'],
    ['Branding', 'Shopify’s', 'Yours'],
  ];

  return (
    <section className="py-16 sm:py-20" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-6 max-w-[720px]">
          Shopify vs your own platform built on Nazmart
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-[#E5E7EC] bg-white">
          <table className="w-full text-[14px] min-w-[640px]">
            <caption className="sr-only">Running stores on Shopify vs running your own platform</caption>
            <thead>
              <tr className="border-b border-[#E5E7EC] text-left">
                <th className="px-5 py-4 font-semibold text-[#6b7280] w-[22%]" />
                <th className="px-5 py-4 font-semibold text-[#0F1112]">Shopify (you are a merchant)</th>
                <th className="px-5 py-4 font-semibold text-[#0F1112]">Nazmart (you are the platform)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0]} className="border-t border-[#F0F1F3]">
                  <th scope="row" className="px-5 py-4 text-left font-semibold text-[#0F1112] align-top">{row[0]}</th>
                  <td className="px-5 py-4 text-[#484848] align-top">{row[1]}</td>
                  <td className="px-5 py-4 text-[#484848] align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[13px] text-[#6b7280] mt-3">
          Shopify prices from{' '}
          <a href="https://www.shopify.com/pricing" target="_blank" rel="noopener noreferrer" className="underline">
            shopify.com/pricing
          </a>
          , 25 November 2026.
        </p>
      </div>
    </section>
  );
}
