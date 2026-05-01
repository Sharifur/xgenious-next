import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import TrustedBy from '@/components/sections/TrustedBy';
import ServicesGrid from '@/components/sections/ServicesGrid';
import StatsSection from '@/components/sections/StatsSection';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import TechStack from '@/components/sections/TechStack';
import ProcessSteps from '@/components/sections/ProcessSteps';
import AIAgentSection from '@/components/sections/AIAgentSection';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import BookingCTA from '@/components/sections/BookingCTA';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'SaaS Development Services | Xgenious',
  description:
    'We build scalable SaaS platforms, web apps, mobile products, and AI agents. From MVP to production — on time, with full ownership.',
};

export default function SaasDevelopmentPage() {
  return (
    <main>
      <HeroSection />
      <TrustedBy />
      <ServicesGrid />
      <StatsSection />
      <PortfolioGrid />
      <TechStack />
      <ProcessSteps />
      <AIAgentSection />
      <Testimonials />
      <FAQ />
      <BookingCTA />
      <FinalCTA />
    </main>
  );
}
