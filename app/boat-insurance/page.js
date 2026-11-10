import JsonLd from '../components/JsonLd';
import EmailQuote from '../components/EmailQuote';
import { EMAIL_QUOTE_BOAT } from '../lib/email-quote';
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
  ['Do you insure boats in Ponte Vedra Beach, St. Augustine and Jacksonville?', 'Yes. Coast & Marsh is based in Ponte Vedra Beach and works with boat owners on the Intracoastal Waterway, the St. Johns River and the Northeast Florida coast, as well as across the state.'],
  ['Does my policy cover a trip to the Bahamas?', 'Only if your navigational limits include it. Many Florida policies cover coastal waters but need an extension for the Bahamas or longer offshore passages. Ask before you go.'],
  ['What do insurers want in a hurricane plan?', 'Where the boat goes when a named storm is forecast (haul-out, a lift, a dry stack or a protected mooring), who moves it, and how it is secured. Some policies share the cost of a haul-out.'],
  ['My insurer non-renewed my boat. Can you help?', 'Often, yes. Non-renewals in Florida usually follow a storm claim, a change in mooring or an insurer pulling back from the coast. Send us the non-renewal notice and your current declarations page if you have it, and we will see which marine markets will look at the boat.'],
  ['Can I insure an older boat?', 'Usually. Many insurers ask for a recent marine survey on boats over a certain age, typically 15 to 25 years, and some limit hull coverage to actual cash value. A clean survey opens up more options.'],
  ['I am a first-time boat owner. Will insurers write me?', 'Yes, though some prefer experienced owners for larger or faster boats. A boating safety course and an honest description of how you will use the boat help.'],
  ['Can you insure a high-performance or high-horsepower boat?', 'We can shop it. Speed, horsepower and value narrow the list of insurers, so these boats are placed with marine specialists rather than standard home-and-auto carriers.'],
  ['How do I find out what mine would cost?', 'Use the free estimator for a rough range in about two minutes, then ask us for a real number. We will gather the details and approach insurers on your behalf.']
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Florida boat and yacht insurance advisory', serviceType: 'Boat insurance', provider: { '@id': `${SITE.url}/#agency` }, areaServed: [{ '@type': 'State', name: 'Florida' }, { '@type': 'AdministrativeArea', name: 'Northeast Florida' }], url: `${SITE.url}/boat-insurance` },
    { '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  ]
};

export default function BoatInsurance() {
  return <main className="contractor-page">
    <JsonLd data={schema} />
    <SiteHeader cta="Request a Quote" ctaHref="/tools/yacht-insurance-cost-calculator#quote" />

    <section className="yc-intro">
      <p className="eyebrow">FLORIDA BOAT &amp; YACHT INSURANCE</p>
      <h1>Florida boat insurance, including the boats other insurers pass on.</h1>
      <p>Older boats, high-horsepower center consoles, first-time owners, boats kept in a wet slip through hurricane season and boats non-renewed after a storm are hard to place in Florida. Coast &amp; Marsh, an independent agency in Ponte Vedra Beach, shops the marine insurers that will look at them and tells you quickly whether there is a fit. Call or text <a href="tel:+19049885026">904-988-5026</a> or email <a href="mailto:marc.kaelin@coastandmarsh.com?subject=Boat%20insurance%20quote">marc.kaelin@coastandmarsh.com</a> with the year, make, length and where the boat is kept.</p>
    </section>

    <section className="seo-prose">
      <div className="seo-cta">
        <div><strong>Not sure what to expect?</strong><span>Get a rough annual premium range in about two minutes.</span></div>
        <a className="button olive" href="/tools/yacht-insurance-cost-calculator">Try the cost estimator <span>→</span></a>
      </div>

      <h2>Boats we are often asked to place</h2>
      <p>If a direct insurer or your current agent said no, these are the situations we see most. Each one goes to a different kind of marine market.</p>
      <ul>
        <li><strong>Non-renewed or declined boats</strong>, including after a hurricane claim or a change in where the boat is kept.</li>
        <li><strong>Older boats</strong> that need a current marine survey before most insurers will quote.</li>
        <li><strong>First-time owners</strong> and owners moving up to a larger boat without much logged experience.</li>
        <li><strong>High-performance and high-horsepower boats</strong>, including triple and quad outboard center consoles.</li>
        <li><strong>Higher-value yachts</strong> that need agreed-value hull coverage, higher liability limits or crew coverage.</li>
        <li><strong>Boats kept in a wet slip or on the water</strong> in Northeast Florida during hurricane season.</li>
        <li><strong>Boats bought out of state</strong> and brought to Florida, where a new insurer and a Florida storm plan are needed.</li>
      </ul>
      <p>Eligibility, pricing and terms are set by the insurer. We do not promise coverage, but we will tell you plainly what the options are.</p>

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

      <h2>Boating in Northeast Florida</h2>
      <p>Coast &amp; Marsh is based in Ponte Vedra Beach, so we know the questions local owners get from insurers. Boats here are kept on the Intracoastal Waterway, the St. Johns River and the Tolomato and Matanzas rivers, on lifts behind homes, in dry stack storage and in wet slips at marinas from Jacksonville Beach to St. Augustine.</p>
      <ul>
        <li><strong>Storage changes the price.</strong> Dry stack and lift storage are usually viewed more favorably than a wet slip during hurricane season. Tell your agent exactly where the boat lives and where it goes in a storm.</li>
        <li><strong>Inlets and offshore runs.</strong> Running the St. Augustine or St. Johns inlets to fish offshore is common. Check that your navigational limits cover how far out you go, and any trips north to Georgia or south to the Keys and Bahamas.</li>
        <li><strong>Hurricane plans.</strong> Many insurers ask how and where you will secure or haul the boat before a named storm. A written plan can matter at underwriting and after a loss.</li>
      </ul>

      <h2>Vessels we help insure</h2>
      <ul>
        <li>Center consoles, bay boats and offshore fishing boats</li>
        <li>Sportfish and cruising yachts, including larger vessels that need a survey</li>
        <li>Sailboats and catamarans</li>
        <li>Pontoons, deck boats and ski and wake boats</li>
        <li>Personal watercraft (jet skis)</li>
      </ul>

      <h2>How a quote works</h2>
      <ol>
        <li>Send the basics: year, make, model, length, engines, value and where the boat is kept. The <a href="/tools/yacht-insurance-cost-calculator">cost estimator</a> collects them in two minutes.</li>
        <li>We ask about your experience, any prior claims, how you use the boat and how far you cruise.</li>
        <li>For older or larger boats, insurers may ask for a recent marine survey.</li>
        <li>We approach the marine insurers that fit the vessel and walk you through the differences in coverage, not just price.</li>
      </ol>

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

      <EmailQuote subject="Boat insurance quote" items={EMAIL_QUOTE_BOAT} />
      <p className="coverage-note">General information only, not a quote or coverage determination. Coverage availability and eligibility vary by insurer, vessel and owner.</p>
    </section>

    <SiteFooter />
  </main>;
}
