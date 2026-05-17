import type { Metadata } from 'next';
import Hero from './_components/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import AboutSection from './_components/AboutSection';
import WhatWeBuild from './_components/WhatWeBuild';
import Benefits from './_components/Benefits';
import Process from './_components/Process';
import Pricing from './_components/Pricing';
import WhyMVP from './_components/WhyMVP';
import Testimonials from '@/components/sections/Testimonials';
import BookingCTA from '@/components/sections/BookingCTA';
import FAQ, { type FaqItem } from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';

const faqItems: FaqItem[] = [
  {
    question: 'How long does it take to build an MVP?',
    answer: 'A single-use-case MVP typically ships in 4–6 weeks. A multi-feature product with payments, auth, and integrations takes 6–10 weeks. We commit to a launch date in the proposal — not a rolling estimate.',
  },
  {
    question: 'What is the difference between an MVP and a prototype?',
    answer: 'A prototype is a clickable demo — no real backend, no real data. An MVP is a working product with real users, real data, and real infrastructure. We build MVPs, not prototypes. The codebase is production-quality from day one.',
  },
  {
    question: 'Can I scale the MVP into a full product later?',
    answer: 'Yes — that is the point. We build on a clean, modern stack (React, Next.js, Node, PostgreSQL) specifically so v2 is an extension, not a rewrite. We hand off the full codebase, CI/CD pipeline, and architecture docs.',
  },
  {
    question: 'Do you do mobile apps for MVP?',
    answer: 'Yes. Flutter for cross-platform iOS + Android. Native where the build demands it. Mobile MVP is included in the MVP Scale package and available as an add-on to MVP Pro.',
  },
  {
    question: 'What tech stack do you use for MVP development?',
    answer: 'React + Next.js + TypeScript on the frontend. Node.js or Laravel for the API. PostgreSQL for the database. AWS or Vercel for deployment. Flutter for mobile. We match the stack to the build — this is our default, not a template.',
  },
  {
    question: 'Who owns the code after delivery?',
    answer: 'You do, 100%. IP transfers on final payment. Your GitHub repo, your cloud account, your App Store listing. No licences, no revenue shares, no vendor lock-in of any kind.',
  },
];

const BASE_URL = 'https://xgenious.com';

export const metadata: Metadata = {
  title: 'MVP Development Company | Ship in 6–8 Weeks | Xgenious',
  description:
    'Xgenious builds greenfield MVPs for founders and product teams. Real users in 6–8 weeks, validated metrics, and a clean codebase that scales into the full SaaS. Fixed-price from $5k.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/mvp-development',
  },
  openGraph: {
    title: 'MVP Development Company | Ship in 6–8 Weeks | Xgenious',
    description:
      'Not throwaway prototype code. Production-grade MVPs built to validate fast and scale further. Fixed-price, committed timeline.',
    url: `${BASE_URL}/mvp-development`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MVP Development | Xgenious' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVP Development Company | Xgenious',
    description: 'Real users in 6–8 weeks. Clean codebase that scales into the full SaaS. Fixed-price from $5k.',
    images: ['/og-image.png'],
    site: '@xgenious1',
    creator: '@xgenious1',
  },
};

export default function MvpDevelopmentPage() {
  return (
    <>
      <Hero />
      <TrustedBy title="Trusted by teams around the world" />
      <AboutSection />
      <WhatWeBuild />
      <Benefits />
      <Process />
      <Pricing />
      <WhyMVP />
      <Testimonials />
      <BookingCTA />
      <FAQ
        faqs={faqItems}
        badge="Frequently Asked Questions"
        title="Real Questions. Real Answers."
        description="The questions every MVP buyer actually asks. If yours isn't here, ask it on the call — we'll answer it honestly."
      />
      <CTASection heading="Ready to Build Your MVP?" />
    </>
  );
}
