import { CANONICAL, COMBO_PRICE, REGULAR_PRICE, EXTENDED_PRICE } from './constants';

export default function JsonLd() {
  const product = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Prohandy',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android',
    description:
      `Prohandy is a Laravel and Flutter script for building an on-demand home service marketplace. Features dual-sided marketplace for clients and service providers, cart-based booking, job posting and hiring flow, real-time live chat, Google Maps integration, push notifications, and 19 payment gateways. One-time purchase from $${REGULAR_PRICE}; mobile apps in the $${COMBO_PRICE} Everything Bundle.`,
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
        name: 'Everything Bundle',
        price: String(COMBO_PRICE),
        priceCurrency: 'USD',
        description: 'Web platform and admin panel plus Flutter client app, Flutter provider app and WhatsApp plugin. Lifetime license and free updates. 6 months support.',
      },
      {
        '@type': 'Offer',
        name: 'Exclusive License',
        price: String(EXTENDED_PRICE),
        priceCurrency: 'USD',
        description: 'Build and sell as a SaaS business. White-label rights. Lifetime license and free updates. 6 months support.',
      },
    ],
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
          text: `Prohandy is a complete Laravel and Flutter script for building an on-demand home service marketplace. It connects clients with service providers through cart-based booking, job posting, real-time live chat, Google Maps integration, push notifications, and 19 payment gateways. Flutter mobile apps for clients and providers come with the $${COMBO_PRICE} Everything Bundle. One-time purchase from $${REGULAR_PRICE}.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Does Prohandy include mobile apps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, with the Everything Bundle ($${COMBO_PRICE}) or the Exclusive License ($${EXTENDED_PRICE}): a Flutter client app and a Flutter provider app, built with the latest Flutter. The Regular License ($${REGULAR_PRICE}) is the web platform and admin only. Demo apps are on Google Play.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What payment gateways does Prohandy support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prohandy includes 19 payment gateways built into the admin panel — Stripe, PayPal, Razorpay, Flutterwave, Paystack, Mollie, CinetPay, Square, and more. No third-party billing setup required beyond entering API keys.',
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
        name: 'What is the difference between the Regular, Everything Bundle and Exclusive licences?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The Regular License ($${REGULAR_PRICE}) is the core web platform and admin panel for one domain. You can charge your customers. The Everything Bundle ($${COMBO_PRICE}) adds the Flutter client and provider apps and premium plugins such as WhatsApp. The Exclusive License ($${EXTENDED_PRICE}) adds SaaS and white-label rights and unrestricted source-code modification.`,
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
