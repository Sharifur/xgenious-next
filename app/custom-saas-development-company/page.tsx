import type { Metadata } from 'next';
import Hero from './_components/Hero';
import ProofCards from './_components/ProofCards';
import WhatWeBuild from './_components/WhatWeBuild';
import HowWeWork from '@/components/sections/HowWeWork';

const howWeWorkSteps = [
  { label: '01. Ideate', desc: 'Problem validation, ICP definition, competitive mapping, feature prioritisation, and a signed scope document — agreed and locked before a single line of code is written. You leave the discovery sprint with a fixed price and a launch date.' },
  { label: '02. Design', desc: 'Wireframes, a component library, and a production-ready Figma system — every screen and every interaction approved by you before development begins. No mid-sprint design pivots. No surprise rework costs.' },
  { label: '03. Develop', desc: 'Sprint-based builds with weekly demos, full test coverage, CI/CD pipeline, and a staging environment you can access at any time. Your feedback is logged and resolved before the next sprint opens — same team, start to finish.' },
  { label: '04. Launch', desc: "Production deploy, DNS cutover, observability wired (Datadog / Sentry / PostHog), and a 30-day post-launch warranty. We don't disappear after go-live — we're on call through the first month and available for ongoing SRE retainers." },
];
import CaseStudies from './_components/CaseStudies';
import TrustCompliance from '@/components/sections/TrustCompliance';
import Pricing from './_components/Pricing';
import TechStack from './_components/TechStack';
import Testimonials from '@/components/sections/Testimonials';
import BookCall from './_components/BookCall';
import FAQ, { type FaqItem } from '@/components/sections/FAQ';

const faqItems: FaqItem[] = [
  {
    question: 'How fast can you actually ship a SaaS MVP?',
    answer: 'Our fixed-scope MVP packages run 8–12 weeks from signed scope to production — a full multi-tenant SaaS with mobile app and compliance takes 14–20 weeks. We publish the milestone list on day one and commit to a launch date in the proposal, not a rolling estimate.',
  },
  {
    question: "What does the fixed price cover — and what's excluded?",
    answer: 'The fixed price covers everything in the signed scope doc: architecture, design, development, testing, deployment, and 14–60 days of post-launch support depending on your tier. Excluded: third-party API or SaaS subscription costs, scope changes after sign-off, and hosting beyond the included period. Any additions are quoted separately before work starts — never billed mid-sprint.',
  },
  {
    question: 'Where will my customer data be hosted?',
    answer: 'AWS by default, with the region chosen based on your compliance requirements — US East, EU Frankfurt, or EU Dublin for GDPR. Data-residency in-Kingdom is available for KSA PDPL requirements. You own the cloud account from day one — we don\'t hold your data or infrastructure.',
  },
  {
    question: 'Do you sign GDPR DPAs? What about HIPAA?',
    answer: 'Yes to both. A GDPR Data Processing Agreement ships with every engagement. HIPAA-ready architecture and a Business Associate Agreement are available on request. We operate UK Ltd, US Delaware C-Corp, and UAE DMCC entities — your legal team can sign in their own jurisdiction.',
  },
  {
    question: 'Can we work under NDA before sharing our idea?',
    answer: 'Yes. We sign a mutual NDA before the discovery call — typically inside 24 hours of your request. Nothing shared in scoping, architecture review, or discovery is disclosed externally.',
  },
  {
    question: 'What happens after launch — do you offer support retainers?',
    answer: 'Every engagement includes a post-launch warranty (14–60 days depending on tier). After that, we offer monthly SRE retainer blocks — infrastructure management, bug fixes, feature sprints, performance tuning, and security patches. Most clients stay on a retainer for the first 3–6 months, then transition to in-house or reduce to on-demand.',
  },
  {
    question: 'Do you build for GCC / Middle East markets specifically?',
    answer: 'Yes. We have a UAE DMCC entity, KSA data-residency experience, and direct integrations with GCC payment gateways — Mada, Tabby, Tamara, STC Pay, and Hyperpay. We\'ve shipped SaaS platforms for clients in UAE, KSA, Kuwait, and Jordan. Your procurement team can sign with our UAE entity locally.',
  },
];
import CTASection from './_components/CTASection';

const BASE_URL = 'https://xgenious.com';

export const metadata: Metadata = {
  title: 'Custom SaaS Development — Multi-Tenant Platforms & MVPs',
  description:
    'Custom SaaS built from scratch — multi-tenant, subscription billing, GDPR & HIPAA-ready. Fixed-price from $3K. Built by a team running 7 SaaS products.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/custom-saas-development-company',
  },
  openGraph: {
    title: 'Custom SaaS Development Company | Xgenious',
    description:
      'Real SaaS, not a script. Multi-tenant architecture, compliance built in, fixed price, committed delivery date. Built by a team that runs its own SaaS in production.',
    url: `${BASE_URL}/custom-saas-development-company`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Custom SaaS Development Company | Xgenious' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom SaaS Development Company | Xgenious',
    description:
      'Real SaaS, not a script. Multi-tenant architecture, compliance built in, fixed price, committed delivery date. Built by a team that runs its own SaaS in production.',
    images: ['/og-image.png'],
    site: '@xgenious1',
    creator: '@xgenious1',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://xgenious.com/custom-saas-development-company#service',
  name: 'Custom SaaS Development',
  serviceType: 'Custom SaaS Development',
  description: 'From-scratch SaaS — multi-tenant architecture, subscription billing, GDPR & HIPAA-ready. Fixed-price from $3k. Shipped by a team running 7 SaaS products with 13,000+ users.',
  url: 'https://xgenious.com/custom-saas-development-company',
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
    { '@type': 'Country', name: 'Bangladesh' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SaaS Development Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'SaaS Starter',
        description: 'Single-tenant SaaS, up to 2 user roles, Stripe payments, GDPR DPA. 3–5 weeks.',
        price: '3000',
        priceCurrency: 'USD',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: '3000', priceCurrency: 'USD' },
      },
      {
        '@type': 'Offer',
        name: 'SaaS Pro',
        description: 'Multi-tenant SaaS, subscription billing, admin dashboard, HIPAA-ready. 10–12 weeks.',
        price: '15000',
        priceCurrency: 'USD',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: '15000', priceCurrency: 'USD' },
      },
      {
        '@type': 'Offer',
        name: 'SaaS Scale',
        description: 'Production SaaS with SSO, AI integration, Flutter mobile app, SOC 2-ready. 14–20 weeks.',
        price: '35000',
        priceCurrency: 'USD',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: '35000', priceCurrency: 'USD' },
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
    { '@type': 'ListItem', position: 3, name: 'Custom SaaS Development', item: 'https://xgenious.com/custom-saas-development-company' },
  ],
};

export default function SaasDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Hero />
      <ProofCards />
      <WhatWeBuild />
      <HowWeWork steps={howWeWorkSteps} description="SaaS products, custom web platforms, mobile apps, and AI agents. From-scratch builds with published scope, fixed pricing, and a committed delivery date." />
      <CaseStudies />
      <TrustCompliance />
      <Pricing />
      <TechStack />
      <Testimonials />
      <BookCall />
      <FAQ faqs={faqItems} badge="Frequently Asked Questions" title="Real Questions. Real Answers." description="The questions every SaaS buyer actually asks. If yours isn't here, ask it on the call — we'll answer it honestly." />
      <CTASection />
    </>
  );
}
