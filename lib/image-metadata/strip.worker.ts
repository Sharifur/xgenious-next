/// <reference lib="webworker" />
import { canReencodeInThisContext } from './reencode';
import { cleanBuffer } from './process';
import { readReport } from './read';
import { sniff } from './sniff';
import { StripError, type ToolErrorCode } from './types';
import type { WorkerRequest, WorkerResponse } from './worker-protocol';

const ctx = self as unknown as DedicatedWorkerGlobalScope;

function codeOf(e: unknown): ToolErrorCode {
  if (e instanceof StripError) return e.code;
  if (e instanceof RangeError || (e instanceof DOMException && e.name === 'QuotaExceededError')) return 'out_of_memory';
  return 'unknown';
}

ctx.onmessage = async (ev: MessageEvent<WorkerRequest>) => {
  const req = ev.data;
  const reply = (res: WorkerResponse, transfer: Transferable[] = []) => ctx.postMessage(res, transfer);
  try {
    const bytes = new Uint8Array(req.buf);
    const format = sniff(bytes);
    if (format === 'unsupported') return reply({ id: req.id, ok: false, code: 'unsupported_format' });

    if (req.kind === 'scan') return reply({ id: req.id, ok: true, kind: 'scan', format, report: await readReport(bytes, format) });

    const needsDecode = format === 'heic' || format === 'avif' || req.flatten;
    if (needsDecode && !canReencodeInThisContext(format)) return reply({ id: req.id, ok: false, code: 'needs_main' });

    const r = await cleanBuffer(bytes, { preset: req.preset, flatten: req.flatten });
    reply({ id: req.id, ok: true, kind: 'clean', format, result: { ...r, out: r.out.buffer } }, [r.out.buffer]);
  } catch (e) {
    reply({ id: req.id, ok: false, code: codeOf(e) });
  }
};
