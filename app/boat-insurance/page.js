import JsonLd from '../components/JsonLd';
import { SiteHeader, SiteFooter } from '../components/SiteChrome';
import { SITE } from '../lib/site';

export const metadata = {
  title: 'Florida Boat & Yacht Insurance',
  description: 'How boat and yacht insurance works in Florida: coverage types, named-storm deductibles, what affects the price, and how to get a real quote. Free cost estimator included.',
  alternates: { canonical: '/boat-insurance' }
};

const coverages = [
  ['Hull / physical damage', 'Pays to repair or replace your boat after a covered loss such as collision, fire, theft or storm damage. Policies are written on an agreed-value or actual-cash-value basis, which changes how a total loss is paid.'],
  ['Liability', 'Protects you if your boat injures someone or damages another person’s property. Higher limits matter more as boats get larger and carry more passengers.'],
  ['Medical payments', 'Helps with medical costs for passengers injured aboard, regardless of fault, up to the policy limit.'],
  ['Uninsured boater', 'Responds when an at-fault boater has no insurance or too little to cover your injuries.'],
  ['Towing, wreck removal and salvage', 'Covers towing and assistance and, on many policies, the cost of removing a wreck or recovering a sunken vessel.'],
  ['Personal effects and equipment', 'Gear, electronics, tenders and trailers are often covered separately or with sublimits, so check what is included.']
];

const factors = [
  'Insured value, age and condition of the boat',
  'Boat type and size, engine type and horsepower',
  'Where it is kept: wet slip, dry stack, trailer or lift',
  'Where and how far you cruise (navigational limits)',
  'Your boating experience and prior claims',
  'Use: private, chartered or any commercial activity',
  'Named-storm and hurricane exposure at your mooring'
];

const faqs = [
  ['Is boat insurance required in Florida?', 'Florida does not generally require recreational boat owners to carry liability insurance. Marinas, lenders and some waterways often do, and going without leaves you personally responsible for damage and injuries.'],
  ['What is a named-storm deductible?', 'Many Florida marine policies apply a separate, higher deductible to damage from a named storm, often a percentage of the insured value. Ask how it is calculated before you buy.'],
  ['Do I need a marine survey?', 'Insurers often ask for a survey on older or larger vessels, and some require one before they will insure a boat you have just bought. Requirements vary by carrier and boat.'],
  ['Can I get insured if I keep my boat on a trailer?', 'Yes. Trailered boats are insured routinely, and storage location is one of the factors insurers price.'],
  ['How do I find out what mine would cost?', 'Use the free estimator for a rough range in about two minutes, then ask us for a real number. We will gather the details and approach insurers on your behalf.']
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Florida boat and yacht insurance advisory', serviceType: 'Boat insurance', provider: { '@id': `${SITE.url}/#agency` }, areaServed: { '@type': 'State', name: 'Florida' }, url: `${SITE.url}/boat-insurance` },
    { '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  ]
};

export default function BoatInsurance() {
  return <main className="contractor-page">
    <JsonLd data={schema} />
    <SiteHeader cta="Request a Quote" ctaHref="/tools/yacht-insurance-cost-calculator#quote" />

    <section className="yc-intro">
      <p className="eyebrow">FLORIDA BOAT &amp; YACHT INSURANCE</p>
      <h1>Boat insurance for Florida waters.</h1>
      <p>Hurricane season, marina requirements and navigational limits make Florida marine coverage different from a policy written anywhere else. Coast &amp; Marsh helps boat and yacht owners understand what they are buying and approach the insurers that fit the vessel.</p>
    </section>

    <section className="seo-prose">
      <div className="seo-cta">
        <div><strong>Not sure what to expect?</strong><span>Get a rough annual premium range in about two minutes.</span></div>
        <a className="button olive" href="/tools/yacht-insurance-cost-calculator">Try the cost estimator <span>→</span></a>
      </div>

      <h2>What boat insurance covers</h2>
      <p>Most recreational policies combine several coverages. The names differ between insurers, but these are the pieces to look for.</p>
      <div className="seo-grid">{coverages.map(([t, d]) => <article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div>

      <h2>Florida details that affect your policy</h2>
      <ul>
        <li><strong>Named-storm deductibles.</strong> A separate hurricane or named-storm deductible is common. It can be much larger than your standard deductible.</li>
        <li><strong>Storm plans and haul-out.</strong> Some policies expect a hurricane plan or move the boat out of the water or to a safer mooring when a storm approaches. Read the conditions that apply during hurricane season.</li>
        <li><strong>Navigational limits.</strong> Coverage usually applies within defined waters. Offshore trips, the Bahamas and the Keys can fall outside a standard limit.</li>
        <li><strong>Marina and lender requirements.</strong> Marinas often ask for proof of liability coverage, and lenders require physical-damage coverage on financed boats.</li>
      </ul>

      <h2>What affects the price</h2>
      <ul>{factors.map(f => <li key={f}>{f}</li>)}</ul>
      <p>Insurers weigh these differently, which is why the same boat can be priced quite differently from one market to the next. Read the full breakdown in <a href="/guides/how-much-does-boat-insurance-cost-in-florida">how much boat insurance costs in Florida</a>.</p>

      <h2>How we help</h2>
      <p>Coast &amp; Marsh is an advisory, not a single insurer. We collect the details about your boat, explain the coverage options and approach the insurance markets that fit the vessel. Eligibility, pricing and terms are always set by the insurer, and we do not promise savings or coverage.</p>

      <h2>Frequently asked questions</h2>
      <div className="seo-faq">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>

      <div className="seo-cta">
        <div><strong>Ready for a real number?</strong><span>Send the details and we will reply by email.</span></div>
        <a className="button olive" href="/tools/yacht-insurance-cost-calculator#quote">Request a quote <span>→</span></a>
      </div>
      <p className="coverage-note">General information only, not a quote or coverage determination. Coverage availability and eligibility vary by insurer, vessel and owner.</p>
    </section>

    <SiteFooter />
  </main>;
}
