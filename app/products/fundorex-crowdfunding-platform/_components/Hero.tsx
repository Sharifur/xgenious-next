import Image from 'next/image';
import Link from 'next/link';
import { COLOR, PURCHASE_URL, DEMO_URL, QUICK_LINKS, REGULAR_PRICE } from './constants';

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes fundorex-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

      <section
        className="relative overflow-hidden pt-[120px] pb-0 sm:pt-[140px]"
        style={{
          background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 40%, #FEF9C3 100%)',
        }}
      >
        {/* Floating image — left */}
        <div className="hidden lg:block absolute left-0 top-[340px] w-[240px] xl:w-[280px] rotate-[-4deg] translate-x-[60px]">
          <div style={{ animation: 'fundorex-float 5s ease-in-out infinite' }}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/products/fundorex-hero-left.jpg"
                alt="Fundorex crowdfunding campaign"
                width={280}
                height={320}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>

        {/* Floating image — right */}
        <div className="hidden lg:block absolute right-0 top-[320px] w-[220px] xl:w-[260px] rotate-[4deg] translate-x-[-60px]">
          <div style={{ animation: 'fundorex-float 6s ease-in-out infinite 1s' }}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/products/fundorex-hero-right.jpg"
                alt="Fundorex donation box illustration"
                width={260}
                height={300}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>

        {/* Center content */}
        <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-6 relative z-10 max-w-[860px] mx-auto">

          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="#F59E0B">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[14px] font-semibold text-[#0F1112]">(33) Rating at Envato</span>
          </div>

          <h1 className="text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[58px] lg:leading-[66px] font-bold text-[#0F1112]">
            Build Your Amazing{' '}
            <span style={{ color: COLOR }}>Crowdfunding Website</span>
          </h1>

          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7 max-w-[560px]">
            Launch a powerful crowdfunding platform designed to turn ideas into successful fundraising campaigns.
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center mt-1">
            <Link
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
            >
              {`Purchase Now — $${REGULAR_PRICE}`}
            </Link>
            <Link
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[15px] rounded-full px-8 py-3.5 border-2 text-[#0F1112] border-[#0F1112]/20 bg-white/60 hover:bg-white transition-all hover:-translate-y-0.5"
            >
              Explore Demos
            </Link>
          </div>

          <p className="text-[12px] text-[#6b7280]">One-time purchase · No monthly fees · Full source code</p>

          <div className="flex items-center gap-6 flex-wrap justify-center">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-[14px] font-medium text-[#484848] underline underline-offset-4 decoration-[#484848]/30 hover:text-[#0F1112] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Product preview */}
          <div className="mt-10 w-full max-w-[900px] relative">
            <div
              className="absolute inset-0 rounded-t-2xl rotate-[3deg] -translate-y-3 translate-x-3"
              style={{ background: COLOR }}
            />
            <div className="relative z-10 rounded-t-2xl overflow-hidden shadow-2xl">
              <Image
                src="/products/fundorex-hero-center.jpg"
                alt="Fundorex crowdfunding platform — admin and frontend preview"
                width={900}
                height={540}
                className="w-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
