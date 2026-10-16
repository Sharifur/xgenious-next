import { JOB_TIMEOUT_MS } from './limits';
import type { WorkerRequest, WorkerResponse } from './worker-protocol';
import { StripError, type CleanResult, type ImgFormat, type MetadataReport, type Preset, type ToolErrorCode } from './types';

export interface ScanOutput { format: ImgFormat; report: MetadataReport }
export type CleanOutput = Omit<CleanResult, 'out'> & { blob: Blob; format: ImgFormat };

type Req = WorkerRequest extends infer R ? (R extends { id: number } ? Omit<R, 'id'> : never) : never;

interface Slot { worker: Worker; busy: boolean }
interface Task { run: (slot: Slot) => Promise<void>; }

/** Small pool of strip workers. Files never leave the browser: workers only talk to this page. */
export class WorkerPool {
  private slots: Slot[] = [];
  private queue: Task[] = [];
  private nextId = 1;
  private readonly size = Math.max(1, Math.min(4, (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) || 2));

  private spawn(): Slot {
    return { worker: new Worker(new URL('./strip.worker.ts', import.meta.url), { type: 'module' }), busy: false };
  }

  private pump() {
    while (this.queue.length) {
      let slot = this.slots.find((s) => !s.busy);
      if (!slot && this.slots.length < this.size) { slot = this.spawn(); this.slots.push(slot); }
      if (!slot) return;
      const task = this.queue.shift()!;
      slot.busy = true;
      const s = slot;
      task.run(s).finally(() => { s.busy = false; this.pump(); });
    }
  }

  private call(req: Req): Promise<WorkerResponse & { ok: true }> {
    return new Promise((resolve, reject) => {
      const id = this.nextId++;
      this.queue.push({
        run: (slot) =>
          new Promise<void>((done) => {
            const finish = (fn: () => void) => { clearTimeout(timer); slot.worker.onmessage = null; slot.worker.onerror = null; fn(); done(); };
            const timer = setTimeout(() => {
              // Hung or crashed worker: replace it and fail only this file.
              slot.worker.terminate();
              slot.worker = this.spawn().worker;
              finish(() => reject(new StripError('unknown')));
            }, JOB_TIMEOUT_MS);
            slot.worker.onmessage = (ev: MessageEvent<WorkerResponse>) => {
              if (ev.data.id !== id) return;
              finish(() => (ev.data.ok ? resolve(ev.data) : reject(new StripError(ev.data.code === 'needs_main' ? 'unknown' : ev.data.code))));
            };
            slot.worker.onerror = () => finish(() => reject(new StripError('unknown')));
            slot.worker.postMessage({ ...req, id }, [req.buf]);
          }),
      });
      this.pump();
    });
  }

  async scan(file: File): Promise<ScanOutput> {
    const res = await this.call({ kind: 'scan', buf: await file.arrayBuffer() });
    if (res.kind !== 'scan') throw new StripError('unknown');
    return { format: res.format, report: res.report };
  }

  async clean(file: File, format: ImgFormat, preset: Preset, flatten: boolean): Promise<CleanOutput> {
    const needsMain = format === 'heic' || (typeof OffscreenCanvas === 'undefined' && (format === 'avif' || flatten));
    if (needsMain) return cleanOnMainThread(file, preset, flatten);
    const res = await this.call({ kind: 'clean', buf: await file.arrayBuffer(), preset, flatten });
    if (res.kind !== 'clean') throw new StripError('unknown');
    const { out, ...rest } = res.result;
    return { ...rest, blob: new Blob([out], { type: rest.mime }), format: res.format };
  }

  dispose() {
    this.slots.forEach((s) => s.worker.terminate());
    this.slots = [];
    this.queue = [];
  }
}

/** HEIC decoding (WASM) and canvas fallbacks need the DOM, so they run here. */
async function cleanOnMainThread(file: File, preset: Preset, flatten: boolean): Promise<CleanOutput> {
  const { cleanBuffer } = await import('./process');
  const { sniff } = await import('./sniff');
  const bytes = new Uint8Array(await file.arrayBuffer());
  const format = sniff(bytes);
  const r = await cleanBuffer(bytes, { preset, flatten });
  const { out, ...rest } = r;
  return { ...rest, blob: new Blob([out], { type: r.mime }), format };
}

export function errorCode(e: unknown): ToolErrorCode {
  if (e instanceof StripError) return e.code;
  if (e instanceof RangeError) return 'out_of_memory';
  return 'unknown';
}
