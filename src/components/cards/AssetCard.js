import React from 'react';
import { Button, Badge } from '@site/src/components/ui';
import { StaticField } from '@site/src/components/fx';
import styles from './AssetCard.module.css';

const STORE_BUTTONS = [
  { key: 'cgTrader', brand: 'cgtrader', label: 'CGTRADER' },
  { key: 'blenderMarket', brand: 'blender', label: 'BLENDER MARKET' },
  { key: 'assetStore', brand: 'unity', label: 'ASSET STORE' },
  { key: 'itch', brand: 'itch', label: 'ITCH.IO' },
];

export default function AssetCard({ asset }) {
  return (
    <div className={styles.card}>
      <div className={styles.screen}>
        {asset.thumbnail && (
          <div
            className={styles.shot}
            style={{ backgroundImage: `url(${asset.thumbnail})` }}
            aria-hidden
          />
        )}
        <StaticField className={styles.static} opacity={0.12} />
        <div className={styles.scan} aria-hidden />

        <div className={styles.typeBadge}>
          <Badge tone="accent" broadcast>{asset.type}</Badge>
        </div>
        <span className={styles.feed}>◄► ASSET FEED</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{asset.title}</h3>
        <p className={styles.desc}>{asset.description}</p>

        <div className={styles.priceBar}>
          <span className={styles.priceLabel}>PRICE</span>
          <span className={styles.priceValue}>{asset.price}</span>
        </div>

        <div className={styles.stores}>
          {STORE_BUTTONS.filter((b) => asset[b.key]).map((b) => (
            <Button key={b.key} to={asset[b.key]} brand={b.brand} size="sm">
              {b.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
