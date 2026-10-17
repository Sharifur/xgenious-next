import Link from 'next/link';
import { BUNDLES, PRODUCTS } from './data';

const n = PRODUCTS.length;

export default function Bundles() {
  return (
    <section id="bundles" className="sec" style={{ paddingBottom: 0, scrollMarginTop: 96 }}>
      <div className="head">
        <div className="stack" style={{ gap: 12 }}>
          <span className="eyebrow">All-access bundle offers</span>
          <h2 className="title">Every Xgenious product. One price.</h2>
        </div>
        <p className="lede">Get all {n} platforms in one purchase. Fixed price, no coupon needed.</p>
      </div>
      <div className="pills">{PRODUCTS.map((p) => <span key={p.slug}>{p.name}</span>)}</div>
      <div className="bundles">
        <article className="bundle primary">
          <div className="kicker"><span>All products · Everything Bundle</span><span className="pill">Best value</span></div>
          <div className="stack" style={{ gap: 6 }}>
            <h3>Everything Bundle</h3>
            <p>The Everything Bundle edition of all {n} products, for launching and running your own platforms.</p>
          </div>
          <div className="amt"><b>{BUNDLES.everything.price}</b><span>one-time</span></div>
          <ul>
            <li>All {n} web platforms</li>
            <li>Flutter mobile apps where available</li>
            <li>Premium plugins for every product</li>
            <li>Commercial use</li>
            <li>Lifetime updates · 6 months support</li>
          </ul>
          <Link href={BUNDLES.everything.url} className="btn">Get the Everything Bundle for {BUNDLES.everything.price}</Link>
        </article>
        <article className="bundle">
          <div className="kicker"><span>All products · Exclusive License</span><span className="pill">For organisations</span></div>
          <div className="stack" style={{ gap: 6 }}>
            <h3>Exclusive License</h3>
            <p className="muted" style={{ fontSize: 16 }}>Everything in the bundle, with full rights to modify and rebrand every product.</p>
          </div>
          <div className="amt"><b>{BUNDLES.exclusive.price}</b><span className="muted">one-time</span></div>
          <ul>
            <li>Everything in the Everything Bundle</li>
            <li>Full source code modification rights</li>
            <li>Remove or replace all branding</li>
            <li>No license key enforcement</li>
            <li>Unlimited internal projects · priority support</li>
          </ul>
          <Link href={BUNDLES.exclusive.url} className="btn">Get the Exclusive License for {BUNDLES.exclusive.price}</Link>
          <span className="note" style={{ marginTop: -10 }}>Cannot be resold or redistributed as-is</span>
        </article>
      </div>
    </section>
  );
}
