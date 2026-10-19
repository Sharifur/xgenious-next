'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COLOR, DOCS_URL } from './constants';
import { FAQS, type Faq } from './faqs';

function Answer({ faq }: { faq: Faq }) {
  if (!faq.link) return <>{faq.a}</>;
  const [before, after] = faq.a.split(faq.link.label);
  return (
    <>
      {before}
      <Link href={faq.link.href} className="underline underline-offset-2" style={{ color: COLOR }}>{faq.link.label}</Link>
      {after}
    </>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="pb-20 lg:pb-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="max-w-[760px] mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-[#6b7280] text-[15px] leading-6">
              Everything you need to know before purchasing Helpnest.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#E5E7EC] overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
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
                  style={{ maxHeight: open === i ? '600px' : '0px' }}
                >
                  <p className="px-6 pb-5 text-[14px] text-[#484848] leading-7"><Answer faq={faq} /></p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: '#0d0f14' }}
          >
            <div>
              <p className="text-white font-semibold text-[16px] mb-1">Still have questions?</p>
              <p className="text-[#6b7280] text-[14px]">Check the documentation or open a pre-sale ticket.</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href={DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold px-4 py-2 rounded-full border transition-colors"
                style={{ borderColor: '#2d2d3a', color: COLOR }}
              >
                Documentation
              </a>
              <Link
                href="/contact"
                className="text-[13px] font-semibold px-4 py-2 rounded-full text-white"
                style={{ background: COLOR }}
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#E5E7EC] flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#6b7280]">
            <span>Related:</span>
            <Link href="/products/xilancer-freelancer-marketplace-script" className="hover:underline" style={{ color: COLOR }}>Xilancer — Freelancer Marketplace</Link>
            <Link href="/products/nazmart-multi-tenancy-ecommerce-platform" className="hover:underline" style={{ color: COLOR }}>Nazmart — Multi-Tenant eCommerce</Link>
            <Link href="/free-software/genius-support" className="hover:underline" style={{ color: COLOR }}>Genius Support — Free Open-Source Ticketing</Link>
            <Link href="/case-studies/ai-support-saas-platform" className="hover:underline" style={{ color: COLOR }}>AI Customer Support SaaS Case Study</Link>
            <Link href="/custom-saas-development-company" className="hover:underline" style={{ color: COLOR }}>Custom SaaS Development</Link>
            <a href="https://en.wikipedia.org/wiki/Chatbot" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:underline">Chatbot — Wikipedia ↗</a>
          </div>

        </div>
      </div>
    </section>
  );
}
