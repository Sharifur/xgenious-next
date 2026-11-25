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
    badges: [] as string[],
    desc: 'Core web panel only. Does not let you charge tenants.',
  },
  {
    name: 'Everything Bundle',
    price: BUNDLE_PRICE,
    badges: ['Best value', 'Commercial use'],
    desc: 'Lets you charge tenants. Web panel, 17 premium plugins, Flutter app, POS and domain reseller.',
  },
  {
    name: 'Exclusive',
    price: COMPLETE_PRICE,
    badges: ['Commercial use'],
    desc: 'Lets you charge tenants. Modify the source, remove branding and get priority support.',
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
              <h3 className="text-[16px] font-bold text-[#0F1112]">{tier.name}</h3>
              {tier.badges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tier.badges.map((badge) => (
                    <span key={badge} className="text-[12px] font-semibold rounded-full px-3 py-1 bg-white text-[#3a7d00]">{badge}</span>
                  ))}
                </div>
              )}
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
