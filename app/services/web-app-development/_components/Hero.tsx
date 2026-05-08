import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-[140px] pb-[80px] bg-white">
      <div className="container-page flex flex-col items-center text-center gap-8">
        <div className="flex flex-col items-center gap-6 w-full">
          <h1
            className="text-[#181818] font-semibold"
            style={{ fontSize: 72, lineHeight: '80px', letterSpacing: 0 }}
          >
            {'Custom Website '}
            <em className="font-medium" style={{ fontStyle: 'italic' }}>
              Development That Delivers
            </em>
          </h1>
          <p
            className="text-[#2f2f2f] font-normal"
            style={{ fontSize: 18, lineHeight: '27px', maxWidth: 682 }}
          >
            Ship a B2B portal, admin dashboard or internal platform in 8 to 12 weeks, from $20k. Built on React, Next.js and Laravel — audit logs and GDPR ready on day one.
          </p>
        </div>

        <div className="flex items-center gap-[17px] flex-wrap justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold text-white rounded-[30px] px-8 py-4 text-[16px] leading-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(236,113,97,0.4)]"
            style={{ background: '#ec7161' }}
          >
            Start New Project
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/web-app-dev/arrow-white.svg" alt="" width={24} height={24} />
          </Link>
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 font-semibold text-[#181818] rounded-[30px] px-8 py-4 text-[16px] leading-6 border border-[#2f2f2f] bg-white transition-all duration-200 hover:-translate-y-0.5"
          >
            Development Packages
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/web-app-dev/arrow-dark.svg" alt="" width={24} height={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}
