const stats = [
  {
    value: '4',
    label: 'founders raised follow-on funding after shipping their MVP with us',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2.09 4.26L17 7.27l-3.5 3.41.83 4.82L10 13.27l-4.33 2.23.83-4.82L3 7.27l4.91-.71L10 2z" stroke="#ec7161" strokeWidth="1.3" strokeLinejoin="round" fill="rgba(236,113,97,0.12)" />
      </svg>
    ),
  },
  {
    value: '3',
    label: 'MVPs found PMF and graduated to full SaaS builds with us',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 14l4-5 3 3 3-4 4 6" stroke="#ec7161" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 14l4-5 3 3 3-4 4 6H3z" fill="rgba(236,113,97,0.1)" />
      </svg>
    ),
  },
  {
    value: '7 wks',
    label: 'average time from signed brief to first real user on the platform',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="#ec7161" strokeWidth="1.3" fill="rgba(236,113,97,0.08)" />
        <path d="M10 6v4l2.5 2.5" stroke="#ec7161" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: '$0',
    label: 'discovery tax — scope and price locked before work starts',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="5" width="14" height="10" rx="2" stroke="#ec7161" strokeWidth="1.3" fill="rgba(236,113,97,0.08)" />
        <path d="M3 8.5h14" stroke="#ec7161" strokeWidth="1.2" />
        <path d="M7 12h2M11 12h2" stroke="#ec7161" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function FounderStats() {
  return (
    <section className="py-14 sm:py-16" style={{ background: '#f5f6f8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((s) => (
            <div
              key={s.value}
              className="flex flex-col gap-4 p-5 sm:p-6 rounded-[12px]"
              style={{ background: '#fff', border: '1px solid #e0e2e7' }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-9 h-9 rounded-[8px]"
                style={{ background: 'rgba(236,113,97,0.08)', border: '1px solid rgba(236,113,97,0.15)' }}
              >
                {s.icon}
              </div>
              {/* Value */}
              <span className="font-bold text-[#ec7161] text-[32px] sm:text-[38px] leading-none tracking-tight">
                {s.value}
              </span>
              {/* Label */}
              <p className="text-[#6b7280] text-[13px] leading-[20px]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
