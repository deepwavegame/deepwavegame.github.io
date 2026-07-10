import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './Button.module.css';

const VARIANTS = ['default', 'primary', 'ghost', 'danger', 'outline', 'bc', 'bcPrimary'];
const SIZES = ['sm', 'md', 'lg'];
const BRANDS = ['steam', 'itch', 'unity', 'blender', 'cgtrader'];

export default function Button({
  children,
  to,
  href,
  variant = 'default',
  size = 'md',
  brand,
  block = false,
  disabled = false,
  dashed = false,
  className,
  style,
  onClick,
  icon,
  ...rest
}) {
  const cls = clsx(
    styles.btn,
    styles[`size-${SIZES.includes(size) ? size : 'md'}`],
    styles[`variant-${VARIANTS.includes(variant) ? variant : 'default'}`],
    brand && BRANDS.includes(brand) && `brand-${brand}`,
    block && styles.block,
    disabled && styles.disabled,
    dashed && styles.dashed,
    className
  );

  const finalProps = {
    className: cls,
    style,
    onClick: disabled
      ? (e) => { e.preventDefault(); onClick && onClick(e); }
      : onClick,
    ...rest,
  };

  const content = (
    <>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{children}</span>
    </>
  );

  if (to) return <Link to={disabled ? '#' : to} {...finalProps}>{content}</Link>;
  if (href) return <a href={disabled ? '#' : href} {...finalProps}>{content}</a>;
  return <button type="button" {...finalProps}>{content}</button>;
}
