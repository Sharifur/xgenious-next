import type { Metadata } from 'next';
import Hero from './_components/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import WhyChooseUs from './_components/WhyChooseUs';
import WhatWeBuild from './_components/WhatWeBuild';
import Process from './_components/Process';
import WorkShowcase from './_components/WorkShowcase';
import TechStack from './_components/TechStack';
import Pricing from './_components/Pricing';
import BookCall from './_components/BookCall';
import FAQ, { type FaqItem } from '@/components/sections/FAQ';

const faqItems: FaqItem[] = [
  {
    question: 'How fast can you actually ship a mobile app MVP?',
    answer: 'A single-platform MVP (iOS or Android) takes 4–6 weeks on a fixed scope. A cross-platform Flutter build targeting both stores takes 6–10 weeks. A full-featured multi-role app with payments, admin panel, and compliance takes 12–16 weeks. We commit to a launch date in the proposal — not a rolling estimate.',
  },
  {
    question: 'Flutter, React Native, or native — which should I choose?',
    answer: "Flutter is our recommended default for most new builds. It ships iOS and Android simultaneously from one codebase, performs at near-native speed, and has lower long-term maintenance cost. React Native suits teams with an existing JavaScript/React codebase. Native Swift or Kotlin is the right call when you need deep OS-level integration — ARKit, HealthKit, CarPlay, specific hardware APIs — or when the performance ceiling of cross-platform won't cut it. We'll tell you honestly which fits your build.",
  },
  {
    question: "What does the fixed price cover — and what's excluded?",
    answer: 'The fixed price covers everything in the signed scope doc: UI/UX design, development, testing, App Store and Play Store submission, and 14–60 days of post-launch support depending on your tier. Excluded: Apple Developer and Google Play annual account fees, third-party API subscription costs, and scope changes after sign-off. Any additions are quoted separately before work begins.',
  },
  {
    question: 'Do you handle App Store and Play Store submission?',
    answer: "Yes — fully. We manage the submission process, comply with App Store Review Guidelines and Google Play policies, write the store listing copy, prepare screenshots and preview assets, and handle any rejection responses. You don't need an Apple Developer account set up before we start — we'll guide you through that too.",
  },
  {
    question: 'Do you sign GDPR DPAs? What about HIPAA?',
    answer: 'Yes to both. A GDPR Data Processing Agreement ships with every engagement. HIPAA-ready architecture and a Business Associate Agreement are available on request. We have UK Ltd, US Delaware C-Corp, and UAE DMCC entities — your legal team can sign in their own jurisdiction.',
  },
  {
    question: 'Can we work under NDA before sharing our idea?',
    answer: 'Yes. We sign a mutual NDA before the discovery call — typically within 24 hours of your request. Nothing shared in scoping or discovery is disclosed externally.',
  },
  {
    question: 'What happens after launch — do you offer support retainers?',
    answer: 'Every engagement includes a post-launch warranty (14–60 days depending on tier). After that, we offer monthly retainer blocks covering OS compatibility updates, bug fixes, new feature sprints, and App Store update submissions. Most clients stay on a light retainer for 3–6 months, then transition to an in-house team or reduce to on-demand support.',
  },
];
import CTASection from './_components/CTASection';

const BASE_URL = 'https://xgenious.com';

export const metadata: Metadata = {
  title: 'Mobile App Development Company | iOS, Android & Flutter | Xgenious',
  description:
    'Xgenious builds custom iOS, Android, and Flutter apps — shipped to the App Store and Play Store, not stuck in TestFlight. Fixed-price from $2k. 4–16 weeks. GDPR-ready on day one.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/mobile-app-development',
  },
  openGraph: {
    title: 'Mobile App Development Company | iOS, Android & Flutter | Xgenious',
    description:
      'Production-grade iOS and Android apps. Flutter cross-platform or native when it demands it. Fixed price. Committed delivery date. App Store and Play Store, shipped.',
    url: `${BASE_URL}/mobile-app-development`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Mobile App Development Company | iOS, Android & Flutter | Xgenious' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Company | iOS, Android & Flutter | Xgenious',
    description:
      'Production-grade iOS and Android apps. Flutter cross-platform or native when it demands it. Fixed price. Committed delivery date. App Store and Play Store, shipped.',
    images: ['/og-image.png'],
    site: '@xgenious1',
    creator: '@xgenious1',
  },
};

export default function AppDevelopmentPage() {
  return (
    <>
      <Hero />
      <TrustedBy title="Trusted by teams around the world" />
      <WhyChooseUs />
      <WhatWeBuild />
      <Pricing />
      <Process />
      <WorkShowcase />
      <TechStack />
      <BookCall />
      <FAQ faqs={faqItems} badge="Frequently Asked Questions" title="Real Questions. Real Answers." description="The questions every app buyer actually asks. If yours isn't here, ask it on the call — we'll answer it honestly." />
      <CTASection />
    </>
  );
}
