import JsonLd from '../components/JsonLd';
import EmailQuote from '../components/EmailQuote';
import { EMAIL_QUOTE_PRIVATE_CLIENT } from '../lib/email-quote';
import { SiteHeader, SiteFooter } from '../components/SiteChrome';
import { SITE } from '../lib/site';
import ReviewForm from './ReviewForm';

export const metadata = {
  title: 'Private Client Insurance for Coastal Florida Homes',
  description: 'Private client insurance for coastal Florida: high-value and non-renewed homes, private flood, boats, jewelry, watches and art reviewed together, with renewal inspections, replacement cost appraisals and storm check-ins handled for you.',
  alternates: { canonical: '/private-client' }
};

const pieces = [
  ['The home', 'Dwelling limits that keep up with rebuild costs on the coast, extended or guaranteed replacement cost where available, and a clear view of the hurricane deductible before a storm, not after.'],
  ['Wind and flood', 'Government flood policies cap the building at $250,000. Waterfront and higher-value homes often need private or excess flood above that, and most new flood policies have a waiting period.', '/guides/private-flood-insurance-florida'],
  ['Boats and yachts', 'Agreed value, navigational limits and a written hurricane plan, coordinated with your home and umbrella so liability limits line up.', '/boat-insurance'],
  ['Jewelry, watches and art', 'Standard home policies cap theft of jewelry and watches at a low amount. Scheduling pieces covers them for appraised value, often including loss, and fine art can be insured at agreed value, in transit too.', '/guides/insure-jewelry-watches-art-florida'],
  ['Golf carts', 'Many homeowners policies cover a golf cart only on your property. On community roads and trails, a golf cart policy with liability closes the gap; street-legal carts need auto coverage.'],
  ['Parties and events at home', 'Weddings, fundraisers and big gatherings bring guests, vendors and alcohol. An event policy, host liquor liability and a check of vendors’ insurance keep one evening from becoming a lawsuit.'],
  ['Umbrella liability', 'More to protect means more to lose in a lawsuit. A personal umbrella sits over the home, autos, boat and golf cart, but only if each underlying policy carries the limits it requires.']
];

const care = [
  ['Renewals and inspections', 'We handle renewal photo inspections and the wind mitigation, 4-point and roof inspections insurers ask for, so you are not chasing them.'],
  ['Replacement cost appraisals', 'For higher-value homes we bring in an appraiser to estimate what rebuilding would actually cost, so the dwelling limit is based on the house, not a guess.'],
  ['Schedules kept current', 'We track jewelry, watch and art schedules and appraisal dates, and update them as you buy, sell or inherit pieces.'],
  ['Storm season', 'Before a named storm we check in on deductibles and documentation. Afterward, when it is safe, we come out to see the damage and help you start the claim.'],
  ['One review a year', 'Each year we put the home, flood, boats, valuables, autos and umbrella side by side again, because what you own changes.']
];

