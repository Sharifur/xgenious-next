import { CANONICAL, REGULAR_PRICE, EXTENDED_PRICE } from './constants';

export default function JsonLd() {
  const product = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'HelpNest',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'HelpNest is a self-hosted Laravel PHP script to build your own AI-powered customer support SaaS platform. Features semantic AI chatbot, multi-tenant architecture, support ticketing, knowledge base, embeddable chat widget, and subscription management. One-time purchase starting at $59.',
    url: CANONICAL,
    author: { '@type': 'Organization', name: 'Xgenious', url: 'https://xgenious.com' },
    offers: [
      {
        '@type': 'Offer',
        name: 'Regular License',
        price: String(REGULAR_PRICE),
        priceCurrency: 'USD',
        description: 'Single domain. Lifetime license and free updates. 6 months support.',
      },
      {
        '@type': 'Offer',
        name: 'Extended License',
        price: String(EXTENDED_PRICE),
        priceCurrency: 'USD',
        description: 'Build a paid SaaS business. Unlimited clients. Lifetime license and free updates. 6 months support.',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.80',
      reviewCount: '24',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'icanhelpyourbusiness' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'Easy to install and get running. The support team were very quick in helping with an issue.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'abunowmankalim53' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'The support team is absolutely outstanding! Really impressed with their dedication and willingness to help.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Aofn75' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'One of the best and fast customer support...scripts are amazing...highly recommended.',
      },
    ],
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Launch an AI Chatbot SaaS Platform with HelpNest',
    description: 'Set up your own AI-powered customer support platform using HelpNest in three steps.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Purchase and Install',
        text: 'Purchase HelpNest. Upload to a PHP 8.4+ VPS with PostgreSQL 14+, Redis, and Pusher. Run the guided installer and configure your domain. Setup takes under 30 minutes.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Train Your AI Chatbot',
        text: 'Add knowledge base articles and product documentation. HelpNest uses semantic vector search to train your AI chatbot — it understands context, not just keywords.',
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
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is HelpNest?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HelpNest is a self-hosted Laravel PHP script to build your own AI-powered customer support platform like Crisp, Intercom, or Tidio. It includes a semantic AI chatbot, multi-tenant architecture, ticketing system, knowledge base, embeddable chat widget, and subscription management. One-time purchase from $59 — no monthly SaaS fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use HelpNest to run my own SaaS business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The Extended License allows you to offer HelpNest as a paid service to unlimited clients and build a recurring revenue SaaS business. Stripe and PayPal subscription billing are built in.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the AI chatbot work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HelpNest uses semantic search with vector similarity technology. The chatbot understands context and meaning rather than just matching keywords, powered by OpenAI (GPT-4, GPT-3.5) and Anthropic Claude APIs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the server requirements for HelpNest?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HelpNest requires PHP 8.4+, PostgreSQL 14+, Redis, and Pusher. A minimum of 4 GB RAM is recommended on any Linux VPS.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does HelpNest support multiple languages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. If you train the knowledge base with multilingual content, the AI chatbot can respond in your customers preferred languages without additional configuration.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is HelpNest different from Crisp, Intercom, or Tidio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Crisp, Intercom, and Tidio are SaaS platforms that charge $29–$45 per month per workspace. HelpNest is a one-time $59 purchase you self-host — no monthly fees, full source code, true multi-tenant architecture, and white-label rights under your own domain.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
