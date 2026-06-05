import { CANONICAL, REGULAR_PRICE, EXTENDED_PRICE } from './constants';

export default function JsonLd() {
  const product = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Prohandy',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android',
    description:
      `Prohandy is a Laravel and Flutter script for building an on-demand home service marketplace. Features dual-sided marketplace for clients and service providers, cart-based booking, job posting and hiring flow, real-time live chat, Google Maps integration, push notifications, and 20+ payment gateways. One-time purchase from $${REGULAR_PRICE}.`,
    url: CANONICAL,
    author: { '@type': 'Organization', name: 'Xgenious', url: 'https://xgenious.com' },
    offers: [
      {
        '@type': 'Offer',
        name: 'Regular License',
        price: String(REGULAR_PRICE),
        priceCurrency: 'USD',
        description: 'Single domain. Web platform and admin panel. Lifetime license and free updates. 6 months support. Flutter apps available in Everything Bundle.',
      },
      {
        '@type': 'Offer',
        name: 'Extended License',
        price: String(EXTENDED_PRICE),
        priceCurrency: 'USD',
        description: 'Build and sell as a SaaS business. White-label rights. Lifetime license and free updates. 6 months support.',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.80',
      reviewCount: '18',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Launch an On-Demand Home Service Marketplace with Prohandy',
    description: 'Set up your own service marketplace using Prohandy in three steps.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Install and Configure',
        text: 'Purchase Prohandy. Upload to a PHP 8.0+ server with MySQL. Run the guided installer and configure service categories and payment gateways. Free cPanel installation is included.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Onboard Providers and Clients',
        text: 'Service providers create listings and manage staff from the provider app. Clients download the client app, browse services, book via cart checkout, or post jobs for providers to bid on.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Grow Your Marketplace',
        text: 'Manage bookings, approve providers, configure taxes, and expand service categories from the Laravel admin panel. Live chat and push notifications keep clients and providers engaged.',
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
        name: 'What is Prohandy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Prohandy is a complete Laravel and Flutter script for building an on-demand home service marketplace. It connects clients with service providers through cart-based booking, job posting, real-time live chat, Google Maps integration, push notifications, and 20+ payment gateways. Flutter mobile apps for both clients and providers are included. One-time purchase from $${REGULAR_PRICE}.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Does Prohandy include mobile apps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Both the client Flutter app and provider Flutter app are built with Flutter and available on Android via Google Play. They are included with the Everything Bundle ($69) and Exclusive License ($${EXTENDED_PRICE}) — not the Regular License ($${REGULAR_PRICE}).`,
        },
      },
      {
        '@type': 'Question',
        name: 'What payment gateways does Prohandy support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prohandy includes 20+ payment gateways built into the admin panel — Stripe, PayPal, Razorpay, Flutterwave, Paystack, Mollie, CinetPay, Square, and more. No third-party billing setup required beyond entering API keys.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the server requirements for Prohandy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prohandy requires PHP 8.0+, MySQL, and a standard cPanel hosting environment. Free admin panel cPanel installation is included with every purchase.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the job posting feature in Prohandy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clients can post job listings describing what they need. Providers browse available jobs on Google Maps by location, submit offers with cover letters and pricing, and clients hire the best fit. This reverse marketplace model sits alongside standard service booking.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Prohandy multilingual?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The Prohandy admin panel includes full multilingual support. You can configure the platform in any language and expand to new markets without additional plugins.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Regular and Extended license?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The Regular License ($${REGULAR_PRICE}) is for a single project deployment — one domain, personal or commercial use, but you cannot charge end users for the platform itself. The Extended License ($${EXTENDED_PRICE}) grants SaaS rights — you can build your own branded marketplace, charge clients, white-label by removing all Xgenious branding, and modify the source code freely.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a WhatsApp integration for Prohandy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The ProHandy WhatsApp Order Plugin is available separately on CodeCanyon. It uses the WhatsApp Business API to let clients book services, receive order notifications, and chat with support through WhatsApp.',
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
