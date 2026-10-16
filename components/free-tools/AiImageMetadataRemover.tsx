'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { sizeBucket, track } from '@/lib/image-metadata/analytics';
import { WorkerPool, errorCode, type CleanOutput } from '@/lib/image-metadata/client';
import { generatorFamily } from '@/lib/image-metadata/detect-ai';
import { MAX_FILES, MAX_FILE_BYTES, SOFT_WARN_TOTAL_BYTES } from '@/lib/image-metadata/limits';
import type { Category, ImgFormat, MetaField, MetadataReport, Preset, ToolErrorCode } from '@/lib/image-metadata/types';

const COLOR = '#f26b4e';
const ACCEPT = 'image/jpeg,image/png,image/webp,image/heic,image/heif,image/avif,.heic,.heif';
const SAMPLE_URL = '/free-tools/ai-image-metadata-remover/sample-ai.png';
const PRESET_KEY = 'xg-metadata-remover-preset';

const ERRORS: Record<ToolErrorCode, string> = {
  unsupported_format: "This file type isn't supported. Use JPG, PNG, WebP, HEIC or AVIF.",
  too_large: 'This file is over 100 MB. Try a smaller copy.',
  too_many_files: `You can add up to ${MAX_FILES} images at a time.`,
  corrupt_file: "We couldn't read this file. It may be damaged or not really an image.",
  decode_failed: "Your browser couldn't open this image to re-save it. Try converting it to JPG first.",
  heic_unsupported_browser: "This browser can't open HEIC files. Try Safari, or convert to JPG first.",
  out_of_memory: 'Your device ran out of memory. Try fewer or smaller images at once.',
  zip_failed: "We couldn't build the ZIP. Download files one by one, or try fewer at once.",
  unknown: 'Something went wrong with this file. Nothing was uploaded; try again.',
};

const PRESETS: { value: Preset; title: string; desc: string; note?: string }[] = [
  { value: 'all', title: 'Remove everything', desc: 'Location, camera details, dates, editing history, Content Credentials and AI prompts.' },
  {
    value: 'privacy', title: 'Privacy clean',
    desc: 'Removes location, device details, dates and prompts. Keeps the AI disclosure and copyright.',
    note: "Signed Content Credentials can't survive any edit to a file, so they're removed; the AI disclosure is kept as a standard IPTC tag.",
  },
  {
    value: 'ai-only', title: 'AI data only',
    desc: 'Removes Content Credentials, AI tags and prompts. Keeps camera details and dates.',
    note: 'Location is kept too, so check before sharing.',
  },
];

const GROUPS: { id: Category; label: string; badge: string }[] = [
  { id: 'location', label: 'Location', badge: 'Location' },
  { id: 'device', label: 'Device', badge: 'Device' },
  { id: 'dates', label: 'Dates', badge: 'Dates' },
  { id: 'software', label: 'Software & editing', badge: 'Software' },
  { id: 'ai', label: 'AI generation', badge: 'AI data' },
  { id: 'c2pa', label: 'Content Credentials (C2PA)', badge: 'Content Credentials' },
  { id: 'rights', label: 'Copyright & creator', badge: 'Copyright' },
  { id: 'other', label: 'Other', badge: 'Hidden extras' },
];

interface Item {
  id: string;
  file: File;
  format?: ImgFormat;
  status: 'queued' | 'scanning' | 'scanned' | 'cleaning' | 'cleaned' | 'error';
  before?: MetadataReport;
  out?: CleanOutput;
  outUrl?: string;
  previewUrl?: string;
  error?: ToolErrorCode;
}

const fmtBytes = (b: number) => (b > 1048576 ? `${(b / 1048576).toFixed(2)} MB` : `${(b / 1024).toFixed(1)} KB`);
const stem = (n: string) => n.replace(/\.[^.]+$/, '') || 'image';

