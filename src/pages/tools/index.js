import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import { PageHeader, Section } from '@site/src/components/ui';
import { ToolCard } from '@site/src/components/cards';
import { Ticker, SignalBars } from '@site/src/components/fx';
import tools from '@site/src/data/tools';
import cx from '../catalog.module.css';

const TICKER = [
  'TECHNICAL SYSTEMS ONLINE',
  'BATTLE-TESTED IN THE STUDIO PIPELINE',
  'UNITY · BLENDER · PERFORMANCE-FIRST',
  'DISTRIBUTED WORLDWIDE',
];

export default function Tools() {
  return (
    <Layout title="Tools" description="Professional Unity & Blender tools by WAVE0084 Studio">
      <PageHeader
        kicker="// TECHNICAL_SYSTEMS"
        title="TECHNICAL SYSTEMS"
        subtitle="Production-grade utilities forged in our own studio pipeline. Battle-tested, performance-first, distributed worldwide."
        channel="CH.07"
        signal={`SYSTEMS: ${String(tools.length).padStart(2, '0')}`}
      />

      <Ticker items={TICKER} tone="signal" />

      <Section tone="base" spacing="lg">
        <div className={cx.guide}>
          <span className={cx.guideLabel}>
            <span className={cx.guideDot} /> SYSTEM INDEX
          </span>
          <span className={cx.guideCount}>{tools.length} UNITS AVAILABLE</span>
          <SignalBars count={5} className={cx.guideBars} />
        </div>

        <div className={clsx(cx.grid, cx.gridTools)}>
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        <div className={cx.signoff}>
          ▚▚ END OF INDEX · <b>ALL SYSTEMS NOMINAL</b> · ▚▚
        </div>
      </Section>
    </Layout>
  );
}
