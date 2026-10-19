import Countdown from './Countdown';
import CopyCode from './CopyCode';
import type { Campaign } from './data';

export default function Hero({ campaign }: { campaign: Campaign }) {
  return (
    <header className="wrap" style={{ padding: '40px 24px 72px' }}>
      <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--muted)', letterSpacing: '.06em', textTransform: 'uppercase' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />{campaign.dateLabel} · Xgenious {campaign.name}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px 48px', marginTop: 28 }}>
        <h1 className="bf-title"><span>{campaign.headline[0]}</span><span>{campaign.headline[1]}</span></h1>
        <div className="bf-pct" aria-hidden="true">
          <b>{campaign.pct}</b>
          <div><span style={{ fontSize: 'clamp(40px,6vw,80px)' }}>%</span><span style={{ fontSize: 'clamp(22px,3vw,36px)', letterSpacing: '.02em' }}>OFF</span></div>
        </div>
      </div>
      <p className="hero-desc">Every Xgenious script at {campaign.pct}% off with one coupon. One-time purchase, full source code, lifetime updates.</p>
      <div className="hero-actions">
        <CopyCode variant="hero" coupon={campaign.coupon} />
        <a href="#deals" className="btn btn-lg">Shop the deals <span>→</span></a>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px 28px', marginTop: 40, paddingTop: 28, borderTop: '1px solid var(--line)' }}>
        <Countdown endsAt={campaign.endsAt} variant="boxes" />
        <div className="stats">
          <span><strong>13,000+</strong> active users</span>
          <span><strong>100+</strong> countries</span>
          <span><strong>2,000+</strong> CodeCanyon sales</span>
        </div>
      </div>
    </header>
  );
}
