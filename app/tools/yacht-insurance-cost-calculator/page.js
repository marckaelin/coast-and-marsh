import Calculator from './Calculator';
import JsonLd from '../../components/JsonLd';
import { SITE } from '../../lib/site';

const faqs = [
  ['How accurate is the yacht insurance estimate?', 'It is a planning range based on the boat’s value, size, age, use, storage and location. It is not a quote, and an insurer’s actual price can be higher or lower.'],
  ['What does the estimator ask for?', 'Boat type, length, value, age, how you use and store it, where you keep it, your boating experience and claims history, and the coverage you want.'],
  ['What happens if I request a quote?', 'We receive your details, review them and reply by email, usually within one business day. We then approach insurers on your behalf. There is no obligation.'],
  ['Does this work for jet skis and sailboats?', 'Yes. The estimator covers motor yachts, sailboats, catamarans and personal watercraft.']
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebApplication', name: 'Yacht & Boat Insurance Cost Estimator', url: `${SITE.url}/tools/yacht-insurance-cost-calculator`, applicationCategory: 'FinanceApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, provider: { '@id': `${SITE.url}/#agency` } },
    { '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  ]
};

export const metadata = {
  title: 'Yacht & Boat Insurance Cost Estimator',
  description: 'Get a rough annual premium range for a yacht, powerboat or jet ski in about two minutes, then ask for a real quote. Estimates only; not a binding quote.',
  alternates: { canonical: '/tools/yacht-insurance-cost-calculator' }
};

export default function YachtEstimator() {
  return <main className="contractor-page">
    <JsonLd data={schema} />
    <header className="smoke-header">
      <a className="logo" href="/"><span className="logo-mark">≋</span><span className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></span></a>
      <div className="contractor-header-actions"><a href="tel:+19049885026">904-988-5026</a><a className="button olive" href="#quote">Request a Quote</a></div>
    </header>

    <section className="yc-intro">
      <p className="eyebrow">YACHT &amp; BOAT INSURANCE</p>
      <h1>What might it cost to insure your boat?</h1>
      <p>Answer a few questions to see a rough annual premium range. It is a planning estimate, not a quote. If you would like a real number, send us the details at the end and we will reply by email.</p>
    </section>

    <Calculator />

    <section className="seo-prose">
      <h2>What affects yacht and boat insurance cost</h2>
      <p>Insured value, boat type and size, age, where it is kept, where you cruise, your experience and claims history all feed the price. Florida adds named-storm exposure, which can change both the premium and the deductible. Read the full guide: <a href="/guides/how-much-does-boat-insurance-cost-in-florida">how much does boat insurance cost in Florida?</a> or see how <a href="/boat-insurance">boat and yacht insurance works in Florida</a>.</p>
      <h2>Frequently asked questions</h2>
      <div className="seo-faq">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
    </section>

    <footer><div className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></div><div>Personal · Commercial · Specialty Industries<small className="footer-legal">Coast and Marsh Insurance LLC · Florida License G330108 · NPN 22179499 · Ponte Vedra Beach, FL</small></div><div className="legal"><a href="/boat-insurance">Boat Insurance</a><a href="/contractor-insurance">Contractors</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></footer>
  </main>
}
