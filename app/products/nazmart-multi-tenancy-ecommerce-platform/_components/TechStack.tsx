import Image from 'next/image';

type Tech = {
  name: string;
  desc: string;
  logo?: string;
  icon?: React.ReactNode;
};

const stack: Tech[] = [
  { name: 'Laravel',      desc: 'PHP 8+ backend framework',       logo: '/icons/fi_laravel.svg' },
  { name: 'Tailwind CSS', desc: 'Utility-first CSS framework',    logo: '/tech/tailwind.svg' },
  { name: 'MySQL',        desc: 'Relational database',            logo: '/tech/mysql.svg' },
  { name: 'Flutter',      desc: 'Android & iOS mobile app',       logo: '/images/app-dev/logo-flutter.svg' },
  {
    name: 'Redis',
    desc: 'Queues & session cache',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="16" cy="26" rx="14" ry="4" fill="#DC382D" opacity="0.3"/>
        <ellipse cx="16" cy="22" rx="14" ry="4" fill="#DC382D" opacity="0.5"/>
        <ellipse cx="16" cy="18" rx="14" ry="4" fill="#DC382D" opacity="0.7"/>
        <ellipse cx="16" cy="14" rx="14" ry="4" fill="#DC382D"/>
        <ellipse cx="16" cy="10" rx="14" ry="4" fill="#DC382D"/>
        <ellipse cx="16" cy="10" rx="14" ry="4" fill="url(#rtop)"/>
        <defs>
          <radialGradient id="rtop" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#FF6B6B"/>
            <stop offset="100%" stopColor="#DC382D"/>
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Linux VPS',
    desc: 'Any standard hosting',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="28" height="18" rx="3" fill="#1f2937"/>
        <rect x="5" y="7" width="22" height="12" rx="1.5" fill="#374151"/>
        <rect x="7" y="9" width="4" height="1.5" rx="0.75" fill="#92E721"/>
        <rect x="7" y="12" width="8" height="1.5" rx="0.75" fill="#6b7280"/>
        <rect x="7" y="15" width="6" height="1.5" rx="0.75" fill="#6b7280"/>
        <path d="M12 22v4" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 22v4" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/>
        <rect x="8" y="26" width="16" height="2" rx="1" fill="#6b7280"/>
      </svg>
    ),
  },
];

export default function TechStack() {
  return (
    <section className="py-14 sm:py-16 bg-white border-t border-[#E5E7EC]">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-10">
          <h2 className="text-[22px] sm:text-[28px] font-bold text-[#0F1112] mb-2">Built on Battle-Tested Technology</h2>
          <p className="text-[#6b7280] text-[14px]">
            Production-grade stack. Runs on standard hosting. No proprietary lock-in.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stack.map((t) => (
            <div key={t.name} className="rounded-2xl border border-[#E5E7EC] p-5 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#F5F6F8] flex-shrink-0">
                {t.logo ? (
                  <Image src={t.logo} alt={t.name} width={30} height={30} className="object-contain" />
                ) : (
                  t.icon
                )}
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#0F1112]">{t.name}</p>
                <p className="text-[12px] text-[#6b7280] mt-0.5 leading-4">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[12px] text-[#9ca3af] mt-6">
          According to the{' '}
          <a href="https://survey.stackoverflow.co/2024/technology#most-popular-technologies-webframe" target="_blank" rel="noopener noreferrer" className="underline">
            Stack Overflow Developer Survey 2024
          </a>
          , Laravel is the most loved PHP framework and Tailwind CSS ranks in the top 3 CSS frameworks worldwide.
        </p>

      </div>
    </section>
  );
}
