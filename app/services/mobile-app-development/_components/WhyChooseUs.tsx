const features = [
  {
    icon: '/images/app-dev/why-icon-rapid.svg',
    title: 'Rapid Development',
    desc: 'Accelerate your time to market with our agile development methodology and proven frameworks that deliver results faster.',
  },
  {
    icon: '/images/app-dev/why-icon-security.svg',
    title: 'Enterprise Security',
    desc: 'Built-in security best practices protect user data and prevent vulnerabilities with industry-standard encryption.',
  },
  {
    icon: '/images/app-dev/why-icon-support.svg',
    title: 'Ongoing Support',
    desc: 'Accelerate your time to market with our agile development methodology and proven frameworks that deliver results faster.',
  },
  {
    icon: '/images/app-dev/why-icon-design.svg',
    title: 'User-Centered Design',
    desc: 'Built-in security best practices protect user data and prevent vulnerabilities with industry-standard encryption.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-[120px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page flex flex-col gap-[96px]">

        {/* ── Part 1: Crafted for Performance and Security ── */}
        <div className="flex items-center gap-16">
          {/* Left — title + feature cards */}
          <div className="flex flex-col gap-10" style={{ flex: '0 0 520px' }}>
            <h2 className="font-semibold text-[#0f1112]" style={{ fontSize: 44, lineHeight: '52px', maxWidth: 420 }}>
              Crafted for Performance and Security
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex flex-col gap-3 rounded-[12px] p-5"
                  style={{ background: '#f5f6f8' }}
                >
                  <div
                    className="flex items-center justify-center rounded-[8px]"
                    style={{ width: 40, height: 40, background: 'white' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.icon} alt="" width={22} height={22} />
                  </div>
                  <p className="font-semibold text-[#181818]" style={{ fontSize: 16, lineHeight: '24px' }}>
                    {f.title}
                  </p>
                  <p className="font-normal text-[#484848]" style={{ fontSize: 14, lineHeight: '21px' }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — phone mockup */}
          <div className="flex-1 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/app-dev/why-phone-peach.png"
              alt="App performance"
              className="w-full max-w-[520px] object-contain"
            />
          </div>
        </div>

        {/* ── Part 2: Why Choose US ── */}
        {/* Header */}
        <div className="flex flex-col gap-4 items-center text-center" style={{ maxWidth: 712, margin: '0 auto' }}>
          <div
            className="inline-flex items-center justify-center px-4 py-[6px] rounded-[165px]"
            style={{ background: 'rgba(242,107,78,0.12)' }}
          >
            <span className="font-normal text-[#ec7161]" style={{ fontSize: 16, lineHeight: '24px' }}>
              Why Choose US
            </span>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="font-semibold text-[#0f1112]" style={{ fontSize: 44, lineHeight: '52px' }}>
              Why Businesses Trust Us With Their Apps
            </h2>
            <p className="font-normal text-[#484848]" style={{ fontSize: 16, lineHeight: '24px', maxWidth: 580 }}>
              We build fast, scalable mobile apps designed to deliver seamless user experiences and support business growth.
            </p>
          </div>
        </div>

        {/* 3 bento cards */}
        <div className="flex items-end gap-6">
          {/* Left card — peach, tall */}
          <div
            className="relative flex-shrink-0 overflow-hidden rounded-[12px]"
            style={{ background: '#f3dccf', width: 424, height: 642 }}
          >
            <div className="absolute inset-0 overflow-hidden" style={{ top: 106 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/app-dev/why-phone-peach.png"
                alt="User-First App"
                className="absolute object-cover"
                style={{ width: 437, height: 654, left: 0, top: 0 }}
              />
            </div>
            <p
              className="absolute font-semibold text-[#181818]"
              style={{ fontSize: 24, lineHeight: '32px', left: 24, top: 24, width: 265 }}
            >
              User-First App Experience
            </p>
            <div
              className="absolute flex items-center justify-center rounded-[23.5px]"
              style={{ width: 47, height: 47, right: 24, top: 33, background: 'white' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/app-dev/why-icon-user.svg" alt="" width={24} height={24} />
            </div>
          </div>

          {/* Middle card — blue-purple, shorter */}
          <div
            className="relative flex-shrink-0 rounded-[12px]"
            style={{ background: '#cfd1ff', width: 424, height: 457 }}
          >
            <p
              className="absolute font-semibold text-[#0f1112]"
              style={{ fontSize: 72, lineHeight: '80px', right: 24, top: 32 }}
            >
              40+
            </p>
            <div
              className="absolute flex flex-col gap-[14px]"
              style={{ left: 24, top: 291, width: 373 }}
            >
              <p className="font-semibold text-[#181818]" style={{ fontSize: 24, lineHeight: '32px' }}>
                Apps Successfully Delivered
              </p>
              <p className="font-normal text-[#2f2f2f]" style={{ fontSize: 16, lineHeight: '24px' }}>
                From ambitious startups to rapidly growing businesses around the world, we provide
                reliable and scalable solutions designed to support every stage of growth.
              </p>
            </div>
          </div>

          {/* Right card — white, tall */}
          <div
            className="relative flex-shrink-0 overflow-hidden rounded-[12px]"
            style={{ background: 'white', width: 424, height: 642, border: '1px solid #bababa' }}
          >
            <div className="absolute overflow-hidden" style={{ left: -90, top: 79, width: 639, height: 639 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/app-dev/why-man-phone.png"
                alt="Built Together"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p
              className="absolute font-semibold text-[#181818]"
              style={{ fontSize: 24, lineHeight: '32px', left: 23, top: 23, width: 265 }}
            >
              Built Together, Built Better
            </p>
            <div
              className="absolute flex items-center justify-center rounded-[23.5px]"
              style={{ width: 47, height: 47, right: 24, top: 32, background: '#f3dccf' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/app-dev/why-icon-built.svg" alt="" width={24} height={24} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
