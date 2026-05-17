type DayProps = {
  num: string;
  variant: 'prev' | 'weekday' | 'weekend' | 'selected' | 'available-weekend';
};

function Day({ num, variant }: DayProps) {
  const styles: Record<DayProps['variant'], { bg: string; color: string; fontWeight: number }> = {
    prev: { bg: '#f5f6f8', color: '#8a8f99', fontWeight: 400 },
    weekday: { bg: '#ececf3', color: '#f26b4e', fontWeight: 600 },
    weekend: { bg: '#f5f6f8', color: '#8a8f99', fontWeight: 400 },
    selected: { bg: '#f26b4e', color: '#fff', fontWeight: 700 },
    'available-weekend': { bg: '#f5efff', color: '#8a8f99', fontWeight: 400 },
  };
  const s = styles[variant];
  return (
    <div
      className="flex items-center justify-center rounded-[6px]"
      style={{ background: s.bg, aspectRatio: '1', padding: '22px 0' }}
    >
      <span style={{ fontSize: 12, lineHeight: '18px', color: s.color, fontWeight: s.fontWeight }}>
        {num}
      </span>
    </div>
  );
}

const calendarDays: { num: string; variant: DayProps['variant'] }[] = [
  // Row 1 header rendered separately
  // Row 2: prev month overflow + April 1-5
  { num: '30', variant: 'prev' },
  { num: '31', variant: 'prev' },
  { num: '1', variant: 'weekday' },
  { num: '2', variant: 'weekday' },
  { num: '3', variant: 'weekday' },
  { num: '4', variant: 'weekend' },
  { num: '5', variant: 'weekend' },
  // Row 3: 6-12
  { num: '6', variant: 'weekday' },
  { num: '7', variant: 'weekday' },
  { num: '8', variant: 'weekday' },
  { num: '9', variant: 'selected' },
  { num: '10', variant: 'weekday' },
  { num: '11', variant: 'available-weekend' },
  { num: '12', variant: 'available-weekend' },
  // Row 4: 13-19
  { num: '13', variant: 'weekday' },
  { num: '14', variant: 'weekday' },
  { num: '15', variant: 'weekday' },
  { num: '16', variant: 'weekday' },
  { num: '17', variant: 'weekday' },
  { num: '18', variant: 'available-weekend' },
  { num: '19', variant: 'available-weekend' },
  // Row 5: 20-26
  { num: '20', variant: 'weekday' },
  { num: '21', variant: 'weekday' },
  { num: '22', variant: 'weekday' },
  { num: '23', variant: 'weekday' },
  { num: '24', variant: 'weekday' },
  { num: '25', variant: 'available-weekend' },
  { num: '26', variant: 'weekend' },
  // Row 6: 27-30
  { num: '27', variant: 'weekday' },
  { num: '28', variant: 'weekday' },
  { num: '29', variant: 'weekday' },
  { num: '30', variant: 'weekday' },
];

const timeSlots = ['10:00 AM', '10:30 AM', '2:00 PM', '2:30 PM', '4:00 PM', '4:30 PM'];

export default function BookCall() {
  return (
    <section className="py-14 sm:py-20 lg:py-[120px]" style={{ background: '#f5f6f8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col lg:flex-row lg:gap-[140px] lg:items-start gap-10">
        {/* Left panel */}
        <div className="flex flex-col gap-6 lg:gap-8 flex-shrink-0 w-full lg:max-w-[560px]">
          {/* Avatar + name */}
          <div className="flex items-center gap-4">
            <div className="w-[92px] h-[92px] rounded-full overflow-hidden flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/saas-dev/book-call-avatar.png" alt="Kamrul Ibn Zaman" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium text-[#181818]" style={{ fontSize: 28, lineHeight: '36px' }}>
                Kamrul Ibn Zaman
              </p>
              <p className="font-normal text-[#515151]" style={{ fontSize: 18, lineHeight: '27px' }}>
                Project Manager
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-[#0f1112] font-semibold text-[26px] leading-[34px] sm:text-[34px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px]">
              Book a 30-min SaaS strategy call.
            </h2>
            <p className="text-[#2f2f2f] font-normal" style={{ fontSize: 16, lineHeight: '24px' }}>
              No Sales pitch. No obligation. Come with a problem—leave with a concrete next step, a realistic budget range, and an honest read on whether we&apos;re the right fit.
            </p>
          </div>

          {/* Bullets */}
          <div className="flex flex-col">
            {[
              '30 minutes · video or audio',
              'Signed mutual NDA inside 24h',
              'Written follow-up with a scope sketch',
            ].map((item) => (
              <div key={item} className="flex items-center gap-[10px] py-2">
                <div className="flex-shrink-0 w-5 h-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/saas-dev/book-call-check.svg" alt="" className="w-full h-full object-contain" />
                </div>
                <span className="text-[#2f2f2f] font-normal" style={{ fontSize: 16, lineHeight: '24px' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right calendar panel */}
        <div className="bg-white rounded-[12px] p-5 sm:p-8 flex-shrink-0 flex flex-col gap-5 w-full lg:w-[620px]">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#0c0c0e]" style={{ fontSize: 16, lineHeight: '24px' }}>
              Pick a time
            </span>
            <div className="flex items-center gap-1">
              <span className="font-normal text-[#8a8f99]" style={{ fontSize: 12, lineHeight: '18px' }}>
                April 2026
              </span>
              <div className="w-4 h-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/saas-dev/book-call-cal-arrow.svg" alt="" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {/* Day headers */}
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
              <div key={`h${i}`} className="flex items-center justify-center py-4">
                <span
                  className="font-bold uppercase tracking-[0.8px] text-[#8a8f99]"
                  style={{ fontSize: 12, lineHeight: '16px' }}
                >
                  {d}
                </span>
              </div>
            ))}
            {/* Days */}
            {calendarDays.map((d, i) => (
              <Day key={i} {...d} />
            ))}
          </div>

          {/* Time slots */}
          <div
            className="grid grid-cols-2 gap-2 pt-5"
            style={{ borderTop: '1px solid #e7e7e7' }}
          >
            {timeSlots.map((t) => (
              <div
                key={t}
                className="flex items-center justify-center rounded-[10px] py-[11px]"
                style={{ border: '1px solid #e7e7e7' }}
              >
                <span className="font-medium text-[#181818]" style={{ fontSize: 13, lineHeight: '19.5px' }}>
                  {t}
                </span>
              </div>
            ))}
          </div>

          {/* Confirm button */}
          <button
            className="flex items-center justify-center gap-2 w-full rounded-[30px] py-4 font-semibold text-white"
            style={{ background: '#ec7161', fontSize: 16, lineHeight: '24px' }}
          >
            Confirm 2:00 PM, April 9
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
