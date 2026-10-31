import JsonLd from '../../components/JsonLd';
import { SiteHeader, SiteFooter } from '../../components/SiteChrome';
import { SITE } from '../../lib/site';

const path = '/guides/florida-contractor-license-insurance-requirements';

export const metadata = {
  title: 'Florida Contractor License Insurance Requirements',
  description: 'The general liability and property damage minimums Florida requires for contractor licenses, by trade, plus the workers’ comp rule for construction businesses.',
  alternates: { canonical: path }
};

const rows = [
  ['General contractor', '$300,000', '$50,000'],
  ['Building contractor', '$300,000', '$50,000'],
  ['Residential contractor', '$100,000', '$25,000'],
  ['Roofing contractor', '$100,000', '$25,000'],
  ['Air conditioning, mechanical, sheet metal', '$100,000', '$25,000'],
  ['Plumbing contractor', '$100,000', '$25,000'],
  ['Pool, solar, underground utility', '$100,000', '$25,000'],
  ['Specialty contractors (unless specified)', '$100,000', '$25,000']
];

const faqs = [
  ['Is the license minimum enough?', 'It’s enough to get the license, but not usually enough for contracts. General contractors, property managers and public owners commonly require $1,000,000 per occurrence and $2,000,000 aggregate, often with additional insured status and a waiver of subrogation.'],
  ['Do I need workers’ comp for my license?', 'Florida construction businesses with one or more employees generally must carry workers’ compensation. Up to three corporate officers or LLC members who each own at least 10% may apply for a construction exemption, but employees can’t be exempted.'],
  ['What do I send the state as proof?', 'Your insurance agent issues a certificate of insurance showing the required coverage. Ask for it as soon as the policy is bound, with the exact business name on your license application.'],
  ['Does surplus lines coverage count?', 'Usually, but some licenses and agencies have their own rules. Florida LP gas licenses, for example, have separate insurance requirements. Ask before you bind.']
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Article', headline: 'Florida Contractor License Insurance Requirements', datePublished: '2026-10-31', dateModified: '2026-10-31', author: { '@id': `${SITE.url}/#agency` }, publisher: { '@id': `${SITE.url}/#agency` }, mainEntityOfPage: `${SITE.url}${path}` },
    { '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  ]
};

export default function Guide() {
  return <main className="contractor-page">
    <JsonLd data={schema} />
    <SiteHeader cta="Request a Quote" ctaHref="/contractor-insurance#review" />
    <section className="yc-intro">
      <p className="eyebrow">GUIDE</p>
      <h1>Florida contractor license insurance requirements</h1>
      <p>Florida won’t issue or renew most contractor licenses without proof of general liability insurance. Here are the minimums by trade, and why most contractors carry more.</p>
    </section>

    <section className="seo-prose">
      <h2>Minimums for CILB licenses</h2>
      <p>The Construction Industry Licensing Board sets these amounts in Rule 61G4-15.003 of the Florida Administrative Code.</p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
          <thead><tr><th style={{ textAlign: 'left', borderBottom: '1px solid #d7d3c9', padding: '8px 6px' }}>License</th><th style={{ textAlign: 'left', borderBottom: '1px solid #d7d3c9', padding: '8px 6px' }}>Public liability</th><th style={{ textAlign: 'left', borderBottom: '1px solid #d7d3c9', padding: '8px 6px' }}>Property damage</th></tr></thead>
          <tbody>{rows.map(([l, a, b]) => <tr key={l}><td style={{ borderBottom: '1px solid #e6e2d8', padding: '8px 6px' }}>{l}</td><td style={{ borderBottom: '1px solid #e6e2d8', padding: '8px 6px' }}>{a}</td><td style={{ borderBottom: '1px solid #e6e2d8', padding: '8px 6px' }}>{b}</td></tr>)}</tbody>
        </table>
      </div>

      <h2>Electrical contractors</h2>
      <p>The Electrical Contractors’ Licensing Board sets its own amounts in Rule 61G6-5.008: at least $100,000 per person and $300,000 per occurrence for liability plus $500,000 for property damage, or an $800,000 combined single limit. Both include products and completed operations. See <a href="/contractor-insurance/electrical">electrical contractor insurance</a>.</p>

      <h2>Workers’ compensation</h2>
      <p>Licensees must also carry workers’ compensation or hold a valid exemption under Chapter 440, Florida Statutes. In construction, one employee is generally enough to require coverage. Officer and member exemptions are limited to three people who each own at least 10% of the business.</p>

      <h2>What contracts usually ask for</h2>
      <ul>
        <li>$1,000,000 per occurrence and $2,000,000 aggregate general liability</li>
        <li>Additional insured status for ongoing and completed operations</li>
        <li>Primary and non-contributory wording and a waiver of subrogation</li>
        <li>Workers’ comp, commercial auto and sometimes an umbrella</li>
      </ul>

      <div className="seo-cta">
        <div><strong>Getting licensed or starting a company?</strong><span>We quote startups and new-to-Florida contractors.</span></div>
        <a className="button olive" href="/contractor-insurance/new-contractors">New contractor insurance <span>→</span></a>
      </div>
      <p>More: <a href="/contractor-insurance">Florida contractor insurance</a> · <a href="/guides/florida-contractor-insurance-cost">what affects contractor insurance cost</a>.</p>

      <h2>Frequently asked questions</h2>
      <div className="seo-faq">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      <p className="coverage-note">General information only, not legal advice. Amounts reflect Rules 61G4-15.003 and 61G6-5.008 as of October 2026. Confirm current requirements with the Florida DBPR before applying.</p>
    </section>
    <SiteFooter />
  </main>;
}
