export default function AboutSection() {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-[100px] pb-16 sm:pb-20 lg:pb-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — eyebrow + short desc + image */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold tracking-wide uppercase w-fit"
                style={{ background: '#fde8e5', color: '#ec7161' }}>
                About MVP Development
              </span>
              <p className="text-[#484848] text-[15px] leading-[23px] sm:text-[16px] sm:leading-[25px]">
                MVP development — the fastest path from idea to real user validation, without the cost or risk of a full build.
              </p>
            </div>

            <div className="relative rounded-[16px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/mvp/about-team.jpg"
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

          {/* Right — H2 + body */}
          <div className="flex flex-col gap-6 lg:pt-2">
            <h2 className="font-semibold text-[#0f1112] text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[40px] lg:leading-[50px]">
              Build, Validate, and Scale with Confidence
            </h2>

            <p className="text-[#484848] text-[14px] leading-[22px] sm:text-[15px] sm:leading-[23px]">
              An MVP is not a half-built product. It is the smallest version of your software that
              delivers genuine value to a real user — enough to prove demand, collect behaviour
              data, and make confident investment decisions before you build the full thing.
            </p>

            <p className="text-[#484848] text-[14px] leading-[22px] sm:text-[15px] sm:leading-[23px]">
              At Xgenious, every MVP starts from scratch on a production-grade stack. The same
              architecture, the same code standards, the same deployment pipeline we use for full
              SaaS builds. The difference is scope — not quality. That means when your MVP
              validates, v2 is an extension, not a rewrite.
            </p>

            <p className="text-[#484848] text-[14px] leading-[22px] sm:text-[15px] sm:leading-[23px]">
              We commit to a launch date in the proposal and deliver a fixed-price build with full
              IP transfer on completion. No discovery tax, no runaway costs, no junior pod handoff
              mid-sprint. Whether you have funded runway or are pre-revenue, the scope is locked
              before we start.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
