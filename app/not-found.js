import { SiteHeader, SiteFooter } from './components/SiteChrome';
import NotFoundTracker from './components/NotFoundTracker';

export const metadata = {
  title: 'Page not found | Coast & Marsh Insurance',
  robots: { index: false }
};

const LINKS = [
  ['Florida contractor insurance', '/contractor-insurance'],
  ['Auto repair shop insurance', '/auto-repair-shop-insurance'],
  ['Private client insurance for coastal homes', '/private-client'],
  ['Boat and yacht insurance', '/boat-insurance'],
  ['Hemp, CBD and smoke shop insurance', '/hemp-cbd-store-insurance'],
  ['Pest control insurance', '/pest-control-insurance'],
  ['About Coast & Marsh', '/about']
];

export default function NotFound() {
  return <main className="contractor-page">
    <NotFoundTracker />
    <SiteHeader />
    <section className="yc-intro">
      <p className="eyebrow">PAGE NOT FOUND</p>
      <h1>That page isn&apos;t here, but we are</h1>
      <p>The link may be old or mistyped. Call or text Marc at <a href="tel:+19049885026">904-988-5026</a>, email <a href="mailto:marc.kaelin@coastandmarsh.com">marc.kaelin@coastandmarsh.com</a>, or pick a page below.</p>
    </section>
    <section className="seo-prose">
      <ul>{LINKS.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
    </section>
    <SiteFooter />
  </main>;
}
