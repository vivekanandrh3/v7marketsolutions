'use client';

import { useId, useState, type ReactNode } from 'react';
import styles from './market-card.module.css';

type Props = { name: string; description: string; lesson: string; icon: ReactNode };

export function MarketCard({ name, description, lesson, icon }: Props) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();

  return (
    <button type="button" className={styles.card} aria-expanded={expanded}
      aria-label={name} aria-controls={id + '-lesson'}
      aria-describedby={id + (expanded ? '-lesson' : '-summary')}
      onClick={() => setExpanded(value => !value)}>
      <span className={styles.rotor}>
        <span className={styles.face} aria-hidden={expanded}>
          <span className={styles.icon}>{icon}</span>
          <span className={styles.title}>{name}</span>
          <span id={id + '-summary'}>{description}</span>
          <span className={styles.action}>Explore concept <span aria-hidden="true">↻</span></span>
        </span>
        <span className={styles.face + ' ' + styles.back} aria-hidden={!expanded}>
          <span className={styles.title}>{name}</span>
          <span id={id + '-lesson'}>{lesson}</span>
          <span className={styles.action}>Back to overview <span aria-hidden="true">↶</span></span>
        </span>
      </span>
    </button>
  );
}
