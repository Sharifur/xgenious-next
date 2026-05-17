'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion';
import SectionBadge from '@/components/ui/SectionBadge';

type Tag = { label: string; dark: boolean };

function tagParallax(i: number) {
  const xDirs = [1, -0.8, 1.3, -1.1, 0.6, -1.4, 0.9, -0.7];
  const yDirs = [-0.9, 1.1, -0.6, 1.3, -1.2, 0.7, -1, 0.5];
  const mag = 0.05 + (i % 6) * 0.022;
  return {
    xS: xDirs[i % xDirs.length] * mag,
    yS: yDirs[i % yDirs.length] * mag,
  };
}

function FloatingTag({
  tag,
  index,
  active,
  mouseX,
  mouseY,
}: {
  tag: Tag;
  index: number;
  active: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const [phase, setPhase] = useState<'hidden' | 'drop' | 'float'>('hidden');

  useEffect(() => {
    if (active && phase === 'hidden') setPhase('drop');
  }, [active, phase]);

  const { xS, yS } = tagParallax(index);
  const tagX = useTransform(mouseX, (v) => v * xS);
  const tagY = useTransform(mouseY, (v) => v * yS);

  const floatStyle = phase === 'float' ? { x: tagX, y: tagY } : {};

  return (
    <motion.span
      initial={{ y: -420 }}
      animate={
        phase === 'hidden'
          ? { y: -420 }
          : phase === 'drop'
          ? { y: 0 }
          : { y: 0 }
      }
      style={{
        ...floatStyle,
        background: 'rgba(255,255,255,0.12)',
        color: '#e8e8e8',
        border: '1px solid rgba(255,255,255,0.18)',
        backdropFilter: 'blur(4px)',
      }}
      transition={
        phase === 'drop'
          ? { delay: index * 0.07, type: 'spring', stiffness: 180, damping: 22 }
          : { duration: 0 }
      }
      onAnimationComplete={() => {
        if (phase === 'drop') setPhase('float');
      }}
      className="px-3 py-1.5 rounded-full font-medium text-[13px] leading-none"
    >
      {tag.label}
    </motion.span>
  );
}

function TechCard({ title, darkTags, lightTags }: { title: string; darkTags: string[]; lightTags: string[] }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 100, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set(e.clientX - (rect.left + rect.width / 2));
    rawY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rawX.set(0);
    rawY.set(0);
  };

  const allTags: Tag[] = [
    ...darkTags.map((t) => ({ label: t, dark: true })),
    ...lightTags.map((t) => ({ label: t, dark: false })),
  ];

  return (
    <div
      ref={ref}
      className="relative h-[356px] overflow-hidden rounded-[12px] flex-shrink-0 w-full cursor-default"
      style={{ background: '#1e1e1e' }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background image — fades in on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundImage: 'url(/images/saas-dev/tech-card-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Title */}
      <div className="absolute left-6 top-6 flex items-center gap-2 z-10">
        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#ec7161' }} />
        <span className="text-white font-semibold" style={{ fontSize: 20, lineHeight: '28px' }}>
          {title}
        </span>
      </div>

      {/* Tags */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 z-10">
        {allTags.map((tag, i) => (
          <FloatingTag
            key={tag.label}
            tag={tag}
            index={i}
            active={isInView}
            mouseX={springX}
            mouseY={springY}
          />
        ))}
      </div>
    </div>
  );
}

const row1 = [
  { title: 'Frontend', darkTags: ['React', 'Next.js'], lightTags: ['Tailwind CSS', 'TypeScript', 'Radix UI', 'shadcn/ui'] },
  { title: 'Backend',  darkTags: ['Laravel', 'Node.js'], lightTags: ['GraphQL / REST', 'PostgreSQL', 'Python (FastAPI)', 'Redis'] },
  { title: 'Mobile',   darkTags: ['Flutter'], lightTags: ['React Native', 'Swift (iOS native)', 'Kotlin (Android native)', 'Expo'] },
];

const row2 = [
  { title: 'AI & Data', darkTags: ['Anthropic Claude', 'OpenAI'], lightTags: ['LangChain', 'LangGraph', 'Pinecone', 'pgvector'] },
  { title: 'Cloud',     darkTags: ['AWS'], lightTags: ['Azure', 'Cloudflare', 'Vercel', 'DigitalOcean', 'PostgreSQL'] },
  { title: 'DevOps',    darkTags: ['Docker', 'Kubernetes'], lightTags: ['Terraform', 'GitHub Actions', 'Datadog', 'Sentry', 'PostHog'] },
];

export default function TechStack() {
  return (
    <section className="py-14 sm:py-20 lg:py-[120px]" style={{ background: '#090808' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-10 sm:gap-14 lg:gap-[72px] items-center">
        <div className="flex flex-col items-center gap-4 text-center max-w-[621px]">
          <SectionBadge variant="dark">Tech Stack</SectionBadge>
          <h2 className="text-white font-semibold text-[26px] leading-[34px] sm:text-[34px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px]">
            Modern Stack, Optimized for Speed
          </h2>
          <p className="font-normal" style={{ fontSize: 16, lineHeight: '24px', color: '#b9bac0' }}>
            No logo-salad. Each layer picked for a reason we&apos;re happy to defend.
          </p>
        </div>

        <div className="flex flex-col gap-5 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {row1.map((c) => <TechCard key={c.title} {...c} />)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {row2.map((c) => <TechCard key={c.title} {...c} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
