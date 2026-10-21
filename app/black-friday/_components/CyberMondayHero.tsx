import Countdown from './Countdown';
import HeroActions from './HeroActions';
import type { Campaign, CampaignStatus } from './data';
import { pricedProducts } from './pricing';

export default function CyberMondayHero({ campaign, status }: { campaign: Campaign; status: CampaignStatus }) {
  const { coupon, pct } = campaign;
  const products = pricedProducts(campaign);
  return (
    <header className="cm-grid">
      <div className="wrap" style={{ padding: '40px 24px 72px', display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
        <div style={{ flex: '1 1 460px', minWidth: 0 }}>
          <div className="mono" style={{ fontSize: 13, color: 'var(--accent)', letterSpacing: '.04em' }}>{`// ${campaign.dateLabel} · Xgenious ${campaign.name}`}</div>
          <h1 style={{ marginTop: 24, fontWeight: 800, fontSize: 'clamp(56px,9vw,132px)', lineHeight: 0.88, letterSpacing: '-.045em' }}>
            <span style={{ display: 'block' }}>Cyber</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>Monday<span style={{ width: '.42em', height: '.78em', background: 'var(--accent)', display: 'inline-block' }} /></span>
          </h1>
          <p style={{ marginTop: 28, fontSize: 'clamp(28px,3.4vw,44px)', fontWeight: 700, letterSpacing: '-.02em', lineHeight: 1.1 }}><span style={{ color: 'var(--accent)' }}>{pct}% off</span> every Xgenious script.</p>
          <p className="muted" style={{ marginTop: 16, maxWidth: 560, fontSize: 19 }}>One coupon unlocks every product. One-time purchase, full source code, lifetime updates.</p>
          <HeroActions campaign={campaign} status={status} />
        </div>
        <div className="term" style={{ flex: '1 1 400px', minWidth: 0 }}>
          <div className="term-bar"><i /><i /><i /><span style={{ marginLeft: 10 }}>checkout — xgenious.com</span></div>
          <div className="term-body">
            <div><span style={{ color: 'var(--muted)' }}>$</span> apply-coupon <span style={{ color: 'var(--accent)' }}>{coupon}</span></div>
            <div style={{ color: 'var(--muted)' }}>✓ {products.length} products unlocked · {pct}% off applied</div>
            <div className="stack" style={{ marginTop: 10 }}>
              {products.map((p) => (
                <div className="term-row" key={p.slug}>
                  <span>{p.slug}</span>
                  <span><s style={{ color: 'var(--muted)' }}>{p.oldLabel}</s>{'  '}<b style={{ color: 'var(--accent)' }}>{p.newLabel}</b></span>
                </div>
              ))}
            </div>
          </div>
          <div className="term-foot">
            {status === 'ended' ? (
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>This deal has ended</span>
            ) : (
              <>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>Deal ends in</span>
                <span className="mono" style={{ fontSize: 22, fontWeight: 700 }}><Countdown endsAt={campaign.endsAt} variant="term" /></span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="wrap stats" style={{ paddingBottom: 56 }}>
        <span><strong>13,000+</strong> active users</span>
        <span><strong>100+</strong> countries</span>
        <span><strong>2,000+</strong> CodeCanyon sales</span>
      </div>
    </header>
  );
}
