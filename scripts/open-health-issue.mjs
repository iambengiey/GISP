import { readFile } from 'node:fs/promises';

const result = JSON.parse(await readFile('health-results.json', 'utf8'));
if (result.ok) {
  console.log('Health checks passed; no issue created.');
  process.exit(0);
}

const title = `Nightly health check failed: ${new Date().toISOString().slice(0,10)}`;
const body = `Automated nightly health check found issues.\n\n- Link check: ${result.links}\n- Asset check: ${result.assets}\n\nPlease review workflow logs.`;

const response = await fetch('https://api.github.com/repos/' + process.env.GITHUB_REPOSITORY + '/issues', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github+json'
  },
  body: JSON.stringify({ title, body, labels: ['health-check', 'automated'] })
});

if (!response.ok) {
  console.error('Failed to create issue', await response.text());
  process.exit(1);
}
console.log('Issue created.');
