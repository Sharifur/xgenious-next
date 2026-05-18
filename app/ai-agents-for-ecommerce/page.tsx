import type { Metadata } from 'next';
import IndustryAgentPage, { type IndustryPageData } from '@/components/sections/IndustryAgentPage';

const BASE_URL = 'https://xgenious.com';

const data: IndustryPageData = {
  industry: 'E-Commerce',
  slug: 'ai-agents-for-ecommerce',
  heroH1: 'AI Agents for E-Commerce — Recover Carts, Personalise Shopping, and Handle Support at Scale',
  heroSubhead:
    'For e-commerce brands who are leaving revenue on the table with generic automations. Agents that know your catalogue, your customers, and your margin targets.',
  useCasesHeading: 'What We Build for E-Commerce',
  useCases: [
    {
      title: 'Cart Recovery Agent',
      desc: 'Detects abandoned carts and sends personalised recovery sequences across email, SMS, and WhatsApp — with dynamic discount logic based on cart value, customer tier, and margin rules you define.',
      stat: '15–25% cart recovery rate',
    },
    {
      title: 'Customer Support Agent',
      desc: 'Handles order status, returns, product questions, and size/fit queries using your catalogue, order management system, and return policy. Resolves autonomously. Escalates only what it cannot handle.',
      stat: '70% of tickets resolved without humans',
    },
    {
      title: 'Personalisation Agent',
      desc: 'Analyses purchase history, browse behaviour, and product affinity to surface hyper-relevant recommendations in email, on-site, and in post-purchase flows — dynamically updated as behaviour changes.',
      stat: 'Avg 22% increase in repeat purchase rate',
    },
    {
      title: 'Inventory Alert Agent',
      desc: 'Monitors stock levels, detects low-inventory risk on high-velocity SKUs, and automatically notifies buyers on waitlists, pauses ad spend on out-of-stock products, and escalates reorder decisions.',
      stat: 'Zero stockout surprises on monitored SKUs',
    },
  ],
  whyHeading: 'Why AI Agents, Not Automation Flows',
  benefits: [
    {
      title: 'Shopify, WooCommerce, and custom platforms',
      desc: 'Integrates with your store, OMS, and returns platform out of the box.',
    },
    {
      title: 'Margin-aware logic',
      desc: 'Discount and offer logic respects your margin floors — agents never give away more than you allow.',
    },
    {
      title: 'Omnichannel by default',
      desc: 'Runs across email, SMS, WhatsApp, and web chat from a single agent deployment.',
    },
  ],
  ctaText: 'Ready to deploy an AI agent for your e-commerce store?',
  metaTitle: 'AI Agents for E-Commerce — Cart Recovery, Support & Personalisation',
  metaDescription:
    'AI agents for e-commerce — cart recovery, personalised recommendations, and 24/7 customer support. Fixed-price from $1,500.',
};

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `/${data.slug}` },
  openGraph: {
    title: `${data.metaTitle} | Xgenious`,
    description: data.metaDescription,
    url: `${BASE_URL}/${data.slug}`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: data.metaTitle,
    description: data.metaDescription,
    images: ['/og-image.png'],
    site: '@xgenious1',
    creator: '@xgenious1',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'AI Agent Services', item: `${BASE_URL}/ai-agent-development-services` },
    { '@type': 'ListItem', position: 3, name: `AI Agents for ${data.industry}`, item: `${BASE_URL}/${data.slug}` },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustryAgentPage data={data} />
    </>
  );
}
