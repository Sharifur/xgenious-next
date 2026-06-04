import Image from 'next/image';

export default function MobileApp() {
  return (
    <section id="mobile-app" className="pt-16 lg:pt-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1200px] mx-auto">
        <div
          className="rounded-3xl overflow-hidden relative"
          style={{ background: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)' }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 px-6 sm:px-10 lg:px-24 pt-8 lg:pt-0 lg:min-h-[380px]">

            <div className="flex-1 flex flex-col gap-6 lg:py-14 text-center lg:text-left">
              <h2 className="text-[24px] sm:text-[30px] lg:text-[38px] font-bold text-white leading-tight max-w-[480px] mx-auto lg:mx-0">
                Flutter Mobile Apps for Clients and Providers
              </h2>
              <p className="text-white/70 text-[14px] sm:text-[15px] leading-7 max-w-[400px] mx-auto lg:mx-0">
                Both the client app and provider app are built with Flutter — available on Android — and included with every Prohandy license at no extra cost.
              </p>
              <div className="flex items-center gap-3 flex-wrap justify-center lg:justify-start">
                <a
                  href="https://play.google.com/store/search?q=prohandy+client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white transition-colors hover:bg-white/20"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M3.18 23.76c.3.17.64.24.99.19l12.47-12.47L12.86 7.7 3.18 23.76zM20.7 10.06l-2.56-1.48-3.39 3.39 3.39 3.38 2.59-1.5c.74-.43.74-1.37-.03-1.79zM1.77.96C1.51 1.25 1.36 1.7 1.36 2.28v19.44c0 .58.15 1.03.41 1.32l.07.07L13.3 11.65v-.28L1.84.89l-.07.07zM16.14 7.7L12.37 3.93 3.18.24c-.35-.05-.69.02-.99.19l11.79 11.79 2.16-4.52z"/></svg>
                  <div className="text-left">
                    <p className="text-[10px] opacity-70">Client App</p>
                    <p className="text-[13px] font-semibold">Google Play</p>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/search?q=prohandy+provider"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white transition-colors hover:bg-white/20"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M3.18 23.76c.3.17.64.24.99.19l12.47-12.47L12.86 7.7 3.18 23.76zM20.7 10.06l-2.56-1.48-3.39 3.39 3.39 3.38 2.59-1.5c.74-.43.74-1.37-.03-1.79zM1.77.96C1.51 1.25 1.36 1.7 1.36 2.28v19.44c0 .58.15 1.03.41 1.32l.07.07L13.3 11.65v-.28L1.84.89l-.07.07zM16.14 7.7L12.37 3.93 3.18.24c-.35-.05-.69.02-.99.19l11.79 11.79 2.16-4.52z"/></svg>
                  <div className="text-left">
                    <p className="text-[10px] opacity-70">Provider App</p>
                    <p className="text-[13px] font-semibold">Google Play</p>
                  </div>
                </a>
              </div>
              <p className="text-white/50 text-[12px] max-w-[340px] text-center lg:text-left">
                Both apps included with{' '}
                <span className="text-white font-semibold">Regular</span> and{' '}
                <span className="text-white font-semibold">Extended License</span>
              </p>
            </div>

            <div className="flex-shrink-0 flex items-end justify-center lg:justify-end relative lg:translate-x-[60px]">
              <Image
                src="/products/prohandy-mobile.png"
                alt="Prohandy Flutter mobile apps for clients and service providers"
                width={600}
                height={400}
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
