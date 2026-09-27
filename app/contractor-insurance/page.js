export const metadata = {
  title: 'Florida Contractor Insurance | Coast & Marsh Insurance Advisory',
  description: 'Insurance market reviews for Florida contractors, including electrical, HVAC, plumbing, roofing, general contractors and specialty trades.'
};

const trades = ['General Contractors','Building & Residential','Electrical','HVAC & Mechanical','Plumbing','Roofing','Painting','Flooring & Tile','Carpentry & Framing','Specialty Trades'];
const coverages = [
  ['General Liability','Protection for third-party bodily injury, property damage and covered operations.'],
  ['Workers’ Compensation','Coverage for employee work-related injuries, subject to Florida requirements and carrier underwriting.'],
  ['Commercial Auto','Coverage for owned business vehicles and eligible contractor auto exposures.'],
  ['Tools & Equipment','Inland marine options can help protect mobile tools and equipment used away from your premises.'],
  ['Umbrella / Excess','Additional liability limits for contracts, larger projects and higher-severity exposures.'],
  ['Builders Risk','Property coverage options for eligible buildings and projects while construction is underway.']
];

export default function ContractorInsurance() {
  return <main className="contractor-page">
    <header className="smoke-header">
      <a className="logo" href="/"><span className="logo-mark">≋</span><span className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></span></a>
      <div className="contractor-header-actions"><a href="tel:+19049885028">904-988-5028</a><a className="button olive" href="#review">Request a Review</a></div>
    </header>

    <section className="contractor-hero">
      <div className="contractor-copy">
        <p className="eyebrow">FLORIDA CONTRACTOR INSURANCE</p>
        <h1>Your trade matters.<br/><em>Your insurance market does too.</em></h1>
        <p>Contractors are not all the same risk. Coast &amp; Marsh works with standard and specialty insurance markets to help Florida contractors pursue coverage that fits the work they actually perform.</p>
        <div className="contractor-actions"><a className="button olive" href="#review">Request an Insurance Review <span>→</span></a><a className="button outline" href="tel:+19049885028">Talk with us</a></div>
        <div className="trust-row"><span>Florida-focused</span><span>Specialty-market access</span><span>Human review</span></div>
      </div>
      <aside className="market-card">
        <p className="eyebrow">ALREADY INSURED?</p>
        <h2>Good. Let&apos;s see whether you&apos;re paying the right market for your risk.</h2>
        <p>Different carriers can view the same trade very differently. We start with your current program, the work you perform and your renewal timing, then determine which markets may be worth exploring.</p>
        <a href="#review">Review my current insurance <span>→</span></a>
        <small>No promise of savings or coverage. Eligibility, pricing and terms are determined by the insurer.</small>
      </aside>
    </section>

    <section className="trade-section">
      <p className="eyebrow">TRADES WE WORK WITH</p>
      <h2>Built around the work you actually do.</h2>
      <p className="section-lead">A roofer, electrician, plumber and commercial general contractor can have very different exposures. We organize the submission around your actual operations instead of treating “contractor” as one class.</p>
      <div className="trade-grid">{trades.map((trade,i)=><div key={trade}><b>{String(i+1).padStart(2,'0')}</b><span>{trade}</span></div>)}</div>
    </section>

    <section className="contractor-market">
      <div><p className="eyebrow light">WHY MARKET ACCESS MATTERS</p><h2>The right question isn&apos;t just “Do I have insurance?”</h2></div>
      <div><p>It is whether your carrier understands your trade, whether the policy reflects the work you perform, and whether the price is competitive for that risk.</p><p>Coast &amp; Marsh can access standard and specialty-market partners for construction risks. We help prepare the underwriting story and pursue markets appropriate for the account.</p></div>
    </section>

    <section className="coverage-section">
      <p className="eyebrow">COVERAGE CONVERSATION</p><h2>Common contractor coverages.</h2>
      <div className="coverage-grid">{coverages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      <p className="coverage-note">Coverage needs, availability and eligibility vary by contractor, operations, project mix and carrier. This page is general information, not a quote or coverage determination.</p>
    </section>

    <section className="review-section" id="review">
      <div><p className="eyebrow light">START WITH YOUR RENEWAL</p><h2>Have a renewal coming up?</h2><p>You do not need to complete a long application to start. Send us the basics and we&apos;ll determine the next useful step.</p></div>
      <div className="review-card">
        <h3>A useful first conversation</h3>
        <ul><li>Your trade and the work you perform</li><li>Residential, commercial or both</li><li>Annual revenue and payroll</li><li>Employees and subcontractor use</li><li>Current carrier and approximate premium</li><li>Your renewal date</li></ul>
        <a className="button olive" href="mailto:marc.kaelin@coastandmarsh.com?subject=Contractor%20Insurance%20Review">Request my insurance review <span>→</span></a>
        <a className="review-phone" href="tel:+19049885028">Or call 904-988-5028</a>
      </div>
    </section>

    <footer><div className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></div><div>Personal · Commercial · Specialty Industries</div><div className="legal"><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></footer>
  </main>
}