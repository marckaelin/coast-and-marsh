import Calculator from './Calculator';

export const metadata = {
  title: 'Yacht Insurance Cost Estimator | Coast & Marsh Insurance Advisory',
  description: 'Get a rough annual premium range for a yacht, powerboat or jet ski in about two minutes, then ask for a real quote. Estimates only; not a binding quote.'
};

export default function YachtEstimator() {
  return <main className="contractor-page">
    <header className="smoke-header">
      <a className="logo" href="/"><span className="logo-mark">≋</span><span className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></span></a>
      <div className="contractor-header-actions"><a href="tel:+19049885028">904-988-5028</a><a className="button olive" href="#quote">Request a Quote</a></div>
    </header>

    <section className="yc-intro">
      <p className="eyebrow">YACHT &amp; BOAT INSURANCE</p>
      <h1>What might it cost to insure your boat?</h1>
      <p>Answer a few questions to see a rough annual premium range. It is a planning estimate, not a quote. If you would like a real number, send us the details at the end and we will reply by email.</p>
    </section>

    <Calculator />

    <footer><div className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></div><div>Personal · Commercial · Specialty Industries</div><div className="legal"><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></footer>
  </main>
}
