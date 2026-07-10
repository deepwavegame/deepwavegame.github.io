import React from 'react';
import Layout from '@theme/Layout';
import { Button, Section } from '@site/src/components/ui';
import { ToolHeader, ToolSpecs, ToolFeatures, ToolPreview } from './parts';

export default function BlenderAddonView({ tool }) {
  const dev = tool.isUnderDevelopment;

  const actions = (
    <>
      {!dev && tool.links.blenderMarket && (
        <Button to={tool.links.blenderMarket} brand="blender" block size="md">
          BUY ON BLENDER MARKET
        </Button>
      )}
      {!dev && tool.links.itch && (
        <Button to={tool.links.itch} brand="itch" block size="md">
          BUY ON ITCH.IO
        </Button>
      )}
      {tool.links.docs && tool.links.docs !== '#' && (
        <Button to={tool.links.docs} variant="bc" block size="md">
          DOCUMENTATION
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
              label="[ BLENDER ADDON ]"
            />

            <div style={{ marginTop: '2.5rem', color: 'var(--bc-text)', lineHeight: 1.8, fontSize: '1.02rem' }}>
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
