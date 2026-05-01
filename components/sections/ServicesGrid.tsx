import type { ReactElement } from 'react';
import { services } from '@/data/saas-page';

/* ── Richer isometric-style illustrations ── */

const Saas = () => (
  <div className="relative w-[260px] h-[200px] flex-shrink-0">
    {/* Phone */}
    <div className="absolute right-4 top-2 w-[80px] h-[160px] rounded-[18px] bg-[#0F1112] shadow-2xl overflow-hidden border-[3px] border-[#1F2127] rotate-[8deg]">
      <div className="h-3 bg-[#0F1112] flex items-center justify-center">
        <div className="w-6 h-1 rounded bg-[#3F3F3F]" />
      </div>
      <div className="bg-white h-full p-2 space-y-1.5">
        <div className="h-2 rounded bg-[#F26B4E]/60 w-3/4" />
        <div className="h-1.5 rounded bg-[#E5E7EC]" />
        <div className="h-1.5 rounded bg-[#E5E7EC] w-2/3" />
        <div className="h-6 rounded bg-[#F26B4E]/30" />
        <div className="h-1.5 rounded bg-[#E5E7EC]" />
      </div>
    </div>

    {/* Laptop */}
    <div className="absolute left-0 bottom-2 w-[180px] aspect-[16/10] rounded-md bg-white shadow-2xl shadow-black/20 overflow-hidden border-[3px] border-[#0F1112]">
      <div className="h-3 bg-[#0F1112] flex items-center px-1.5 gap-1">
        <div className="w-1 h-1 rounded-full bg-[#EF4444]/70" />
        <div className="w-1 h-1 rounded-full bg-[#F59E0B]/70" />
        <div className="w-1 h-1 rounded-full bg-[#10B981]/70" />
      </div>
      <div className="p-2 grid grid-cols-3 gap-1.5">
        <div className="space-y-1">
          <div className="h-1.5 rounded bg-[#F26B4E]/40" />
          <div className="h-1.5 rounded bg-[#F26B4E]/20" />
          <div className="h-1.5 rounded bg-[#F26B4E]/20 w-3/4" />
        </div>
        <div className="col-span-2 space-y-1.5">
          <div className="h-3 rounded bg-[#F26B4E]/50" />
          <div className="grid grid-cols-2 gap-1">
            <div className="h-5 rounded bg-[#F26B4E]/30" />
            <div className="h-5 rounded bg-[#F26B4E]/20" />
          </div>
        </div>
      </div>
    </div>

    {/* Floating sparkle */}
    <div className="absolute -top-1 left-2">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v6M12 16v6M2 12h6M16 12h6" stroke="#F26B4E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  </div>
);

