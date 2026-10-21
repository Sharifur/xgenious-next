import type { Metadata } from 'next';
import CampaignPage from '../black-friday/_components/CampaignPage';
import Hero from '../black-friday/_components/Hero';
import { HALLOWEEN, campaignStatus } from '../black-friday/_components/data';

// Re-render hourly so the page flips upcoming -> live -> ended on schedule.
export const revalidate = 3600;

const TITLE = 'Halloween Sale 2026 — 50% Off Every Xgenious Script';
const DESCRIPTION = 'Halloween 2026: get 50% off every Xgenious Laravel script with code HALLOWEEN50. One-time purchase, full source code, lifetime updates. Ends November 15.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/halloween-sale' },
  keywords: ['halloween sale laravel scripts', 'xgenious halloween sale', 'laravel script discount', 'saas script sale', 'HALLOWEEN50'],
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/halloween-sale', type: 'website', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og-image.png'] },
};

export default function HalloweenSalePage() {
  const status = campaignStatus(HALLOWEEN, new Date());
  return <CampaignPage campaign={HALLOWEEN} path="/halloween-sale" status={status} hero={<Hero campaign={HALLOWEEN} status={status} />} />;
}
