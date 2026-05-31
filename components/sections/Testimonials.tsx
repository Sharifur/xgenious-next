'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

export type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
  photo: string;
  videoUrl?: string;
};

const defaultTestimonials: TestimonialItem[] = [
  {
    name: 'Sourav Dutta',
    role: 'Google Review · 5★',
    quote: 'Xgenious is not just a company; they are a team full of honesty, support, and professionalism. I have worked with many developers before, but the way Xgenious supports their clients is on another level. They don\'t just sell scripts — they stand by you like a true partner. Their products are powerful, and their customer care is world-class. Highly recommended!',
    photo: '/site-images/saas-dev/testimonial-1.png',
  },
  {
    name: 'Rohit Ahuja',
    role: 'Google Review · 5★',
    quote: 'A product is only as good as the team that supports it. You guys are the best. Stable product and the team is very polite, efficient and always ready to help. I am happy I am your client.',
    photo: '/site-images/saas-dev/testimonial-2.png',
  },
  {
    name: 'THE-GREAT-GATSBY',
    role: 'CodeCanyon Buyer · Fundorex · 5★',
    quote: 'Hats off to the Fundorex Team (xgenious). Prior to Fundorex we had explored another theme which did not meet our needs as fully as Fundorex. Support and genuine desire to assist is a hallmark of this creator.',
    photo: '/site-images/saas-dev/testimonial-1.png',
  },
  {
    name: 'tuliog',
    role: 'CodeCanyon Buyer · Fundorex · 5★',
    quote: 'There\'s no better crowdfunding theme than Fundorex. But what is more important to me is their excellent customer service.',
    photo: '/site-images/saas-dev/testimonial-2.png',
  },
  {
    name: 'Claudivam',
    role: 'CodeCanyon Buyer · Fundorex · 5★',
    quote: 'Perfect script and codes, platform meets what was described and very fast and helpful support.',
    photo: '/site-images/saas-dev/testimonial-1.png',
  },
  {
    name: 'ecosa',
    role: 'CodeCanyon Buyer · Nexelit · 5★',
    quote: 'I would like to express my biggest thanks to the entire team at Nexelit. Best script, Best support, Best Investment.',
    photo: '/site-images/saas-dev/testimonial-2.png',
  },
  {
    name: 'hopitalFuuta',
    role: 'CodeCanyon Buyer · Fundorex · 5★',
    quote: 'Very professional! My problem was resolved in less than half an hour. This is my second license for this product. I am completely satisfied!',
    photo: '/site-images/saas-dev/testimonial-1.png',
  },
  {
    name: 'bkaybkay',
    role: 'CodeCanyon Buyer · Nexelit · 5★',
    quote: 'Wonderful team and very good customer support. I would recommend them any time.',
    photo: '/site-images/saas-dev/testimonial-2.png',
  },
];

const AVATAR_COLORS = ['#F26B4E','#3B7A6A','#A78BFA','#1565C0','#10B981','#F59E0B','#EC4899','#6366F1'];

function avatarColor(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  return parts.length === 1
    ? name.slice(0, 2).toUpperCase()
    : (parts[0][0] + parts[1][0]).toUpperCase();
}

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F59E0B">
          <path d="M7 1l1.545 3.13 3.455.502-2.5 2.437.59 3.441L7 8.885l-3.09 1.625.59-3.441L2 4.632l3.455-.502z" />
        </svg>
      ))}
    </div>
  );
}

/* ── Platform logo icons ── */
const GoogleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const EnvatoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 128 128" fill="none" aria-hidden>
    <circle cx="64" cy="64" r="64" fill="#82B541"/>
    <path d="M48 88L32 40h16l8 28 8-28h16L64 88H48z" fill="white"/>
    <path d="M72 88V40h32v12H88v8h14v12H88v4h16v12H72z" fill="white"/>
  </svg>
);

const TrustpilotIcon = () => (
  <svg width="14" height="14" viewBox="0 0 128 128" fill="none" aria-hidden>
    <rect width="128" height="128" rx="4" fill="#00B67A"/>
    <path d="M64 18l11.2 34.4H112L82.4 72.8l10.8 34.4L64 88 34.8 107.2l10.8-34.4L16 52.4h36.8z" fill="white"/>
    <path d="M64 18l11.2 34.4H112L82.4 72.8 64 18z" fill="#005128"/>
  </svg>
);

function PlatformBadge({ role }: { role: string }) {
  const isGoogle = role.includes('Google');
  const isCodeCanyon = role.includes('CodeCanyon');
  const isTrustpilot = role.includes('Trustpilot');
  const label = role.split('·')[0].trim();

  return (
    <span className="flex items-center gap-1.5">
      {isGoogle && <GoogleIcon />}
      {isCodeCanyon && <EnvatoIcon />}
      {isTrustpilot && <TrustpilotIcon />}
      <span className="text-[12px] text-[#717179] leading-4 truncate">{label}</span>
    </span>
  );
}

const TRUNCATE_CHARS = 160;

function TestimonialCard({ name, role, quote }: Omit<TestimonialItem, 'photo' | 'videoUrl'>) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = quote.length > TRUNCATE_CHARS;
  const displayed = expanded || !needsTruncation ? quote : quote.slice(0, TRUNCATE_CHARS).trimEnd() + '…';
  const color = avatarColor(name);

  return (
    <div
      className="flex flex-col rounded-2xl p-6 sm:p-7"
      style={{ background: '#f5f6f8', height: '100%' }}
    >
      <StarRow />

      <p className="mt-4 flex-1 text-[15px] leading-[24px] text-[#2f2f2f]">
        &ldquo;{displayed}&rdquo;
        {needsTruncation && (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="ml-2 text-[#F26B4E] text-[13px] font-medium hover:underline focus:outline-none whitespace-nowrap"
          >
            {expanded ? 'Show less' : 'Show more'}
          </button>
        )}
      </p>

      <div className="mt-5 flex items-center gap-3 pt-4 border-t border-[#E5E7EC]">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[13px] font-bold"
          style={{ background: color }}
        >
          {getInitials(name)}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-[#0f1112] text-[15px] leading-5 truncate">{name}</p>
          <div className="mt-0.5"><PlatformBadge role={role} /></div>
        </div>
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

  const perPage = 2;
  const totalPages = Math.ceil(items.length / perPage);
  const visible = items.slice(page * perPage, page * perPage + perPage);

  const go = (delta: number) => {
    setDir(delta);
    setPage((p) => (p + delta + totalPages) % totalPages);
  };

  return (
    <section className="py-[120px] bg-white">
      <div className="container-page flex flex-col gap-[72px]">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <h2 className="text-[32px] sm:text-[44px] leading-[40px] sm:leading-[52px] font-semibold text-[#0f1112]" style={{ maxWidth: 620 }}>
            {title}
          </h2>
          <div className="flex items-center gap-3 flex-shrink-0 sm:mt-1">
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
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
            >
              {visible.map((t, i) => (
                <TestimonialCard key={i} name={t.name} role={t.role} quote={t.quote} />
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
  );
}
