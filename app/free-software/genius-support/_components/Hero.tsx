import DownloadButton from '@/components/ui/DownloadButton';
import { COLOR, LIGHT_COLOR, DEMO_URL, DOCS_URL, GITHUB_URL, LICENSE_UUID } from './constants';

export default function Hero() {
  return (
    <section
      className="pt-[120px] pb-16 sm:pt-[160px] sm:pb-24"
      style={{ background: 'linear-gradient(180deg, #e0f2fe 0%, #f0fdf4 100%)' }}
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
            Free Support Portal Software: Open Source Helpdesk
          </h1>

          <p className="text-[#484848] text-[16px] sm:text-[18px] leading-8 max-w-[680px]">
            <strong>Genius Support</strong> is a complete support portal built with <strong>Laravel</strong> and <strong>Laravel Reverb</strong>. Customer portal, agent dashboard, knowledge base, email-to-ticket automation, and real-time WebSocket updates. Self-hosted, no per-agent fees, forever free.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <DownloadButton
              productName="Genius Support"
              productColor={COLOR}
              productLightColor={LIGHT_COLOR}
              githubUrl={GITHUB_URL}
              licenseUuid={LICENSE_UUID}
              label="Download Free: No Account Needed"
              buttonColor={COLOR}
              className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:-translate-y-0.5"
            />
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-[#E5E7EC] text-[#0F1112] font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:border-[#0F1112]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                <polygon points="10,8 16,12 10,16" fill="currentColor" />
              </svg>
              Try Live Demo
            </a>
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-[#E5E7EC] text-[#0F1112] font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:border-[#0F1112]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Documentation
            </a>
          </div>

          <p className="text-[13px] text-[#6b7280]">
            MIT License · No account required · No credit card · No per-agent fees
          </p>

        </div>
      </div>
    </section>
  );
}
