const stats = [
  {
    value: '4',
    label: 'founders raised follow-on funding after shipping their MVP with us',
  },
  {
    value: '3',
    label: 'MVPs found PMF and graduated to full SaaS builds with us',
  },
  {
    value: '7 weeks',
    label: 'average time from signed brief to first real user on the platform',
  },
  {
    value: '$0',
    label: 'discovery tax — scope and price locked before work starts',
  },
];

export default function FounderStats() {
  return (
    <section className="py-10 sm:py-12" style={{ background: '#fff', borderBottom: '1px solid #e7e9ed' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col gap-1.5">
              <span className="font-bold text-[#ec7161] text-[28px] sm:text-[34px] leading-none">{s.value}</span>
              <p className="text-[#484848] text-[13px] sm:text-[14px] leading-[20px]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
