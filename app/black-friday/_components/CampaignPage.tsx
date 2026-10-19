import './bfcm.css';
import type { ReactNode } from 'react';
import { JsonLd, ORG, crumbs, webPage } from '@/components/JsonLd';
import type { Campaign } from './data';
import { faqsFor } from './data';
import Deals from './Deals';
import Bundles from './Bundles';
import Steps from './Steps';
import Included from './Included';
import Reviews from './Reviews';
import Faq from './Faq';
import FinalCta from './FinalCta';

export default function CampaignPage({ campaign, path, hero }: { campaign: Campaign; path: string; hero: ReactNode }) {
  const faqLd = {
    '@type': 'FAQPage',
    mainEntity: faqsFor(campaign).map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <>
      <JsonLd graph={[webPage(`${campaign.name} Sale — ${campaign.pct}% Off Every Xgenious Script`, path), ORG, faqLd, crumbs([['Home', '/'], [`${campaign.name} Sale`, path]])]} />
      <main className="bfcm" data-theme={campaign.theme}>
        {hero}
        <Deals campaign={campaign} />
        <Bundles />
        <Steps campaign={campaign} />
        <Included />
        <Reviews />
        <Faq campaign={campaign} />
        <FinalCta campaign={campaign} />
      </main>
    </>
  );
}
