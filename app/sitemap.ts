import type { MetadataRoute } from 'next';

const BASE_URL = 'https://xgenious.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/web-app-development-company`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/mobile-app-development`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/custom-saas-development-company`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/ai-agent-development`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/privacy-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${BASE_URL}/refund-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${BASE_URL}/support-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${BASE_URL}/terms-of-service`, priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return staticPages.map((page) => ({
    url: page.url,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
