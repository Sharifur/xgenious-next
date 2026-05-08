'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How fast can you actually ship a SaaS MVP?',
    a: 'Our fixed-scope MVP packages run 8–12 weeks from signed agreement to production. We publish the milestone list on day one so there are no sprint surprises.',
  },
  {
    q: "What does the fixed price cover — and what's excluded?",
    a: 'The fixed price covers everything in the agreed scope: design, development, testing, and deployment. Changes outside scope are quoted separately before any work begins.',
  },
  {
    q: 'Where will my customer data be hosted?',
    a: 'By default we deploy to AWS in the region you specify (EU, US, GCC). We can accommodate GDPR, HIPAA, and local data-residency requirements from day one.',
  },
  {
    q: 'Do you sign GDPR DPAs? What about HIPAA?',
    a: 'Yes to both. A GDPR Data Processing Agreement is standard on every engagement. HIPAA Business Associate Agreements are available on request at no extra cost.',
  },
  {
    q: 'Can we work under NDA before sharing our idea?',
    a: 'Absolutely. We sign NDAs before any detailed discussions. Send us a request and we will have it back to you within one business day.',
  },
  {
    q: 'What happens after launch — do you offer support retainers?',
    a: 'Every plan includes a post-launch support window. After that you can move to a monthly retainer for feature work, infrastructure management, and on-call SRE.',
  },
  {
    q: 'Do you build for GCC / Middle East markets specifically?',
    a: 'Yes. We have active clients in UAE and KSA, support Mada, Tabby, Tamara, and STC Pay integrations, and can provision data-residency inside the Kingdom.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number>(1);

  return (
    <section className="py-[120px] bg-white">
      <div className="container-page flex flex-col gap-[72px] items-center">
        <div className="flex flex-col items-center gap-4 text-center max-w-[621px]">
          <div
            className="inline-flex items-center px-4 py-[6px] rounded-[165px]"
            style={{ background: 'rgba(242,107,78,0.12)' }}
          >
            <span className="text-[#ec7161] font-normal" style={{ fontSize: 16, lineHeight: '24px' }}>
              Frequently Asked &amp; Questions
            </span>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-[#0f1112] font-semibold" style={{ fontSize: 44, lineHeight: '52px' }}>
              Real Questions, Real Answer
            </h2>
            <p className="text-[#484848] font-normal" style={{ fontSize: 16, lineHeight: '24px', maxWidth: 492 }}>
              The questions every SaaS buyer actually asks. If yours isn&apos;t here, ask it on the call — we will answer it honestly.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-[4px] bg-[#f5f6f8] overflow-hidden">
                <button
                  className="w-full flex items-center justify-between text-left px-4 py-4 gap-4"
                  style={{ minHeight: 56 }}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="font-medium" style={{ fontSize: 20, lineHeight: '28px', color: '#0f1112' }}>
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <div className="relative flex-shrink-0 w-8 h-8">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/web-app-dev/faq-icon-up-bg.svg" alt="" className="absolute inset-0 w-full h-full" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/web-app-dev/faq-icon-up-frame.svg" alt="" className="absolute inset-[4px] w-6 h-6 rotate-180" />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-[16px] flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/web-app-dev/faq-icon-down.svg" alt="" width={16} height={16} />
                    </div>
                  )}
                </button>
                {isOpen && (
                  <p className="font-normal px-4 pb-4" style={{ fontSize: 18, lineHeight: '26px', color: '#2f2f2f' }}>
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
