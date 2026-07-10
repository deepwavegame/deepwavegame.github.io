import React from 'react';
import clsx from 'clsx';
import styles from './Badge.module.css';

const TONES = {
  default: styles.default,
  accent: styles.accent,
  danger: styles.danger,
  warn: styles.warn,
  success: styles.success,
  muted: styles.muted,
};

export default function Badge({ children, tone = 'default', pulse = false, broadcast = false, className, style }) {
  return (
    <span
      className={clsx(
        styles.badge,
        broadcast && styles.bc,
        TONES[tone] || TONES.default,
        pulse && styles.pulse,
        className,
      )}
      style={style}
    >
      {children}
    </span>
  );
}

export function StatusBadge({ status, broadcast = true }) {
  const map = {
    released: { tone: 'success', label: 'RELEASED' },
    development: { tone: 'warn', label: 'IN DEVELOPMENT', pulse: true },
    classified: { tone: 'danger', label: 'CLASSIFIED' },
    coming_soon: { tone: 'accent', label: 'COMING SOON', pulse: true },
  };
  const cfg = map[status] || { tone: 'default', label: status };
  return <Badge tone={cfg.tone} pulse={cfg.pulse} broadcast={broadcast}>{cfg.label}</Badge>;
}
