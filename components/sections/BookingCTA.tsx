'use client';

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
// 5 weeks of dates with availability state
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
    <div className="rounded-2xl bg-white border border-[#E5E7EC] p-6 shadow-[0_8px_28px_rgba(15,17,18,0.06)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-[14px] font-semibold text-[#0F1112]">Pick a time</span>
        <button className="flex items-center gap-1.5 text-[12px] text-[#8A8F99]">
          April 2
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1.5 mb-1.5">
        {days.map((d, i) => (
          <div key={i} className="text-[10px] text-[#8A8F99] text-center font-medium">
            {d}
          </div>
        ))}
      </div>

      {/* Date grid */}
      <div className="grid grid-cols-7 gap-1.5">
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
              className={`h-9 rounded text-[12px] font-medium transition-colors ${cls}`}
            >
              {c.d}
            </button>
          );
        })}
      </div>

      {/* Time slots */}
      <div className="grid grid-cols-2 gap-1.5 mt-4 pt-4 border-t border-[#F5F6F8]">
        {times.map((t) => (
          <button
            key={t}
            className="h-8 rounded border border-[#E5E7EC] text-[11px] font-medium text-[#2F2F2F] hover:border-[#F26B4E] hover:text-[#F26B4E] transition-colors"
          >
            {t}
          </button>
        ))}
      </div>

      {/* Confirm */}
      <button className="mt-5 w-full h-11 rounded-full bg-[#F26B4E] text-white text-[13px] font-semibold flex items-center justify-center gap-2 hover:bg-[#EC7161] transition-colors">
        Confirm 2:30 PM, April 2
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

export default function BookingCTA() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container-page">
        <div className="rounded-[24px] bg-[#F5F6F8] p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            {/* Person */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFE8E1] to-[#F26B4E]/60 flex items-center justify-center text-[12px] font-bold text-white flex-shrink-0">
                SR
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#0F1112]">Sharifur Rahman</p>
                <p className="text-[11px] text-[#8A8F99]">Founder &amp; CEO, Xgenious</p>
              </div>
            </div>

            <h2 className="text-[36px] lg:text-[40px] leading-[44px] font-semibold text-[#0F1112] tracking-[-0.01em]">
              Book a 30-min SaaS{' '}
              <span className="italic font-semibold">strategy call.</span>
            </h2>
            <p className="mt-4 text-[#484848] text-[14px] leading-[22px] max-w-[420px]">
              No Sales pitch. No obligation. Come with a problem we&apos;ve in a concrete next step,
              a realistic budget range, and an honest read on whether we&apos;re the right fit.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                '30 minutes — video or audio',
                'Signed mutual NDA inside 24h',
                'Written follow-up with a scope sketch',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[14px] text-[#2F2F2F]">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
