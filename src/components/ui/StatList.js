import React from 'react';
import styles from './StatList.module.css';

export default function StatList({ items = [] }) {
  return (
    <ul className={styles.list}>
      {items.map((it, i) => (
        <li key={i} className={styles.item}>
          <span className={styles.label}>{it.label}</span>
          <span className={styles.value}>{it.value}</span>
        </li>
      ))}
    </ul>
  );
}
