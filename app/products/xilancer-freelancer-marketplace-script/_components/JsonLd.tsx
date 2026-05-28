import { BASE_URL, CANONICAL } from './constants';

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Xilancer',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Android, iOS',
  offers: { '@type': 'Offer', price: '49', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
  description:
    'All-in-one freelancer marketplace script built with Laravel. Build a Fiverr or Upwork clone with bidding, escrow payments, mobile apps, and admin panel.',
  url: CANONICAL,
  author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.36',
    reviewCount: '45',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Aofn75' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'One of the best and fast customer support I have ever seen. The script quality is excellent and the team goes above and beyond to help.',
      datePublished: '2025-10',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sommapropaganda' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Genial programmers with fast, effective solutions. The support team resolved every issue quickly and the platform works great.',
      datePublished: '2025-10',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Trustable' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'This product stands out with a seamless user experience and competitive features. Very well built and easy to customize.',
      datePublished: '2025-05',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'letrank69' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Absolutely amazing script! Clean code, modern UI. Setup was smooth, performance is great, and the developer is always responsive and helpful.',
      datePublished: '2025-05',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'rossymike' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'A complete solution that delivers everything as promised. Support has been outstanding — even when they were on holiday, they still responded promptly.',
      datePublished: '2025-05',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Otiumapps' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Outstanding support and wonderful spirit. Their professionalism and dedication truly made a difference.',
      datePublished: '2025-10',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Xilancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xilancer is a complete freelancer marketplace script built with Laravel. It lets you launch your own Fiverr or Upwork clone — fully self-hosted, one-time purchase, no monthly fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Xilancer include a mobile app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Xilancer ships with native Android and iOS mobile apps for both freelancers and clients. The mobile apps cover the full job and project workflow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which payment gateways does Xilancer support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xilancer supports PayPal, Stripe, and several regional gateways. Payments go through an escrow system — funds release to the freelancer only after client approval.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it a one-time purchase or a subscription?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One-time purchase. You buy the script once on CodeCanyon, download the source code, and self-host it on your own server. No recurring licensing fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I white-label Xilancer for my own brand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The script is fully white-label ready. Change the name, logo, colors, and domain. You own the platform and the brand.',
      },
    },
    {
      '@type': 'Question',
      name: 'What server is required to run Xilancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any Linux VPS or shared hosting with PHP 8.1+, MySQL 5.7+, and Composer. 2 GB RAM recommended for production. Nginx or Apache both work.',
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
