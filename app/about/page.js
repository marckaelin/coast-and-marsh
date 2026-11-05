import JsonLd from '../components/JsonLd';
import { SiteHeader, SiteFooter } from '../components/SiteChrome';
import { SITE } from '../lib/site';

export const metadata = {
  title: { absolute: 'About Coast & Marsh Insurance Advisory' },
  description: 'Coast & Marsh is an independent Florida insurance agency in Ponte Vedra Beach run by licensed agent Marc Kaelin. Contractor, specialty and boat insurance.',
  alternates: { canonical: '/about' }
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: `${SITE.url}/about`,
  mainEntity: { '@id': `${SITE.url}/#agency` }
};

export default function About() {
  return <main className="contractor-page">
    <JsonLd data={schema} />
    <SiteHeader cta="Get in Touch" ctaHref="/contractor-insurance#review" />
    <section className="yc-intro">
      <p className="eyebrow">ABOUT</p>
      <h1>An independent Florida agency for risks that need a closer look</h1>
      <p>Coast &amp; Marsh Insurance Advisory is an independent insurance agency based in Ponte Vedra Beach, Florida. We work with contractors, specialty businesses and boat owners across the state.</p>
    </section>
    <section className="seo-prose">
      <h2>What we do</h2>
      <p>We place commercial insurance for Florida contractors, including general liability, workers’ compensation, commercial auto, umbrella and excess, tools and equipment, and builders risk. We also insure Florida auto repair shops (garage liability, garagekeepers and workers’ comp) and pest control and termite companies (pesticide liability and termite errors and omissions), place boat and yacht insurance, and review coverage for hemp, CBD and smoke shop businesses.</p>
      <p>Because we are independent, we can shop both standard carriers and specialty (surplus lines) markets through wholesale partners. That matters for roofers, high-hazard trades, startups and businesses that have been declined elsewhere.</p>

      <h2>Who we help most</h2>
      <ul>
        <li>New contracting businesses and newly licensed contractors who need general liability to get licensed or start their first job</li>
        <li>Contractors from other states starting work in Florida</li>
        <li>Established contractors who want their renewal shopped with markets that understand their trade</li>
        <li>Risks other agents couldn’t place</li>
      </ul>

      <h2>Who you’ll work with</h2>
      <p>Marc Kaelin is the licensed Florida agent behind Coast &amp; Marsh (Florida license G330108, National Producer Number 22179499). He spent about 15 years in insurance, mostly on the corporate side, working across both personal and commercial lines.</p>
      <p>He started Coast &amp; Marsh for a simple reason. Most people buy insurance because a lender, a landlord, a contract or the state says they have to. If you are going to spend the money anyway, you should get real value from it: the right coverage, at limits that fit, with someone who explains what you are actually buying. That is the job here.</p>
      <p>You deal with Marc directly, from the first email to the certificate of insurance. Outside the office he is a father of four daughters who enjoys tennis, follows just about every sport and loves to cook.</p>

      <h2>Where we work</h2>
      <p>All of Florida. The office is in Ponte Vedra Beach in Northeast Florida, and everything from quote to policy can be handled by phone and email.</p>

      <h2>Contact</h2>
      <p>Call or text <a href="tel:+19049885026">{SITE.phoneDisplay}</a>, email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, or use the <a href="/contractor-insurance#review">contractor quote form</a>. Common questions are answered on the <a href="/faq">FAQ page</a>.</p>
      <p className="coverage-note">Coast and Marsh Insurance LLC. Coverage availability, pricing and terms are determined by the insurer.</p>
    </section>
    <SiteFooter />
  </main>;
}