const Web = () => (
  <div className="relative w-[260px] h-[200px] flex-shrink-0">
    {/* Browser window */}
    <div className="absolute inset-x-2 top-3 bottom-3 rounded-xl bg-white shadow-2xl shadow-black/15 overflow-hidden border border-[#3B7A6A]/30">
      <div className="h-6 px-3 bg-[#3B7A6A]/10 flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#3B7A6A]/40" />
        <div className="w-2 h-2 rounded-full bg-[#3B7A6A]/30" />
        <div className="w-2 h-2 rounded-full bg-[#3B7A6A]/20" />
        <div className="ml-3 flex-1 h-3 rounded bg-[#3B7A6A]/10" />
      </div>
      <div className="p-3 grid grid-cols-3 gap-2">
        <div className="col-span-1 space-y-1">
          <div className="h-2 rounded bg-[#3B7A6A]/30" />
          <div className="h-1.5 rounded bg-[#3B7A6A]/20" />
          <div className="h-1.5 rounded bg-[#3B7A6A]/20 w-3/4" />
        </div>
        <div className="col-span-2 space-y-2">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="h-10 rounded bg-[#3B7A6A]/25" />
            <div className="h-10 rounded bg-[#3B7A6A]/15" />
          </div>
          <div className="h-12 rounded bg-[#3B7A6A]/20 relative overflow-hidden">
            <svg viewBox="0 0 100 30" className="absolute inset-0 w-full h-full">
              <path d="M0 25 Q 20 15 35 18 T 70 12 T 100 8" stroke="#3B7A6A" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Mobile = () => (
  <div className="relative w-[260px] h-[200px] flex-shrink-0 flex items-center justify-center">
    {/* Two phones */}
    <div className="absolute left-12 w-[88px] aspect-[9/19] rounded-[20px] bg-[#0F1112] shadow-2xl overflow-hidden border-[3px] border-[#1F2127] rotate-[-10deg]">
      <div className="h-3 bg-[#0F1112] flex items-center justify-center">
        <div className="w-6 h-1 rounded bg-[#3F3F3F]" />
      </div>
      <div className="bg-white p-2 space-y-1.5 h-full">
        <div className="h-3 rounded bg-[#F26B4E]" />
        <div className="h-1.5 rounded bg-[#E5E7EC]" />
        <div className="grid grid-cols-2 gap-1">
          <div className="h-6 rounded bg-[#F26B4E]/30" />
          <div className="h-6 rounded bg-[#F26B4E]/20" />
        </div>
        <div className="h-5 rounded bg-[#F26B4E]" />
      </div>
    </div>
    <div className="absolute right-12 w-[88px] aspect-[9/19] rounded-[20px] bg-[#0F1112] shadow-2xl overflow-hidden border-[3px] border-[#1F2127] rotate-[10deg] z-10">
      <div className="h-3 bg-[#0F1112] flex items-center justify-center">
        <div className="w-6 h-1 rounded bg-[#3F3F3F]" />
      </div>
      <div className="bg-white p-2 space-y-1.5 h-full">
        <div className="h-3 rounded bg-[#3B7A6A]/60" />
        <div className="h-1.5 rounded bg-[#E5E7EC]" />
        <div className="h-12 rounded bg-[#3B7A6A]/30" />
        <div className="h-5 rounded bg-[#3B7A6A]" />
      </div>
    </div>
  </div>
);

const AI = () => (
  <div className="relative w-[260px] h-[200px] flex-shrink-0">
    {/* Glow circle */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full bg-[#F26B4E]/20 blur-2xl" />

    {/* Center orb */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] rounded-full bg-gradient-to-br from-[#F26B4E] to-[#EC7161] flex items-center justify-center shadow-2xl shadow-[#F26B4E]/40">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="20" r="6" fill="white" opacity="0.95" />
        <rect x="14" y="26" width="20" height="14" rx="3" fill="white" opacity="0.95" />
        <circle cx="20" cy="33" r="1.5" fill="#F26B4E" />
        <circle cx="28" cy="33" r="1.5" fill="#F26B4E" />
        <line x1="24" y1="14" x2="24" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="10" r="1.5" fill="white" />
      </svg>
    </div>

    {/* Orbit rings */}
    {[0, 60, 120, 180, 240, 300].map((deg) => (
      <div
        key={deg}
        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#F26B4E]"
        style={{
          transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-78px)`,
          opacity: 0.7,
        }}
      />
    ))}
  </div>
);

const ill: Record<string, ReactElement> = {
  saas: <Saas />,
  web: <Web />,
  mobile: <Mobile />,
  ai: <AI />,
};

export default function ServicesGrid() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container-page">
        <div className="text-center mb-14 max-w-[640px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFE8E1] text-[#F26B4E] text-[12px] font-medium mb-5">
            Our Services
          </span>
          <h2 className="text-[44px] leading-[52px] font-semibold text-[#0F1112] tracking-[-0.01em]">
            Creating the Future of Your{' '}
            <span className="italic font-semibold">Digital Presence</span>
          </h2>
        </div>

        <div className="space-y-5">
          {services.map((s) => (
            <article
              key={s.number}
              className="rounded-[20px] p-8 lg:p-10 flex flex-col sm:flex-row items-center gap-8 transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: s.bg }}
            >
              <div className="flex-1">
                <h3
                  className="text-[28px] font-semibold leading-9 mb-3"
                  style={{ color: s.dark ? '#FFFFFF' : '#0F1112' }}
                >
                  <span className="font-medium" style={{ color: s.dark ? '#A6A6A6' : '#8A8F99' }}>
                    {s.number}
                  </span>{' '}
                  {s.title}
                </h3>
                <p
                  className="text-[14px] leading-[22px] max-w-[480px]"
                  style={{ color: s.dark ? '#A6A6A6' : '#484848' }}
                >
                  {s.description}
                </p>
                <button
                  className="mt-6 inline-flex items-center gap-2 px-5 h-10 rounded-full text-[13px] font-medium transition-colors"
                  style={{
                    background: s.dark ? 'rgba(255,255,255,0.08)' : '#FFFFFF',
                    color: s.dark ? '#FFFFFF' : '#0F1112',
                    border: s.dark
                      ? '1px solid rgba(255,255,255,0.12)'
                      : '1px solid rgba(15,17,18,0.08)',
                  }}
                >
                  View Details
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6h8M7 3l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-shrink-0">{ill[s.illustration]}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
