import React from 'react';
import clsx from 'clsx';
import styles from './FilterBar.module.css';

export default function FilterBar({ options = [], value, onChange }) {
  return (
    <div className={styles.bar}>
      {options.map((opt) => {
        const v = typeof opt === 'string' ? opt : opt.value;
        const label = typeof opt === 'string' ? opt : opt.label;
        const active = v === value;
        return (
          <button
            key={v}
            type="button"
            className={clsx(styles.chip, active && styles.active)}
            onClick={() => onChange && onChange(v)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
