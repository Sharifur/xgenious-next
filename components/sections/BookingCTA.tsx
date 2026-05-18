'use client';
import Image from 'next/image';
import { IconArrowRight, IconChevronDown } from '@tabler/icons-react';

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const calendar: Array<{ d: number; state: 'avail' | 'unavail' | 'selected' | '' }> = [
  { d: 0, state: '' }, { d: 0, state: '' }, { d: 1, state: 'avail' }, { d: 2, state: 'avail' }, { d: 3, state: 'avail' }, { d: 4, state: 'avail' }, { d: 5, state: 'avail' },
  { d: 6, state: 'avail' }, { d: 7, state: 'avail' }, { d: 8, state: 'avail' }, { d: 9, state: 'unavail' }, { d: 10, state: 'avail' }, { d: 11, state: 'avail' }, { d: 12, state: 'avail' },
  { d: 13, state: 'avail' }, { d: 14, state: 'unavail' }, { d: 15, state: 'avail' }, { d: 16, state: 'selected' }, { d: 17, state: 'avail' }, { d: 18, state: 'avail' }, { d: 19, state: 'avail' },
  { d: 20, state: 'avail' }, { d: 21, state: 'avail' }, { d: 22, state: 'avail' }, { d: 23, state: 'avail' }, { d: 24, state: 'avail' }, { d: 25, state: 'avail' }, { d: 26, state: 'avail' },
  { d: 27, state: 'avail' }, { d: 28, state: 'avail' }, { d: 29, state: 'avail' }, { d: 30, state: 'avail' }, { d: 0, state: '' }, { d: 0, state: '' }, { d: 0, state: '' },
];
const times = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'];

function CalendarMock() {
  return (
    <div className="rounded-2xl bg-white border border-[#E5E7EC] p-4 sm:p-6 shadow-[0_8px_28px_rgba(15,17,18,0.12)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <span className="text-[13px] sm:text-[14px] font-semibold text-[#0F1112]">Pick a time</span>
        <button className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-[#8A8F99]">
          April 2
          <IconChevronDown size={10} stroke={1.4} />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 sm:gap-1.5 mb-1 sm:mb-1.5">
        {days.map((d, i) => (
          <div key={i} className="text-[9px] sm:text-[10px] text-[#8A8F99] text-center font-medium">
            {d}
          </div>
        ))}
      </div>

      {/* Date grid */}
      <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
        {calendar.map((c, i) => {
          if (c.state === '') return <div key={i} />;
          const cls =
            c.state === 'selected'
              ? 'bg-[#F26B4E] text-white'
              : c.state === 'unavail'
              ? 'bg-[#F5F6F8] text-[#8A8F99]'
              : 'bg-[#FFE8E1] text-[#0F1112] hover:bg-[#FFDEDA]';
          return (
            <button
              key={i}
              className={`h-7 sm:h-9 rounded text-[10px] sm:text-[12px] font-medium transition-colors ${cls}`}
            >
              {c.d}
            </button>
          );
        })}
      </div>

      {/* Time slots */}
      <div className="grid grid-cols-3 sm:grid-cols-2 gap-1 sm:gap-1.5 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#F5F6F8]">
        {times.map((t) => (
          <button
            key={t}
            className="h-7 sm:h-8 rounded border border-[#E5E7EC] text-[10px] sm:text-[11px] font-medium text-[#2F2F2F] hover:border-[#F26B4E] hover:text-[#F26B4E] transition-colors"
          >
            {t}
          </button>
        ))}
      </div>

      {/* Confirm */}
      <button className="mt-4 sm:mt-5 w-full h-10 sm:h-11 rounded-full bg-[#F26B4E] text-white text-[12px] sm:text-[13px] font-semibold flex items-center justify-center gap-2 hover:bg-[#EC7161] transition-colors">
        Confirm 2:30 PM, April 2
        <IconArrowRight size={12} stroke={1.5} />
      </button>
    </div>
  );
}

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

          {/* Right — calendar */}
          <CalendarMock />
        </div>
      </div>
    </section>
  );
}
