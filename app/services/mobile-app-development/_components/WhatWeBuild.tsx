const services = [
  {
    num: '01',
    title: 'Custom App Development',
    desc: 'E-commerce enables businesses to establish a digital presence',
    bg: '/images/mobile-app-dev/service-custom-app.png',
  },
  {
    num: '02',
    title: 'App Migration',
    desc: 'E-commerce enables businesses to establish a digital presence',
    bg: '/images/mobile-app-dev/service-app-migration.png',
  },
  {
    num: '03',
    title: 'Flutter App Consulting',
    desc: 'E-commerce enables businesses to establish a digital presence',
    bg: '/images/mobile-app-dev/service-flutter-consulting.png',
  },
  {
    num: '04',
    title: 'Flutter Team Augmentation',
    desc: 'E-commerce enables businesses to establish a digital presence',
    bg: '/images/mobile-app-dev/service-flutter-augmentation.png',
  },
  {
    num: '05',
    title: 'Flutter Multi-Platform App Development',
    desc: 'E-commerce enables businesses to establish a digital presence',
    bg: '/images/mobile-app-dev/service-flutter-multiplatform.png',
  },
  {
    num: '06',
    title: 'Laravel Development',
    desc: 'E-commerce enables businesses to establish a digital presence',
    bg: '/images/mobile-app-dev/service-laravel.png',
  },
];

function ServiceCard({ num, title, desc, bg }: typeof services[0]) {
  return (
    <div className="relative flex flex-col" style={{ width: 413, height: 443 }}>
      {/* Image area */}
      <div className="rounded-[8px] overflow-hidden flex-shrink-0" style={{ height: 243 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={bg} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Divider */}
      <div className="w-full" style={{ height: 1, background: 'rgba(72,72,72,0.5)' }} />
      {/* Text area */}
      <div className="flex flex-col gap-2 pt-5 pb-3 relative" style={{ minHeight: 198 }}>
        <span
          className="text-white font-semibold capitalize absolute"
          style={{ fontSize: 16, lineHeight: '26px', left: 0, top: 20 }}
        >
          {num}
        </span>
        <p
          className="text-white font-semibold"
          style={{ fontSize: 28, lineHeight: '36px', paddingLeft: 0 }}
        >
          {title}
        </p>
        <p
          className="font-normal"
          style={{ fontSize: 18, lineHeight: '26px', color: '#dfe8e2' }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function WhatWeBuild() {
  return (
    <section id="services" className="py-[120px]" style={{ background: '#26302b' }}>
      <div className="container-page flex flex-col gap-[72px]">
        <h2
          className="text-white font-bold capitalize"
          style={{ fontSize: 64, lineHeight: '80px' }}
        >
          apps Development<br />all Touchpoints
        </h2>

        <div className="grid grid-cols-3 gap-[16px] gap-y-[48px]">
          {services.map((s) => (
            <ServiceCard key={s.num} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
