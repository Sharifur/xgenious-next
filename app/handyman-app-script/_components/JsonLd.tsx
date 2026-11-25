import { FAQS, PAGE_URL } from './copy';

export default function JsonLd() {
  const graph = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Handyman App Script: Customer App, Provider App and Admin Panel',
      description: 'ProHandy handyman app script: Laravel admin, Flutter customer and provider apps, cart booking, job posts with offers, 19 gateways.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://xgenious.com' },
        { '@type': 'ListItem', position: 2, name: 'Handyman App Script', item: PAGE_URL },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ];

  return (
    <>
      {graph.map((node) => (
        <script
          key={node['@type']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
    </>
  );
}
