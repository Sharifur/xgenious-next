'use client';

import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Platform logos ──────────────────────────────────────────────────────────

// eslint-disable-next-line @next/next/no-img-element
const AndroidLogo = () => <img src="/images/app-dev/logo-android.svg" alt="Android" width={72} height={72} />;
// eslint-disable-next-line @next/next/no-img-element
const iOSLogo    = () => <img src="/images/app-dev/logo-apple.svg"   alt="Apple"   width={60} height={72} style={{ filter: 'brightness(0) invert(1)' }} />;
// eslint-disable-next-line @next/next/no-img-element
const ReactNativeLogo = () => <img src="/images/app-dev/logo-react-native.png" alt="React Native" width={140} height={44} />;
// eslint-disable-next-line @next/next/no-img-element
const FlutterLogo = () => <img src="/images/app-dev/logo-flutter.svg" alt="Flutter" width={60} height={72} />;

// ── App screen mockups ──────────────────────────────────────────────────────

function StarIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 12 12" fill="#f59e0b">
      <path d="M6 1l1.4 2.8 3.1.4-2.2 2.2.5 3.1L6 8l-2.8 1.5.5-3.1L1.5 4.2l3.1-.4z"/>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="9" r="6"/>
      <path d="M15 15l3 3" strokeLinecap="round"/>
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0" strokeLinecap="round"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  );
}

