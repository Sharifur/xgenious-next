import { FAQS, PAGE_URL } from './copy';

export default function JsonLd() {
  const graph = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Urban Company Clone Script: Launch Your Own Home Services Marketplace',
      description: 'Launch an app like Urban Company in your city: fixed-price services, verified pros, commission and both apps. ProHandy script, with Flutter apps in the Everything Bundle.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://xgenious.com' },
        { '@type': 'ListItem', position: 2, name: 'Urban Company Clone Script', item: PAGE_URL },
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
