import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#f5f6ea' }}>
      {/* Background ellipse */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: 155,
          transform: 'translateX(-50%)',
          width: 3085,
          height: 1619,
          opacity: 1,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/app-dev/hero-ellipse.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container-page relative z-10 flex flex-col items-center" style={{ paddingTop: 100, paddingBottom: 0 }}>
        {/* Heading + CTA */}
        <div className="flex flex-col gap-8 items-center text-center" style={{ maxWidth: 888 }}>
          <div className="flex flex-col gap-4 items-center">
            <h1
              className="font-semibold"
              style={{ fontSize: 72, lineHeight: '80px', color: '#181818' }}
            >
              {`Precision-Built Apps for a `}
              <em className="font-medium" style={{ fontStyle: 'italic' }}>Mobile-First World</em>
            </h1>
            <p
              className="font-normal"
              style={{ fontSize: 18, lineHeight: '27px', color: '#2f2f2f', maxWidth: 744 }}
            >
              Transform your vision into reality with custom iOS, Android, and cross-platform mobile
              applications designed for growth and user engagement.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold text-white rounded-[30px] px-8 py-4 text-[16px] leading-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(236,113,97,0.5)]"
            style={{ background: '#ec7161' }}
          >
            Start New Project
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Floating badges above phone */}
        <div
          className="relative flex items-center justify-between"
          style={{ width: 1200, marginTop: 40 }}
        >
          {/* Play Store badge */}
          <div
            className="inline-flex items-center gap-2 px-[14px] py-[10px] rounded-[99px]"
            style={{
              background: '#fff0f1',
              border: '0.6px solid white',
              boxShadow: '0px 1px 1.5px rgba(0,0,0,0.04)',
              transform: 'rotate(6deg)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/app-dev/badge-playstore.svg" alt="Play Store" width={24} height={24} />
            <span className="font-normal" style={{ fontSize: 17, color: '#03569b' }}>Play Store</span>
          </div>

          {/* Flutter badge */}
          <div
            className="inline-flex items-center gap-2 px-[22px] py-[10px] rounded-[99px]"
            style={{
              background: '#eefbff',
              border: '0.6px solid white',
              boxShadow: '0px 1px 3px rgba(0,0,0,0.04)',
              transform: 'rotate(-6deg)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/app-dev/badge-flutter.png" alt="Flutter" width={25} height={24} />
            <span className="font-normal" style={{ fontSize: 17, color: '#03569b' }}>Flutter</span>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="relative" style={{ width: 1129, height: 741, marginTop: -20 }}>
          {/* Cloud decorations */}
          <div className="absolute pointer-events-none" style={{ right: -39, bottom: 0, width: 577, height: 374, opacity: 0.8 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/app-dev/hero-cloud-left.png" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute pointer-events-none" style={{ right: -8, top: 0, width: 381, height: 246, opacity: 0.8 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/app-dev/hero-cloud-right.png" alt="" className="w-full h-full object-contain" />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/app-dev/hero-phone.png"
            alt="Mobile app showcase"
            className="relative z-10 w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
