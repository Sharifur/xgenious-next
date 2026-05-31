import Image from 'next/image';
import Link from 'next/link';
import { COLOR, PURCHASE_URL, DEMO_URL, QUICK_LINKS, REGULAR_PRICE } from './constants';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-[120px] pb-0 sm:pt-[140px]"
      style={{ background: '#F5F6F8' }}
    >
      {/* Right — donation illustration */}
      <div className="hidden lg:block absolute right-0 top-[100px] w-[200px] xl:w-[240px] translate-x-[-20px] z-10">
        <Image
          src="/products/fundorex-hero-right.png"
          alt="Donation illustration"
          width={240}
          height={300}
          className="object-contain w-full"
        />
      </div>

      {/* Text content — narrow centered column */}
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-5 relative z-10 max-w-[800px] mx-auto">

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="#F59E0B">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[14px] font-semibold text-[#0F1112]">4.70/5</span>
          <span className="text-[14px] text-[#6b7280]">· 43 reviews · 734+ installs on CodeCanyon</span>
        </div>

        <h1 className="text-[38px] leading-[46px] sm:text-[54px] sm:leading-[62px] lg:text-[62px] lg:leading-[70px] font-bold text-[#0F1112] max-w-[950px]">
          Build Your Amazing{' '}
          <span style={{ color: COLOR }}>Crowdfunding Website</span>
        </h1>

        <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7 max-w-[520px]">
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
            className="inline-flex items-center gap-2 font-semibold text-[15px] rounded-full px-8 py-3.5 border-2 border-[#0F1112]/20 text-[#0F1112] bg-white hover:bg-gray-50 transition-all hover:-translate-y-0.5"
          >
            Explore Demos
          </Link>
        </div>

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
      </div>

      {/* Platform screenshot — left image sits on top-left of this panel */}
      <div className="container-page px-4 sm:px-6 lg:px-0 mt-10 max-w-[1200px] mx-auto relative z-10">
        {/* Left — children photo, rises above screenshot panel */}
        <div className="hidden lg:block absolute top-[-180px] left-0 w-[260px] xl:w-[310px] z-20">
          <Image
            src="/products/fundorex-hero-left.png"
            alt="Children smiling — Fundorex crowdfunding impact"
            width={310}
            height={420}
            className="object-contain object-bottom w-full"
          />
        </div>
        <div className="rounded-t-2xl overflow-hidden shadow-2xl">
          <Image
            src="/products/fundorex-hero-center.jpg"
            alt="Fundorex crowdfunding platform — web and mobile preview"
            width={1200}
            height={720}
            className="w-full object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}
