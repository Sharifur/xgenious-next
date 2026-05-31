import Image from 'next/image';

const TECH: { name: string; desc: string; logo?: string; initial?: string; color?: string }[] = [
  { name: 'Laravel',     desc: 'PHP backend framework',          logo: '/tech/laravel.svg' },
  { name: 'MySQL',       desc: 'Relational database',            logo: '/tech/mysql.svg' },
  { name: 'PHP 8+',      desc: 'Modern backend runtime',         logo: '/tech/php.svg' },
  { name: 'Tailwind CSS', desc: 'Utility-first CSS framework',    logo: '/tech/tailwind.svg' },
  { name: 'jQuery',      desc: 'Dynamic frontend interactions',  initial: 'jQ', color: '#0769ad' },
  { name: 'Flutter',     desc: 'Cross-platform mobile app',      logo: '/site-images/app-dev/logo-flutter.svg' },
];

export default function TechStack() {
  return (
    <section className="pt-[100px] pb-16 sm:pb-20 lg:pb-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[560px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            Built on Rock-Solid Technology
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7">
            Fundorex is engineered on production-proven open-source technologies. Clean code, documented architecture, and easy to extend.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-[900px] mx-auto">
          {TECH.map((tech) => (
            <div
              key={tech.name}
              className="rounded-2xl border border-[#E5E7EC] bg-white p-5 flex flex-col items-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all text-center"
            >
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#F5F6F8]">
                {tech.logo ? (
                  <Image src={tech.logo} alt={tech.name} width={28} height={28} className="object-contain" />
                ) : (
                  <span className="text-[11px] font-black" style={{ color: tech.color }}>{tech.initial}</span>
                )}
              </div>
              <div>
                <p className="text-[13px] font-bold text-[#0F1112]">{tech.name}</p>
                <p className="text-[11px] text-[#6b7280] leading-4 mt-0.5">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-[#6b7280] mt-8 max-w-[500px] mx-auto">
          Full source code included. Extend, customize, or integrate with any third-party service without restrictions.
        </p>

      </div>
    </section>
  );
}
