'use client';
import { useState, useCallback, useEffect } from 'react';

const COLOR = '#8b5cf6';

const SETS = {
  upper:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower:   'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()-_=+[]{};:,.<>?/',
};

const AMBIGUOUS = new Set('l1IO0o');

const CHAR_OPTIONS = [
  { key: 'upper',   label: 'A–Z', desc: 'Uppercase' },
  { key: 'lower',   label: 'a–z', desc: 'Lowercase' },
  { key: 'numbers', label: '0–9', desc: 'Numbers' },
  { key: 'symbols', label: '!@#', desc: 'Symbols' },
];

function makeCharset(opts: Record<string, boolean>, excludeAmbig: boolean): string {
  let cs = Object.entries(SETS).filter(([k]) => opts[k]).map(([, v]) => v).join('');
  if (excludeAmbig) cs = cs.split('').filter((c) => !AMBIGUOUS.has(c)).join('');
  return cs;
}

function secureGenerate(charset: string, len: number): string {
  const limit = Math.floor(0xffffffff / charset.length) * charset.length;
  const buf = new Uint32Array(len * 2);
  let out = '', bi = buf.length;
  for (let i = 0; i < len; ) {
    if (bi >= buf.length) { crypto.getRandomValues(buf); bi = 0; }
    const v = buf[bi++];
    if (v < limit) { out += charset[v % charset.length]; i++; }
  }
  return out;
}

function strengthInfo(pwd: string, poolSize: number) {
  const bits = pwd.length * Math.log2(poolSize || 1);
  if (bits < 40)  return { label: 'Weak',      color: '#ef4444', bg: '#fef2f2', pct: 20,  bits };
  if (bits < 70)  return { label: 'Fair',       color: '#f59e0b', bg: '#fffbeb', pct: 50,  bits };
  if (bits < 100) return { label: 'Strong',     color: '#3b82f6', bg: '#eff6ff', pct: 80,  bits };
  return              { label: 'Excellent',  color: '#22c55e', bg: '#f0fdf4', pct: 100, bits };
}

