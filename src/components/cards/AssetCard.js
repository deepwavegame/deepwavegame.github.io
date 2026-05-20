import React from 'react';
import Translate from '@docusaurus/Translate';
import { Card, CardBody, CardMedia, Button, Badge } from '@site/src/components/ui';
import styles from './AssetCard.module.css';

const STORE_BUTTONS = [
  { key: 'cgTrader', brand: 'cgtrader', label: 'CGTRADER' },
  { key: 'blenderMarket', brand: 'blender', label: 'BLENDER MARKET' },
  { key: 'assetStore', brand: 'unity', label: 'ASSET STORE' },
  { key: 'itch', brand: 'itch', label: 'ITCH.IO' },
];

export default function AssetCard({ asset }) {
  return (
    <Card flush className={styles.card}>
      <div className={styles.typeBadge}>
        <Badge tone="accent">{asset.type}</Badge>
      </div>

      <CardMedia src={asset.thumbnail} height={220} overlay={false}>
        <div className={styles.fade} />
      </CardMedia>

      <CardBody>
        <h3 className={styles.title}>{asset.title}</h3>
        <p className={styles.desc}>{asset.description}</p>

        <div className={styles.priceBar}>
          <span className={styles.priceLabel}>
            <Translate id="assets.common.price">PRICE</Translate>
          </span>
          <span className={styles.priceValue}>{asset.price}</span>
        </div>

        <div className={styles.stores}>
          {STORE_BUTTONS.filter(b => asset[b.key]).map((b) => (
            <Button key={b.key} to={asset[b.key]} brand={b.brand} size="sm">
              {b.label}
            </Button>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
