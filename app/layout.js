import './globals.css';
import Script from 'next/script';

import JsonLd from './components/JsonLd';
import LinkTracking from './components/LinkTracking';
import { GA4_ID, ADS_ID } from './lib/analytics';
import { SITE } from './lib/site';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Coast & Marsh Insurance Advisory | Florida Boat, Contractor & Specialty Insurance',
    template: '%s | Coast & Marsh Insurance Advisory'
  },
  description: 'Florida insurance advisory for boat and yacht owners, contractors and regulated businesses. Coast & Marsh reviews your risk and pursues the insurance markets that fit.',
  applicationName: SITE.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: 'Coast & Marsh Insurance Advisory',
    description: 'Florida boat, contractor and specialty-industry insurance advisory.',
    locale: 'en_US'
  },
  twitter: { card: 'summary_large_image', title: 'Coast & Marsh Insurance Advisory', description: 'Florida boat, contractor and specialty-industry insurance advisory.' },
  // Search Console / Bing Webmaster HTML-tag verification. Set the tokens in Vercel env vars; unset = no tag.
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : {}),
    ...(process.env.BING_SITE_VERIFICATION ? { other: { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } } : {})
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'InsuranceAgency',
      '@id': `${SITE.url}/#agency`,
      name: SITE.name,
      alternateName: ['Coast and Marsh Insurance', 'Coast & Marsh Insurance', 'Coast and Marsh Insurance Advisory'],
      legalName: 'Coast and Marsh Insurance LLC',
      slogan: 'Florida contractor, specialty business and boat insurance',
      identifier: [
        { '@type': 'PropertyValue', name: 'Florida insurance agent license', value: 'G330108' },
        { '@type': 'PropertyValue', name: 'National Producer Number (NPN)', value: '22179499' }
      ],
      address: { '@type': 'PostalAddress', addressLocality: 'Ponte Vedra Beach', addressRegion: 'FL', postalCode: '32082', addressCountry: 'US' },
      url: SITE.url,
      logo: `${SITE.url}/opengraph-image`,
      image: `${SITE.url}/opengraph-image`,
      telephone: SITE.phone,
      email: SITE.email,
      contactPoint: { '@type': 'ContactPoint', telephone: SITE.phone, email: SITE.email, contactType: 'sales', areaServed: 'US-FL', availableLanguage: 'English' },
      areaServed: { '@type': 'State', name: 'Florida' },
      founder: { '@id': `${SITE.url}/#marc-kaelin` },
      employee: { '@id': `${SITE.url}/#marc-kaelin` },
      description: 'Independent Florida insurance agency in Ponte Vedra Beach. Places contractor insurance (general liability, workers compensation, commercial auto, umbrella, tools, builders risk) through standard and surplus lines markets, including for startups, out-of-state contractors working in Florida and hard-to-place trades. Also boat and yacht insurance and smoke shop and hemp business insurance.',
      knowsAbout: ['Contractor insurance', 'General liability insurance', 'Workers compensation insurance', 'Commercial auto insurance', 'Umbrella and excess liability insurance', 'Builders risk insurance', 'Surplus lines insurance', 'Roofing contractor insurance', 'Electrical contractor insurance', 'New contractor insurance', 'Boat insurance', 'Yacht insurance', 'Smoke shop and hemp insurance', 'Hemp and CBD products liability', 'Auto repair shop insurance', 'Garagekeepers insurance', 'Pest control insurance', 'Termite and WDO errors and omissions insurance'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Insurance placed by Coast & Marsh',
        itemListElement: [
          ['Florida contractor insurance', '/contractor-insurance'],
          ['Insurance for new Florida contractors and startups', '/contractor-insurance/new-contractors'],
          ['Florida boat and yacht insurance', '/boat-insurance'],
          ['Hemp, CBD and smoke shop insurance', '/hemp-cbd-store-insurance'],
          ['Auto repair shop insurance', '/auto-repair-shop-insurance'],
          ['Pest control and termite company insurance', '/pest-control-insurance']
        ].map(([name, path]) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, url: `${SITE.url}${path}`, areaServed: { '@type': 'State', name: 'Florida' } } }))
      }
    },
    {
      '@type': 'Person',
      '@id': `${SITE.url}/#marc-kaelin`,
      name: 'Marc Kaelin',
      jobTitle: 'Licensed insurance agent',
      worksFor: { '@id': `${SITE.url}/#agency` },
      email: SITE.email,
      telephone: SITE.phone,
      url: `${SITE.url}/about`
    },
    { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { '@id': `${SITE.url}/#agency` } }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><JsonLd data={orgSchema} />{children}<LinkTracking /></body>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
      <Script id="google-tag" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}');
gtag('config', '${ADS_ID}');`}</Script>
    </html>
  );
}
