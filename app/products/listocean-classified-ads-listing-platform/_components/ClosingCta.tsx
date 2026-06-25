import Link from 'next/link';
import { COLOR, COLOR_DARK, DARK_BG, DEMO_URL, REGULAR_PRICE } from './constants';

export default function ClosingCta() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: DARK_BG }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="max-w-[720px] mx-auto text-center">

          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-6" style={{ background: `${COLOR}25`, color: '#67e8f9' }}>
            Get Started Today
          </div>

          <h2 className="text-[32px] sm:text-[48px] font-bold text-white leading-tight mb-5">
            Your Classified Marketplace Starts Here
          </h2>

          <p className="text-[#9ca3af] text-[15px] sm:text-[17px] leading-7 mb-8">
            One platform. Real-time live chat. Google Maps listings. Tiered memberships. A digital wallet.
            Four drag &amp; drop builders. GDPR compliance — all for a one-time price.
            No monthly fees. No commission on your revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold text-[16px] rounded-full px-8 py-4 text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: COLOR, boxShadow: `0 8px 32px ${COLOR}55` }}
            >
              {`Purchase ListOcean — from $${REGULAR_PRICE}`}
            </a>
            <Link
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-[15px] rounded-full px-8 py-4 border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              View Live Demo
            </Link>
          </div>

          <p className="text-[13px] text-[#6b7280]">
            One-time purchase · Full source code · Lifetime updates · No monthly fees
          </p>

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-[12px] text-[#4b5563] mb-3">Also built by Xgenious:</p>
            <div className="flex items-center justify-center gap-5 flex-wrap">
              <Link
                href="/products/multisaas-website-builder-saas"
                className="text-[13px] text-[#6b7280] underline underline-offset-4 decoration-[#4b5563]/30 hover:text-[#9ca3af] transition-colors"
              >
                MultiSaas — Website Builder SaaS
              </Link>
              <Link
                href="/products/grenmart-organic-grocery-ecommerce"
                className="text-[13px] text-[#6b7280] underline underline-offset-4 decoration-[#4b5563]/30 hover:text-[#9ca3af] transition-colors"
              >
                Grenmart — Grocery Ecommerce Script
              </Link>
              <Link
                href="/products/nexelit-multipurpose-website-business-management-system-cms"
                className="text-[13px] text-[#6b7280] underline underline-offset-4 decoration-[#4b5563]/30 hover:text-[#9ca3af] transition-colors"
              >
                Nexelit — CMS &amp; Business Management
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
