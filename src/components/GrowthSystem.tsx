import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";

/* ────────────────────────────────────────────────────────────
   ZEAL GROWTH SYSTEM / 01
   A conceptual framework visualisation. Deliberately labelled as
   a model — never as client performance data.
   ──────────────────────────────────────────────────────────── */

const SERIES = [
  { x: 40, y: 336 },
  { x: 96, y: 322 },
  { x: 150, y: 330 },
  { x: 205, y: 292 },
  { x: 258, y: 300 },
  { x: 312, y: 250 },
  { x: 366, y: 262 },
  { x: 420, y: 196 },
  { x: 474, y: 176 },
  { x: 528, y: 118 },
  { x: 588, y: 74 },
];

const BASE = [
  { x: 40, y: 344 },
  { x: 150, y: 340 },
  { x: 258, y: 334 },
  { x: 366, y: 326 },
  { x: 474, y: 318 },
  { x: 588, y: 306 },
];

const toPath = (pts: { x: number; y: number }[]) => pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${p.y}`).join(" ");

const RAIL = [
  { k: "STRATEGY", v: 0.92 },
  { k: "CREATIVE", v: 0.78 },
  { k: "PERFORMANCE", v: 0.86 },
  { k: "TECHNOLOGY", v: 0.68 },
];

const STAGES = [
  { n: "S1", k: "ATTENTION", d: "Reach & brand presence" },
  { n: "S2", k: "INTEREST", d: "Content & engagement" },
  { n: "S3", k: "INTENT", d: "Traffic & qualified leads" },
  { n: "S4", k: "CONVERSION", d: "Pipeline & revenue" },
];

export function GrowthSystemVisual({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const areaPath = `${toPath(SERIES)} L588 372 L40 372 Z`;

  return (
    <div
      ref={ref}
      className={cn(
        "relative border border-white/12 bg-ink-950/80",
        inView && "is-in",
        className,
      )}
    >
      {/* frame header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 md:px-5">
        <div className="flex items-center gap-3">
          <span className="label-mono text-streak-400">GROWTH SYSTEM / 01</span>
          <span aria-hidden="true" className="hidden h-px w-6 bg-white/20 sm:block" />
          <span className="label-mono hidden text-white/40 sm:block">CONCEPTUAL MODEL</span>
        </div>
        <span className="label-mono flex items-center gap-2 text-white/40">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-volt-400" />
            <span className="absolute inset-0 animate-ping rounded-full bg-volt-400/70 motion-reduce:hidden" />
          </span>
          LIVE FRAMEWORK
        </span>
      </div>

      <div className="grid md:grid-cols-12">
        {/* chart */}
        <div className="relative border-white/10 md:col-span-8 md:border-r">
          <svg
            viewBox="0 0 628 400"
            className="block w-full"
            role="img"
            aria-label="Conceptual ZEAL growth framework chart showing attention, intent and conversion moving upward along a momentum trajectory marked by an orange diagonal streak."
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="zs-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2A5BFF" stopOpacity="0.34" />
                <stop offset="100%" stopColor="#2A5BFF" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="zs-streak" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#FF5A1F" stopOpacity="0.05" />
                <stop offset="45%" stopColor="#FF5A1F" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#FF7C4D" stopOpacity="0.15" />
              </linearGradient>
              <pattern id="zs-grid" width="58" height="58" patternUnits="userSpaceOnUse">
                <path d="M58 0H0V58" fill="none" stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
              </pattern>
            </defs>

            <rect x="0" y="0" width="628" height="400" fill="url(#zs-grid)" />

            {/* y axis qualitative ticks */}
            {[372, 300, 228, 156, 84].map((y, i) => (
              <g key={y}>
                <line x1="40" y1={y} x2="596" y2={y} stroke="rgba(255,255,255,0.06)" />
                <text
                  x="34"
                  y={y + 3}
                  textAnchor="end"
                  fill="rgba(255,255,255,0.28)"
                  fontSize="9"
                  fontFamily="IBM Plex Mono, monospace"
                >
                  {`0${4 - i}`}
                </text>
              </g>
            ))}

            {/* baseline: unoptimized state */}
            <path
              d={toPath(BASE)}
              fill="none"
              stroke="rgba(255,255,255,0.26)"
              strokeWidth="1.2"
              strokeDasharray="4 5"
            />
            <text
              x="588"
              y="296"
              textAnchor="end"
              fill="rgba(255,255,255,0.3)"
              fontSize="8.5"
              fontFamily="IBM Plex Mono, monospace"
              letterSpacing="1.4"
            >
              UNTREATED BASELINE
            </text>

            {/* area + growth line */}
            <path d={areaPath} fill="url(#zs-area)" opacity={inView ? 1 : 0} style={{ transition: "opacity 1.2s ease 0.7s" }} />
            <path
              d={toPath(SERIES)}
              fill="none"
              stroke="#4C7BFF"
              strokeWidth="2"
              strokeLinejoin="round"
              className="draw-path"
            />

            {/* THE MOMENTUM STREAK — cuts diagonally through the chart */}
            <path
              d="M120 352 L470 60"
              stroke="url(#zs-streak)"
              strokeWidth="7"
              strokeLinecap="butt"
              opacity={inView ? 0.95 : 0}
              style={{ transition: "opacity 0.9s ease 0.5s" }}
            />
            <path d="M120 352 L470 60" stroke="#FF5A1F" strokeWidth="1" opacity="0.5" />

            {/* phase markers */}
            {[
              { x: 312, label: "EXECUTE", y: 232 },
              { x: 474, label: "OPTIMIZE", y: 148 },
            ].map((m) => (
              <g key={m.label}>
                <line
                  x1={m.x}
                  y1={m.y}
                  x2={m.x}
                  y2={372}
                  stroke="rgba(255,255,255,0.14)"
                  strokeDasharray="2 4"
                />
                <text
                  x={m.x + 6}
                  y={372 - 6}
                  fill="rgba(255,255,255,0.32)"
                  fontSize="8.5"
                  fontFamily="IBM Plex Mono, monospace"
                  letterSpacing="1.4"
                >
                  {m.label}
                </text>
              </g>
            ))}

            {/* data nodes */}
            {[
              { p: SERIES[2], tag: "ATTENTION" },
              { p: SERIES[6], tag: "INTENT" },
              { p: SERIES[8], tag: "CONVERSION" },
              { p: SERIES[10], tag: "MOMENTUM" },
            ].map(({ p, tag }) => (
              <g key={tag}>
                <circle cx={p.x} cy={p.y} r="3.4" fill="#080B10" stroke="#4C7BFF" strokeWidth="1.6" />
                <text
                  x={p.x - 6}
                  y={p.y - 10}
                  textAnchor="end"
                  fill="rgba(255,255,255,0.62)"
                  fontSize="8.5"
                  fontFamily="IBM Plex Mono, monospace"
                  letterSpacing="1.3"
                >
                  {tag}
                </text>
              </g>
            ))}

            <circle cx={SERIES[10].x} cy={SERIES[10].y} r="6" fill="none" stroke="#FF5A1F" strokeWidth="1.2" opacity="0.8" />
            <text
              x="44"
              y="390"
              fill="rgba(255,255,255,0.26)"
              fontSize="8.5"
              fontFamily="IBM Plex Mono, monospace"
              letterSpacing="1.4"
            >
              TIME →
            </text>
          </svg>
        </div>

        {/* right rail */}
        <div className="flex flex-col justify-between gap-6 p-5 md:col-span-4">
          <div>
            <p className="label-mono text-white/35">SYSTEM LAYERS</p>
            <ul className="mt-4 space-y-4">
              {RAIL.map((r, i) => (
                <li key={r.k}>
                  <div className="flex items-baseline justify-between">
                    <span className="label-mono text-white/70">{r.k}</span>
                    <span className="font-mono text-[0.65rem] text-white/30">
                      L{i + 1}
                    </span>
                  </div>
                  <div className="mt-2 h-[3px] w-full bg-white/10">
                    <div
                      className={cn("h-full", i === 1 ? "bg-streak-500" : "bg-volt-500")}
                      style={{
                        width: inView ? `${r.v * 100}%` : "0%",
                        transition: `width 1.2s cubic-bezier(.22,1,.36,1) ${0.3 + i * 0.12}s`,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 pt-4">
            <p className="label-mono text-white/35">FEEDBACK LOOP</p>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-white/55">
              Data returns to strategy every cycle. The system compounds instead of restarting.
            </p>
            <div className="mt-4 flex items-center gap-2 label-mono text-white/40">
              <span className="text-streak-400">MEASURE</span>
              <span aria-hidden="true">→</span>
              <span>LEARN</span>
              <span aria-hidden="true">→</span>
              <span>REBUILD</span>
            </div>
          </div>
        </div>
      </div>

      {/* stage strip */}
      <div className="grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
        {STAGES.map((s, i) => (
          <div
            key={s.k}
            className={cn(
              "px-4 py-3.5 md:px-5",
              i < STAGES.length - 1 && "border-white/10 md:border-r",
              i === 0 && "border-b border-white/10 md:border-b-0",
              i === 1 && "border-b border-white/10 md:border-b-0",
              i === 1 && "md:border-r",
            )}
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-[0.62rem] text-streak-400">{s.n}</span>
              <span className="label-mono text-white/70">{s.k}</span>
            </div>
            <p className="mt-1.5 text-[0.78rem] leading-snug text-white/40">{s.d}</p>
          </div>
        ))}
      </div>

      <p className="border-t border-white/10 px-4 py-2.5 font-mono text-[0.6rem] tracking-[0.14em] text-white/25 uppercase md:px-5">
        Illustrative framework · not a client result
      </p>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   SAMPLE PERFORMANCE VIEW — analytics section
   ──────────────────────────────────────────────────────────── */
const METRICS = [
  { k: "REACH", v: "—", note: "Impressions / accounts" },
  { k: "ENGAGEMENT", v: "—", note: "Rate across channels" },
  { k: "TRAFFIC", v: "—", note: "Sessions & quality mix" },
  { k: "CONVERSION RATE", v: "—", note: "Funnel step efficiency" },
  { k: "ROAS", v: "—", note: "Return on ad spend" },
  { k: "ACQUISITION COST", v: "—", note: "Blended & per channel" },
];

const BARS = [
  { k: "PAID", a: 0.86, b: 0.52 },
  { k: "ORGANIC", a: 0.64, b: 0.7 },
  { k: "SOCIAL", a: 0.72, b: 0.4 },
  { k: "REFERRAL", a: 0.34, b: 0.24 },
  { k: "DIRECT", a: 0.48, b: 0.36 },
];

export function SamplePerformanceView({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("is-in", className)}>
      <div className="border border-mist-200 bg-white">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-mist-200 bg-mist-50 px-4 py-3 md:px-5">
          <span className="label-mono text-streak-600">SAMPLE PERFORMANCE VIEW</span>
          <span className="label-mono text-ink-300">ILLUSTRATIVE DASHBOARD</span>
        </div>

        <div className="grid md:grid-cols-12">
          <div className="border-mist-200 p-5 md:col-span-5 md:border-r">
            <p className="label-mono text-ink-400">CAMPAIGN PERFORMANCE</p>
            <ul className="mt-5 space-y-5">
              {BARS.map((b, i) => (
                <li key={b.k}>
                  <div className="flex items-baseline justify-between">
                    <span className="label-mono text-ink-700">{b.k}</span>
                    <span className="font-mono text-[0.62rem] text-ink-300">
                      {inView ? "INDEXED" : ""}
                    </span>
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="h-2 w-full bg-mist-100">
                      <div
                        className="h-full bg-volt-500"
                        style={{
                          width: inView ? `${b.a * 100}%` : "0%",
                          transition: `width 1s cubic-bezier(.22,1,.36,1) ${i * 0.08}s`,
                        }}
                      />
                    </div>
                    <div className="h-2 w-full bg-mist-100">
                      <div
                        className="h-full bg-streak-500"
                        style={{
                          width: inView ? `${b.b * 100}%` : "0%",
                          transition: `width 1s cubic-bezier(.22,1,.36,1) ${0.2 + i * 0.08}s`,
                        }}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 border-t border-mist-200 pt-4">
              <span className="label-mono flex items-center gap-2 text-ink-400">
                <span className="h-2 w-2 bg-volt-500" aria-hidden="true" /> Current period
              </span>
              <span className="label-mono flex items-center gap-2 text-ink-400">
                <span className="h-2 w-2 bg-streak-500" aria-hidden="true" /> Previous period
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:col-span-7 md:grid-cols-3">
            {METRICS.map((m, i) => (
              <div
                key={m.k}
                className={cn(
                  "border-mist-200 p-5",
                  i % 3 !== 2 && "md:border-r",
                  i % 2 === 0 && "border-r md:border-r",
                  i < 3 && "border-b",
                  i >= 3 && "border-b md:border-b-0",
                  i === 3 && "md:border-b",
                )}
              >
                <p className="label-mono text-ink-400">{m.k}</p>
                <p className="mt-3 font-mono text-[1.6rem] leading-none text-ink-900">
                  <span className="text-ink-300">·</span>··
                </p>
                <p className="mt-3 text-[0.76rem] leading-snug text-ink-300">{m.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-mist-200 bg-mist-50 px-4 py-3 md:px-5">
          <p className="font-mono text-[0.62rem] leading-relaxed tracking-[0.12em] text-ink-300 uppercase">
            Structure shown for illustration only. Values populate from your live accounts once an
            engagement begins — ZEAL does not publish historical client performance data.
          </p>
        </div>
      </div>
    </div>
  );
}
