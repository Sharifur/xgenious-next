import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import StickyBar from './_components/StickyBar';
import Hero from './_components/Hero';
import Features from './_components/Features';
import HowItWorks from './_components/HowItWorks';
import TechStack from './_components/TechStack';
import Comparison from './_components/Comparison';
import Reviews from './_components/Reviews';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';

export const metadata: Metadata = {
  title: 'HelpNest — AI Chatbot Support Script for Laravel',
  description:
    'HelpNest is a self-hosted Laravel PHP script to build your own AI-powered customer support platform. Semantic AI chatbot, multi-tenant SaaS, ticketing system, visitor tracking, and subscription billing. From $59 one-time.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'HelpNest — AI Chatbot Support Script | Xgenious',
    description:
      'Build your own Crisp or Intercom alternative. Laravel AI chatbot, multi-tenant architecture, ticketing, knowledge base, and Stripe billing. One-time $59 purchase.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/helpnest-hero.jpg', width: 1200, height: 630, alt: 'HelpNest AI Customer Support Platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HelpNest — AI Chatbot Support Script',
    description: 'Self-hosted AI support platform. Laravel + OpenAI + Claude. Multi-tenant SaaS rights. From $59 one-time.',
    images: ['/products/helpnest-hero.jpg'],
  },
  keywords: [
    'ai chatbot script',
    'laravel chatbot script',
    'customer support chatbot script',
    'self-hosted customer support software',
    'crisp alternative script',
    'intercom alternative self-hosted',
    'ai support chatbot php script',
    'helpdesk script laravel',
    'multi-tenant chatbot saas script',
    'buy chatbot script',
    'white label chatbot software',
    'ai chatbot codecanyon',
    'chatbot script with ticketing',
  ],
};

export default function HelpNestPage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <Hero />
      <Features />
      <HowItWorks />
      <TechStack />
      <Comparison />
      <Reviews />
      <Pricing />
      <FAQ />
    </>
  );
}
