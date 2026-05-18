import Link from 'next/link';
import ServicePricing, { type PricingPlan } from '@/components/sections/ServicePricing';

const plans: PricingPlan[] = [
  {
    name: 'SaaS Starter',
    price: '$3k',
    timeline: '3–5 Weeks · 1 Sprint cycle',
    bestFor: 'Single-feature SaaS, early validation builds, bolt-on SaaS modules, or proof-of-concept builds.',
    features: [
      'Single-tenant SaaS, up to 2 user roles',
      'Stripe payments + 1 subscription plan',
      'Basic admin dashboard',
      'AWS or Vercel deployment',
      'GDPR DPA + privacy policy',
      '30-day post-launch support',
    ],
    cta: 'Start with Starter',
    ctaHref: '/contact',
    dark: false,
    popular: false,
  },
  {
    name: 'SaaS Pro',
    price: '$15k',
    timeline: '10–12 Weeks · 2 Sprint cycles',
    bestFor: 'Full multi-tenant SaaS MVPs, subscription platforms, and B2B SaaS products going to market.',
    features: [
      'Multi-tenant SaaS, up to 4 user roles',
      'Stripe + subscription billing (plans, trials, dunning)',
      'Full admin dashboard + tenant management',
      'AWS hosting (first 12 months included)',
      'GDPR DPA + HIPAA-ready architecture',
      '6-month post-launch support',
    ],
    cta: 'Start with Pro',
    ctaHref: '/contact',
    dark: true,
    popular: true,
  },
  {
    name: 'SaaS Scale',
    price: '$35k',
    timeline: '14–20 Weeks · 3+ Sprint cycles',
    bestFor: 'Production-grade SaaS with compliance, AI features, mobile apps, and GCC or enterprise billing.',
    features: [
      'Multi-tenant SaaS, unlimited roles',
      'SSO (SAML / OAuth 2.0) + full audit logs',
      'Advanced billing (metered, usage-based, GCC payment gateways)',
      'AI / LLM integration (RAG, agents, eval harnesses)',
      'Flutter mobile app (iOS + Android)',
      'SOC 2-ready architecture + written security posture',
      'Pen test + compliance sign-off',
      '1-year post-launch support',
    ],
    cta: 'Discuss Your SaaS',
    ctaHref: '/contact',
    dark: false,
    popular: false,
  },
];

export default function Pricing() {
  return (
    <>
      <ServicePricing
        plans={plans}
        subhead="Scope is published. Timeline is committed. If we quote outside your package, we'll tell you upfront — not mid-sprint."
      />
      <div className="text-center pb-10 sm:pb-14 lg:pb-[80px]">
        <p className="text-[#6b7280] text-[14px]">
          Still validating? Start with our{' '}
          <Link href="/saas-mvp-development" className="text-[#3b82f6] underline underline-offset-2 hover:text-white transition-colors">
            SaaS MVP Development →
          </Link>
        </p>
      </div>
    </>
  );
}
