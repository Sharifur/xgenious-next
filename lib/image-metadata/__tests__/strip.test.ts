// Run: npx -y tsx --test lib/image-metadata/__tests__/strip.test.ts
// Fixtures are generated with sharp (already a dependency) so no binary files are committed.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import sharp from 'sharp';
import { ascii, concat, crc32, putU32be } from '../bytes';
import { cleanBuffer } from '../process';
import { readReport } from '../read';
import { sniff } from '../sniff';
import { parseJpeg } from '../strip-jpeg';
import { parsePng } from '../strip-png';
import { parseWebp } from '../strip-webp';

const img = () => sharp({ create: { width: 64, height: 48, channels: 3, background: { r: 200, g: 40, b: 40 } } });
const u8 = (b: Buffer) => new Uint8Array(b);

const XMP =
  '<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">' +
  '<rdf:Description xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' +
  'Iptc4xmpExt:DigitalSourceType="http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia">' +
  '<dc:creator><rdf:Seq><rdf:li>Jane Doe</rdf:li></rdf:Seq></dc:creator></rdf:Description></rdf:RDF></x:xmpmeta>';

function seg(marker: number, payload: Uint8Array): Uint8Array {
  const len = payload.length + 2;
  return concat([new Uint8Array([0xff, marker, len >> 8, len & 255]), payload]);
}

/** Insert extra segments after SOI and append trailing bytes after EOI. */
function dirtyJpeg(base: Uint8Array): Uint8Array {
  const c2pa = concat([ascii('JP'), new Uint8Array(8), ascii('jumb c2pa OpenAI trainedAlgorithmicMedia')]);
  return concat([
    base.subarray(0, 2),
    seg(0xe1, concat([ascii('http://ns.adobe.com/xap/1.0/\0'), ascii(XMP)])),
    seg(0xeb, c2pa),
    seg(0xfe, ascii('secret comment')),
    base.subarray(2),
    ascii('TRAILING-MOTION-PHOTO-DATA'),
  ]);
}

test('sniff uses magic bytes', async () => {
  assert.equal(sniff(u8(await img().jpeg().toBuffer())), 'jpeg');
  assert.equal(sniff(u8(await img().png().toBuffer())), 'png');
  assert.equal(sniff(u8(await img().webp().toBuffer())), 'webp');
  assert.equal(sniff(ascii('not an image at all, just text')), 'unsupported');
});

test('JPEG: strips EXIF/XMP/C2PA/COM/trailing data; pixels, ICC and orientation intact', async () => {
  const base = u8(await img().withMetadata({ orientation: 6, exif: { IFD0: { Make: 'Acme', Software: 'Midjourney v6' } } }).jpeg().toBuffer());
  const src = dirtyJpeg(base) as Uint8Array<ArrayBuffer>;
  const before = await readReport(src, 'jpeg');
  assert.ok(before.c2pa?.present && before.aiGenerator && before.trailingBytes > 0);
  assert.ok(before.fields.some((f) => f.key === 'Make'));

  const r = await cleanBuffer(src, { preset: 'all' });
  assert.ok(r.lossless && r.verified);
  assert.equal(r.leftover.length, 0, JSON.stringify(r.leftover));
  assert.equal(r.after.trailingBytes, 0);
  assert.equal(r.after.orientation, 6);
  const l = parseJpeg(r.out);
  assert.ok(!l.header.some((s) => s.marker === 0xeb || s.marker === 0xfe));
  assert.equal((await sharp(r.out).metadata()).orientation, 6);
  const raw = await sharp(r.out).raw().toBuffer();
  const rawBefore = await sharp(base).raw().toBuffer();
  assert.ok(raw.equals(rawBefore));
});

