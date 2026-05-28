# WordPress + Next.js on the Same Domain

## Goal

Run both apps on `xgenious.com` simultaneously. Next.js owns most pages. WordPress keeps `/blog` and `/my-account`. Migration is incremental — move one route at a time, no big-bang cutover.

---

## Architecture

```
xgenious.com (Cloudflare / Nginx)
│
├── /blog/*              → WordPress (existing server)
├── /my-account/*        → WordPress (existing server)
├── /wp-admin/*          → WordPress (existing server)
├── /wp-json/*           → WordPress (existing server)
├── /wp-content/*        → WordPress (existing server)
│
└── everything else      → Next.js (Coolify / Vercel)
```

A reverse proxy at the edge (Nginx or Cloudflare) decides which app handles each request based on path prefix. Both apps run on different ports/servers, but visitors see one domain.

---

## Option A — Nginx Reverse Proxy (Coolify, self-hosted)

Best if both apps run on the same VPS or within your Coolify stack.

### Setup

WordPress runs on port `8080` (or keep it on Apache as-is).  
Next.js runs on port `3000` (Coolify Docker container).  
Nginx sits in front on port `80/443`.

### `nginx.conf` (simplified)

```nginx
server {
    listen 443 ssl;
    server_name xgenious.com www.xgenious.com;

    # SSL config (Let's Encrypt / Coolify managed)
    ssl_certificate     /etc/letsencrypt/live/xgenious.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/xgenious.com/privkey.pem;

    # ── WordPress routes ──────────────────────────────────
    location ~ ^/(blog|my-account|wp-admin|wp-login\.php|wp-json|wp-content|wp-includes|xmlrpc\.php) {
        proxy_pass         http://wordpress:8080;
        proxy_set_header   Host              $host;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }

    # ── Next.js — everything else ─────────────────────────
    location / {
        proxy_pass         http://nextjs:3000;
        proxy_set_header   Host              $host;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;

        # Next.js websockets (HMR in dev — remove in prod)
        proxy_http_version 1.1;
        proxy_set_header   Upgrade    $http_upgrade;
        proxy_set_header   Connection "upgrade";
    }
}

server {
    listen 80;
    server_name xgenious.com www.xgenious.com;
    return 301 https://$host$request_uri;
}
```

### Coolify-specific notes

- WordPress: deploy as Docker app, expose on internal port `8080`, **not** public
- Next.js: deploy as separate Docker app, expose on internal port `3000`, **not** public
- Nginx: deploy as Docker app or use Coolify's built-in proxy, expose `80/443` publicly
- Both apps share the same Docker network so Nginx can reach them by service name

---

## Option B — Cloudflare Workers (CDN-level routing)

Best if WordPress is on WP Engine / Kinsta / shared hosting and Next.js is on Vercel. No VPS config needed.

### How it works

Cloudflare sits in front of `xgenious.com`. A Worker script intercepts every request and rewrites the destination:

```
xgenious.com/blog/*        → fetch from wordpress.xgenious.com (origin)
xgenious.com/*             → fetch from xgenious-nextjs.vercel.app
```

### Worker script (`workers/router.js`)

```javascript
export default {
  async fetch(request) {
    const url = new URL(request.url);

    const WORDPRESS_ORIGIN = 'https://wordpress.xgenious.com';
    const NEXTJS_ORIGIN    = 'https://xgenious-nextjs.vercel.app';

    const WP_PATHS = [
      '/blog',
      '/my-account',
      '/wp-admin',
      '/wp-login.php',
      '/wp-json',
      '/wp-content',
      '/wp-includes',
      '/xmlrpc.php',
      '/feed',
      '/sitemap_index.xml',  // Yoast sitemap — keep on WP until fully migrated
    ];

    const isWordPress = WP_PATHS.some((p) => url.pathname.startsWith(p));
    const origin = isWordPress ? WORDPRESS_ORIGIN : NEXTJS_ORIGIN;

    const rewritten = new Request(origin + url.pathname + url.search, request);
    rewritten.headers.set('X-Forwarded-Host', url.hostname);

    return fetch(rewritten);
  },
};
```

Deploy via Cloudflare dashboard → Workers → add route `xgenious.com/*`.

### Vercel config (`vercel.json`)

Vercel needs to accept requests with `Host: xgenious-nextjs.vercel.app` but serve as `xgenious.com`. Add the domain in Vercel project settings → Domains, but **do not** point DNS there — keep DNS on Cloudflare pointed to the Worker.

---

## Route Ownership Map

