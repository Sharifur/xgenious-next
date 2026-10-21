import CopyCode from './CopyCode';
import type { Campaign, CampaignStatus } from './data';

// Before the sale starts (or after it ends) the coupon must not be offered.
export default function HeroActions({ campaign, status }: { campaign: Campaign; status: CampaignStatus }) {
  if (status === 'live') {
    return (
      <div className="hero-actions">
        <CopyCode variant="hero" coupon={campaign.coupon} />
        <a href="#deals" className="btn btn-lg">Shop the deals <span>→</span></a>
      </div>
    );
  }
  return (
    <p className="hero-notice">
      {status === 'upcoming' ? `The coupon unlocks ${campaign.startLabel}.` : 'This sale has ended. Prices are back to normal.'}
    </p>
  );
}