function statusLine(it: Item): string {
  if (it.status === 'queued') return 'Ready. Click Clean to remove the metadata.';
  if (it.status === 'scanning') return 'Scanning…';
  if (it.status === 'cleaning') return 'Cleaning…';
  if (it.status === 'error') return ERRORS[it.error ?? 'unknown'];
  if (it.status === 'cleaned' && it.out) {
    const o = it.out;
    if (!o.lossless) return `Cleaned · ${o.notes[0] ?? 'Re-saved.'} ${it.format === 'heic' ? "HEIC can't be saved in browsers yet." : ''}`.trim();
    if (o.leftover.length) return `Cleaned · ${o.leftover.length} item${o.leftover.length > 1 ? 's' : ''} left: ${o.leftover.map((f) => f.label).join(', ')}`;
    return 'Cleaned · 0 metadata blocks left · pixels unchanged';
  }
  const n = it.before?.categories.length ?? 0;
  return n ? `Found ${n} type${n > 1 ? 's' : ''} of metadata` : 'No metadata found. This file is already clean.';
}

function Viewer({ before, after }: { before?: MetadataReport; after?: MetadataReport }) {
  const [tab, setTab] = useState<'before' | 'after'>('before');
  const report = tab === 'before' ? before : after;
  const tabBtn = (t: 'before' | 'after', label: string) => (
    <button
      role="tab" id={`tab-${t}`} aria-selected={tab === t} aria-controls="viewer-panel" type="button"
      onClick={() => { setTab(t); track('viewer_opened', { tab: t }); }}
      className={`px-4 py-2 text-[13px] font-medium rounded-full min-h-8 ${tab === t ? 'bg-[#0F1112] text-white' : 'bg-[#F5F6F8] text-[#484848]'}`}
    >{label}</button>
  );
  return (
    <div className="mt-3 rounded-xl border border-[#E5E7EC] bg-[#FAFAFA] p-4">
      <div role="tablist" aria-label="Metadata before and after cleaning" className="flex gap-2 mb-3">
        {tabBtn('before', 'Before')}
        {after && tabBtn('after', 'After')}
      </div>
      <div role="tabpanel" id="viewer-panel" aria-labelledby={`tab-${tab}`}>
        {!report || report.fields.length === 0 ? (
          <p className="text-[13px] text-[#484848]">
            {tab === 'after' ? <>Nothing left to show. We re-scanned the cleaned file and found no metadata.{report?.iccProfile && ' Colour profile kept so colours look right.'}</> : 'No metadata found.'}
          </p>
        ) : (
          GROUPS.filter((g) => report.fields.some((f) => f.group === g.id)).map((g) => {
            const rows = report.fields.filter((f) => f.group === g.id);
            return (
              <details key={g.id} open className="mb-2">
                <summary className="cursor-pointer text-[13px] font-semibold text-[#0F1112] py-1">{g.label} ({rows.length})</summary>
                <dl className="mt-1 divide-y divide-[#E5E7EC]">{rows.map((f, i) => <Row key={f.key + i} f={f} />)}</dl>
              </details>
            );
          })
        )}
      </div>
      <p className="text-[11px] text-[#9ca3af] mt-3">Values are read on your device and never sent anywhere.</p>
    </div>
  );
}

function Row({ f }: { f: MetaField }) {
  const [all, setAll] = useState(false);
  const long = f.value.length > 300;
  return (
    <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[180px_1fr] gap-2 py-1.5 text-[12px]">
      <dt className="text-[#6b7280] break-words">{f.label}</dt>
      <dd className="text-[#0F1112] break-all font-mono">
        {long && !all ? f.value.slice(0, 300) + '…' : f.value}
        {long && <button type="button" onClick={() => setAll(!all)} className="ml-2 underline text-[#484848] font-sans">{all ? 'Show less' : 'Show all'}</button>}
      </dd>
    </div>
  );
}

function readStoredPreset(): Preset {
  try { const s = localStorage.getItem(PRESET_KEY); if (s === 'all' || s === 'privacy' || s === 'ai-only') return s; } catch { /* storage unavailable */ }
  return 'all';
}

