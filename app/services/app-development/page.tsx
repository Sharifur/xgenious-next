import type { Metadata } from 'next';
import Hero from './_components/Hero';
import WhyChooseUs from './_components/WhyChooseUs';
import Process from './_components/Process';
import WorkShowcase from './_components/WorkShowcase';
import TechStack from './_components/TechStack';
import Pricing from './_components/Pricing';
import BookCall from './_components/BookCall';
import FAQSection from './_components/FAQSection';
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
      <FAQSection />
      <CTASection />
    </>
  );
}
