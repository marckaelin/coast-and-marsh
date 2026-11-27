// Shared IndexNow submit (Bing, Yandex, Seznam, Naver; ChatGPT search leans on Bing).
// scripts/indexnow.mjs pings at build time; this runs on the live site,
// so IndexNow can fetch the key file from the deployment that is actually serving.
export const INDEXNOW_KEY = '7c2800a5425248be7ce1b328bbed9bda';
export const INDEXNOW_HOST = 'www.coastandmarsh.com';

export async function submitIndexNow(urlList) {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: INDEXNOW_HOST, key: INDEXNOW_KEY, keyLocation: `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`, urlList }),
    signal: AbortSignal.timeout(10000)
  });
  return { status: res.status, body: (await res.text()).slice(0, 500) };
}
