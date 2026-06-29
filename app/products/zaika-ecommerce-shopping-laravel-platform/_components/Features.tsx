import { COLOR, FEATURES } from './constants';
import './features-animations.css';

/* Palette for the illustrations (Zaika raspberry-pink) */
const G = '#d6336c';      // primary pink
const GD = '#a61e4d';     // dark pink
const GL = '#f08bb0';     // light pink
const GL2 = '#fbd6e4';    // pale pink
const AM = '#f59e0b';     // amber accent
const AML = '#fcd34d';    // light amber
const INK = '#1f2937';    // ink
const GRAY = '#e5e7eb';   // card stroke
const SOFT = '#fdeef4';   // soft fill
const SALE = '#e2574c';   // sale / urgency red

const VB = '0 0 200 130';

/* Shared illustration glyphs (declared at module scope, not inside render) */
/* T-shirt glyph (replaces the old fruit glyph; same call signature) */
function Apple({ cx, cy, r = 9, fill = SALE }: { cx: number; cy: number; r?: number; fill?: string }) {
  const neck = `M${cx - r * 0.5} ${cy - r * 0.78} C${cx - r * 0.26} ${cy - r * 0.42} ${cx + r * 0.26} ${cy - r * 0.42} ${cx + r * 0.5} ${cy - r * 0.78}`;
  return (
    <>
      <path
        d={`M${cx - r * 0.5} ${cy - r * 0.78}
            L${cx - r * 1.05} ${cy - r * 0.46}
            L${cx - r * 1.02} ${cy + r * 0.04}
            L${cx - r * 0.6} ${cy + r * 0.26}
            L${cx - r * 0.6} ${cy + r}
            L${cx + r * 0.6} ${cy + r}
            L${cx + r * 0.6} ${cy + r * 0.26}
            L${cx + r * 1.02} ${cy + r * 0.04}
            L${cx + r * 1.05} ${cy - r * 0.46}
            L${cx + r * 0.5} ${cy - r * 0.78}
            C${cx + r * 0.26} ${cy - r * 0.42} ${cx - r * 0.26} ${cy - r * 0.42} ${cx - r * 0.5} ${cy - r * 0.78}
            Z`}
        fill={fill}
      />
      <path d={neck} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth={Math.max(0.8, r * 0.14)} strokeLinecap="round" />
    </>
  );
}
/* Fashion item glyphs (cuke→dress, pepper→handbag, carrot→sneaker) */
function Veg({ type, tx, ty }: { type: string; tx: number; ty: number }) {
  if (type === 'cuke') // A-line dress
    return (
      <>
        <path d={`M${tx - 3.4} ${ty - 7} L${tx + 3.4} ${ty - 7} L${tx + 2.6} ${ty - 2.5} L${tx + 6.5} ${ty + 7} L${tx - 6.5} ${ty + 7} L${tx - 2.6} ${ty - 2.5} Z`} fill={G} />
        <path d={`M${tx - 3.4} ${ty - 7} L${tx} ${ty - 4} L${tx + 3.4} ${ty - 7}`} fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinejoin="round" />
      </>
    );
  if (type === 'pepper') // handbag
    return (
      <>
        <rect x={tx - 6} y={ty - 1.5} width="12" height="9" rx="2.2" fill={AM} />
        <path d={`M${tx - 3.6} ${ty - 1.5} v-2.2 a3.6 3.6 0 0 1 7.2 0 v2.2`} fill="none" stroke={GD} strokeWidth="1.5" />
        <rect x={tx - 6} y={ty + 1} width="12" height="1.6" fill="rgba(0,0,0,0.12)" />
      </>
    );
  // sneaker
  return (
    <>
      <path d={`M${tx - 7} ${ty + 5} L${tx - 7} ${ty + 1} q0 -4 4 -4 l2.5 0 l5 4 l4.5 1.2 q2.2 0.6 2.2 2.6 l0 0.8 q0 0.8 -1 0.8 l-18.4 0 q-1 0 -1 -1 z`} fill="#475569" />
      <path d={`M${tx - 7} ${ty + 4.4} l18.4 0`} stroke="#fff" strokeWidth="1" />
      <path d={`M${tx - 2} ${ty - 2.6} l3 2.4 M${tx + 0.4} ${ty - 3.2} l2.6 3`} stroke="#fff" strokeWidth="0.9" strokeLinecap="round" />
    </>
  );
}
function Heart({ cx, cy, fill, stroke }: { cx: number; cy: number; fill: string; stroke?: string }) {
  return (
    <path
      d={`M${cx} ${cy + 3.2} c-3 -2 -4.6 -3.5 -4.6 -5.4 a2.2 2.2 0 0 1 4 -1.3 a2.2 2.2 0 0 1 4 1.3 c0 1.9 -1.6 3.4 -4.6 5.4 z`}
      fill={fill}
      stroke={stroke}
      strokeWidth={stroke ? 1.5 : 0}
      strokeLinejoin="round"
    />
  );
}
function CartIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <>
      <path d={`M${cx - 5.5} ${cy - 4} h2 l1.5 7.2 a1 1 0 0 0 1 .8 h5.2 a1 1 0 0 0 1 -.8 l1 -4.8 h-8.2`} fill="none" stroke={GD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={cx - 1} cy={cy + 6} r="1" fill={GD} />
      <circle cx={cx + 4} cy={cy + 6} r="1" fill={GD} />
    </>
  );
}
function CompareIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <>
      <path d={`M${cx - 5} ${cy - 2} h9 m-2.5 -2.5 l2.5 2.5 -2.5 2.5`} fill="none" stroke={GD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M${cx + 5} ${cy + 3} h-9 m2.5 -2.5 l-2.5 2.5 2.5 2.5`} fill="none" stroke={GD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}
function CheckBadge({ cx, cy, fill }: { cx: number; cy: number; fill: string }) {
  return (
    <>
      <circle cx={cx} cy={cy} r="5.5" fill={fill} />
      <path d={`M${cx - 2.4} ${cy} l1.7 1.7 l3.2 -3.6`} fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}
function TriVal({ x, y, vals, fill, size = 9, weight = 700, anchor = 'end' }: { x: number; y: number; vals: [string, string, string]; fill: string; size?: number; weight?: number; anchor?: 'start' | 'middle' | 'end' }) {
  const cls = ['a-q1', 'a-q2', 'a-q3'];
  return (
    <>
      {vals.map((v, i) => (
        <text key={i} className={cls[i]} x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={weight} fill={fill} fontFamily="sans-serif">{v}</text>
      ))}
    </>
  );
}
function EyeBadge({ cx, cy, active }: { cx: number; cy: number; active?: boolean }) {
  const stroke = active ? '#fff' : GD;
  return (
    <>
      <circle cx={cx} cy={cy} r="6.5" fill={active ? G : '#fff'} stroke={GRAY} strokeWidth="1.2" />
      <path d={`M${cx - 4} ${cy} q4 -4 8 0 q-4 4 -8 0 z`} fill="none" stroke={stroke} strokeWidth="1.2" />
      <circle cx={cx} cy={cy} r="1.4" fill={stroke} />
    </>
  );
}

function Scene({ name }: { name: string }) {
  const common = { viewBox: VB, className: 'i-scene w-full h-auto block' } as const;
  switch (name) {
    /* ---------- Page Builder ---------- */
    case 'builder':
      return (
        <svg {...common}>
          <circle cx="36" cy="28" r="24" fill={GL2} opacity="0.6" />
          {/* editor window */}
          <rect x="18" y="16" width="164" height="100" rx="9" fill="#fff" stroke={GRAY} strokeWidth="2" />
          <rect x="18" y="16" width="164" height="15" rx="9" fill={SOFT} />
          <circle cx="29" cy="23.5" r="2.2" fill="#f87171" /><circle cx="37" cy="23.5" r="2.2" fill={AML} /><circle cx="45" cy="23.5" r="2.2" fill={GL} />
          {/* widget palette */}
          <rect x="26" y="38" width="34" height="70" rx="5" fill={GL2} />
          <text x="43" y="47" textAnchor="middle" fontSize="6" fontWeight="700" fill={GD} fontFamily="sans-serif">WIDGETS</text>
          {[52, 70, 88].map((y) => (
            <g key={y}>
              <rect x="31" y={y} width="24" height="13" rx="3" fill="#fff" stroke={GL} strokeWidth="1.2" />
              <circle cx="36" cy={y + 6.5} r="1" fill={G} /><circle cx="39" cy={y + 6.5} r="1" fill={G} />
              <rect x="43" y={y + 5} width="9" height="3" rx="1.5" fill={GL} />
            </g>
          ))}
          {/* canvas: a placed block + a highlighted drop zone */}
          <rect x="68" y="38" width="106" height="16" rx="4" fill={GL} />
          <rect x="74" y="44" width="46" height="4" rx="2" fill="#fff" opacity="0.85" />
          <rect className="a-zone" x="68" y="84" width="106" height="22" rx="5" fill={`${G}12`} stroke={G} strokeWidth="2" strokeDasharray="5 4" />
          {/* widget being dragged from palette into the drop zone, then released */}
          <g className="a-dragw">
            <rect x="30" y="60" width="34" height="18" rx="4" fill={G} />
            <circle cx="36" cy="66" r="1.3" fill="#fff" /><circle cx="40" cy="66" r="1.3" fill="#fff" /><circle cx="36" cy="70" r="1.3" fill="#fff" /><circle cx="40" cy="70" r="1.3" fill="#fff" />
            <rect x="45" y="64" width="14" height="3.5" rx="1.75" fill="#fff" opacity="0.9" />
            <rect x="45" y="70" width="10" height="3.5" rx="1.75" fill="#fff" opacity="0.6" />
          </g>
          {/* cursor: follows the widget, then releases & fades once it lands */}
          <g className="a-curs">
            <path d="M58 76l5 14 3-6 6-1z" fill={INK} stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
          </g>
        </svg>
      );
    /* ---------- Advance Inventory ---------- */
    case 'inventory':
      return (
        <svg {...common}>
          <circle cx="166" cy="28" r="24" fill={GL2} opacity="0.55" />
          {/* admin panel */}
          <rect x="22" y="18" width="156" height="96" rx="10" fill="#fff" stroke={GRAY} strokeWidth="2" />
          {/* product header: thumbnail + name lines */}
          <rect x="32" y="28" width="30" height="30" rx="6" fill={GL2} />
          <path d="M37 38l10-4 10 4-10 4z" fill={GD} opacity="0.55" />
          <path d="M37 38v9l10 4 10-4v-9" fill="none" stroke={GD} strokeWidth="1.6" strokeLinejoin="round" opacity="0.7" />
          <rect x="70" y="33" width="72" height="6" rx="3" fill="#e2e8e4" />
          <rect x="70" y="45" width="48" height="5" rx="2.5" fill="#eef2ef" />
          {/* field label */}
          <text x="32" y="71" fontSize="6.5" fontWeight="700" fill="#9aa6a1" fontFamily="sans-serif" letterSpacing="0.5">STOCK QTY</text>
          {/* active input field */}
          <rect x="32" y="75" width="92" height="24" rx="7" fill="#fff" stroke={G} strokeWidth="2" />
          <text className="a-d1" x="46" y="92" fontSize="15" fontWeight="800" fill={INK} fontFamily="sans-serif">24</text>
          <text className="a-d2" x="46" y="92" fontSize="15" fontWeight="800" fill={INK} fontFamily="sans-serif">25</text>
          <text className="a-d3" x="46" y="92" fontSize="15" fontWeight="800" fill={INK} fontFamily="sans-serif">26</text>
          <text className="a-d4" x="46" y="92" fontSize="15" fontWeight="800" fill={INK} fontFamily="sans-serif">27</text>
          <rect className="a-caret" x="70" y="80" width="2" height="14" rx="1" fill={G} />
          {/* stepper buttons */}
          <rect x="130" y="75" width="18" height="24" rx="6" fill={SOFT} stroke={GRAY} strokeWidth="1.4" />
          <line x1="135" y1="87" x2="143" y2="87" stroke={GD} strokeWidth="2" strokeLinecap="round" />
          <g className="a-press">
            <rect x="152" y="75" width="18" height="24" rx="6" fill={G} />
            <line x1="161" y1="82" x2="161" y2="92" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <line x1="156" y1="87" x2="166" y2="87" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </g>
          {/* stock-level bar filling up */}
          <rect x="32" y="106" width="138" height="5" rx="2.5" fill={GL2} />
          <rect className="a-fill" x="32" y="106" width="138" height="5" rx="2.5" fill={G} style={{ transformOrigin: 'left center' }} />
        </svg>
      );
    /* ---------- Variants & Attributes ---------- */
    case 'variants': {
      const SHIRT = 'M90 30 L96 30 C97 34 103 34 104 30 L110 30 L126 40 L119 51 L114 47.5 L114 70 L86 70 L86 47.5 L81 51 L74 40 Z';
      const SWATCH = [G, AM, '#e2574c', '#475569'];
      const cx = [64, 84, 104, 124];
      return (
        <svg {...common}>
          <circle cx="36" cy="28" r="22" fill={GL2} opacity="0.5" />
          {/* product card */}
          <rect x="46" y="16" width="108" height="100" rx="10" fill="#fff" stroke={GRAY} strokeWidth="2" />
          {/* image area */}
          <rect x="52" y="22" width="96" height="52" rx="6" fill={GL2} />
          {/* shirt — four colours stacked, each shown while its swatch is active */}
          <path className="a-v1" d={SHIRT} fill={SWATCH[0]} />
          <path className="a-v2" d={SHIRT} fill={SWATCH[1]} />
          <path className="a-v3" d={SHIRT} fill={SWATCH[2]} />
          <path className="a-v4" d={SHIRT} fill={SWATCH[3]} />
          {/* colour-agnostic shading for realism */}
          <path d={SHIRT} fill="none" stroke="rgba(15,23,42,0.16)" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M96 30 C97 34 103 34 104 30" fill="none" stroke="rgba(15,23,42,0.22)" strokeWidth="2" strokeLinecap="round" />
          <path d="M92 41 q-3 12 1 27" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="3" strokeLinecap="round" />
          {/* size attribute pills */}
          {['S', 'M', 'L'].map((sz, i) => {
            const active = i === 1;
            return (
              <g key={sz}>
                <rect x={62 + i * 22} y="98" width="18" height="12" rx="3" fill={active ? G : '#fff'} stroke={active ? G : GRAY} strokeWidth="1.4" />
                <text x={71 + i * 22} y="107" textAnchor="middle" fontSize="8" fontWeight="700" fill={active ? '#fff' : '#6b7280'} fontFamily="sans-serif">{sz}</text>
              </g>
            );
          })}
          {/* colour swatches with active ring + tap ripple */}
          {cx.map((x, i) => (
            <g key={x}>
              <circle className={`a-tap${i + 1}`} cx={x} cy="84" r="6" fill={SWATCH[i]} />
              <circle cx={x} cy="84" r="6" fill={SWATCH[i]} />
              <circle className={`a-v${i + 1}`} cx={x} cy="84" r="9" fill="none" stroke={SWATCH[i]} strokeWidth="2" />
            </g>
          ))}
          {/* tapping cursor */}
          <g className="a-vcur">
            <path d="M64 90l4.5 12 2.6-5.2 5.4-1z" fill={INK} stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
          </g>
        </svg>
      );
    }
    /* ---------- Advance Shipping ---------- */
    case 'shipping':
      return (
        <svg {...common}>
          {/* map panel */}
          <rect x="14" y="14" width="172" height="78" rx="10" fill="#eef6f0" stroke={GRAY} strokeWidth="2" />
          <path d="M22 38 C58 28 92 58 122 46 S170 38 178 50" fill="none" stroke="#d4e7da" strokeWidth="2" opacity="0.8" />
          <path d="M34 74 C66 64 108 82 152 68" fill="none" stroke="#d4e7da" strokeWidth="2" opacity="0.55" />
          {/* origin warehouse */}
          <path d="M24 46 L36 38 L48 46 Z" fill={GD} />
          <rect x="26" y="46" width="20" height="17" rx="1.5" fill="#fff" stroke={GD} strokeWidth="1.6" />
          <rect x="33" y="53" width="6" height="10" fill={GL2} />
          {/* drawn delivery route */}
          <path className="a-route" d="M48 50 C82 32 118 64 150 44" fill="none" stroke={G} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="48" cy="50" r="3" fill={G} />
          {/* destination pin */}
          <g className="a-bob">
            <path d="M150 24 a11 11 0 0 1 11 11 c0 8 -11 17 -11 17 s-11 -9 -11 -17 a11 11 0 0 1 11 -11 z" fill={AM} />
            <circle cx="150" cy="35" r="4.5" fill="#fff" />
          </g>
          {/* road */}
          <rect x="8" y="94" width="184" height="14" fill="#d6e2da" />
          <line className="a-road" x1="8" y1="101" x2="192" y2="101" stroke="#fff" strokeWidth="2" strokeDasharray="10 8" />
          {/* delivery truck */}
          <g className="a-drive">
            <ellipse cx="62" cy="107" rx="30" ry="3" fill="rgba(0,0,0,0.12)" />
            <line x1="28" y1="86" x2="36" y2="86" stroke={GL} strokeWidth="2" strokeLinecap="round" />
            <line x1="26" y1="91" x2="34" y2="91" stroke={GL} strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="96" x2="36" y2="96" stroke={GL} strokeWidth="2" strokeLinecap="round" />
            <rect x="40" y="82" width="36" height="20" rx="3" fill="#fff" stroke={GD} strokeWidth="2" />
            <line x1="46" y1="89" x2="70" y2="89" stroke={GL} strokeWidth="2" strokeLinecap="round" />
            <line x1="46" y1="94" x2="64" y2="94" stroke={GL} strokeWidth="2" strokeLinecap="round" />
            <path d="M76 86 h10 l6 8 v8 h-16 z" fill={GD} />
            <rect x="78" y="88" width="8" height="6" rx="1" fill={GL2} />
            <circle className="a-pulse" cx="92" cy="100" r="2" fill={AML} />
            <g>
              <circle cx="50" cy="104" r="5.5" fill={INK} />
              <g className="a-wheel"><path d="M50 99.5 V108.5 M45.5 104 H54.5" stroke="#fff" strokeWidth="1.4" /></g>
              <circle cx="50" cy="104" r="1.6" fill="#fff" />
            </g>
            <g>
              <circle cx="68" cy="104" r="5.5" fill={INK} />
              <g className="a-wheel"><path d="M68 99.5 V108.5 M63.5 104 H72.5" stroke="#fff" strokeWidth="1.4" /></g>
              <circle cx="68" cy="104" r="1.6" fill="#fff" />
            </g>
          </g>
        </svg>
      );
    /* ---------- Advance Coupon ---------- */
    case 'coupon':
      return (
        <svg {...common}>
          {/* checkout summary card */}
          <rect x="24" y="13" width="152" height="104" rx="10" fill="#fff" stroke={GRAY} strokeWidth="2" />
          <text x="34" y="29" fontSize="6.5" fontWeight="700" fill="#9aa6a1" fontFamily="sans-serif" letterSpacing="0.5">ORDER SUMMARY</text>
          {/* subtotal */}
          <text x="34" y="44" fontSize="9" fill="#6b7280" fontFamily="sans-serif">Subtotal</text>
          <text x="166" y="44" textAnchor="end" fontSize="9" fontWeight="700" fill={INK} fontFamily="sans-serif">$40.00</text>
          {/* coupon input */}
          <rect x="34" y="52" width="80" height="22" rx="6" fill="#fff" stroke={G} strokeWidth="2" />
          <path d="M41 58h7l5 5-5 5h-7z" fill="none" stroke={G} strokeWidth="1.4" strokeLinejoin="round" />
          <text className="a-tt1" x="58" y="67" fontSize="10" fontWeight="700" fill={INK} fontFamily="monospace">SA</text>
          <text className="a-tt2" x="58" y="67" fontSize="10" fontWeight="700" fill={INK} fontFamily="monospace">SAVE</text>
          <text className="a-tt3" x="58" y="67" fontSize="10" fontWeight="700" fill={INK} fontFamily="monospace">SAVE3</text>
          <text className="a-tt4" x="58" y="67" fontSize="10" fontWeight="700" fill={INK} fontFamily="monospace">SAVE30</text>
          <g className="a-applied"><circle cx="106" cy="63" r="6" fill={G} /><path d="M103 63l2 2 4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" /></g>
          {/* apply button */}
          <g className="a-applybtn">
            <rect x="120" y="52" width="46" height="22" rx="6" fill={G} />
            <text x="143" y="67" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff" fontFamily="sans-serif">Apply</text>
          </g>
          {/* divider */}
          <line x1="34" y1="84" x2="166" y2="84" stroke={GRAY} strokeWidth="1.5" />
          {/* discount row */}
          <text x="34" y="98" fontSize="9" fill="#6b7280" fontFamily="sans-serif">Discount</text>
          <g className="a-applied">
            <rect x="120" y="90" width="46" height="13" rx="6.5" fill={GL2} />
            <text x="143" y="99.5" textAnchor="middle" fontSize="8.5" fontWeight="800" fill={GD} fontFamily="sans-serif">− 30%</text>
          </g>
          {/* total row */}
          <text x="34" y="112" fontSize="10" fontWeight="800" fill={INK} fontFamily="sans-serif">Total</text>
          <text x="118" y="112" textAnchor="end" fontSize="9" fill="#9aa6a1" fontFamily="sans-serif">$40.00</text>
          <rect className="a-strike" x="98" y="108.5" width="20" height="1.6" rx="0.8" fill="#9aa6a1" style={{ transformOrigin: 'left center' }} />
          <g className="a-applied"><text x="166" y="112" textAnchor="end" fontSize="12" fontWeight="800" fill={G} fontFamily="sans-serif">$28.00</text></g>
        </svg>
      );
    /* ---------- Campaign ---------- */
    case 'campaign': {
      const SALE = '#e2574c';
      return (
        <svg {...common}>
          {/* campaign banner with countdown */}
          <rect x="16" y="14" width="168" height="26" rx="8" fill={GD} />
          <circle cx="30" cy="27" r="7" fill="none" stroke="#fff" strokeWidth="2" />
          <path d="M30 23v4l3 2" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="42" y="31" fontSize="10" fontWeight="800" fill="#fff" fontFamily="sans-serif">FLASH SALE</text>
          {/* countdown boxes: HH : MM : SS (seconds tick down) */}
          <rect x="116" y="19" width="16" height="16" rx="3" fill="#fff" />
          <text x="124" y="31" textAnchor="middle" fontSize="9" fontWeight="800" fill={GD} fontFamily="monospace">02</text>
          <text x="135" y="31" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff">:</text>
          <rect x="138" y="19" width="16" height="16" rx="3" fill="#fff" />
          <text x="146" y="31" textAnchor="middle" fontSize="9" fontWeight="800" fill={GD} fontFamily="monospace">45</text>
          <text x="157" y="31" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff">:</text>
          <rect x="160" y="19" width="16" height="16" rx="3" fill="#fff" />
          <text className="a-d1" x="168" y="31" textAnchor="middle" fontSize="9" fontWeight="800" fill={SALE} fontFamily="monospace">30</text>
          <text className="a-d2" x="168" y="31" textAnchor="middle" fontSize="9" fontWeight="800" fill={SALE} fontFamily="monospace">29</text>
          <text className="a-d3" x="168" y="31" textAnchor="middle" fontSize="9" fontWeight="800" fill={SALE} fontFamily="monospace">28</text>
          <text className="a-d4" x="168" y="31" textAnchor="middle" fontSize="9" fontWeight="800" fill={SALE} fontFamily="monospace">27</text>

          {/* ---- Product 1: Denim Jacket ---- */}
          <rect x="16" y="46" width="80" height="66" rx="7" fill="#fff" stroke={GRAY} strokeWidth="1.5" />
          <rect x="22" y="52" width="68" height="34" rx="5" fill={GL2} />
          <rect x="20" y="50" width="24" height="12" rx="6" fill={SALE} />
          <text x="32" y="59" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#fff" fontFamily="sans-serif">-30%</text>
          {/* denim jacket */}
          <Apple cx={56} cy={69} r={13} fill="#4f6d97" />
          <text x="22" y="97" fontSize="8.5" fontWeight="700" fill={INK} fontFamily="sans-serif">Denim Jacket</text>
          <text x="22" y="108" fontSize="8" fill="#9aa6a1" fontFamily="sans-serif" style={{ textDecoration: 'line-through' }}>$59.00</text>
          <text x="90" y="108" textAnchor="end" fontSize="11.5" fontWeight="800" fill={G} fontFamily="sans-serif">$41.00</text>

          {/* ---- Product 2: Summer Dress ---- */}
          <rect x="104" y="46" width="80" height="66" rx="7" fill="#fff" stroke={GRAY} strokeWidth="1.5" />
          <rect x="110" y="52" width="68" height="34" rx="5" fill={GL2} />
          <rect x="108" y="50" width="24" height="12" rx="6" fill={SALE} />
          <text x="120" y="59" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#fff" fontFamily="sans-serif">-40%</text>
          {/* summer dress */}
          <path d="M137 57 L151 57 L149 65 L157 83 L131 83 L139 65 Z" fill={G} />
          <path d="M137 57 L144 61 L151 57" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M139 65 L149 65" stroke="rgba(0,0,0,0.12)" strokeWidth="1.2" />
          <text x="110" y="97" fontSize="8.5" fontWeight="700" fill={INK} fontFamily="sans-serif">Summer Dress</text>
          <text x="110" y="108" fontSize="8" fill="#9aa6a1" fontFamily="sans-serif" style={{ textDecoration: 'line-through' }}>$45.00</text>
          <text x="178" y="108" textAnchor="end" fontSize="11.5" fontWeight="800" fill={G} fontFamily="sans-serif">$27.00</text>
        </svg>
      );
    }
    /* ---------- Autocomplete Search ---------- */
    case 'search': {
      const sugg = [
        { cls: 'a-sug1', y: 56, name: 'Cotton Tee', price: '$19.00' },
        { cls: 'a-sug2', y: 76, name: 'Graphic Tee', price: '$24.00' },
        { cls: 'a-sug3', y: 96, name: 'V-Neck Tee', price: '$22.00' },
      ];
      return (
        <svg {...common}>
          {/* search input */}
          <rect x="18" y="20" width="164" height="26" rx="13" fill="#fff" stroke={G} strokeWidth="2.5" />
          <circle cx="34" cy="33" r="6" fill="none" stroke={G} strokeWidth="2.5" />
          <line x1="39" y1="38" x2="44" y2="43" stroke={G} strokeWidth="2.5" strokeLinecap="round" />
          <text className="a-tt1" x="50" y="37" fontSize="12" fontWeight="600" fill={INK} fontFamily="sans-serif">T</text>
          <text className="a-tt2" x="50" y="37" fontSize="12" fontWeight="600" fill={INK} fontFamily="sans-serif">Te</text>
          <text className="a-tt3" x="50" y="37" fontSize="12" fontWeight="600" fill={INK} fontFamily="sans-serif">Tee</text>
          <text className="a-tt4" x="50" y="37" fontSize="12" fontWeight="600" fill={INK} fontFamily="sans-serif">Tee</text>
          <rect className="a-caret" x="72" y="27" width="2" height="13" rx="1" fill={G} />
          {/* suggestion dropdown */}
          <rect x="18" y="50" width="164" height="66" rx="10" fill="#fff" stroke={GRAY} strokeWidth="2" />
          {sugg.map((s) => (
            <g key={s.name} className={s.cls}>
              <rect x="26" y={s.y} width="16" height="16" rx="4" fill={GL2} />
              <Apple cx={34} cy={s.y + 8} r={3.6} />
              <text x="50" y={s.y + 11} fontSize="9.5" fontWeight="600" fill={INK} fontFamily="sans-serif">{s.name}</text>
              <text x="174" y={s.y + 11} textAnchor="end" fontSize="8.5" fontWeight="700" fill={G} fontFamily="sans-serif">{s.price}</text>
            </g>
          ))}
        </svg>
      );
    }
    /* ---------- Related Products ---------- */
    case 'related': {
      const rel = [
        { cls: 'a-draw1', cy: 32, name: 'Dress', price: '$45.00', type: 'cuke', path: 'M68 60 C88 48 98 32 112 32' },
        { cls: 'a-draw2', cy: 65, name: 'Handbag', price: '$39.00', type: 'pepper', path: 'M70 70 C90 67 98 65 112 65' },
        { cls: 'a-draw3', cy: 98, name: 'Sneakers', price: '$49.00', type: 'carrot', path: 'M68 80 C88 92 98 98 112 98' },
      ];
      return (
        <svg {...common}>
          {/* current product (highlighted) */}
          <rect x="14" y="46" width="56" height="46" rx="9" fill="#fff" stroke={G} strokeWidth="2.5" />
          <rect x="18" y="40" width="34" height="12" rx="6" fill={G} />
          <text x="35" y="49" textAnchor="middle" fontSize="7" fontWeight="800" fill="#fff" fontFamily="sans-serif">VIEWING</text>
          <Apple cx={40} cy={64} r={12} />
          <text x="42" y="86" textAnchor="middle" fontSize="8.5" fontWeight="700" fill={INK} fontFamily="sans-serif">White Tee</text>
          {/* connectors + related product cards */}
          {rel.map((r) => (
            <g key={r.name}>
              <path className={r.cls} d={r.path} fill="none" stroke={GL} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="60" />
              <rect x="112" y={r.cy - 14} width="72" height="28" rx="7" fill="#fff" stroke={GRAY} strokeWidth="1.5" />
              <rect x="117" y={r.cy - 9} width="18" height="18" rx="4" fill={GL2} />
              <Veg type={r.type} tx={126} ty={r.cy} />
              <text x="140" y={r.cy - 1} fontSize="8.5" fontWeight="700" fill={INK} fontFamily="sans-serif">{r.name}</text>
              <text x="140" y={r.cy + 9} fontSize="7.5" fontWeight="700" fill={G} fontFamily="sans-serif">{r.price}</text>
            </g>
          ))}
          {/* hub node on current product */}
          <circle className="a-pulse" cx="69" cy="69" r="3.5" fill={G} />
        </svg>
      );
    }
    /* ---------- Wishlist / Cart / Compare ---------- */
    case 'cart': {
      return (
        <svg {...common}>
          {/* top counters */}
          <Heart cx={26} cy={22} fill="none" stroke={SALE} />
          <g className="a-actA"><circle cx="32" cy="16" r="5.5" fill={SALE} /><text x="32" y="18.6" textAnchor="middle" fontSize="7" fontWeight="800" fill="#fff" fontFamily="sans-serif">1</text></g>
          <g className="a-actC"><CompareIcon cx={100} cy={22} /><text x="111" y="25" fontSize="8" fontWeight="800" fill={GD} fontFamily="sans-serif">2</text></g>
          <CartIcon cx={172} cy={22} />
          <g className="a-actB"><circle cx="180" cy="15" r="5.5" fill={G} /><text x="180" y="17.6" textAnchor="middle" fontSize="7" fontWeight="800" fill="#fff" fontFamily="sans-serif">1</text></g>

          {/* product card */}
          <rect x="40" y="34" width="120" height="52" rx="10" fill="#fff" stroke={GRAY} strokeWidth="2" />
          <rect x="46" y="40" width="40" height="40" rx="6" fill={GL2} />
          <Apple cx={66} cy={60} r={13} />
          <text x="94" y="56" fontSize="10" fontWeight="700" fill={INK} fontFamily="sans-serif">Cotton Tee</text>
          <text x="94" y="72" fontSize="11" fontWeight="800" fill={G} fontFamily="sans-serif">$19.50</text>

          {/* action buttons */}
          <rect x="16" y="96" width="52" height="22" rx="7" fill="#f3f6f3" stroke={GRAY} strokeWidth="1.4" />
          <Heart cx={27} cy={106} fill="none" stroke={SALE} />
          <g className="a-actA"><Heart cx={27} cy={106} fill={SALE} /></g>
          <text x="36" y="110" fontSize="6.5" fontWeight="700" fill="#4b5563" fontFamily="sans-serif">Wishlist</text>

          <rect x="74" y="96" width="52" height="22" rx="7" fill="#f3f6f3" stroke={GRAY} strokeWidth="1.4" />
          <CartIcon cx={85} cy={106} />
          <text x="94" y="110" fontSize="6.5" fontWeight="700" fill="#4b5563" fontFamily="sans-serif">Cart</text>
          <g className="a-actB"><CheckBadge cx={122} cy={98} fill={G} /></g>

          <rect x="132" y="96" width="52" height="22" rx="7" fill="#f3f6f3" stroke={GRAY} strokeWidth="1.4" />
          <CompareIcon cx={143} cy={106} />
          <text x="152" y="110" fontSize="6.5" fontWeight="700" fill="#4b5563" fontFamily="sans-serif">Compare</text>
          <g className="a-actC"><CheckBadge cx={180} cy={98} fill={G} /></g>

          {/* tapping cursor */}
          <g className="a-vcur3">
            <path d="M40 101l4.5 12 2.6-5.2 5.4-1z" fill={INK} stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
          </g>
        </svg>
      );
    }
    /* ---------- Quick View & Share ---------- */
    case 'quickview': {
      const grid = [
        { x: 16, y: 16, prod: 'apple' }, { x: 104, y: 16, prod: 'pepper' },
        { x: 16, y: 68, prod: 'carrot' }, { x: 104, y: 68, prod: 'cuke' },
      ];
      return (
        <svg {...common}>
          {/* product grid */}
          {grid.map((c, i) => (
            <g key={`${c.x}-${c.y}`}>
              <rect x={c.x} y={c.y} width="80" height="46" rx="7" fill="#fff" stroke={GRAY} strokeWidth="1.5" />
              <rect x={c.x + 6} y={c.y + 6} width="68" height="24" rx="4" fill={GL2} />
              {c.prod === 'apple' ? <Apple cx={c.x + 30} cy={c.y + 18} r={7} /> : <Veg type={c.prod} tx={c.x + 30} ty={c.y + 18} />}
              <rect x={c.x + 6} y={c.y + 35} width="30" height="4" rx="2" fill="#e6ece8" />
              <text x={c.x + 70} y={c.y + 40} textAnchor="end" fontSize="7.5" fontWeight="700" fill={G} fontFamily="sans-serif">$29.00</text>
              <EyeBadge cx={c.x + 70} cy={c.y + 12} active={i === 0} />
            </g>
          ))}

          {/* dim backdrop */}
          <rect className="a-dim" x="6" y="6" width="188" height="118" rx="8" fill="#2b0a17" />

          {/* quick view modal */}
          <g className="a-modal">
            <rect x="42" y="22" width="116" height="86" rx="12" fill="#fff" stroke={GRAY} strokeWidth="1.5" />
            <text x="52" y="37" fontSize="8" fontWeight="800" fill={GD} fontFamily="sans-serif">QUICK VIEW</text>
            <circle cx="149" cy="34" r="7" fill={SOFT} /><path d="M146 31l6 6M152 31l-6 6" stroke="#6b7280" strokeWidth="1.4" strokeLinecap="round" />
            <rect x="50" y="44" width="42" height="42" rx="8" fill={GL2} />
            <Apple cx={71} cy={66} r={14} />
            <text x="100" y="54" fontSize="10" fontWeight="700" fill={INK} fontFamily="sans-serif">Cotton Tee</text>
            <text x="100" y="68" fontSize="8" fill="#9aa6a1" fontFamily="sans-serif" style={{ textDecoration: 'line-through' }}>$45.00</text>
            <text x="100" y="84" fontSize="13" fontWeight="800" fill={G} fontFamily="sans-serif">$31.50</text>
            <rect x="100" y="92" width="50" height="13" rx="4" fill={G} />
            <text x="125" y="101" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#fff" fontFamily="sans-serif">Add to Cart</text>
          </g>

          {/* cursor: clicks the quick-view eye */}
          <g className="a-qcur">
            <path d="M0 0l4.5 12 2.6-5.2 5.4-1z" fill={INK} stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
          </g>
        </svg>
      );
    }
    /* ---------- Advance Tax ---------- */
    case 'tax':
      return (
        <svg {...common}>
          {/* cart summary card */}
          <rect x="18" y="14" width="164" height="102" rx="10" fill="#fff" stroke={GRAY} strokeWidth="2" />
          <text x="30" y="29" fontSize="6.5" fontWeight="700" fill="#9aa6a1" fontFamily="sans-serif" letterSpacing="0.5">CART SUMMARY</text>
          {/* line item */}
          <rect x="30" y="34" width="20" height="20" rx="4" fill={GL2} />
          <Apple cx={40} cy={44} r={7} />
          <text x="56" y="42" fontSize="9" fontWeight="700" fill={INK} fontFamily="sans-serif">T-Shirts</text>
          <text x="56" y="52" fontSize="7" fill="#9aa6a1" fontFamily="sans-serif">$20.00 each</text>
          {/* qty stepper */}
          <rect x="116" y="36" width="14" height="16" rx="4" fill={SOFT} stroke={GRAY} strokeWidth="1.2" />
          <line x1="120" y1="44" x2="126" y2="44" stroke={GD} strokeWidth="1.8" strokeLinecap="round" />
          <TriVal x={143} y={48} vals={['1', '2', '3']} fill={INK} size={11} weight={800} anchor="middle" />
          <g className="a-qtap">
            <rect x="150" y="36" width="14" height="16" rx="4" fill={G} />
            <line x1="157" y1="40" x2="157" y2="48" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="153" y1="44" x2="161" y2="44" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          </g>
          {/* divider */}
          <line x1="30" y1="60" x2="170" y2="60" stroke={GRAY} strokeWidth="1.4" />
          {/* subtotal */}
          <text x="30" y="73" fontSize="8.5" fill="#6b7280" fontFamily="sans-serif">Subtotal</text>
          <TriVal x={170} y={73} vals={['$20.00', '$40.00', '$60.00']} fill={INK} size={9} />
          {/* tax (highlighted) */}
          <rect x="24" y="79" width="152" height="15" rx="4" fill={`${G}12`} />
          <text x="30" y="89" fontSize="8.5" fontWeight="700" fill={GD} fontFamily="sans-serif">Tax (10%)</text>
          <TriVal x={170} y={89} vals={['$2.00', '$4.00', '$6.00']} fill={GD} size={9} weight={800} />
          {/* total */}
          <text x="30" y="108" fontSize="10" fontWeight="800" fill={INK} fontFamily="sans-serif">Total</text>
          <TriVal x={170} y={108} vals={['$22.00', '$44.00', '$66.00']} fill={G} size={12} weight={800} />
        </svg>
      );
    /* ---------- Facebook / Google Login ---------- */
    case 'login':
      return (
        <svg {...common}>
          <circle cx="40" cy="36" r="22" fill={GL2} opacity="0.6" />
          <rect x="50" y="22" width="100" height="90" rx="10" fill="#fff" stroke={GRAY} strokeWidth="2" />
          <circle cx="100" cy="44" r="13" fill={GL2} /><circle cx="100" cy="40" r="5" fill={G} /><path d="M91 53a9 9 0 0118 0z" fill={G} />
          <rect x="66" y="64" width="68" height="9" rx="4.5" fill={SOFT} />
          <rect x="66" y="78" width="68" height="9" rx="4.5" fill={SOFT} />
          <g className="a-bob">
            <rect x="66" y="94" width="31" height="12" rx="3" fill="#fff" stroke={GRAY} strokeWidth="1.6" />
            <text x="81" y="103" textAnchor="middle" fontSize="9" fontWeight="800" fill="#4285F4" fontFamily="sans-serif">G</text>
            <rect x="103" y="94" width="31" height="12" rx="3" fill="#1877F2" />
            <text x="118" y="103" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff" fontFamily="sans-serif">f</text>
          </g>
          <g className="a-pulse">
            <circle cx="150" cy="100" r="11" fill={G} />
            <path d="M145 100l3.5 3.5 6-6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        </svg>
      );
    default:
      return null;
  }
}

export default function Features() {
  return (
    <section id="features" className="pt-16 sm:pt-20 lg:pt-[100px] pb-0 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            25+ Store Features
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-4 leading-tight">
            Everything a Single Vendor eCommerce Store Needs — Built In
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Zaika is a complete single-vendor eCommerce engine. From advanced inventory to coupons, campaigns, and
            search, the features that grow revenue are included — no extra plugins to buy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.name}
              className="group bg-white rounded-2xl border border-[#E5E7EC] overflow-hidden hover:border-transparent hover:shadow-xl transition-all"
            >
              <div
                className="px-5 pt-5"
                style={{ background: `linear-gradient(135deg, ${COLOR}14, #ffffff 80%)` }}
              >
                <div className="rounded-xl overflow-hidden">
                  <Scene name={f.icon} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[16px] font-semibold text-[#0F1112] mb-2">{f.name}</h3>
                <p className="text-[13px] text-[#6b7280] leading-6">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-[#9ca3af] mt-8">
          Plus user profiles with reorder, newsletter, color settings, email notifications &amp; more — all included.
        </p>
      </div>
    </section>
  );
}
