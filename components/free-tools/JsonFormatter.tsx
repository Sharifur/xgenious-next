'use client';
import { useState } from 'react';

const COLOR = '#f26b4e';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [mode, setMode] = useState<'format' | 'minify'>('format');
  const [indent, setIndent] = useState(2);
  const [copied, setCopied] = useState(false);

  function process() {
    setError('');
    setOutput('');
    if (!input.trim()) { setError('Paste JSON to format.'); return; }
    try {
      const parsed = JSON.parse(input);
      setOutput(mode === 'format' ? JSON.stringify(parsed, null, indent) : JSON.stringify(parsed));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Invalid JSON');
    }
  }

  function copy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function clear() { setInput(''); setOutput(''); setError(''); }

  const inputBytes = new TextEncoder().encode(input).length;
  const outputBytes = new TextEncoder().encode(output).length;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex rounded-xl border border-[#E5E7EC] overflow-hidden">
          {(['format', 'minify'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className="px-4 py-2 text-[13px] font-medium transition-colors"
              style={mode === m ? { background: COLOR, color: '#fff' } : { color: '#484848' }}
            >
              {m === 'format' ? 'Format' : 'Minify'}
            </button>
          ))}
        </div>
        {mode === 'format' && (
          <div className="flex items-center gap-2">
            <span className="text-[13px] text-[#6b7280]">Indent</span>
            {[2, 4].map((n) => (
              <button
                key={n}
                onClick={() => setIndent(n)}
                className="w-8 h-8 rounded-md border border-[#E5E7EC] text-[13px] font-medium transition-colors"
                style={indent === n ? { background: COLOR, color: '#fff', borderColor: COLOR } : { color: '#484848' }}
              >
                {n}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Input JSON</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='{"key": "value"}'
            rows={14}
            className="w-full rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] font-mono text-[#0F1112] placeholder:text-[#9ca3af] outline-none resize-y focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/10 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-[13px] font-semibold text-[#0F1112]">Output</label>
            {output && (
              <button onClick={copy} className="text-[12px] text-[#f26b4e] hover:underline">
                {copied ? 'Copied!' : 'Copy'}
              </button>
            )}
          </div>
          <textarea
            value={output}
            readOnly
            rows={14}
            placeholder="Formatted JSON will appear here"
            className="w-full rounded-xl border border-[#E5E7EC] bg-[#F5F6F8] px-4 py-3 text-[14px] font-mono text-[#0F1112] placeholder:text-[#9ca3af] outline-none resize-y"
          />
        </div>
      </div>

      {error && <p className="text-[13px] text-red-500 font-mono">{error}</p>}

      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={process}
          className="inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95"
          style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
        >
          {mode === 'format' ? 'Format JSON' : 'Minify JSON'}
        </button>
        <button onClick={clear} className="text-[13px] text-[#6b7280] hover:text-[#0F1112] transition-colors">
          Clear
        </button>
      </div>

      {(inputBytes > 0 || outputBytes > 0) && (
        <div className="flex gap-4 text-[12px] text-[#6b7280]">
          <span>Input: {inputBytes} bytes</span>
          {outputBytes > 0 && <span>Output: {outputBytes} bytes</span>}
          {inputBytes > 0 && outputBytes > 0 && (
            <span>
              {outputBytes < inputBytes
                ? `Saved ${inputBytes - outputBytes} bytes (${Math.round((1 - outputBytes / inputBytes) * 100)}%)`
                : `Expanded ${outputBytes - inputBytes} bytes`}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
