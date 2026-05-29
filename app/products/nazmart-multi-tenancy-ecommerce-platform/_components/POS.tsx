'use client';

import { useEffect, useState } from 'react';

const PRODUCTS = [
  { name: 'Rattan Chair',        price: 750,  img: 'https://images.unsplash.com/photo-1705169612592-32610774a5d0?w=120&h=80&fit=crop&auto=format' },
  { name: 'Glass Dining Table',  price: 1200, img: 'https://images.unsplash.com/2h3oUIUFxbQ?w=120&h=80&fit=crop&auto=format' },
  { name: 'Wooden Coffee Table', price: 7500, img: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?w=120&h=80&fit=crop&auto=format' },
  { name: 'Stylish Orion Sofa',  price: 4800, img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=120&h=80&fit=crop&auto=format' },
  { name: 'Odrex Double Bed',    price: 9200, img: 'https://images.unsplash.com/photo-1552858725-2758b5fb1286?w=120&h=80&fit=crop&auto=format' },
  { name: 'Comfort King Bed',    price: 8600, img: 'https://images.unsplash.com/photo-1583535045024-e2479a694777?w=120&h=80&fit=crop&auto=format' },
];

const CSS = `
  @keyframes posPopIn   { from{opacity:0;transform:scale(0.88)} to{opacity:1;transform:scale(1)} }
  @keyframes posSlideUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
  @keyframes posBtnPulse{ 0%{transform:scale(1)} 50%{transform:scale(0.93)} 100%{transform:scale(1)} }
  @keyframes posSuccess { 0%{opacity:0;transform:scale(0.7)} 60%{transform:scale(1.08)} 100%{opacity:1;transform:scale(1)} }
  @keyframes posBadge   { from{opacity:0;transform:translateY(-4px) scale(0.7)} to{opacity:1;transform:translateY(0) scale(1)} }
`;

function POSMockup() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setTick(0);
    const id = setInterval(() => setTick(t => {
      // hold on confirmed for 2 extra ticks then loop
      if (t >= 9) return 0;
      return t + 1;
    }), 1600);
    return () => clearInterval(id);
  }, []);

  // phases
  // 0-1 : grid shown, nothing selected
  // 2   : Wooden Coffee Table button clicks (pulsing)
  // 3   : item added to cart (badge appears)
  // 4   : cart panel shows item
  // 5   : Walk-in Customer selected
  // 6   : Proceed button highlights
  // 7+  : Order confirmed! (holds 2 ticks then loops)
  const phase = Math.min(tick, 7);

  const added     = phase >= 3;
  const cartOpen  = phase >= 4;
  const custSel   = phase >= 5;
  const proceed   = phase >= 6;
  const confirmed = phase >= 7;

  return (
    <div className="rounded-2xl overflow-hidden border border-[#E5E7EC] shadow-xl bg-white" style={{ fontFamily: 'system-ui,sans-serif' }}>
      <style>{CSS}</style>

      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#E5E7EC]" style={{ background: '#F8F9FB' }}>
        <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-[#ff5f57]"/><div className="w-3 h-3 rounded-full bg-[#febc2e]"/><div className="w-3 h-3 rounded-full bg-[#28c840]"/></div>
        <div className="flex-1 mx-3 bg-white rounded-full px-3 py-1 text-[10px] text-[#9ca3af] border border-[#E5E7EC]">pos.yourplatform.com/sell</div>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ background: '#0d2b14' }}>POS</span>
      </div>

      <div className="flex min-h-[380px]">

        {/* LEFT — product grid */}
        <div className="flex-1 p-3 flex flex-col gap-3 border-r border-[#E5E7EC]" style={{ background: '#F8F9FB' }}>

          {/* Toolbar */}
          <div className="flex gap-2">
            <div className="flex items-center gap-1.5 bg-white rounded-lg border border-[#E5E7EC] px-2.5 py-1.5 text-[10px] font-medium text-[#374151]">
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#374151" strokeWidth="1.8"><rect x="1" y="1" width="5" height="5" rx="1"/><rect x="10" y="1" width="5" height="5" rx="1"/><rect x="1" y="10" width="5" height="5" rx="1"/><rect x="10" y="10" width="5" height="5" rx="1"/></svg>
              All Categories
            </div>
            <div className="flex-1 bg-white rounded-lg border border-[#E5E7EC] px-2.5 py-1.5 text-[10px] text-[#9ca3af] flex items-center gap-1.5">
              <svg width="9" height="9" viewBox="0 0 20 20" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="9" cy="9" r="6"/><path d="M15 15l3 3"/></svg>
              Scan or enter SKU...
            </div>
            <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold text-white" style={{ background: '#0d2b14' }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h7v7"/></svg>
              Scan
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-3 gap-2">
            {PRODUCTS.map((p, i) => {
              const isTarget = i === 2; // Wooden Coffee Table
              const clicking = isTarget && phase === 2;
              return (
                <div
                  key={p.name}
                  className="bg-white rounded-xl border overflow-hidden transition-all duration-300"
                  style={{
                    borderColor: isTarget && added ? '#92E721' : '#E5E7EC',
                    transform: isTarget && added ? 'scale(1.03)' : 'scale(1)',
                  }}
                >
                  <div className="h-14 flex items-center justify-center relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                    {isTarget && added && (
                      <div className="absolute top-1 right-1 w-4 h-4 rounded-full flex items-center justify-center text-white text-[8px] font-bold" style={{ background: '#92E721', color: '#0d2b14', animation: 'posBadge 0.35s ease' }}>✓</div>
                    )}
                  </div>
                  <div className="p-1.5">
                    <div className="text-[9px] font-semibold text-[#0F1112] leading-tight mb-0.5 truncate">{p.name}</div>
                    <div className="text-[9px] font-bold" style={{ color: '#0d5e3f' }}>${p.price.toLocaleString()}</div>
                    <button
                      className="w-full mt-1 py-0.5 rounded-md text-[8px] font-bold text-white transition-all"
                      style={{
                        background: isTarget && (clicking || added) ? '#92E721' : '#0d2b14',
                        color: isTarget && (clicking || added) ? '#0d2b14' : '#fff',
                        animation: clicking ? 'posBtnPulse 0.4s ease' : 'none',
                      }}
                    >
                      {isTarget && added ? 'Added ✓' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — checkout panel */}
        <div className="w-[200px] flex-shrink-0 flex flex-col gap-0" style={{ background: '#fff' }}>

          {confirmed ? (
            <div className="flex-1 flex flex-col items-center justify-center p-4 gap-3" style={{ animation: 'posSuccess 0.5s ease' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#92E721' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="#0d2b14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="text-center">
                <div className="text-[13px] font-bold text-[#0d2b14]">Order Confirmed!</div>
                <div className="text-[10px] text-[#6b7280] mt-0.5">Invoice #POS-1042</div>
              </div>
              <div className="w-full rounded-xl p-2 text-center" style={{ background: '#F0FDE4' }}>
                <div className="text-[10px] text-[#2d6a00] font-semibold">Total Charged</div>
                <div className="text-[16px] font-bold" style={{ color: '#0d2b14' }}>$7,500</div>
              </div>
              <div className="text-[9px] text-[#9ca3af] text-center">Receipt sent to customer</div>
            </div>
          ) : (
            <>
              {/* Customer selector */}
              <div className="p-2.5 border-b border-[#F3F4F6]">
                <div className="flex rounded-lg overflow-hidden border border-[#E5E7EC] mb-2">
                  <button className="flex-1 py-1.5 text-[9px] font-semibold text-center transition-all" style={{ background: !custSel ? '#0d2b14' : '#fff', color: !custSel ? '#fff' : '#9ca3af' }}>Existing</button>
                  <button className="flex-1 py-1.5 text-[9px] font-semibold text-center transition-all" style={{ background: custSel ? '#0d2b14' : '#fff', color: custSel ? '#fff' : '#9ca3af' }}>Walk-in</button>
                </div>
                {!custSel && (
                  <div className="bg-[#F8F9FB] rounded-lg px-2 py-1.5 text-[9px] text-[#9ca3af] border border-[#E5E7EC]">
                    Enter Phone or Email
                  </div>
                )}
                {custSel && (
                  <div className="bg-[#F0FDE4] rounded-lg px-2 py-1.5 text-[9px] font-semibold text-[#0d2b14] border border-[#92E72140]" style={{ animation: 'posSlideUp 0.3s ease' }}>
                    Walk-in Customer ✓
                  </div>
                )}
              </div>

              {/* Cart items */}
              <div className="p-2.5 border-b border-[#F3F4F6] flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>
                    <span className="text-[9px] font-bold text-[#374151] tracking-wide">CART ITEMS</span>
                    {cartOpen && (
                      <span className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold text-white" style={{ background: '#0d2b14', animation: 'posBadge 0.3s ease' }}>1</span>
                    )}
                  </div>
                  {cartOpen && <span className="text-[8px] text-red-400 cursor-pointer">Clear All</span>}
                </div>

                {!cartOpen && (
                  <div className="text-[9px] text-[#9ca3af] text-center py-4">Cart is empty</div>
                )}

                {cartOpen && (
                  <div className="rounded-xl border border-[#E5E7EC] p-2 flex items-center justify-between" style={{ animation: 'posSlideUp 0.35s ease' }}>
                    <div>
                      <div className="text-[9px] font-semibold text-[#0F1112]">Wooden Coffee Table</div>
                      <div className="text-[8px] text-[#9ca3af]">x1</div>
                    </div>
                    <div className="text-[10px] font-bold" style={{ color: '#0d5e3f' }}>$7,500</div>
                  </div>
                )}
              </div>

              {/* Totals */}
              <div className="p-2.5 border-b border-[#F3F4F6]">
                <div className="flex flex-col gap-1 mb-2">
                  <div className="flex justify-between text-[9px]"><span className="text-[#6b7280]">Subtotal</span><span className="font-semibold">{cartOpen ? '$7,500' : '$0'}</span></div>
                  <div className="flex justify-between text-[9px]"><span className="text-[#6b7280]">Discount</span><span className="text-red-400">—$0</span></div>
                  <div className="flex justify-between text-[9px]"><span className="text-[#6b7280]">VAT</span><span className="text-[#9ca3af]">$0.00</span></div>
                </div>
                <div className="flex justify-between items-center border-t border-[#F3F4F6] pt-1.5">
                  <span className="text-[10px] font-bold text-[#0F1112]">Total</span>
                  <span className="text-[13px] font-bold" style={{ color: '#0d5e3f' }}>{cartOpen ? '$7,500' : '$0'}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="p-2.5 flex gap-1.5">
                <button className="flex-1 py-1.5 rounded-lg border border-[#E5E7EC] text-[8px] font-semibold text-[#374151]">Hold</button>
                <button className="flex-1 py-1.5 rounded-lg border border-red-200 text-[8px] font-semibold text-red-400">Cancel</button>
                <button
                  className="flex-1 py-1.5 rounded-lg text-[8px] font-bold text-white transition-all duration-300"
                  style={{
                    background: proceed ? '#92E721' : '#0d2b14',
                    color: proceed ? '#0d2b14' : '#fff',
                    animation: proceed ? 'posBtnPulse 0.5s ease' : 'none',
                  }}
                >
                  {proceed ? 'Proceed ✓' : 'Proceed'}
                </button>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default function POS() {
  return (
    <section id="pos-plugin" className="py-14 sm:py-20" style={{ background: '#F8F9FB' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-[1000px] mx-auto">

          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 text-[12px] font-bold px-3 py-1 rounded-full mb-4" style={{ background: '#92E72120', color: '#2d6a00' }}>
              PREMIUM PLUGIN
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] mb-4 leading-tight">
              Built-in Point of Sale — Sell In-Store Too
            </h2>
            <p className="text-[#484848] text-[15px] leading-7 mb-6">
              Every vendor gets a full POS terminal in their dashboard. Scan products, process walk-in orders, apply coupons, and print receipts — no third-party hardware required.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                'Barcode / QR code scanner support',
                'Walk-in & existing customer management',
                'Coupon and discount codes at checkout',
                'VAT and tax configuration per store',
                'Hold orders and resume later',
                'Instant receipt generation',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[14px] text-[#374151]">
                  <svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#92E72120"/>
                    <path d="M6 10l3 3 5-5" stroke="#2d6a00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 font-semibold text-[14px] rounded-full px-6 py-3 text-white transition-all hover:opacity-90"
              style={{ background: '#0d2b14' }}
            >
              Get POS with Everything Bundle
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right — animated POS mockup */}
          <div className="w-full">
            <POSMockup key="pos-demo" />
            <p className="text-center text-[11px] text-[#9ca3af] mt-3">Live demo — add to cart → checkout flow</p>
          </div>

        </div>
      </div>
    </section>
  );
}
