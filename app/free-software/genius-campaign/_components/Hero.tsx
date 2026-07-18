import Link from 'next/link';
import DownloadButton from '@/components/ui/DownloadButton';
import { COLOR, LIGHT_COLOR, GITHUB_URL, LICENSE_UUID } from './constants';

export default function Hero() {
  return (
    <section
      className="pt-[120px] pb-16 sm:pt-[160px] sm:pb-24"
      style={{ background: 'linear-gradient(180deg, #dcfce7 0%, #f0fdf4 100%)' }}
    >
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center text-center gap-6 max-w-[860px] mx-auto">

          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
              Free &amp; Open Source
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
              MIT License
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
              Laravel · PHP 8.2+
            </span>
          </div>

          <h1 className="text-[36px] leading-[44px] sm:text-[54px] sm:leading-[62px] lg:text-[66px] lg:leading-[74px] font-semibold text-[#0F1112]">
            Free Email Marketing Software — Open Source &amp; Self-Hosted
          </h1>

          <p className="text-[#484848] text-[16px] sm:text-[18px] leading-8 max-w-[680px]">
            <strong>Genius Campaign</strong> is a self-hosted email marketing platform built with <strong>Laravel</strong>. Sequence automation, webhooks, built-in templates, AI-assisted writing, and AWS SES or Google Workspace sending — no per-contact fees, forever free.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <DownloadButton
              productName="Genius Campaign"
              productColor={COLOR}
              productLightColor={LIGHT_COLOR}
              githubUrl={GITHUB_URL}
              licenseUuid={LICENSE_UUID}
              label="Get Notified — Free Download"
              buttonColor={COLOR}
              className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:-translate-y-0.5"
            />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white border border-[#E5E7EC] text-[#0F1112] font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:border-[#0F1112]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 6l8 7 8-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Contact Us
            </Link>
          </div>

          <p className="text-[13px] text-[#6b7280]">
            MIT License · No account required · No credit card · No per-contact fees
          </p>

        </div>
      </div>
    </section>
  );
}
