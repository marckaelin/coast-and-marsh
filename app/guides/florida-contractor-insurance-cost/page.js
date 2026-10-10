import JsonLd from '../../components/JsonLd';
import { SiteHeader, SiteFooter } from '../../components/SiteChrome';
import { SITE } from '../../lib/site';

const path = '/guides/florida-contractor-insurance-cost';

export const metadata = {
  title: 'What Affects Contractor Insurance Cost in Florida',
  description: 'The factors that set contractor insurance premiums in Florida: trade, payroll, subcontractors, claims history and project type, and how to prepare for a renewal.',
  alternates: { canonical: path }
};

const faqs = [
  ['Why do two contractors in the same trade pay different prices?', 'Insurers rate the specific operations, payroll, subcontractor use, project mix and claims history, not just the trade name.'],
  ['Do I need workers’ compensation as a Florida contractor?', 'Florida’s construction-industry rules are stricter than for most businesses, and exemptions are limited. Confirm your requirements with the Florida Division of Workers’ Compensation or a qualified advisor.'],
  ['Why do certificates of insurance matter?', 'General contractors and property owners often require proof of coverage from you and from your subcontractors. Missing or lapsed certificates can cost you work.'],
  ['Can I change carriers mid-term?', 'Often yes, but timing, short-rate penalties and policy terms vary. Renewal is the cleanest time to review your options.']
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Article', headline: 'What Affects Contractor Insurance Cost in Florida', datePublished: '2026-10-10', dateModified: '2026-10-10', author: { '@id': `${SITE.url}/#agency` }, publisher: { '@id': `${SITE.url}/#agency` }, mainEntityOfPage: `${SITE.url}${path}` },
    { '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  ]
};

export default function Guide() {
  return <main className="contractor-page">
    <JsonLd data={schema} />
    <SiteHeader cta="Request a Review" ctaHref="/contractor-insurance#review" />
    <section className="yc-intro">
      <p className="eyebrow">GUIDE</p>
      <h1>What affects contractor insurance cost in Florida?</h1>
      <p>Contractor premiums are built from the work you perform, not just your trade title. Knowing what insurers look at helps you present your business clearly and spot an unusual quote.</p>
    </section>

    <section className="seo-prose">
      <h2>Your trade and classification</h2>
      <p>Roofing, electrical, HVAC, plumbing, framing and general contracting are rated differently. Within a trade, the exact operations count: residential versus commercial, new construction versus repair, and work at height all change the classification and the market that will write it.</p>
      <h2>Payroll and revenue</h2>
      <p>General liability is usually rated on revenue or payroll, and workers’ compensation on payroll by class code. Accurate figures matter, because an audit can adjust the premium after the term ends.</p>
      <h2>Subcontractors and certificates</h2>
      <p>If you use subcontractors, insurers want to see that they carry their own coverage and that you hold current certificates. Uninsured subcontractors can add cost to your policy or cause the carrier to decline.</p>
      <h2>Claims history and experience</h2>
      <p>Recent claims, years in business and safety practices affect both price and which insurers will consider you. A short, well-documented history helps.</p>
      <h2>Contracts and project type</h2>
      <p>Contract requirements such as additional-insured status, waivers of subrogation or higher limits can add cost. Larger projects may call for umbrella or excess coverage, and builders risk applies while a project is under construction.</p>
      <h2>Standard versus specialty markets</h2>
      <p>Some trades and exposures fit standard markets, while others, such as certain roofing or high-risk operations, are placed with specialty insurers. Having access to both lets an advisor match the account to the right market.</p>

      <h2>What to have ready for a renewal review</h2>
      <ul>
        <li>The work you perform and your split of residential and commercial jobs</li>
        <li>Annual revenue, payroll and number of employees</li>
        <li>Subcontractor spend and their certificates of insurance</li>
        <li>Current carrier, premium and renewal date</li>
        <li>Loss runs for the last few years</li>
      </ul>
      <div className="seo-cta">
        <div><strong>Have a renewal coming up?</strong><span>Send us the basics and we will determine the next step.</span></div>
        <a className="button olive" href="/contractor-insurance#review">Request a review <span>→</span></a>
      </div>
      <p>See more about <a href="/contractor-insurance">Florida contractor insurance</a>.</p>

      <h2>Frequently asked questions</h2>
      <div className="seo-faq">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      <p className="coverage-note">General information only, not legal advice, a quote or a coverage determination. Requirements, eligibility and pricing vary by business and insurer.</p>
    </section>
    <SiteFooter />
  </main>;
}
