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

const CHAR_LABELS: Record<string, string> = {
  upper:   'Uppercase (A–Z)',
  lower:   'Lowercase (a–z)',
  numbers: 'Numbers (0–9)',
  symbols: 'Symbols (!@#$%)',
};

function calcEntropy(pwd: string, poolSize: number): number {
  return pwd.length * Math.log2(poolSize || 1);
}

function strength(pwd: string, poolSize: number): { label: string; color: string; pct: number; bits: number } {
  const bits = calcEntropy(pwd, poolSize);
  if (bits < 40)  return { label: 'Weak',      color: '#ef4444', pct: 20,  bits };
  if (bits < 70)  return { label: 'Fair',       color: '#f59e0b', pct: 50,  bits };
  if (bits < 100) return { label: 'Strong',     color: '#3b82f6', pct: 80,  bits };
  return              { label: 'Excellent',  color: '#22c55e', pct: 100, bits };
}

function makeCharset(
  opts: Record<string, boolean>,
  excludeAmbig: boolean
): string {
  let charset = Object.entries(SETS)
    .filter(([k]) => opts[k])
    .map(([, v]) => v)
    .join('');
  if (excludeAmbig) {
    charset = charset.split('').filter((c) => !AMBIGUOUS.has(c)).join('');
  }
  return charset;
}

function secureGenerate(charset: string, len: number): string {
  const limit = Math.floor(0xffffffff / charset.length) * charset.length;
  const buf = new Uint32Array(len * 2);
  let out = '';
  let bi = buf.length;
  for (let i = 0; i < len; ) {
    if (bi >= buf.length) { crypto.getRandomValues(buf); bi = 0; }
    const v = buf[bi++];
    if (v < limit) { out += charset[v % charset.length]; i++; }
  }
  return out;
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(20);
  const [opts, setOpts] = useState({ upper: true, lower: true, numbers: true, symbols: true });
  const [excludeAmbig, setExcludeAmbig] = useState(false);
  const [count, setCount] = useState(1);
  const [passwords, setPasswords] = useState<string[]>([]);
  const [copied, setCopied] = useState<number | null>(null);

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
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        {/* Length slider */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="text-[13px] font-semibold text-[#0F1112]">Length</label>
            <span className="text-[13px] font-bold font-mono" style={{ color: COLOR }}>{length}</span>
          </div>
          <input
            type="range" min={8} max={128} value={length}
            onChange={(e) => setLength(+e.target.value)}
            className="w-full accent-[#8b5cf6]"
          />
          <div className="flex justify-between text-[11px] text-[#6b7280]"><span>8</span><span>128</span></div>
        </div>

        {/* Character set checkboxes */}
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {(Object.keys(opts) as (keyof typeof opts)[]).map((k) => (
            <label key={k} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox" checked={opts[k]} onChange={() => toggle(k)}
                className="w-4 h-4 accent-[#8b5cf6] rounded"
              />
              <span className="text-[13px] text-[#484848]">{CHAR_LABELS[k]}</span>
            </label>
          ))}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox" checked={excludeAmbig} onChange={() => setExcludeAmbig((v) => !v)}
              className="w-4 h-4 accent-[#8b5cf6] rounded"
            />
            <span className="text-[13px] text-[#484848]">Exclude ambiguous (l 1 I O 0)</span>
          </label>
        </div>

        {/* Count */}
        <div className="flex items-center gap-3">
          <label className="text-[13px] font-semibold text-[#0F1112] shrink-0">Generate</label>
          <input
            type="number" min={1} max={50} value={count}
            onChange={(e) => setCount(Math.min(50, Math.max(1, +e.target.value || 1)))}
            className="w-20 px-3 py-1.5 border border-[#E5E7EC] rounded-lg text-[13px] font-mono text-[#0F1112] focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/20 focus:border-[#8b5cf6] bg-white"
          />
          <span className="text-[13px] text-[#6b7280]">password{count !== 1 ? 's' : ''} at once</span>
        </div>
      </div>

      <button
        onClick={generate}
        disabled={!charset}
        className="self-start inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Generate Password{count > 1 ? 's' : ''}
      </button>

      {!charset && (
        <p className="text-[13px] text-red-500">Select at least one character type.</p>
      )}

      {passwords.length > 0 && (
        <div className="flex flex-col gap-3">
          {passwords.map((pwd, i) => {
            const s = strength(pwd, charset.length || 1);
            return (
              <div key={i} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <code className="text-[14px] font-mono text-[#0F1112] break-all flex-1 leading-relaxed">{pwd}</code>
                  <button
                    onClick={() => copy(i)}
                    className="shrink-0 text-[12px] font-medium px-3 py-1.5 rounded-lg border border-[#E5E7EC] bg-white text-[#484848] hover:border-[#8b5cf6] transition-colors"
                  >
                    {copied === i ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-[#E5E7EC] rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-300" style={{ width: `${s.pct}%`, background: s.color }} />
                  </div>
                  <span className="text-[11px] font-medium font-mono shrink-0" style={{ color: s.color }}>
                    {s.label} (~{Math.round(s.bits)} bits)
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
