'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowLeft, IconArrowRight, IconX } from '@tabler/icons-react';

export type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
  photo: string;
  videoUrl?: string;
};

const defaultTestimonials: TestimonialItem[] = [
  {
    name: 'Austin Harlan',
    role: 'Founder & CEO',
    quote: 'We explore user behavior and Motivations design meaningful Digital experiences built around Genuine user insights.',
    photo: '/images/saas-dev/testimonial-1.png',
    videoUrl: 'https://www.youtube.com/watch?v=8QnS5t8qNYY',
  },
  {
    name: 'Austin Harlan',
    role: 'Founder & CEO',
    quote: 'We explore user behavior and Motivations design meaningful Digital experiences built around Genuine user insights.',
    photo: '/images/saas-dev/testimonial-2.png',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Product Lead',
    quote: 'The team delivered beyond expectations. Clean architecture, fast delivery, and zero surprises on pricing.',
    photo: '/images/saas-dev/testimonial-1.png',
    videoUrl: 'https://www.youtube.com/watch?v=8QnS5t8qNYY',
  },
  {
    name: 'James Okonkwo',
    role: 'CTO',
    quote: 'From MVP to production in 8 weeks. The scope was fixed, the price was fixed, and they delivered exactly what was promised.',
    photo: '/images/saas-dev/testimonial-2.png',
  },
];

function getYouTubeId(url: string): string | null {
  const m = url.match(/[?&]v=([^&]+)/) ?? url.match(/youtu\.be\/([^?]+)/);
  return m ? m[1] : null;
}

function VideoModal({ url, onClose }: { url: string; onClose: () => void }) {
  const id = getYouTubeId(url);
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl"
        style={{ aspectRatio: '16/9' }}
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          className="w-full h-full rounded-xl"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors"
        >
          <IconX size={28} />
        </button>
      </motion.div>
    </motion.div>
  );
}

function TestimonialCard({
  name, role, quote, photo, videoUrl, onPlay,
}: TestimonialItem & { onPlay?: () => void }) {
  return (
    <div className="flex rounded-[8px] overflow-hidden" style={{ background: '#f5f6f8', height: 350 }}>
      {/* Left: content */}
      <div className="flex flex-col justify-between flex-1 p-8">
        <div className="flex flex-col gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/saas-dev/testimonial-quote.svg" alt="" width={32} height={32} className="object-contain" />
          <p className="font-normal" style={{ fontSize: 18, lineHeight: '28px', color: '#2f2f2f' }}>
            {quote}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-[#0f1112]" style={{ fontSize: 20, lineHeight: '28px' }}>{name}</p>
          <p className="font-normal text-[#717179]" style={{ fontSize: 14, lineHeight: '20px' }}>{role}</p>
        </div>
      </div>

      {/* Right: photo */}
      <div className="relative flex-shrink-0" style={{ width: '42%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo} alt={name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
        {videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={onPlay}
              aria-label="Play video"
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform"
              style={{ background: 'rgba(255,255,255,0.92)' }}
            >
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                <path d="M11 7L1 1v12l10-6z" fill="#0f1112" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir * 60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: -dir * 60, opacity: 0 }),
};

type Props = {
  items?: TestimonialItem[];
  title?: string;
};

export default function Testimonials({
  items = defaultTestimonials,
  title = 'Where Feedback Meets Excellence',
}: Props) {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const perPage = 2;
  const totalPages = Math.ceil(items.length / perPage);
  const visible = items.slice(page * perPage, page * perPage + perPage);

  const go = (delta: number) => {
    setDir(delta);
    setPage((p) => (p + delta + totalPages) % totalPages);
  };

  return (
    <>
      <section className="py-[120px] bg-white">
        <div className="container-page flex flex-col gap-[72px]">
          <div className="flex items-start justify-between">
            <h2 className="text-[#0f1112] font-semibold" style={{ fontSize: 44, lineHeight: '52px', maxWidth: 620 }}>
              {title}
            </h2>
            <div className="flex items-center gap-3 flex-shrink-0 mt-1">
              <button
                aria-label="Previous"
                onClick={() => go(-1)}
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border border-[#e0e0e0] text-[#181818] hover:border-[#181818] transition-colors"
              >
                <IconArrowLeft size={20} stroke={1.8} />
              </button>
              <button
                aria-label="Next"
                onClick={() => go(1)}
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-[#181818] text-white hover:bg-[#ec7161] transition-colors"
              >
                <IconArrowRight size={20} stroke={1.8} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={page}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {visible.map((t, i) => (
                  <TestimonialCard
                    key={i}
                    {...t}
                    onPlay={t.videoUrl ? () => setActiveVideo(t.videoUrl!) : undefined}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-[10px]">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > page ? 1 : -1); setPage(i); }}
                  aria-label={`Go to page ${i + 1}`}
                  className="rounded-full transition-all duration-300 flex-shrink-0"
                  style={{
                    width: i === page ? 32 : 10,
                    height: 10,
                    background: i === page ? '#ec7161' : '#d1d1d1',
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {activeVideo && (
          <VideoModal url={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
