const fs = require('node:fs');
const path = require('node:path');

module.exports = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), 'data/gov-directory.json'), 'utf8')
);
