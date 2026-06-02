import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import StickyBar from './_components/StickyBar';
import Hero from './_components/Hero';
import PaymentGateways from './_components/PaymentGateways';
import Features from './_components/Features';
import HowItWorks from './_components/HowItWorks';
import ChatDemo from './_components/ChatDemo';
import TechStack from './_components/TechStack';
import Integrations from './_components/Integrations';
import FeaturesShowcase from './_components/FeaturesShowcase';
import WhyHelpNest from './_components/WhyHelpNest';
import MobileApp from './_components/MobileApp';
import Comparison from './_components/Comparison';
import Reviews from './_components/Reviews';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';

export const metadata: Metadata = {
  title: 'Helpnest — AI Chatbot Support Script for Laravel',
  description:
    'Self-hosted Laravel AI chatbot script. Build a Crisp or Intercom alternative with semantic AI, multi-tenant SaaS, ticketing, and billing. From $59.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Helpnest — AI Chatbot Support Script | Xgenious',
    description:
      'Build your own Crisp or Intercom alternative. Laravel AI chatbot, multi-tenant architecture, ticketing, knowledge base, and Stripe billing. One-time $59 purchase.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/helpnest-hero.jpg', width: 1200, height: 630, alt: 'Helpnest AI Customer Support Platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helpnest — AI Chatbot Support Script',
    description: 'Self-hosted AI support platform. Laravel + OpenAI + Claude. Multi-tenant SaaS rights. From $59 one-time.',
    images: ['/products/helpnest-hero.jpg'],
  },
  keywords: [
    'ai chatbot script',
    'laravel chatbot script',
    'customer support chatbot script',
    'intercom alternative self-hosted',
    'crisp alternative script',
    'helpdesk script laravel',
    'white label chatbot software',
  ],
};

export default function HelpNestPage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <Hero />
      <PaymentGateways />
      <Features />
      <HowItWorks />
      <ChatDemo />
      <TechStack />
      <FeaturesShowcase />
      <Integrations />
      <WhyHelpNest />
      <Comparison />
      <MobileApp />
      <Reviews />
      <Pricing />
      <FAQ />
    </>
  );
}
