'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COLOR, FAQS, DOCS_URL, DEPLOY_GUIDE_URL, PUBLIC_API_URL } from './constants';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 bg-[#f9fafb]">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">

            <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112] text-center mb-10">
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col gap-3">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-[#E5E7EC] overflow-hidden"
                >
                  <button
                    className="cursor-pointer w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="text-[15px] font-semibold text-[#0F1112]">{faq.q}</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="flex-shrink-0 transition-transform duration-200"
                      style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <path d="M6 9l6 6 6-6" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: open === i ? '400px' : '0px' }}
                  >
                    <p className="px-6 pb-5 text-[14px] text-[#484848] leading-7">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{ background: '#0B0C0F' }}
            >
              <div>
                <p className="text-white font-semibold text-[16px] mb-1">Still have questions?</p>
                <p className="text-[#9AA1AD] text-[14px]">Check the docs or open a ticket — we&apos;ll help directly.</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href={DOCS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-[13px] font-semibold px-4 py-2 rounded-full border transition-colors"
                  style={{ borderColor: '#262A33', color: COLOR }}
                >
                  Documentation
                </a>
                <Link
                  href="/contact"
                  className="cursor-pointer text-[13px] font-semibold px-4 py-2 rounded-full text-white"
                  style={{ background: COLOR }}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#E5E7EC] flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#6b7280]">
              <span>Resources:</span>
              <a href={DEPLOY_GUIDE_URL} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: COLOR }}>Deployment Guide</a>
              <a href={PUBLIC_API_URL} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: COLOR }}>Public API Reference</a>
              <Link href="/free-software/genius-debug" className="hover:underline" style={{ color: COLOR }}>Genius Debug — Self-Hosted Sentry Alternative</Link>
              <Link href="/free-software/genius-support" className="hover:underline" style={{ color: COLOR }}>Genius Support — Free Helpdesk</Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
