import type { Metadata } from 'next';
import Hero from './_components/Hero';
import WhyChooseUs from './_components/WhyChooseUs';
import Process from './_components/Process';
import WorkShowcase from './_components/WorkShowcase';
import TechStack from './_components/TechStack';
import Pricing from './_components/Pricing';
import BookCall from './_components/BookCall';
import FAQ, { type FaqItem } from '@/components/sections/FAQ';

const faqItems: FaqItem[] = [
  { question: 'Does webflow support custom code?', answer: 'Yes. We integrate custom code within Webflow projects where needed, though our app development work is focused on native iOS, Android, and Flutter cross-platform builds.' },
  { question: 'How fast can you actually ship a mobile app MVP?', answer: 'Our fixed-scope MVP packages run 8–16 weeks from signed agreement to production. We publish the milestone list on day one so there are no sprint surprises.' },
  { question: 'What does the fixed price cover?', answer: 'The fixed price covers everything in the agreed scope: design, development, testing, and App Store/Play Store submission. Changes outside scope are quoted separately before any work begins.' },
  { question: 'Where will my customer data be hosted?', answer: 'By default we deploy to AWS in the region you specify (EU, US, GCC). We can accommodate GDPR, HIPAA, and local data-residency requirements from day one.' },
  { question: 'Do you sign GDPR DPAs?', answer: 'Yes. A GDPR Data Processing Agreement is standard on every engagement. HIPAA Business Associate Agreements are available on request at no extra cost.' },
  { question: 'Can we work under NDA?', answer: 'Absolutely. We sign NDAs before any detailed discussions. Send us a request and we will have it back to you within one business day.' },
  { question: 'What happens after launch?', answer: 'Every plan includes a post-launch support window. After that you can move to a monthly retainer for feature work, app store updates, and on-call support.' },
];
import CTASection from './_components/CTASection';

export const metadata: Metadata = {
  title: 'App Development | Xgenious',
  description:
    'Precision-built iOS, Android, and cross-platform mobile applications. Flutter, Kotlin, and Swift apps designed for growth and user engagement. Built by a team that has shipped 40+ products.',
};

export default function AppDevelopmentPage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Process />
      <WorkShowcase />
      <TechStack />
      <Pricing />
      <BookCall />
      <FAQ faqs={faqItems} description="The questions every app buyer actually asks. If yours isn't here, ask it on the call — we will answer it honestly." />
      <CTASection />
    </>
  );
}