const situations = [
  ['Your home insurance was non-renewed', '/guides/florida-home-insurance-non-renewed'],
  ['Your home is worth more than flood insurance covers', '/guides/private-flood-insurance-florida'],
  ['Your home is worth more than Citizens or your current carrier will insure'],
  ['An older roof or older home that insurers are questioning'],
  ['A new ring, watch or painting that is not scheduled yet', '/guides/insure-jewelry-watches-art-florida'],
  ['A second or seasonal home, or a home you rent out part of the year'],
  ['A boat, golf cart or teen driver that changed what your umbrella needs to cover']
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
  ['Who is the Private Client service a fit for?', 'Usually households with a home around $1M or more, more than one property, or boats, jewelry, art or other collections. If you are not sure, ask. We will tell you honestly whether the service fits.'],
  ['What does Coast & Marsh do beyond quoting?', 'We handle renewal photo inspections and the inspections insurers ask for, bring in an appraiser to estimate replacement cost on higher-value homes, keep jewelry and art schedules current, check in before storms and come out afterward to help start a claim, and review everything together once a year.'],
  ['My homeowners insurance was non-renewed. Can you help?', 'Often, yes. Send the notice and your declarations page if you have them. We will look at standard, high-value home and surplus lines markets that may fit. See our guide on what to do when a Florida home policy is non-renewed.'],
  ['How do I insure a home worth more than $250,000 for flood?', 'Government flood policies stop at $250,000 for the building. Private flood or excess flood can add coverage above that. Availability and waiting periods depend on the insurer and the home.'],
  ['How should I insure jewelry, watches and art?', 'Schedule them on a policy at appraised value. That usually covers far more than the home policy’s theft limit and often includes loss. Art is usually insured at an agreed value.'],
  ['Do you work outside Ponte Vedra Beach?', 'Yes. We are based in Ponte Vedra Beach and work with households across Northeast Florida, including Nocatee, St. Augustine, Jacksonville Beach, Atlantic Beach and Amelia Island, and across the state.']
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Private client insurance advisory for coastal Florida homes', serviceType: 'High-value home and personal insurance', description: metadata.description, provider: { '@id': `${SITE.url}/#agency` }, areaServed: [{ '@type': 'State', name: 'Florida' }, { '@type': 'AdministrativeArea', name: 'Northeast Florida' }], url: `${SITE.url}/private-client` },
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
      <p>The home, the boat, the jewelry and art, the golf cart, the parties you host. Each one usually sits on a different policy, and the gaps live between them. Coast &amp; Marsh, an independent agency in Ponte Vedra Beach, reviews them together, then stays with you: inspections, appraisals, schedules and storm season. Email <a href="mailto:marc.kaelin@coastandmarsh.com?subject=Coastal%20coverage%20review">marc.kaelin@coastandmarsh.com</a> or call or text <a href="tel:+19049885026">904-988-5026</a>.</p>
      <div className="contractor-actions"><a className="button olive" href="#review">Request a Coastal Coverage Review <span>→</span></a><a className="button outline" href="tel:+19049885026">Talk with Marc</a></div>
    </section>

    <section className="seo-prose">
      <h2>What we look at</h2>
      <div className="seo-grid">{pieces.map(([t, d, href]) => <article key={t}><h3>{href ? <a href={href}>{t}</a> : t}</h3><p>{d}</p></article>)}</div>

      <h2>Situations we help with</h2>
      <ul>{situations.map(([t, href]) => <li key={t}>{href ? <a href={href}>{t}</a> : t}</li>)}</ul>

      <h2>How we take care of you</h2>
      <div className="seo-grid">{care.map(([t, d]) => <article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div>
      <p>The service is usually a fit for households with a home around $1M or more, more than one property, or boats and collections. If you are not sure, ask.</p>

      <h2>Gaps we often find</h2>
      <ul>{gaps.map((g) => <li key={g}>{g}</li>)}</ul>
      <p>None of these mean a policy is wrong. They mean it was bought one piece at a time. A review puts the pieces side by side.</p>

      <h2>How the Coastal Coverage Review works</h2>
      <ol>{steps.map((s) => <li key={s}>{s}</li>)}</ol>
      <p>You work directly with Marc Kaelin, a licensed Florida agent (license G330108). We are an independent advisory, not a single insurer, so we can look across markets for each part of your coverage.</p>

      <div id="review" style={{ scrollMarginTop: 90, margin: '36px 0' }}><ReviewForm /></div>

      <h2>Frequently asked questions</h2>
      <div className="seo-faq">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>

      <h2>Guides</h2>
      <ul>
        <li><a href="/guides/florida-home-insurance-non-renewed">Florida home insurance non-renewed? What to do next</a></li>
        <li><a href="/guides/private-flood-insurance-florida">Private and excess flood insurance in Florida</a></li>
        <li><a href="/guides/insure-jewelry-watches-art-florida">How to insure jewelry, watches and art in Florida</a></li>
        <li><a href="/boat-insurance">Florida boat and yacht insurance</a></li>
      </ul>

      <EmailQuote subject="Coastal coverage review" items={EMAIL_QUOTE_PRIVATE_CLIENT} heading="Prefer to start by email?" />
      <p className="coverage-note">General information only, not a quote or coverage determination. Figures are typical examples, not terms of any specific policy. Coverage availability, eligibility and pricing are set by the insurer and vary by property, location and history. We do not promise savings or coverage.</p>
    </section>

    <SiteFooter />
  </main>;
}
