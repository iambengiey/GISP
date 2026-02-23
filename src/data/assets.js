const fs = require('node:fs');
const path = require('node:path');

const assetsPath = path.resolve(process.cwd(), 'data/assets-map.json');
const assetsMap = JSON.parse(fs.readFileSync(assetsPath, 'utf8'));

function getAssetUrl(key) {
  const entry = assetsMap[key];
  if (!entry) return null;
  return entry.primary || (entry.fallback && entry.fallback[0]) || null;
}

module.exports = {
  map: assetsMap,
  getAssetUrl
};
