'use client';

import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  {
    q: 'What are product design services?',
    a: 'Product design services encompass a comprehensive set of strategies, methodologies, and creative processes aimed at conceiving, developing, and refining digital or physical products to meet user needs and business goals.',
  },
  {
    q: 'How long does it take to build a mobile app?',
    a: 'Timeline depends on complexity. A simple MVP typically takes 8–12 weeks. Full-featured apps with complex backends can take 4–6 months. We publish a milestone list on day one.',
  },
  {
    q: 'Do you build for both iOS and Android?',
    a: 'Yes. We use Flutter for cross-platform development, delivering native-quality apps for iOS, Android, and web from a single codebase — saving time and cost without sacrificing quality.',
  },
  {
    q: 'What happens after the app launches?',
    a: 'Every engagement includes a post-launch support window. After that you can move to a monthly retainer for feature work, infrastructure management, and on-call SRE.',
  },
  {
    q: 'Can we work under NDA before sharing our idea?',
    a: 'Absolutely. We sign NDAs before any detailed discussions. Send us a request and we will have it back to you within one business day.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(1);

  return (
    <section className="py-[120px] bg-white">
      <div className="container-page flex items-start gap-[120px]">
        {/* Left */}
        <div className="flex flex-col gap-8 flex-shrink-0" style={{ maxWidth: 420 }}>
          <h2
            className="text-[#26302b] font-semibold capitalize"
            style={{ fontSize: 64, lineHeight: '72px' }}
          >
            Development<br />Questions<br />Answered
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold text-white rounded-[30px] self-start transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(236,113,97,0.4)]"
            style={{ background: '#ec7161', padding: '22px 32px', fontSize: 16 }}
          >
            Ask Questions
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M7 13H19M19 13L14 8M19 13L14 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Right accordion */}
        <div className="flex flex-col gap-4 flex-1">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b" style={{ borderColor: '#e7e7e7' }}>
                <button
                  className="w-full flex items-center justify-between text-left py-5 gap-4"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="font-semibold" style={{ fontSize: 20, lineHeight: '28px', color: '#26302b' }}>
                    {faq.q}
                  </span>
                  <div
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full"
                    style={{
                      background: isOpen ? '#ec7161' : '#f5f6f8',
                      transition: 'background 0.2s',
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                    >
                      <path d="M3 5L8 10L13 5" stroke={isOpen ? 'white' : '#26302b'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                {isOpen && (
                  <p
                    className="font-normal pb-5"
                    style={{ fontSize: 18, lineHeight: '26px', color: '#484848' }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
