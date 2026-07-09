import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './fx.module.css';

const GLYPHS = '█▓▒░#@%&/\\<>[]{}=+*!?0123456789ABCDEFXYZ§Ø×¤';
const prefersReduce = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const pad = (n, len = 2) => String(n).padStart(len, '0');

/* Reveal-on-scroll hook — adds a boolean once the element enters the viewport. */
export function useReveal(threshold = 0.25) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, shown];
}

/* Glitching, RGB-split text that periodically scrambles its characters. */
export function GlitchText({ text, as = 'span', className, scramble = true, ...rest }) {
  const Tag = as;
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    setDisplay(text);
    if (!scramble || prefersReduce()) return undefined;
    let stepTimer;
    let running = false;
    const burst = () => {
      if (running) return;
      running = true;
      let i = 0;
      const steps = 9;
      const tick = () => {
        const scrambled = text
          .split('')
          .map((ch) =>
            ch === ' '
              ? ' '
              : Math.random() < 0.55 && i < steps
              ? GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
              : ch
          )
          .join('');
        setDisplay(scrambled);
        i += 1;
        if (i <= steps) stepTimer = setTimeout(tick, 40);
        else {
          setDisplay(text);
          running = false;
        }
      };
      tick();
    };
    const loop = setInterval(burst, 3200 + Math.random() * 2600);
    return () => {
      clearInterval(loop);
      clearTimeout(stepTimer);
    };
  }, [text, scramble]);

  return (
    <Tag className={clsx(styles.glitch, className)} data-text={text} {...rest}>
      {display}
    </Tag>
  );
}

/* Typewriter line that types itself out when scrolled into view. */
export function TypeLine({ text, speed = 16, startDelay = 250, className, caret = true }) {
  const [ref, shown] = useReveal(0.4);
  const [out, setOut] = useState(text);
  const [done, setDone] = useState(true);

  useEffect(() => {
    if (!shown) return undefined;
    if (prefersReduce()) {
      setOut(text);
      return undefined;
    }
    setOut('');
    setDone(false);
    let i = 0;
    let interval;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [shown, text, speed, startDelay]);

  return (
    <span ref={ref} className={className}>
      {out}
      {caret && <span className={clsx(styles.caret, done && styles.caretBlink)}>▊</span>}
    </span>
  );
}

/* Count-up number that animates 0→value on reveal. Non-numeric values render as-is. */
export function CountUp({ value, duration = 1400, className }) {
  const str = String(value);
  const numeric = /^\d+$/.test(str);
  const [ref, shown] = useReveal(0.5);
  const [n, setN] = useState(numeric ? Number(str) : null);

  useEffect(() => {
    if (!numeric || !shown) return undefined;
    if (prefersReduce()) {
      setN(Number(str));
      return undefined;
    }
    let raf;
    let startTs;
    const target = Number(str);
    setN(0);
    const step = (ts) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      setN(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [shown, numeric, str, duration]);

  if (!numeric) return <span ref={ref} className={className}>{value}</span>;
  return <span ref={ref} className={className}>{pad(n, str.length)}</span>;
}

/* Blinking REC indicator + a live running timecode, camcorder-style. */
export function Rec({ className }) {
  const [sec, setSec] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSec((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const tc = `${pad(Math.floor(sec / 3600) % 99)}:${pad(Math.floor(sec / 60) % 60)}:${pad(sec % 60)}`;
  return (
    <span className={clsx(styles.rec, className)}>
      <span className={styles.recDot} />
      REC
      <span className={styles.tc}>{tc}</span>
    </span>
  );
}

/* Animated equaliser / signal-strength bars. */
export function SignalBars({ count = 5, className }) {
  return (
    <span className={clsx(styles.bars, className)} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={styles.bar} style={{ '--i': i }} />
      ))}
    </span>
  );
}

/* Infinite scrolling emergency-broadcast ticker. */
export function Ticker({ items, className, tone = 'alert' }) {
  const seq = [...items, ...items];
  return (
    <div className={clsx(styles.ticker, styles[`ticker-${tone}`], className)} role="marquee" aria-hidden>
      <div className={styles.tickerTrack}>
        {seq.map((it, i) => (
          <span key={i} className={styles.tickerItem}>
            <span className={styles.tickerMark}>◄►</span>
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

/* SMPTE-style "PLEASE STAND BY" test card. */
export function TestCard({ label = 'PLEASE STAND BY', sub, className }) {
  return (
    <div className={clsx(styles.testcard, className)} aria-hidden>
      <div className={styles.bars7}>
        <span /><span /><span /><span /><span /><span /><span />
      </div>
      <div className={styles.testcardPlate}>
        <span className={styles.testcardLabel}>{label}</span>
        {sub && <span className={styles.testcardSub}>{sub}</span>}
      </div>
      <div className={styles.bars7Low}>
        <span /><span /><span /><span /><span /><span /><span />
      </div>
    </div>
  );
}

/* A field of animated TV static — decorative screen texture. */
export function StaticField({ className, opacity = 0.1 }) {
  return <div className={clsx(styles.static, className)} style={{ opacity }} aria-hidden />;
}

/* CRT screen overlays: scanlines, rolling tracking bar, vignette, glitch flashes. */
export function ScreenFx({ rolling = true, flicker = true }) {
  return (
    <>
      <div className={styles.scanlines} aria-hidden />
      {rolling && <div className={styles.roll} aria-hidden />}
      {flicker && <div className={styles.flicker} aria-hidden />}
      <div className={styles.vignette} aria-hidden />
    </>
  );
}
