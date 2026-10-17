import Image from 'next/image';
import Link from 'next/link';
import type { Campaign } from './data';
import { pricedProducts } from './data';

export default function Deals({ campaign }: { campaign: Campaign }) {
  const { coupon, pct } = campaign;
  return (
    <section id="deals" style={{ background: 'var(--surface)', scrollMarginTop: 96 }}>
      <div className="sec">
        <div className="head">
          <div className="stack" style={{ gap: 12 }}>
            <span className="eyebrow">All products · {pct}% off</span>
            <h2 className="title">Pick your platform.</h2>
          </div>
          <p className="lede">Use code <strong className="mono" style={{ color: 'var(--ink)' }}>{coupon}</strong> at checkout. The discount applies to every license.</p>
        </div>
        <div className="grid-deals">
          {pricedProducts(campaign).map((p) => (
            <article className="card" key={p.slug}>
              <div className="card-img">
                <Image src={p.img} alt={p.name} fill sizes="(max-width:700px) 100vw, 360px" style={{ objectFit: 'cover' }} />
                <span className="tag tag-off">-{pct}%</span>
                {p.badge && <span className="tag tag-badge">{p.badge}</span>}
              </div>
              <div className="card-body">
                <span className="cat">{p.cat}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <span className="muted" style={{ fontSize: 13 }}>{p.proof}</span>
                <div className="price"><b>{p.newLabel}</b><s>{p.oldLabel}</s><em>Save {p.saveLabel}</em></div>
                <Link href={p.url} className="btn btn-card">Get {p.name} for {p.newLabel}</Link>
                <span className="note">Starting price, Regular License · code {coupon}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
