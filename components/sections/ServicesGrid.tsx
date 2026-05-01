import type { ReactElement } from 'react';
import { services } from '@/data/saas-page';

const IllustrationSaaS = () => (
  <div className="w-[180px] h-[180px] relative flex-shrink-0">
    <div className="absolute inset-0 rounded-3xl bg-white/60 shadow-inner" />
    <div className="absolute top-5 left-5 right-5 bottom-5 rounded-2xl bg-white shadow-md overflow-hidden">
      <div className="h-7 px-3 flex items-center gap-1 border-b border-[#FFE8E1]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#F26B4E]/30" />
        ))}
      </div>
      <div className="p-3 space-y-2">
        <div className="h-2.5 rounded bg-[#F26B4E]/40 w-2/3" />
        <div className="h-1.5 rounded bg-[#F26B4E]/20" />
        <div className="h-1.5 rounded bg-[#F26B4E]/20 w-4/5" />
        <div className="grid grid-cols-2 gap-1.5 mt-3">
          <div className="h-6 rounded-lg bg-[#F26B4E]/15" />
          <div className="h-6 rounded-lg bg-[#F26B4E]/10" />
        </div>
      </div>
    </div>
  </div>
);

const IllustrationWeb = () => (
  <div className="w-[180px] h-[180px] relative flex-shrink-0">
    <div className="absolute inset-0 rounded-3xl bg-white/60 shadow-inner" />
    <div className="absolute top-5 left-5 right-5 bottom-5 rounded-2xl bg-white shadow-md overflow-hidden">
      <div className="h-6 bg-[#3B7A6A]/10 flex items-center px-3 gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-[#3B7A6A]/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#3B7A6A]/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#3B7A6A]/20" />
      </div>
      <div className="p-3 grid grid-cols-2 gap-1.5">
        <div className="h-7 rounded bg-[#3B7A6A]/20" />
        <div className="h-7 rounded bg-[#3B7A6A]/10" />
        <div className="h-7 rounded bg-[#3B7A6A]/10" />
        <div className="h-7 rounded bg-[#3B7A6A]/20" />
        <div className="col-span-2 h-7 rounded bg-[#3B7A6A]/15" />
      </div>
    </div>
  </div>
);

const IllustrationMobile = () => (
  <div className="w-[180px] h-[180px] relative flex-shrink-0">
    <div className="absolute inset-0 rounded-3xl bg-white/40 shadow-inner" />
    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[80px] h-[160px] rounded-[24px] bg-[#0F1112] shadow-xl overflow-hidden border-[3px] border-[#1F2127]">
      <div className="h-4 bg-[#0F1112] flex items-center justify-center">
        <div className="w-7 h-1 rounded bg-[#3F3F3F]" />
      </div>
      <div className="p-2 space-y-1.5">
        <div className="h-3 rounded bg-[#F26B4E]/70" />
        <div className="h-2 rounded bg-white/15" />
        <div className="h-2 rounded bg-white/15 w-3/4" />
        <div className="h-5 rounded bg-[#F26B4E] mt-1.5" />
      </div>
    </div>
  </div>
);

const IllustrationAI = () => (
  <div className="w-[180px] h-[180px] relative flex-shrink-0">
    <div className="absolute inset-0 rounded-3xl bg-[#F26B4E]/10" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88px] h-[88px] rounded-full bg-[#F26B4E]/15 flex items-center justify-center">
      <div className="w-[60px] h-[60px] rounded-full bg-[#F26B4E]/30 flex items-center justify-center">
        <div className="w-9 h-9 rounded-full bg-[#F26B4E] shadow-lg shadow-[#F26B4E]/40" />
      </div>
    </div>
    {[0, 60, 120, 180, 240, 300].map((deg) => (
      <div
        key={deg}
        className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-[#F26B4E]/70"
        style={{
          transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-58px)`,
        }}
      />
    ))}
  </div>
);

const illustrations: Record<string, ReactElement> = {
  saas: <IllustrationSaaS />,
  web: <IllustrationWeb />,
  mobile: <IllustrationMobile />,
  ai: <IllustrationAI />,
};

export default function ServicesGrid() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 max-w-[680px] mx-auto">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-[#F26B4E] mb-4">
            Our Services
          </span>
          <h2 className="text-[44px] leading-[52px] font-semibold text-[#0F1112] tracking-[-0.01em]">
            Creating the Future of Your{' '}
            <em className="not-italic font-semibold">
              <span className="italic">Digital Presence</span>
            </em>
          </h2>
        </div>

        <div className="space-y-5">
          {services.map((service) => (
            <div
              key={service.number}
              className="rounded-[20px] p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-8 transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: service.bg }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full text-[13px] font-semibold"
                    style={{
                      backgroundColor: service.dark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.7)',
                      color: service.dark ? '#FFFFFF' : '#0F1112',
                    }}
                  >
                    {service.number}
                  </span>
                  <h3
                    className="text-[24px] font-semibold leading-8"
                    style={{ color: service.dark ? '#FFFFFF' : '#0F1112' }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p
                  className="text-[15px] leading-6 max-w-[520px]"
                  style={{ color: service.dark ? '#A6A6A6' : '#484848' }}
                >
                  {service.description}
                </p>
                <button
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium transition-colors"
                  style={{
                    border: service.dark ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(15,17,18,0.10)',
                    color: service.dark ? '#FFFFFF' : '#0F1112',
                    backgroundColor: service.dark ? 'transparent' : 'rgba(255,255,255,0.55)',
                  }}
                >
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="flex-shrink-0">
                {illustrations[service.illustration]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
