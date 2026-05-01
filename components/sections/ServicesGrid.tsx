import type { ReactElement } from 'react';
import { services } from '@/data/saas-page';

/* ───────────────────────────────────────────────────────────────
   "Creating the Future of Your Digital Presence"
   - Eyebrow + heading on the left, supporting copy on the right
   - 4 stacked service cards with rich isometric-feel illustrations
   ─────────────────────────────────────────────────────────────── */

/* ── Illustration: SaaS — laptop + storage stack ── */
const Saas = () => (
  <div className="relative w-[260px] h-[200px] flex-shrink-0">
    {/* Floor plate */}
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[210px] h-3 rounded-full"
      style={{ background: 'rgba(15,17,18,0.06)', filter: 'blur(6px)' }}
    />
    {/* Server stack on left */}
    <div className="absolute left-2 bottom-6 flex flex-col gap-1.5">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-14 h-6 rounded-md flex items-center px-2 gap-1"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF, #DDE2F8)',
            boxShadow: '0 2px 6px rgba(60,80,170,0.18)',
          }}
        >
          <div className="w-1 h-1 rounded-full bg-[#22C55E]" />
          <div className="w-1 h-1 rounded-full bg-[#F26B4E]" />
          <div className="flex-1 h-0.5 rounded bg-[#C7CDF0]" />
        </div>
      ))}
    </div>
    {/* Boxes on right */}
    <div className="absolute right-3 bottom-7 flex flex-col gap-1">
      <div
        className="w-12 h-9 rounded-md"
        style={{
          background: 'linear-gradient(135deg, #F26B4E, #EC7161)',
          boxShadow: '0 4px 8px rgba(242,107,78,0.3)',
        }}
      />
      <div
        className="w-12 h-7 rounded-md"
        style={{
          background: 'linear-gradient(135deg, #FFE8E1, #FFDEDA)',
          boxShadow: '0 2px 6px rgba(15,17,18,0.08)',
        }}
      />
    </div>
    {/* Center laptop */}
    <div className="absolute left-1/2 -translate-x-1/2 top-6">
      <div
        className="w-[150px] h-[100px] rounded-md bg-white shadow-xl border-[3px] border-[#0F1112] overflow-hidden"
        style={{ boxShadow: '0 12px 24px rgba(40,50,140,0.18)' }}
      >
        <div className="h-3 bg-[#0F1112] flex items-center px-1.5 gap-0.5">
          <div className="w-1 h-1 rounded-full bg-[#EF4444]/70" />
          <div className="w-1 h-1 rounded-full bg-[#F59E0B]/70" />
          <div className="w-1 h-1 rounded-full bg-[#10B981]/70" />
        </div>
        <div className="p-2 space-y-1">
          <div className="h-2 rounded bg-[#7E89E8]/40" />
          <div className="grid grid-cols-3 gap-1">
            <div className="h-8 rounded bg-[#7E89E8]/30" />
            <div className="h-8 rounded bg-[#7E89E8]/20" />
            <div className="h-8 rounded bg-[#F26B4E]/40" />
          </div>
          <div className="h-3 rounded bg-[#7E89E8]/20" />
        </div>
      </div>
      <div className="w-[170px] h-1 bg-[#0F1112] rounded-b-md -ml-2.5" />
    </div>
    {/* Floating coral chip */}
    <div
      className="absolute top-2 right-6 w-7 h-7 rounded-full flex items-center justify-center"
      style={{ background: '#F26B4E', boxShadow: '0 4px 10px rgba(242,107,78,0.45)' }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 7l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </div>
);

