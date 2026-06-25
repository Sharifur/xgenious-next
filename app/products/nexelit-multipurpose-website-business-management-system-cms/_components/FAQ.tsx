'use client';

import { useState } from 'react';
import { COLOR, FAQS } from './constants';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[580px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            FAQ
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Everything you need to know before buying Nexelit.
          </p>
        </div>

        <div className="max-w-[780px] mx-auto flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={faq.question}
              className="rounded-2xl border transition-all"
              style={{ borderColor: open === i ? `${COLOR}30` : '#E5E7EC', background: open === i ? `${COLOR}06` : '#fff' }}
            >
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[15px] font-semibold text-[#0F1112]">{faq.question}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0 transition-transform"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', color: COLOR }}
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-[14px] text-[#4b5563] leading-7">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
