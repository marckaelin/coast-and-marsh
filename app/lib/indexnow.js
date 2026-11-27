// IndexNow submit (Bing, Yandex, Seznam, Naver; ChatGPT search leans on Bing).
// Runs on the live site, called by .github/workflows/indexnow.yml after each successful
// production deployment. The old build-time ping fired before the key file was live,
// so Bing rejected the key (403 UserForbiddedToAccessSite) on every build; this key is new.
export const INDEXNOW_KEY = 'b22cbd2091c8b1b421c13f75c9d4bd10';
export const INDEXNOW_HOST = 'www.coastandmarsh.com';

const ENDPOINTS = { indexnow: 'https://api.indexnow.org/indexnow', bing: 'https://www.bing.com/indexnow', yandex: 'https://yandex.com/indexnow' };

export async function submitIndexNow(urlList, engine = 'indexnow') {
  const res = await fetch(ENDPOINTS[engine] || ENDPOINTS.indexnow, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: INDEXNOW_HOST, key: INDEXNOW_KEY, keyLocation: `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`, urlList }),
    signal: AbortSignal.timeout(10000)
  });
  return { status: res.status, body: (await res.text()).slice(0, 500) };
}
