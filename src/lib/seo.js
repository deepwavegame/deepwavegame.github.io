import React from 'react';
import Head from '@docusaurus/Head';

/**
 * Per-product SEO tags for a tool detail page: description, keywords, canonical,
 * Open Graph, Twitter card and a SoftwareApplication JSON-LD block.
 *
 * Reads the plain-string `seo` block on a tool from `src/data/tools.js`
 * (marketing copy lives in <Translate> nodes which can't go inside meta tags).
 */
export default function ProductSeo({ tool }) {
  const { title, seo = {}, specs = {} } = tool;
  const { description = '', keywords = '', canonical = '' } = seo;
  const priceValue = (specs.price || '').replace(/[^0-9.]/g, '');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: specs.requirement || 'Unity 2021.3+',
    description,
    ...(canonical && { url: canonical }),
    ...(priceValue && {
      offers: {
        '@type': 'Offer',
        price: priceValue,
        priceCurrency: 'USD',
        ...(canonical && { url: canonical }),
      },
    }),
    publisher: { '@type': 'Organization', name: 'Deepwave / wave0084' },
  };

  return (
    <Head>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:type" content="product" />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Head>
  );
}
