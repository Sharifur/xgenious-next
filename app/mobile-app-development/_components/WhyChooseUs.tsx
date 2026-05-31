'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionBadge from '@/components/ui/SectionBadge';

const features = [
  {
    icon: '/site-images/app-dev/code-icon.svg',
    title: 'Rapid Development',
    desc: "Flutter's single codebase ships iOS and Android simultaneously — cutting build time without cutting corners. We move fast because we've done it before, not because we're skipping steps.",
  },
  {
    icon: '/site-images/app-dev/sheild-icon.svg',
    title: 'Enterprise Security',
    desc: 'Biometric auth, encrypted local storage, certificate pinning, and OWASP Mobile Top 10 practices built into every build — not added as an afterthought in the final sprint.',
  },
  {
    icon: '/site-images/app-dev/support-icon.svg',
    title: 'Ongoing Support',
    desc: "Every engagement includes post-launch warranty, App Store update management, and OS compatibility patches. We don't disappear on launch day — we're on call through the first month.",
  },
  {
    icon: '/site-images/app-dev/brain-icon.svg',
    title: 'User-Centered Design',
    desc: "Every screen starts from user flows, not Dribbble trends. We prototype, test with real users, and iterate before a line of code is written — so the build reflects how people actually use the app.",
  },
];


function Counter({ target }: { target: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (2000 / 16));
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
    <section className="pt-10 pb-14 sm:pt-16 sm:pb-20 xl:pt-[100px] xl:pb-0 bg-[#F5F6F8]">
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-14 lg:gap-[96px]">

        {/* ── Part 1: Crafted for Performance and Security ── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 gap-8">
          {/* Left — title + feature cards */}
          <div className="flex flex-col gap-8 lg:gap-10 w-full lg:w-[520px] shrink-0">
            <h3 className="font-semibold text-[#0f1112] text-[26px] leading-[34px] sm:text-[34px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px]">
              Built for Performance, Security, and Scale
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              src="/site-images/app-dev/crafted-illustration.png"
              alt="App performance illustration"
              className="w-full max-w-[600px] xl:max-w-none"
            />
          </div>
        </div>

        {/* ── Part 2: Why Choose US ── */}
        <div className="flex flex-col gap-4 items-center text-center max-w-[712px] mx-auto">
          <SectionBadge>Why Choose US</SectionBadge>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="font-semibold text-[#0f1112] text-[26px] leading-[34px] sm:text-[34px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px]">
              Why Businesses Trust Us With Their Apps
            </h2>
            <p className="font-normal text-[#484848] text-[14px] leading-[21px] sm:text-[16px] sm:leading-6 max-w-[580px]">
              We build fast, scalable mobile apps that deliver seamless user experiences and support real business growth — because we run several of our own.
            </p>
          </div>
        </div>

        {/* 3 bento cards */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6">
          {/* Left card — peach, tall */}
          <div ref={leftCardRef} className="relative overflow-hidden rounded-[12px] bg-[#f3dccf] w-full lg:w-[424px] h-[320px] sm:h-[420px] lg:h-[642px]">
            <motion.div
              className="absolute inset-0 overflow-hidden top-[200px]"
              variants={slideUp}
              initial="hidden"
              animate={leftInView ? 'visible' : 'hidden'}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/site-images/app-dev/user-first-experience.png" alt="User-First App" className="absolute left-0 top-0" />
            </motion.div>
            <div className="absolute left-6 top-6 flex flex-col gap-2 w-[265px]">
              <p className="font-semibold text-[#181818] text-[24px] leading-8">User-First App Experience</p>
              <p className="font-normal text-[#2f2f2f] text-[13px] leading-[20px]">Every UI decision is grounded in user flows, not assumptions. We design for the people who will actually tap, swipe, and return to the app every day.</p>
            </div>
            <div className="absolute flex items-center justify-center w-[47px] h-[47px] rounded-[23.5px] right-6 top-[33px] bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/site-images/app-dev/why-icon-user.svg" alt="" width={24} height={24} />
            </div>
          </div>

          {/* Middle card — blue-purple, shorter */}
          <div className="relative rounded-[12px] bg-[#cfd1ff] w-full lg:w-[424px] h-auto lg:h-[457px] flex flex-col lg:block">
            <p className="self-start lg:absolute font-semibold text-[#0f1112] text-[40px] leading-[48px] lg:text-[72px] lg:leading-[80px] px-6 pt-6 lg:px-0 lg:pt-0 lg:right-6 lg:top-8">
              <Counter target={50} />
            </p>
            <div className="flex flex-col gap-[14px] px-6 pb-6 pt-4 lg:absolute lg:p-0 lg:left-6 lg:top-[291px] lg:w-[373px]">
              <p className="font-semibold text-[#181818] text-[24px] leading-8">
                Apps Successfully Delivered
              </p>
              <p className="font-normal text-[#2f2f2f] text-[14px] leading-[22px] lg:text-[16px] lg:leading-6">
                Apps successfully delivered — for ambitious founders and growing mid-market teams around the world.
              </p>
            </div>
          </div>

          {/* Right card — white, tall */}
          <div ref={rightCardRef} className="relative overflow-hidden rounded-[12px] bg-white w-full lg:w-[424px] h-[320px] sm:h-[420px] lg:h-[642px] border border-[#bababa]">
            <motion.div
              className="absolute overflow-hidden left-0 lg:-left-[90px] top-[79px] w-full lg:w-[639px] h-full lg:h-[639px]"
              variants={slideUp}
              initial="hidden"
              animate={rightInView ? 'visible' : 'hidden'}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/site-images/app-dev/why-man-phone.png" alt="Built Together" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
            <div className="absolute left-[23px] top-[23px] flex flex-col gap-2 w-[265px]">
              <p className="font-semibold text-[#181818] text-[24px] leading-8">Built Together, Built Better</p>
              <p className="font-normal text-[#2f2f2f] text-[13px] leading-[20px]">From ambitious founders to growing mid-market teams — we work as an extension of your team, not a black-box agency. Weekly demos, shared staging, full visibility throughout.</p>
            </div>
            <div className="absolute flex items-center justify-center w-[47px] h-[47px] rounded-[23.5px] right-6 top-8 bg-[#f3dccf]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/site-images/app-dev/why-icon-built.svg" alt="" width={24} height={24} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
