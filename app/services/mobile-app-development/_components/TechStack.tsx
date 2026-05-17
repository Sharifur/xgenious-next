'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SectionBadge from '@/components/ui/SectionBadge';

type TechBadgeProps = {
  name: string;
  icon: string;
  style: React.CSSProperties;
  borderColor: string;
  bg: string;
  duration?: number;
  delay?: number;
  yRange?: [number, number, number];
  xRange?: [number, number, number];
};

function TechBadge({ name, icon, style, borderColor, bg, duration = 6, delay = 0, yRange = [0, -10, 0], xRange = [0, 5, 0] }: TechBadgeProps) {
  return (
    <motion.div
      className="absolute inline-flex items-center gap-2 px-4 py-[10px] rounded-[99px] z-10"
      style={{ border: `1px solid ${borderColor}`, background: bg, ...style }}
      animate={{ y: yRange, x: xRange }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt={name} width={24} height={24} />
      <span className="font-medium text-[#181818]" style={{ fontSize: 16, lineHeight: '24px' }}>
        {name}
      </span>
    </motion.div>
  );
}

const techItems = [
  { name: 'Flutter',    icon: '/images/app-dev/tech-flutter.svg',   borderColor: '#41d0fd', bg: 'rgba(64,208,253,0.1)' },
  { name: 'iOS',        icon: '/images/app-dev/tech-ios.svg',        borderColor: '#141414', bg: 'white' },
  { name: 'App Store',  icon: '/images/app-dev/tech-ios.svg',        borderColor: '#d0d0d0', bg: 'white' },
  { name: 'Kotlin',     icon: '/images/app-dev/tech-kotlin.svg',     borderColor: '#d86685', bg: 'rgba(255,137,1,0.1)' },
  { name: 'Android',    icon: '/images/app-dev/tech-android.svg',    borderColor: '#5c8c32', bg: 'white' },
  { name: 'Play Store', icon: '/images/app-dev/tech-playstore.svg',  borderColor: '#d0d0d0', bg: 'white' },
];

const SectionHeader = () => (
  <div className="flex flex-col gap-4 items-center text-center">
    <SectionBadge>Tech Stack</SectionBadge>
    <h2 className="font-semibold text-[#0f1112] text-[26px] leading-[34px] sm:text-[34px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] max-w-[712px]">
      Modern Stack, Optimized for Speed
    </h2>
    <p className="font-normal text-[#484848] text-[14px] leading-[21px] sm:text-base sm:leading-6 max-w-[580px]">
      No logo-salad. Each layer picked for a reason we&apos;re happy to defend.
    </p>
  </div>
);

export default function TechStack() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) {
    return (
      <section className="py-14 bg-white">
        <div className="container-page px-4 flex flex-col gap-8">
          <SectionHeader />

          {/* Phone — full width, capped */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/app-dev/tech-phone.png"
            alt="Tech stack phone"
            className="w-full max-w-[260px] mx-auto"
          />

          {/* Tech badges — static grid, no animation */}
          <div className="grid grid-cols-2 gap-3">
            {techItems.map((tech) => (
              <div
                key={tech.name}
                className="inline-flex items-center gap-2 px-3 py-[10px] rounded-[99px]"
                style={{ border: `1px solid ${tech.borderColor}`, background: tech.bg }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tech.icon} alt={tech.name} width={20} height={20} />
                <span className="font-medium text-[#181818] text-[14px] leading-[21px]">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14 sm:py-20 lg:py-[120px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-[32px]">
        <SectionHeader />

        {/* Circular element with floating badges */}
        <div className="relative flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/app-dev/tech-phone.png"
            alt="Tech stack phone"
            className="relative z-[5] max-w-none"
          />

          <TechBadge
            name="Flutter"
            icon="/images/app-dev/tech-flutter.svg"
            borderColor="#41d0fd"
            bg="rgba(64,208,253,0.1)"
            style={{ left: 0, top: '30%' }}
            duration={7}
            delay={0}
            yRange={[0, -12, 0]}
            xRange={[0, 6, 0]}
          />

          <TechBadge
            name="iOS"
            icon="/images/app-dev/tech-ios.svg"
            borderColor="#141414"
            bg="white"
            style={{ left: 60, bottom: '18%' }}
            duration={5.5}
            delay={1.2}
            yRange={[0, -8, 0]}
            xRange={[0, 4, 0]}
          />

          <motion.div
            className="absolute inline-flex items-center gap-2 px-4 py-[10px] rounded-[99px] z-10 bg-white"
            style={{ left: 20, top: '50%', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
            animate={{ y: [0, -10, 0], x: [0, -5, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/app-dev/tech-ios.svg" alt="App Store" width={24} height={24} />
            <span className="font-medium text-[#181818]" style={{ fontSize: 16, lineHeight: '24px' }}>
              App Store
            </span>
          </motion.div>

          <TechBadge
            name="Kotlin"
            icon="/images/app-dev/tech-kotlin.svg"
            borderColor="#d86685"
            bg="rgba(255,137,1,0.1)"
            style={{ right: 0, top: '30%' }}
            duration={8}
            delay={1.8}
            yRange={[0, -14, 0]}
            xRange={[0, -6, 0]}
          />

          <TechBadge
            name="Android"
            icon="/images/app-dev/tech-android.svg"
            borderColor="#5c8c32"
            bg="white"
            style={{ right: 60, bottom: '18%' }}
            duration={6}
            delay={0.9}
            yRange={[0, -9, 0]}
            xRange={[0, -4, 0]}
          />

          <motion.div
            className="absolute inline-flex items-center gap-2 px-4 py-[10px] rounded-[99px] z-10 bg-white"
            style={{ right: 20, top: '50%', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
            animate={{ y: [0, -11, 0], x: [0, 5, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 2.4 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/app-dev/tech-playstore.svg" alt="Play Store" width={24} height={24} />
            <span className="font-medium text-[#181818]" style={{ fontSize: 16, lineHeight: '24px' }}>
              Play Store
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
