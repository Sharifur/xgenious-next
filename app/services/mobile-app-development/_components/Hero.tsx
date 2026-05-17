'use client';

import { motion } from 'framer-motion';
import Button, { ArrowIcon } from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-0" style={{ background: 'linear-gradient(180deg, #f8f7ef 0%, #ecddd2 100%)' }}>
      {/* Background ellipse */}
      <div
        className="absolute pointer-events-none"
        style={{ left: '50%', top: 155, transform: 'translateX(-50%)', width: 3085, height: 1619 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/app-dev/hero-ellipse.svg" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Play Store badge */}
      <motion.div
        className="hidden md:block absolute z-20 pointer-events-none"
        style={{ left: '20%', top: 340, rotate: -6 }}
        animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/app-dev/badge-playstore.png" alt="Play Store" className="h-12 w-auto" />
      </motion.div>

      {/* Large cloud — left, floating */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ left: '10%', top: '45%', width: 600, height: 420, opacity: 0.85, zIndex: 1 }}
        animate={{ y: [0, -20, 0], x: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/app-dev/hero-cloud-left.png" alt="" className="w-full h-full object-contain" />
      </motion.div>

      {/* Small cloud — right, floating */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ right: '10%', top: '52%', width: 300, height: 200, opacity: 0.8, zIndex: 1 }}
        animate={{ y: [0, -12, 0], x: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/app-dev/hero-cloud-right.png" alt="" className="w-full h-full object-contain" />
      </motion.div>

      {/* Flutter badge */}
      <motion.div
        className="hidden md:block absolute z-20 pointer-events-none"
        style={{ right: '20%', top: 300, rotate: 6 }}
        animate={{ y: [0, -8, 0], x: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/app-dev/badge-flutter.png" alt="Flutter" className="h-12 w-auto" />
      </motion.div>

      <div className="container-page px-4 sm:px-6 lg:px-0 relative z-10 flex flex-col items-center" style={{ paddingTop: 120, paddingBottom: 0 }}>
        {/* Heading + CTA */}
        <div className="flex flex-col gap-6 sm:gap-8 items-center text-center">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="font-semibold text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[72px] lg:leading-[80px]" style={{ color: '#181818', maxWidth: 900 }}>
              Precision-Built Apps for a{' '}
              <em className="font-medium" style={{ fontStyle: 'italic' }}>Mobile-First World</em>
            </h1>
            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]" style={{ lineHeight: '27px', color: '#2f2f2f', maxWidth: 750 }}>
              Transform your vision into reality with custom iOS, Android, and cross-platform mobile
              applications designed for growth and user engagement.
            </p>
          </div>
          <Button href="/contact" variant="coral" icon={<ArrowIcon />}>
            Start New Project
          </Button>
        </div>

        {/* Phone mockups — bottom clipped by section overflow-hidden */}
        <div className="relative w-full flex items-end justify-center" style={{ marginTop: 100, marginBottom: -130 }}>

          {/* Left — Prohandy, top leans toward center (clockwise) */}
          <motion.img
            src="/images/app-dev/mock-prohandy.png"
            alt="Prohandy app"
            initial={{ y: 180, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block flex-shrink-0"
            style={{
              width: 270,
              zIndex: 10,
              rotate: -10,
              transformOrigin: 'bottom center',
              marginRight: -90,
              filter: 'drop-shadow(0 24px 40px rgba(0,0,0,0.18))',
            }}
          />

          {/* Center — Go Car, upright */}
          <motion.img
            src="/images/app-dev/mock-gocar.png"
            alt="Go Car app"
            initial={{ y: 180, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="block flex-shrink-0"
            style={{
              width: 320,
              zIndex: 20,
              filter: 'drop-shadow(0 32px 56px rgba(0,0,0,0.22))',
            }}
          />

          {/* Right — Xilancer, top leans toward center (counter-clockwise) */}
          <motion.img
            src="/images/app-dev/mock-xilancer.png"
            alt="Xilancer app"
            initial={{ y: 180, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="block flex-shrink-0"
            style={{
              width: 270,
              zIndex: 10,
              rotate: 10,
              transformOrigin: 'bottom center',
              marginLeft: -90,
              filter: 'drop-shadow(0 24px 40px rgba(0,0,0,0.18))',
            }}
          />
        </div>
      </div>
    </section>
  );
}
