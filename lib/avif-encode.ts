import type { EncodeOptions } from '@jsquash/avif/meta.js';

/**
 * Browser AVIF encode through the single-thread @jsquash/avif codec.
 *
 * The package entry (`@jsquash/avif` → `encode.js`) also imports
 * `codec/enc/avif_enc_mt.js`. That file starts `avif_enc_mt.worker.mjs`, and
 * the worker imports `avif_enc_mt.js` again. Turbopack deadlocks on that cycle
 * during `next build`: 0% CPU, stuck on "Creating an optimized production build"
 * (vercel/next.js#99593). Webpack finishes the same graph and only warns about
 * a circular chunk.
 *
 * This site does not send COOP/COEP, so SharedArrayBuffer is unavailable and
 * the package would have used the single-thread codec at runtime anyway.
 * Importing that codec directly keeps AVIF conversion and lets production
 * builds finish. Do not import `@jsquash/avif` or `encode.js` from app code.
 */

type AvifModule = {
  encode(
    data: BufferSource,
    width: number,
    height: number,
    options: Partial<EncodeOptions>,
  ): Uint8Array | null;
};

let pending: Promise<AvifModule> | null = null;

function loadEncoder(): Promise<AvifModule> {
  if (!pending) {
    pending = (async () => {
      const [{ initEmscriptenModule }, { defaultOptions }, { default: avifEncoder }] =
        await Promise.all([
          import('@jsquash/avif/utils.js'),
          import('@jsquash/avif/meta.js'),
          import('@jsquash/avif/codec/enc/avif_enc.js'),
        ]);
      const wasm = await initEmscriptenModule(avifEncoder);
      return {
        encode: (data: BufferSource, width: number, height: number, options: Partial<EncodeOptions>) =>
          wasm.encode(data, width, height, { ...defaultOptions, ...options }),
      };
    })().catch((error: unknown) => {
      pending = null;
      throw error;
    });
  }
  return pending;
}

export async function encodeAvifImage(data: ImageData, quality: number): Promise<ArrayBuffer> {
  const encoder = await loadEncoder();
  const output = encoder.encode(new Uint8Array(data.data.buffer), data.width, data.height, { quality });
  if (!output) throw new Error('Encoding error.');
  // Copy so the result is a plain ArrayBuffer (the wasm view may be a SharedArrayBuffer).
  return new Uint8Array(output).buffer;
}
