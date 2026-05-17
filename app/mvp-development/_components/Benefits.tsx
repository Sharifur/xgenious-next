'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const items = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    ),
    title: 'Faster Product Validation',
    body: 'Launch with core features quickly to test your idea in the real market and collect valuable user insights early.',
    image: '/images/web-app-dev/card-b2b.jpg',
    imageBg: 'linear-gradient(160deg, #f5f0e8 0%, #d4e8d0 100%)',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'Reduced Development Risk',
    body: 'Validate assumptions before committing full budget. Ship only what the market confirms — cut waste, keep momentum.',
    image: '/images/web-app-dev/card-enterprise.jpg',
    imageBg: 'linear-gradient(160deg, #e8eaf5 0%, #c8d0e8 100%)',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2"/>
        <path d="M2 10h20"/>
      </svg>
    ),
    title: 'Smarter Budget Planning',
    body: 'Fixed-price engagements with a committed scope. No runaway costs, no mid-sprint surprises — spend where it counts.',
    image: '/images/web-app-dev/card-internal.jpg',
    imageBg: 'linear-gradient(160deg, #f0f5e8 0%, #d4e8c8 100%)',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" x2="18" y1="20" y2="10"/>
        <line x1="12" x2="12" y1="20" y2="4"/>
        <line x1="6" x2="6" y1="20" y2="14"/>
      </svg>
    ),
    title: 'Continuous Product Growth',
    body: 'Clean architecture from day one means v2 is an extension, not a rewrite. Build fast, scale confidently.',
    image: '/images/web-app-dev/card-pwa.jpg',
    imageBg: 'linear-gradient(160deg, #f5e8f0 0%, #e8c8d8 100%)',
  },
];

export default function Benefits() {
  const [open, setOpen] = useState(0);
  const active = items[open];

  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-12 sm:gap-16 items-center">

        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center max-w-[640px]">
          <h2 className="font-semibold text-[#0f1112] text-[26px] leading-[34px] sm:text-[36px] sm:leading-[44px] lg:text-[48px] lg:leading-[56px]">
            Benefits of MVP Development<br />for Faster Growth
          </h2>
          <p className="text-[#484848] text-[14px] leading-[22px] sm:text-[16px] sm:leading-[24px]">
            Launch faster, validate your idea early, and reduce development risk
            with a strategic MVP built for real market growth.
          </p>
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch">

          {/* Left — animated image */}
          <div
            className="rounded-[20px] overflow-hidden relative aspect-[4/3] lg:aspect-auto lg:min-h-[460px]"
            style={{ background: active.imageBg }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={active.image}
                src={active.image}
                alt={active.title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              />
            </AnimatePresence>
          </div>

          {/* Right — accordion */}
          <div
            className="rounded-[20px] flex flex-col divide-y divide-[#ebebeb] p-2 sm:p-3"
            style={{ background: '#f5f6f8' }}
          >
            {items.map((item, i) => (
              <button
                key={item.title}
                onClick={() => setOpen(i)}
                className="flex flex-col gap-3 text-left px-4 sm:px-5 py-5 sm:py-6 transition-colors focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200"
                    style={{
                      background: open === i ? '#fde8e5' : '#ebe9e9',
                      color:      open === i ? '#ec7161' : '#6b6b6b',
                    }}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="font-semibold text-[15px] sm:text-[17px] leading-[24px]"
                    style={{ color: '#0f1112' }}
                  >
                    {item.title}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="text-[#484848] text-[13px] sm:text-[14px] leading-[21px] pl-12 overflow-hidden"
                    >
                      {item.body}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
