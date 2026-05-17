'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Ideation',
    desc: 'Problem validation, ICP definition, competitive map, feature ranking, and we both sign before a single line of code is written.',
    iconSrc: '/images/app-dev/process-icon-ideation.svg',
  },
  {
    title: 'Wireframing',
    desc: 'Problem validation, ICP definition, competitive map, feature ranking, and we both sign before a single line of code is written.',
    iconSrc: '/images/app-dev/process-icon-wireframe.svg',
  },
  {
    title: 'UI Design',
    desc: 'Problem validation, ICP definition, competitive map, feature ranking, and we both sign before a single line of code is written.',
    iconSrc: '/images/app-dev/process-icon-ui-design.svg',
  },
  {
    title: 'Development',
    desc: 'Problem validation, ICP definition, competitive map, feature ranking, and we both sign before a single line of code is written.',
    iconSrc: '/images/app-dev/process-icon-development.svg',
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 sm:pt-24 lg:pt-[898px]">

      {/* Cloud — top-left, overlapping phone */}
      <motion.img
        src="/images/app-dev/cloud-sm.png"
        alt=""
        className="hidden lg:block absolute top-[340px] left-[4%] w-[220px] pointer-events-none z-[3]"
        animate={{ y: [0, -12, 0], x: [0, 7, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Cloud — bottom-left, lower area */}
      <motion.img
        src="/images/app-dev/cloud-lg.png"
        alt=""
        className="hidden lg:block absolute top-[680px] left-[2%] w-[280px] pointer-events-none z-[3]"
        animate={{ y: [0, -16, 0], x: [0, 9, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* Cloud — right side, mid height */}
      <motion.img
        src="/images/app-dev/cloud-wide.png"
        alt=""
        className="hidden lg:block absolute top-[500px] right-[3%] w-[260px] pointer-events-none z-[3]"
        animate={{ y: [0, -10, 0], x: [0, -7, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
      />

      {/* Title */}
      <h2 className="relative lg:absolute font-semibold text-[#0f1112] text-center text-[24px] leading-[32px] sm:text-[34px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] mx-auto px-4 lg:px-0 mb-8 lg:mb-0 lg:left-1/2 lg:-translate-x-1/2 lg:top-[120px] w-full lg:w-[616px]">
        The Process Behind Our Solutions
      </h2>

      {/* Central phone mockup */}
      <div className="hidden lg:flex absolute overflow-hidden left-1/2 -translate-x-1/2 top-[296px] w-[618px] h-[751px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/app-dev/process-phone.png"
          alt="App process"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blur overlay */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/app-dev/process-blur.svg"
        alt=""
        className="hidden lg:block absolute top-[590px] left-1/2 -translate-x-1/2 w-[1399px] pointer-events-none z-[2]"
      />

      {/* Steps — normal flow, drives section height */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 bg-white pb-14 lg:pb-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-6">
          {steps.map((step) => (
            <div key={step.title} className="group flex flex-col gap-4 sm:gap-[25px]">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-[8px] bg-[#f5f6f8] group-hover:bg-[#ec7161] transition-colors duration-300 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.iconSrc} alt={step.title} width={40} height={40} />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold text-[#181818] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[32px] lg:text-[36px] lg:leading-[46px]">
                  {step.title}
                </p>
                <p className="font-normal text-[#484848] text-[14px] leading-[21px] sm:text-base sm:leading-6">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
