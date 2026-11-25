import type { Metadata } from 'next';
import RelatedGuides from '@/components/sections/RelatedGuides';
import { COMBO_PRICE } from '@/app/products/prohandy-on-demand-home-service-marketplace/_components/constants';
import Pricing from '@/app/handyman-app-script/_components/Pricing';
import JsonLd from './_components/JsonLd';
import Hero from './_components/Hero';
import Money from './_components/Money';
import Models from './_components/Models';
import FeatureMap from './_components/FeatureMap';
import LaunchPlan from './_components/LaunchPlan';
import FaqSection from './_components/FaqSection';

const CANONICAL = 'https://xgenious.com/urban-company-clone-script';
const SOCIAL_TITLE = 'Urban Company Clone Script: Your Own Home Services Marketplace';
const SOCIAL_DESCRIPTION = 'Fixed-price services, verified professionals, commission and Flutter apps for customers and providers. Self-hosted, one-time price.';

export const metadata: Metadata = {
  title: { absolute: 'Urban Company Clone Script: Run Your Own Home Services App' },
  description: 'Launch an app like Urban Company in your city: fixed-price services, verified pros, commission and both apps. ProHandy script, $69 with Flutter apps.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    url: CANONICAL,
    type: 'website',
    images: [{ url: '/products/prohandy-hero.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    images: ['/products/prohandy-hero.png'],
  },
  keywords: [
    'urban company clone script',
    'urban company clone',
    'urbanclap clone',
    'taskrabbit clone script',
    'app like urban company',
  ],
};

export default function UrbanCompanyCloneScriptPage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Money />
      <Models />
      <FeatureMap />
      <Pricing intro={`For an app-first launch you need the $${COMBO_PRICE} Everything Bundle, which includes both Flutter apps.`} />
      <LaunchPlan />
      <FaqSection />
      <RelatedGuides
        guides={[
          { href: '/urban-company-business-model', label: 'Urban Company business model', blurb: 'How Urban Company makes money, with FY26 numbers.' },
          { href: '/how-to-build-an-app-like-taskrabbit', label: 'How to build an app like TaskRabbit', blurb: 'What a custom home services app costs to build.' },
          { href: '/job-posting-vs-instant-booking-service-marketplace', label: 'Job posting vs instant booking', blurb: 'Which booking model fits fixed-price services and which fits custom jobs.' },
          { href: '/best-on-demand-service-marketplace-platforms', label: 'Best on-demand service marketplace scripts', blurb: '10 handyman and home service scripts compared by price and included apps.' },
          { href: '/handyman-app-script', label: 'Handyman app script', blurb: 'What ProHandy includes, with licence and hosting answers.' },
        ]}
      />
    </>
  );
}
