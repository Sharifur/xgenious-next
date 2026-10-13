const BASE = 'https://xgenious.com';
export const ORG_ID = `${BASE}/#organization`;

export const ORG = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Xgenious',
  url: BASE,
  logo: `${BASE}/xgenious-logo-footer.png`,
  foundingDate: '2017',
  sameAs: [
    'https://www.facebook.com/xgenious',
    'https://www.linkedin.com/company/xgenious',
    'https://twitter.com/xgenious1',
    'https://www.instagram.com/xgenious_official/',
  ],
};

export const crumbs = (items: [string, string][]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: `${BASE}${path}`,
  })),
});

export const webPage = (name: string, path: string) => ({
  '@type': 'WebPage',
  '@id': `${BASE}${path}#webpage`,
  name,
  url: `${BASE}${path}`,
  isPartOf: { '@type': 'WebSite', url: BASE },
  publisher: { '@id': ORG_ID },
});

export function JsonLd({ graph }: { graph: object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c'),
      }}
    />
  );
}
