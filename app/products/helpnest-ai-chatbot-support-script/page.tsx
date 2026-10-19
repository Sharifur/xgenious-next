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
import PremiumPlugins from './_components/PremiumPlugins';
import LicenceTable from './_components/LicenceTable';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';

export const metadata: Metadata = {
  title: { absolute: 'Helpnest AI Chatbot Script: Self-Hosted Support for Laravel' },
  description:
    'Self-hosted AI chatbot script for Laravel: live chat, ticketing, multi-tenant SaaS. From $59 one-time; 13 plugins incl. WhatsApp with the $89 Bundle.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Helpnest: Self-Hosted AI Chatbot Script + 13 Plugins',
    description:
      'Own your AI support platform: Laravel AI chatbot, live chat and ticketing from $59 one-time. WhatsApp, Instagram and Slack plugins with the Bundle.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/helpnest-hero.jpg', width: 1200, height: 630, alt: 'Helpnest AI chatbot script dashboard with WhatsApp, Instagram and Slack plugins' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helpnest: Self-Hosted AI Chatbot Script + 13 Plugins',
    description: 'Self-hosted AI support platform. Laravel + 5 AI providers (GPT-6, DeepSeek, Gemini). Multi-tenant SaaS rights. From $59 one-time.',
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
      <PremiumPlugins />
      <LicenceTable />
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
