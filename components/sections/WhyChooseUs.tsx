'use client';

import { useState } from 'react';
import Image from 'next/image';
import StatCounter from '@/components/ui/StatCounter';
import { stats, whyChooseCards } from '@/data/saas-page';

const Icons: Record<string, React.ReactElement> = {
  code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 8l-5 4 5 4M15 8l5 4-5 4"
        stroke="#E5E7EC"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  package: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
        stroke="#E5E7EC"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="#E5E7EC" strokeWidth="1.6" />
    </svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l8 4v6c0 4.5-3.4 8.6-8 10-4.6-1.4-8-5.5-8-10V6l8-4z"
        stroke="#E5E7EC"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const QuoteMark = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.3385 4C20.6313 4 19.953 4.28095 19.4529 4.78105C18.9528 5.28115 18.6719 5.95942 18.6719 6.66667V14.6667C18.6719 15.3739 18.9528 16.0522 19.4529 16.5523C19.953 17.0524 20.6313 17.3333 21.3385 17.3333C21.6922 17.3333 22.0313 17.4738 22.2814 17.7239C22.5314 17.9739 22.6719 18.313 22.6719 18.6667V20C22.6719 20.7072 22.3909 21.3855 21.8908 21.8856C21.3907 22.3857 20.7125 22.6667 20.0052 22.6667C19.6516 22.6667 19.3124 22.8071 19.0624 23.0572C18.8124 23.3072 18.6719 23.6464 18.6719 24V26.6667C18.6719 27.0203 18.8124 27.3594 19.0624 27.6095C19.3124 27.8595 19.6516 28 20.0052 28C22.1269 28 24.1618 27.1571 25.6621 25.6569C27.1624 24.1566 28.0052 22.1217 28.0052 20V6.66667C28.0052 5.95942 27.7243 5.28115 27.2242 4.78105C26.7241 4.28095 26.0458 4 25.3385 4H21.3385Z" stroke="#FFD6A7" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66667 4C5.95942 4 5.28115 4.28095 4.78105 4.78105C4.28095 5.28115 4 5.95942 4 6.66667V14.6667C4 15.3739 4.28095 16.0522 4.78105 16.5523C5.28115 17.0524 5.95942 17.3333 6.66667 17.3333C7.02029 17.3333 7.35943 17.4738 7.60948 17.7239C7.85952 17.9739 8 18.313 8 18.6667V20C8 20.7072 7.71905 21.3855 7.21895 21.8856C6.71885 22.3857 6.04058 22.6667 5.33333 22.6667C4.97971 22.6667 4.64057 22.8071 4.39052 23.0572C4.14048 23.3072 4 23.6464 4 24V26.6667C4 27.0203 4.14048 27.3594 4.39052 27.6095C4.64057 27.8595 4.97971 28 5.33333 28C7.45507 28 9.4899 27.1571 10.9902 25.6569C12.4905 24.1566 13.3333 22.1217 13.3333 20V6.66667C13.3333 5.95942 13.0524 5.28115 12.5523 4.78105C12.0522 4.28095 11.3739 4 10.6667 4H6.66667Z" stroke="#FFD6A7" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function WhyChooseUs() {
  const [activeIdx, setActiveIdx] = useState(1);

  return (
    <section className="py-24 bg-[#0C0C0E] relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 50% at 90% 30%, rgba(242,107,78,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Overlay bg — bottom right */}
      <div className="absolute bottom-0 right-0 pointer-events-none">
        <Image src="/overlaybg.svg" alt="" width={600} height={600} className="opacity-100" />
      </div>

      <div className="container-page relative">
        <div className="text-center mb-14 max-w-[640px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFE8E1]/15 border border-[#F26B4E]/30 text-[#F26B4E] text-[12px] font-medium mb-5">
            Why Mid-Market Team Pick Us
          </span>
          <h2 className="text-[44px] leading-[52px] font-semibold text-white tracking-[-0.01em]">
            Built for Your{' '}
            <span className="italic font-semibold">Digital Future</span>
          </h2>
          <p className="mt-4 text-[#A6A6A6] text-[15px] leading-6 max-w-[460px] mx-auto">
            We don&apos;t just build software for others — we create and operate our own digital
            products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          {whyChooseCards.map((card, i) => {
            const isActive = activeIdx === i;
            return (
              <article
                key={card.title}
                className="relative rounded-2xl p-7 flex flex-col transition-all cursor-default"
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(1)}
                style={
                  isActive
                    ? {
                        // 1px linear-gradient border (BABABA → 170E0D) on a #2F2F2F card body.
                        // Achieved via two stacked backgrounds with different background-clips
                        // so rounded corners are preserved.
                        background:
                          'linear-gradient(#2F2F2F, #2F2F2F) padding-box, linear-gradient(180deg, #BABABA 0%, #170E0D 100%) border-box',
                        border: '1px solid transparent',
                      }
                    : {
                        background: '#131418',
                        border: '1px solid #1F2127',
                      }
                }
              >
                <div className="w-10 h-10 rounded-lg bg-[#434343] flex items-center justify-center mb-6">
                  {Icons[card.icon]}
                </div>
                <h3 className="text-[18px] font-semibold text-white leading-[26px] mb-3">
                  {card.title}
                </h3>
                <p className="text-[13px] text-[#A6A6A6] leading-[20px] mb-6 flex-1">
                  {card.body}
                </p>

                {/* Nested quote card */}
                <div
                  className="rounded-xl p-4 relative"
                  style={
                    isActive
                      ? {
                          background: '#FFFFFF',
                          borderLeft: '3px solid #F26B4E',
                        }
                      : {
                          background: '#2F2F2F',
                          borderLeft: '3px solid #BABABA',
                        }
                  }
                >
                  <p
                    className={`text-[12px] italic leading-[18px] pr-10 mb-2 ${
                      isActive ? 'text-[#2F2F2F]' : 'text-[#E5E7EC]'
                    }`}
                  >
                    &ldquo;{card.quote}&rdquo;
                  </p>
                  <div className="absolute top-3 right-3">
                    <QuoteMark />
                  </div>
                  <p className="text-[11px] font-medium text-[#F26B4E] mt-3">
                    — {card.quoteAttribution}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* 4 stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-[#161616] border border-[#1F2127] p-7 flex flex-col"
            >
              <span className="text-[12px] font-medium text-[#8A8F99] mb-[120px]">
                {stat.number}/
              </span>
              <div className="flex items-baseline gap-1">
                <StatCounter value={stat.value} suffix="" label="" />
                <span className="text-[28px] font-medium text-[#A6A6A6] leading-none">
                  {stat.suffix}
                </span>
              </div>
              <span className="mt-2 text-[13px] text-[#A6A6A6] font-medium">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
