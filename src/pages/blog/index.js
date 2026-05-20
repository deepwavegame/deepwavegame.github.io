import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import { PageHeader, Section, FilterBar } from '@site/src/components/ui';
import { BlogCard } from '@site/src/components/cards';
import blogPosts from '@site/src/data/blog';

const FILTERS = ['ALL', 'ENGINEERING', 'FIELD ANALYSIS', 'STUDIO LOG'];

export default function BlogHub() {
  const [filter, setFilter] = useState('ALL');
  const filteredPosts = useMemo(
    () => (filter === 'ALL' ? blogPosts : blogPosts.filter((p) => p.tag === filter)),
    [filter]
  );

  return (
    <Layout title="Field Reports" description="WAVE0084 Studio — Technical horror blog and field analysis">
      <PageHeader
        kicker="// LOG_ACCESS: GRANTED"
        title={<><Translate id="blog.page.title.part1">FIELD</Translate> <span style={{ color: 'var(--c-accent)' }}><Translate id="blog.page.title.part2">REPORTS</Translate></span></>}
        subtitle={<Translate id="blog.page.subtitle">Technical deconstructions, field analysis of horror entities, and studio engineering logs.</Translate>}
      >
        <FilterBar options={FILTERS} value={filter} onChange={setFilter} />
      </PageHeader>

      <Section tone="base" spacing="lg">
        <div className="row">
          {filteredPosts.map((post) => (
            <div className="col col--4" key={post.id} style={{ marginBottom: '2rem' }}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
