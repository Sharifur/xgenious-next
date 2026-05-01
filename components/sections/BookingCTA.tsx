'use client';

import Script from 'next/script';

export default function BookingCTA() {
  return (
    <section id="contact" className="py-24 bg-white">
      <Script src="https://asset.cal.com/embed/embed.js" strategy="lazyOnload" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="rounded-[24px] bg-[#F5F6F8] border border-[#E5E7EC] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left - Person info */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-[#F26B4E] mb-4">
                Book a Call
              </span>
              <h2 className="text-[36px] lg:text-[40px] leading-[44px] font-semibold text-[#0F1112] tracking-[-0.01em]">
                Book a 30-min SaaS{' '}
                <span className="italic font-semibold">strategy call.</span>
              </h2>
              <p className="mt-5 text-[#484848] text-[15px] leading-6">
                No sales pitch. Bring your idea, your current problem, or even
                just your questions. We&apos;ll tell you honestly whether we&apos;re the
                right team for it.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFE8E1] to-[#F26B4E]/60 flex items-center justify-center text-xl font-bold text-white flex-shrink-0">
                  S
                </div>
                <div>
                  <p className="font-semibold text-[#0F1112]">Sharifur Rahman</p>
                  <p className="text-[13px] text-[#8A8F99]">Founder &amp; CEO, Xgenious</p>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {[
                  '30-minute focused session',
                  'No commitment required',
                  'Honest advice, not a pitch',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14px] text-[#2F2F2F]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="#F26B4E" strokeWidth="1.5" />
                      <path d="M5 8l2 2 4-4" stroke="#F26B4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-10 inline-flex items-center justify-center gap-2 self-start px-7 h-12 rounded-full bg-[#F26B4E] text-white font-semibold text-[14px] hover:bg-[#EC7161] transition-colors"
              >
                Schedule Your Call
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Right - Cal.com embed */}
            <div className="bg-white border-l border-[#E5E7EC] p-6 lg:p-8 min-h-96 flex flex-col">
              <div
                data-cal-link="sharifur/saas-strategy"
                data-cal-config='{"layout":"month_view","theme":"light"}'
                className="flex-1 min-h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
