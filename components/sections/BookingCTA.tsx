'use client';
import Image from 'next/image';

export default function BookingCTA() {
  return (
    <section id="booking" className="py-16 sm:py-24 relative overflow-hidden bg-[#0C0C10]">
      {/* Background image — object-cover prevents stretching */}
      <Image
        src="/start-with-us-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority={false}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0A0A0C]/80" />

      {/* Decorative path overlay */}
      <Image
        src="/start-with-us-section-bg-path.png"
        alt=""
        fill
        className="object-cover object-center opacity-30 pointer-events-none"
        priority={false}
      />

      <div className="container-page relative z-10 px-4 sm:px-6 lg:px-0">
        <div className="rounded-[20px] sm:rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 lg:p-12 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* Left */}
          <div>
            {/* Person */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFE8E1] to-[#F26B4E]/60 flex items-center justify-center text-[12px] font-bold text-white flex-shrink-0">
                SR
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white">Sharifur Rahman</p>
                <p className="text-[11px] text-white/50">Founder &amp; CEO, Xgenious</p>
              </div>
            </div>

            <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] leading-[32px] sm:leading-[38px] lg:leading-[48px] font-semibold text-white tracking-[-0.01em]">
              Book a 30-min SaaS{' '}
              <span className="italic font-semibold text-[#F26B4E]">strategy call.</span>
            </h2>

            <p className="mt-4 text-white/60 text-[14px] leading-[22px] max-w-[420px]">
              No sales pitch. No obligation. Come with a problem — leave with a concrete next step,
              a realistic budget range, and an honest read on whether we&apos;re the right fit.
            </p>

            <ul className="mt-5 sm:mt-6 space-y-3">
              {[
                '30 minutes — video or audio',
                'Signed mutual NDA inside 24h',
                'Written follow-up with a scope sketch',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[14px] text-white/80">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                    <circle cx="8" cy="8" r="7" fill="#F26B4E" />
                    <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — booking embed */}
          <div className="w-full rounded-2xl overflow-hidden">
            <iframe
              src="https://crm.xgenious.com/public/meetings/book-a-30-min-saas-strategy-call"
              width="100%"
              height="500"
              frameBorder="0"
              allowFullScreen
              className="block w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
