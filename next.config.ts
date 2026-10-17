import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const WP_ORIGIN = 'http://origin.xgenious.com';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.102'],
  experimental: {
    // Tree-shake these packages to only the specific exports that are imported
    optimizePackageImports: ['@tabler/icons-react', 'framer-motion'],
  },
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
  async redirects() {
    return [
      {
        // Platform redirect — does not invoke middleware or a function.
        source: '/:path*',
        has: [{ type: 'host', value: 'www.xgenious.com' }],
        destination: 'https://xgenious.com/:path*',
        permanent: true,
      },
      {
        // Keyword-optimised URL replaced the original brand slug.
        source: '/free-software/genius-books',
        destination: '/free-software/free-accounting-software',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          // AI agents requesting text/markdown get llms.txt. Browsers send
          // text/html and do not match. Paths with a dot, /api, and /_next
          // are excluded, matching the previous middleware check.
          source: '/((?!api|_next|.*\\.).*)',
          has: [{ type: 'header', key: 'accept', value: '.*text/markdown.*' }],
          destination: '/llms.txt',
        },
      ],
      fallback: [
        {
          // Unknown single-segment slugs are WordPress posts. Checked after
          // App Router pages, so a new page.tsx wins without a route allowlist.
          // Dots are static files and must not be proxied; ".md" is below.
          source: '/:slug((?![^/]*\\.).+)',
          destination: `${WP_ORIGIN}/:slug/`,
        },
        {
          source: '/:slug.md',
          destination: `${WP_ORIGIN}/:slug.md`,
        },
      ],
    };
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

export default withSentryConfig(nextConfig, {
  release: { create: false },
  // No tunnelRoute. The DSN host is debug-ingest.taskip.net, and the SDK only
  // tunnels Sentry SaaS DSNs (o<id>.ingest.sentry.io), so "/monitoring" never
  // received events. Dropping it removes a rewrite that would otherwise proxy
  // crafted /monitoring?o=&p= requests at sentry.io.
  silent: true,
  // debugId markers are injected into build output automatically (no config
  // flag needed in this SDK version) — scripts/upload-sourcemaps.mjs reads
  // them to match source maps to events since we have no SENTRY_AUTH_TOKEN.
  sourcemaps: { disable: false, deleteSourcemapsAfterUpload: false },
  widenClientFileUpload: true,
});
