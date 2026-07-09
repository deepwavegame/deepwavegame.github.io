import React from 'react';
import { Card, CardBody, CardMedia, Button, StatusBadge } from '@site/src/components/ui';
import styles from './GameCard.module.css';

export default function GameCard({ game }) {
  const classified = game.status === 'classified' || game.status === 'development';

  return (
    <Card flush className={styles.card}>
      <div className={styles.badgeWrap}>
        <StatusBadge status={game.status} />
      </div>

      <CardMedia src={game.thumbnail} height={300} className={classified ? styles.classified : ''}>
        <div className={styles.titleOverlay}>
          <h2 className={styles.gameTitle}>
            {(typeof game.title === 'string' ? game.title : game.id).toUpperCase().replace(/-/g, ' ')}
          </h2>
        </div>
        {!game.thumbnail && (
          <div className={styles.noSignal}>
            <span>[ NO_SIGNAL ]</span>
          </div>
        )}
      </CardMedia>

      <CardBody>
        <div className={styles.meta}>
          {game.year && <span className={styles.metaItem}>{game.year}</span>}
          {game.genre && <span className={styles.metaItem}>{game.genre}</span>}
          {game.engine && <span className={styles.metaItem}>{game.engine}</span>}
        </div>

        <h3 className={styles.title}>{game.title}</h3>
        <p className={styles.desc}>{game.description}</p>

        <div className={styles.actions}>
          <Button to={game.link} variant="primary" block size="md">
            VIEW PROJECT
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
