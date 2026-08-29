import DownloadButton from '@/components/ui/DownloadButton';
import { COLOR, LIGHT_COLOR, GITHUB_URL, LICENSE_UUID, DOCS_URL, DEMO_URL, REPO_URL } from './constants';

const INCLUDES = [
  'Full Laravel + React source',
  'Admin panel + customer storefront',
  '39 payment, 19 shipping, 20 SMS, 11 fraud provider integrations',
  'EU VAT, UK VAT, US, and Canada tax templates',
  'Full documentation',
];

export default function DownloadCTA() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/cta-bg.jpg" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container-page px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="max-w-[560px] mx-auto bg-white rounded-3xl p-8 sm:p-10 flex flex-col gap-6">
          <div className="text-center">
            <h2 className="text-[26px] sm:text-[32px] font-semibold text-[#0F1112] leading-tight">
              Download Genius Commerz
            </h2>
            <p className="text-[#484848] text-[14px] mt-2">Full source · MIT licensed · 0% commission</p>
          </div>

          <ul className="flex flex-col gap-2">
            {INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[13px] text-[#484848] leading-5">
                <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill={COLOR} fillOpacity="0.1" />
                  <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <DownloadButton
            productName="Genius Commerz"
            productColor={COLOR}
            productLightColor={LIGHT_COLOR}
            githubUrl={GITHUB_URL}
            licenseUuid={LICENSE_UUID}
            label="Download .zip"
            buttonColor={COLOR}
            className="cursor-pointer w-full inline-flex items-center justify-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:-translate-y-0.5"
          />

          <div className="flex items-center justify-center gap-5 text-[13px] font-medium" style={{ color: COLOR }}>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Live demo</a>
            <span className="text-[#E5E7EC]">·</span>
            <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Documentation</a>
            <span className="text-[#E5E7EC]">·</span>
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Source</a>
          </div>
        </div>
      </div>
    </section>
  );
}
