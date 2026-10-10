import type { Metadata } from 'next';

const BASE_URL = 'https://xgenious.com';

// contact/page.tsx is a client component and can't export metadata, so it lives here.
export const metadata: Metadata = {
  title: 'Contact Xgenious: Support, Sales & Custom Development',
  description:
    'Need product support, a license question or a custom SaaS quote? Reach the Xgenious team. We typically reply within 1 business day.',
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: 'Contact Xgenious: Support, Sales & Custom Development',
    description:
      'Need product support, a license question or a custom SaaS quote? Reach the Xgenious team.',
    url: `${BASE_URL}/contact`,
    siteName: 'Xgenious',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
