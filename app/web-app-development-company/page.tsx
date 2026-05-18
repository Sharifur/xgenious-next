import type { Metadata } from 'next';
import Hero from './_components/Hero';
import WhatWeBuild from './_components/WhatWeBuild';
import HowWeWork from '@/components/sections/HowWeWork';

const howWeWorkSteps = [
  { label: '01. Discover', desc: 'Requirements workshop, user flow mapping, tech stack decision, and a signed scope doc before a single wireframe is drawn. You leave with a fixed price and a delivery date — not a rolling estimate that slips.' },
  { label: '02. Design', desc: 'Wireframes, component library, and a production-ready Figma system. Every screen and every interaction approved by you before development starts — no mid-sprint design surprises.' },
  { label: '03. Build', desc: 'Sprint-based development with weekly demos your team can click through. Full test coverage, CI/CD pipeline, and a staging environment you can access any time. Your feedback is logged and resolved before the next sprint opens.' },
  { label: '04. Ship', desc: "Production deploy, performance tuning, observability wired (Datadog / Sentry / PostHog), and a 30-day post-launch warranty. We don't disappear after go-live — we're on call through the first month." },
];
import CaseStudies from './_components/CaseStudies';
import Pricing from './_components/Pricing';
import TrustCompliance from './_components/TrustCompliance';
import FAQ, { type FaqItem } from '@/components/sections/FAQ';
import TechStack from './_components/TechStack';
import Testimonials from '@/components/sections/Testimonials';
import BookCall from './_components/BookCall';
import CTASection from './_components/CTASection';
import TrustedBy from '@/components/sections/TrustedBy';

const faqItems: FaqItem[] = [
  {
    question: 'How fast can you actually ship a web app MVP?',
    answer: 'A typical custom web app MVP takes 8–12 weeks on a fixed-scope plan — from signed scope doc to production launch. A more complex multi-role platform with third-party integrations and compliance requirements takes 12–16 weeks. We commit to a launch date in the proposal — not a rolling estimate that slips.',
  },
  {
    question: "What does the fixed price cover — and what's excluded?",
    answer: "The fixed price covers everything in the signed scope doc: all design, development, testing, deployment, and 30–90 days of post-launch support depending on your tier. What's excluded: scope changes after sign-off, third-party API subscription costs, and ongoing hosting beyond the included period. Any additions are quoted separately before work begins — never billed as a mid-sprint surprise.",
  },
  {
    question: 'Where will my customer data be hosted?',
    answer: "AWS by default — region chosen based on your compliance requirements (US East, EU Frankfurt, or EU Dublin). If you have data-residency requirements for GDPR, HIPAA, KSA PDPL, or UAE DIFC, we architect for that from day one. You own the cloud account — we don't hold your data or infrastructure.",
  },
  {
    question: 'Do you sign GDPR DPAs? What about HIPAA?',
    answer: 'Yes to both. A GDPR Data Processing Agreement ships with every engagement. HIPAA-ready architecture and a Business Associate Agreement are available on request. We have UK Ltd, US Delaware C-Corp, and UAE DMCC entities — your legal team can sign in their own jurisdiction.',
  },
  {
    question: 'Can we work under NDA before sharing our idea?',
    answer: 'Yes. We sign a mutual NDA before the discovery call — typically within 24 hours of your request. Nothing you share in scoping, discovery, or architecture review is disclosed externally.',
  },
  {
    question: 'Do you build on no-code tools like Webflow or Bubble?',
    answer: "No. Every build is a from-scratch, custom-coded application on a modern engineering stack — React, Next.js, Laravel, PostgreSQL. We don't use no-code builders because they create hard ceilings on scale, customisation, and security. If you've outgrown a no-code tool and need a real codebase, that migration is exactly what we handle.",
  },
  {
    question: 'What happens after launch — do you offer support retainers?',
    answer: 'Every engagement includes a 30-day post-launch warranty. After that, we offer monthly retainer blocks — bug fixes, feature additions, performance tuning, and infrastructure management. Most clients stay on a retainer for the first 3–6 months, then transition to an in-house team or keep us on a lighter monthly basis.',
  },
];

const BASE_URL = 'https://xgenious.com';

export const metadata: Metadata = {
  title: 'Custom Web App Development — B2B Portals & Internal Tools',
  description:
    'Custom web apps for B2B portals, internal tools, and enterprise platforms. Fixed-price from $2,500. 2–16 weeks. GDPR-ready on day one.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/web-app-development-company',
  },
  openGraph: {
    title: 'Custom Web App Development — B2B Portals & Internal Tools | Xgenious',
    description:
      "From-scratch web apps built around your workflow, not someone else's. Published scope. Fixed price. Committed delivery date.",
    url: `${BASE_URL}/web-app-development-company`,
    siteName: 'Xgenious',
    images: [{ url: '/og-web-app-development-company.png', width: 1200, height: 630, alt: 'Custom Web App Development Company | Xgenious' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Web App Development — B2B Portals & Internal Tools | Xgenious',
    description:
      "From-scratch web apps built around your workflow, not someone else's. Published scope. Fixed price. Committed delivery date.",
    images: ['/og-web-app-development-company.png'],
    site: '@xgenious1',
    creator: '@xgenious1',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://xgenious.com/web-app-development-company#service',
  name: 'Custom Web App Development',
  serviceType: 'Custom Web App Development',
  description: 'From-scratch web apps, B2B portals, internal tools, and enterprise platforms. Fixed-price from $2,500. React, Next.js, Laravel, PostgreSQL. GDPR-ready on day one.',
  url: 'https://xgenious.com/web-app-development-company',
  provider: {
    '@type': 'Organization',
    '@id': 'https://xgenious.com/#organization',
    name: 'Xgenious',
    url: 'https://xgenious.com',
  },
  areaServed: [
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web App Development Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Starter',
        description: 'Single-use-case web application. 2–4 weeks.',
        price: '2500',
        priceCurrency: 'USD',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: '2500', priceCurrency: 'USD' },
      },
      {
        '@type': 'Offer',
        name: 'Pro',
        description: 'Multi-feature app with payments, auth, and integrations. 6–10 weeks.',
        price: '15000',
        priceCurrency: 'USD',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: '15000', priceCurrency: 'USD' },
      },
      {
        '@type': 'Offer',
        name: 'Scale',
        description: 'Enterprise platform with multi-tenancy, AI, and compliance. 10–16 weeks.',
        price: '30000',
        priceCurrency: 'USD',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: '30000', priceCurrency: 'USD' },
      },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://xgenious.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://xgenious.com/#services' },
    { '@type': 'ListItem', position: 3, name: 'Web App Development', item: 'https://xgenious.com/web-app-development-company' },
  ],
};

export default function WebAppDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Hero />
      <TrustedBy title="Trusted by teams around the world" />
      <WhatWeBuild />
      <HowWeWork steps={howWeWorkSteps} description="Custom web apps, B2B portals, internal tools, and enterprise platforms — built with published scope, fixed pricing, and a committed delivery date." />
      <CaseStudies />
      <TrustCompliance />
      <Pricing />
      <TechStack />
      <Testimonials />
      <BookCall />
      <FAQ faqs={faqItems} badge="Frequently Asked Questions" title="Real Questions. Real Answers." description="The questions every web app buyer actually asks. If yours isn't here, ask it on the call — we'll answer it honestly." />
      <CTASection />
    </>
  );
}
