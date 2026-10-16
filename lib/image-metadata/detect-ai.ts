import type { MetadataReport } from './types';

const GENERATORS: [RegExp, string][] = [
  [/midjourney/i, 'Midjourney'],
  [/dall[·.\-\s]?e|openai|chatgpt/i, 'ChatGPT / DALL·E'],
  [/firefly|generative fill/i, 'Adobe Firefly'],
  [/stable[\s-]?diffusion|automatic1111|\bforge\b|invokeai|fooocus|swarmui/i, 'Stable Diffusion'],
  [/comfyui/i, 'ComfyUI'],
  [/novelai/i, 'NovelAI'],
  [/leonardo(\.ai)?/i, 'Leonardo.Ai'],
  [/ideogram/i, 'Ideogram'],
  [/\bflux\b/i, 'FLUX'],
  [/\bimagen\b|gemini/i, 'Google Gemini / Imagen'],
  [/copilot|microsoft designer/i, 'Microsoft Copilot'],
  [/meta ai/i, 'Meta AI'],
];

const ISSUERS = ['OpenAI', 'Adobe', 'Google', 'Microsoft', 'Truepic', 'Samsung', 'Leica', 'Sony', 'Nikon', 'Canon', 'Meta'];

const DST: [RegExp, string][] = [
  [/compositeWithTrainedAlgorithmicMedia$/i, 'Edited with AI'],
  [/trainedAlgorithmicMedia$/i, 'Made with AI'],
  [/algorithmicMedia$/i, 'Algorithmic media'],
];

export function matchGenerator(text: string): string | undefined {
  for (const [re, name] of GENERATORS) if (re.test(text)) return name;
}

export function describeDigitalSourceType(uri: string): string {
  for (const [re, label] of DST) if (re.test(uri.trim())) return label;
  return uri.trim().split('/').pop() ?? uri;
}

export function extractDigitalSourceType(xmp: string): string | undefined {
  const m = /DigitalSourceType\s*=\s*"([^"]+)"/.exec(xmp) ?? /<Iptc4xmpExt:DigitalSourceType[^>]*>\s*([^<\s][^<]*)</.exec(xmp);
  return m?.[1].trim();
}

/** Best-effort issuer name from JUMBF bytes. Not a validation of the manifest. */
export function guessC2paSigner(bytes: Uint8Array): string | undefined {
  let s = '';
  const step = 8192;
  for (let i = 0; i < bytes.length; i += step) s += String.fromCharCode(...bytes.subarray(i, i + step));
  return ISSUERS.find((n) => s.includes(n));
}

export function c2paLooksAiGenerated(bytes: Uint8Array): boolean {
  let s = '';
  const step = 8192;
  for (let i = 0; i < bytes.length; i += step) s += String.fromCharCode(...bytes.subarray(i, i + step));
  return s.includes('trainedAlgorithmicMedia');
}

export type GeneratorFamily =
  | 'openai' | 'google' | 'adobe' | 'microsoft' | 'meta' | 'midjourney' | 'sd-a1111' | 'comfyui' | 'other' | 'none';

/** Coarse enum for analytics. Never returns user data. */
export function generatorFamily(r: MetadataReport): GeneratorFamily {
  const g = r.aiGenerator ?? '';
  if (/ChatGPT/.test(g)) return 'openai';
  if (/Google/.test(g)) return 'google';
  if (/Adobe/.test(g)) return 'adobe';
  if (/Microsoft/.test(g)) return 'microsoft';
  if (/Meta/.test(g)) return 'meta';
  if (/Midjourney/.test(g)) return 'midjourney';
  if (/Stable Diffusion/.test(g)) return 'sd-a1111';
  if (/ComfyUI/.test(g)) return 'comfyui';
  return g ? 'other' : 'none';
}
