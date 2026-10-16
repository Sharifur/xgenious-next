import type { CleanResult, ImgFormat, MetadataReport, Preset, ToolErrorCode } from './types';

export type WorkerRequest =
  | { id: number; kind: 'scan'; buf: ArrayBuffer }
  | { id: number; kind: 'clean'; buf: ArrayBuffer; preset: Preset; flatten: boolean };

export type WorkerResponse =
  | { id: number; ok: true; kind: 'scan'; format: ImgFormat; report: MetadataReport }
  | { id: number; ok: true; kind: 'clean'; format: ImgFormat; result: Omit<CleanResult, 'out'> & { out: ArrayBuffer } }
  | { id: number; ok: false; code: ToolErrorCode | 'needs_main' };
