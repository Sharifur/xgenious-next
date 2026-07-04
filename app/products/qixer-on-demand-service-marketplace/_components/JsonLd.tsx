import { CANONICAL, CODECANYON_URL, REGULAR_PRICE, EXTENDED_PRICE, COMBO_PRICE } from './constants';

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
        description: 'Build and sell as a SaaS business. White-label rights. Lifetime license and free updates. 6 months priority support.',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '46',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'rhinocreativeagencyweb' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'At first we tried other scripts — too buggy. After two months we found Qixer. It\'s high quality, infinitely flexible, and full of every feature you could want for a service provider marketplace. Customer support is always helpful through the dedicated ticket system.',
        url: CODECANYON_URL,
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Brandicon' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'This has everything you can dream of — design, code, documentation, and support. Built like WordPress with pages and widgets so you can customize quickly. Updating is automated with excellent instructions.',
        url: CODECANYON_URL,
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'DUNAMIS-888' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'The response time from the support ticket was about 10 minutes. Coming from a strong IT background, I can without a shadow of a doubt recommend this script for true internet entrepreneurs.',
        url: CODECANYON_URL,
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'MyKodezone' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'The Qixer Application\'s code quality and support are excellent. The team is highly responsive and resolves issues quickly. I highly recommend them for anyone looking for a reliable service marketplace solution.',
        url: CODECANYON_URL,
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'ddakser' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Best in CodeCanyon, in every aspect. The script, the documentation, the support — all top tier. Nothing else comes close in this category.',
        url: CODECANYON_URL,
      },
    ],
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
      {
        '@type': 'Question',
        name: 'How does the drag-and-drop builder work in Qixer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Qixer ships with a WordPress-style builder system including a page builder with 30+ widgets, a menu builder with mega menu support, a form builder, and a widget builder. Admins create and edit pages, navigation, and widgets without writing code.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Qixer support multiple languages and RTL?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Qixer includes multi-language support with RTL (right-to-left) capability for Arabic, Hebrew, and other RTL languages. Languages are managed from the admin panel without touching code, making it ready for any regional market.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many sales has Qixer made on CodeCanyon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Qixer has 712 sales and a 4.5/5 rating from 46 verified reviews on CodeCanyon. It is sold by an Elite Author on CodeCanyon with consistent support quality over its 4-year history.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a live demo for Qixer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. A full live demo is available at qixer.bytesed.com. Admin login: super_admin / 12345678. Seller login: test_seller / 12345678. Buyer login: test_buyer / 12345678. The Flutter mobile app is available on Google Play Store.',
        },
      },
      {
        '@type': 'Question',
        name: 'What support is included with Qixer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every license includes 6 months of ticket-based support with an average 10-minute response time. Support can be extended to 12 months at checkout. Documentation is at docs.xgenious.com and a YouTube tutorial playlist covers installation and configuration.',
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
