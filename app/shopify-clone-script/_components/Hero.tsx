import Link from 'next/link';
import { COLOR } from '@/app/products/nazmart-multi-tenancy-ecommerce-platform/_components/constants';
import { DEMO_URL, LAST_UPDATED, PRODUCT_PRICING } from './copy';

const TRUST = ['534 sales on CodeCanyon', 'v4.3.0, October 2026', 'Laravel 12 · PHP 8.3', '6 months support, lifetime updates'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[120px] pb-16 sm:pt-[140px] sm:pb-20" style={{ background: '#F8FFEE' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="max-w-[820px] mx-auto flex flex-col items-center text-center gap-5">
          <p className="inline-flex items-center gap-2 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Shopify clone script · Self-hosted · Laravel
          </p>
          <h1 className="text-[34px] leading-[42px] sm:text-[48px] sm:leading-[56px] lg:text-[56px] lg:leading-[64px] font-bold text-[#0F1112]">
            Shopify Clone Script: Launch Your Own Shopify-Style Store Platform
          </h1>
          <p className="text-[#484848] text-[16px] sm:text-[18px] leading-7 max-w-[680px]">
            Nazmart lets you run the Shopify business model on your own server. Merchants sign up, pick a plan, and get their own store on a subdomain or their own domain. You set the prices, keep the subscription revenue, and own the code.
          </p>
          <p className="text-[13px] text-[#6b7280] max-w-[560px]">
            Looking to copy one Shopify store’s design? This isn’t that. Nazmart is a platform for hosting many stores.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Link
              href={PRODUCT_PRICING}
              className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: '#ec7161', boxShadow: '0 6px 20px #ec716140' }}
            >
              See pricing
            </Link>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[15px] rounded-full px-8 py-3.5 border-2 text-[#0F1112] border-[#0F1112]/20 bg-white/70 hover:bg-white transition-all"
            >
              Try the live demo
            </a>
          </div>
          <p className="text-[13px] text-[#484848]">
            {TRUST.join(' · ')}
            <span className="sr-only"> Facts checked {LAST_UPDATED}.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
