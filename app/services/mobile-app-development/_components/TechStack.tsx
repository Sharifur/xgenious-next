'use client';

import { motion } from 'framer-motion';
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

export default function TechStack() {
  return (
    <section className="py-[120px] bg-white">
      <div className="container-page flex flex-col gap-[32px]">
        <div className="flex flex-col gap-4 items-center text-center">
          <SectionBadge>Tech Stack</SectionBadge>
          <h2 className="font-semibold text-[#0f1112] text-[44px] leading-[52px] max-w-[712px]">
            Modern Stack, Optimized for Speed
          </h2>
          <p className="font-normal text-[#484848] text-base leading-6 max-w-[580px]">
            No logo-salad. Each layer picked for a reason we&apos;re happy to defend.
          </p>
        </div>

        {/* Circular element with floating badges */}
        <div className="relative flex items-center justify-center">
          {/* Phone — normal flow, drives container height */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/app-dev/tech-phone.png"
            alt="Tech stack phone"
            className="relative z-[5] max-w-none"
          />

          {/* Flutter badge — left */}
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

          {/* iOS badge — bottom-left */}
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

          {/* App Store badge — left-center */}
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

          {/* Kotlin badge — right */}
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

          {/* Android badge — bottom-right */}
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

          {/* Play Store badge — right-center */}
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
