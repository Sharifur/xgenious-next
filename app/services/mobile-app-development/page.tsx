import type { Metadata } from 'next';
import Hero from './_components/Hero';
import Experience from './_components/Experience';
import StatsCounter from './_components/StatsCounter';
import TechStack from './_components/TechStack';
import WhatWeBuild from './_components/WhatWeBuild';
import HowWeWork from './_components/HowWeWork';
import Testimonials from './_components/Testimonials';
import Clients from './_components/Clients';
import BlogPosts from './_components/BlogPosts';
import FAQSection from './_components/FAQSection';
import CTASection from './_components/CTASection';

export const metadata: Metadata = {
  title: 'Mobile App Development | Xgenious',
  description:
    'Outstanding Mobile Apps Development Experience. Flutter, React Native, Swift and Kotlin apps for iOS and Android. Built by a team that has shipped 50+ products since 2017.',
};

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <Hero />
      <Experience />
      <StatsCounter />
      <TechStack />
      <WhatWeBuild />
      <HowWeWork />
      <Testimonials />
      <Clients />
      <BlogPosts />
      <FAQSection />
      <CTASection />
    </>
  );
}
