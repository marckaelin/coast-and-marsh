import './globals.css';
import Script from 'next/script';

import JsonLd from './components/JsonLd';
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
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  '@id': `${SITE.url}/#agency`,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  areaServed: { '@type': 'State', name: 'Florida' },
  description: 'Insurance advisory for Florida boat and yacht owners, contractors and regulated businesses.',
  knowsAbout: ['Boat insurance', 'Yacht insurance', 'Contractor insurance', 'Smoke shop and hemp insurance']
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><JsonLd data={orgSchema} />{children}</body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18468447688" strategy="afterInteractive" />
      <Script id="google-ads-tag" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18468447688');`}</Script>
    </html>
  );
}
