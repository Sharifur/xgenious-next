'use client';
import { useState } from 'react';

const COLOR = '#f59e0b';

export default function Base64EncoderDecoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [copied, setCopied] = useState(false);

  function process() {
    setError('');
    setOutput('');
    if (!input.trim()) { setError('Enter text to process.'); return; }
    try {
      if (mode === 'encode') {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        setOutput(decodeURIComponent(escape(atob(input.trim()))));
      }
    } catch {
      setError(mode === 'decode' ? 'Invalid Base64 string.' : 'Encoding failed.');
    }
  }

  function copy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function swap() {
    setInput(output);
    setOutput('');
    setError('');
    setMode((m) => m === 'encode' ? 'decode' : 'encode');
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex rounded-xl border border-[#E5E7EC] overflow-hidden self-start">
        {(['encode', 'decode'] as const).map((m) => (
          <button
            key={m}
            onClick={() => { setMode(m); setOutput(''); setError(''); }}
            className="px-5 py-2 text-[13px] font-medium capitalize transition-colors"
            style={mode === m ? { background: COLOR, color: '#fff' } : { color: '#484848' }}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">
            {mode === 'encode' ? 'Plain Text' : 'Base64 String'}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === 'encode' ? 'Hello, World!' : 'SGVsbG8sIFdvcmxkIQ=='}
            rows={10}
            className="w-full rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] font-mono text-[#0F1112] placeholder:text-[#9ca3af] outline-none resize-y focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/10 transition-colors max-h-[240px] sm:max-h-none overflow-y-auto"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-[13px] font-semibold text-[#0F1112]">
              {mode === 'encode' ? 'Base64 Output' : 'Decoded Text'}
            </label>
            {output && (
              <button onClick={copy} className="text-[12px] text-[#f59e0b] hover:underline">
                {copied ? 'Copied!' : 'Copy'}
              </button>
            )}
          </div>
          <textarea
            value={output}
            readOnly
            rows={10}
            placeholder="Output will appear here"
            className="w-full rounded-xl border border-[#E5E7EC] bg-[#F5F6F8] px-4 py-3 text-[14px] font-mono text-[#0F1112] placeholder:text-[#9ca3af] outline-none resize-y"
          />
        </div>
      </div>

      {error && <p className="text-[13px] text-red-500">{error}</p>}

      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={process}
          className="inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95"
          style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
        >
          {mode === 'encode' ? 'Encode to Base64' : 'Decode from Base64'}
        </button>
        {output && (
          <button onClick={swap} className="text-[13px] text-[#6b7280] hover:text-[#0F1112] transition-colors">
            Swap & {mode === 'encode' ? 'Decode' : 'Encode'}
          </button>
        )}
        <button onClick={() => { setInput(''); setOutput(''); setError(''); }} className="text-[13px] text-[#6b7280] hover:text-[#0F1112] transition-colors">
          Clear
        </button>
      </div>
    </div>
  );
}
