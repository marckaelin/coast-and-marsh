import JsonLd from '../components/JsonLd';
import EmailQuote from '../components/EmailQuote';
import { EMAIL_QUOTE_PRIVATE_CLIENT } from '../lib/email-quote';
import { SiteHeader, SiteFooter } from '../components/SiteChrome';
import { SITE } from '../lib/site';
import ReviewForm from './ReviewForm';

export const metadata = {
  title: 'Private Client Insurance for Coastal Florida Homes',
  description: 'High-value home, flood, boat, jewelry, art, golf cart and umbrella coverage reviewed together for Ponte Vedra Beach and Northeast Florida coastal households.',
  alternates: { canonical: '/private-client' }
};

const pieces = [
  ['The home', 'Dwelling limits that keep up with rebuild costs on the coast, extended or guaranteed replacement cost where available, and a clear view of the hurricane deductible before a storm, not after.'],
  ['Wind and flood', 'Government flood policies cap the building at $250,000. Waterfront and higher-value homes often need private or excess flood above that, and most new flood policies have a waiting period.'],
  ['Boats and yachts', 'Agreed value, navigational limits and a written hurricane plan, coordinated with your home and umbrella so liability limits line up.', '/boat-insurance'],
  ['Jewelry, watches and art', 'Standard home policies cap theft of jewelry and watches at a low amount. Scheduling pieces covers them for appraised value, often including loss, and fine art can be insured at agreed value, in transit too.'],
  ['Golf carts', 'Many homeowners policies cover a golf cart only on your property. On community roads and trails, a golf cart policy with liability closes the gap; street-legal carts need auto coverage.'],
  ['Parties and events at home', 'Weddings, fundraisers and big gatherings bring guests, vendors and alcohol. An event policy, host liquor liability and a check of vendors’ insurance keep one evening from becoming a lawsuit.'],
  ['Umbrella liability', 'More to protect means more to lose in a lawsuit. A personal umbrella sits over the home, autos, boat and golf cart, but only if each underlying policy carries the limits it requires.']
];

const gaps = [
  'A hurricane deductible of 2% to 5% of the dwelling limit: on a $4M home, that can be $80,000 to $200,000.',
  'Flood coverage that stops at $250,000 on a home worth several times that.',
  'An engagement ring or watch collection covered for a small theft limit instead of its appraised value.',
  'A golf cart driven on community roads with no liability coverage.',
  'An umbrella that does not respond because the boat or a second home carries lower limits than it requires.',
  'A party with hired vendors and an open bar on a policy that was never built for it.'
];

const steps = [
  'Tell us what you own and where, in two minutes on the form below or by email.',
  'Send your current policy pages if you have them handy. If not, we can start from a conversation.',
  'Marc reviews the policies side by side and sends back a one-page summary of gaps and options.',
  'If a change makes sense, we approach the standard, specialty and surplus lines markets that fit each piece.'
];

const faqs = [
  ['What is private client insurance?', 'It is coverage built for households with higher-value homes, collections and more liability exposure. The point is to look at the home, flood, boat, valuables, autos and umbrella together, so limits line up and nothing falls between policies.'],
  ['Can you insure oceanfront and high-value homes in Florida?', 'Often, yes. Depending on the home, coverage may come from a standard carrier, a carrier that specializes in high-value homes, or the surplus lines market. Availability depends on the home, its location and its loss history, and we will tell you plainly what we find.'],
  ['Do I need my policy documents to start?', 'No. They speed things up if you have them handy, but a short conversation is enough to begin.'],
  ['What does the coverage review cost?', 'Nothing. You get a written summary of what we found, and you decide whether to change anything.'],
  ['Do you work outside Ponte Vedra Beach?', 'Yes. We are based in Ponte Vedra Beach and work with households across Northeast Florida, including Nocatee, St. Augustine, Jacksonville Beach, Atlantic Beach and Amelia Island, and across the state.']
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Private client insurance advisory for coastal Florida homes', serviceType: 'High-value home and personal insurance', provider: { '@id': `${SITE.url}/#agency` }, areaServed: [{ '@type': 'State', name: 'Florida' }, { '@type': 'AdministrativeArea', name: 'Northeast Florida' }], url: `${SITE.url}/private-client` },
    { '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  ]
};

export default function PrivateClient() {
  return <main className="contractor-page">
    <JsonLd data={schema} />
    <SiteHeader cta="Request a Review" ctaHref="#review" />

    <section className="yc-intro">
      <p className="eyebrow">PRIVATE CLIENT · PONTE VEDRA BEACH &amp; NORTHEAST FLORIDA</p>
      <h1>Coverage for the way you live on the coast.</h1>
      <p>The home, the boat, the jewelry and art, the golf cart, the parties you host. Each one usually sits on a different policy, and the gaps live between them. Coast &amp; Marsh, an independent agency in Ponte Vedra Beach, reviews them together so your limits line up and nothing is left exposed.</p>
      <div className="contractor-actions"><a className="button olive" href="#review">Request a Coastal Coverage Review <span>→</span></a><a className="button outline" href="tel:+19049885026">Talk with Marc</a></div>
    </section>

    <section className="seo-prose">
      <h2>What we look at</h2>
      <div className="seo-grid">{pieces.map(([t, d, href]) => <article key={t}><h3>{href ? <a href={href}>{t}</a> : t}</h3><p>{d}</p></article>)}</div>

      <h2>Gaps we often find</h2>
      <ul>{gaps.map((g) => <li key={g}>{g}</li>)}</ul>
      <p>None of these mean a policy is wrong. They mean it was bought one piece at a time. A review puts the pieces side by side.</p>

      <h2>How the Coastal Coverage Review works</h2>
      <ol>{steps.map((s) => <li key={s}>{s}</li>)}</ol>
      <p>You work directly with Marc Kaelin, a licensed Florida agent (license G330108). We are an independent advisory, not a single insurer, so we can look across markets for each part of your coverage.</p>

      <div id="review" style={{ scrollMarginTop: 90, margin: '36px 0' }}><ReviewForm /></div>

      <h2>Frequently asked questions</h2>
      <div className="seo-faq">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>

      <EmailQuote subject="Coastal coverage review" items={EMAIL_QUOTE_PRIVATE_CLIENT} heading="Prefer to start by email?" />
      <p className="coverage-note">General information only, not a quote or coverage determination. Figures are typical examples, not terms of any specific policy. Coverage availability, eligibility and pricing are set by the insurer and vary by property, location and history. We do not promise savings or coverage.</p>
    </section>

    <SiteFooter />
  </main>;
}
