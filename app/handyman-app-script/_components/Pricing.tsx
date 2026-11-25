import Link from 'next/link';
import {
  COLOR,
  COMBO_PRICE,
  EXTENDED_PRICE,
  LIGHT_COLOR,
  REGULAR_PRICE,
} from '@/app/products/prohandy-on-demand-home-service-marketplace/_components/constants';
import { PRODUCT_PRICING } from './copy';

const TIERS = [
  { name: 'Regular', price: REGULAR_PRICE, apps: [true, false, false, false, false] },
  { name: 'Everything Bundle', price: COMBO_PRICE, apps: [true, true, true, true, false] },
  { name: 'Exclusive', price: EXTENDED_PRICE, apps: [true, true, true, true, true] },
];

const ROWS = [
  'Web platform + admin',
  'Flutter customer app',
  'Flutter provider app',
  'WhatsApp plugin',
  'White-label and SaaS rights',
];

export default function Pricing({ intro }: { intro?: string }) {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">Pricing</h2>
        {intro ? <p className="text-[15px] leading-7 text-[#484848] mb-6 max-w-[720px]">{intro}</p> : null}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TIERS.map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-[#E5E7EC] p-6 flex flex-col gap-4" style={{ background: LIGHT_COLOR }}>
              <h3 className="text-[16px] font-bold text-[#0F1112]">{tier.name}</h3>
              <p className="text-[40px] font-bold text-[#0F1112] leading-none">${tier.price}</p>
              <ul className="flex flex-col gap-2 flex-1">
                {ROWS.map((label, index) => (
                  <li key={label} className="flex items-start gap-2 text-[14px] text-[#374151]">
                    <span aria-hidden className="font-semibold" style={{ color: tier.apps[index] ? COLOR : '#9ca3af' }}>
                      {tier.apps[index] ? '✓' : '–'}
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
              <Link href={PRODUCT_PRICING} className="text-[14px] font-semibold underline underline-offset-2 text-[#0F1112]">
                See pricing
              </Link>
            </div>
          ))}
        </div>
        <p className="text-[13px] text-[#6b7280] mt-6">One-time payment. 6 months support, lifetime updates, free installation.</p>
        <p className="text-[13px] text-[#6b7280] mt-2">The Regular licence lets you charge your customers. Mobile apps and premium plugins need the Everything Bundle.</p>
      </div>
    </section>
  );
}
