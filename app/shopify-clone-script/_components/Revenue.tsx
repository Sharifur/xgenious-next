import Link from 'next/link';

export default function Revenue() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[800px]">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-5">
          How much can a Shopify-style platform earn?
        </h2>
        <p className="text-[16px] leading-7 text-[#484848]">
          Revenue comes from plans, setup fees and add-ons. With illustrative numbers, 150 stores on a $19 plan bring $2,850 in monthly recurring revenue before churn and hosting. Model your own numbers with the free calculator.
        </p>
        <p className="text-[13px] text-[#6b7280] mt-2">Example only, not a forecast.</p>
        <Link
          href="/free-tools/ecommerce-saas-revenue-calculator"
          className="inline-flex mt-6 items-center gap-2 text-white font-semibold text-[15px] rounded-full px-7 py-3.5"
          style={{ background: '#ec7161' }}
        >
          Open the ecommerce SaaS revenue calculator
        </Link>
      </div>
    </section>
  );
}
