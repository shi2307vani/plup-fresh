import type { CSSProperties, ReactNode } from "react";
import { bottle, fruit, type Juice } from "@/site/content";

/**
 * One juice bottle: a pixel-aligned colour still (all share one cut-out mask), with the brand + flavour
 * printed onto the blank kraft label band in code (label sits at 46.5–77.5 % of the bottle height).
 */
export function Bottle({
  juice,
  word,
  className = "",
  style,
  eager,
  labelOnly,
}: {
  juice: Juice | "empty" | "glass";
  word?: string;
  className?: string;
  style?: CSSProperties;
  eager?: boolean;
  /** only the printed label (no bottle still): laid over stacked stills */
  labelOnly?: boolean;
}) {
  return (
    <span className={`pf-bottle ${className}`} style={style}>
      {!labelOnly && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={bottle(juice)} alt="" draggable={false} loading={eager === false ? "lazy" : "eager"} decoding="async" />
      )}
      {word && (
        <span className="pf-label" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/adler/logo.png" alt="" style={{ width: "30cqw", height: "auto", margin: "0 auto 1.5cqw", display: "block" }} />
          <span className="pf-label-brand">ADLER ELIXIRS</span>
          <span className="pf-label-word">{word}</span>
          <span className="pf-label-ml">250 ml · functional elixir</span>
        </span>
      )}
    </span>
  );
}

export function Fruit({ name, className = "", style }: { name: string; className?: string; style?: CSSProperties }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={fruit(name)} alt="" className={`pf-fruit ${className}`} style={style} draggable={false} decoding="async" />;
}

/** Rubber-stamp label (ink border, slight tilt). */
export function Stamp({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <span className={`pf-stamp ${className}`} style={style}>
      {children}
    </span>
  );
}

/** Thin wooden crate slat where paper meets a colour band (S7 seam). */
export function Slat({ className = "" }: { className?: string }) {
  return <div className={`pf-slat ${className}`} aria-hidden />;
}

export function Arrow() {
  return (
    <svg className="pf-arrow" width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
      <path d="M1 6h15M11 1l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Soft paint blob (hero, product disc accents). */
export function Blob({ color, seed = 0, className = "", style }: { color: string; seed?: number; className?: string; style?: CSSProperties }) {
  const paths = [
    "M421 63c75 47 127 141 112 233-15 93-97 181-196 204S120 482 74 401 21 214 77 138 346 16 421 63Z",
    "M452 112c58 68 70 175 21 252-48 77-157 124-255 108S29 365 19 272 70 81 160 40s234 4 292 72Z",
    "M398 49c86 33 150 128 135 219-14 91-107 177-207 196S105 431 62 351 14 162 79 95 312 16 398 49Z",
  ];
  return (
    <svg viewBox="0 0 560 520" className={`pf-blob ${className}`} style={style} aria-hidden>
      <path d={paths[seed % paths.length]} fill={color} />
    </svg>
  );
}

/**
 * A price / number whose digits roll to the new value (transform only, no layout jump). Each digit cell is sized to
 * its final digit (lesson 73) and spaces stay non-breaking (lesson 86). ?static=1 simply shows the value.
 */
export function RollNumber({ value, className = "" }: { value: string; className?: string }) {
  const chars = value.replace(/ /g, " ").split("");
  return (
    <span className={`pf-roll ${className}`} aria-label={value}>
      {chars.map((ch, i) =>
        /\d/.test(ch) ? (
          <span key={`${chars.length}-${i}`} className="pf-roll-cell" aria-hidden>
            <span className="pf-roll-ghost">{ch}</span>
            <span className="pf-roll-strip" style={{ transform: `translateY(${-Number(ch) * 10}%)` }}>
              {"0123456789".split("").map((d) => (
                <span key={d}>{d}</span>
              ))}
            </span>
          </span>
        ) : (
          <span key={`${chars.length}-${i}`} aria-hidden>
            {ch}
          </span>
        ),
      )}
    </span>
  );
}
