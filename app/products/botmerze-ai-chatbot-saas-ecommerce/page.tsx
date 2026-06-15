import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import StickyBar from './_components/StickyBar';
import Hero from './_components/Hero';
import Features from './_components/Features';
import PlatformOrbit from './_components/PlatformOrbit';
import ChatDemo from './_components/ChatDemo';
import HowItWorksAnimated from './_components/HowItWorksAnimated';
import UseCases from './_components/UseCases';
import TechStack from './_components/TechStack';
import Comparison from './_components/Comparison';
import Reviews from './_components/Reviews';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';
import ClosingCta from './_components/ClosingCta';

export const metadata: Metadata = {
  title: 'Botmerze: AI Chatbot SaaS for WooCommerce & Shopify',
  description:
    'Self-hosted AI chatbot SaaS script. RAG-powered with pgvector, WooCommerce & Shopify sync, 18+ payment gateways. One-time $49 — no monthly AI fees.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Botmerze: AI Chatbot SaaS for WooCommerce & Shopify | Xgenious',
    description:
      'Self-hosted AI chatbot SaaS script. RAG-powered with pgvector, WooCommerce & Shopify sync, lead capture, 18+ payment gateways. One-time $49.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Botmerze: AI Chatbot SaaS for WooCommerce & Shopify | Xgenious',
    description:
      'Self-hosted AI chatbot SaaS script. RAG-powered with pgvector, WooCommerce & Shopify sync. One-time $49 — no monthly AI fees.',
    images: ['/og-image.png'],
  },
  keywords: [
    'AI chatbot SaaS',
    'WooCommerce chatbot',
    'Shopify chatbot',
    'self-hosted chatbot',
    'RAG chatbot',
    'Laravel chatbot script',
    'ecommerce AI chatbot',
    'chatbot SaaS script',
  ],
};

export default function BotmerzePage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <PlatformOrbit />
        <HowItWorksAnimated />
        <ChatDemo />
        <TechStack />
        <Comparison />
        <Reviews />
        <Pricing />
        <FAQ />
        <ClosingCta />
      </main>
    </>
  );
}
