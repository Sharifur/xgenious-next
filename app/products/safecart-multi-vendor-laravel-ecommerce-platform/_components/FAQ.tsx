'use client';

import { useState } from 'react';
import { COLOR, FAQS } from './constants';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[580px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            FAQ
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#4b5563] text-[15px] leading-7">
            Everything you need to know before buying SafeCart.
          </p>
        </div>

        <div className="max-w-[800px] mx-auto flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-[#E5E7EC] overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-[15px] text-[#0F1112] hover:bg-[#f9fafb] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.question}</span>
                <svg
                  className="flex-shrink-0 transition-transform"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'none', color: COLOR }}
                  width="18" height="18" viewBox="0 0 24 24" fill="none"
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[14px] text-[#4b5563] leading-7 border-t border-[#E5E7EC]">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
