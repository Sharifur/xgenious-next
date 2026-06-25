import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import TrustedBy from '@/components/sections/TrustedBy';
import TechStack from '@/components/sections/TechStack';
import FAQ from '@/components/sections/FAQ';

// Below-fold 'use client' sections — dynamic imports create separate JS chunks so
// the browser can parse/hydrate the hero before touching framer-motion code
const ServicesGrid  = dynamic(() => import('@/components/sections/ServicesGrid'));
const WhyChooseUs   = dynamic(() => import('@/components/sections/WhyChooseUs'));
const PortfolioGrid = dynamic(() => import('@/components/sections/PortfolioGrid'));
const ProcessSteps  = dynamic(() => import('@/components/sections/ProcessSteps'));
const AIAgentSection = dynamic(() => import('@/components/sections/AIAgentSection'));
const Testimonials  = dynamic(() => import('@/components/sections/Testimonials'));
const BookingCTA    = dynamic(() => import('@/components/sections/BookingCTA'));

const BASE_URL = 'https://xgenious.com';

export const metadata: Metadata = {
  title: { absolute: 'Custom SaaS & Software Development — Built to Ship | Xgenious' },
  description:
    'Custom SaaS, web apps, mobile apps, and AI agents — built to ship on time. Published scope, committed delivery date. Trusted by businesses in 100+ countries.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Custom SaaS & Software Development — Built to Ship | Xgenious',
    description:
      'From-scratch SaaS, custom web platforms, mobile apps, and AI agents. Published scope. A committed delivery date.',
    url: BASE_URL,
    siteName: 'Xgenious',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Xgenious — Custom Software Development Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom SaaS & Software Development — Built to Ship | Xgenious',
    description:
      'From-scratch SaaS, custom web platforms, mobile apps, and AI agents. Published scope. A committed delivery date.',
    images: ['/og-image.png'],
    site: '@xgenious1',
    creator: '@xgenious1',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  keywords: [
    'custom software development company',
    'SaaS development',
    'web app development',
    'mobile app development',
    'AI agent development',
    'software development agency',
    'fixed price software development',
  ],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Xgenious',
  url: BASE_URL,
  logo: `${BASE_URL}/xgenious-logo.svg`,
  description:
    'Custom software development company building SaaS, web apps, mobile apps, and AI agents that ship on time.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'BD',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'contact@xgenious.com',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.facebook.com/xgenious',
    'https://www.linkedin.com/company/xgenious',
    'https://twitter.com/xgenious1',
    'https://www.instagram.com/xgenious_official/',
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Xgenious',
  url: BASE_URL,
  priceRange: '$$$',
  areaServed: ['US', 'GB', 'AE', 'BD'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Agent Development' } },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HeroSection />
      <TrustedBy title="Trusted by Leading Global Company" />
      <ServicesGrid />
      <WhyChooseUs />
      <PortfolioGrid />
      <TechStack />
      <ProcessSteps />
      <AIAgentSection />
      <Testimonials />
      <FAQ noPaddingTop />
      <BookingCTA />
    </>
  );
}
