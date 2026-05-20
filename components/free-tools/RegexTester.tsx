'use client';
import { useState, useMemo } from 'react';

const COLOR = '#06b6d4';

export default function RegexTester() {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState({ g: true, i: false, m: false });
  const [testStr, setTestStr] = useState('');
  const [replaceWith, setReplaceWith] = useState('');
  const [tab, setTab] = useState<'match' | 'replace'>('match');

  const flagStr = Object.entries(flags).filter(([, v]) => v).map(([k]) => k).join('');

  const { matches, error, highlighted } = useMemo(() => {
    if (!pattern || !testStr) return { matches: [], error: '', highlighted: testStr };
    try {
      const re = new RegExp(pattern, flagStr);
      const ms: RegExpExecArray[] = [];
      if (flags.g) {
        let m: RegExpExecArray | null;
        const re2 = new RegExp(pattern, flagStr);
        while ((m = re2.exec(testStr)) !== null) {
          ms.push(m);
          if (m.index === re2.lastIndex) re2.lastIndex++;
        }
      } else {
        const m = re.exec(testStr);
        if (m) ms.push(m);
      }
      const hl = testStr.replace(new RegExp(pattern, flagStr + (flags.g ? '' : '')), (match) =>
        `<mark class="bg-[#cffafe] rounded">${match}</mark>`
      );
      return { matches: ms, error: '', highlighted: hl };
    } catch (e) {
      return { matches: [], error: e instanceof Error ? e.message : 'Invalid regex', highlighted: testStr };
    }
  }, [pattern, flagStr, testStr, flags.g]);

  const replaced = useMemo(() => {
    if (!pattern || !testStr || tab !== 'replace') return '';
    try {
      return testStr.replace(new RegExp(pattern, flagStr), replaceWith);
    } catch { return ''; }
  }, [pattern, flagStr, testStr, replaceWith, tab]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold text-[#0F1112]">Regular Expression</label>
        <div className="flex items-center rounded-xl border border-[#E5E7EC] bg-white overflow-hidden focus-within:border-[#06b6d4] focus-within:ring-2 focus-within:ring-[#06b6d4]/10 transition-colors">
          <span className="px-3 text-[16px] text-[#9ca3af] font-mono">/</span>
          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="[A-Z][a-z]+"
            className="flex-1 py-3 text-[14px] font-mono text-[#0F1112] placeholder:text-[#9ca3af] outline-none bg-transparent"
          />
          <span className="px-3 text-[16px] text-[#9ca3af] font-mono">/{flagStr}</span>
        </div>
        <div className="flex gap-3">
          {(Object.keys(flags) as (keyof typeof flags)[]).map((f) => (
            <label key={f} className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox" checked={flags[f]}
                onChange={() => setFlags((p) => ({ ...p, [f]: !p[f] }))}
                className="w-3.5 h-3.5 accent-[#06b6d4]"
              />
              <span className="text-[12px] font-mono text-[#484848]">{f} — {f === 'g' ? 'global' : f === 'i' ? 'case insensitive' : 'multiline'}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold text-[#0F1112]">Test String</label>
        <textarea
          value={testStr}
          onChange={(e) => setTestStr(e.target.value)}
          placeholder="Paste text to test against..."
          rows={5}
          className="w-full rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] font-mono text-[#0F1112] placeholder:text-[#9ca3af] outline-none resize-y focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/10 transition-colors"
        />
      </div>

      {error && <p className="text-[13px] text-red-500 font-mono">{error}</p>}

      <div className="flex rounded-xl border border-[#E5E7EC] overflow-hidden self-start">
        {(['match', 'replace'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="px-4 py-2 text-[13px] font-medium capitalize transition-colors"
            style={tab === t ? { background: COLOR, color: '#fff' } : { color: '#484848' }}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'match' && (
        <div className="flex flex-col gap-3">
          {pattern && testStr && !error && (
            <div className="flex items-center gap-2">
              <span
                className="text-[13px] font-semibold px-3 py-1 rounded-full"
                style={matches.length > 0 ? { background: '#f0fdf4', color: '#22c55e' } : { background: '#fef2f2', color: '#ef4444' }}
              >
                {matches.length} match{matches.length !== 1 ? 'es' : ''} found
              </span>
            </div>
          )}
          {highlighted !== testStr && (
            <div
              className="rounded-xl border border-[#E5E7EC] px-4 py-3 text-[13px] font-mono whitespace-pre-wrap break-all"
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          )}
          {matches.length > 0 && (
            <div className="flex flex-col gap-2">
              {matches.map((m, i) => (
                <div key={i} className="rounded-xl border border-[#E5E7EC] p-3 flex flex-col gap-1">
                  <div className="flex items-center gap-3 text-[12px]">
                    <span className="font-medium text-[#06b6d4]">Match {i + 1}</span>
                    <span className="text-[#6b7280]">index {m.index}–{m.index + m[0].length}</span>
                  </div>
                  <code className="text-[13px] font-mono text-[#0F1112] bg-[#cffafe] px-2 py-0.5 rounded">{m[0]}</code>
                  {m.slice(1).map((g, gi) => g !== undefined && (
                    <div key={gi} className="text-[12px] text-[#6b7280]">
                      Group {gi + 1}: <code className="font-mono">{g}</code>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'replace' && (
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">Replace With</label>
            <input
              type="text"
              value={replaceWith}
              onChange={(e) => setReplaceWith(e.target.value)}
              placeholder="$1 replacement"
              className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-2.5 text-[14px] font-mono text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/10 transition-colors"
            />
          </div>
          {replaced && (
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#0F1112]">Result</label>
              <div className="rounded-xl border border-[#E5E7EC] bg-[#F5F6F8] px-4 py-3 text-[13px] font-mono text-[#0F1112] whitespace-pre-wrap break-all">
                {replaced}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
