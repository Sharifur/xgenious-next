import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const VPS = 'http://origin.xgenious.com';

const NEXT_ROUTES = new Set([
  'about',
  'checkout',
  'auth-error',
  'ai-agent-development-services',
  'ai-agents-for-ecommerce',
  'ai-agents-for-education',
  'ai-agents-for-finance',
  'ai-agents-for-healthcare',
  'ai-agents-for-hr-recruiting',
  'ai-agents-for-logistics',
  'ai-agents-for-real-estate',
  'ai-agents-for-saas',
  'book-a-call',
  'case-studies',
  'contact',
  'custom-saas-development-company',
  'free-software',
  'free-tools',
  'forgot-password',
  'login',
  'mobile-app-development',
  'my-account',
  'reset-password',
  'verify-email',
  'privacy-policy',
  'products',
  'refund-policy',
  'register',
  'saas-mvp-development',
  'support-policy',
  'terms-of-service',
  'web-app-development-company',
]);

// Session/click-specific params (GA cross-domain linker, ad click IDs, WP cache
// buster) that never change page content. Left in place they create thousands
// of duplicate URLs Google reports as "Alternate page with proper canonical".
// UTMs are deliberately kept so GA still attributes campaigns.
const STRIP_PARAMS = ['client_id', 'session_id', '_gl', 'cst', 'fbclid', 'gclid', 'msclkid'];

const { auth } = NextAuth(authConfig);

export default auth(function middleware(req: NextRequest & { auth: any }) {
  const { pathname } = req.nextUrl;
  const segments = pathname.split('/').filter(Boolean);

  // Canonicalise host + tracking params in a single 301 hop.
  const url = req.nextUrl.clone();
  let canonicalise = false;
  if (url.hostname === 'www.xgenious.com') {
    url.hostname = 'xgenious.com';
    url.port = '';
    canonicalise = true;
  }
  for (const key of STRIP_PARAMS) {
    if (url.searchParams.has(key)) {
      url.searchParams.delete(key);
      canonicalise = true;
    }
  }
  // Legacy contact tab links (?tab=safecart) — the page has no tab state.
  if (pathname === '/contact' && url.searchParams.has('tab')) {
    url.searchParams.delete('tab');
    canonicalise = true;
  }
  if (canonicalise) return NextResponse.redirect(url, 301);

  // Markdown content negotiation — AI agents requesting text/markdown get llms.txt
  const accept = req.headers.get('accept') ?? '';
  if (
    accept.includes('text/markdown') &&
    !pathname.startsWith('/api') &&
    !pathname.startsWith('/_next') &&
    !pathname.includes('.')
  ) {
    return NextResponse.rewrite(new URL('/llms.txt', req.url));
  }

  // Protect /my-account/* — redirect to login if no session
  if (segments[0] === 'my-account' && !req.auth?.user) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Single-segment paths not matching a Next.js route → WordPress proxy.
  // ".md" is an intentional exception to the dot-exclusion below: WordPress
  // serves a Markdown alternate view at <slug>.md (inc/markdown-endpoint.php
  // in xgenious-next-wp-theme), which needs no trailing slash appended or
  // its own suffix check there fails. Every other dot is presumed a static
  // file extension and must NOT be proxied.
  if (segments.length === 1 && !NEXT_ROUTES.has(segments[0])) {
    const isMarkdownView = segments[0].endsWith('.md');
    if (isMarkdownView || !segments[0].includes('.')) {
      const target = isMarkdownView
        ? pathname
        : (pathname.endsWith('/') ? pathname : `${pathname}/`);
      return NextResponse.rewrite(`${VPS}${target}${req.nextUrl.search}`);
    }
  }
});

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|api|images).+)'],
};
