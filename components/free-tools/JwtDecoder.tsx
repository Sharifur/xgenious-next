'use client';
import { useState } from 'react';

const COLOR = '#f26b4e';

function b64Decode(str: string) {
  const padded = str.replace(/-/g, '+').replace(/_/g, '/');
  const pad = padded.length % 4;
  const s = pad ? padded + '='.repeat(4 - pad) : padded;
  return JSON.parse(decodeURIComponent(escape(atob(s))));
}

function isExpired(payload: Record<string, unknown>) {
  if (typeof payload.exp !== 'number') return null;
  return payload.exp * 1000 < Date.now();
}

export default function JwtDecoder() {
  const [token, setToken] = useState('');
  const [result, setResult] = useState<{ header: Record<string, unknown>; payload: Record<string, unknown> } | null>(null);
  const [error, setError] = useState('');

  function decode() {
    setError('');
    setResult(null);
    const parts = token.trim().split('.');
    if (parts.length !== 3) { setError('JWT must have 3 parts separated by dots.'); return; }
    try {
      const header = b64Decode(parts[0]);
      const payload = b64Decode(parts[1]);
      setResult({ header, payload });
    } catch {
      setError('Invalid JWT — could not decode payload.');
    }
  }

  const expired = result ? isExpired(result.payload) : null;

  function formatVal(v: unknown): string {
    if (typeof v === 'number' && String(v).length === 10) {
      return `${v} (${new Date(v * 1000).toUTCString()})`;
    }
    return String(v);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold text-[#0F1112]">JWT Token</label>
        <textarea
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
          rows={4}
          className="w-full rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] font-mono text-[#0F1112] placeholder:text-[#9ca3af] outline-none resize-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/10 transition-colors break-all"
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={decode}
          className="inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95"
          style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
        >
          Decode JWT
        </button>
        <button onClick={() => { setToken(''); setResult(null); setError(''); }} className="text-[13px] text-[#6b7280] hover:text-[#0F1112]">
          Clear
        </button>
      </div>

      {error && <p className="text-[13px] text-red-500">{error}</p>}

      {result && (
        <div className="flex flex-col gap-4">
          {expired !== null && (
            <div
              className="px-4 py-2.5 rounded-xl text-[13px] font-medium"
              style={expired
                ? { background: '#fef2f2', color: '#ef4444' }
                : { background: '#f0fdf4', color: '#22c55e' }
              }
            >
              Token is {expired ? 'EXPIRED' : 'VALID (not expired)'}
            </div>
          )}

          {(['header', 'payload'] as const).map((part) => (
            <div key={part} className="flex flex-col gap-2">
              <h3 className="text-[13px] font-semibold text-[#0F1112] uppercase tracking-wider">{part}</h3>
              <div className="rounded-xl border border-[#E5E7EC] overflow-hidden">
                {Object.entries(result[part]).map(([k, v]) => (
                  <div key={k} className="flex gap-4 px-4 py-2.5 border-b border-[#E5E7EC] last:border-0">
                    <span className="text-[13px] font-mono text-[#ef4444] min-w-[80px]">{k}</span>
                    <span className="text-[13px] font-mono text-[#0F1112] break-all">{formatVal(v)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <h3 className="text-[13px] font-semibold text-[#0F1112] uppercase tracking-wider">Signature</h3>
            <div className="rounded-xl border border-[#E5E7EC] px-4 py-3 text-[12px] font-mono text-[#6b7280] break-all">
              {token.split('.')[2]}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
