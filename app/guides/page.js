import JsonLd from '../components/JsonLd';
import EmailQuote from '../components/EmailQuote';
import { SiteHeader, SiteFooter } from '../components/SiteChrome';
import { SITE } from '../lib/site';
import { hubSegments } from '../lib/guides-hub';

export const metadata = {
  title: 'Florida Insurance Guides by Industry',
  description: 'Plain-English Florida insurance guides from Coast & Marsh: contractors, auto repair, home care, hemp and CBD stores, pest control, new businesses, and coastal homes and boats.',
  alternates: { canonical: '/guides' }
};

export default function GuidesHub() {
  const segments = hubSegments();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    url: `${SITE.url}/guides`,
    name: 'Florida insurance guides',
    about: { '@id': `${SITE.url}/#agency` },
    hasPart: segments.flatMap((s) => s.links.map(([name, path]) => ({ '@type': 'WebPage', name, url: `${SITE.url}${path}` })))
  };
  return <main className="contractor-page">
    <JsonLd data={schema} />
    <SiteHeader cta="Request a Quote" ctaHref="/contractor-insurance#review" />
    <section className="yc-intro">
      <p className="eyebrow">GUIDES</p>
      <h1>Florida insurance guides</h1>
      <p>Straight answers to the questions Florida business owners and families ask us most, grouped by industry.</p>
    </section>
    <section className="seo-prose">
      {segments.map((s) => <div key={s.id} id={s.id}>
        <h2>{s.label}</h2>
        <p><a href={s.page[1]}>{s.page[0]} →</a></p>
        {s.links.length > 0 && <ul>{s.links.map(([t, h]) => <li key={h}><a href={h}>{t}</a></li>)}</ul>}
      </div>)}
      <EmailQuote />
      <p>More answers on the <a href="/faq">FAQ page</a>.</p>
    </section>
    <SiteFooter />
  </main>;
}
