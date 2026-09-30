import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Arrow from '@site/src/components/Arrow';
import Entry from '@site/src/components/Entry';
import PageHead from '@site/src/components/PageHead';
import tools, { toolSpecs } from '@site/src/data/tools';

export default function Tools() {
  return (
    <Layout
      title="Tools"
      description="Unity packages and Blender add-ons by WAVE0084 Studio, including Simple Painter, RetroOS, Cobweb Weaver, Analog VHS and Weatherscape."
    >
      <main className="page">
        <PageHead
          kicker="Index"
          meta={`${tools.length} titles`}
          title="Tools"
          lead="Production-grade utilities forged in our own studio pipeline. Battle-tested, performance-first, distributed worldwide."
        />
        {tools.map((tool, i) => (
          <Entry
            key={tool.id}
            index={i + 1}
            kicker={tool.type}
            status={tool.isUnderDevelopment && 'In development'}
            title={tool.title}
            to={tool.links.page}
            text={tool.tagline}
            image={tool.thumbnail}
            imageAlt=""
            specs={[...toolSpecs(tool), !tool.isUnderDevelopment && ['Price', tool.specs.price]]}
          >
            <Link to={tool.links.page} className="arrow-link">
              Details <Arrow />
            </Link>
            {tool.links.docs !== '#' && (
              <Link to={tool.links.docs} className="arrow-link">
                Docs <Arrow />
              </Link>
            )}
          </Entry>
        ))}
      </main>
    </Layout>
  );
}
