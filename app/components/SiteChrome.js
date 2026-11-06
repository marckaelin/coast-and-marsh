// Shared site header, main navigation and footer. Every link is a plain <a> in the
// server-rendered HTML so search engines and AI crawlers can follow it.
const LOGO = <a className="logo" href="/"><span className="logo-mark">≋</span><span className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></span></a>;

export const NAV = [
  { label: 'Personal Insurance', items: [['Private Client', '/private-client'], ['Boat & Yacht', '/boat-insurance'], ['Yacht Cost Estimator', '/tools/yacht-insurance-cost-calculator']] },
  { label: 'Business Insurance', items: [['Contractors', '/contractor-insurance'], ['Auto Repair Shops', '/auto-repair-shop-insurance'], ['Pest Control', '/pest-control-insurance'], ['Hemp & CBD', '/hemp-cbd-store-insurance'], ['Local Businesses', '/business-insurance-ponte-vedra-beach-st-johns-county']] },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' }
];

export function MainNav() {
  return <nav className="navlinks" aria-label="Main">
    {NAV.map((n) => n.items
      ? <div className="navgroup" key={n.label}>
          <a href={n.items[0][1]} aria-haspopup="true">{n.label} ▾</a>
          <div className="navmenu">{n.items.map(([l, h]) => <a key={h} href={h}>{l}</a>)}</div>
        </div>
      : <a key={n.href} href={n.href}>{n.label}</a>)}
  </nav>;
}

export function MobileNav() {
  return <details className="mobilenav">
    <summary aria-label="Menu">Menu</summary>
    <div className="mobilenav-panel">
      {NAV.map((n) => n.items
        ? <div key={n.label}><p>{n.label}</p>{n.items.map(([l, h]) => <a key={h} href={h}>{l}</a>)}</div>
        : <a key={n.href} href={n.href}>{n.label}</a>)}
    </div>
  </details>;
}

export function SiteHeader({ cta = 'Get in Touch', ctaHref = 'mailto:marc.kaelin@coastandmarsh.com' }) {
  return <header className="smoke-header">
    {LOGO}
    <MainNav />
    <div className="contractor-header-actions"><a className="header-phone" href="tel:+19049885026">904-988-5026</a><a className="button olive" href={ctaHref}>{cta}</a><MobileNav /></div>
  </header>;
}
export function SiteFooter() {
  return <footer>
    <div className="logo-copy"><strong>COAST &amp; MARSH</strong><small>INSURANCE ADVISORY</small></div>
    <div>Personal · Commercial · Specialty Industries<small className="footer-legal">Coast and Marsh Insurance LLC · Florida License G330108 · NPN 22179499 · Ponte Vedra Beach, FL · <a href="tel:+19049885026">904-988-5026</a> · <a href="mailto:marc.kaelin@coastandmarsh.com">marc.kaelin@coastandmarsh.com</a></small></div>
    <div className="legal"><a href="/private-client">Private Client</a><a href="/boat-insurance">Boat Insurance</a><a href="/contractor-insurance">Contractors</a><a href="/about">About</a><a href="/faq">FAQ</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div>
  </footer>;
}
