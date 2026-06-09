import { CANONICAL, REGULAR_PRICE, EXTENDED_PRICE, COMBO_PRICE } from './constants';

export default function JsonLd() {
  const product = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Qixer',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android, iOS',
    description:
      `Qixer is a multi-vendor on-demand service marketplace script built with Laravel 12 and Flutter. Launch a TaskRabbit-style platform with buyer and seller apps, GPS-based service discovery, drag-and-drop builders, dual revenue models, and 20+ payment gateways. One-time purchase from $${REGULAR_PRICE}.`,
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
        name: 'Everything Bundle',
        price: String(COMBO_PRICE),
        priceCurrency: 'USD',
        description: 'Web platform plus buyer and seller Flutter apps. Lifetime license and free updates. 6 months support.',
      },
      {
        '@type': 'Offer',
        name: 'Exclusive License',
        price: String(EXTENDED_PRICE),
        priceCurrency: 'USD',
        description: 'Build and sell as a SaaS business. White-label rights. Lifetime license and free updates. 12 months priority support.',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '46',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Launch a Multi-Vendor On-Demand Service Marketplace with Qixer',
    description: 'Set up your own on-demand service marketplace using Qixer in three steps.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Install and Configure',
        text: 'Purchase Qixer. Upload to a PHP 8.3+ server with MySQL 8+. Run the guided installer and configure service categories, commission rates, and payment gateways. Free cPanel installation is included.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Onboard Providers and Buyers',
        text: 'Service providers register, create listings, and set their availability. Buyers download the Flutter app, search by location, browse services, and book in seconds.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Grow Your Marketplace',
        text: 'Manage bookings, approve providers, configure subscription plans, monitor orders, process payouts, and launch promotions from the Laravel admin panel.',
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
        name: 'What is Qixer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Qixer is a multi-vendor on-demand service marketplace script built with Laravel 12 and PHP 8.3+. It lets you launch a platform where service providers list their services and customers book them — similar to TaskRabbit or UrbanClap. Ships with buyer and seller Flutter apps, drag-and-drop admin panel, and 20+ payment gateways. One-time purchase from $${REGULAR_PRICE}.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Does Qixer include mobile apps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Qixer ships with a buyer app and a seller app built with Flutter for iOS and Android. They are included with the Everything Bundle ($${COMBO_PRICE}) and Exclusive License ($${EXTENDED_PRICE}) — not the Regular License ($${REGULAR_PRICE}).`,
        },
      },
      {
        '@type': 'Question',
        name: 'Does Qixer support commission and subscription revenue?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Qixer supports commission on completed orders, recurring subscription fees for providers, or both simultaneously. You configure and switch between revenue models from the admin panel without code changes.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the server requirements for Qixer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Qixer requires PHP 8.3+, MySQL 8+, and a standard Linux VPS or cPanel hosting environment. Free admin panel cPanel installation is included with every purchase.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment gateways does Qixer support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Qixer integrates with 20+ payment gateways including PayPal, Stripe, Razorpay, Paytm, Flutterwave, and many regional options. Gateways are configured from the admin panel without code changes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I white-label Qixer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `White-labeling requires the Exclusive License ($${EXTENDED_PRICE}). It grants SaaS rights — you can operate the platform as a subscription business, launch unlimited marketplaces, remove all branding, and modify source code freely.`,
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
