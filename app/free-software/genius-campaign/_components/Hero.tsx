import DownloadButton from '@/components/ui/DownloadButton';
import { COLOR, LIGHT_COLOR, GITHUB_URL, LICENSE_UUID, DOCS_URL } from './constants';

export default function Hero() {
  return (
    <section
      className="pt-[120px] pb-16 sm:pt-[160px] sm:pb-24"
      style={{ background: 'linear-gradient(180deg, #EEF0FD 0%, #f9fafb 100%)' }}
    >
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center text-center gap-6 max-w-[860px] mx-auto">

          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
              Free &amp; Open Source · MIT Licensed
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
              Bring Your Own AWS SES / Gmail Workspace
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
              No Third-Party Data Routing
            </span>
          </div>

          <h1 className="text-[36px] leading-[44px] sm:text-[54px] sm:leading-[62px] lg:text-[62px] lg:leading-[70px] font-semibold text-[#0F1112]">
            Email Marketing and Outreach, Self-Hosted: No Vendor Renting Your Sender Reputation.
          </h1>

          <p className="text-[#484848] text-[16px] sm:text-[18px] leading-8 max-w-[680px]">
            <strong>Genius Campaign</strong> puts contacts, templates, sequences, campaigns, and deliverability in one console. Bring your own <strong>AWS SES</strong>, <strong>Gmail Workspace</strong>, and <strong>Cloudflare R2</strong>. Your data and your sending domain stay yours.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <DownloadButton
              productName="Genius Campaign"
              productColor={COLOR}
              productLightColor={LIGHT_COLOR}
              githubUrl={GITHUB_URL}
              licenseUuid={LICENSE_UUID}
              label="Download .zip"
              buttonColor={COLOR}
              className="cursor-pointer inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:-translate-y-0.5"
            />
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
            MIT licensed · No account required · No credit card · No per-contact fees
          </p>

        </div>
      </div>
    </section>
  );
}
