import { SITE, PAGES } from './lib/site';

export default function sitemap() {
  const lastModified = new Date();
  return PAGES.map(({ path, priority }) => ({
    url: `${SITE.url}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: priority >= 0.7 ? 'monthly' : 'yearly',
    priority
  }));
}
