import React from 'react';
import Layout from '@theme/Layout';
import styles from './legal.module.css';

export default function Privacy() {
  return (
    <Layout title="Privacy Policy">
      <div className={styles.wrap}>
        <div className={styles.window}>
          <div className={styles.bar}>
            <span className={styles.barDot} />
            PRIVACY.TXT
            <span className={styles.barRight}>— □ ✕</span>
          </div>
          <main className={styles.body}>
            <p className={styles.kicker}>// TRANSMISSION_POLICY</p>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.stamp}>Last updated: March 24, 2026</p>
            <p>This privacy policy describes how WAVE0084 STUDIO collects and uses your information.</p>
            <section>
              <h2>1. Information Collection</h2>
              <p>We do not collect personal data on this portfolio website.</p>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
}
