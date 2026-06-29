'use client';

import { useState } from 'react';
import { COLOR, COLOR_DARK, FAQS } from './constants';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="max-w-[820px] mx-auto">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
              FAQ
            </div>
            <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.question} className="rounded-2xl border overflow-hidden transition-all" style={{ borderColor: isOpen ? COLOR : '#E5E7EC', background: isOpen ? '#faf5ff' : '#fff' }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4.5 py-5"
                  >
                    <span className="text-[15px] font-bold text-[#0F1112]">{faq.question}</span>
                    <svg
                      width="20" height="20" viewBox="0 0 24 24" fill="none"
                      className="flex-shrink-0 transition-transform"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}
                    >
                      <path d="M12 5v14M5 12h14" stroke={isOpen ? COLOR : '#9ca3af'} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 -mt-1">
                      <p className="text-[14px] leading-7" style={{ color: COLOR_DARK }}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
