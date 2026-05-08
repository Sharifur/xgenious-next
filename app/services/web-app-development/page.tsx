import type { Metadata } from 'next';
import Hero from './_components/Hero';
import WhatWeBuild from './_components/WhatWeBuild';
import Pricing from './_components/Pricing';
import TrustCompliance from './_components/TrustCompliance';
import WorkShowcase from './_components/WorkShowcase';
import FAQSection from './_components/FAQSection';
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
      <FAQSection />
      <CTASection />
    </>
  );
}
