'use client';
import { useState } from 'react';

const COLOR = '#f26b4e';

const KEYWORDS = [
  'SELECT','FROM','WHERE','JOIN','LEFT','RIGHT','INNER','OUTER','CROSS','ON','AND','OR',
  'ORDER BY','GROUP BY','HAVING','LIMIT','OFFSET','INSERT INTO','VALUES','UPDATE','SET',
  'DELETE FROM','CREATE TABLE','ALTER TABLE','DROP TABLE','INDEX','UNIQUE','PRIMARY KEY',
  'FOREIGN KEY','REFERENCES','NOT NULL','DEFAULT','AS','DISTINCT','UNION','ALL','EXCEPT',
  'INTERSECT','WITH','CASE','WHEN','THEN','ELSE','END','IN','NOT IN','EXISTS','BETWEEN',
  'LIKE','IS NULL','IS NOT NULL','COUNT','SUM','AVG','MIN','MAX','COALESCE','CAST',
];

function formatSQL(sql: string): string {
  let s = sql.trim().replace(/\s+/g, ' ');

  // Sort keywords by length desc to avoid partial replacements
  const sorted = [...KEYWORDS].sort((a, b) => b.length - a.length);
  for (const kw of sorted) {
    const re = new RegExp(`\\b${kw}\\b`, 'gi');
    s = s.replace(re, kw);
  }

  const breaks = ['SELECT','FROM','WHERE','JOIN','LEFT JOIN','RIGHT JOIN','INNER JOIN','ORDER BY','GROUP BY','HAVING','LIMIT','UNION','AND','OR','ON','INSERT INTO','VALUES','UPDATE','SET','DELETE FROM'];
  for (const b of breaks.sort((a, c) => c.length - a.length)) {
    const re = new RegExp(`\\b${b}\\b`, 'g');
    s = s.replace(re, `\n${b}`);
  }

  // Indent AND/OR
  s = s.replace(/\n(AND|OR)\b/g, '\n  $1');

  // Align SELECT columns
  s = s.replace(/^SELECT\n?(.+?)\nFROM/ms, (_, cols) => {
    const colList = cols.split(',').map((c: string) => `  ${c.trim()}`).join(',\n');
    return `SELECT\n${colList}\nFROM`;
  });

  return s.trim();
}

function minifySQL(sql: string): string {
  return sql.replace(/\s+/g, ' ').trim();
}

export default function SqlFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'format' | 'minify'>('format');
  const [copied, setCopied] = useState(false);

  function process() {
    if (!input.trim()) return;
    setOutput(mode === 'format' ? formatSQL(input) : minifySQL(input));
  }

  function copy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="flex rounded-xl border border-[#E5E7EC] overflow-hidden">
          {(['format', 'minify'] as const).map((m) => (
            <button key={m} onClick={() => setMode(m)}
              className="px-5 py-2 text-[13px] font-medium capitalize transition-colors"
              style={mode === m ? { background: COLOR, color: '#fff' } : { color: '#484848' }}>
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">SQL Input</label>
          <textarea value={input} onChange={(e) => setInput(e.target.value)}
            placeholder="SELECT u.id, u.name, o.total FROM users u JOIN orders o ON u.id = o.user_id WHERE o.total > 100 ORDER BY o.total DESC LIMIT 10"
            rows={14}
            className="w-full rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] font-mono text-[#0F1112] placeholder:text-[#9ca3af] outline-none resize-y focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/10 transition-colors" />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-[13px] font-semibold text-[#0F1112]">Formatted SQL</label>
            {output && <button onClick={copy} className="text-[12px] text-[#f26b4e] hover:underline">{copied ? 'Copied!' : 'Copy'}</button>}
          </div>
          <textarea value={output} readOnly rows={14}
            placeholder="Formatted SQL appears here"
            className="w-full rounded-xl border border-[#E5E7EC] bg-[#F5F6F8] px-4 py-3 text-[14px] font-mono text-[#0F1112] placeholder:text-[#9ca3af] outline-none resize-y" />
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={process}
          className="inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95"
          style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}>
          {mode === 'format' ? 'Format SQL' : 'Minify SQL'}
        </button>
        <button onClick={() => { setInput(''); setOutput(''); }} className="text-[13px] text-[#6b7280] hover:text-[#0F1112]">Clear</button>
      </div>
    </div>
  );
}