test('JPEG: privacy preset keeps AI disclosure + creator only', async () => {
  const base = u8(await img().withMetadata({ exif: { IFD0: { Make: 'Acme' } } }).jpeg().toBuffer());
  const r = await cleanBuffer(dirtyJpeg(base) as Uint8Array<ArrayBuffer>, { preset: 'privacy' });
  assert.equal(r.leftover.length, 0);
  assert.equal(r.after.digitalSourceType?.endsWith('trainedAlgorithmicMedia'), true);
  assert.ok(r.after.fields.some((f) => f.key === 'dc:creator' && f.value === 'Jane Doe'));
  assert.ok(!r.after.fields.some((f) => f.key === 'Make') && !r.after.c2pa);
  assert.ok(r.notes.some((n) => /Content Credentials/.test(n)));
});

test('JPEG: ai-only preset keeps camera EXIF, drops XMP/C2PA', async () => {
  const base = u8(await img().withMetadata({ exif: { IFD0: { Make: 'Acme' } } }).jpeg().toBuffer());
  const r = await cleanBuffer(dirtyJpeg(base) as Uint8Array<ArrayBuffer>, { preset: 'ai-only' });
  assert.ok(r.after.fields.some((f) => f.key === 'Make'));
  assert.ok(!r.after.c2pa && !r.after.digitalSourceType);
});

function pngChunk(type: string, data: Uint8Array): Uint8Array {
  const t = ascii(type);
  return concat([putU32be(data.length), t, data, putU32be(crc32(t, data))]);
}

test('PNG: strips text prompts, caBX, tIME; keeps pixels', async () => {
  const base = u8(await img().png().toBuffer());
  const { chunks } = parsePng(base);
  const idat = chunks.find((c) => c.type === 'IDAT')!;
  const src = concat([
    base.subarray(0, idat.start),
    pngChunk('tEXt', ascii('parameters\0a red cat, Steps: 20, Sampler: Euler, Model: SD')),
    pngChunk('tEXt', ascii('Software\0ComfyUI')),
    pngChunk('caBX', concat([ascii('jumb c2pa Adobe trainedAlgorithmicMedia')])),
    pngChunk('tIME', new Uint8Array([0x07, 0xea, 1, 2, 3, 4, 5])),
    base.subarray(idat.start),
    ascii('junk-after-iend'),
  ]) as Uint8Array<ArrayBuffer>;
  const before = await readReport(src, 'png');
  assert.ok(before.categories.includes('ai') && before.c2pa?.present);

  const r = await cleanBuffer(src, { preset: 'all' });
  assert.ok(r.verified && r.leftover.length === 0);
  assert.deepEqual(parsePng(r.out).chunks.map((c) => c.type), chunks.map((c) => c.type));
  assert.equal(r.out.length, base.length);
  await sharp(r.out).metadata();
});

test('WebP: strips EXIF, clears VP8X flags, valid RIFF size', async () => {
  const base = u8(await img().withMetadata({ exif: { IFD0: { Make: 'Acme' } } }).webp().toBuffer());
  assert.ok(parseWebp(base).some((c) => c.fourcc === 'EXIF'));
  const r = await cleanBuffer(base as Uint8Array<ArrayBuffer>, { preset: 'all' });
  assert.ok(r.verified && r.leftover.length === 0);
  const chunks = parseWebp(r.out);
  assert.ok(!chunks.some((c) => c.fourcc === 'EXIF'));
  const dv = new DataView(r.out.buffer);
  assert.equal(dv.getUint32(4, true), r.out.length - 8);
  const vp8x = chunks.find((c) => c.fourcc === 'VP8X');
  if (vp8x) assert.equal(r.out[vp8x.dataStart] & 0x0c, 0);
  await sharp(r.out).metadata();
});

test('rejects non-images and truncated files', async () => {
  await assert.rejects(cleanBuffer(ascii('hello world, definitely not an image') as Uint8Array<ArrayBuffer>, { preset: 'all' }), { code: 'unsupported_format' });
  const base = u8(await img().jpeg().toBuffer());
  await assert.rejects(cleanBuffer(base.slice(0, 40) as Uint8Array<ArrayBuffer>, { preset: 'all' }), { code: 'corrupt_file' });
});
