const stats = [
  {
    value: '4',
    label: 'founders raised follow-on funding after shipping their MVP with us',
    glowDelay: '0s',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2.09 4.26L17 7.27l-3.5 3.41.83 4.82L10 13.27l-4.33 2.23.83-4.82L3 7.27l4.91-.71L10 2z" stroke="white" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: '3',
    label: 'MVPs found PMF and graduated to full SaaS builds with us',
    glowDelay: '2s',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 14l4-5 3 3 3-4 4 6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: '7 wks',
    label: 'average time from signed brief to first real user on the platform',
    glowDelay: '4s',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="white" strokeWidth="1.3" />
        <path d="M10 6v4l2.5 2.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: '$0',
    label: 'discovery tax — scope and price locked before work starts',
    glowDelay: '6s',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="5" width="14" height="10" rx="2" stroke="white" strokeWidth="1.3" />
        <path d="M3 8.5h14" stroke="white" strokeWidth="1.2" />
        <path d="M7 12h2M11 12h2" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function FounderStats() {
  return (
    <section className="bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div
              key={s.value}
              className="relative overflow-hidden rounded-2xl p-5 sm:p-7 flex flex-col gap-4 sm:gap-5"
              style={{
                background: `
                  radial-gradient(ellipse 60% 55% at 22% 18%, rgba(255,252,245,0.11) 0%, transparent 65%),
                  #0C0C0E
                `,
              }}
            >
              {/* Animated glow */}
              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  width: '70%',
                  aspectRatio: '1',
                  top: 0,
                  left: 0,
                  background: 'radial-gradient(circle, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.10) 50%, transparent 70%)',
                  filter: 'blur(24px)',
                  animation: `cardSweep 22s linear ${s.glowDelay} infinite`,
                }}
              />

              {/* Icon */}
              <div className="relative w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.08)' }}>
                {s.icon}
              </div>

              {/* Value */}
              <p className="relative text-white font-bold text-[32px] sm:text-[40px] leading-tight tracking-tight">
                {s.value}
              </p>

              {/* Label */}
              <p className="relative text-[#A6A6A6] text-[14px] leading-[21px] sm:text-[15px] sm:leading-[22px]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
