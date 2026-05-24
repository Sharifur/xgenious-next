'use client';
import { useState } from 'react';

const COLOR = '#f26b4e';

const PREFIXES = ['Nova', 'Peak', 'Arc', 'Apex', 'Zen', 'Craft', 'Swift', 'Bright', 'Clear', 'True', 'Bold', 'Core', 'Edge', 'Rise', 'Sync', 'Flow', 'Nest', 'Spark', 'Pulse', 'Vibe'];
const SUFFIXES = ['ly', 'ify', 'hub', 'io', 'HQ', 'Pro', 'AI', 'Labs', 'Co', 'App', 'Base', 'Mind', 'Works', 'Point', 'Link', 'Spot', 'Box', 'Go', 'Up', 'Now'];
const ADJECTIVES = ['Smart', 'Fast', 'Simple', 'Clean', 'Next', 'Best', 'Real', 'Live', 'Open', 'Easy'];
const NOUNS = ['Team', 'Work', 'Task', 'Project', 'Flow', 'Data', 'Cloud', 'Loop', 'Bridge', 'Stream'];

const INDUSTRIES: Record<string, { words: string[]; color: string }> = {
  'Tech / SaaS': { words: ['Tech', 'Dev', 'Code', 'Digital', 'Byte', 'Cloud', 'Stack', 'Logic', 'Data', 'Pixel'], color: '#f26b4e' },
  'Marketing': { words: ['Media', 'Brand', 'Reach', 'Growth', 'Click', 'Social', 'Ad', 'Campaign', 'Lead', 'Funnel'], color: '#f26b4e' },
  'HR / People': { words: ['People', 'Talent', 'Hire', 'Recruit', 'Workforce', 'Culture', 'Team', 'HR', 'Engage', 'Scout'], color: '#f26b4e' },
  'Finance': { words: ['Finance', 'Capital', 'Funds', 'Invest', 'Pay', 'Wealth', 'Asset', 'Revenue', 'Profit', 'Ledger'], color: '#f26b4e' },
  'Health': { words: ['Health', 'Care', 'Med', 'Vital', 'Well', 'Life', 'Clinic', 'Fit', 'Heal', 'Balance'], color: '#22c55e' },
};

type Style = 'modern' | 'compound' | 'descriptive' | 'invented';

function pick<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }

function generateNames(keyword: string, industry: string, style: Style, count: number): string[] {
  const industryWords = INDUSTRIES[industry]?.words ?? [];
  const kw = keyword.trim() ? keyword.trim() : pick([...industryWords, ...NOUNS]);
  const names: Set<string> = new Set();

  while (names.size < count) {
    let name = '';
    if (style === 'modern') {
      name = pick(PREFIXES) + pick(SUFFIXES);
    } else if (style === 'compound') {
      name = pick([kw, pick(ADJECTIVES)]) + pick([pick(industryWords.length ? industryWords : NOUNS), pick(NOUNS)]);
    } else if (style === 'descriptive') {
      name = pick(ADJECTIVES) + ' ' + pick(industryWords.length ? industryWords : NOUNS);
    } else {
      const a = (kw.slice(0, Math.ceil(kw.length / 2)) + pick(SUFFIXES)).replace(/\s+/g, '');
      name = a.charAt(0).toUpperCase() + a.slice(1);
    }
    names.add(name);
    if (names.size >= 100) break;
  }

  return Array.from(names).slice(0, count);
}

export default function BusinessNameGenerator() {
  const [keyword, setKeyword] = useState('');
  const [industry, setIndustry] = useState('Tech / SaaS');
  const [style, setStyle] = useState<Style>('modern');
  const [count, setCount] = useState(12);
  const [names, setNames] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState<string | null>(null);

  function generate() { setNames(generateNames(keyword, industry, style, count)); }
  function toggleFav(name: string) {
    setFavorites((f) => { const n = new Set(f); n.has(name) ? n.delete(name) : n.add(name); return n; });
  }
  function copy(name: string) {
    navigator.clipboard.writeText(name);
    setCopied(name);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Keyword (optional)</label>
          <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="e.g. cloud, invoice, recruit"
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Industry</label>
          <select value={industry} onChange={(e) => setIndustry(e.target.value)}
            className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors">
            {Object.keys(INDUSTRIES).map((k) => <option key={k}>{k}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="text-[13px] font-semibold text-[#0F1112]">Naming Style</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {([['modern', 'Modern (SynthName)'], ['compound', 'Compound (KeyWord)'], ['descriptive', 'Descriptive (Adj+Noun)'], ['invented', 'Invented (Creative)']] as [Style, string][]).map(([v, l]) => (
              <button key={v} onClick={() => setStyle(v)}
                className="py-2 px-3 rounded-xl border text-[12px] font-medium text-center transition-colors"
                style={style === v ? { background: COLOR, color: '#fff', borderColor: COLOR } : { borderColor: '#E5E7EC', color: '#484848' }}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={generate}
          className="inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95"
          style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}>
          Generate Names
        </button>
        <div className="flex items-center gap-2">
          <span className="text-[13px] text-[#6b7280]">Count:</span>
          {[8, 12, 20].map((n) => (
            <button key={n} onClick={() => setCount(n)}
              className="px-2.5 py-1 rounded-lg border text-[12px] font-medium transition-colors"
              style={count === n ? { background: COLOR, color: '#fff', borderColor: COLOR } : { borderColor: '#E5E7EC', color: '#484848' }}>
              {n}
            </button>
          ))}
        </div>
      </div>

      {names.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {names.map((name) => (
              <div key={name} className="flex items-center justify-between gap-2 rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] px-4 py-3 hover:border-[#f26b4e] transition-colors group">
                <span className="text-[14px] font-semibold text-[#0F1112]">{name}</span>
                <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => toggleFav(name)} className="text-[14px]" title="Favorite">
                    {favorites.has(name) ? '★' : '☆'}
                  </button>
                  <button onClick={() => copy(name)} className="text-[12px] text-[#f26b4e]" title="Copy">
                    {copied === name ? '✓' : 'Copy'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {favorites.size > 0 && (
            <div className="rounded-xl bg-[#fff7ed] border border-[#fed7aa] p-4">
              <p className="text-[12px] font-semibold text-[#f26b4e] mb-2">Favorites</p>
              <div className="flex flex-wrap gap-2">
                {Array.from(favorites).map((f) => (
                  <span key={f} className="px-3 py-1 rounded-full bg-white border border-[#f26b4e] text-[13px] font-semibold text-[#f26b4e]">{f}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
