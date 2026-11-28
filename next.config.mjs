// Redirects for URLs people (and AI assistants) guess but that never existed on this site.
// Found in Vercel 404 logs, Nov 2026. Real pages only; bot probes (.env, wp-admin, .git) stay 404.
const toAbout = ['/about-us', '/team', '/our-team', '/meet-the-team', '/meet-our-team', '/about/team', '/staff'];
const toContact = [
  '/contact', '/contact-us', '/contact_us', '/contactus', '/contact.html', '/contact-us.html',
  '/contact-info', '/contact-information', '/get-in-touch', '/get-in-touch-with-us',
  '/reach-out', '/reach-us', '/request-quote', '/request-info', '/quote', '/get-a-quote'
];
// Section-style names (seen Nov 21-27) that map to a real page or homepage section.
const aliases = [
  { source: '/insights', destination: '/guides' },
  { source: '/blog', destination: '/guides' },
  { source: '/resources', destination: '/guides' },
  { source: '/cannabis-hemp-insurance', destination: '/hemp-cbd-store-insurance' },
  { source: '/coverage-areas', destination: '/business-insurance-ponte-vedra-beach-st-johns-county' },
  { source: '/advisory-process', destination: '/#approach' },
  { source: '/who-we-work-with', destination: '/#commercial' }
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      // iOS asks for these fixed names before reading the page's apple-touch-icon tag.
      { source: '/apple-touch-icon.png', destination: '/apple-icon.png', permanent: true },
      { source: '/apple-touch-icon-precomposed.png', destination: '/apple-icon.png', permanent: true },
      ...toAbout.map((source) => ({ source, destination: '/about', permanent: true })),
      ...toContact.map((source) => ({ source, destination: '/#contact', permanent: true })),
      ...aliases.map((r) => ({ ...r, permanent: true }))
    ];
  }
};

export default nextConfig;