export default function AiImageMetadataRemover() {
  const [items, setItems] = useState<Item[]>([]);
  const [preset, setPreset] = useState<Preset>(readStoredPreset);
  const [flatten, setFlatten] = useState(false);
  const [live, setLive] = useState('');
  const [toast, setToast] = useState('');
  const [zipDone, setZipDone] = useState(false);
  const [dragging, setDragging] = useState(false);
  const poolRef = useRef<WorkerPool | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const itemsRef = useRef<Item[]>([]);
  useEffect(() => { itemsRef.current = items; }, [items]);
  const idRef = useRef(0);

  const pool = () => (poolRef.current ??= new WorkerPool());
  const patch = useCallback((id: string, p: Partial<Item>) => setItems((cur) => cur.map((i) => (i.id === id ? { ...i, ...p } : i))), []);

  useEffect(() => {
    track('tool_loaded', { trigger: 'interaction' });
    return () => {
      poolRef.current?.dispose();
      itemsRef.current.forEach((i) => { if (i.previewUrl) URL.revokeObjectURL(i.previewUrl); if (i.outUrl) URL.revokeObjectURL(i.outUrl); });
    };
  }, []);

  const addFiles = useCallback((files: File[], method: string) => {
    if (!files.length) return;
    const room = MAX_FILES - itemsRef.current.length;
    const accepted = files.slice(0, Math.max(room, 0));
    if (accepted.length < files.length) setToast(`You can add up to ${MAX_FILES} images at a time. We added the first ${accepted.length}.`);
    const rejected: ToolErrorCode[] = [];
    const fresh: Item[] = accepted.map((file) => {
      const base = { id: `f${++idRef.current}`, file, previewUrl: URL.createObjectURL(file) };
      if (file.size > MAX_FILE_BYTES) { rejected.push('too_large'); return { ...base, status: 'error' as const, error: 'too_large' as const }; }
      return { ...base, status: 'scanning' as const };
    });
    if (accepted.length < files.length) rejected.push('too_many_files');
    setItems((cur) => [...cur, ...fresh]);
    setZipDone(false);
    track('files_added', { count: accepted.length, formats: [...new Set(accepted.map((f) => f.type.split('/')[1] || 'unknown'))], size_bucket: sizeBucket(Math.max(...accepted.map((f) => f.size), 0)), method });
    if (rejected.length) track('files_rejected', { count: rejected.length, reason: rejected[0] });

    // Read-only scan so the card can list what was found. Nothing is modified until the user clicks Clean.
    let pending = fresh.filter((i) => i.status === 'scanning').length;
    const found = { cats: new Set<string>(), ai: false, c2pa: false, fam: 'none' as string };
    fresh.filter((i) => i.status === 'scanning').forEach(async (it) => {
      try {
        const { format, report } = await pool().scan(it.file);
        patch(it.id, { status: 'scanned', format, before: report });
        report.categories.forEach((c) => found.cats.add(c));
        found.ai ||= !!report.aiGenerator || !!report.digitalSourceType;
        found.c2pa ||= !!report.c2pa?.present;
        if (found.fam === 'none') found.fam = generatorFamily(report);
      } catch (e) {
        const code = errorCode(e);
        patch(it.id, { status: 'error', error: code });
        track('clean_error', { code, format: 'unknown' });
      } finally {
        if (--pending === 0) track('metadata_scanned', { count: fresh.length, categories_found: [...found.cats], ai_found: found.ai, c2pa_found: found.c2pa, generator_family: found.fam });
      }
    });
  }, [patch]);

  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      const files = [...(e.clipboardData?.items ?? [])].filter((i) => i.kind === 'file' && i.type.startsWith('image/')).map((i) => i.getAsFile()).filter((f): f is File => !!f);
      if (files.length) { e.preventDefault(); addFiles(files, 'paste'); }
    };
    document.addEventListener('paste', onPaste);
    return () => document.removeEventListener('paste', onPaste);
  }, [addFiles]);

  const resetCleaned = useCallback(() => {
    setItems((cur) => cur.map((i) => {
      if (i.status !== 'cleaned') return i;
      if (i.outUrl) URL.revokeObjectURL(i.outUrl);
      return { ...i, status: 'scanned', out: undefined, outUrl: undefined };
    }));
    setZipDone(false);
  }, []);

  const changePreset = (p: Preset) => {
    setPreset(p);
    try { localStorage.setItem(PRESET_KEY, p); } catch { /* ignore */ }
    track('preset_selected', { preset: p });
    resetCleaned();
  };

  const cleanItems = async (targets: Item[]) => {
    if (!targets.length) return;
    const started = performance.now();
    let done = 0, lossless = 0, reenc = 0, verified = 0, leftover = 0;
    const found = { cats: new Set<string>(), ai: false, c2pa: false, fam: 'none' as string };
    setZipDone(false);
    setLive(`Cleaning 0 of ${targets.length}…`);
    await Promise.all(targets.map(async (it) => {
      patch(it.id, { status: 'cleaning' });
      try {
        let { format, before } = it;
        if (!before || !format) {
          const scanned = await pool().scan(it.file);
          format = scanned.format; before = scanned.report;
          patch(it.id, { format, before });
        }
        before.categories.forEach((c) => found.cats.add(c));
        found.ai ||= !!before.aiGenerator || !!before.digitalSourceType;
        found.c2pa ||= !!before.c2pa?.present;
        if (found.fam === 'none') found.fam = generatorFamily(before);
        const out = await pool().clean(it.file, format, preset, flatten);
        const outUrl = URL.createObjectURL(out.blob);
        setItems((cur) => cur.map((i) => {
          if (i.id !== it.id) return i;
          if (i.outUrl) URL.revokeObjectURL(i.outUrl);
          return { ...i, status: 'cleaned', out, outUrl };
        }));
        if (out.lossless) lossless++; else reenc++;
        if (out.verified) verified++;
        leftover += out.leftover.length;
      } catch (e) {
        const code = errorCode(e);
        patch(it.id, { status: 'error', error: code });
        track('clean_error', { code, format: it.format ?? 'unknown' });
      } finally {
        setLive(`Cleaning ${++done} of ${targets.length}…`);
      }
    }));
    setLive(`Done. ${lossless + reenc} image${lossless + reenc === 1 ? '' : 's'} cleaned.`);
    const ms = performance.now() - started;
    track('metadata_cleaned', { count: targets.length, preset, lossless_count: lossless, reencoded_count: reenc, duration_ms_bucket: ms < 1000 ? '<1s' : ms < 5000 ? '1-5s' : ms < 20000 ? '5-20s' : '20s+' });
    track('metadata_verify', { verified_count: verified, leftover_count: leftover });
  };

  const cleanAll = () => cleanItems(itemsRef.current.filter((i) => i.status === 'queued' || i.status === 'scanned'));

  const downloadOne = (it: Item) => {
    if (!it.out || !it.outUrl) return;
    const a = document.createElement('a');
    a.href = it.outUrl;
    a.download = `${stem(it.file.name)}-clean.${it.out.ext}`;
    a.click();
    track('download_single', { format: it.out.format });
  };

  const downloadZip = async () => {
    const cleaned = itemsRef.current.filter((i) => i.out);
    if (!cleaned.length) return;
    try {
      const { default: JSZip } = await import('jszip');
      const zip = new JSZip();
      const used = new Set<string>();
      for (const it of cleaned) {
        let name = `${stem(it.file.name)}-clean.${it.out!.ext}`;
        for (let n = 2; used.has(name.toLowerCase()); n++) name = `${stem(it.file.name)}-clean-${n}.${it.out!.ext}`;
        used.add(name.toLowerCase());
        zip.file(name, it.out!.blob);
      }
      const blob = await zip.generateAsync({ type: 'blob', compression: 'STORE' });
      const d = new Date(), p = (n: number) => String(n).padStart(2, '0');
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `xgenious-clean-images-${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}.zip`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 10_000);
      setZipDone(true);
      track('download_zip', { count: cleaned.length });
    } catch {
      setToast(ERRORS.zip_failed);
      track('clean_error', { code: 'zip_failed', format: 'zip' });
    }
  };

  const remove = (id: string) => setItems((cur) => {
    const it = cur.find((i) => i.id === id);
    if (it?.previewUrl) URL.revokeObjectURL(it.previewUrl);
    if (it?.outUrl) URL.revokeObjectURL(it.outUrl);
    return cur.filter((i) => i.id !== id);
  });

  const clear = () => {
    items.forEach((i) => { if (i.previewUrl) URL.revokeObjectURL(i.previewUrl); if (i.outUrl) URL.revokeObjectURL(i.outUrl); });
    setItems([]); setZipDone(false); setLive('');
  };

  const loadSample = async () => {
    try {
      const res = await fetch(SAMPLE_URL);
      const blob = await res.blob();
      addFiles([new File([blob], 'sample-ai.png', { type: 'image/png' })], 'sample');
    } catch { setToast(ERRORS.unknown); }
  };

  const totalBytes = useMemo(() => items.reduce((s, i) => s + i.file.size, 0), [items]);
  const cleanedCount = items.filter((i) => i.out).length;
  const busy = items.some((i) => i.status === 'scanning' || i.status === 'cleaning');
  const cleanable = items.some((i) => i.status === 'queued' || i.status === 'scanned');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-8 items-start">
      <div className="flex flex-col gap-3 order-1 lg:col-start-1 lg:row-start-1">
      <noscript><p className="text-[13px] text-[#484848]">This tool runs in your browser and needs JavaScript turned on. Nothing is uploaded.</p></noscript>

      <label
        className={`min-h-[240px] border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center gap-2 cursor-pointer text-center transition-colors focus-within:ring-2 focus-within:ring-[#f26b4e] ${dragging ? 'border-[#f26b4e] bg-[#fff1ee]' : 'border-[#E5E7EC] hover:border-[#f26b4e]'}`}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); addFiles([...e.dataTransfer.files], 'drop'); }}
      >
        <input ref={inputRef} type="file" multiple accept={ACCEPT} className="sr-only" aria-label="Add images: drop, choose files, or paste"
          onChange={(e) => { addFiles([...(e.target.files ?? [])], 'picker'); e.target.value = ''; }} />
        <svg aria-hidden width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <p className="text-[16px] font-semibold text-[#0F1112]">Drop images here</p>
        <p className="text-[13px] text-[#484848]">or <span className="underline">choose files</span>, or paste with Ctrl+V (⌘V on Mac)</p>
        <p className="text-[12px] text-[#6b7280]">JPG · PNG · WebP · HEIC · AVIF</p>
        <p className="text-[12px] text-[#6b7280]">Files stay on your device. Nothing is uploaded.</p>
      </label>
      <button type="button" onClick={loadSample} className="self-start text-[13px] underline text-[#484848] min-h-6">Try a sample image</button>
      </div>

      <div className="flex flex-col gap-5 order-3 lg:order-none lg:col-start-1 lg:row-start-2">
      <fieldset className="flex flex-col gap-2">
        <legend className="text-[13px] font-semibold text-[#0F1112] mb-1">What should we remove?</legend>
        <div className="grid grid-cols-3 gap-2">
          {PRESETS.map((p) => (
            <label key={p.value} className={`flex items-center justify-center text-center rounded-xl border px-2 py-2.5 min-h-11 text-[13px] font-medium cursor-pointer focus-within:ring-2 focus-within:ring-[#f26b4e] ${preset === p.value ? 'border-[#f26b4e] bg-[#fff1ee] text-[#0F1112]' : 'border-[#E5E7EC] text-[#484848] hover:border-[#d0d4dc]'}`}>
              <input type="radio" name="preset" value={p.value} checked={preset === p.value} onChange={() => changePreset(p.value)} className="sr-only" />
              {p.title}
            </label>
          ))}
        </div>
        <p className="text-[12px] leading-[18px] text-[#484848]" aria-live="polite">
          {PRESETS.find((p) => p.value === preset)!.desc.replace(' (Recommended)', '')}{' '}
          <span className="text-[#6b7280]">{PRESETS.find((p) => p.value === preset)!.note}</span>
        </p>
        <details className="text-[13px] text-[#484848]">
          <summary className="cursor-pointer min-h-6">Advanced</summary>
          <label className="flex gap-2 items-center mt-2">
            <input type="checkbox" checked={flatten} onChange={(e) => { setFlatten(e.target.checked); resetCleaned(); }} className="accent-[#f26b4e]" />
            Flatten (re-save the image as a brand-new JPEG or PNG)
          </label>
        </details>
      </fieldset>
      </div>

      <div className="flex flex-col gap-4 order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2">
      <div aria-live="polite" role="status" className="sr-only">{live}</div>
      {toast && <p role="alert" className="text-[13px] text-red-600">{toast} <button type="button" className="underline" onClick={() => setToast('')}>Dismiss</button></p>}

      {items.length === 0 && (
        <div className="min-h-[240px] rounded-2xl border-2 border-dashed border-[#E5E7EC] flex items-center justify-center p-8 text-center text-[13px] text-[#6b7280]">
          Your images appear here. Add files, then click Clean.
        </div>
      )}
      {items.length > 0 && (
        <>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[13px] font-medium text-[#0F1112] mr-auto">{items.length} image{items.length > 1 ? 's' : ''} · {fmtBytes(totalBytes)} total</span>
            <button type="button" onClick={cleanAll} disabled={!cleanable || busy} className="text-white font-semibold text-[14px] rounded-full px-6 py-2.5 disabled:opacity-50" style={{ background: COLOR }}>{!cleanable && cleanedCount ? 'Cleaned' : items.length > 1 ? 'Clean all' : 'Clean image'}</button>
            {items.length > 1 && <button type="button" onClick={downloadZip} disabled={!cleanedCount || busy} className="font-semibold text-[14px] rounded-full px-6 py-2.5 border border-[#0F1112] text-[#0F1112] disabled:opacity-40">Download all (.zip)</button>}
            <button type="button" onClick={clear} className="text-[13px] underline text-[#484848] min-h-6">Clear</button>
          </div>
          {totalBytes > SOFT_WARN_TOTAL_BYTES && <p className="text-[12px] text-[#6b7280]">That&apos;s a lot of data. If your browser slows down, try smaller batches.</p>}
          {zipDone && (
            <p className="text-[13px] text-[#484848] rounded-xl bg-[#F5F6F8] p-3">
              Done. Your clean files are downloaded. We built this tool in-house at Xgenious. Need private file processing like this in your own product?{' '}
              <a href="/book-a-call" className="underline font-medium" onClick={() => track('cta_click', { cta: 'book_call', placement: 'success_note' })}>Book a call</a>
            </p>
          )}

          <ul className="flex flex-col gap-3">
            {items.map((it) => {
              return (
                <li key={it.id} className="rounded-2xl border border-[#E5E7EC] p-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-20 aspect-square rounded-lg bg-[#F5F6F8] border border-[#E5E7EC] overflow-hidden shrink-0">
                      {(it.outUrl ?? it.previewUrl) && it.format !== 'heic' && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={it.outUrl ?? it.previewUrl} alt={`${it.file.name} preview`} className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[14px] font-medium text-[#0F1112] truncate">{it.file.name}</p>
                      <p className="text-[12px] text-[#6b7280]">{fmtBytes(it.file.size)}{it.format ? ` · ${it.format.toUpperCase()}` : ''}</p>
                      {it.before && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {GROUPS.filter((g) => it.before!.categories.includes(g.id)).map((g) => (
                            <span key={g.id} className="text-[11px] px-2 py-0.5 rounded-full bg-[#F5F6F8] text-[#484848]">
                              {g.id === 'ai' && it.before!.aiGenerator ? `AI generator: ${it.before!.aiGenerator}`
                                : g.id === 'c2pa' && it.before!.c2pa?.signerGuess ? `Content Credentials: ${it.before!.c2pa.signerGuess}`
                                : g.badge}
                            </span>
                          ))}
                        </div>
                      )}
                      <p className={`text-[12px] mt-2 ${it.status === 'error' ? 'text-red-600' : it.status === 'cleaned' ? 'text-[#15803d] font-medium' : 'text-[#484848]'}`} role={it.status === 'error' ? 'alert' : undefined}>{statusLine(it)}</p>
                      {it.out?.notes.slice(it.out.lossless ? 0 : 1).map((n) => <p key={n} className="text-[12px] text-[#6b7280]">{n}</p>)}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 items-end shrink-0">
                      {items.length > 1 && (it.status === 'queued' || it.status === 'scanned') && <button type="button" onClick={() => cleanItems([it])} className="text-[12px] font-semibold rounded-full px-4 py-2 text-white min-h-9" style={{ background: COLOR }}>Clean</button>}
                      {it.out && <button type="button" onClick={() => downloadOne(it)} className="text-[12px] font-semibold rounded-full px-5 py-2 text-white min-h-9" style={{ background: '#15803d' }}>Download</button>}
                      <button type="button" aria-label={`Remove ${it.file.name}`} onClick={() => remove(it.id)} className="min-h-8 px-3 rounded-full border border-[#E5E7EC] text-[12px] text-[#484848]">Remove</button>
                    </div>
                  </div>
                  {it.before && (
                    <details className="mt-3 group" onToggle={(e) => { if ((e.currentTarget as HTMLDetailsElement).open) track('viewer_opened', { tab: 'before' }); }}>
                      <summary className="cursor-pointer text-[13px] font-medium text-[#0F1112] min-h-6">
                        {it.out ? 'Before and after details' : `Metadata found (${it.before.fields.length})`}
                      </summary>
                      <Viewer before={it.before} after={it.out?.after} />
                    </details>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      )}
      </div>
    </div>
  );
}
