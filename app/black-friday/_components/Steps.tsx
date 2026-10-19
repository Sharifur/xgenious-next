import CopyCode from './CopyCode';

import type { Campaign } from './data';

export default function Steps({ campaign }: { campaign: Campaign }) {
  return (
    <section className="sec">
      <h2 className="title" style={{ fontSize: 'clamp(30px,3.6vw,44px)', letterSpacing: '-.03em' }}>Claim it in three steps.</h2>
      <div className="steps">
        <div className="step"><span className="n">01</span><h3>Copy the code</h3><CopyCode variant="step" coupon={campaign.coupon} /></div>
        <div className="step"><span className="n">02</span><h3>Choose a product</h3><p className="muted">Pick any license: Regular, Everything Bundle or Exclusive.</p></div>
        <div className="step"><span className="n">03</span><h3>Paste at checkout</h3><p className="muted">{campaign.pct}% comes off instantly. Download the full source right after payment.</p></div>
      </div>
    </section>
  );
}
