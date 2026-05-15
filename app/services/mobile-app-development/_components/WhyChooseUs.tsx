'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionBadge from '@/components/ui/SectionBadge';

const features = [
  {
    icon: '/images/app-dev/code-icon.svg',
    title: 'Rapid Development',
    desc: 'Accelerate your time to market with our agile development methodology and proven frameworks that deliver results faster.',
  },
  {
    icon: '/images/app-dev/sheild-icon.svg',
    title: 'Enterprise Security',
    desc: 'Built-in security best practices protect user data and prevent vulnerabilities with industry-standard encryption.',
  },
  {
    icon: '/images/app-dev/support-icon.svg',
    title: 'Ongoing Support',
    desc: 'Accelerate your time to market with our agile development methodology and proven frameworks that deliver results faster.',
  },
  {
    icon: '/images/app-dev/brain-icon.svg',
    title: 'User-Centered Design',
    desc: 'Built-in security best practices protect user data and prevent vulnerabilities with industry-standard encryption.',
  },
];


function Counter({ target }: { target: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (1500 / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}+</span>;
}

const slideUp = {
  hidden: { y: 80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function WhyChooseUs() {
  const leftCardRef  = useRef(null);
  const rightCardRef = useRef(null);

  const leftInView  = useInView(leftCardRef,  { once: true, margin: '-80px' });
  const rightInView = useInView(rightCardRef, { once: true, margin: '-80px' });

  return (
    <section className="pt-[10px] pb-[120px] xl:pt-[100px] xl:pb-0 bg-[#F5F6F8]">
      <div className="container-page flex flex-col gap-[96px]">

        {/* ── Part 1: Crafted for Performance and Security ── */}
        <div className="flex items-start gap-16">
          {/* Left — title + feature cards */}
          <div className="flex flex-col gap-10 w-[520px] shrink-0">
            <h2 className="font-semibold text-[#0f1112] text-[44px] leading-[52px]">
              Crafted for Performance and Security
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="group flex flex-col gap-3 rounded-[12px] p-5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center justify-center w-10 h-10 rounded-[8px] bg-[#181818] group-hover:bg-[#ec7161] transition-colors duration-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.icon} alt="" width={22} height={22} />
                  </div>
                  <p className="font-semibold text-[#181818] text-[16px] leading-6">{f.title}</p>
                  <p className="font-normal text-[#484848] text-[14px] leading-[21px]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — single illustration */}
          <div className="flex-1 flex items-start justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/app-dev/crafted-illustration.png"
              alt="App performance illustration"
              className="w-full max-w-[600px] xl:max-w-none"
            />
          </div>
        </div>

        {/* ── Part 2: Why Choose US ── */}
        <div className="flex flex-col gap-4 items-center text-center max-w-[712px] mx-auto">
          <SectionBadge>Why Choose US</SectionBadge>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="font-semibold text-[#0f1112] text-[44px] leading-[52px]">
              Why Businesses Trust Us With Their Apps
            </h2>
            <p className="font-normal text-[#484848] text-[16px] leading-6 max-w-[580px]">
              We build fast, scalable mobile apps designed to deliver seamless user experiences and support business growth.
            </p>
          </div>
        </div>

        {/* 3 bento cards */}
        <div className="flex items-end gap-6">
          {/* Left card — peach, tall */}
          <div ref={leftCardRef} className="relative shrink-0 overflow-hidden rounded-[12px] bg-[#f3dccf] w-[424px] h-[642px]">
            <motion.div
              className="absolute inset-0 overflow-hidden top-[106px]"
              variants={slideUp}
              initial="hidden"
              animate={leftInView ? 'visible' : 'hidden'}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/app-dev/user-first-experience.png" alt="User-First App" className="absolute left-0 top-0" />
            </motion.div>
            <p className="absolute font-semibold text-[#181818] text-[24px] leading-8 left-6 top-6 w-[265px]">
              User-First App Experience
            </p>
            <div className="absolute flex items-center justify-center w-[47px] h-[47px] rounded-[23.5px] right-6 top-[33px] bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/app-dev/why-icon-user.svg" alt="" width={24} height={24} />
            </div>
          </div>

          {/* Middle card — blue-purple, shorter */}
          <div className="relative shrink-0 rounded-[12px] bg-[#cfd1ff] w-[424px] h-[457px]">
            <p className="absolute font-semibold text-[#0f1112] text-[72px] leading-[80px] right-6 top-8">
              <Counter target={40} />
            </p>
            <div className="absolute flex flex-col gap-[14px] left-6 top-[291px] w-[373px]">
              <p className="font-semibold text-[#181818] text-[24px] leading-8">
                Apps Successfully Delivered
              </p>
              <p className="font-normal text-[#2f2f2f] text-[16px] leading-6">
                From ambitious startups to rapidly growing businesses around the world, we provide
                reliable and scalable solutions designed to support every stage of growth.
              </p>
            </div>
          </div>

          {/* Right card — white, tall */}
          <div ref={rightCardRef} className="relative shrink-0 overflow-hidden rounded-[12px] bg-white w-[424px] h-[642px] border border-[#bababa]">
            <motion.div
              className="absolute overflow-hidden -left-[90px] top-[79px] w-[639px] h-[639px]"
              variants={slideUp}
              initial="hidden"
              animate={rightInView ? 'visible' : 'hidden'}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/app-dev/why-man-phone.png" alt="Built Together" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
            <p className="absolute font-semibold text-[#181818] text-[24px] leading-8 left-[23px] top-[23px] w-[265px]">
              Built Together, Built Better
            </p>
            <div className="absolute flex items-center justify-center w-[47px] h-[47px] rounded-[23.5px] right-6 top-8 bg-[#f3dccf]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/app-dev/why-icon-built.svg" alt="" width={24} height={24} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
