import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
        '/api/',
        '/_next/',
        '/our-products/nazmart-multi-tenancy-ecommerce-platform-saas',
        '/our-products/nazmart-multi-tenancy-ecommerce-platform-saas/',
        '/our-products/xilancer-freelancer-marketplace-platform',
        '/our-products/xilancer-freelancer-marketplace-platform/',
      ],
      },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
    ],
    sitemap: 'https://xgenious.com/sitemap.xml',
    host: 'https://xgenious.com',
  };
}
