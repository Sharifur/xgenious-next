import Image from 'next/image';

const stack = [
  { name: 'Laravel',      desc: 'PHP 8+ backend framework',    logo: '/icons/fi_laravel.svg' },
  { name: 'Tailwind CSS', desc: 'Utility-first CSS framework', logo: '/tech/tailwind.svg' },
  { name: 'MySQL',        desc: 'Relational database',         logo: '/tech/mysql.svg' },
  { name: 'Flutter',      desc: 'Android & iOS mobile app',    logo: '/site-images/app-dev/logo-flutter.svg' },
  { name: 'Redis',        desc: 'Queues & session cache',      logo: '/tech-logos/redis.svg' },
  { name: 'Linux VPS',    desc: 'Any standard hosting',        logo: '/tech/linux.svg' },
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
                <Image src={t.logo} alt={t.name} width={30} height={30} className="object-contain" />
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
