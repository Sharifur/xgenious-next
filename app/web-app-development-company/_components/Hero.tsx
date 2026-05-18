'use client';

import { motion } from 'framer-motion';
import Button, { ArrowIcon } from '@/components/ui/Button';

const badges = [
  {
    src: '/images/web-app-dev/badge-icon-4.svg',
    alt: 'Code',
    className: 'top-[18%] left-[5%]',
    duration: 7,
    delay: 0,
    yRange: [0, -12, 0] as [number, number, number],
    xRange: [0, 5, 0] as [number, number, number],
  },
  {
    src: '/images/web-app-dev/badge-icon-3.svg',
    alt: 'Node JS',
    className: 'top-[58%] left-[4%]',
    duration: 6.5,
    delay: 1.4,
    yRange: [0, -9, 0] as [number, number, number],
    xRange: [0, 6, 0] as [number, number, number],
  },
  {
    src: '/images/web-app-dev/badge-icon-2.svg',
    alt: 'Server',
    className: 'top-[18%] right-[5%]',
    duration: 8,
    delay: 0.8,
    yRange: [0, -11, 0] as [number, number, number],
    xRange: [0, -5, 0] as [number, number, number],
  },
  {
    src: '/images/web-app-dev/badge-icon-1.svg',
    alt: 'API',
    className: 'top-[58%] right-[4%]',
    duration: 7.5,
    delay: 2.2,
    yRange: [0, -10, 0] as [number, number, number],
    xRange: [0, -6, 0] as [number, number, number],
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#eeeee8] pt-[120px] pb-[100px] sm:pt-[140px] sm:pb-[110px] lg:pt-[160px] lg:pb-[130px]">

      {/* Floating tech badges — hidden on mobile to avoid overlap */}
      {badges.map((b) => (
        <motion.img
          key={b.alt}
          src={b.src}
          alt={b.alt}
          className={`hidden md:block absolute z-10 max-w-none pointer-events-none ${b.className}`}
          animate={{ y: b.yRange, x: b.xRange }}
          transition={{ duration: b.duration, repeat: Infinity, ease: 'easeInOut', delay: b.delay }}
        />
      ))}

      {/* Center content */}
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-6 sm:gap-8">

        {/* Social proof pill */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-[99px] border border-[#d1d5db] bg-white/60 backdrop-blur-sm">
          <div className="flex -space-x-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/web-app-dev/avatar-1.png" alt="" width={28} height={28} className="rounded-full ring-2 ring-white object-cover w-7 h-7 sm:w-8 sm:h-8" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/web-app-dev/avatar-2.png" alt="" width={28} height={28} className="rounded-full ring-2 ring-white object-cover w-7 h-7 sm:w-8 sm:h-8" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/web-app-dev/avatar-3.png" alt="" width={28} height={28} className="rounded-full ring-2 ring-white object-cover w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <span className="font-normal text-[#374151] text-[12px] sm:text-[14px] leading-5">
            Trusted by 13k+ teams across 100+ countries
          </span>
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full">
          <h1 className="text-[#181818] font-bold text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[72px] lg:leading-[80px]">
            Custom Web App{' '}
            <br />
            <em className="font-semibold italic">Development for B2B Portals & Internal Tools</em>
          </h1>
          <p className="text-[#2f2f2f] font-normal text-[15px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px] max-w-[560px] sm:max-w-[620px]">
            Ship a B2B portal, internal tool, or enterprise platform in 2–16 weeks, from $2,500. Built on React, Next.js and Laravel — audit logs and GDPR-ready on day one.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-[17px] flex-wrap">
          <Button href="/contact" variant="coral" icon={<ArrowIcon />}>
            Start Your Project
          </Button>
          <Button href="#pricing" variant="outline" icon={<ArrowIcon />}>
            View Packages
          </Button>
        </div>

      </div>
    </section>
  );
}
