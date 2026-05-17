import ServicePricing, { type PricingPlan } from '@/components/sections/ServicePricing';

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$2,500',
    timeline: '2–4 Weeks',
    bestFor: 'Small internal tools, simple dashboards, single-workflow web apps, or existing project add-ons.',
    features: [
      'Single-page or single-workflow web app',
      'Up to 2 user roles',
      'Basic admin panel',
      'AWS or Vercel deployment',
      'GDPR DPA included',
      '30-day post-launch support',
    ],
    cta: 'Start with Starter',
    ctaHref: '/contact',
    dark: false,
    popular: false,
  },
  {
    name: 'Growth',
    price: '$8,000',
    timeline: '6–8 Weeks',
    bestFor: 'B2B portals, internal tools, client dashboards, and multi-role platforms with integrations.',
    features: [
      'Multi-role web app, up to 4 user roles',
      'Custom data model + admin dashboard',
      'Up to 2 third-party API integrations',
      'Stripe payments or invoicing',
      'AWS hosting (first 12 months included)',
      'GDPR DPA + privacy policy',
      '6-month post-launch support',
    ],
    cta: 'Start with Growth',
    ctaHref: '/contact',
    dark: true,
    popular: true,
  },
  {
    name: 'Scale',
    price: '$20,000',
    timeline: '10–16 Weeks',
    bestFor: 'Enterprise platforms, legacy modernisations, compliance-heavy builds, and multi-tenant systems.',
    features: [
      'Complex multi-role platform, unlimited roles',
      'Full workflow engine + approval pipelines',
      'Up to 5 third-party integrations',
      'SSO (SAML / OAuth 2.0) + audit logs',
      'GDPR, HIPAA-ready architecture + DPA',
      'AWS hosting + CI/CD pipeline',
      '1-year post-launch support',
    ],
    cta: 'Discuss Your Build',
    ctaHref: '/contact',
    dark: false,
    popular: false,
  },
];

export default function Pricing() {
  return (
    <ServicePricing
      plans={plans}
      subhead="Scope is published. Timeline is committed. If we quote outside your package, we'll tell you upfront — not mid-sprint."
    />
  );
}
