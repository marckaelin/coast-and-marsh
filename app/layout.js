import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Coast & Marsh Insurance Advisory',
  description: 'Personal and commercial insurance advisory for coastal households and regulated businesses.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18468447688" strategy="afterInteractive" />
      <Script id="google-ads-tag" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18468447688');`}</Script>
    </html>
  );
}
