import React from 'react';
import clsx from 'clsx';
import styles from './Kicker.module.css';

/**
 * Mono "// LABEL" eyebrow used across marketing pages and tool panels.
 *
 * @param line   false | 'trailing' (rule after label) | 'both' (flanking rules)
 * @param cross  prepend a small marker glyph
 * @param tone   'accent' (navy) | 'muted' (grey)
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
          &raquo;
        </span>
      )}
      <span className={styles.label}>{children}</span>
      {(line === 'trailing' || line === 'both') && <span className={styles.rule} />}
    </div>
  );
}
