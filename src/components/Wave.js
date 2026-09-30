import styles from './Wave.module.css';

const STEPS = 480;

/** A signal that decays to a flat line: the studio's name, drawn once, statically. */
const PATH = Array.from({ length: STEPS + 1 }, (_, i) => {
  const t = i / STEPS;
  const envelope = Math.pow(1 - t, 1.4);
  const wave = Math.sin(t * 58) * 0.7 + Math.sin(t * 131 + 1.3) * 0.3;
  const y = 50 + wave * 42 * envelope;
  return `${i === 0 ? 'M' : 'L'}${(t * 1200).toFixed(1)} ${y.toFixed(1)}`;
}).join('');

export default function Wave({ className }) {
  return (
    <svg
      className={className ? `${styles.wave} ${className}` : styles.wave}
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATH} fill="none" stroke="currentColor" />
    </svg>
  );
}
