import Image from 'next/image';

const TECH = [
  { name: 'Laravel',        desc: 'PHP backend framework',          logo: '/icons/fi_laravel.svg' },
  { name: 'MySQL',          desc: 'Relational database',            logo: '/tech/mysql.svg' },
  { name: 'Pusher',         desc: 'Real-time event broadcasting',   logo: '/tech/pusher.svg' },
  { name: 'Tailwind CSS',   desc: 'Utility-first CSS framework',    logo: '/tech/tailwind.svg' },
  { name: 'REST API',       desc: 'Full API for mobile & integrations', logo: '/images/saas-dev/chip-api.svg' },
  { name: 'Flutter',        desc: 'Cross-platform mobile app',      logo: '/images/app-dev/logo-flutter.svg' },
  { name: 'PHP 8.3',        desc: 'Modern backend runtime',         logo: '/tech/php.svg' },
  { name: 'Laravel Reverb', desc: 'Native WebSocket server',        logo: '/icons/tech/reverb.png' },
];

export default function TechStack() {
  return (
    <section className="pb-16 sm:pb-20 lg:pb-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[560px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            Built on Rock-Solid Technology
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7">
            Xilancer is engineered on production-proven open-source technologies. Clean code, documented architecture, and easy to extend.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[900px] mx-auto">
          {TECH.map((tech) => (
            <div
              key={tech.name}
              className="rounded-2xl border border-[#E5E7EC] bg-white p-5 flex items-center gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#F5F6F8]">
                <Image src={tech.logo} alt={tech.name} width={28} height={28} className="object-contain" />
              </div>
              <div className="min-w-0">
                <p className="text-[14px] font-bold text-[#0F1112] truncate">{tech.name}</p>
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
