import ServicePricing, { type PricingPlan } from '@/components/sections/ServicePricing';

const plans: PricingPlan[] = [
  {
    name: 'MVP Starter',
    price: '$2,500',
    timeline: '2–4 Weeks · 1 Sprint cycle',
    bestFor: 'Founders who need a working prototype to validate one core use case and collect real user feedback.',
    features: [
      'Single-use-case web application',
      'Responsive React/Next.js frontend',
      'REST API + PostgreSQL backend',
      'Basic auth (email/password)',
      'Deployed to production (Vercel / AWS)',
      '30-day post-launch support',
    ],
    cta: 'Start Your MVP',
    ctaHref: '/contact',
    dark: false,
    popular: false,
  },
  {
    name: 'MVP Pro',
    price: '$15,000',
    timeline: '6–10 Weeks · 2 Sprint cycles',
    bestFor: 'Early-stage teams who need a multi-feature product with payments, auth, and a real growth loop.',
    features: [
      'Full-feature web + mobile-responsive app',
      'User onboarding & role-based access',
      'Stripe subscription or one-time billing',
      'Admin dashboard + analytics',
      'Up to 3 third-party integrations',
      'CI/CD pipeline + observability',
      '6-month post-launch support',
    ],
    cta: 'Start with Pro',
    ctaHref: '/contact',
    dark: true,
    popular: true,
  },
  {
    name: 'MVP → Production Bridge',
    price: '$30,000',
    timeline: '10–16 Weeks · 3+ Sprint cycles',
    bestFor: 'Your MVP validated. Extend it into the production SaaS you\'ll run for years. Full fee credited toward a Custom SaaS build if you continue.',
    features: [
      'Multi-tenant SaaS or marketplace architecture',
      'AI/LLM feature integration',
      'Mobile app (Flutter cross-platform)',
      'Subscription billing + usage limits',
      'GDPR-ready data handling',
      'Full test suite + SOC 2-ready setup',
      '1-year post-launch support + SRE retainer',
      'Full $30K fee credited toward Custom SaaS build',
    ],
    cta: 'Start the Bridge',
    ctaHref: '/contact',
    dark: false,
    popular: false,
  },
];

export default function Pricing() {
  return (
    <ServicePricing
      plans={plans}
      heading="Pick a Starting Point, No Discovery Tax"
      subhead="Scope is published. Timeline is committed. If we quote outside your package, we'll tell you upfront — not mid-sprint."
      crossLink={{ text: 'Already validated? See our', href: '/custom-saas-development-company', label: 'Custom SaaS Development' }}
    />
  );
}
