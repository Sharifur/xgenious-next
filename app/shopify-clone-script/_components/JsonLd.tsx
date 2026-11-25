import { CANONICAL, COMPLETE_PRICE, REGULAR_PRICE } from '@/app/products/nazmart-multi-tenancy-ecommerce-platform/_components/constants';
import { LAST_UPDATED, PAGE_URL } from './copy';

const SOFTWARE_ID = `${CANONICAL}#software`;

export default function JsonLd() {
  const graph = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Shopify Clone Script: Launch Your Own Shopify-Style Store Platform',
      about: { '@id': SOFTWARE_ID },
      dateModified: LAST_UPDATED,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://xgenious.com' },
        { '@type': 'ListItem', position: 2, name: 'Shopify Clone Script', item: PAGE_URL },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      '@id': SOFTWARE_ID,
      name: 'Nazmart',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Linux server (PHP 8.3, MySQL)',
      url: CANONICAL,
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: String(REGULAR_PRICE),
        highPrice: String(COMPLETE_PRICE),
        offerCount: '3',
      },
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
