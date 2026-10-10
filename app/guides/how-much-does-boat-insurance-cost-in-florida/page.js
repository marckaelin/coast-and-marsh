import JsonLd from '../../components/JsonLd';
import { SiteHeader, SiteFooter } from '../../components/SiteChrome';
import { SITE } from '../../lib/site';

const path = '/guides/how-much-does-boat-insurance-cost-in-florida';

export const metadata = {
  title: 'How Much Does Boat Insurance Cost in Florida?',
  description: 'What drives boat and yacht insurance premiums in Florida: value, age, storage, location, experience and storm exposure, plus ways to get an accurate number.',
  alternates: { canonical: path }
};

const faqs = [
  ['Why is boat insurance more expensive in Florida?', 'Hurricane exposure, a high number of boats and a high volume of claims all push marine premiums up compared with many other states.'],
  ['Does a boat survey lower the premium?', 'A recent survey can help an insurer accept an older boat and set a value. It does not guarantee a lower premium.'],
  ['Is it cheaper to insure a boat on a trailer?', 'Often, because the boat is out of the water and exposed to less storm and docking risk, but it depends on the insurer and the boat.'],
  ['Does the estimator give me a quote?', 'No. It gives a rough planning range. A real quote comes from an insurer after reviewing your details.']
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Article', headline: 'How Much Does Boat Insurance Cost in Florida?', datePublished: '2026-10-10', dateModified: '2026-10-10', author: { '@id': `${SITE.url}/#agency` }, publisher: { '@id': `${SITE.url}/#agency` }, mainEntityOfPage: `${SITE.url}${path}` },
    { '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  ]
};

export default function Guide() {
  return <main className="contractor-page">
    <JsonLd data={schema} />
    <SiteHeader cta="Request a Quote" ctaHref="/tools/yacht-insurance-cost-calculator#quote" />
    <section className="yc-intro">
      <p className="eyebrow">GUIDE</p>
      <h1>How much does boat insurance cost in Florida?</h1>
      <p>There is no single price. Two similar boats can be priced very differently, and the reasons are mostly predictable. This guide covers what insurers look at so you can see where your boat sits.</p>
    </section>

    <section className="seo-prose">
      <div className="seo-cta">
        <div><strong>Want a rough range for your boat?</strong><span>The estimator takes about two minutes.</span></div>
        <a className="button olive" href="/tools/yacht-insurance-cost-calculator">Try the cost estimator <span>→</span></a>
      </div>

      <h2>The short answer</h2>
      <p>Premiums rise with the value and size of the boat, and with the risk of where and how you use it. A small trailered boat kept inland is a different risk from a large motor yacht kept in a wet slip on the coast. Rather than quote averages that would not fit most boats, here are the factors that move the price.</p>

      <h2>The factors that move the price</h2>
      <h3>Insured value</h3>
      <p>Physical-damage premiums are based mostly on what the boat is insured for. A higher value means a higher premium, and whether the policy pays agreed value or actual cash value changes what you receive after a total loss.</p>
      <h3>Age and condition</h3>
      <p>Older boats can be harder to place and may need a survey. Newer boats cost more to repair, which also raises the price. Insurers look at the engine, hull material and maintenance history.</p>
      <h3>Boat type and power</h3>
      <p>Personal watercraft, sailboats, center consoles and motor yachts are all rated differently. Faster, more powerful boats and those carrying more passengers usually cost more to insure.</p>
      <h3>Where it is kept</h3>
      <p>A boat on a trailer, a lift, dry stack or a wet slip carries different storm and docking risk. Florida location matters because of named-storm exposure, and some insurers limit coverage in higher-risk areas.</p>
      <h3>Where and how you use it</h3>
      <p>Navigational limits, offshore trips and any chartering or commercial use all affect eligibility and price. Tell the insurer how you really use the boat, because it can change what a claim pays.</p>
      <h3>Your experience and claims history</h3>
      <p>Boating experience, safety courses and a clean claims record can help. Recent claims or no experience with a boat of that size can raise the price or limit your options.</p>
      <h3>Deductibles and coverage choices</h3>
      <p>Higher deductibles lower the premium, and a named-storm deductible can be much larger than your standard one. Liability limits, personal effects and towing coverage also change the total.</p>

      <h2>How to get an accurate number</h2>
      <ol>
        <li>Gather the boat’s make, model, year, length, value and engine details.</li>
        <li>Note where it is kept and the waters you use.</li>
        <li>Have your claims history and boating experience ready.</li>
        <li>Use our <a href="/tools/yacht-insurance-cost-calculator">cost estimator</a> for a planning range, then <a href="/tools/yacht-insurance-cost-calculator#quote">request a quote</a> and we will approach insurers for you.</li>
      </ol>
      <p>Read more about <a href="/boat-insurance">boat and yacht insurance in Florida</a>.</p>

      <h2>Frequently asked questions</h2>
      <div className="seo-faq">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      <p className="coverage-note">General information only, not a quote, a coverage determination or a promise of savings. Eligibility, pricing and terms are determined by the insurer.</p>
    </section>
    <SiteFooter />
  </main>;
}
