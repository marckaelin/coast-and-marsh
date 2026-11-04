// Pings IndexNow (Bing, Yandex, Seznam, Naver; ChatGPT search leans on Bing) after a
// production build so new and changed pages get recrawled quickly. Never fails the build.
import { readFile } from 'node:fs/promises';

const KEY = '7c2800a5425248be7ce1b328bbed9bda';
const HOST = 'www.coastandmarsh.com';

async function main() {
  if (process.env.VERCEL_ENV !== 'production') return console.log('[indexnow] skipped (not a production build)');
  const xml = await readFile('.next/server/app/sitemap.xml.body', 'utf8');
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  urlList.push(`https://${HOST}/llms.txt`);
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
    signal: AbortSignal.timeout(10000)
  });
  console.log(`[indexnow] submitted ${urlList.length} URLs: HTTP ${res.status}`);
}

main().catch((e) => console.log('[indexnow] ping failed, continuing:', e.message));
