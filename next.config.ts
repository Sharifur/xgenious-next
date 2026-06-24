import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.102'],
  images: {
    // AVIF first (≈30% smaller than WebP) → fewer LCP bytes for hero images on mobile
    formats: ['image/avif', 'image/webp'],
    // Cache optimized images for 31 days (Next default is 60s) — avoids re-optimizing
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xgenious.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://preview.codecanyon.net",
          },
          {
            key: 'Link',
            value: '</.well-known/api-catalog>; rel="api-catalog", </llms.txt>; rel="describedby"; type="text/markdown"',
          },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
        ],
      },
      {
        source: '/.well-known/api-catalog',
        headers: [
          { key: 'Content-Type', value: 'application/json; charset=utf-8' },
        ],
      },
      {
        source: '/.well-known/oauth-authorization-server',
        headers: [
          { key: 'Content-Type', value: 'application/json; charset=utf-8' },
        ],
      },
      {
        source: '/.well-known/oauth-protected-resource',
        headers: [
          { key: 'Content-Type', value: 'application/json; charset=utf-8' },
        ],
      },
    ];
  },
};

export default nextConfig;
