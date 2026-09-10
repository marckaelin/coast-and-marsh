const services = [
  {
    title: 'Personal Risk',
    text: 'Protect your home, assets and lifestyle with coverage designed for how you live.',
    className: 'personal-card',
    href: '#personal'
  },
  {
    title: 'Commercial Risk',
    text: 'Solutions for growing businesses, complex operations and evolving risk environments.',
    className: 'commercial-card',
    href: '#commercial'
  },
  {
    title: 'Cannabis & Hemp',
    text: 'Specialized insurance for a dynamic, highly regulated industry backed by real expertise.',
    className: 'cannabis-card',
    href: '#commercial'
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
          <a href="#personal">Personal</a>
          <a href="#commercial">Commercial</a>
          <a href="#commercial">Specialty Industries</a>
          <a href="#approach">Our Approach</a>
          <a href="#about">About</a>
        </nav>
        <div className="header-actions">
          <div className="contact-mini"><a href="tel:+19049885028">904-988-5028</a><a href="mailto:marc.kaelin@coastandmarsh.com">marc.kaelin@coastandmarsh.com</a></div>
          <a className="button olive" href="#contact">Get in Touch</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">RISK IS EVERYWHERE.</p>
          <h1>Protection Should<br/>Be Intentional.</h1>
          <p className="hero-copy">Coast &amp; Marsh helps individuals and businesses understand their risks, identify gaps, and build insurance strategies designed around what they actually need to protect.</p>
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
          <summary><span>Cannabis &amp; Hemp</span><b>01</b></summary>
          <div className="detailbody">
            <p>We understand that a cannabis or hemp submission is more than a business name and revenue number. Product mix, cannabinoids, manufacturing, distribution, property, inventory and regulatory structure can materially change what coverage is available.</p>
            <div className="coverage"><span>General Liability</span><span>Property</span><span>Product Liability</span><span>Workers&apos; Compensation</span><span>Commercial Auto</span><span>Excess / Umbrella</span></div>
            <p className="small">We work with specialty-market partners and help clients prepare the underwriting information needed to pursue appropriate coverage. Coverage availability and eligibility vary by risk and carrier.</p>
          </div>
        </details>
        <details>
          <summary><span>Additional Regulated Industries</span><b>02</b></summary>
          <div className="detailbody"><p>Our regulated-market practice is designed to expand as we develop carrier relationships and industry expertise in additional specialty segments.</p></div>
        </details>
      </section>

      <section className="closing" id="about">
        <div><p>Informed Risk Decisions for a Brighter Tomorrow</p><span>PERSONAL&nbsp;&nbsp; | &nbsp;&nbsp;COMMERCIAL&nbsp;&nbsp; | &nbsp;&nbsp;SPECIALTY INDUSTRIES</span></div>
        <a className="button closing-button" href="#contact">Get in Touch&nbsp; →</a>
      </section>

      <section className="contact" id="contact">
        <div><p className="eyebrow light">LET&apos;S TALK</p><h2>Start with a conversation.</h2><p>Tell us what you are protecting or building. We will help determine the next useful step.</p></div>
        <div className="contactinfo"><a href="mailto:marc.kaelin@coastandmarsh.com">marc.kaelin@coastandmarsh.com</a><a href="tel:+19049885028">904-988-5028</a></div>
      </section>

      <footer>
        <div className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></div>
        <div>Personal · Commercial · Specialty Industries</div>
        <div className="legal"><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div>
      </footer>
    </main>
  );
}
