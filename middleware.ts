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
  'case-studies',
  'contact',
  'custom-saas-development-company',
  'free-software',
  'free-tools',
  'mobile-app-development',
  'privacy-policy',
  'refund-policy',
  'saas-mvp-development',
  'support-policy',
  'terms-of-service',
  'web-app-development-company',
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split('/').filter(Boolean);

  // Single-segment paths not matching a Next.js route → WordPress blog post
  // Skip static files (anything with a file extension)
  if (segments.length === 1 && !NEXT_ROUTES.has(segments[0]) && !segments[0].includes('.')) {
    const target = pathname.endsWith('/') ? pathname : `${pathname}/`;
    return NextResponse.rewrite(`${VPS}${target}`);
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|api|images).*)'],
};
