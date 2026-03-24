import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import games from '@site/src/data/games';

export default function LilSisGame() {
  const gameData = games.find(g => g.id === 'lil-sis');

  return (
    <Layout
      title="Lil Sis"
      description="Trang chủ của tựa game kinh dị Lil Sis">
      <main style={{ backgroundColor: '#111111', color: '#d2d2d2', minHeight: '100vh', paddingBottom: '4rem' }}>

        {/* Header Hero cho Game */}
        <header className="hero mystery-bg" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h1 className="horror-title" style={{ fontSize: '5rem', marginBottom: '1rem' }}>LIL SIS</h1>
          <h2 style={{ color: '#aaa', fontWeight: 'normal', letterSpacing: '1px' }}>
            <Translate id="games.lil-sis.subtitle">LIL SIS</Translate>
          </h2>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <a className="unity-button primary" href="#trailer" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
              <Translate id="games.common.watch_trailer">Watch Trailer</Translate>
            </a>
            {gameData?.steam && (
              <Link className="unity-button btn-steam" to={gameData.steam} style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>STEAM</Link>
            )}
            {gameData?.itch && (
              <Link className="unity-button btn-itch" to={gameData.itch} style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>ITCH.IO</Link>
            )}
          </div>
        </header>

        <div className="container" style={{ marginTop: '4rem' }}>
          {/* Cốt truyện */}
          <section className="row" style={{ marginBottom: '4rem' }}>
            <div className="col col--8 col--offset-2">
              <h2 className="section-title">
                <Translate id="games.common.story_title">Story</Translate>
              </h2>
              <div className="unity-card" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                <p>
                  <Translate id="games.lil-sis.story.p1">
                    You play as an older brother who has been away from home for many years. One day, you receive a strange letter supposedly from your late mother, saying that your sister needs help.
                  </Translate>
                </p>
                <p>
                  <Translate id="games.lil-sis.story.p2">
                    Ignoring your bad premonitions, you return to the wooden house deep in the misty forest. No one, no sound of life, only blood messages and distorted memories are slowly consuming you.
                  </Translate>
                </p>
                <p style={{ color: '#ff3333', fontStyle: 'italic', marginTop: '2rem', textAlign: 'center' }}>
                  <Translate id="games.lil-sis.story.quote">"You promised never to leave me..."</Translate>
                </p>
              </div>
            </div>
          </section>

          {/* Tính năng */}
          <section className="row" style={{ marginBottom: '4rem' }}>
            <div className="col col--12">
              <h2 className="section-title" style={{ display: 'block' }}>
                <Translate id="games.common.features_title">Key Features</Translate>
              </h2>
              <div className="row">
                <div className="col col--4">
                  <div className="unity-card" style={{ height: '100%' }}>
                    <h3><Translate id="games.lil-sis.feature1.title">Haunting Graphics</Translate></h3>
                    <p><Translate id="games.lil-sis.feature1.desc">Using advanced lighting technology on Unity HDRP, bringing a realistic and dark atmosphere to the point of suffocation.</Translate></p>
                  </div>
                </div>
                <div className="col col--4">
                  <div className="unity-card" style={{ height: '100%' }}>
                    <h3><Translate id="games.lil-sis.feature2.title">Spatial Audio</Translate></h3>
                    <p><Translate id="games.lil-sis.feature2.desc">3D spatial audio system allows you to clearly hear every footstep or breath of the force hunting you.</Translate></p>
                  </div>
                </div>
                <div className="col col--4">
                  <div className="unity-card" style={{ height: '100%' }}>
                    <h3><Translate id="games.lil-sis.feature3.title">Psychological Puzzles</Translate></h3>
                    <p><Translate id="games.lil-sis.feature3.desc">Not just running away, you need to find out and piece together memories through a puzzle system based on supernatural phenomena.</Translate></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trailer Mockup */}
          <section id="trailer" className="row" style={{ marginBottom: '4rem' }}>
            <div className="col col--10 col--offset-1">
              <h2 className="section-title">
                <Translate id="games.common.trailer_title">Trailer</Translate>
              </h2>
              <div style={{ backgroundColor: '#000', paddingBottom: '56.25%', position: 'relative', border: '1px solid #333' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p style={{ color: '#666' }}>[Video Player Mockup]</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </Layout>
  );
}
