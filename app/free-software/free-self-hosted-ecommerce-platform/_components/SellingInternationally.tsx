import { COLOR, LIGHT_COLOR, EXCHANGE_RATE_SOURCES } from './constants';

const ITEMS = [
  {
    title: 'Country-aware checkout',
    body: (
      <>
        The address form adapts per country: a state dropdown where one exists, free text where it doesn&apos;t, and the right postal label, ZIP, Postcode, or PIN. The UAE, Hong Kong, Qatar, and Panama have no postal system, so the checkout shows no postal field at all for those countries.
      </>
    ),
  },
  {
    title: 'Multi-currency that survives an audit',
    body: (
      <>
        Every order stores money twice: in the base currency, which every report sums, and in the currency the customer actually saw, with the exchange rate frozen at order time. Old orders stay reconstructible after rates move. Rates refresh hourly from {EXCHANGE_RATE_SOURCES.join(' or ')}, reject an implausible move, and are pinned per browsing session so a refresh can&apos;t change a total mid-visit.
      </>
    ),
  },
  {
    title: 'Destination-based tax',
    body: (
      <>
        Tax matches on country, then state, then postal pattern, and the most specific wins. Rates stack, which is how US state-plus-county and Canadian GST-plus-PST actually work. Products carry a tax class, because EU rates differ for food, books, and children&apos;s clothing. Pricing can be inclusive or exclusive, and the breakdown is frozen onto the order, so the invoice and the amount charged can&apos;t disagree.
      </>
    ),
  },
  {
    title: 'Configuration templates',
    body: (
      <>
        One click applies EU VAT across 27 member states, UK VAT, US sales tax across 46 states, or Canada GST/HST/PST, plus shipping presets for Europe, North America, the Gulf, and a rest-of-world fallback. Re-applying a template skips what already exists, so rates you&apos;ve already tuned survive.
      </>
    ),
  },
];

export default function SellingInternationally() {
  return (
    <section className="py-16 sm:py-20 bg-[#f9fafb]">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            Selling Internationally
          </span>
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112] max-w-[700px] mx-auto">
            What Most Free Carts Leave to the Merchant
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[1000px] mx-auto">
          {ITEMS.map((item, i) => (
            <div key={item.title} className="bg-white rounded-2xl border border-[#E5E7EC] p-6">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-[13px] font-bold"
                  style={{ background: LIGHT_COLOR, color: COLOR }}
                >
                  {i + 1}
                </span>
                <h3 className="text-[15px] font-semibold text-[#0F1112]">{item.title}</h3>
              </div>
              <p className="text-[13.5px] text-[#484848] leading-6">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
