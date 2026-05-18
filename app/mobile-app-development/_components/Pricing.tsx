import ServicePricing, { type PricingPlan } from '@/components/sections/ServicePricing';

const plans: PricingPlan[] = [
  {
    name: 'App Starter',
    price: '$2,000',
    timeline: '2–4 Weeks',
    bestFor: 'Single-screen utilities, companion apps, MVP prototypes, and add-ons to existing platforms.',
    features: [
      'Flutter cross-platform (iOS + Android)',
      'Up to 3 screens, 1 user role',
      'Basic backend or API integration',
      'App Store + Play Store submission',
      '30-day post-launch support',
    ],
    cta: 'Start with Starter',
    ctaHref: '/contact',
    dark: false,
    popular: false,
  },
  {
    name: 'App Pro',
    price: '$10,000',
    timeline: '6–10 Weeks',
    bestFor: 'Marketplace apps, booking platforms, and customer-facing B2B apps.',
    features: [
      'Flutter cross-platform or React Native',
      'Up to 12 screens, up to 3 user roles',
      'Custom backend API + admin dashboard',
      'Push notifications + in-app messaging',
      'Stripe payments integration',
      'App Store + Play Store submission',
      '6-month post-launch support',
    ],
    cta: 'Start with Pro',
    ctaHref: '/contact',
    dark: true,
    popular: true,
  },
  {
    name: 'App Scale',
    price: '$25,000',
    timeline: '12–16 Weeks',
    bestFor: 'Full-featured platforms, native iOS/Android requirements, offline-first or compliance-heavy builds.',
    features: [
      'Flutter, React Native, or native Swift/Kotlin',
      'Unlimited screens, up to 5 user roles',
      'Full backend build + admin panel',
      'Offline-first architecture',
      'Biometric auth + encrypted storage',
      'Stripe or custom payments',
      'GDPR DPA + privacy compliance',
      'App Store + Play Store submission',
      '1-year post-launch support',
    ],
    cta: 'Discuss Your App',
    ctaHref: '/contact',
    dark: false,
    popular: false,
  },
];

export default function Pricing() {
  return <ServicePricing plans={plans} />;
}
