export const metadata = { alternates: { canonical: '/' } };

const services = [
  {
    title: 'Personal Risk',
    text: 'Protect your home, assets and lifestyle with coverage designed for how you live.',
    className: 'personal-card',
    href: '/boat-insurance'
  },
  {
    title: 'Commercial Risk',
    text: 'Solutions for growing businesses, complex operations and evolving risk environments.',
    className: 'commercial-card',
    href: '/contractor-insurance'
  },
  {
    title: 'Cannabis & Hemp',
    text: 'Specialized insurance for a dynamic, highly regulated industry backed by real expertise.',
    className: 'cannabis-card',
    href: '/hemp-cbd-store-insurance'
  }
];

const differences = [
  ['Advisory First', 'We start with your goals, exposures and what keeps you up at night.'],
  ['Tailored Solutions', 'Coverage designed around your unique risks, not a one-size-fits-all policy.'],
  ['Access to Top Carriers', 'Strong relationships help us pursue the right markets and solutions.'],
  ['Long-Term Partnership', 'Ongoing guidance as your life, business and regulatory landscape evolve.']
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Coast and Marsh home">
          <span className="logo-mark">≋</span>
          <span className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></span>
        </a>
        <nav className="navlinks">
          <a href="/boat-insurance">Boat Insurance</a>
          <a href="/contractor-insurance">Contractors</a>
          <a href="#commercial">Specialty Industries</a>
          <a href="/tools/yacht-insurance-cost-calculator">Cost Estimator</a>
          <a href="#approach">Our Approach</a>
          <a href="/about">About</a>
        </nav>
        <div className="header-actions">
          <div className="contact-mini"><a href="tel:+19049885026">904-988-5026</a><a href="mailto:marc.kaelin@coastandmarsh.com">marc.kaelin@coastandmarsh.com</a></div>
          <a className="button olive" href="#contact">Get in Touch</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">INDEPENDENT INSURANCE ADVISORY · PONTE VEDRA BEACH, FLORIDA</p>
          <h1>Protection Should<br/>Be Intentional.</h1>
          <p className="hero-copy">Coast &amp; Marsh is an independent insurance agency in Ponte Vedra Beach serving businesses and boat owners across Florida. We place <a href="/contractor-insurance" style={{color:'inherit'}}>contractor</a>, <a href="/auto-repair-shop-insurance" style={{color:'inherit'}}>auto repair</a>, <a href="/pest-control-insurance" style={{color:'inherit'}}>pest control</a>, <a href="/hemp-cbd-store-insurance" style={{color:'inherit'}}>hemp and CBD</a>, <a href="/business-insurance-ponte-vedra-beach-st-johns-county" style={{color:'inherit'}}>local business</a> and <a href="/boat-insurance" style={{color:'inherit'}}>boat and yacht</a> insurance with standard and specialty markets.</p>
          <div className="hero-actions">
            <a className="button olive" href="#contact">Let&apos;s Talk About Your Risk <span>→</span></a>
            <a className="button outline" href="#approach">Our Approach <span>→</span></a>
          </div>
        </div>
        <div className="hero-note"><span>LOCAL INSIGHT.</span><span>BROAD EXPERTISE.</span><span>REAL PROTECTION.</span><i /></div>
      </section>

      <section className="service-strip" id="personal">
        {services.map((service) => (
          <a href={service.href} className={`service-card ${service.className}`} key={service.title}>
            <div className="card-shade" />
            <div className="service-copy">
              <div className="service-icon" aria-hidden="true">{service.title === 'Personal Risk' ? '⌂' : service.title === 'Commercial Risk' ? '▦' : '✦'}</div>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
              <span className="learn">Learn More&nbsp; →</span>
            </div>
          </a>
        ))}
      </section>

      <section className="difference" id="approach">
        <p className="eyebrow">OUR DIFFERENCE</p>
        <h2>Understand the Risk. Protect What Matters.</h2>
        <div className="difference-grid">
          {differences.map(([title, text], index) => (
            <article key={title}>
              <div className="difference-icon">{['⌁','◇','◎','⬡'][index]}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-practice" id="commercial">
        <div className="commercial-intro">
          <div><p className="eyebrow light">COMMERCIAL PRACTICE</p><h2>Specialized risks deserve specialized conversations.</h2></div>
          <p>Our commercial practice focuses on businesses where regulation, product mix and evolving risk can make traditional placement difficult.</p>
        </div>
        <details open>
          <summary><span>Contractors</span><b>01</b></summary>
          <div className="detailbody">
            <p>Insurance markets can view general contractors, electricians, HVAC contractors, plumbers, roofers and specialty trades very differently. We help Florida contractors organize their risk, review their current program and pursue standard or specialty markets appropriate for the work they perform.</p>
            <div className="coverage"><span>General Liability</span><span>Workers&apos; Compensation</span><span>Commercial Auto</span><span>Tools &amp; Equipment</span><span>Umbrella / Excess</span><span>Builders Risk</span></div>
            <p className="small"><a href="/contractor-insurance" style={{color:'inherit'}}>Explore Contractor Insurance →</a></p>
          </div>
        </details>
        <details>
          <summary><span>Cannabis &amp; Hemp</span><b>02</b></summary>
          <div className="detailbody">
            <p>We understand that a cannabis or hemp submission is more than a business name and revenue number. Product mix, cannabinoids, manufacturing, distribution, property, inventory and regulatory structure can materially change what coverage is available.</p>
            <div className="coverage"><span>General Liability</span><span>Property</span><span>Product Liability</span><span>Workers&apos; Compensation</span><span>Commercial Auto</span><span>Excess / Umbrella</span></div>
            <p className="small">We work with specialty-market partners and help clients prepare the underwriting information needed to pursue appropriate coverage. Coverage availability and eligibility vary by risk and carrier.</p>
            <p className="small"><a href="/hemp-cbd-store-insurance" style={{color:'inherit'}}>Hemp and CBD store insurance →</a> · <a href="/guides/hemp-shop-insurance-after-december-11" style={{color:'inherit'}}>What to check before December 11 →</a> · <a href="/smoke-shop-insurance" style={{color:'inherit'}}>Start a review →</a></p>
          </div>
        </details>
        <details>
          <summary><span>Auto Repair Shops</span><b>03</b></summary>
          <div className="detailbody">
            <p>Repair, tire, transmission and body shops need coverage for the work they do and for the customer cars they hold. We shop garage liability, garagekeepers and workers&apos; compensation for Florida shops.</p>
            <div className="coverage"><span>Garage Liability</span><span>Garagekeepers</span><span>Workers&apos; Compensation</span><span>Property &amp; Tools</span><span>Business Income</span><span>Umbrella</span></div>
            <p className="small"><a href="/auto-repair-shop-insurance" style={{color:'inherit'}}>Auto repair shop insurance →</a> · <a href="/guides/garage-liability-vs-garagekeepers" style={{color:'inherit'}}>Garage liability vs garagekeepers →</a></p>
          </div>
        </details>
      </section>

      <section className="seo-prose" aria-labelledby="at-a-glance" style={{ paddingTop: 56 }}>
        <p className="eyebrow">AT A GLANCE</p>
        <h2 id="at-a-glance" style={{ marginTop: 6 }}>An independent Florida insurance agency</h2>
        <p>Coast &amp; Marsh Insurance Advisory is an independent agency in Ponte Vedra Beach that works with clients across Florida. Most of our commercial work is contractor insurance: general liability, workers’ compensation, commercial auto, umbrella and builders risk for electricians, roofers, HVAC and plumbing contractors, general contractors and specialty trades. We shop standard carriers and specialty surplus lines markets, so new contracting businesses, contractors moving into Florida and hard-to-place risks have options.</p>
        <p>We also insure auto repair shops and pest control and termite companies, place boat and yacht insurance, and review coverage for smoke shop, CBD and hemp businesses. You work directly with Marc Kaelin, a licensed Florida agent (license G330108).</p>
        <p><a href="/contractor-insurance">Contractor insurance</a> · <a href="/contractor-insurance/new-contractors">New contractors</a> · <a href="/auto-repair-shop-insurance">Auto repair shops</a> · <a href="/pest-control-insurance">Pest control</a> · <a href="/hemp-cbd-store-insurance">Hemp and CBD</a> · <a href="/boat-insurance">Boat insurance</a> · <a href="/about">About us</a> · <a href="/faq">FAQ</a></p>
      </section>

      <section className="closing" id="about">
        <div><p>Informed Risk Decisions for a Brighter Tomorrow</p><span>PERSONAL&nbsp;&nbsp; | &nbsp;&nbsp;COMMERCIAL&nbsp;&nbsp; | &nbsp;&nbsp;SPECIALTY INDUSTRIES</span></div>
        <a className="button closing-button" href="#contact">Get in Touch&nbsp; →</a>
      </section>

      <section className="contact" id="contact">
        <div><p className="eyebrow light">LET&apos;S TALK</p><h2>Start with a conversation.</h2><p>Tell us what you are protecting or building. We will help determine the next useful step.</p></div>
        <div className="contactinfo"><a href="mailto:marc.kaelin@coastandmarsh.com">marc.kaelin@coastandmarsh.com</a><a href="tel:+19049885026">904-988-5026</a></div>
      </section>

      <footer>
        <div className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></div>
        <div>Personal · Commercial · Specialty Industries<small className="footer-legal">Coast and Marsh Insurance LLC · Florida License G330108 · NPN 22179499 · Ponte Vedra Beach, FL · <a href="tel:+19049885026">904-988-5026</a> · <a href="mailto:marc.kaelin@coastandmarsh.com">marc.kaelin@coastandmarsh.com</a></small></div>
        <div className="legal"><a href="/boat-insurance">Boat Insurance</a><a href="/contractor-insurance">Contractors</a><a href="/about">About</a><a href="/faq">FAQ</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div>
      </footer>
    </main>
  );
}
