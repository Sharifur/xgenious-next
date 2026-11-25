import Link from 'next/link';
import { DEMO_URL, PRODUCT_PRICING } from './copy';

export default function BottomCta() {
  return (
    <section className="py-16 sm:py-20" style={{ background: '#0d2b14' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 text-center">
        <h2 className="text-[28px] sm:text-[40px] font-bold text-white leading-tight max-w-[640px] mx-auto">
          Own the platform, not a store on someone else’s.
        </h2>
        <div className="flex items-center justify-center gap-3 flex-wrap mt-8">
          <Link
            href={PRODUCT_PRICING}
            className="inline-flex items-center text-[#0d2b14] font-semibold text-[15px] rounded-full px-8 py-3.5"
            style={{ background: '#92E721' }}
          >
            Get Nazmart
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
