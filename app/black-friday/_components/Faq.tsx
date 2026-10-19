import type { Campaign } from './data';
import { faqsFor } from './data';

export default function Faq({ campaign }: { campaign: Campaign }) {
  return (
    <section className="faq">
      <h2 className="title" style={{ fontSize: 'clamp(30px,3.6vw,44px)', letterSpacing: '-.03em' }}>Questions</h2>
      <div className="faq-list">
        {faqsFor(campaign).map((f, i) => (
          <details key={f.q} open={i === 0}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
