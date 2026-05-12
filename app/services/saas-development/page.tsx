import type { Metadata } from 'next';
import Hero from './_components/Hero';
import ProofCards from './_components/ProofCards';
import WhatWeBuild from './_components/WhatWeBuild';
import HowWeWork from './_components/HowWeWork';
import TrustCompliance from './_components/TrustCompliance';
import Pricing from './_components/Pricing';
import TechStack from './_components/TechStack';
import Testimonial from './_components/Testimonial';
import BookCall from './_components/BookCall';
import FAQSection from './_components/FAQSection';
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
      <TrustCompliance />
      <Pricing />
      <TechStack />
      <Testimonial />
      <BookCall />
      <FAQSection />
      <CTASection />
    </>
  );
}
