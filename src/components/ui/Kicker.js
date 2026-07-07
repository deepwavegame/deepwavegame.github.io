import React from 'react';
import clsx from 'clsx';
import styles from './Kicker.module.css';

/**
 * Mono "// LABEL" eyebrow used across marketing pages and tool panels.
 *
 * Replaces the several hand-rolled inline "kicker + cross + gradient rule"
 * blocks that were duplicated in the homepage, page headers and tool views.
 *
 * @param line   false | 'trailing' (rule after label) | 'both' (flanking rules)
 * @param cross  prepend a latin-cross glyph
 * @param tone   'accent' (arterial red) | 'muted' (faint bone)
 * @param align  'left' | 'center'
 */
export default function Kicker({
  children,
  line = false,
  cross = false,
  tone = 'accent',
  align = 'left',
  className,
}) {
  return (
    <div
      className={clsx(
        styles.kicker,
        styles[`tone-${tone}`],
        styles[`align-${align}`],
        className,
      )}
    >
      {line === 'both' && <span className={styles.rule} />}
      {cross && (
        <span className={styles.cross} aria-hidden>
          &#10013;
        </span>
      )}
      <span className={styles.label}>{children}</span>
      {(line === 'trailing' || line === 'both') && <span className={styles.rule} />}
    </div>
  );
}
