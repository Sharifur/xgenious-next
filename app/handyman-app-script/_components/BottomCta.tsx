import Link from 'next/link';
import { DEMO_URL } from '@/app/products/prohandy-on-demand-home-service-marketplace/_components/constants';
import { PRODUCT_PRICING } from './copy';

export default function BottomCta() {
  return (
    <section className="py-16 sm:py-20" style={{ background: '#064e3b' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 text-center">
        <h2 className="text-[28px] sm:text-[40px] font-bold text-white leading-tight max-w-[640px] mx-auto">
          Launch your handyman marketplace this month.
        </h2>
        <div className="flex items-center justify-center gap-3 flex-wrap mt-8">
          <Link
            href={PRODUCT_PRICING}
            className="inline-flex items-center text-[#064e3b] font-semibold text-[15px] rounded-full px-8 py-3.5 bg-white"
          >
            Get ProHandy
          </Link>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white font-semibold text-[15px] rounded-full px-8 py-3.5 border border-white/30"
          >
            Live demo
          </a>
        </div>
      </div>
    </section>
  );
}
