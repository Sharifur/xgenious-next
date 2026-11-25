import Link from 'next/link';
import {
  BUNDLE_PRICE,
  COMPLETE_PRICE,
  REGULAR_PRICE,
} from '@/app/products/nazmart-multi-tenancy-ecommerce-platform/_components/constants';
import BlackFridayNote from './BlackFridayNote';
import { PRODUCT_PRICING } from './copy';

const TIERS = [
  {
    name: 'Regular',
    price: REGULAR_PRICE,
    badge: null as string | null,
    desc: 'Core web panel.',
  },
  {
    name: 'Everything Bundle',
    price: BUNDLE_PRICE,
    badge: 'Best value',
    desc: 'Web, premium plugins, Flutter app, POS and domain reseller.',
  },
  {
    name: 'Exclusive',
    price: COMPLETE_PRICE,
    badge: null,
    desc: 'Modify the source, remove branding and get priority support.',
  },
];

export default function Pricing() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="pricing">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-6">Pricing</h2>
        <BlackFridayNote />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TIERS.map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-[#E5E7EC] p-6 flex flex-col gap-3 bg-[#F8FFEE]">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[16px] font-bold text-[#0F1112]">{tier.name}</h3>
                {tier.badge && (
                  <span className="text-[12px] font-semibold rounded-full px-3 py-1 bg-white text-[#3a7d00]">{tier.badge}</span>
                )}
              </div>
              <p className="text-[40px] font-bold text-[#0F1112] leading-none">${tier.price}</p>
              <p className="text-[14px] leading-6 text-[#484848] flex-1">{tier.desc}</p>
              <Link href={PRODUCT_PRICING} className="text-[14px] font-semibold underline underline-offset-2 text-[#0F1112]">
                See this pack
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
