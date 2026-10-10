export function SiteHeader({ cta = 'Get in Touch', ctaHref = 'mailto:marc.kaelin@coastandmarsh.com' }) {
  return <header className="smoke-header">
    <a className="logo" href="/"><span className="logo-mark">≋</span><span className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></span></a>
    <div className="contractor-header-actions"><a href="tel:+19049885028">904-988-5028</a><a className="button olive" href={ctaHref}>{cta}</a></div>
  </header>;
}

export function SiteFooter() {
  return <footer>
    <div className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></div>
    <div>Personal · Commercial · Specialty Industries</div>
    <div className="legal"><a href="/boat-insurance">Boat Insurance</a><a href="/contractor-insurance">Contractors</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div>
  </footer>;
}
