import Link from 'next/link';
import { COLOR } from '@/app/products/prohandy-on-demand-home-service-marketplace/_components/constants';

const LINKS = [
  { href: '/prohandy-vs-demandium', label: 'ProHandy vs Demandium' },
  { href: '/prohandy-vs-qixer-on-deman-service-marketplace-customization-comparison', label: 'ProHandy vs Qixer' },
  { href: '/best-on-demand-service-marketplace-platforms', label: '10 best on-demand service marketplace scripts' },
];

export default function Compare() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-6">Compare</h2>
        <ul className="flex flex-col gap-3">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-[16px] font-semibold underline underline-offset-2" style={{ color: COLOR }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
