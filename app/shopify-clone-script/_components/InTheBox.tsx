import { BUNDLE_PRICE } from '@/app/products/nazmart-multi-tenancy-ecommerce-platform/_components/constants';
import { BUNDLE_FEATURES, MERCHANT_FEATURES, OWNER_FEATURES } from './copy';

function Column({ title, items }: { title: string; items: { title: string; desc: string }[] }) {
  return (
    <div>
      <h3 className="text-[18px] font-bold text-[#0F1112] mb-4">{title}</h3>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.title} className="rounded-2xl border border-[#E5E7EC] bg-[#F8FFEE] p-4">
            <p className="text-[15px] font-semibold text-[#0F1112]">{item.title}</p>
            <p className="text-[14px] leading-6 text-[#484848] mt-1">{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function InTheBox() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-8">
          What you get in the box
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Column title="For you, the platform owner" items={OWNER_FEATURES} />
          <Column title="For your merchants" items={MERCHANT_FEATURES} />
        </div>
        <div className="mt-10">
          <h3 className="text-[18px] font-bold text-[#0F1112] mb-4">
            In the Everything Bundle (${BUNDLE_PRICE})
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {BUNDLE_FEATURES.map((item) => (
              <li key={item.title} className="rounded-2xl border border-[#E5E7EC] p-4">
                <p className="text-[15px] font-semibold text-[#0F1112]">{item.title}</p>
                <p className="text-[14px] leading-6 text-[#484848] mt-1">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
