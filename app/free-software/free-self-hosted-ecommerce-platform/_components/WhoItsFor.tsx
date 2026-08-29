import { COLOR, LIGHT_COLOR } from './constants';

const AUDIENCES = [
  { title: 'Cross-border merchants', desc: 'Selling into multiple countries and currencies who don\'t want a percentage of revenue taken by the platform.' },
  { title: 'Agencies & dev shops', desc: 'Evaluating whether to build client storefronts on it instead of stacking paid WooCommerce extensions.' },
  { title: 'Developers extending a store', desc: 'Who want to add a new payment or shipping provider without touching the checkout flow.' },
  { title: 'Regional-market sellers', desc: 'Needing local payment methods (bKash, Razorpay, Paystack, PayTabs) that global carts treat as an afterthought.' },
  { title: 'Self-hosters', desc: 'Who already run their own PHP/MySQL server and want to own the data, not rent a subscription.' },
  { title: 'Teams leaving Shopify or WooCommerce', desc: 'Who want the integrations they\'re paying extensions for, shipped in one platform for free.' },
];

export default function WhoItsFor() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            Who It&apos;s For
          </span>
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
            Built for Merchants and the Developers Who Support Them
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
          {AUDIENCES.map((a) => (
            <div key={a.title} className="rounded-2xl border border-[#E5E7EC] p-5">
              <h3 className="text-[14px] font-semibold text-[#0F1112] mb-2">{a.title}</h3>
              <p className="text-[13px] text-[#484848] leading-6">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
