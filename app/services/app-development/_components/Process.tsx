const steps = [
  {
    title: 'Ideation',
    desc: 'Problem validation, ICP definition, competitive map, feature ranking, and we both sign before a single line of code is written.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4C11.2 4 4 11.2 4 20s7.2 16 16 16 16-7.2 16-16S28.8 4 20 4zm0 28c-6.6 0-12-5.4-12-12S13.4 8 20 8s12 5.4 12 12-5.4 12-12 12zm0-20a8 8 0 100 16 8 8 0 000-16zm0 12a4 4 0 110-8 4 4 0 010 8z" fill="#ec7161"/>
      </svg>
    ),
  },
  {
    title: 'Wireframing',
    desc: 'Problem validation, ICP definition, competitive map, feature ranking, and we both sign before a single line of code is written.',
    icon: null,
    iconSrc: '/images/app-dev/process-icon-wireframe.svg',
  },
  {
    title: 'UI Design',
    desc: 'Problem validation, ICP definition, competitive map, feature ranking, and we both sign before a single line of code is written.',
    icon: null,
    iconSrc: '/images/app-dev/process-icon-design.svg',
  },
  {
    title: 'Development',
    desc: 'Problem validation, ICP definition, competitive map, feature ranking, and we both sign before a single line of code is written.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M14 10l-8 10 8 10M26 10l8 10-8 10M22 8l-4 24" stroke="#ec7161" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-white" style={{ minHeight: 1465 }}>
      {/* Title */}
      <h2
        className="absolute font-semibold text-[#0f1112] text-center"
        style={{
          fontSize: 44,
          lineHeight: '52px',
          left: '50%',
          transform: 'translateX(-50%)',
          top: 120,
          width: 616,
        }}
      >
        The Process Behind Our Solutions
      </h2>

      {/* Central phone mockup */}
      <div
        className="absolute overflow-hidden"
        style={{ left: '50%', transform: 'translateX(-50%)', top: 296, width: 618, height: 751 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/app-dev/process-phone.png"
          alt="App process"
          className="w-full h-full object-cover"
        />
      </div>

      {/* White blur overlay */}
      <div
        className="absolute"
        style={{
          left: 362,
          top: 921,
          width: 1199,
          height: 354,
          background: 'white',
          filter: 'blur(50px)',
          zIndex: 1,
        }}
      />

      {/* 4 process steps */}
      <div
        className="absolute z-10"
        style={{ left: 300, top: 1098, right: 300 }}
      >
        <div className="grid grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col gap-[25px]">
              {/* Icon box */}
              <div
                className="flex items-center justify-center rounded-[8px] flex-shrink-0"
                style={{ width: 64, height: 64, background: '#f5f6f8' }}
              >
                {step.iconSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={step.iconSrc} alt={step.title} width={40} height={40} />
                ) : (
                  step.icon
                )}
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold text-[#181818]" style={{ fontSize: 36, lineHeight: '46px' }}>
                  {step.title}
                </p>
                <p className="font-normal text-[#484848]" style={{ fontSize: 16, lineHeight: '24px' }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer to push section to correct height */}
      <div style={{ height: 1465 }} />
    </section>
  );
}
