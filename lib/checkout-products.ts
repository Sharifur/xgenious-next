export interface CheckoutAddon {
  path: string;
  label: string;
  description: string;
  price: number;
  originalPrice: number;
  bestValue?: boolean;
  sidebarUpsell?: boolean;
  disables?: string[];
  includes?: string[];
  excludes?: string[];
}

export interface CheckoutProduct {
  path: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  badge?: string;
  features: string[];
  addons: CheckoutAddon[];
}

const PRODUCTS: Record<string, CheckoutProduct> = {
  'xilancer-bundle-pack': {
    path: 'xilancer-bundle-pack',
    name: 'Xilancer — Everything Bundle',
    tagline: 'Web Platform + 2 Mobile Apps + All Premium Plugins',
    price: 99,
    originalPrice: 282,
    badge: 'Commercial Use',
    features: [
      'Xilancer Web Platform',
      'Admin Panel & Analytics',
      'Escrow Payment System',
      'Real-Time Chat',
      'Freelancer Mobile App (Flutter)',
      'Client Mobile App (Flutter)',
      'Freelancer Level Plugin',
      'Promotional Ads Plugin',
      'Security Plugin',
      'Cloud Storage Plugin',
      'Hourly Hiring Plugin',
      'Community Plugin',
      'Lifetime License + Free Updates',
      '6 Months Support',
    ],
    addons: [
      {
        path: 'xilancer-support-6m',
        label: 'Extend to 12 Months Support',
        description: 'Already have 6 months free — double it to 12. Priority replies within 24h.',
        price: 50,
        originalPrice: 99,
        sidebarUpsell: true,
        includes: [
          'Priority ticket support',
          '6 additional months from purchase date',
          'Bug fixes and compatibility help',
        ],
      },
      {
        path: 'xilancer-install-web',
        label: 'We Install & Launch It For You',
        description: 'Skip the setup headache. We deploy Xilancer on your server, configure everything, and hand you the keys.',
        price: 100,
        originalPrice: 299,
        includes: [
          'API connection & configuration',
          'Branding assets & color customization',
          'Translation / multi-language setup',
          'Google Play Store release',
        ],
        excludes: [
          'Domain, hosting, VPS or server setup',
        ],
      },
      {
        path: 'xilancer-install-web-mobile',
        label: 'Full Done-For-You Launch (Web + Both Apps)',
        description: 'Your complete marketplace, live in days. Web platform + both branded mobile apps — fully configured, nothing left for you to figure out.',
        price: 499,
        originalPrice: 1090,
        bestValue: true,
        disables: ['xilancer-install-web'],
        includes: [
          'API connection & configuration',
          'Branding assets & color customization',
          'Translation / multi-language setup',
          'Google Play Store release',
        ],
        excludes: [
          'Domain, hosting, VPS or server setup',
        ],
      },
      {
        path: 'xilancer-appstore-google',
        label: 'Publish Both Apps to Google Play — We Handle It',
        description: 'Your apps, live on Google Play. We sign, submit, and follow up with Google until both apps are approved.',
        price: 398,
        originalPrice: 800,
        includes: [
          'APK signing & release build',
          'Google Play Console submission for both apps',
          'Store listing setup (title, description, screenshots)',
          'App review follow-up until approved',
        ],
        excludes: [
          'Google Play developer account ($25 one-time fee — you must own it)',
          'App icons or screenshots (you provide)',
        ],
      },
      {
        path: 'xilancer-appstore-apple',
        label: 'Publish Both Apps to the App Store — We Handle It',
        description: 'Your apps, live on the App Store. We handle signing, submission, and App Store review until both are approved.',
        price: 398,
        originalPrice: 800,
        includes: [
          'IPA build & code signing',
          'App Store Connect submission for both apps',
          'Store listing setup (title, description, screenshots)',
          'App review follow-up until approved',
        ],
        excludes: [
          'Apple Developer account ($99/yr — you must own it)',
          'App icons or screenshots (you provide)',
        ],
      },
    ],
  },

  'xilancer-exclusive-pack': {
    path: 'xilancer-exclusive-pack',
    name: 'Xilancer — Exclusive License',
    tagline: 'Full source code ownership. Modify anything. No restrictions.',
    price: 299,
    originalPrice: 500,
    badge: 'For Businesses',
    features: [
      'Everything in Everything Bundle',
      'Full Source Code Modification Rights',
      'Remove / Replace Any Branding',
      'No License Key Enforcement',
      'Priority Support — 12 Months',
      'Commercial Use — Unlimited Projects',
      'Lifetime License + Free Updates',
      'Cannot be resold or redistributed as-is',
    ],
    addons: [
      {
        path: 'xilancer-support-6m',
        label: 'Extend to 12 Months Support',
        description: 'Already have 6 months free — double it to 12. Priority replies within 24h.',
        price: 50,
        originalPrice: 99,
        sidebarUpsell: true,
        includes: [
          'Priority ticket support',
          '6 additional months from purchase date',
          'Bug fixes and compatibility help',
        ],
      },
      {
        path: 'xilancer-install-web',
        label: 'We Install & Launch It For You',
        description: 'Skip the setup headache. We deploy Xilancer on your server, configure everything, and hand you the keys.',
        price: 100,
        originalPrice: 299,
        includes: [
          'API connection & configuration',
          'Branding assets & color customization',
          'Translation / multi-language setup',
          'Google Play Store release',
        ],
        excludes: [
          'Domain, hosting, VPS or server setup',
        ],
      },
      {
        path: 'xilancer-install-web-mobile',
        label: 'Full Done-For-You Launch (Web + Both Apps)',
        description: 'Your complete marketplace, live in days. Web platform + both branded mobile apps — fully configured, nothing left for you to figure out.',
        price: 499,
        originalPrice: 1090,
        bestValue: true,
        disables: ['xilancer-install-web'],
        includes: [
          'API connection & configuration',
          'Branding assets & color customization',
          'Translation / multi-language setup',
          'Google Play Store release',
        ],
        excludes: [
          'Domain, hosting, VPS or server setup',
        ],
      },
    ],
  },
  'nazmart-bundle-pack': {
    path: 'nazmart-bundle-pack',
    name: 'Nazmart — Everything Bundle',
    tagline: 'Web Platform + All 17 Premium Plugins + Mobile App',
    price: 99,
    originalPrice: 199,
    badge: 'Web + Plugins + Mobile App',
    features: [
      'Nazmart Web Platform',
      'AI Integration Plugin',
      'Abandoned Cart Recovery',
      'Cart Discount Plugin',
      'FOMO Notification',
      'GDPR Data Export',
      'Multi Currency',
      'Point of Sales Plugin',
      'Product Badge',
      'Site Analytics',
      'Shipping Plugin',
      'Affiliate Program',
      'Google Merchant Feed Sync',
      'Loyalty Points',
      'SMS Gateway',
      'WooCommerce Import',
      'Cloud Storage Plugin',
      'Mobile App (Flutter)',
      'Lifetime License + Free Updates',
      '6 Months Support',
    ],
    addons: [
      {
        path: 'nazmart-support-6m',
        label: 'Extend to 12 Months Support',
        description: 'Already have 6 months free — double it to 12. Priority replies within 24h.',
        price: 49,
        originalPrice: 99,
        sidebarUpsell: true,
        includes: [
          'Priority ticket support',
          '6 additional months from purchase date',
          'Bug fixes and compatibility help',
        ],
      },
      {
        path: 'nazmart-install-web',
        label: 'We Install & Launch It For You',
        description: 'Skip the setup headache. We deploy Nazmart on your server, configure everything, and hand you the keys.',
        price: 149,
        originalPrice: 299,
        includes: [
          'Server setup & configuration',
          'Branding assets & color customization',
          'Payment gateway configuration',
          'Translation / multi-language setup',
        ],
        excludes: [
          'Domain, hosting, VPS or server setup',
        ],
      },
      {
        path: 'nazmart-install-web-and-mobile',
        label: 'Full Done-For-You Launch (Web + Mobile)',
        description: 'Your complete marketplace, live in days. Web platform + mobile app — fully configured, nothing left for you to figure out.',
        price: 449,
        originalPrice: 900,
        bestValue: true,
        disables: ['nazmart-install-web'],
        includes: [
          'Server setup & configuration',
          'Branding assets & color customization',
          'Payment gateway configuration',
          'Translation / multi-language setup',
          'Mobile app build & configuration',
        ],
        excludes: [
          'Domain, hosting, VPS or server setup',
        ],
      },
    ],
  },

  'fundorex-regular': {
    path: 'fundorex-regular',
    name: 'Fundorex — Regular License',
    tagline: 'Self-hosted crowdfunding platform. Web platform only.',
    price: 69,
    originalPrice: 99,
    features: [
      'Fundorex Web Platform',
      'Admin Panel & Analytics',
      'All Platform Features',
      '20+ Payment Gateways',
      'Event Ticketing Module',
      'Donor Wallet System',
      'Volunteer Management',
      'Community Campaigns',
      'Lifetime License + Free Updates',
      '6 Months Support',
    ],
    addons: [
      {
        path: 'fundorex-support-6m',
        label: 'Extend to 12 Months Support',
        description: 'Already have 6 months free — double it to 12. Priority replies within 24h.',
        price: 49,
        originalPrice: 99,
        sidebarUpsell: true,
        includes: [
          'Priority ticket support',
          '6 additional months from purchase date',
          'Bug fixes and compatibility help',
        ],
      },
      {
        path: 'fundorex-install-web',
        label: 'We Install & Launch It For You',
        description: 'Skip the setup headache. We deploy Fundorex on your server, configure everything, and hand you the keys.',
        price: 99,
        originalPrice: 299,
        includes: [
          'Server setup & configuration',
          'Payment gateway configuration',
          'Branding assets & color customization',
          'Translation / multi-language setup',
        ],
        excludes: [
          'Domain, hosting, VPS or server setup',
        ],
      },
    ],
  },

  'fundorex-bundle-pack': {
    path: 'fundorex-bundle-pack',
    name: 'Fundorex — Everything Bundle',
    tagline: 'Web Platform + Flutter Mobile App — all in one.',
    price: 79,
    originalPrice: 118,
    badge: 'Mobile App Included',
    features: [
      'Fundorex Web Platform',
      'Admin Panel & Analytics',
      'All Platform Features',
      '20+ Payment Gateways',
      'Event Ticketing Module',
      'Donor Wallet System',
      'Volunteer Management',
      'Community Campaigns',
      'Flutter Mobile App (Android + iOS)',
      'Lifetime License + Free Updates',
      '6 Months Support',
    ],
    addons: [
      {
        path: 'fundorex-support-6m',
        label: 'Extend to 12 Months Support',
        description: 'Already have 6 months free — double it to 12. Priority replies within 24h.',
        price: 49,
        originalPrice: 99,
        sidebarUpsell: true,
        includes: [
          'Priority ticket support',
          '6 additional months from purchase date',
          'Bug fixes and compatibility help',
        ],
      },
      {
        path: 'fundorex-install-web',
        label: 'We Install & Launch It For You',
        description: 'Skip the setup headache. We deploy Fundorex on your server, configure everything, and hand you the keys.',
        price: 99,
        originalPrice: 299,
        includes: [
          'Server setup & configuration',
          'Payment gateway configuration',
          'Branding assets & color customization',
          'Translation / multi-language setup',
        ],
        excludes: [
          'Domain, hosting, VPS or server setup',
        ],
      },
      {
        path: 'fundorex-install-web-mobile',
        label: 'Full Done-For-You Launch (Web + Mobile App)',
        description: 'Your complete crowdfunding platform, live in days. Web + branded mobile app — fully configured, nothing left for you to figure out.',
        price: 399,
        originalPrice: 900,
        bestValue: true,
        disables: ['fundorex-install-web'],
        includes: [
          'Server setup & configuration',
          'Payment gateway configuration',
          'Branding assets & color customization',
          'Translation / multi-language setup',
          'Mobile app build & configuration',
        ],
        excludes: [
          'Domain, hosting, VPS or server setup',
        ],
      },
      {
        path: 'fundorex-appstore-google',
        label: 'Publish Mobile App to Google Play — We Handle It',
        description: 'Your app, live on Google Play. We sign, submit, and follow up with Google until approved.',
        price: 199,
        originalPrice: 399,
        includes: [
          'APK signing & release build',
          'Google Play Console submission',
          'Store listing setup (title, description, screenshots)',
          'App review follow-up until approved',
        ],
        excludes: [
          'Google Play developer account ($25 one-time fee — you must own it)',
          'App icons or screenshots (you provide)',
        ],
      },
      {
        path: 'fundorex-appstore-apple',
        label: 'Publish Mobile App to App Store — We Handle It',
        description: 'Your app, live on the App Store. We handle signing, submission, and App Store review until approved.',
        price: 199,
        originalPrice: 399,
        includes: [
          'IPA build & code signing',
          'App Store Connect submission',
          'Store listing setup (title, description, screenshots)',
          'App review follow-up until approved',
        ],
        excludes: [
          'Apple Developer account ($99/yr — you must own it)',
          'App icons or screenshots (you provide)',
        ],
      },
    ],
  },

  'fundorex-exclusive-pack': {
    path: 'fundorex-exclusive-pack',
    name: 'Fundorex — Extended License',
    tagline: 'Full source code ownership. Modify anything. No restrictions.',
    price: 199,
    originalPrice: 299,
    badge: 'For Businesses',
    features: [
      'Everything in Everything Bundle',
      'Flutter Mobile App (Android + iOS)',
      'Full Source Code Modification Rights',
      'Remove / Replace Any Branding',
      'Commercial Use — Unlimited Projects',
      'Priority Support — 12 Months',
      'Lifetime License + Free Updates',
      'Cannot be resold or redistributed as-is',
    ],
    addons: [
      {
        path: 'fundorex-install-web',
        label: 'We Install & Launch It For You',
        description: 'Skip the setup headache. We deploy Fundorex on your server, configure everything, and hand you the keys.',
        price: 99,
        originalPrice: 299,
        includes: [
          'Server setup & configuration',
          'Payment gateway configuration',
          'Branding assets & color customization',
          'Translation / multi-language setup',
        ],
        excludes: [
          'Domain, hosting, VPS or server setup',
        ],
      },
      {
        path: 'fundorex-install-web-mobile',
        label: 'Full Done-For-You Launch (Web + Mobile App)',
        description: 'Your complete crowdfunding platform, live in days. Web + branded mobile app — fully configured, nothing left for you to figure out.',
        price: 399,
        originalPrice: 900,
        bestValue: true,
        disables: ['fundorex-install-web'],
        includes: [
          'Server setup & configuration',
          'Payment gateway configuration',
          'Branding assets & color customization',
          'Translation / multi-language setup',
          'Mobile app build & configuration',
        ],
        excludes: [
          'Domain, hosting, VPS or server setup',
        ],
      },
    ],
  },

  'nazmart-complete-package': {
    path: 'nazmart-complete-package',
    name: 'Nazmart — Exclusive License',
    tagline: 'Web Platform + All Plugins + Mobile App + Domain Reseller',
    price: 299,
    originalPrice: 499,
    badge: 'Web + App + Plugins + Domain Reseller',
    features: [
      'Everything in Everything Bundle',
      'Domain Reseller Module',
      'Priority Support Included',
      'Lifetime License + Free Updates',
    ],
    addons: [
      {
        path: 'nazmart-support-6m',
        label: 'Extend to 12 Months Support',
        description: 'Already have 6 months free — double it to 12. Priority replies within 24h.',
        price: 49,
        originalPrice: 99,
        sidebarUpsell: true,
        includes: [
          'Priority ticket support',
          '6 additional months from purchase date',
          'Bug fixes and compatibility help',
        ],
      },
      {
        path: 'nazmart-install-web',
        label: 'We Install & Launch It For You',
        description: 'Skip the setup headache. We deploy Nazmart on your server, configure everything, and hand you the keys.',
        price: 149,
        originalPrice: 299,
        includes: [
          'Server setup & configuration',
          'Branding assets & color customization',
          'Payment gateway configuration',
          'Translation / multi-language setup',
        ],
        excludes: [
          'Domain, hosting, VPS or server setup',
        ],
      },
      {
        path: 'nazmart-install-web-and-mobile',
        label: 'Full Done-For-You Launch (Web + Mobile)',
        description: 'Your complete marketplace, live in days. Web platform + mobile app — fully configured, nothing left for you to figure out.',
        price: 449,
        originalPrice: 900,
        bestValue: true,
        disables: ['nazmart-install-web'],
        includes: [
          'Server setup & configuration',
          'Branding assets & color customization',
          'Payment gateway configuration',
          'Translation / multi-language setup',
          'Mobile app build & configuration',
        ],
        excludes: [
          'Domain, hosting, VPS or server setup',
        ],
      },
    ],
  },
};

export function getCheckoutProduct(path: string | undefined | null): CheckoutProduct | null {
  if (!path) return null;
  return PRODUCTS[path] ?? null;
}
