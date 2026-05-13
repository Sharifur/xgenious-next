import type { Metadata } from 'next';
import Hero from './_components/Hero';
import ProofCards from './_components/ProofCards';
import WhatWeBuild from './_components/WhatWeBuild';
import HowWeWork from './_components/HowWeWork';
import CaseStudies from './_components/CaseStudies';
import TrustCompliance from '@/components/sections/TrustCompliance';
import Pricing from './_components/Pricing';
import TechStack from './_components/TechStack';
import Testimonials from '@/components/sections/Testimonials';
import BookCall from './_components/BookCall';
import FAQ, { type FaqItem } from '@/components/sections/FAQ';

const faqItems: FaqItem[] = [
  { question: 'How fast can you actually ship a SaaS MVP?', answer: 'Our fixed-scope MVP packages run 8–12 weeks from signed agreement to production. We publish the milestone list on day one so there are no sprint surprises.' },
  { question: "What does the fixed price cover — and what's excluded?", answer: 'The fixed price covers everything in the agreed scope: design, development, testing, and deployment. Changes outside scope are quoted separately before any work begins.' },
  { question: 'Where will my customer data be hosted?', answer: 'By default we deploy to AWS in the region you specify (EU, US, GCC). We can accommodate GDPR, HIPAA, and local data-residency requirements from day one.' },
  { question: 'Do you sign GDPR DPAs? What about HIPAA?', answer: 'Yes to both. A GDPR Data Processing Agreement is standard on every engagement. HIPAA Business Associate Agreements are available on request at no extra cost.' },
  { question: 'Can we work under NDA before sharing our idea?', answer: 'Absolutely. We sign NDAs before any detailed discussions. Send us a request and we will have it back to you within one business day.' },
  { question: 'What happens after launch — do you offer support retainers?', answer: 'Every plan includes a post-launch support window. After that you can move to a monthly retainer for feature work, infrastructure management, and on-call SRE.' },
  { question: 'Do you build for GCC / Middle East markets specifically?', answer: 'Yes. We have active clients in UAE and KSA, support Mada, Tabby, Tamara, and STC Pay integrations, and can provision data-residency inside the Kingdom.' },
];
import CTASection from './_components/CTASection';

export const metadata: Metadata = {
  title: 'SaaS Development | Xgenious',
  description:
    'Powerful SaaS Solutions for Business Growth. GDPR, HIPAA and SOC 2 ready architectures by default. Built by a team that has shipped 50+ SaaS products since 2017.',
};

export default function SaasDevelopmentPage() {
  return (
    <>
      <Hero />
      <ProofCards />
      <WhatWeBuild />
      <HowWeWork />
      <CaseStudies />
      <TrustCompliance />
      <Pricing />
      <TechStack />
      <Testimonials />
      <BookCall />
      <FAQ faqs={faqItems} description="The questions every SaaS buyer actually asks. If yours isn't here, ask it on the call — we will answer it honestly." />
      <CTASection />
    </>
  );
}
