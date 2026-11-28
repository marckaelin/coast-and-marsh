// Redirects for URLs people (and AI assistants) guess but that never existed on this site.
// Found in Vercel 404 logs, Nov 2026. Real pages only; bot probes (.env, wp-admin, .git) stay 404.
const toAbout = ['/about-us', '/team', '/our-team', '/meet-the-team', '/about/team'];
const toContact = ['/contact', '/contact-us', '/get-in-touch', '/request-quote', '/request-info', '/quote', '/get-a-quote'];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      // iOS asks for these fixed names before reading the page's apple-touch-icon tag.
      { source: '/apple-touch-icon.png', destination: '/apple-icon.png', permanent: true },
      { source: '/apple-touch-icon-precomposed.png', destination: '/apple-icon.png', permanent: true },
      ...toAbout.map((source) => ({ source, destination: '/about', permanent: true })),
      ...toContact.map((source) => ({ source, destination: '/#contact', permanent: true }))
    ];
  }
};

export default nextConfig;
