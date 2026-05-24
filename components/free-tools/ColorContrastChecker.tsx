'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';

function hexToRgb(hex: string): [number, number, number] | null {
  const clean = hex.replace('#', '');
  if (clean.length !== 6) return null;
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
  return [r, g, b];
}

function relativeLuminance([r, g, b]: [number, number, number]): number {
  const sRGB = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
}

function contrastRatio(l1: number, l2: number): number {
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function wcagGrade(ratio: number, isLarge: boolean): { aa: boolean; aaa: boolean } {
  return {
    aa: isLarge ? ratio >= 3 : ratio >= 4.5,
    aaa: isLarge ? ratio >= 4.5 : ratio >= 7,
  };
}

export default function ColorContrastChecker() {
  const [fg, setFg] = useState('#0F1112');
  const [bg, setBg] = useState('#FFFFFF');

  const result = useMemo(() => {
    const fgRgb = hexToRgb(fg);
    const bgRgb = hexToRgb(bg);
    if (!fgRgb || !bgRgb) return null;
    const fgL = relativeLuminance(fgRgb);
    const bgL = relativeLuminance(bgRgb);
    const ratio = contrastRatio(fgL, bgL);
    return {
      ratio,
      normalText: wcagGrade(ratio, false),
      largeText: wcagGrade(ratio, true),
      uiComponents: { aa: ratio >= 3, aaa: ratio >= 4.5 },
    };
  }, [fg, bg]);

  function badge(pass: boolean) {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full"
        style={pass ? { background: '#f0fdf4', color: '#22c55e' } : { background: '#fef2f2', color: '#ef4444' }}>
        {pass ? '✓ PASS' : '✗ FAIL'}
      </span>
    );
  }

  const swapped = fg === '#FFFFFF' || bg === '#0F1112';

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { label: 'Foreground (Text)', val: fg, set: setFg },
          { label: 'Background', val: bg, set: setBg },
        ].map(({ label, val, set }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">{label}</label>
            <div className="flex gap-2 items-center">
              <input type="color" value={val} onChange={(e) => set(e.target.value)}
                className="w-10 h-10 rounded-lg border border-[#E5E7EC] cursor-pointer p-0.5" />
              <input type="text" value={val} onChange={(e) => set(e.target.value)} maxLength={7}
                className="flex-1 rounded-xl border border-[#E5E7EC] bg-white px-4 py-2.5 text-[14px] font-mono text-[#0F1112] uppercase outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/10 transition-colors" />
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl p-8 flex flex-col items-center gap-4 border border-[#E5E7EC]"
        style={{ background: bg, color: fg }}
      >
        <p className="text-[24px] font-bold">The quick brown fox</p>
        <p className="text-[16px]">Normal body text sample for readability</p>
        <p className="text-[13px]">Small text and captions go here</p>
      </div>

      <button
        onClick={() => { const tmp = fg; setFg(bg); setBg(tmp); }}
        className="self-center text-[13px] text-[#6b7280] hover:text-[#0F1112] border border-[#E5E7EC] rounded-lg px-4 py-2 transition-colors cursor-pointer"
      >
        Swap Colors
      </button>

      {result && (
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border-2 p-6 flex flex-col items-center gap-1" style={{ borderColor: COLOR }}>
            <span className="text-[13px] text-[#6b7280]">Contrast Ratio</span>
            <span className="text-[48px] font-bold" style={{ color: COLOR }}>{result.ratio.toFixed(2)}<span className="text-[24px]">:1</span></span>
          </div>

          <div className="rounded-2xl border border-[#E5E7EC] overflow-hidden">
            <div className="grid grid-cols-4 border-b border-[#E5E7EC] bg-[#F5F6F8]">
              {['Criteria', 'AA', 'AAA', 'Requirement'].map((h) => (
                <div key={h} className="px-4 py-2.5 text-[12px] font-semibold text-[#6b7280]">{h}</div>
              ))}
            </div>
            {[
              { label: 'Normal Text', aa: result.normalText.aa, aaa: result.normalText.aaa, req: '4.5:1 / 7:1' },
              { label: 'Large Text (18pt+)', aa: result.largeText.aa, aaa: result.largeText.aaa, req: '3:1 / 4.5:1' },
              { label: 'UI Components', aa: result.uiComponents.aa, aaa: result.uiComponents.aaa, req: '3:1 / 4.5:1' },
            ].map((r) => (
              <div key={r.label} className="grid grid-cols-4 border-b border-[#E5E7EC] last:border-0">
                <div className="px-4 py-3 text-[13px] text-[#0F1112]">{r.label}</div>
                <div className="px-4 py-3">{badge(r.aa)}</div>
                <div className="px-4 py-3">{badge(r.aaa)}</div>
                <div className="px-4 py-3 text-[12px] text-[#9ca3af]">{r.req}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-[12px] text-[#9ca3af]">
        WCAG 2.1 — AA is the legal minimum for most accessibility requirements. AAA is enhanced.
      </div>
    </div>
  );
}