| Path | Owner | Notes |
|---|---|---|
| `/` | Next.js | Home page |
| `/about` | Next.js | |
| `/contact` | Next.js | SES form |
| `/free-tools/*` | Next.js | 48 tools |
| `/free-software/*` | Next.js | Genius apps |
| `/case-studies/*` | Next.js | |
| `/custom-saas-development-company` | Next.js | |
| `/ai-agent-development-services` | Next.js | |
| `/saas-mvp-development` | Next.js | |
| `/web-app-development-company` | Next.js | |
| `/mobile-app-development` | Next.js | |
| `/blog` | WordPress | Keep forever |
| `/blog/*` | WordPress | Keep forever |
| `/my-account/*` | WordPress | WooCommerce / membership |
| `/wp-admin/*` | WordPress | Admin |
| `/wp-json/*` | WordPress | REST API |
| `/wp-content/*` | WordPress | Media, plugins, themes |
| `/privacy-policy` | Next.js | Already migrated |
| `/terms-of-service` | Next.js | Already migrated |

---

## Migration Checklist (page by page)

For each WordPress page you move to Next.js:

- [ ] Build the Next.js page under `app/<slug>/page.tsx`
- [ ] Match the URL exactly — no redirects needed if slug is same
- [ ] Copy meta title, description, OG image from WordPress (Yoast → `metadata` export)
- [ ] Add to `app/sitemap.ts`
- [ ] Add 301 redirect in WordPress (Redirection plugin or `.htaccess`) pointing old WP page to same URL — only needed if WordPress serves that path and Next.js is now handling it
- [ ] After deploying, verify canonical tag is correct
- [ ] Test in Google Search Console → URL Inspection

---

## SEO Rules During Migration

**Keep WordPress sitemap active for `/blog`**  
Yoast generates `sitemap_index.xml` at `/sitemap_index.xml`. Route that to WordPress in Nginx/Worker. Next.js `sitemap.ts` covers non-blog pages.

**No duplicate content**  
Once a page is live in Next.js, 301-redirect or delete it in WordPress. Never serve the same URL from both.

**301 redirects for any slug changes**  
If a slug changes during migration (e.g., `/services/saas` → `/custom-saas-development-company`), add a permanent redirect in `next.config.js`:

```javascript
// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/services/saas',
        destination: '/custom-saas-development-company',
        permanent: true,
      },
    ];
  },
};
```

**Keep canonical tags correct**  
Every Next.js page already has `alternates: { canonical: ... }` in metadata. WordPress pages handled by Yoast — no change needed.

---

## WordPress Config Changes

### 1. Set WordPress site URL to a subdomain

Move WordPress to `wordpress.xgenious.com` (internal, not public-facing). This keeps WP admin and media URLs clean.

In `wp-config.php`:
```php
define('WP_HOME',    'https://xgenious.com');
define('WP_SITEURL', 'https://wordpress.xgenious.com');
```

`WP_HOME` stays as the public domain so blog links print correctly.  
`WP_SITEURL` points to the internal WordPress server.

### 2. Update `.htaccess` (if Apache)

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
```

No changes needed here — WordPress handles its own routes normally. Nginx/Worker filters before requests reach Apache.

### 3. Disable WordPress for non-blog routes

Install **Restricted Site Access** or use a mu-plugin to return 404 for any WordPress page that has been migrated to Next.js. This prevents WordPress from accidentally serving stale content if the proxy misconfigures.

---

## Testing Before DNS Cutover

Test routing without changing DNS using `/etc/hosts`:

```
# /etc/hosts (local machine)
YOUR_NEW_SERVER_IP   xgenious.com
```

Browse `xgenious.com` — Next.js pages should load, `/blog` should hit WordPress. Remove the hosts entry when confirmed working.

---

## Recommended Migration Order

1. Homepage (`/`) — highest traffic, highest SEO impact
2. Service pages — already in Next.js
3. Free tools — already in Next.js
4. Free software pages — already in Next.js
5. Case studies — already in Next.js
6. About, Contact — already in Next.js
7. Legal pages — already in Next.js
8. `/blog` — **never migrate, keep on WordPress**
9. `/my-account` — **never migrate unless rebuilding auth**

---

## Quick Reference — Who Does What

| Concern | WordPress | Next.js |
|---|---|---|
| Blog content | ✓ | — |
| Blog SEO (Yoast) | ✓ | — |
| WooCommerce / membership | ✓ | — |
| Media library | ✓ | — |
| Marketing pages | — | ✓ |
| Free tools | — | ✓ |
| Contact form | — | ✓ (SES) |
| Sitemap (non-blog) | — | ✓ |
| Sitemap (blog) | ✓ | — |
| robots.txt | — | ✓ (app/robots.ts) |
