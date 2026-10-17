'use client';

import { useState } from 'react';
import { REVIEWS } from './data';

const INITIAL = 9;

export default function Reviews() {
  const [all, setAll] = useState(false);
  const shown = all ? REVIEWS : REVIEWS.slice(0, INITIAL);
  return (
    <section className="sec">
      <div className="head">
        <div className="stack" style={{ gap: 12 }}>
          <span className="eyebrow">{REVIEWS.length} reviews</span>
          <h2 className="title" style={{ fontSize: 'clamp(30px,3.6vw,44px)' }}>What buyers say.</h2>
        </div>
        <span className="muted">From CodeCanyon, Google and client projects</span>
      </div>
      <div className="reviews">
        {shown.map((r) => (
          <figure className="review" key={r.name + r.quote.slice(0, 12)}>
            <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
            <blockquote>“{r.quote}”</blockquote>
            <figcaption>
              <span className="avatar">{r.initials}</span>
              <span className="stack" style={{ gap: 2, minWidth: 0 }}><strong>{r.name}</strong><span>{r.topic} · {r.source}</span></span>
            </figcaption>
          </figure>
        ))}
      </div>
      {!all && REVIEWS.length > INITIAL && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
          <button type="button" className="outline-btn" onClick={() => setAll(true)}>Show all {REVIEWS.length} reviews</button>
        </div>
      )}
    </section>
  );
}
