import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // The `*` group applies to search crawlers (Googlebot, Bingbot). The AI crawlers below
      // each get their own group, and robots.txt precedence means a crawler obeys only its
      // most specific matching group, so nothing here reaches GPTBot, ClaudeBot and friends.
      // That is deliberate: the .md twins exist for them.
      {
        userAgent: '*',
        // pricing.md and llms.txt are hand-maintained AEO assets in public/, not generated
        // page twins. A longer matching rule wins, so these beat the /*.md$ disallow.
        allow: ['/', '/pricing.md', '/llms.txt'],
        disallow: [
          '/api/',
          '/_next/',
          // Markdown twins of the 172 WordPress posts, e.g. /saas-ecommerce-platform.md.
          // They already answer with `X-Robots-Tag: noindex, follow` and a canonical header
          // pointing at the HTML version, so they were never going to be indexed. Google
          // still spends crawl on one per post and files each under "Crawled - currently
          // not indexed", which buries real problems in that report.
          '/*.md$',
        ],
      },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
    ],
    // post-sitemap.xml is Rank Math's (WordPress) sitemap, proxied via vercel.json.
    sitemap: ['https://xgenious.com/sitemap.xml', 'https://xgenious.com/post-sitemap.xml'],
    host: 'https://xgenious.com',
  };
}
