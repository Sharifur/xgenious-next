import { CANONICAL, CODECANYON_URL, REGULAR_PRICE, BUNDLE_PRICE, EXTENDED_PRICE, BUNDLE_PRODUCT_PATH, EXCLUSIVE_PRODUCT_PATH } from './constants';

const BASE_URL = 'https://xgenious.com';

export default function JsonLd() {
  const product = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Botmerze',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Linux',
    description:
      'Self-hosted AI chatbot SaaS script for WooCommerce and Shopify. RAG-powered with pgvector, multi-client SaaS management, 18+ payment gateways, and lead capture. Built on Laravel 12.',
    url: CANONICAL,
    offers: [
      {
        '@type': 'Offer',
        price: String(REGULAR_PRICE),
        priceCurrency: 'USD',
        name: 'Regular License',
        url: CODECANYON_URL,
      },
      {
        '@type': 'Offer',
        price: String(BUNDLE_PRICE),
        priceCurrency: 'USD',
        name: 'Everything Bundle',
        url: `${BASE_URL}/checkout?product=${BUNDLE_PRODUCT_PATH}`,
      },
      {
        '@type': 'Offer',
        price: String(EXTENDED_PRICE),
        priceCurrency: 'USD',
        name: 'Exclusive License',
        url: `${BASE_URL}/checkout?product=${EXCLUSIVE_PRODUCT_PATH}`,
      },
    ],
    author: {
      '@type': 'Organization',
      name: 'Xgenious',
      url: BASE_URL,
    },
    softwareVersion: '1.0',
    programmingLanguage: 'PHP',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '5',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Set Up Botmerze AI Chatbot',
    description: 'Install and launch Botmerze on your e-commerce store in three steps.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Install on Your Server',
        text: 'Upload Botmerze to a PHP 8.3+ server with PostgreSQL and pgvector. Run the guided installer — configure OpenAI API key, database, Redis, and mail settings.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Train the Chatbot',
        text: 'Connect your WooCommerce or Shopify store for live product and order sync. Upload PDFs, paste URLs, or add web pages — the AI builds a vector knowledge base via pgvector embeddings.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Embed & Go Live',
        text: 'Copy one script tag from the widget builder and paste it into your store theme. The chatbot is live and handling customer queries 24/7.',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Botmerze?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Botmerze is a self-hosted AI chatbot SaaS script built on Laravel 12. It lets you deploy a RAG-powered chatbot on WooCommerce, Shopify, or any custom store — trained on your product catalog, PDFs, URLs, and web pages. You own the software and pay no monthly AI subscription fees beyond your own OpenAI API usage.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the RAG-powered AI work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Botmerze uses Retrieval-Augmented Generation (RAG) with PostgreSQL + pgvector to embed your knowledge base into searchable vectors. When a customer asks a question, the system retrieves the most relevant context from your training data and passes it to OpenAI GPT — so the AI answers from your store\'s actual content, not generic training data. This eliminates hallucinations and produces accurate, context-specific responses.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Botmerze work with WooCommerce and Shopify?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Botmerze has native integrations for both WooCommerce and Shopify. It syncs live product catalog, inventory levels, order status, and customer data in real time. The chatbot can answer "Is this item in stock?", "Where is my order?", and product-specific questions using up-to-date store data — no manual updates required.',
        },
      },
      {
        '@type': 'Question',
        name: 'What server is required to run Botmerze?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Botmerze requires PHP 8.3+, PostgreSQL 16+ with pgvector extension enabled, Redis 6+, Composer 2.x, and an OpenAI API key. A Linux VPS (2 GB RAM minimum) or cPanel hosting with PostgreSQL support works well. Free cPanel installation assistance is included with every purchase.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is pgvector difficult to set up?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'pgvector is a PostgreSQL extension supported by most modern VPS providers and managed database services. On a Linux VPS it installs with a single command. If you need help, free setup assistance is included with your purchase — just open a support ticket.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use Botmerze as a SaaS and charge my own clients?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — that\'s one of Botmerze\'s primary use cases. The Regular License ($49) and Everything Bundle ($69) allow you to install Botmerze and offer chatbot subscriptions to your clients (each client gets an isolated environment). The Exclusive License ($199) covers white-labeling, source code modification, and multiple production deployments. 18+ payment gateways handle billing automatically.',
        },
      },
      {
        '@type': 'Question',
        name: 'What training sources does Botmerze support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Botmerze can ingest training data from PDFs and DOCX documents, website URLs (it crawls and indexes the content), images (via Tesseract OCR for extracting text from product images and screenshots). You can also connect your WooCommerce or Shopify store for live product data sync.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need my own OpenAI API key?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Botmerze uses your own OpenAI API key, which means you pay OpenAI directly at cost — no markup or hidden AI fees. You can use GPT-4o, GPT-4, or GPT-3.5-Turbo depending on your cost and quality preferences. This also means your customer conversations stay in your control.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a monthly fee after purchase?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No monthly fee to Xgenious or CodeCanyon. Your only ongoing cost is the OpenAI API usage billed directly by OpenAI, which scales with actual conversation volume. For a typical small-to-medium store, this is a few dollars per month.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment gateways are supported for SaaS billing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Botmerze includes 18+ payment gateways: Stripe, PayPal, Razorpay, Paytm, Flutterwave, Mollie, SSLCommerz, Paystack, and 10+ more. Subscription plans, trial periods, plan upgrades, and automatic renewals are all managed from the admin panel.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Regular License, Everything Bundle, and Exclusive License?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Regular License ($49) lets you use Botmerze on one domain and sell chatbot subscriptions to clients. The Everything Bundle ($69) adds SaaS rights — charge end-user subscriptions. The Exclusive License ($199) adds white-label branding removal, multiple production deployments, source code modification rights, and 6 months priority support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Botmerze include human handoff or live chat support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. When the AI cannot answer a question or the customer requests human assistance, Botmerze escalates to a built-in support ticket system. Agents see full chat history, can respond from the dashboard, and tickets are tracked with status, priority, and assignment — no third-party helpdesk subscription required.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
