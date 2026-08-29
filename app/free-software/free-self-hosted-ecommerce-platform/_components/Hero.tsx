import DownloadButton from '@/components/ui/DownloadButton';
import { COLOR, LIGHT_COLOR, GITHUB_URL, LICENSE_UUID, DOCS_URL, DEMO_URL } from './constants';

export default function Hero() {
  return (
    <section
      className="pt-[120px] pb-16 sm:pt-[160px] sm:pb-24"
      style={{ background: 'linear-gradient(180deg, #ECFDF5 0%, #f9fafb 100%)' }}
    >
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center text-center gap-6 max-w-[900px] mx-auto">

          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
              Open Source · Self-Hosted
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
              MIT Licensed
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
              0% Commission
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
              98 Integrations Built In
            </span>
          </div>

          <h1 className="text-[36px] leading-[44px] sm:text-[54px] sm:leading-[62px] lg:text-[64px] lg:leading-[72px] font-semibold text-[#0F1112]">
            Free Self-Hosted eCommerce Platform.<br />Without the Revenue Cut.
          </h1>

          <p className="text-[#484848] text-[16px] sm:text-[18px] leading-8 max-w-[720px]">
            <strong>Genius Commerz</strong> is a free, self-hosted eCommerce platform for merchants selling across borders. 39 payment gateways, 20 SMS gateways, 19 shipping carriers, and 11 fraud checkers, ready across 213 countries and 155 currencies, with no percentage of revenue taken, ever.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <DownloadButton
              productName="Genius Commerz"
              productColor={COLOR}
              productLightColor={LIGHT_COLOR}
              githubUrl={GITHUB_URL}
              licenseUuid={LICENSE_UUID}
              label="Download .zip"
              buttonColor={COLOR}
              className="cursor-pointer inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:-translate-y-0.5"
            />
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 bg-white border border-[#E5E7EC] text-[#0F1112] font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:border-[#0F1112]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              Live Demo
            </a>
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 bg-white border border-[#E5E7EC] text-[#0F1112] font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:border-[#0F1112]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Documentation
            </a>
          </div>

          <p className="text-[13px] text-[#6b7280]">
            No account required · No credit card · Laravel 12 + PHP 8.2+ + MySQL 8 + React 19
          </p>

        </div>
      </div>
    </section>
  );
}
