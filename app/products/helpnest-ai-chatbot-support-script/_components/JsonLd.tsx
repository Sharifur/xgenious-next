import { CANONICAL, REGULAR_PRICE, EXTENDED_PRICE } from './constants';

export default function JsonLd() {
  const product = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Helpnest',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'Helpnest is a self-hosted Laravel PHP script to build your own AI-powered customer support SaaS platform. Features semantic AI chatbot, multi-tenant architecture, support ticketing, knowledge base, embeddable chat widget, and subscription management. One-time purchase starting at $59.',
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
    name: 'How to Launch an AI Chatbot SaaS Platform with Helpnest',
    description: 'Set up your own AI-powered customer support platform using Helpnest in three steps.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Purchase and Install',
        text: 'Purchase Helpnest. Upload to a PHP 8.4+ VPS with PostgreSQL 14+, Redis, and Pusher. Run the guided installer and configure your domain. Setup takes under 30 minutes.',
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
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Helpnest?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Helpnest is a self-hosted Laravel PHP script to build your own AI-powered customer support platform like Crisp, Intercom, or Tidio. It includes a semantic AI chatbot, multi-tenant architecture, ticketing system, knowledge base, embeddable chat widget, and subscription management. One-time purchase from $59 — no monthly SaaS fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use Helpnest to run my own SaaS business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The Extended License allows you to offer Helpnest as a paid service to unlimited clients and build a recurring revenue SaaS business. Stripe and PayPal subscription billing are built in.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the AI chatbot work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Helpnest uses semantic search with vector similarity technology. The chatbot understands context and meaning rather than just matching keywords, powered by OpenAI (GPT-4, GPT-3.5) and Anthropic Claude APIs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the server requirements for Helpnest?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Helpnest requires PHP 8.4+, PostgreSQL 14+, Redis, and Pusher. A minimum of 4 GB RAM is recommended on any Linux VPS.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Helpnest support multiple languages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. If you train the knowledge base with multilingual content, the AI chatbot can respond in your customers preferred languages without additional configuration.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is Helpnest different from Crisp, Intercom, or Tidio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Crisp, Intercom, and Tidio are SaaS platforms that charge $29–$45 per month per workspace. Helpnest is a one-time $59 purchase you self-host — no monthly fees, full source code, true multi-tenant architecture, and white-label rights under your own domain.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which Helpnest license do I need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Choose the Regular License ($59) for a single internal deployment — one company, one chatbot platform. Choose the Extended License ($199) if you want to sell chatbot access to paying clients and build a recurring SaaS revenue stream with subscription billing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will the Helpnest AI chatbot replace human support agents?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Helpnest is designed to augment, not replace. The AI handles routine queries and FAQs automatically. Complex or sensitive issues are escalated to human agents through the ticketing system. You control escalation rules from the admin panel.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Helpnest knowledge base and how does it train the AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The knowledge base is a searchable documentation system you build inside Helpnest. Articles are indexed using vector embeddings. When a visitor asks a question, the AI runs a semantic similarity search against your knowledge base to find the most relevant answer — not just keyword matches.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Helpnest include visitor tracking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Helpnest includes a real-time visitor map showing browsing history, current page, country, and address details. You can initiate a proactive chat with any live visitor directly from the dashboard before they leave your site.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Helpnest multi-tenant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Helpnest is built with a multi-tenant architecture from the ground up. Each client workspace has isolated knowledge bases, AI agents, conversations, and billing — no data leaks between workspaces. This makes it suitable for resellers and agencies.',
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
