'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Screenshot {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface Props {
  screenshots: Screenshot[];
  demoUrl: string;
}

export default function ScreenshotGallery({ screenshots, demoUrl }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive(i => (i !== null ? (i - 1 + screenshots.length) % screenshots.length : null)), [screenshots.length]);
  const next = useCallback(() => setActive(i => (i !== null ? (i + 1) % screenshots.length : null)), [screenshots.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {screenshots.map((shot, i) => (
          <button
            key={shot.src}
            onClick={() => setActive(i)}
            className="group text-left rounded-2xl border border-[#E5E7EC] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_24px_rgba(79,70,229,0.12)] hover:border-[#c7d2fe] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4f46e5]"
          >
            <div className="relative overflow-hidden bg-[#f8f9fc] h-[220px]">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#0f111220]">
                <span className="inline-flex items-center gap-1.5 bg-white text-[#0F1112] text-[12px] font-semibold px-4 py-2 rounded-full shadow-lg">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  View full screen
                </span>
              </div>
            </div>
            <div className="px-4 py-3.5 bg-white border-t border-[#E5E7EC]">
              <p className="text-[13px] font-semibold text-[#0F1112]">{shot.title}</p>
              <p className="text-[12px] text-[#6b7280] mt-0.5 leading-[1.5]">{shot.description}</p>
            </div>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(10,10,20,0.88)' }}
          onClick={close}
        >
          <div
            className="relative w-full max-w-[92vw] max-h-[92vh] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div>
                <p className="text-white text-[14px] font-semibold leading-tight">{screenshots[active].title}</p>
                <p className="text-[#94a3b8] text-[12px] mt-0.5">{active + 1} / {screenshots.length}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium rounded-full px-4 py-1.5 bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polygon points="10,8 16,12 10,16" fill="currentColor"/>
                  </svg>
                  Open Demo
                </a>
                <button
                  onClick={close}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={screenshots[active].src}
                alt={screenshots[active].alt}
                width={1440}
                height={900}
                className="w-full h-auto max-h-[80vh] object-contain"
                priority
              />
            </div>

            {/* Prev / Next */}
            <button
              onClick={prev}
              className="absolute left-[-48px] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-[-48px] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
