export type ImgFormat = 'jpeg' | 'png' | 'webp' | 'heic' | 'avif' | 'unsupported';
export type Preset = 'all' | 'privacy' | 'ai-only';
export type Category = 'location' | 'device' | 'dates' | 'software' | 'ai' | 'c2pa' | 'rights' | 'other';

export interface MetaField { group: Category; key: string; label: string; value: string }

export interface MetadataReport {
  format: ImgFormat;
  fields: MetaField[];
  categories: Category[];
  aiGenerator?: string;
  c2pa?: { present: boolean; signerGuess?: string };
  digitalSourceType?: string;
  /** XMP values the Privacy preset re-writes into a minimal packet. */
  xmpKeep?: { creator?: string; rights?: string; webStatement?: string };
  hasThumbnail: boolean;
  trailingBytes: number;
  iccProfile: boolean;
  orientation?: number;
}

export type ToolErrorCode =
  | 'unsupported_format' | 'too_large' | 'too_many_files' | 'corrupt_file'
  | 'decode_failed' | 'heic_unsupported_browser' | 'out_of_memory' | 'zip_failed' | 'unknown';

export class StripError extends Error {
  constructor(public code: ToolErrorCode) { super(code); }
}

export interface CleanResult {
  out: Uint8Array<ArrayBuffer>;
  mime: string;
  ext: string;
  lossless: boolean;
  /** Lossless paths: image data hash identical before/after. Re-encode paths: always false. */
  verified: boolean;
  after: MetadataReport;
  /** Fields still present that the chosen preset should have removed. */
  leftover: MetaField[];
  notes: string[];
}
