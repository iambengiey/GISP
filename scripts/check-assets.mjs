import fs from 'node:fs/promises';

const file = await fs.readFile('data/assets-map.json', 'utf8');
const map = JSON.parse(file);
let failed = false;

for (const [key, value] of Object.entries(map)) {
  const urls = [value.primary, ...(value.fallback || [])].filter(Boolean);
  let ok = false;

  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD', redirect: 'follow' });
      const type = res.headers.get('content-type') || '';
      if (res.ok && type.startsWith('image/')) {
        console.log(`OK ${key}: ${url}`);
        ok = true;
        break;
      }
      console.warn(`WARN ${key}: ${url} -> ${res.status} (${type})`);
    } catch (err) {
      console.warn(`WARN ${key}: ${url} -> ${err.message}`);
    }
  }

  if (!ok) {
    failed = true;
    console.error(`FAIL ${key}: no healthy image URL found.`);
  }
}

if (failed) process.exit(1);
