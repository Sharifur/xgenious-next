import { BASE_URL, CANONICAL, CODECANYON_URL, REGULAR_PRICE, COMBO_PRICE, EXTENDED_PRICE } from './constants';
import { FAQS } from './faqs';
import { PLUGINS } from './plugins';

export default function JsonLd() {
  const product = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Helpnest',
    alternateName: 'Helpnest AI Chatbot Script',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'AI customer support chatbot',
    operatingSystem: 'Linux (PHP 8.4+, PostgreSQL 14+, Redis)',
    url: CANONICAL,
    image: `${BASE_URL}/products/helpnest-hero.jpg`,
    description:
      'Helpnest is a self-hosted AI chatbot script for Laravel to run your own AI customer support platform: semantic AI chatbot (OpenAI and Claude), live chat with human hand-off, ticketing, knowledge base and multi-tenant subscription billing. The Everything Bundle and Exclusive License include 13 premium plugins.',
    author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
    featureList: [
      'Semantic AI chatbot (OpenAI and Anthropic Claude)',
      'Live chat with human hand-off',
      'Ticketing with SLA tracking',
      'Knowledge base that trains the AI',
      'Embeddable chat widget',
      'Multi-tenant SaaS with subscription billing',
      ...PLUGINS.map((p) => `Plugin: ${p.name}${p.beta ? ' (beta)' : ''}`),
    ],
    hasPart: PLUGINS.map((p) => ({
      '@type': 'SoftwareApplication',
      name: `Helpnest ${p.name} plugin`,
      description: p.desc,
    })),
    offers: [
      {
        '@type': 'Offer',
        name: 'Regular License',
        price: String(REGULAR_PRICE),
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: CODECANYON_URL,
        description: 'Core platform, single deployment. Lifetime updates, 6 months support. Premium plugins not included and not sold separately.',
      },
      {
        '@type': 'Offer',
        name: 'Everything Bundle',
        price: String(COMBO_PRICE),
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${BASE_URL}/checkout?product=helpnest-everything-bundle`,
        description: 'Web platform, Flutter mobile app, SaaS / white-label rights and all 13 premium plugins, with free future plugin updates.',
      },
      {
        '@type': 'Offer',
        name: 'Exclusive License',
        price: String(EXTENDED_PRICE),
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${BASE_URL}/checkout?product=helpnest-exclusive-pack`,
        description: 'Everything in the Bundle plus unlimited client workspaces, source code modification rights and priority support. Includes all 13 premium plugins, with free future plugin updates.',
      },
    ],
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Launch an AI Chatbot SaaS Platform with Helpnest',
    description: 'Set up your own AI-powered customer support platform using Helpnest in three steps.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Purchase and Install',
        text: 'Purchase Helpnest. Upload to a PHP 8.4+ VPS with PostgreSQL 14+, Redis, and Laravel Reverb or Pusher (your choice). Run the guided installer and configure your domain. Setup takes under 30 minutes.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Train Your AI Chatbot',
        text: 'Add knowledge base articles and product documentation. Helpnest uses semantic vector search to train your AI chatbot — it understands context, not just keywords.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Embed Widget and Go Live',
        text: 'Copy the lightweight chat widget snippet and paste it into your site via CDN or npm. Your AI chatbot starts resolving customer queries instantly.',
        position: 3,
      },
    ],
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
