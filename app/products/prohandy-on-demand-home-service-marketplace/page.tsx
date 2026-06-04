import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import StickyBar from './_components/StickyBar';
import Hero from './_components/Hero';
import PaymentGateways from './_components/PaymentGateways';
import Features from './_components/Features';
import UseCases from './_components/UseCases';
import HowItWorks from './_components/HowItWorks';
import ClientApp from './_components/ClientApp';
import ProviderApp from './_components/ProviderApp';
import LiveChat from './_components/LiveChat';
import WhatsAppPlugin from './_components/WhatsAppPlugin';
import TechStack from './_components/TechStack';
import Comparison from './_components/Comparison';
import Reviews from './_components/Reviews';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';

export const metadata: Metadata = {
  title: 'Prohandy — On-Demand Home Service Marketplace Script',
  description:
    'Laravel + Flutter script to build your own on-demand home service marketplace. Dual-sided platform for clients and providers — cart booking, job posting, live chat, Google Maps, 20+ payment gateways. From $39.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Prohandy — On-Demand Home Service Marketplace Platform | Xgenious',
    description:
      'Build your own Uber for home services. Laravel + Flutter marketplace script with cart booking, job posting, real-time chat, Google Maps, and 20+ payment gateways. One-time $39 purchase.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/prohandy-hero.png', width: 1200, height: 630, alt: 'Prohandy On-Demand Home Service Marketplace Platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prohandy — Home Service Marketplace Script',
    description: 'Laravel + Flutter marketplace. Cart booking, job posting, live chat, Google Maps, 20+ gateways. One-time $39.',
    images: ['/products/prohandy-hero.png'],
  },
  keywords: [
    'on demand home service marketplace script',
    'home service marketplace platform',
    'laravel flutter marketplace script',
    'on demand service app script',
    'home services booking platform',
    'service provider marketplace software',
    'urban clap clone script',
    'taskrabbit clone script',
  ],
};

export default function ProhandyPage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <Hero />
      <PaymentGateways />
      <Features />
      <UseCases />
      <HowItWorks />
      <ClientApp />
      <ProviderApp />
      <LiveChat />
      <WhatsAppPlugin />
      <TechStack />
      <Comparison />
      <Reviews />
      <Pricing />
      <FAQ />
    </>
  );
}
