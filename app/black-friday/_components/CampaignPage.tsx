import './bfcm.css';
import type { ReactNode } from 'react';
import { JsonLd, ORG, crumbs, webPage } from '@/components/JsonLd';
import type { Campaign, CampaignStatus } from './data';
import { faqsFor } from './data';
import Deals from './Deals';
import Bundles from './Bundles';
import Steps from './Steps';
import Included from './Included';
import Reviews from './Reviews';
import Faq from './Faq';
import FinalCta from './FinalCta';

export default function CampaignPage({ campaign, path, hero, status }: { campaign: Campaign; path: string; hero: ReactNode; status: CampaignStatus }) {
  const faqLd = {
    '@type': 'FAQPage',
    mainEntity: faqsFor(campaign).map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  // Bundles and deals always show; coupon steps and final CTA only while the coupon is valid.
  const live = status === 'live';
  return (
    <>
      <JsonLd graph={[webPage(`${campaign.name} Sale — ${campaign.pct}% Off Every Xgenious Script`, path), ORG, faqLd, crumbs([['Home', '/'], [`${campaign.name} Sale`, path]])]} />
      {/* The root layout already provides <main>; a second one breaks landmarks. */}
      <div className="bfcm" data-theme={campaign.theme}>
        {hero}
        <Bundles />
        <Deals campaign={campaign} />
        {live && <Steps campaign={campaign} />}
        <Included />
        <Reviews />
        <Faq campaign={campaign} />
        {live && <FinalCta campaign={campaign} />}
      </div>
    </>
  );
}
