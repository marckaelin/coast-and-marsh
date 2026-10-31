import { notFound } from 'next/navigation';
import JsonLd from '../../components/JsonLd';
import { SiteHeader, SiteFooter } from '../../components/SiteChrome';
import { SITE } from '../../lib/site';
import { TRADES, tradeBySlug } from '../../lib/trades';
import QuoteForm from '../QuoteForm';

export const dynamicParams = false;

export function generateStaticParams() {
  return TRADES.map(({ slug }) => ({ trade: slug }));
}

export async function generateMetadata({ params }) {
  const { trade } = await params;
  const t = tradeBySlug[trade];
  if (!t) return {};
  return { title: t.title, description: t.description, alternates: { canonical: `/contractor-insurance/${t.slug}` } };
}

export default async function TradePage({ params }) {
  const { trade } = await params;
  const t = tradeBySlug[trade];
  if (!t) notFound();
  const url = `${SITE.url}/contractor-insurance/${t.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: t.title, serviceType: `${t.name} insurance`, url, provider: { '@id': `${SITE.url}/#agency` }, areaServed: { '@type': 'State', name: 'Florida' }, description: t.description },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Florida Contractor Insurance', item: `${SITE.url}/contractor-insurance` },
        { '@type': 'ListItem', position: 3, name: t.title, item: url }
      ] },
      { '@type': 'FAQPage', mainEntity: t.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
    ]
  };
  const others = TRADES.filter((o) => o.slug !== t.slug);

  return <main className="contractor-page">
    <JsonLd data={schema} />
    <SiteHeader cta="Request a Quote" ctaHref="#review" />
    <section className="yc-intro">
      <p className="eyebrow"><a href="/contractor-insurance">FLORIDA CONTRACTOR INSURANCE</a></p>
      <h1>{t.title}</h1>
      <p>{t.lead}</p>
    </section>

    <section className="seo-prose">
      <h2>Florida license insurance requirement</h2>
      <p>{t.license} See our guide to <a href="/guides/florida-contractor-license-insurance-requirements">Florida contractor license insurance requirements</a>.</p>

      <h2>What insurers look at</h2>
      <div className="seo-grid">{t.exposures.map(([h, p]) => <article key={h}><h3>{h}</h3><p>{p}</p></article>)}</div>

      <h2>Coverage we quote</h2>
      <ul>
        <li>General liability, including products and completed operations</li>
        <li>Workers’ compensation and employer’s liability</li>
        <li>Commercial auto, or hired and non-owned auto</li>
        <li>Tools and equipment (inland marine)</li>
        <li>Umbrella and excess liability</li>
        <li>Builders risk, where the project needs it</li>
      </ul>
      <p>Coast &amp; Marsh is an independent Florida agency based in Ponte Vedra Beach. We quote standard and specialty (surplus lines) insurers and serve contractors statewide.</p>

      <div className="seo-cta">
        <div><strong>Need a quote or a certificate fast?</strong><span>Call {SITE.phoneDisplay} or send the basics below.</span></div>
        <a className="button olive" href="#review">Request a quote <span>→</span></a>
      </div>

      <h2>Frequently asked questions</h2>
      <div className="seo-faq">{t.faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>

      <h2>Other contractor pages</h2>
      <ul>{others.map((o) => <li key={o.slug}><a href={`/contractor-insurance/${o.slug}`}>{o.title}</a></li>)}</ul>
      <p className="coverage-note">General information only, not legal advice, a quote or a coverage determination. License rules change. Confirm current requirements with the Florida DBPR. Eligibility, pricing and terms are set by the insurer.</p>
    </section>

    <section className="review-section" id="review">
      <div><p className="eyebrow light">REQUEST A QUOTE</p><h2>Tell us about your work.</h2><p>A few details are enough to start. We&apos;ll reply with the next step and what we need to quote.</p></div>
      <QuoteForm defaultTrade={t.formTrade} />
    </section>
    <SiteFooter />
  </main>;
}
