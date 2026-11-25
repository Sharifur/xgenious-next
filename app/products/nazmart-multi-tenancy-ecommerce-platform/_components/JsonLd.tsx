import { FAQS, CODECANYON_REVIEWS, PURCHASE_URL, CANONICAL, BASE_URL, REGULAR_PRICE } from './constants';

export default function JsonLd() {
  const softwareApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${CANONICAL}#software`,
    name: 'Nazmart',
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web, Linux',
    offers: {
      '@type': 'Offer',
      price: REGULAR_PRICE.toString(),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: PURCHASE_URL,
    },
    description: 'Nazmart is a multi-tenant eCommerce SaaS platform. Unlimited stores, a separate database per store, custom domains and subscription plans. The core web panel is a one-time purchase from $69. POS, the Flutter app and premium plugins are in the $99 bundle.',
    url: CANONICAL,
    featureList: [
      'Multi-tenancy architecture with isolated vendor stores',
      'SaaS subscription billing for vendors',
      'Custom domain per tenant store',
      '19+ payment gateways: Stripe, PayPal, Razorpay, Flutterwave, Mollie, Paystack, and more',
      "23+ SMS & WhatsApp gateways: Twilio, Vonage, Sinch, Plivo, Africa's Talking, Termii, BulkSMS, Hubtel, AlphaNet, Bulk SMS BD, Mimosms, SSL Wireless, Fast2SMS, MSG91, TextLocal, Zenvia, Gupshup, Infobip, MSEGate, SMS Misr, Unifonic, Sendra, and Wati",
      'Flutter mobile apps for Android and iOS',
      'Point of Sale (POS) plugin for physical stores',
    ],
    author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
    review: CODECANYON_REVIEWS.slice(0, 5).map(r => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating.toString(), bestRating: '5' },
      reviewBody: r.body,
    })),
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Launch a Multi-Tenancy eCommerce Platform with Nazmart',
    step: [
      { '@type': 'HowToStep', name: 'Install & Configure', text: 'Upload Nazmart to your Linux VPS, configure your database, domain, and payment gateways in under an hour.' },
      { '@type': 'HowToStep', name: 'Create Vendor Subscription Plans', text: 'Define monthly and yearly pricing tiers. Set storage limits, product quotas, and feature access per plan.' },
      { '@type': 'HowToStep', name: 'Vendors Launch — You Collect Revenue', text: 'Vendors register, pick a theme, add their products, and go live. You earn recurring subscription income automatically.' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
    </>
  );
}
