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
  const [length, setLength]           = useState(20);
  const [opts, setOpts]               = useState({ upper: true, lower: true, numbers: true, symbols: true });
  const [excludeAmbig, setExcludeAmbig] = useState(false);
  const [count, setCount]             = useState(1);
  const [passwords, setPasswords]     = useState<string[]>([]);
  const [copied, setCopied]           = useState<number | null>(null);

  const charset = makeCharset(opts, excludeAmbig);

  const generate = useCallback(() => {
    const cs = makeCharset(opts, excludeAmbig);
    if (!cs) return;
    setPasswords(Array.from({ length: count }, () => secureGenerate(cs, length)));
  }, [length, opts, excludeAmbig, count]);

  useEffect(() => { generate(); }, []);

  function copy(idx: number) {
    navigator.clipboard.writeText(passwords[idx]);
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  }

  const toggle = (k: string) => setOpts((o) => ({ ...o, [k]: !o[k as keyof typeof o] }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-5 items-start">

      {/* ── Left: Controls ─────────────────────────────────────────── */}
      <div className="flex flex-col gap-6 bg-[#F5F6F8] rounded-2xl p-6">

        {/* Length */}
        <div>
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-widest mb-0.5">Password Length</p>
              <p className="text-[13px] text-[#6b7280]">Longer = stronger</p>
            </div>
            <span className="text-[40px] font-bold font-mono leading-none" style={{ color: COLOR }}>{length}</span>
          </div>
          <input
            type="range" min={8} max={128} value={length}
            onChange={(e) => setLength(+e.target.value)}
            className="w-full accent-[#8b5cf6] h-1.5"
          />
          <div className="flex justify-between text-[11px] text-[#9ca3af] mt-1.5"><span>8</span><span>128</span></div>
        </div>

        <div className="h-px bg-[#E5E7EC]" />

        {/* Character types */}
        <div>
          <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-widest mb-3">Character Types</p>
          <div className="grid grid-cols-2 gap-2">
            {CHAR_OPTIONS.map(({ key, label, desc }) => {
              const active = opts[key as keyof typeof opts];
              return (
                <button
                  key={key}
                  onClick={() => toggle(key)}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-left transition-all duration-150"
                  style={active
                    ? { background: `${COLOR}14`, borderColor: `${COLOR}40`, color: COLOR }
                    : { background: '#fff', borderColor: '#E5E7EC', color: '#6b7280' }
                  }
                >
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-[12px] font-bold flex-shrink-0 transition-colors"
                    style={active ? { background: COLOR, color: '#fff' } : { background: '#F5F6F8', color: '#9ca3af' }}>
                    {label}
                  </span>
                  <span className="text-[12px] font-medium leading-tight">{desc}</span>
                </button>
              );
            })}
          </div>

          {/* Exclude ambiguous */}
          <button
            onClick={() => setExcludeAmbig((v) => !v)}
            className="mt-2 w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-left transition-all duration-150"
            style={excludeAmbig
              ? { background: `${COLOR}14`, borderColor: `${COLOR}40`, color: COLOR }
              : { background: '#fff', borderColor: '#E5E7EC', color: '#6b7280' }
            }
          >
            <span className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-[10px] font-bold flex-shrink-0 transition-colors leading-tight text-center"
              style={excludeAmbig ? { background: COLOR, color: '#fff' } : { background: '#F5F6F8', color: '#9ca3af' }}>
              l1I
            </span>
            <div>
              <p className="text-[12px] font-medium leading-tight">Exclude ambiguous</p>
              <p className="text-[11px] opacity-70 mt-0.5">Remove l, 1, I, O, 0</p>
            </div>
            <span className="ml-auto">
              <span className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                style={excludeAmbig ? { borderColor: COLOR, background: COLOR } : { borderColor: '#D1D5DB', background: 'transparent' }}>
                {excludeAmbig && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </span>
            </span>
          </button>

          {!charset && (
            <p className="mt-2 text-[12px] text-red-500 font-medium">Select at least one character type.</p>
          )}
        </div>

        <div className="h-px bg-[#E5E7EC]" />

        {/* Quantity */}
        <div>
          <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-widest mb-3">Quantity</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCount((c) => Math.max(1, c - 1))}
              className="w-9 h-9 rounded-xl border border-[#E5E7EC] bg-white text-[#484848] text-[18px] font-medium flex items-center justify-center hover:border-[#8b5cf6] transition-colors"
            >−</button>
            <span className="flex-1 text-center text-[22px] font-bold font-mono text-[#0F1112]">{count}</span>
            <button
              onClick={() => setCount((c) => Math.min(50, c + 1))}
              className="w-9 h-9 rounded-xl border border-[#E5E7EC] bg-white text-[#484848] text-[18px] font-medium flex items-center justify-center hover:border-[#8b5cf6] transition-colors"
            >+</button>
            <span className="text-[12px] text-[#9ca3af] ml-1">password{count !== 1 ? 's' : ''}</span>
          </div>
        </div>

        {/* Generate button */}
        <button
          onClick={generate}
          disabled={!charset}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white text-[14px] font-semibold transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          style={{ background: `linear-gradient(135deg, ${COLOR} 0%, #7c3aed 100%)`, boxShadow: `0 4px 16px ${COLOR}40` }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Generate Password{count > 1 ? 's' : ''}
        </button>
      </div>

      {/* ── Right: Output ──────────────────────────────────────────── */}
      <div className="flex flex-col gap-4 min-h-[200px]">
        {passwords.length === 0 ? (
          <div className="flex-1 flex items-center justify-center rounded-2xl border border-dashed border-[#E5E7EC] py-16">
            <p className="text-[13px] text-[#9ca3af]">Click Generate to create passwords</p>
          </div>
        ) : (
          passwords.map((pwd, i) => {
            const s = strengthInfo(pwd, charset.length || 1);
            const isFirst = i === 0;
            return (
              <div
                key={i}
                className="rounded-2xl border overflow-hidden transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)]"
                style={{ borderColor: isFirst ? `${COLOR}30` : '#E5E7EC' }}
              >
                {/* Password display */}
                <div
                  className="px-5 py-4 flex items-start gap-3"
                  style={{ background: isFirst ? `${COLOR}08` : '#FAFAFA' }}
                >
                  {isFirst && (
                    <span className="mt-0.5 flex-shrink-0 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md"
                      style={{ background: `${COLOR}20`, color: COLOR }}>
                      Latest
                    </span>
                  )}
                  <code className="flex-1 text-[15px] font-mono text-[#0F1112] break-all leading-relaxed">{pwd}</code>
                  <button
                    onClick={() => copy(i)}
                    className="shrink-0 flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-lg border transition-all"
                    style={copied === i
                      ? { background: '#f0fdf4', borderColor: '#bbf7d0', color: '#16a34a' }
                      : { background: '#fff', borderColor: '#E5E7EC', color: '#484848' }
                    }
                  >
                    {copied === i
                      ? <><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Copied</>
                      : <><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>Copy</>
                    }
                  </button>
                </div>
                {/* Strength bar */}
                <div className="px-5 py-3 border-t border-[#F0F1F3] flex items-center gap-3 bg-white">
                  <div className="flex-1 h-1.5 bg-[#F0F1F3] rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-500" style={{ width: `${s.pct}%`, background: s.color }} />
                  </div>
                  <span className="text-[11px] font-semibold font-mono shrink-0 px-2 py-0.5 rounded-md" style={{ background: s.bg, color: s.color }}>
                    {s.label} · ~{Math.round(s.bits)} bits
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
