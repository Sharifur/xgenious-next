import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const VPS = 'http://origin.xgenious.com';

const NEXT_ROUTES = new Set([
  'about',
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
  'refund-policy',
  'register',
  'saas-mvp-development',
  'support-policy',
  'terms-of-service',
  'web-app-development-company',
]);

const { auth } = NextAuth(authConfig);

export default auth(function middleware(req: NextRequest & { auth: any }) {
  const { pathname } = req.nextUrl;
  const segments = pathname.split('/').filter(Boolean);

  // Protect /my-account/* — redirect to login if no session
  if (segments[0] === 'my-account' && !req.auth?.user) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Single-segment paths not matching a Next.js route → WordPress proxy
  if (segments.length === 1 && !NEXT_ROUTES.has(segments[0]) && !segments[0].includes('.')) {
    const target = pathname.endsWith('/') ? pathname : `${pathname}/`;
    return NextResponse.rewrite(`${VPS}${target}${req.nextUrl.search}`);
  }
});

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|api|images).*)'],
};
