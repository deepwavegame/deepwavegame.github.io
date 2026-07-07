import React from 'react';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import { Button, Section } from '@site/src/components/ui';
import ProductSeo from '@site/src/lib/seo';
import { ToolHeader, ToolSpecs, ToolFeatures, ToolPreview } from './parts';

export default function UnityPackageView({ tool }) {
  const dev = tool.isUnderDevelopment;
  const { links = {} } = tool;

  const actions = (
    <>
      {!dev && links.assetStore && (
        <Button to={links.assetStore} brand="unity" block size="md">
          <Translate id="tools.common.buy_asset_store">BUY ON ASSET STORE</Translate>
        </Button>
      )}
      {!dev &&
        links.demos?.map((demo) => (
          <Button key={demo.href} to={demo.href} brand="itch" block size="md">
            {demo.label}
          </Button>
        ))}
      {!dev && links.itch && (
        <Button to={links.itch} brand="itch" block size="md">
          <Translate id="tools.common.buy_itch">BUY ON ITCH.IO</Translate>
        </Button>
      )}
      {links.docs && links.docs !== '#' && (
        <Button to={links.docs} variant="ghost" block size="md">
          <Translate id="tools.common.read_docs">DOCUMENTATION</Translate>
        </Button>
      )}
      {dev && (
        <Button to={`/news/tags/${tool.blogTag}`} variant="outline" block size="md">
          <Translate id="tools.view_devlogs">VIEW DEV LOGS</Translate>
        </Button>
      )}
    </>
  );

  return (
    <Layout title={tool.title} description={tool.seo?.description || ''}>
      <ProductSeo tool={tool} />
      <Section tone="deeper" spacing="lg">
        <div className="row">
          <div className="col col--8">
            <ToolHeader title={tool.title} tagline={tool.tagline} type={tool.type} isUnderDevelopment={dev} />

            <ToolPreview
              thumbnail={tool.thumbnail}
              dim={dev}
              label={dev ? '[ CLASSIFIED_PREVIEW ]' : '[ PREVIEW_ACTIVE ]'}
            />

            <div style={{ marginTop: '2.5rem', color: 'var(--c-text-1)', lineHeight: 1.8, fontSize: '1.02rem' }}>
              <p>{tool.description}</p>
            </div>

            <ToolFeatures features={tool.features} />
          </div>

          <div className="col col--4">
            <ToolSpecs specs={tool.specs} actions={actions} isUnderDevelopment={dev} />
          </div>
        </div>
      </Section>
    </Layout>
  );
}
