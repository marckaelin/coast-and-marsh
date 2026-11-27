// GET /api/indexnow?key=<INDEXNOW_KEY>[&path=/guides/a&path=/guides/b][&engine=indexnow|bing|yandex]
// Submits site URLs to IndexNow from the live deployment and returns IndexNow's answer.
// With no path, submits every sitemap page plus llms.txt. Only this site's own URLs are ever sent.
import { PAGES } from '../../lib/site';
import { INDEXNOW_KEY, INDEXNOW_HOST, submitIndexNow } from '../../lib/indexnow';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request) {
  const params = new URL(request.url).searchParams;
  if (params.get('key') !== INDEXNOW_KEY) return Response.json({ error: 'not found' }, { status: 404 });
  const known = new Set([...PAGES.map((p) => p.path), '/llms.txt']);
  const asked = params.getAll('path').filter((p) => known.has(p));
  const paths = asked.length ? asked : [...known];
  try {
    const result = await submitIndexNow(paths.map((p) => `https://${INDEXNOW_HOST}${p === '/' ? '' : p}`), params.get('engine') || undefined);
    return Response.json({ submitted: paths.length, ...result }, { status: result.status < 300 ? 200 : 502 });
  } catch (e) {
    return Response.json({ submitted: 0, error: e.message }, { status: 502 });
  }
}
