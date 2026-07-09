import React from 'react';
import Layout from '@theme/Layout';
import { PageHeader, Section } from '@site/src/components/ui';
import { ToolCard } from '@site/src/components/cards';
import tools from '@site/src/data/tools';

export default function Tools() {
  return (
    <Layout title="Tools" description="Professional Unity & Blender tools by WAVE0084 Studio">
      <PageHeader
        kicker="// TECHNICAL_SYSTEMS"
        title={<>TECHNICAL <span style={{ color: 'var(--c-accent)' }}>SYSTEMS</span></>}
        subtitle="Production-grade utilities forged in our own studio pipeline. Battle-tested, performance-first, distributed worldwide."
      />

      <Section tone="base" spacing="lg">
        <div className="row">
          {tools.map((tool) => (
            <div className="col col--6" key={tool.id} style={{ marginBottom: '2rem' }}>
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
