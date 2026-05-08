const stats = [
  { value: '350+', label: 'Clients Happy' },
  { value: '10+', label: 'Years Experience' },
  { value: '19+', label: 'Awards Winning' },
  { value: '25+', label: 'Team Members' },
];

export default function StatsCounter() {
  return (
    <section className="relative overflow-hidden py-[60px]" style={{ background: '#f2f8f5' }}>
      <p
        className="absolute font-black uppercase text-transparent pointer-events-none select-none whitespace-nowrap"
        style={{
          fontSize: 193,
          lineHeight: '80px',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(38,48,43,0.06)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.11,
        }}
      >
        Our achievement
      </p>
      <div className="container-page relative z-10 grid grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <p
              className="text-[#26302b] font-semibold"
              style={{ fontSize: 56, lineHeight: '64px' }}
            >
              {stat.value}
            </p>
            <p
              className="text-[#484848] font-medium capitalize"
              style={{ fontSize: 20, lineHeight: '30px' }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
