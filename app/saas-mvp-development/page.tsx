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
    answer: 'A single-use-case MVP typically ships in 2–4 weeks. A multi-feature product with payments, auth, and integrations takes 6–10 weeks. We commit to a launch date in the proposal — not a rolling estimate.',
  },
  {
    question: 'What is the difference between an MVP and a prototype?',
    answer: 'A prototype is a clickable simulation — it looks like a product but has no real backend, no live data, and no deployable code. An MVP is working software deployed to production with a real database, real auth, and real user flows. Every Xgenious MVP ships to production — we don\'t deliver prototypes dressed up as software.',
  },
  {
    question: 'Can I scale the MVP into a full product later?',
    answer: 'Yes — and that\'s the point. We build MVPs on the same production-grade stack as our full SaaS builds: React, Next.js, Laravel or Node, PostgreSQL, AWS. The architecture is designed from day one to absorb v2, v3, and beyond without a rewrite. When your MVP validates, the next sprint is an extension — not starting over.',
  },
  {
    question: 'Do you do mobile apps for MVP?',
    answer: 'Yes. Flutter cross-platform is included in the MVP Scale tier. For MVP Starter and Pro, the web app is fully mobile-responsive. If a native iOS or Android app is essential to the core use case from day one, we scope that into the build — it affects timeline and price, which we confirm upfront.',
  },
  {
    question: 'What tech stack do you use for MVP development?',
    answer: 'React + Next.js frontend, Node.js or Laravel API, PostgreSQL database, AWS or Vercel deployment. Flutter for mobile. Stripe for payments. Anthropic Claude or OpenAI for AI features. LangGraph for agent orchestration. The stack is standard enough that any future engineer can read and maintain it — no lock-in to proprietary tooling.',
  },
  {
    question: 'Who owns the code after delivery?',
    answer: 'You do — 100%. IP transfers to you on final payment. Your GitHub organisation, your cloud account, your App Store account. We retain no licences, no revenue shares, and no ongoing access. We keep the right to mention the engagement as a case study unless you request otherwise.',
  },
];

const BASE_URL = 'https://xgenious.com';

export const metadata: Metadata = {
  title: 'SaaS MVP Development Company | Ship in 6–10 Weeks | Xgenious',
  description:
    'Xgenious builds SaaS and software MVPs from scratch — fixed-price from $2,500, shipped in 4–16 weeks. Real users, validated metrics, clean codebase that scales. Not throwaway prototype code.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/saas-mvp-development',
  },
  openGraph: {
    title: 'SaaS MVP Development Company | Xgenious',
    description:
      'Greenfield MVP development for product teams testing the market. Real users in 6–10 weeks. Fixed price. Clean code that scales — not a prototype you\'ll rewrite in 6 months.',
    url: `${BASE_URL}/saas-mvp-development`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SaaS MVP Development | Xgenious' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS MVP Development Company | Xgenious',
    description: 'Real users in 6–10 weeks. Fixed-price from $2,500. Clean codebase that scales — not throwaway prototype code.',
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
