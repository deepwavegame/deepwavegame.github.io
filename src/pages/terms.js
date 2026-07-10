import React from 'react';
import Layout from '@theme/Layout';
import styles from './legal.module.css';

export default function Terms() {
  return (
    <Layout title="Terms of Service">
      <div className={styles.wrap}>
        <div className={styles.window}>
          <div className={styles.bar}>
            <span className={styles.barDot} />
            TERMS.TXT
            <span className={styles.barRight}>— □ ✕</span>
          </div>
          <main className={styles.body}>
            <p className={styles.kicker}>// OPERATING_AGREEMENT</p>
            <h1 className={styles.title}>Terms of Service</h1>
            <p className={styles.stamp}>Last updated: March 24, 2026</p>
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing wave0084.com, you agree to these terms.</p>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
}
