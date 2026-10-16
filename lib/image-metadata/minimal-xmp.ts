export interface KeptXmp { digitalSourceType?: string; creator?: string; rights?: string; webStatement?: string }

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function hasKeptXmp(k: KeptXmp): boolean {
  return !!(k.digitalSourceType || k.creator || k.rights || k.webStatement);
}

/** Minimal XMP packet for the Privacy preset: only AI disclosure + creator/rights. */
export function buildMinimalXmp(k: KeptXmp): Uint8Array {
  const props: string[] = [];
  if (k.digitalSourceType) props.push(`<Iptc4xmpExt:DigitalSourceType>${esc(k.digitalSourceType)}</Iptc4xmpExt:DigitalSourceType>`);
  if (k.creator) props.push(`<dc:creator><rdf:Seq><rdf:li>${esc(k.creator)}</rdf:li></rdf:Seq></dc:creator>`);
  if (k.rights) props.push(`<dc:rights><rdf:Alt><rdf:li xml:lang="x-default">${esc(k.rights)}</rdf:li></rdf:Alt></dc:rights>`);
  if (k.webStatement) props.push(`<xmpRights:WebStatement>${esc(k.webStatement)}</xmpRights:WebStatement>`);
  const xml =
    `<?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>` +
    `<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">` +
    `<rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/" ` +
    `xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" xmlns:xmpRights="http://ns.adobe.com/xap/1.0/rights/">` +
    props.join('') +
    `</rdf:Description></rdf:RDF></x:xmpmeta><?xpacket end="w"?>`;
  return new TextEncoder().encode(xml);
}
