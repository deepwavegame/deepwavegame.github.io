import React from 'react';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import { Button, Section } from '@site/src/components/ui';
import { ToolHeader, ToolSpecs, ToolFeatures, ToolPreview } from './parts';

export default function BlenderAddonView({ tool }) {
  const dev = tool.isUnderDevelopment;

  const actions = (
    <>
      {!dev && tool.links.blenderMarket && (
        <Button to={tool.links.blenderMarket} brand="blender" block size="md">
          <Translate id="tools.common.buy_blender_market">BUY ON BLENDER MARKET</Translate>
        </Button>
      )}
      {!dev && tool.links.itch && (
        <Button to={tool.links.itch} brand="itch" block size="md">
          <Translate id="tools.common.buy_itch">BUY ON ITCH.IO</Translate>
        </Button>
      )}
      {tool.links.docs && tool.links.docs !== '#' && (
        <Button to={tool.links.docs} variant="ghost" block size="md">
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
    <Layout title={tool.title} description={typeof tool.tagline === 'string' ? tool.tagline : ''}>
      <Section tone="deeper" spacing="lg">
        <div className="row">
          <div className="col col--8">
            <ToolHeader title={tool.title} tagline={tool.tagline} type={tool.type} isUnderDevelopment={dev} />

            <ToolPreview
              thumbnail={tool.thumbnail}
              dim={dev}
              label="[ BLENDER_ADDON_LOADED ]"
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
