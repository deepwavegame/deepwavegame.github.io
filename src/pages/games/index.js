import Layout from '@theme/Layout';
import Entry from '@site/src/components/Entry';
import PageHead from '@site/src/components/PageHead';
import games, { STATUS_LABELS } from '@site/src/data/games';

export default function Games() {
  return (
    <Layout title="Games" description="WAVE0084 Studio — horror game projects, current and classified.">
      <main className="page">
        <PageHead
          kicker="Index"
          meta={`${games.length} projects`}
          title="Games"
          lead="All current and classified game projects of WAVE0084 Studio."
        />
        {games.map((game, i) => (
          <Entry
            key={game.id}
            index={i + 1}
            kicker={game.genre}
            status={STATUS_LABELS[game.status]}
            title={game.title}
            to={game.link}
            redacted={game.status === 'classified'}
            text={game.description}
            specs={[
              ['Year', game.year],
              ['Engine', game.engine],
            ]}
          />
        ))}
      </main>
    </Layout>
  );
}
