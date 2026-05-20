'use client';
import { useState, useRef } from 'react';

const COLOR = '#8b5cf6';
const ACCEPT = 'image/png';
const FORMAT = 'avif';
const MAX_MB = 10;

interface ConvertResult { url: string; filename: string; originalSize: number; convertedSize: number; savings: string; }

export default function PngToAvif() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(70);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ConvertResult | null>(null);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(f: File) {
    if (!f.type.includes('png')) { setError('Please upload a PNG file.'); return; }
    if (f.size > MAX_MB * 1024 * 1024) { setError(`File must be under ${MAX_MB}MB.`); return; }
    setFile(f); setError(''); setResult(null);
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }

  async function convert() {
    if (!file) return;
    setLoading(true); setError(''); setResult(null);
    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('format', FORMAT);
      fd.append('quality', String(quality));
      const res = await fetch('/api/image-convert', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Conversion failed');
      setResult(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Conversion failed');
    } finally {
      setLoading(false);
    }
  }

  const fmtBytes = (b: number) => b > 1024 * 1024 ? `${(b / 1024 / 1024).toFixed(2)} MB` : `${(b / 1024).toFixed(1)} KB`;

  return (
    <div className="flex flex-col gap-5">
      <div
        onDrop={onDrop} onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-[#E5E7EC] rounded-2xl p-10 flex flex-col items-center gap-3 cursor-pointer hover:border-[#8b5cf6] transition-colors"
      >
        <input ref={inputRef} type="file" accept={ACCEPT} className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        {file ? (
          <div className="text-center">
            <p className="text-[14px] font-medium text-[#0F1112]">{file.name}</p>
            <p className="text-[12px] text-[#6b7280] mt-0.5">{fmtBytes(file.size)}</p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-[14px] font-medium text-[#0F1112]">Drop PNG here or click to upload</p>
            <p className="text-[12px] text-[#9ca3af] mt-1">PNG files only · Max {MAX_MB}MB · AVIF is 50% smaller than JPEG</p>
          </div>
        )}
      </div>

      {file && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="text-[13px] font-medium text-[#0F1112]">Quality: {quality}%</label>
            <span className="text-[12px] text-[#9ca3af]">AVIF 70% ≈ JPEG 90% visually</span>
          </div>
          <input type="range" min={1} max={100} value={quality} onChange={(e) => setQuality(+e.target.value)} className="w-full accent-[#8b5cf6]" />
        </div>
      )}

      {error && <p className="text-[13px] text-red-500">{error}</p>}

      {file && (
        <button
          onClick={convert}
          disabled={loading}
          className="self-start inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-7 py-3 transition-all hover:-translate-y-0.5 disabled:opacity-60"
          style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
        >
          {loading ? 'Converting...' : 'Convert to AVIF'}
        </button>
      )}

      {result && (
        <div className="rounded-2xl border border-[#E5E7EC] p-6 flex flex-col gap-4">
          <div className="grid sm:grid-cols-3 gap-3 text-center">
            {[
              { label: 'Original Size', val: fmtBytes(result.originalSize), color: '#6b7280' },
              { label: 'AVIF Size', val: fmtBytes(result.convertedSize), color: COLOR },
              { label: 'Savings', val: result.savings, color: '#22c55e' },
            ].map(({ label, val, color }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="text-[12px] text-[#9ca3af]">{label}</span>
                <span className="text-[18px] font-bold" style={{ color }}>{val}</span>
              </div>
            ))}
          </div>
          <a
            href={result.url}
            download={result.filename}
            className="self-center inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-8 py-3 transition-all hover:-translate-y-0.5"
            style={{ background: '#22c55e', boxShadow: '0 6px 20px rgba(34,197,94,0.35)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Download {result.filename}
          </a>
          <p className="text-center text-[12px] text-[#9ca3af]">File auto-deleted after 24 hours. No registration required.</p>
        </div>
      )}
    </div>
  );
}
