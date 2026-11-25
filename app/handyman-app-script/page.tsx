import type { Metadata } from 'next';
import RelatedGuides from '@/components/sections/RelatedGuides';
import JsonLd from './_components/JsonLd';
import Hero from './_components/Hero';
import InTheBox from './_components/InTheBox';
import HireWays from './_components/HireWays';
import Pricing from './_components/Pricing';
import BuildVsBuy from './_components/BuildVsBuy';
import Hosting from './_components/Hosting';
import Roadmap from './_components/Roadmap';
import Compare from './_components/Compare';
import FaqSection from './_components/FaqSection';
import BottomCta from './_components/BottomCta';

const CANONICAL = 'https://xgenious.com/handyman-app-script';

export const metadata: Metadata = {
  title: { absolute: 'Handyman App Script with Flutter Apps & Admin | ProHandy' },
  description: 'ProHandy handyman app script: Laravel admin, Flutter customer and provider apps, cart booking, job posts with offers, 19 gateways. $69 with apps.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Handyman App Script: Launch Your Own Home Service Marketplace',
    description: 'Customer app, provider app and admin panel for your own handyman marketplace. Self-hosted, cPanel-friendly, free installation.',
    url: CANONICAL,
    type: 'website',
    images: [{ url: '/products/prohandy-hero.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handyman App Script: Launch Your Own Home Service Marketplace',
    description: 'Customer app, provider app and admin panel for your own handyman marketplace. Self-hosted, cPanel-friendly, free installation.',
    images: ['/products/prohandy-hero.png'],
  },
  keywords: [
    'handyman app script',
    'handyman script',
    'home service app source code',
    'on demand service marketplace script',
    'uber for handyman script',
    'handyman booking app source code',
  ],
};

export default function HandymanAppScriptPage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <InTheBox />
      <HireWays />
      <Pricing />
      <BuildVsBuy />
      <Hosting />
      <Roadmap />
      <Compare />
      <FaqSection />
      <RelatedGuides
        guides={[
          { href: '/how-to-start-a-handyman-marketplace', label: 'How to start a handyman marketplace', blurb: 'A 9-step launch plan from first city to first customers.' },
          { href: '/how-to-build-an-app-like-taskrabbit', label: 'How to build an app like TaskRabbit', blurb: 'What a custom handyman app costs, and how long an agency build takes.' },
          { href: '/urban-company-business-model', label: 'Urban Company business model', blurb: 'How Urban Company makes money, with FY26 numbers.' },
          { href: '/top-on-demand-home-services-business-models', label: 'Home services business models', blurb: 'Commission, booking fees and other ways a home service marketplace earns.' },
        ]}
      />
      <BottomCta />
    </>
  );
}
