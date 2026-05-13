import type { Metadata } from 'next';
import Hero from './_components/Hero';
import WhatWeBuild from './_components/WhatWeBuild';
import Pricing from './_components/Pricing';
import TrustCompliance from '@/components/sections/TrustCompliance';
import WorkShowcase from './_components/WorkShowcase';
import FAQ, { type FaqItem } from '@/components/sections/FAQ';

const faqItems: FaqItem[] = [
  { question: 'Does webflow support custom code?', answer: 'Yes. Webflow supports custom HTML, CSS, and JavaScript. You can embed code directly in pages, sections, or globally via the project settings.' },
  { question: 'How fast can you actually ship a web app MVP?', answer: 'Our fixed-scope MVP packages run 8–12 weeks from signed agreement to production. We publish the milestone list on day one so there are no sprint surprises.' },
  { question: "What does the fixed price cover — and what's excluded?", answer: 'The fixed price covers everything in the agreed scope: design, development, testing, and deployment. Changes outside scope are quoted separately before any work begins.' },
  { question: 'Where will my customer data be hosted?', answer: 'By default we deploy to AWS in the region you specify (EU, US, GCC). We can accommodate GDPR, HIPAA, and local data-residency requirements from day one.' },
  { question: 'Do you sign GDPR DPAs? What about HIPAA?', answer: 'Yes to both. A GDPR Data Processing Agreement is standard on every engagement. HIPAA Business Associate Agreements are available on request at no extra cost.' },
  { question: 'Can we work under NDA before sharing our idea?', answer: 'Absolutely. We sign NDAs before any detailed discussions. Send us a request and we will have it back to you within one business day.' },
  { question: 'What happens after launch — do you offer support retainers?', answer: 'Every plan includes a post-launch support window. After that you can move to a monthly retainer for feature work, infrastructure management, and on-call SRE.' },
];
import CTASection from './_components/CTASection';
import TrustedBy from '@/components/sections/TrustedBy';

export const metadata: Metadata = {
  title: 'Web App Development Services | Xgenious',
  description:
    'Custom web app development from MVP to enterprise platform — shipped in 8–12 weeks from $15k. GDPR, HIPAA and SOC 2 ready architectures. Built by a team that has shipped 50+ products since 2017.',
};

export default function WebAppDevelopmentPage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhatWeBuild />
      <Pricing />
      <TrustCompliance />
      <WorkShowcase />
      <FAQ faqs={faqItems} description="The questions every web app buyer actually asks. If yours isn't here, ask it on the call — we will answer it honestly." />
      <CTASection />
    </>
  );
}
