import clsx from 'clsx';
import styles from './SpecList.module.css';

/** Label / value pairs as a definition list. Falsy items are skipped. */
export default function SpecList({ items, className }) {
  return (
    <dl className={clsx(styles.list, className)}>
      {items.filter(Boolean).map(([label, value]) => (
        <div key={label} className={styles.item}>
          <dt className="micro">{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
