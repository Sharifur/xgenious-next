import Image from 'next/image';
import Link from 'next/link';
import { COLOR, PURCHASE_URL, DEMO_URL, QUICK_LINKS, REGULAR_PRICE } from './constants';

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes xilancer-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
      `}</style>

      <section
        className="relative overflow-hidden pt-[120px] pb-0 sm:pt-[140px]"
        style={{
          background: 'linear-gradient(135deg, #fce8e3 0%, #fdf3ed 30%, #e8f5ef 70%, #d4ede0 100%)',
        }}
      >
        {/* Floating screenshot — left */}
        <div className="hidden lg:block absolute left-0 top-[420px] w-[280px] xl:w-[320px] rotate-[-4deg] translate-x-[100px]">
          <div style={{ animation: 'xilancer-float 5s ease-in-out infinite' }}>
            <div className="rounded-[10px] overflow-hidden">
              <Image
                src="/products/xilancer-hero-left.png"
                alt="Xilancer freelancer marketplace script screenshot"
                width={320}
                height={220}
                className="object-cover object-top w-full"
              />
            </div>
          </div>
        </div>

        {/* Floating screenshot — right */}
        <div className="hidden lg:block absolute right-0 top-[420px] w-[260px] xl:w-[300px] rotate-[4deg] translate-x-[-100px]">
          <div style={{ animation: 'xilancer-float 6s ease-in-out infinite 0.8s' }}>
            <div className="rounded-[10px] overflow-hidden">
              <Image
                src="/products/xilancer-hero-right.png"
                alt="Xilancer admin panel screenshot"
                width={300}
                height={200}
                className="object-cover object-center w-full"
              />
            </div>
          </div>
        </div>

        {/* Center content */}
        <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-6 relative z-10 max-w-[950px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-4 py-1.5 border border-white/80 text-[13px] font-medium text-[#484848]">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Laravel Freelancing Platform Script
          </div>

          <h1 className="text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[60px] lg:leading-[68px] font-bold text-[#0F1112] max-w-[950px]">
            The Best Freelancing Platform Script —{' '}
            <strong className="font-bold underline underline-offset-4 decoration-2" style={{ color: COLOR, textDecorationColor: COLOR }}>Build Your Own Marketplace</strong>
          </h1>

          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7 max-w-[580px]">
            The Best freelancing platform script in the market. Build your own Fiverr clone or Upwork clone freelancing platform using all in one Laravel freelancing platform script.
          </p>

          {/* Star rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={i < 4 ? '#F59E0B' : '#E5E7EB'}>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[13px] font-semibold text-[#0F1112]">4.36/5</span>
            <span className="text-[13px] text-[#6b7280]">· 45 reviews · 450+ installs on CodeCanyon</span>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center mt-1">
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
            >
              {`Get Xilancer — from $${REGULAR_PRICE}`}
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

          <div className="flex items-center gap-6 flex-wrap justify-center mt-1">
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
              className="absolute inset-0 rounded-t-2xl rotate-[4deg] -translate-y-4 translate-x-4"
              style={{ background: COLOR }}
            />
            <div className="relative z-10 rounded-t-2xl overflow-hidden">
              <Image
                src="/products/xilancer-hero-center.jpg"
                alt="Xilancer freelancer marketplace script — connecting clients with talent"
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
