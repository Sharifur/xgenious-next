import Image from 'next/image';

export default function MobileApp() {
  return (
    <section className="pt-16 lg:pt-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1200px] mx-auto">
        <div
          className="rounded-3xl overflow-hidden relative"
          style={{ backgroundImage: 'url(/products/helpnest-mobile-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 px-6 sm:px-10 lg:px-24 pt-8 lg:pt-0 lg:min-h-[380px]">

            {/* Left text */}
            <div className="flex-1 flex flex-col gap-6 lg:py-14 text-center lg:text-left">
              <h2 className="text-[24px] sm:text-[30px] lg:text-[38px] font-bold text-white leading-tight max-w-[480px] mx-auto lg:mx-0">
                {"Don't Miss a Chat, Continue From Your Mobile"}
              </h2>
              <div className="flex flex-col gap-3 items-center lg:items-start">
                <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-5 py-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse" />
                  <span className="text-white font-bold text-[13px] tracking-widest uppercase">Coming Soon</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap justify-center lg:justify-start">
                  <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    <span className="text-[13px] font-semibold">App Store</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M3.18 23.76c.3.17.64.24.99.19l12.47-12.47L12.86 7.7 3.18 23.76zM20.7 10.06l-2.56-1.48-3.39 3.39 3.39 3.38 2.59-1.5c.74-.43.74-1.37-.03-1.79zM1.77.96C1.51 1.25 1.36 1.7 1.36 2.28v19.44c0 .58.15 1.03.41 1.32l.07.07L13.3 11.65v-.28L1.84.89l-.07.07zM16.14 7.7L12.37 3.93 3.18.24c-.35-.05-.69.02-.99.19l11.79 11.79 2.16-4.52z"/></svg>
                    <span className="text-[13px] font-semibold">Google Play</span>
                  </div>
                </div>
                <p className="text-white/60 text-[12px] max-w-[340px] text-center lg:text-left">
                  Mobile app included with the <span className="text-white font-semibold">Everything Bundle</span> ($89) and <span className="text-white font-semibold">Exclusive License</span> ($199) — not in Regular.
                </p>
              </div>
            </div>

            {/* Right phones */}
            <div className="flex-shrink-0 flex items-end justify-center lg:justify-end gap-[-20px] relative lg:translate-x-[100px]">
              <Image
                src="/products/helpnest-mobile-section.png"
                alt="Helpnest mobile app — tickets and notifications"
                width={752}
                height={497}
                className="object-contain object-bottom"
                priority
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
