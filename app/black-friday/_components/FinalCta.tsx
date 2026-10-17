import Countdown from './Countdown';
import CopyCode from './CopyCode';
import type { Campaign } from './data';

export default function FinalCta({ campaign }: { campaign: Campaign }) {
  return (
    <section className="final">
      <div>
        <div className="stack" style={{ gap: 14 }}>
          <span className="label">{campaign.pct}% off ends in</span>
          <span className="clock"><Countdown endsAt={campaign.endsAt} variant="clock" /></span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <CopyCode variant="final" coupon={campaign.coupon} />
          <a href="#deals" className="btn">Shop the deals →</a>
        </div>
      </div>
    </section>
  );
}
