'use client';
import { useState, useCallback } from 'react';

const COLOR = '#8b5cf6';

const SETS = {
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()-_=+[]{}|;:,.<>?',
};

function strength(pwd: string): { label: string; color: string; pct: number } {
  let score = 0;
  if (pwd.length >= 8) score++;
  if (pwd.length >= 12) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[a-z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  if (score <= 2) return { label: 'Weak', color: '#ef4444', pct: 25 };
  if (score <= 3) return { label: 'Fair', color: '#f59e0b', pct: 50 };
  if (score <= 4) return { label: 'Good', color: '#3b82f6', pct: 75 };
  return { label: 'Strong', color: '#22c55e', pct: 100 };
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [opts, setOpts] = useState({ upper: true, lower: true, numbers: true, symbols: true });
  const [count, setCount] = useState(1);
  const [passwords, setPasswords] = useState<string[]>([]);
  const [copied, setCopied] = useState<number | null>(null);

  const generate = useCallback(() => {
    const charset = Object.entries(SETS)
      .filter(([k]) => opts[k as keyof typeof opts])
      .map(([, v]) => v)
      .join('');
    if (!charset) return;
    const buf = new Uint32Array(count * length);
    crypto.getRandomValues(buf);
    const arr = Array.from({ length: count }, (_, i) =>
      Array.from({ length }, (__, j) => charset[buf[i * length + j] % charset.length]).join('')
    );
    setPasswords(arr);
  }, [length, opts, count]);

  function copy(idx: number) {
    navigator.clipboard.writeText(passwords[idx]);
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  }

  const toggle = (k: keyof typeof opts) => setOpts((o) => ({ ...o, [k]: !o[k] }));

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="text-[13px] font-semibold text-[#0F1112]">Length: {length}</label>
          </div>
          <input
            type="range" min={8} max={128} value={length}
            onChange={(e) => setLength(+e.target.value)}
            className="w-full accent-[#8b5cf6]"
          />
          <div className="flex justify-between text-[11px] text-[#6b7280]"><span>8</span><span>128</span></div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-semibold text-[#0F1112]">Count</label>
          <div className="flex gap-2">
            {[1, 3, 5, 10].map((n) => (
              <button
                key={n}
                onClick={() => setCount(n)}
                className="flex-1 py-1.5 rounded-lg border border-[#E5E7EC] text-[13px] font-medium transition-colors"
                style={count === n ? { background: COLOR, color: '#fff', borderColor: COLOR } : { color: '#484848' }}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2 flex flex-wrap gap-3">
          {(Object.keys(opts) as (keyof typeof opts)[]).map((k) => (
            <label key={k} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox" checked={opts[k]} onChange={() => toggle(k)}
                className="w-4 h-4 accent-[#8b5cf6] rounded"
              />
              <span className="text-[13px] text-[#484848] capitalize">{k}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={generate}
        className="self-start inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95"
        style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
      >
        Generate Password{count > 1 ? 's' : ''}
      </button>

      {passwords.length > 0 && (
        <div className="flex flex-col gap-3">
          {passwords.map((pwd, i) => {
            const s = strength(pwd);
            return (
              <div key={i} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <code className="text-[14px] font-mono text-[#0F1112] break-all flex-1">{pwd}</code>
                  <button
                    onClick={() => copy(i)}
                    className="shrink-0 text-[12px] font-medium px-3 py-1.5 rounded-lg border border-[#E5E7EC] text-[#484848] hover:border-[#8b5cf6] transition-colors"
                  >
                    {copied === i ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-[#E5E7EC] rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${s.pct}%`, background: s.color }} />
                  </div>
                  <span className="text-[11px] font-medium" style={{ color: s.color }}>{s.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
