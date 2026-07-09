import React from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

export default function Card({
  children,
  className,
  hoverable = true,
  bordered = true,
  flush = false,
  accent = false,
  style,
  ...rest
}) {
  return (
    <div
      className={clsx(
        styles.card,
        hoverable && styles.hoverable,
        bordered && styles.bordered,
        flush && styles.flush,
        accent && styles.accent,
        className
      )}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardBody({ children, className, style }) {
  return <div className={clsx(styles.body, className)} style={style}>{children}</div>;
}

export function CardMedia({ src, height = 220, overlay = true, children, className, style }) {
  return (
    <div
      className={clsx(styles.media, className)}
      style={{
        height,
        backgroundImage: src
          ? `${overlay ? 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.55)),' : ''} url(${src})`
          : 'none',
        backgroundColor: src ? undefined : 'var(--c-bg-2)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
