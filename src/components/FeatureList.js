import styles from './FeatureList.module.css';

/** Numbered rows: title on the left, description on the right, ruled between. */
export default function FeatureList({ features }) {
  if (!features?.length) return null;
  return (
    <ol className={styles.list}>
      {features.map((feature, i) => (
        <li key={feature.title} className={styles.item}>
          <span className={`${styles.num} micro`} aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className={styles.title}>{feature.title}</h3>
          <p className={styles.text}>{feature.description}</p>
        </li>
      ))}
    </ol>
  );
}
