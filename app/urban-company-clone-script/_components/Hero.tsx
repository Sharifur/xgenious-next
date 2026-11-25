import Link from 'next/link';
import { COLOR, DEMO_URL, LIGHT_COLOR } from '@/app/products/prohandy-on-demand-home-service-marketplace/_components/constants';

const PRODUCT_PRICING = '/products/prohandy-on-demand-home-service-marketplace#pricing';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[120px] pb-16 sm:pt-[140px] sm:pb-20" style={{ background: LIGHT_COLOR }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="max-w-[820px] mx-auto flex flex-col items-center text-center gap-5">
          <h1 className="text-[34px] leading-[42px] sm:text-[48px] sm:leading-[56px] lg:text-[52px] lg:leading-[60px] font-bold text-[#0F1112]">
            Urban Company Clone Script: Launch Your Own Home Services Marketplace
          </h1>
          <p className="text-[#484848] text-[16px] sm:text-[18px] leading-7 max-w-[740px]">
            ProHandy gives you the building blocks of the Urban Company model, fixed-price services, verified professionals, in-app booking and a commission on every job, as software you own and run in your own city.
          </p>
          <p className="text-[13px] leading-6 text-[#6b7280] max-w-[680px]">
            ProHandy is independent software by Xgenious. It is not affiliated with Urban Company, TaskRabbit or Handy, and does not copy their apps or content.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Link
              href={PRODUCT_PRICING}
              className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
            >
              See pricing
            </Link>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[15px] rounded-full px-8 py-3.5 border-2 text-[#0F1112] border-[#0F1112]/20 bg-white/70 hover:bg-white transition-all"
            >
              Try the demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
