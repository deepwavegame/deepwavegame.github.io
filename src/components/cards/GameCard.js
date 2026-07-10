import React from 'react';
import clsx from 'clsx';
import { Button, StatusBadge } from '@site/src/components/ui';
import { StaticField, GlitchText } from '@site/src/components/fx';
import styles from './GameCard.module.css';

export default function GameCard({ game, channel = 'CH.00' }) {
  const denied = game.status === 'classified';
  const dev = game.status === 'development';
  const isLink = game.link && game.link !== '#';
  const displayTitle = (typeof game.title === 'string' ? game.title : game.id || '')
    .toUpperCase()
    .replace(/-/g, ' ');

  return (
    <div className={clsx(styles.card, denied && styles.cardDenied)}>
      <div className={styles.screen}>
        {game.thumbnail && (
          <div
            className={clsx(styles.shot, denied && styles.classified)}
            style={{ backgroundImage: `url(${game.thumbnail})` }}
            aria-hidden
          />
        )}
        <StaticField className={styles.static} opacity={denied ? 0.28 : 0.12} />
        <div className={styles.scan} aria-hidden />

        <span className={styles.chNo}>{channel}</span>
        <span className={styles.rec}>
          <span className={styles.recDot} /> {dev ? 'REC' : denied ? 'SCRAMBLED' : 'LIVE'}
        </span>
        <span className={styles.badge}>
          <StatusBadge status={game.status} />
        </span>
        <span className={styles.feed}>{game.engine || 'SIGNAL FEED'}</span>

        <GlitchText text={displayTitle} className={styles.ghost} scramble={!denied} />
        {!game.thumbnail && <span className={styles.noSignal}>[ NO_SIGNAL ]</span>}
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          {game.year && <span className={styles.metaItem}>{game.year}</span>}
          {game.genre && <span className={styles.metaItem}>{game.genre}</span>}
          {game.engine && <span className={styles.metaItem}>{game.engine}</span>}
        </div>

        <h3 className={styles.title}>
          {typeof game.title === 'string' ? game.title : displayTitle}
        </h3>
        <p className={styles.desc}>{game.description}</p>

        <div className={styles.actions}>
          <Button
            to={game.link}
            variant={isLink ? 'bcPrimary' : 'bc'}
            block
            size="md"
            disabled={!isLink}
          >
            {isLink ? 'DECODE TRANSMISSION ▸' : 'ACCESS DENIED ✕'}
          </Button>
        </div>
      </div>
    </div>
  );
}