/* ── Illustration: Web App — figures + browser windows ── */
const Web = () => (
  <div className="relative w-[260px] h-[200px] flex-shrink-0">
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-3 rounded-full"
      style={{ background: 'rgba(15,17,18,0.06)', filter: 'blur(6px)' }}
    />
    {/* Center figure */}
    <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex flex-col items-center">
      <div className="w-7 h-7 rounded-full bg-[#3B7A6A] flex items-center justify-center">
        <div className="w-3.5 h-3.5 rounded-full bg-[#FFE8E1]" />
      </div>
      <div className="w-12 h-16 rounded-t-2xl mt-1 bg-[#3B7A6A]" />
    </div>
    {/* Left figure */}
    <div className="absolute left-3 bottom-3 flex flex-col items-center">
      <div className="w-6 h-6 rounded-full bg-[#0F1112] flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-[#FFE8E1]" />
      </div>
      <div className="w-10 h-14 rounded-t-2xl mt-1 bg-[#0F1112]" />
    </div>
    {/* Browser windows floating */}
    <div className="absolute right-2 top-2 w-[110px] h-[80px] rounded-md bg-white shadow-xl border border-[#3B7A6A]/20 overflow-hidden rotate-[-4deg]">
      <div className="h-3 px-1.5 bg-[#3B7A6A]/10 flex items-center gap-0.5">
        <div className="w-1 h-1 rounded-full bg-[#3B7A6A]/40" />
        <div className="w-1 h-1 rounded-full bg-[#3B7A6A]/30" />
      </div>
      <div className="p-1.5 space-y-1">
        <div className="h-1.5 rounded bg-[#3B7A6A]/40 w-2/3" />
        <div className="h-7 rounded bg-[#3B7A6A]/20" />
        <div className="grid grid-cols-2 gap-1">
          <div className="h-4 rounded bg-[#3B7A6A]/30" />
          <div className="h-4 rounded bg-[#F26B4E]/40" />
        </div>
      </div>
    </div>
    {/* Floating code chip */}
    <div className="absolute right-6 bottom-12 w-9 h-9 rounded-lg bg-white shadow-md flex items-center justify-center">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 8l-4 4 4 4M15 8l4 4-4 4"
          stroke="#3B7A6A"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    {/* Settings cog */}
    <div className="absolute left-12 top-3 w-8 h-8 rounded-full bg-[#3B7A6A] flex items-center justify-center">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.8" />
        <path
          d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  </div>
);

/* ── Illustration: Mobile — phone with floating app icons ── */
const Mobile = () => (
  <div className="relative w-[260px] h-[200px] flex-shrink-0">
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px] h-3 rounded-full"
      style={{ background: 'rgba(15,17,18,0.08)', filter: 'blur(8px)' }}
    />
    {/* Phone */}
    <div
      className="absolute left-1/2 -translate-x-1/2 top-3 w-[100px] h-[180px] rounded-[22px] overflow-hidden border-[4px] border-[#0F1112]"
      style={{
        background: 'linear-gradient(180deg, #F26B4E, #EC7161)',
        boxShadow: '0 12px 28px rgba(15,17,18,0.18)',
      }}
    >
      <div className="h-3 flex items-center justify-center bg-[#0F1112]">
        <div className="w-7 h-1 rounded bg-[#3F3F3F]" />
      </div>
      <div className="bg-white h-full p-2 space-y-1.5">
        <div className="h-2 rounded bg-[#F26B4E]/60 w-2/3" />
        <div className="h-12 rounded bg-[#F26B4E]/30" />
        <div className="grid grid-cols-2 gap-1">
          <div className="h-6 rounded bg-[#F26B4E]/40" />
          <div className="h-6 rounded bg-[#F26B4E]/20" />
        </div>
        <div className="h-6 rounded bg-[#F26B4E]" />
      </div>
    </div>
    {/* Floating icons */}
    <div className="absolute left-2 top-4 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="#E11D48" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="#E11D48" strokeWidth="1.6" />
        <circle cx="17.5" cy="6.5" r="1" fill="#E11D48" />
      </svg>
    </div>
    <div className="absolute left-3 bottom-12 w-8 h-8 rounded-full bg-[#F26B4E] flex items-center justify-center shadow-md">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" fill="white" />
      </svg>
    </div>
    <div className="absolute right-2 top-6 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 8l-4 4 4 4M15 8l4 4-4 4"
          stroke="#0F1112"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="absolute right-3 bottom-10 w-9 h-9 rounded-full bg-[#A78BFA] shadow-md flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.6" />
        <path d="M12 7v5l3 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </div>
    <div className="absolute right-8 bottom-2 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z"
          fill="#3B82F6"
        />
      </svg>
    </div>
  </div>
);

