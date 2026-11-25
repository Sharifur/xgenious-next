import Link from 'next/link';
import { COLOR } from '@/app/products/prohandy-on-demand-home-service-marketplace/_components/constants';

const FACTS = [
  {
    text: 'Customers may pay a convenience fee, and professionals pay commissions and platform fees. Urban Company\'s commissions and fees were 28.3% of professionals\' average gross earnings in the nine months to December 2025.',
    source: 'Inc42, 4 Sep 2026',
    href: 'https://inc42.com/features/inside-urban-companys-marketplace-model-what-it-keeps-from-every-booking/',
  },
  {
    text: 'In FY26 it processed ₹4,290 crore of transactions on ₹1,556 crore of revenue.',
    source: 'Business Standard, 8 May 2026',
    href: 'https://www.business-standard.com/companies/quarterly-results/urban-company-s-loss-widens-to-161-crore-despite-strong-revenue-growth-126050801474_1.html',
  },
  {
    text: 'It verifies professionals\' ID documents and past work before they go live.',
    source: 'Urban Company blog',
    href: 'https://www.urbancompany.com/blog/building-indias-largest-marketplace-for-services-what-it-takes',
  },
];

export default function Money() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[860px]">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-8">How Urban Company makes money</h2>
        <ul className="flex flex-col gap-4">
          {FACTS.map((fact) => (
            <li key={fact.href} className="rounded-2xl border border-[#E5E7EC] p-5">
              <p className="text-[15px] leading-7 text-[#484848]">{fact.text}</p>
              <p className="mt-2 text-[13px] text-[#6b7280]">
                Source:{' '}
                <a href={fact.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  {fact.source}
                </a>
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link href="/urban-company-business-model" className="text-[15px] font-semibold underline underline-offset-2" style={{ color: COLOR }}>
            Read the full Urban Company business model →
          </Link>
        </p>
      </div>
    </section>
  );
}
