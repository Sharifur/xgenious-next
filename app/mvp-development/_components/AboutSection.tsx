export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — title + image */}
          <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-[#0f1112] text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px]">
              About MVP<br />Development Service
            </h2>

            <div className="relative rounded-[16px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/how-we-work-bg.jpg"
                alt="MVP development team collaborating on product design"
                className="w-full h-auto object-cover"
              />
              {/* Xgenious badge */}
              <div
                className="absolute bottom-5 left-5 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg"
                style={{ background: 'rgba(20,20,20,0.85)', backdropFilter: 'blur(8px)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/tech/xgenious-logo-icon.svg" alt="Xgenious" width={24} height={24} />
                <span className="text-white font-semibold text-[13px] tracking-wide">xgenious</span>
              </div>
            </div>
          </div>

          {/* Right — intro + body */}
          <div className="flex flex-col gap-8 lg:pt-2">
            <p className="text-[#484848] text-[15px] leading-[23px] sm:text-[16px] sm:leading-[24px]">
              MVP Development helps startups and businesses build the first functional version
              of a product with only the essential features needed to launch, validate ideas, and
              gather real user feedback quickly.
            </p>

            <div className="flex flex-col gap-5">
              <h3 className="font-semibold text-[#0f1112] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[32px]">
                Build, Validate, and Scale with Confidence
              </h3>

              <p className="text-[#484848] text-[14px] leading-[22px] sm:text-[15px] sm:leading-[23px]">
                MVP (Minimum Viable Product) development is the process of building a
                streamlined version of a product with core functionalities that allow businesses to
                launch quickly, validate ideas, and gather real market feedback.
              </p>

              <p className="text-[#484848] text-[14px] leading-[22px] sm:text-[15px] sm:leading-[23px]">
                At its core, MVP development helps startups reduce unnecessary development
                costs, shorten time-to-market, and make data-driven product decisions before
                scaling into a full-featured platform.
              </p>

              <p className="text-[#484848] text-[14px] leading-[22px] sm:text-[15px] sm:leading-[23px]">
                By focusing on essential features first, businesses can test user demand, improve
                product direction, and create a strong foundation for future growth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
