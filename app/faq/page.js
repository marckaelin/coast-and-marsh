import JsonLd from '../components/JsonLd';
import { SiteHeader, SiteFooter } from '../components/SiteChrome';
import { SITE } from '../lib/site';
import { AGENCY_FAQS } from '../lib/faqs';

export const metadata = {
  title: 'Questions About Coast & Marsh Insurance',
  description: 'Who Coast & Marsh Insurance is, what it quotes, where in Florida it works, and how new and out-of-state contractors can get general liability, workers’ comp and other coverage.',
  alternates: { canonical: '/faq' }
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  url: `${SITE.url}/faq`,
  about: { '@id': `${SITE.url}/#agency` },
  mainEntity: AGENCY_FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
};

export default function Faq() {
  return <main className="contractor-page">
    <JsonLd data={schema} />
    <SiteHeader cta="Request a Quote" ctaHref="/contractor-insurance#review" />
    <section className="yc-intro">
      <p className="eyebrow">FAQ</p>
      <h1>Questions about Coast &amp; Marsh</h1>
      <p>Straight answers about who we are, what we quote and how to get started.</p>
    </section>
    <section className="seo-prose">
      <div className="seo-faq">{AGENCY_FAQS.map(([q, a]) => <details key={q} open><summary>{q}</summary><p>{a}</p></details>)}</div>
      <div className="seo-cta" style={{ marginTop: 34 }}>
        <div><strong>Need contractor insurance?</strong><span>Send the basics and Marc will follow up directly.</span></div>
        <a className="button olive" href="/contractor-insurance#review">Request a quote <span>→</span></a>
      </div>
      <p>More: <a href="/about">About Coast &amp; Marsh</a> · <a href="/contractor-insurance">Florida contractor insurance</a> · <a href="/contractor-insurance/new-contractors">new contractor insurance</a> · <a href="/guides/florida-contractor-license-insurance-requirements">license insurance requirements</a> · <a href="/boat-insurance">boat insurance</a>.</p>
    </section>
    <SiteFooter />
  </main>;
}
