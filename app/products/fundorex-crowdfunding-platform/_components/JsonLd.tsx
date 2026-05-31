import { CANONICAL, REGULAR_PRICE } from './constants';

export default function JsonLd() {
  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Fundorex',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: String(REGULAR_PRICE),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    description:
      'Fundorex is a self-hosted Laravel crowdfunding platform script with community campaigns, donor wallet, volunteer management, event ticketing, gift-based donations, 20+ payment gateways, and a Flutter mobile app. One-time purchase — no monthly fees.',
    url: CANONICAL,
    author: { '@type': 'Organization', name: 'Xgenious', url: 'https://xgenious.com' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.70',
      reviewCount: '43',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'nkingsly' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'Outstanding support from the Xgenious team. They are responsive, proactive, and genuinely go above and beyond to resolve issues. The product itself is excellent — everything works as described.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'tuliog' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: "There's no better crowdfunding theme than Fundorex. Excellent customer service — always there to help. Very professional team and a beautiful, well-built product.",
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Crazetech' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'Clean code, easy install, no issues out of the box, and very easy to use. Will definitely be buying more products from this author.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'hopitalFuuta' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'Very professional! My problem was resolved in less than half an hour. This is my second license — that says everything about the quality of this product and team.',
      },
    ],
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Launch a Crowdfunding Platform with Fundorex',
    description: 'Set up your own crowdfunding website using the Fundorex Laravel script in three steps.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Purchase and Download',
        text: 'Purchase Fundorex from CodeCanyon. Download the script ZIP, database SQL file, and documentation. The Flutter mobile app source code is included in the Combo and Extended packs.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Install on Your Server',
        text: 'Upload Fundorex to any Linux VPS or shared hosting running PHP 8+ and MySQL. Run the guided installer, import the database, and configure your domain. Full setup takes under 30 minutes.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Configure and Launch',
        text: 'Set your platform fees, enable payment gateways, configure campaign categories, and customize colors from the admin panel. Publish your crowdfunding platform and start accepting donations.',
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
        name: 'What is Fundorex?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fundorex is a self-hosted crowdfunding platform script built on Laravel PHP. It lets you launch your own fundraising website where users can create donation campaigns, accept contributions, manage volunteers, run ticketed events, and withdraw funds — all under your own brand and domain. One-time purchase starting at $69.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which payment gateways does Fundorex support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fundorex includes 20+ payment gateways: Stripe, PayPal, Razorpay, 2Checkout, Skrill, Payoneer, Wise, Square, Cinetpay, Paytabs, SSLCommerz, Instamojo, Mollie, Flutterwave, and more. Bank transfer and cash payments are also supported.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Fundorex include a mobile app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The Combo Pack and Extended License include a Flutter-built mobile app for Android and iOS. Donors can browse campaigns, contribute, and track progress directly from the app. The app is available on Google Play.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Fundorex a one-time purchase?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Fundorex is a one-time purchase starting at $69. There are no monthly subscription fees, no platform commissions taken by Xgenious, and no recurring costs. You keep 100% of what your campaigns raise minus your own platform fee settings.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Fundorex support community campaigns and volunteers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Fundorex includes a community campaign system and a volunteer management module. Campaign owners can post volunteer opportunities, accept applications from users, and track participation. Community members can collaborate on shared fundraising goals.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a built-in donor wallet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Fundorex includes a built-in donor wallet. Donors can top up their wallet via any supported payment gateway and use it to contribute to campaigns quickly without re-entering payment details for each donation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the campaign withdrawal system work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Campaign owners can request withdrawal of raised funds once a campaign reaches its goal or closes. Admins review and approve withdrawal requests from the dashboard, then release funds via the configured payout method.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between platform fee and transaction fee in Fundorex?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Platform fee is the admin commission on each donation, configurable as a percentage or flat amount. Transaction fee is the charge from the payment gateway provider. Both are shown transparently to donors before they complete a contribution.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Fundorex support gift-based or reward donations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Campaign owners can set gift tiers where donors who give above a set amount receive a reward or acknowledgement. This is ideal for product pre-launches, creative projects, and incentivized fundraising campaigns.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I customize Fundorex without coding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The admin panel includes color customization, multi-language support with RTL, and configurable commission settings. For deeper changes, you have full access to the Laravel source code. Full documentation is available at docs.xgenious.com/docs/fundorex/.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is Fundorex different from GoFundMe or Kickstarter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GoFundMe and Kickstarter are SaaS platforms that take 3–8% fees, restrict your branding, and lock you to their servers. Fundorex is a self-hosted crowdfunding platform script — one-time $69 purchase, zero monthly fees, zero platform commission, full Laravel source code, and your own domain. You own the platform entirely.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Fundorex a white-label crowdfunding solution?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Fundorex is fully white-label. Host it under your own domain and brand. Donors never see Xgenious or CodeCanyon. Customize colors, logo, email templates, and all UI text from the admin panel without writing code.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Fundorex be used as a Kickstarter clone or alternative?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Fundorex supports reward-based crowdfunding with campaign goals, deadlines, backer gift tiers, and public campaign discovery — similar to Kickstarter. It also supports pure donation campaigns and community fundraising, making it more versatile than a standard Kickstarter clone script.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
