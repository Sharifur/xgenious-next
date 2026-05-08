export default function WhyChooseUs() {
  return (
    <section className="py-[120px] bg-white">
      <div className="container-page flex flex-col gap-[72px]">
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

        {/* 3 cards */}
        <div className="flex items-end gap-6">
          {/* Left card — peach, tall */}
          <div
            className="relative flex-shrink-0 overflow-hidden rounded-[12px]"
            style={{ background: '#f3dccf', width: 424, height: 642 }}
          >
            {/* Phone mockup */}
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
            {/* Icon circle */}
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
            className="relative flex-shrink-0 rounded-[12px] flex flex-col justify-between"
            style={{ background: '#cfd1ff', width: 424, height: 457 }}
          >
            <p
              className="absolute font-semibold text-[#0f1112] text-center whitespace-nowrap"
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
            {/* Man with phone */}
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
            {/* Icon circle */}
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
