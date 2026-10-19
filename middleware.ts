import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';

// Kept as middleware.ts on purpose. Next.js 16 `proxy.ts` always runs on the
// Node.js runtime, which would bill every matched request as Function Duration.
// This file stays on the Edge runtime, and the matcher below is the only set
// of paths that invoke it.
//
// www → apex, text/markdown negotiation, and unknown single-segment WordPress
// URLs are platform redirects/rewrites in next.config.ts. They do not run here.

const STRIP_PARAMS = ['client_id', 'session_id', '_gl', 'cst', 'fbclid', 'gclid', 'msclkid'];

const { auth } = NextAuth(authConfig);

export default auth(function middleware(req) {
  const url = req.nextUrl.clone();
  let canonicalise = false;

  for (const key of STRIP_PARAMS) {
    if (url.searchParams.has(key)) {
      url.searchParams.delete(key);
      canonicalise = true;
    }
  }
  // Legacy contact tab links (?tab=safecart) — the page has no tab state.
  if (url.pathname === '/contact' && url.searchParams.has('tab')) {
    url.searchParams.delete('tab');
    canonicalise = true;
  }
  if (canonicalise) return NextResponse.redirect(url, 301);

  // Protect /my-account/* — redirect to login if no session.
  // The layout also checks the session; this avoids rendering the account shell.
  if ((url.pathname === '/my-account' || url.pathname.startsWith('/my-account/')) && !req.auth?.user) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
});

export const config = {
  matcher: [
    '/my-account',
    '/my-account/:path*',
    // Canonicalise tracking params only when one is actually present.
    {
      source: '/((?!_next/static|_next/image|favicon.ico|api|images|.*\\..*).*)',
      has: [{ type: 'query', key: 'client_id' }],
    },
    {
      source: '/((?!_next/static|_next/image|favicon.ico|api|images|.*\\..*).*)',
      has: [{ type: 'query', key: 'session_id' }],
    },
    {
      source: '/((?!_next/static|_next/image|favicon.ico|api|images|.*\\..*).*)',
      has: [{ type: 'query', key: '_gl' }],
    },
    {
      source: '/((?!_next/static|_next/image|favicon.ico|api|images|.*\\..*).*)',
      has: [{ type: 'query', key: 'cst' }],
    },
    {
      source: '/((?!_next/static|_next/image|favicon.ico|api|images|.*\\..*).*)',
      has: [{ type: 'query', key: 'fbclid' }],
    },
    {
      source: '/((?!_next/static|_next/image|favicon.ico|api|images|.*\\..*).*)',
      has: [{ type: 'query', key: 'gclid' }],
    },
    {
      source: '/((?!_next/static|_next/image|favicon.ico|api|images|.*\\..*).*)',
      has: [{ type: 'query', key: 'msclkid' }],
    },
    {
      source: '/contact',
      has: [{ type: 'query', key: 'tab' }],
    },
  ],
};
