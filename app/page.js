const practices = [
  { title: 'Coastal Home', text: 'Coverage designed around the realities of coastal property, wind exposure, flood risk, replacement cost and high-value homes.' },
  { title: 'Auto & Lifestyle', text: 'Auto, umbrella, valuable property and the additional exposures that come with a coastal lifestyle.' },
  { title: 'Risk Portfolio Review', text: 'We look across policies and exposures together so coverage decisions are informed by the whole risk picture, not a single renewal.' }
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">COAST <span>&</span> MARSH</a>
        <div className="navlinks"><a href="#personal">Personal</a><a href="#commercial">Commercial</a><a href="#contact">Contact</a></div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow">INSURANCE ADVISORY · NORTHEAST FLORIDA</div>
        <h1>Insurance for life<br/>near the <em>water.</em></h1>
        <p className="lead">Thoughtful risk advice for coastal households and businesses operating where standard insurance approaches do not always fit.</p>
        <div className="actions"><a className="primary" href="#contact">Start a conversation</a><a className="secondary" href="#commercial">Explore commercial practice →</a></div>
      </section>

      <section className="section" id="personal">
        <div className="sectionhead"><div><div className="eyebrow">PERSONAL INSURANCE</div><h2>Protect the lifestyle,<br/>not just the property.</h2></div><p>Coastal insurance is rarely one-policy simple. We help clients understand how home, flood, wind, auto, umbrella and lifestyle exposures work together.</p></div>
        <div className="cards">{practices.map((p,i)=><article className="card" key={p.title}><div className="num">0{i+1}</div><h3>{p.title}</h3><p>{p.text}</p></article>)}</div>
      </section>

      <section className="commercial" id="commercial">
        <div className="eyebrow light">COMMERCIAL PRACTICE</div>
        <div className="commercialgrid"><div><h2>Specialized industries need specialized conversations.</h2></div><div><p>Our commercial practice focuses on businesses where regulation, product mix and evolving risk can make traditional placement difficult.</p></div></div>
        <details open><summary><span>Cannabis & Hemp</span><b>01</b></summary><div className="detailbody"><p>We understand that a cannabis or hemp submission is more than a business name and revenue number. Product mix, cannabinoids, manufacturing, distribution, property, inventory and regulatory structure can materially change what coverage is available.</p><div className="coverage"><span>General Liability</span><span>Property</span><span>Product Liability</span><span>Workers' Compensation</span><span>Commercial Auto</span><span>Excess / Umbrella</span></div><p className="small">We work with specialty-market partners and help clients prepare the underwriting information needed to pursue appropriate coverage. Coverage availability and eligibility vary by risk and carrier.</p></div></details>
        <details><summary><span>Additional Regulated Industries</span><b>02</b></summary><div className="detailbody"><p>Our regulated-market practice is designed to expand as we develop carrier relationships and industry expertise in additional specialty segments.</p></div></details>
      </section>

      <section className="approach"><div className="eyebrow">OUR APPROACH</div><h2>Informed risk decisions.</h2><p>We are not interested in changing a policy simply to change it. We help clients understand what they have, where meaningful gaps may exist, and where accepting risk may be reasonable.</p></section>

      <section className="contact" id="contact"><div><div className="eyebrow light">LET'S TALK</div><h2>Start with a conversation.</h2><p>Tell us what you are protecting or building. We will help determine the next useful step.</p></div><div className="contactinfo"><a href="mailto:marc.kaelin@coastandmarsh.com">marc.kaelin@coastandmarsh.com</a><a href="tel:+19049885028">904-988-5028</a></div></section>

      <footer><div className="brand">COAST <span>&</span> MARSH</div><div>Insurance Advisory · Northeast Florida</div><div className="legal"><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></footer>
    </main>
  );
}
