import type { Metadata } from 'next';
import CampaignPage from './_components/CampaignPage';
import Hero from './_components/Hero';
import CyberMondayHero from './_components/CyberMondayHero';
import { blackFridayAt, campaignStatus } from './_components/data';

// Re-render hourly so the page flips Early Black Friday -> Black Friday -> Cyber Monday on schedule.
export const revalidate = 3600;

export function generateMetadata(): Metadata {
  const c = blackFridayAt(new Date());
  const title = `${c.name} Sale 2026 — ${c.pct}% Off Every Xgenious Script`;
  const description = `${c.name} 2026: get ${c.pct}% off every Xgenious Laravel script with code ${c.coupon}. One-time purchase, full source code, lifetime updates. Ends ${c.endLabel.split(' at ')[0]}.`;
  return {
    title,
    description,
    alternates: { canonical: '/black-friday' },
    keywords: ['black friday laravel scripts', 'xgenious black friday', 'laravel script discount', 'saas script sale', c.coupon],
    openGraph: { title, description, url: '/black-friday', type: 'website', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
  };
}

export default function BlackFridayPage() {
  const now = new Date();
  const campaign = blackFridayAt(now);
  const status = campaignStatus(campaign, now);
  return <CampaignPage campaign={campaign} path="/black-friday" status={status} hero={campaign.theme === 'cm' ? <CyberMondayHero campaign={campaign} status={status} /> : <Hero campaign={campaign} status={status} />} />;
}
