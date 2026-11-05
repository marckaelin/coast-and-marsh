import JsonLd from './JsonLd';
import EmailQuote from './EmailQuote';
import { SiteHeader, SiteFooter } from './SiteChrome';
import { SITE } from '../lib/site';
import { GUIDES } from '../lib/industry-guides';

// Renders an industry landing page or guide from app/lib/industry-guides.js.
export function guideMetadata(key) {
  const g = GUIDES[key];
  return { title: g.metaTitle || g.title, description: g.description, alternates: { canonical: g.path } };
}

export default function GuidePage({ id }) {
  const g = GUIDES[id];
  const url = `${SITE.url}${g.path}`;
  const main = g.kind === 'service'
    ? { '@type': 'Service', name: g.title, serviceType: g.serviceType, url, provider: { '@id': `${SITE.url}/#agency` }, areaServed: { '@type': 'State', name: 'Florida' }, description: g.description }
    : { '@type': 'Article', headline: g.title, description: g.description, datePublished: g.date, dateModified: g.date, author: { '@id': `${SITE.url}/#marc-kaelin` }, publisher: { '@id': `${SITE.url}/#agency` }, mainEntityOfPage: url };
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      main,
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
        ...(g.parent ? [{ '@type': 'ListItem', position: 2, name: GUIDES[g.parent].title, item: `${SITE.url}${GUIDES[g.parent].path}` }] : []),
        { '@type': 'ListItem', position: g.parent ? 3 : 2, name: g.title, item: url }
      ] },
      { '@type': 'FAQPage', mainEntity: g.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
    ]
  };
  const related = (g.related || []).map((k) => GUIDES[k]);

  return <main className="contractor-page">
    <JsonLd data={schema} />
    <SiteHeader cta={g.cta.short} ctaHref={g.cta.href} />
    <section className="yc-intro">
      <p className="eyebrow">{g.parent ? <a href={GUIDES[g.parent].path}>{g.eyebrow}</a> : g.eyebrow}</p>
      <h1>{g.title}</h1>
      <p>{g.lead}</p>
    </section>

    <section className="seo-prose">
      {g.sections.map((s) => <div key={s.h}>
        <h2>{s.h}</h2>
        {(s.p || []).map((p, i) => <p key={i}>{p}</p>)}
        {s.list && <ul>{s.list.map((li) => <li key={li}>{li}</li>)}</ul>}
        {s.grid && <div className="seo-grid">{s.grid.map(([h, p]) => <article key={h}><h3>{h}</h3><p>{p}</p></article>)}</div>}
        {s.steps && <ol className="seo-steps">{s.steps.map(([when, what]) => <li key={when}><strong>{when}</strong><span>{what}</span></li>)}</ol>}
        {s.checklist && <ul className="seo-checklist">{s.checklist.map((item) => <li key={item}><label><input type="checkbox" /> {item}</label></li>)}</ul>}
        {s.link && <p>More detail: <a href={GUIDES[s.link].path}>{GUIDES[s.link].title}</a></p>}
      </div>)}

      <div className="seo-cta">
        <div><strong>{g.cta.title}</strong><span>{g.cta.text}</span></div>
        <a className="button olive" href={g.cta.href}>{g.cta.label} <span>→</span></a>
      </div>

      <EmailQuote subject={g.emailSubject || 'Insurance quote request'} />

      <h2>Frequently asked questions</h2>
      <div className="seo-faq">{g.faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>

      {related.length > 0 && <>
        <h2>Related pages</h2>
        <ul>{related.map((r) => <li key={r.path}><a href={r.path}>{r.title}</a></li>)}</ul>
      </>}
      <p>Coast &amp; Marsh is an independent Florida insurance agency in Ponte Vedra Beach serving businesses statewide. Call or text <a href="tel:+19049885026">{SITE.phoneDisplay}</a> or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      <p className="coverage-note">{g.note}</p>
    </section>
    <SiteFooter />
  </main>;
}
