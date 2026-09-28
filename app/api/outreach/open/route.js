export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const PIXEL = Buffer.from(
  'R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
  'base64'
);

function config() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ROLE_KEY;
  if (!url || !key) throw new Error('Supabase server credentials are not configured');
  return { url, key };
}

export async function GET(request) {
  try {
    const token = new URL(request.url).searchParams.get('t');
    if (token && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(token)) {
      const { url, key } = config();
      const headers = { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' };
      const lookup = await fetch(`${url}/rest/v1/outreach_sends?tracking_token=eq.${encodeURIComponent(token)}&select=id,open_count,first_opened_at&limit=1`, { headers, cache: 'no-store' });
      if (lookup.ok) {
        const rows = await lookup.json();
        if (rows[0]) {
          const now = new Date().toISOString();
          await fetch(`${url}/rest/v1/outreach_sends?id=eq.${rows[0].id}`, {
            method: 'PATCH',
            headers: { ...headers, Prefer: 'return=minimal' },
            body: JSON.stringify({
              open_count: Number(rows[0].open_count || 0) + 1,
              first_opened_at: rows[0].first_opened_at || now,
              last_opened_at: now
            })
          });
        }
      }
    }
  } catch (_) {
    // Tracking must never interfere with rendering the email pixel.
  }

  return new Response(PIXEL, {
    status: 200,
    headers: {
      'Content-Type': 'image/gif',
      'Content-Length': String(PIXEL.length),
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      Pragma: 'no-cache',
      Expires: '0'
    }
  });
}
