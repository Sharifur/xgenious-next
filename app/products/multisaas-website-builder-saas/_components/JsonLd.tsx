import { FAQS, REVIEWS, PURCHASE_URL, CANONICAL, BASE_URL, REGULAR_PRICE } from './constants';

export default function JsonLd() {
  const softwareApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MultiSaas',
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web, Linux',
    offers: {
      '@type': 'Offer',
      price: REGULAR_PRICE.toString(),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: PURCHASE_URL,
    },
    description:
      'MultiSaas is a multi-tenancy multipurpose website builder SaaS platform. Operators run their own website-builder business: tenants sign up, pick a package, choose a theme, set a domain, and get a live website in minutes. Includes 10+ modules, 15+ themes, 19+ payment gateways, and custom domain support. One-time purchase from $59.',
    url: CANONICAL,
    author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '550',
      bestRating: '5',
      worstRating: '1',
    },
    review: REVIEWS.slice(0, 5).map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating.toString(), bestRating: '5' },
      reviewBody: r.body,
    })),
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Launch a Website Builder SaaS with MultiSaas',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Purchase and Install',
        text: 'Buy MultiSaas on CodeCanyon from $59. Upload to your Linux VPS, run the installer, and configure your domain and payment gateways.',
      },
      {
        '@type': 'HowToStep',
        name: 'Create Subscription Plans',
        text: 'Define your pricing tiers. Choose which of the 10+ modules and 19+ payment gateways are included in each plan. Set your prices.',
      },
      {
        '@type': 'HowToStep',
        name: 'Activate Themes',
        text: 'Enable the themes you want to offer from the 15+ available. Tenants pick from the themes you activate when building their site.',
      },
      {
        '@type': 'HowToStep',
        name: 'Tenants Sign Up and Go Live',
        text: 'Tenants log in, select a package, enter their domain, and their website is live within minutes. You collect subscription revenue automatically.',
      },
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