export default function PasswordGenerator() {
  const [length, setLength]             = useState(20);
  const [opts, setOpts]                 = useState({ upper: true, lower: true, numbers: true, symbols: true });
  const [excludeAmbig, setExcludeAmbig] = useState(false);
  const [password, setPassword]         = useState('');
  const [copied, setCopied]             = useState(false);

  const charset = makeCharset(opts, excludeAmbig);

  const generate = useCallback(() => {
    const cs = makeCharset(opts, excludeAmbig);
    if (!cs) return;
    setPassword(secureGenerate(cs, length));
  }, [length, opts, excludeAmbig]);

  useEffect(() => { generate(); }, []);

  function copy() {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const toggle = (k: string) => setOpts((o) => ({ ...o, [k]: !o[k as keyof typeof o] }));

  const s = password ? strengthInfo(password, charset.length || 1) : null;

  return (
    <div className="flex flex-col gap-3 max-w-2xl mx-auto w-full">

      {/* ── Password output ──────────────────────────────────────────── */}
      <div className="rounded-2xl border border-[#E5E7EC] overflow-hidden bg-white">
        <div className="flex items-center gap-3 px-4 py-3.5">
          <code className="flex-1 text-[15px] font-mono text-[#0F1112] break-all leading-relaxed min-w-0">
            {password || <span className="text-[#9ca3af]">Click Generate…</span>}
          </code>
          <div className="flex items-center gap-2 shrink-0">
            {s && (
              <span className="text-[12px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap" style={{ background: s.bg, color: s.color }}>
                {s.label} · ~{Math.round(s.bits)}b
              </span>
            )}
            <button
              onClick={generate}
              disabled={!charset}
              title="Regenerate"
              className="w-8 h-8 rounded-full border border-[#E5E7EC] flex items-center justify-center text-[#6b7280] hover:border-[#8b5cf6] hover:text-[#8b5cf6] transition-colors disabled:opacity-40 cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={copy}
              disabled={!password}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-semibold text-white transition-all disabled:opacity-40 cursor-pointer"
              style={copied ? { background: '#22c55e' } : { background: `linear-gradient(135deg, ${COLOR} 0%, #7c3aed 100%)` }}
            >
              {copied
                ? <><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Copied</>
                : 'Copy'
              }
            </button>
          </div>
        </div>
        {s && (
          <div className="px-4 pb-3">
            <div className="h-1 bg-[#F0F1F3] rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-500" style={{ width: `${s.pct}%`, background: s.color }} />
            </div>
          </div>
        )}
      </div>

      {/* ── Controls ────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-[#E5E7EC] bg-white divide-y divide-[#F0F1F3]">

        {/* Length */}
        <div className="px-4 py-3 flex items-center gap-3">
          <span className="text-[13px] font-medium text-[#0F1112] shrink-0 w-[155px]">
            Password length: <strong style={{ color: COLOR }}>{length}</strong>
          </span>
          <button onClick={() => setLength((l) => Math.max(8, l - 1))} className="w-7 h-7 rounded-full border border-[#E5E7EC] flex items-center justify-center text-[#484848] text-[16px] hover:border-[#8b5cf6] transition-colors shrink-0 cursor-pointer">−</button>
          <input type="range" min={8} max={128} value={length} onChange={(e) => setLength(+e.target.value)} className="flex-1 accent-[#8b5cf6] h-1" />
          <button onClick={() => setLength((l) => Math.min(128, l + 1))} className="w-7 h-7 rounded-full border border-[#E5E7EC] flex items-center justify-center text-[#484848] text-[16px] hover:border-[#8b5cf6] transition-colors shrink-0 cursor-pointer">+</button>
        </div>

        {/* Character types */}
        <div className="px-4 py-3 flex flex-wrap items-center gap-2">
          <span className="text-[13px] font-medium text-[#0F1112] shrink-0 w-[155px]">Characters used:</span>
          <div className="flex flex-wrap gap-2">
            {CHAR_OPTIONS.map(({ key, label, desc }) => {
              const active = opts[key as keyof typeof opts];
              return (
                <button
                  key={key}
                  onClick={() => toggle(key)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[12px] font-medium transition-all cursor-pointer"
                  style={active
                    ? { background: `${COLOR}12`, borderColor: `${COLOR}50`, color: COLOR }
                    : { background: '#F9FAFB', borderColor: '#E5E7EC', color: '#6b7280' }
                  }
                >
                  <span className="w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 transition-colors" style={active ? { background: COLOR } : { background: '#D1D5DB' }}>
                    {active && <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </span>
                  <span className="font-mono">{label}</span>
                  <span className="hidden sm:inline text-[11px] opacity-80">{desc}</span>
                </button>
              );
            })}
          </div>
          {!charset && <p className="text-[12px] text-red-500 font-medium w-full">Select at least one character type.</p>}
        </div>

        {/* Exclude ambiguous */}
        <div className="px-4 py-3">
          <button onClick={() => setExcludeAmbig((v) => !v)} className="flex items-center gap-2 text-[13px] font-medium transition-colors cursor-pointer" style={{ color: excludeAmbig ? COLOR : '#6b7280' }}>
            <span className="w-3.5 h-3.5 rounded border-2 flex items-center justify-center shrink-0 transition-all" style={excludeAmbig ? { borderColor: COLOR, background: COLOR } : { borderColor: '#D1D5DB', background: 'transparent' }}>
              {excludeAmbig && <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            </span>
            Exclude ambiguous <span className="font-mono text-[11px] opacity-70 ml-0.5">(l, 1, I, O, 0)</span>
          </button>
        </div>

        {/* Generate */}
        <div className="px-4 py-3">
          <button
            onClick={generate}
            disabled={!charset}
            className="flex items-center justify-center gap-2 px-8 py-2.5 rounded-xl text-white text-[13px] font-semibold transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
            style={{ background: `linear-gradient(135deg, ${COLOR} 0%, #7c3aed 100%)`, boxShadow: `0 4px 14px ${COLOR}40` }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}
