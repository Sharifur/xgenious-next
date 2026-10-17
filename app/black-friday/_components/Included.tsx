const ITEMS = [
  ['One-time purchase', 'No monthly fees and no revenue share.'],
  ['Full source code', 'Self-host it and customise anything.'],
  ['Lifetime updates', 'Every license keeps getting new releases.'],
  ['6 months support', 'Help from the team that built the product.'],
];

export default function Included() {
  return (
    <section className="included">
      <div>
        {ITEMS.map(([t, d]) => (
          <div key={t}><h3>{t}</h3><p className="muted">{d}</p></div>
        ))}
      </div>
    </section>
  );
}