// Screen 1 — Freelancer marketplace (Xilancer-style)
function FreelancerAppScreen() {
  return (
    <div className="absolute inset-0 bg-white overflow-hidden">
      {/* Status bar spacer */}
      <div className="h-[44px]"/>

      {/* Purple header */}
      <div className="bg-[#5b4fcf] px-[14px] pt-[10px] pb-[28px]">
        <div className="flex items-center justify-between mb-[10px]">
          <div className="flex items-center gap-[7px]">
            <div className="w-[28px] h-[28px] rounded-full bg-[#4a3db8] border-2 border-[#7c6fd6] overflow-hidden flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#9b8fe0">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
            <div>
              <p className="text-[8px] text-[#b8aff5] leading-none mb-[2px]">Welcome Back!</p>
              <p className="text-[10px] font-semibold text-white leading-none">Leslie Alexander</p>
            </div>
          </div>
          <div className="w-[26px] h-[26px] rounded-full bg-[#4a3db8] flex items-center justify-center">
            <BellIcon />
          </div>
        </div>
        <p className="text-[12px] font-bold text-white leading-[16px] mb-[10px]">
          Find the Perfect<br/>Freelancer for<br/>Any Project
        </p>
        <button className="bg-white text-[#5b4fcf] text-[8px] font-bold px-[10px] py-[4px] rounded-full">
          Explore all
        </button>
      </div>

      {/* Search bar — overlapping header */}
      <div className="px-[12px] -mt-[16px]">
        <div className="bg-white rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.12)] px-[10px] py-[8px] flex items-center gap-[6px]">
          <span className="text-gray-400"><SearchIcon /></span>
          <span className="text-[9px] text-[#b0b0b0]">Search here...</span>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="px-[12px] mt-[12px]">
        <p className="text-[10px] font-bold text-[#181818] mb-[8px]">Popular Categories</p>
        <div className="flex gap-[7px]">
          {[
            { label: 'Design', color: 'bg-[#ede9ff]', icon: '#5b4fcf' },
            { label: 'Dev', color: 'bg-[#e8f5e9]', icon: '#2e7d32' },
            { label: 'Writing', color: 'bg-[#fff3e0]', icon: '#e65100' },
            { label: 'Video', color: 'bg-[#fce4ec]', icon: '#c62828' },
          ].map((c) => (
            <div key={c.label} className="flex flex-col items-center gap-[4px]">
              <div className={`w-[36px] h-[36px] rounded-[10px] ${c.color} flex items-center justify-center`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill={c.icon}>
                  <rect x="3" y="3" width="8" height="8" rx="2"/>
                  <rect x="13" y="3" width="8" height="8" rx="2"/>
                  <rect x="3" y="13" width="8" height="8" rx="2"/>
                  <rect x="13" y="13" width="8" height="8" rx="2"/>
                </svg>
              </div>
              <p className="text-[7px] text-[#484848]">{c.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Services */}
      <div className="px-[12px] mt-[12px]">
        <p className="text-[10px] font-bold text-[#181818] mb-[8px]">Popular Services</p>
        <div className="flex flex-col gap-[8px]">
          {[
            { title: 'Professional Figma design for website', price: '$45', rating: '4.9', reviews: '21', bg: 'bg-[#ede9ff]' },
            { title: 'Mobile app UI/UX design specialist', price: '$60', rating: '4.8', reviews: '15', bg: 'bg-[#e8f5e9]' },
          ].map((s) => (
            <div key={s.title} className="flex gap-[8px] bg-[#fafafa] rounded-[8px] p-[7px]">
              <div className={`w-[40px] h-[40px] rounded-[8px] ${s.bg} shrink-0`}/>
              <div className="flex flex-col justify-between flex-1 min-w-0">
                <p className="text-[8px] font-semibold text-[#181818] leading-[11px] line-clamp-2">{s.title}</p>
                <div className="flex items-center justify-between mt-[3px]">
                  <div className="flex items-center gap-[2px]">
                    <StarIcon />
                    <span className="text-[7px] text-[#484848]">{s.rating} ({s.reviews})</span>
                  </div>
                  <span className="text-[8px] font-bold text-[#5b4fcf]">{s.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Screen 2 — Home services app (ProHandy-style)
function HomeServicesAppScreen() {
  return (
    <div className="absolute inset-0 bg-[#f5f6f8] overflow-hidden">
      {/* Status bar spacer */}
      <div className="h-[44px]"/>

      {/* Blue header */}
      <div className="bg-[#1a6bff] px-[14px] pt-[10px] pb-[22px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[5px]">
            <LocationIcon />
            <div>
              <p className="text-[7px] text-[#a0c4ff] leading-none mb-[2px]">Home</p>
              <p className="text-[9px] font-semibold text-white leading-none">344 Biscayne, FL 33218</p>
            </div>
          </div>
          <div className="flex items-center gap-[6px]">
            <div className="w-[26px] h-[26px] rounded-full bg-[#1558d6] flex items-center justify-center">
              <BellIcon />
            </div>
            <div className="w-[26px] h-[26px] rounded-full bg-[#ec7161] overflow-hidden flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-[12px] -mt-[14px]">
        <div className="bg-white rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] px-[10px] py-[8px] flex items-center gap-[6px]">
          <span className="text-gray-400"><SearchIcon /></span>
          <span className="text-[9px] text-[#b0b0b0]">Search services...</span>
        </div>
      </div>

      {/* Service categories */}
      <div className="px-[12px] mt-[12px]">
        <div className="flex justify-between">
          {[
            { label: 'Cleaning', color: 'bg-[#e3f2fd]', fill: '#1a6bff' },
            { label: 'Painting', color: 'bg-[#fff3e0]', fill: '#f59e0b' },
            { label: 'Plumbing', color: 'bg-[#e8f5e9]', fill: '#10b981' },
            { label: 'Laundry', color: 'bg-[#fce4ec]', fill: '#ec7161' },
          ].map((c) => (
            <div key={c.label} className="flex flex-col items-center gap-[5px]">
              <div className={`w-[38px] h-[38px] rounded-[12px] ${c.color} flex items-center justify-center`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill={c.fill}>
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                </svg>
              </div>
              <p className="text-[7px] text-[#484848] font-medium">{c.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Service cards */}
      <div className="px-[12px] mt-[12px]">
        <div className="flex flex-col gap-[8px]">
          {[
            { title: 'Home Cleaning Services at Miami, FL', price: '$199', oldPrice: '$244', rating: '4.5', tag: 'Painting', tagColor: 'bg-[#fff3e0] text-[#f59e0b]', bg: 'bg-[#e3f2fd]' },
            { title: 'Reliable Plumbing Quick and Efficient', price: '$199', oldPrice: '$244', rating: '4.6', tag: 'Plumbing', tagColor: 'bg-[#e8f5e9] text-[#10b981]', bg: 'bg-[#e8f5e9]' },
          ].map((s) => (
            <div key={s.title} className="bg-white rounded-[10px] p-[8px] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
              <div className={`w-full h-[52px] rounded-[7px] ${s.bg} mb-[7px]`}/>
              <span className={`text-[6px] font-semibold px-[5px] py-[2px] rounded-full ${s.tagColor}`}>{s.tag}</span>
              <p className="text-[8px] font-semibold text-[#181818] leading-[11px] mt-[4px] line-clamp-2">{s.title}</p>
              <div className="flex items-center justify-between mt-[5px]">
                <div className="flex items-center gap-[2px]">
                  <StarIcon />
                  <span className="text-[7px] text-[#484848]">{s.rating}</span>
                  <span className="text-[7px] text-[#b0b0b0] ml-[3px]">Robert Fox</span>
                </div>
                <div className="flex items-center gap-[3px]">
                  <span className="text-[7px] text-[#b0b0b0] line-through">{s.oldPrice}</span>
                  <span className="text-[9px] font-bold text-[#181818]">{s.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Service definitions ─────────────────────────────────────────────────────

const services = [
  {
    id: 1,
    title: 'Android App Development',
    description: "Powerful Android applications built with Kotlin and Jetpack Compose. Modern, scalable, and maintainable — targeting the full Android ecosystem from phones to tablets, with Play Store submission handled by us.",
    platform: 'Android',
    screenBg: 'bg-[#0a1f0f]',
    labelClass: 'text-[#3DDC84]',
    dotClass: 'bg-[#3DDC84]',
    Logo: AndroidLogo,
    phones: ['samsung', 'samsung'] as const,
  },
  {
    id: 2,
    title: 'iOS Application Development',
    description: "Native Swift apps built to Apple's Human Interface Guidelines. Performance-optimised, TestFlight-tested, and App Store-submitted — we handle the full review process so you don't have to navigate it alone.",
    platform: 'iOS',
    screenBg: 'bg-black',
    labelClass: 'text-white',
    dotClass: 'bg-white',
    Logo: iOSLogo,
    phones: ['apple', 'apple'] as const,
  },
  {
    id: 3,
    title: 'React Native App Development',
    description: "Cross-platform builds for teams with an existing JavaScript stack. Shared logic, native components, and a codebase your web engineers can contribute to — without sacrificing the feel of a native app.",
    platform: 'React Native',
    screenBg: 'bg-[#001a2e]',
    labelClass: 'text-[#61DAFB]',
    dotClass: 'bg-[#61DAFB]',
    Logo: ReactNativeLogo,
    phones: ['samsung', 'apple'] as const,
  },
  {
    id: 4,
    title: 'Flutter App Development',
    description: "Our recommended cross-platform choice for most new builds. A single Dart codebase targeting iOS, Android, and web — with pixel-perfect UI, 60fps performance, and a fraction of the maintenance overhead of two native codebases.",
    platform: 'Flutter',
    screenBg: 'bg-[#01172b]',
    labelClass: 'text-[#54C5F8]',
    dotClass: 'bg-[#54C5F8]',
    Logo: FlutterLogo,
    phones: ['samsung', 'apple'] as const,
  },
];

type Service = typeof services[0];

// ── Boot screen ─────────────────────────────────────────────────────────────

function BootScreen({ service }: { service: Service }) {
  const { Logo, platform, screenBg, labelClass, dotClass } = service;
  return (
    <motion.div
      key="boot"
      className={`absolute inset-0 ${screenBg} flex flex-col items-center justify-center gap-5`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <Logo />
      </motion.div>

      <motion.p
        className={`text-[12px] font-medium tracking-[0.18em] uppercase ${labelClass}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.4 }}
      >
        {platform}
      </motion.p>

      <motion.div
        className="flex gap-[5px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className={`block w-[6px] h-[6px] rounded-full ${dotClass}`}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.22 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

// ── App screen wrapper (fades in after boot) ─────────────────────────────────

function AppScreenWrapper({ screenIdx }: { screenIdx: number }) {
  return (
    <motion.div
      key="app"
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {screenIdx === 0 ? <FreelancerAppScreen /> : <HomeServicesAppScreen />}
    </motion.div>
  );
}

// ── Phone frames ─────────────────────────────────────────────────────────────

function ApplePhone({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-[224px] h-[458px]">
      <div className="absolute inset-0 rounded-[42px] bg-[#1c1c1e] border border-[#3a3a3c] shadow-[0_32px_64px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.07)]">
        {/* Volume buttons */}
        <div className="absolute -left-[3px] top-[88px] w-[3px] h-[27px] bg-[#2c2c2e] rounded-l-sm"/>
        <div className="absolute -left-[3px] top-[126px] w-[3px] h-[46px] bg-[#2c2c2e] rounded-l-sm"/>
        <div className="absolute -left-[3px] top-[180px] w-[3px] h-[46px] bg-[#2c2c2e] rounded-l-sm"/>
        {/* Power button */}
        <div className="absolute -right-[3px] top-[126px] w-[3px] h-[64px] bg-[#2c2c2e] rounded-r-sm"/>
        {/* Screen */}
        <div className="absolute inset-[5px] rounded-[38px] overflow-hidden bg-black">
          {/* Dynamic Island */}
          <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[88px] h-[24px] bg-black rounded-full z-20 border border-[#2a2a2a]"/>
          {children}
        </div>
      </div>
    </div>
  );
}

function SamsungPhone({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-[224px] h-[458px]">
      {/* Outer frame — Samsung S23: flatter corners, slightly different finish */}
      <div className="absolute inset-0 rounded-[32px] bg-[#181818] border border-[#4a4a4a] shadow-[0_32px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]">
        {/* Slim highlight strip along top edge */}
        <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.18)] to-transparent rounded-full"/>
        {/* Volume buttons — left side, S23 style */}
        <div className="absolute -left-[3px] top-[110px] w-[3px] h-[40px] bg-[#323232] rounded-l-sm"/>
        <div className="absolute -left-[3px] top-[160px] w-[3px] h-[40px] bg-[#323232] rounded-l-sm"/>
        {/* Power / Bixby button — right side */}
        <div className="absolute -right-[3px] top-[130px] w-[3px] h-[60px] bg-[#323232] rounded-r-sm"/>
        {/* Screen */}
        <div className="absolute inset-[4px] rounded-[28px] overflow-hidden bg-black">
          {/* Punch-hole camera — centered small circle */}
          <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[11px] h-[11px] bg-[#080808] rounded-full z-20 ring-[1px] ring-[#1e1e1e]"/>
          {children}
        </div>
      </div>
    </div>
  );
}

// ── Single phone — picks frame by model ──────────────────────────────────────

function SinglePhone({
  service,
  phase,
  screenIdx,
  model,
}: {
  service: Service;
  phase: 'boot' | 'app';
  screenIdx: number;
  model: 'samsung' | 'apple';
}) {
  const content = (
    <AnimatePresence mode="wait">
      {phase === 'boot' ? (
        <BootScreen key={`boot-${service.id}`} service={service} />
      ) : (
        <AppScreenWrapper key={`app-${service.id}-${screenIdx}`} screenIdx={screenIdx} />
      )}
    </AnimatePresence>
  );

  return model === 'samsung'
    ? <SamsungPhone>{content}</SamsungPhone>
    : <ApplePhone>{content}</ApplePhone>;
}

// ── Phone pair ───────────────────────────────────────────────────────────────

function PhonePair({ activeId }: { activeId: number }) {
  const service = services.find((s) => s.id === activeId)!;
  const [phase, setPhase] = useState<'boot' | 'app'>('boot');

  useEffect(() => {
    setPhase('boot');
    const timer = setTimeout(() => setPhase('app'), 2600);
    return () => clearTimeout(timer);
  }, [activeId]);

  return (
    <div className="relative w-[230px] h-[460px] sm:w-[460px] sm:h-[520px]">
      {/* Left phone — hidden on mobile, tilted on sm+ */}
      <div className="hidden sm:block absolute bottom-0 left-0 origin-bottom -rotate-[10deg] z-10">
        <SinglePhone service={service} phase={phase} screenIdx={0} model={service.phones[0]} />
      </div>
      {/* Right phone — centered on mobile, tilted on sm+ */}
      <div className="absolute bottom-0 right-0 origin-bottom sm:rotate-[6deg] z-20">
        <SinglePhone service={service} phase={phase} screenIdx={1} model={service.phones[1]} />
      </div>
    </div>
  );
}

// ── Section ─────────────────────────────────────────────────────────────────

export default function WhatWeBuild() {
  const [active, setActive] = useState(1);

  return (
    <section className="py-14 sm:py-20 lg:py-[120px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col lg:flex-row lg:items-center lg:gap-16">

        {/* Left — accordion */}
        <div className="flex flex-col gap-8 lg:gap-10 w-full lg:w-[480px] shrink-0">
          <h2 className="font-semibold text-[#0f1112] text-[26px] leading-[34px] sm:text-[34px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px]">
            Custom Mobile Solutions for Modern Businesses
          </h2>

          <div className="flex flex-col">
            {services.map((s) => {
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className="text-left focus:outline-none"
                >
                  <div className="flex items-start gap-4 py-5">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 text-[14px] font-semibold transition-colors duration-200 ${
                      isActive ? 'bg-[#ec7161] text-white' : 'border border-[#d0d0d0] text-[#9a9a9a]'
                    }`}>
                      {s.id}
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <p className={`font-semibold text-[18px] leading-7 transition-colors duration-200 ${
                        isActive ? 'text-[#181818]' : 'text-[#9a9a9a]'
                      }`}>
                        {s.title}
                      </p>
                      {isActive && (
                        <p className="font-normal text-[#484848] text-[15px] leading-6">
                          {s.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="h-px bg-[#ebebeb] w-full"/>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right — animated phone pair */}
        <div className="flex-none lg:flex-1 flex items-center justify-center pt-8 lg:pt-0">
          <PhonePair activeId={active} />
        </div>

      </div>
    </section>
  );
}
