import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import TrustedBy from '@/components/sections/TrustedBy';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import TechStack from '@/components/sections/TechStack';
import ProcessSteps from '@/components/sections/ProcessSteps';
import AIAgentSection from '@/components/sections/AIAgentSection';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import BookingCTA from '@/components/sections/BookingCTA';
import FinalCTA from '@/components/sections/FinalCTA';

const BASE_URL = 'https://xgenious.com';

export const metadata: Metadata = {
  title: 'Custom Software Development Company | Xgenious',
  description:
    'Xgenious is a custom software development company building SaaS, web apps, mobile, and AI agents for mid-market teams. Fixed-price from $50K. UK · US · UAE.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Custom Software Development Company | Xgenious',
    description:
      'From-scratch SaaS, custom web platforms, mobile apps, and AI agents. Fixed-price. Published scope. A committed delivery date.',
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
    title: 'Custom Software Development Company | Xgenious',
    description:
      'From-scratch SaaS, custom web platforms, mobile apps, and AI agents. Fixed-price. Published scope. A committed delivery date.',
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
    'Custom software development company building SaaS, web apps, mobile apps, and AI agents for mid-market teams.',
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
      <FinalCTA />
    </>
  );
}