/* ── Illustration: AI Agent — robot with chat & icons ── */
const AI = () => (
  <div className="relative w-[260px] h-[200px] flex-shrink-0">
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160px] h-3 rounded-full"
      style={{ background: 'rgba(15,17,18,0.08)', filter: 'blur(6px)' }}
    />
    {/* Robot body */}
    <div className="absolute left-1/2 -translate-x-1/2 top-12">
      {/* Antenna */}
      <div className="w-px h-4 mx-auto bg-[#A78BFA]" />
      <div className="w-1.5 h-1.5 mx-auto rounded-full bg-[#F26B4E] -mt-px" />
      {/* Head */}
      <div
        className="w-[80px] h-[68px] mt-1 rounded-2xl flex items-center justify-center relative"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF, #E5DAF5)',
          boxShadow: '0 8px 18px rgba(120,80,200,0.25)',
        }}
      >
        {/* Eyes */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#0F1112]" />
          <div className="w-3 h-3 rounded-full bg-[#0F1112]" />
        </div>
        {/* Cheek lights */}
        <div className="absolute left-2 top-1/2 w-1 h-1 rounded-full bg-[#F26B4E]" />
        <div className="absolute right-2 top-1/2 w-1 h-1 rounded-full bg-[#F26B4E]" />
      </div>
      {/* Body */}
      <div
        className="w-[60px] h-[36px] mt-1 mx-auto rounded-b-xl"
        style={{ background: 'linear-gradient(180deg, #E5DAF5, #C7B3F0)' }}
      />
    </div>
    {/* Floating chat / app icons around robot */}
    <div className="absolute left-2 top-4 w-9 h-9 rounded-lg bg-[#F26B4E] flex items-center justify-center shadow-md">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 11.5a8.4 8.4 0 01-1.2 4.4 8.5 8.5 0 01-7.3 4.1 8.4 8.4 0 01-4.4-1.2L3 21l2.2-5.1a8.4 8.4 0 01-1.2-4.4 8.5 8.5 0 014.1-7.3A8.4 8.4 0 0112.5 3h.5a8.5 8.5 0 018 8v.5z"
          stroke="white"
          strokeWidth="1.6"
        />
      </svg>
    </div>
    <div className="absolute right-3 top-2 w-8 h-8 rounded-lg bg-white shadow-md flex items-center justify-center">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#A78BFA" strokeWidth="1.6" />
        <path d="M3 7l9 6 9-6" stroke="#A78BFA" strokeWidth="1.6" />
      </svg>
    </div>
    <div className="absolute right-2 bottom-14 w-8 h-8 rounded-lg bg-[#A78BFA] flex items-center justify-center shadow-md">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.6" />
        <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div className="absolute left-3 bottom-12 w-7 h-7 rounded-lg bg-white shadow-md flex items-center justify-center">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v20M2 12h20" stroke="#F26B4E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
    <div className="absolute right-12 bottom-2 w-7 h-7 rounded-lg bg-[#FFE8E1] flex items-center justify-center shadow-md">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
          stroke="#F26B4E"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </div>
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
        {/* Header — split: heading left, description right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FFE8E1] text-[#F26B4E] text-[11px] font-medium mb-5">
              What We Build
            </span>
            <h2 className="text-[36px] lg:text-[40px] leading-[44px] font-semibold text-[#0F1112] tracking-[-0.01em]">
              Creating the Future of Your
              <br />
              <span className="italic font-semibold">Digital Presence</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-[#484848] text-[14px] leading-[22px] lg:text-right">
              SaaS products, custom web platforms, mobile apps, and AI agents.
              From-scratch builds with publicized scope, fixed pricing, and a
              committed delivery date.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="space-y-5">
          {services.map((s) => (
            <article
              key={s.number}
              className="rounded-[20px] px-8 lg:px-10 py-7 lg:py-8 flex flex-col sm:flex-row items-center gap-8 transition-transform hover:-translate-y-0.5 overflow-hidden"
              style={{ backgroundColor: s.bg }}
            >
              <div className="flex-1 max-w-[520px]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[20px] font-semibold text-[#0F1112]/55 leading-none">
                    {s.number}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="#0F1112"
                      strokeOpacity="0.55"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="text-[22px] font-semibold leading-7 text-[#0F1112]">
                    {s.title}
                  </h3>
                </div>
                <p className="text-[13px] leading-[22px] text-[#484848]">
                  {s.description}
                </p>
                <button className="mt-6 inline-flex items-center gap-2 px-4 h-9 rounded-full bg-white text-[#0F1112] text-[12px] font-medium shadow-[0_1px_3px_rgba(15,17,18,0.08)] hover:shadow-[0_4px_10px_rgba(15,17,18,0.12)] transition-shadow">
                  View More Details
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M3.5 8.5l5-5M4.5 3.5h4v4"
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
