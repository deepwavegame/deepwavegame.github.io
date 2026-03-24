import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero mystery-bg" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="horror-title glitch-hover" data-text="WAVE0084" style={{ fontSize: '6rem', marginBottom: '0.5rem', lineHeight: '1' }}>
          WAVE0084
        </h1>
        <p className="hero__subtitle" style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '3rem', letterSpacing: '4px', textTransform: 'uppercase', opacity: 0.8 }}>
          <Translate id="homepage.tagline">Indie Horror Studio & Technical Solutions</Translate>
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <Link
            className="unity-button primary"
            to="/games/lil-sis">
            <Translate id="homepage.cta.latest_game">LATEST PROJECT</Translate>
          </Link>
          <Link
            className="unity-button"
            to="/tools">
            <Translate id="homepage.cta.explore_tools">EXPLORE TOOLS</Translate>
          </Link>
        </div>
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'repeating-linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0) 100%)', backgroundSize: '100% 4px', pointerEvents: 'none' }}></div>
    </header>
  );
}

function Feature({ title, description, to, cta }) {
  return (
    <div className="col col--4" style={{ marginBottom: '2rem' }}>
      <div className="unity-card" style={{ height: '100%' }}>
        <h3>{title}</h3>
        <p style={{ color: '#b0b0b0', minHeight: '80px' }}>{description}</p>
        <div style={{ marginTop: '1.5rem' }}>
          <Link className="unity-button primary" to={to} style={{ width: '100%' }}>{cta}</Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Wave0084 Studio - Indie Horror Game & Unity Tools">
      <HomepageHeader />
      <main>
        <section style={{ padding: '6rem 0', backgroundColor: '#0a0a0a' }}>
          <div className="container">
            <h2 className="section-title">
              <Translate id="homepage.sections.about.title.part1">WE ARE </Translate>
              <span>WAVE0084</span>
            </h2>
            <p style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', lineHeight: '1.8', color: '#b0b0b0' }}>
              <Translate id="homepage.sections.about.description">
                A technical indie studio specializing in psychological horror and high-performance Unity tools.
                We push the boundaries of digital fear and creative workflow efficiency.
              </Translate>
            </p>
          </div>
        </section>

        <section style={{ padding: '6rem 0', backgroundColor: '#0f0f0f' }}>
          <div className="container">
            <h2 className="section-title">
              <Translate id="homepage.sections.featured.title.part1">CORE </Translate>
              <span>DYNAMICS</span>
            </h2>
            <div className="row">
              <Feature
                title={<Translate id="homepage.features.games.title">Games</Translate>}
                description={<Translate id="homepage.features.games.desc">Deep, atmospheric horror experiences built on HDRP.</Translate>}
                to="/games"
                cta={<Translate id="homepage.features.games.cta">Play Now</Translate>}
              />
              <Feature
                title={<Translate id="homepage.features.tools.title">Tools</Translate>}
                description={<Translate id="homepage.features.tools.desc">Professional Unity packages used in our own production cycle.</Translate>}
                to="/tools"
                cta={<Translate id="homepage.features.tools.cta">View Specs</Translate>}
              />
              <Feature
                title={<Translate id="homepage.features.assets.title">Assets</Translate>}
                description={<Translate id="homepage.features.assets.desc">High-quality 3D models and environmental kits for your projects.</Translate>}
                to="/assets"
                cta={<Translate id="homepage.features.assets.cta">Get Assets</Translate>}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
