import { CANONICAL, REGULAR_PRICE, EXTENDED_PRICE } from './constants';

export default function JsonLd() {
  const product = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'GoCar',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android',
    description:
      `GoCar is a Laravel and Flutter script for building an on-demand car service marketplace. Connects car owners with mechanics and service providers through real-time booking, order tracking, 19+ payment gateways, and Flutter mobile apps. One-time purchase from $${REGULAR_PRICE}.`,
    url: CANONICAL,
    author: { '@type': 'Organization', name: 'Xgenious', url: 'https://xgenious.com' },
    offers: [
      {
        '@type': 'Offer',
        name: 'Regular License',
        price: String(REGULAR_PRICE),
        priceCurrency: 'USD',
        description: 'Single domain. Web platform and admin panel. Lifetime license and free updates. 6 months support.',
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
      ratingValue: '5.00',
      reviewCount: '3',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Launch an On-Demand Car Service Marketplace with GoCar',
    description: 'Set up your own car service booking marketplace using GoCar in three steps.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Install and Configure',
        text: 'Purchase GoCar. Upload to a PHP 8.0+ server with MySQL. Run the guided installer and configure service categories and payment gateways. Free cPanel installation is included.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Onboard Mechanics and Customers',
        text: 'Mechanics and service providers create listings and manage their services. Customers download the Flutter app, select their car model, and book services or track orders in real time.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Grow Your Marketplace',
        text: 'Manage bookings, approve service providers, configure taxes, set service areas, and launch promotions from the Laravel admin panel.',
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
        name: 'What is GoCar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `GoCar is a complete Laravel and Flutter script for building an on-demand car service marketplace. It connects car owners with mechanics and service providers through a booking platform with real-time order tracking, push notifications, 19+ payment gateways, and Flutter mobile apps. One-time purchase from $${REGULAR_PRICE}.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Does GoCar include mobile apps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. The customer Flutter app is built with Flutter and available on Android via Google Play. It is included with the Everything Bundle ($79) and Exclusive License ($${EXTENDED_PRICE}) — not the Regular License ($${REGULAR_PRICE}).`,
        },
      },
      {
        '@type': 'Question',
        name: 'What payment gateways does GoCar support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GoCar includes 19+ payment gateways built into the admin panel — Stripe, PayPal, Razorpay, Flutterwave, Paystack, Mollie, CinetPay, Square, and more. No third-party billing setup required beyond entering API keys.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the server requirements for GoCar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GoCar requires PHP 8.0+, MySQL, and a standard cPanel hosting environment. Free admin panel cPanel installation is included with every purchase.',
        },
      },
      {
        '@type': 'Question',
        name: 'What car services can I offer with GoCar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GoCar supports any car service vertical — oil changes, tire rotation, brake service, engine diagnostics, detailing, roadside assistance, and more. All service categories are managed from the admin panel without code changes.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Regular and Extended license?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The Regular License ($${REGULAR_PRICE}) is for a single project deployment — one domain, personal or commercial use, but you cannot charge end users for the platform itself. The Extended License ($${EXTENDED_PRICE}) grants SaaS rights — you can build your own branded marketplace, charge customers, white-label the platform, and modify source code freely.`,
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
