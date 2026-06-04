import Image from 'next/image';
import { COLOR } from './constants';

const STEPS = [
  'Browse Available Jobs on Google Maps',
  'Manage Service Catalog and Pricing',
  'Handle Staff Scheduling',
  'Send Custom Offers with Cover Letters',
  'Track Earnings and Request Withdrawals',
];

export default function ProviderApp() {
  return (
    <section id="provider-app" className="pb-20 lg:pb-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1200px] mx-auto">

        <div
          className="relative rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch"
          style={{ background: '#F5F6F8' }}
        >
          {/* Left — text */}
          <div className="flex-1 min-w-0 relative z-10 text-center lg:text-left p-[30px]">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] font-semibold mb-5"
              style={{ borderColor: COLOR, color: COLOR }}
            >
              Service Provider App
            </div>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#0F1112] leading-tight mb-4 max-w-[420px]">
              Job Management for Service Providers
            </h2>

            <p className="text-[#6b7280] text-[15px] leading-7 mb-8 max-w-[460px] mx-auto lg:mx-0">
              Providers browse available jobs on Google Maps, manage their service catalog, schedule staff, and grow their business — all from the mobile app.
            </p>

            <div className="rounded-2xl border border-[#E5E7EC] bg-white p-6 max-w-[420px] mx-auto lg:mx-0">
              <p className="font-bold text-[#0F1112] text-[15px] mb-4">Provider Workflow:</p>
              <div className="flex flex-col gap-3">
                {STEPS.map((step) => (
                  <div key={step} className="flex items-center gap-3">
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: COLOR }}
                    >
                      <svg width="10" height="10" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4.5 4.5 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[13px] text-[#374151] text-left">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                Mobile app included in Everything Bundle &amp; Exclusive License only
              </span>
            </div>
          </div>

          {/* Right — circle anchored top-right, bleeds outside container */}
          <div
            className="hidden lg:block absolute right-0 w-[770px] h-[770px] translate-x-[18%]"
            style={{ top: '-100px' }}
          >
            <div
              className="relative w-full h-full rounded-full overflow-hidden"
              style={{ background: '#175CDE1A' }}
            >
              <Image
                src="/products/prohandy-provider-app-v2.png"
                alt="Prohandy provider Flutter app — job management and service catalog"
                fill
                className="object-cover object-top"
                sizes="770px"
              />
            </div>
          </div>

          {/* Mobile fallback */}
          <div className="lg:hidden flex-shrink-0 w-[340px] mx-auto mb-6">
            <div
              className="relative w-full aspect-square rounded-full overflow-hidden"
              style={{ background: '#175CDE1A' }}
            >
              <Image
                src="/products/prohandy-provider-app-v2.png"
                alt="Prohandy provider Flutter app — job management and service catalog"
                fill
                className="object-cover object-top"
                sizes="340px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
