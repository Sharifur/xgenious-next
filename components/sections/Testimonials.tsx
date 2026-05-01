'use client';

import { useState } from 'react';
import { testimonials, type Testimonial } from '@/data/saas-page';

const QuoteMark = () => (
  <svg width="36" height="28" viewBox="0 0 32 24" fill="none">
    <path
      d="M0 24V14C0 7 4 2 11 0L13 4C8 6 6 9 6 14H12V24H0zm19 0V14c0-7 4-12 11-14l2 4c-5 2-7 5-7 10h6v10H19z"
      fill="#0F1112"
    />
  </svg>
);

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="rounded-2xl bg-[#F5F6F8] flex overflow-hidden h-[340px]">
      {/* Left — quote */}
      <div className="flex-1 p-8 flex flex-col">
        <QuoteMark />
        <p className="mt-6 text-[15px] text-[#2F2F2F] leading-[24px] flex-1">{t.quote}</p>
        <div className="mt-6 pt-5 border-t border-[#E5E7EC]">
          <p className="text-[16px] font-semibold text-[#0F1112]">{t.name}</p>
          <p className="text-[12px] text-[#8A8F99] mt-0.5">{t.role}</p>
        </div>
      </div>

      {/* Right — photo placeholder */}
      <div className="w-[44%] relative" style={{ background: t.photoBg }}>
        {/* Simple silhouette placeholder */}
        <svg viewBox="0 0 200 340" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="grad" cx="50%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#A6A6A6" />
              <stop offset="100%" stopColor={t.photoBg} />
            </radialGradient>
          </defs>
          <rect width="200" height="340" fill="url(#grad)" />
          {/* Head */}
          <circle cx="100" cy="125" r="40" fill="#5A5A5A" />
          {/* Shoulders */}
          <path d="M 30 340 C 30 250, 60 200, 100 195 C 140 200, 170 250, 170 340 Z" fill="#5A5A5A" />
        </svg>

        {/* Play button overlay */}
        <button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          aria-label="Play testimonial"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 2l9 5-9 5V2z" fill="#0F1112" />
          </svg>
        </button>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 2;
  const maxPage = Math.max(0, Math.ceil(testimonials.length / perPage) - 1);
  const start = page * perPage;
  const visible = testimonials.slice(start, start + perPage);

  return (
    <section className="py-24 bg-white">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-[44px] leading-[52px] font-semibold text-[#0F1112] tracking-[-0.01em] max-w-[460px]">
            Where Feedback Meets{' '}
            <span className="italic font-semibold">Excellence</span>
          </h2>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-11 h-11 rounded-full bg-[#F5F6F8] flex items-center justify-center text-[#0F1112] hover:bg-[#FFE8E1] disabled:opacity-40 disabled:hover:bg-[#F5F6F8] transition-colors"
              aria-label="Previous"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
              disabled={page >= maxPage}
              className="w-11 h-11 rounded-full bg-[#0F1112] flex items-center justify-center text-white hover:bg-[#F26B4E] disabled:opacity-40 disabled:hover:bg-[#0F1112] transition-colors"
              aria-label="Next"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {visible.map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
