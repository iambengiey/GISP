(function () {
  const input = document.querySelector('[data-search-input]');
  const results = document.querySelector('[data-search-results]');
  if (!input || !results || typeof lunr === 'undefined') return;

  fetch('/search-index.json')
    .then((res) => res.json())
    .then((docs) => {
      const idx = lunr(function() {
        this.ref('url');
        this.field('title');
        this.field('summary');
        docs.forEach((doc) => this.add(doc));
      });

      input.addEventListener('input', () => {
        const query = input.value.trim();
        if (!query) {
          results.innerHTML = '';
          return;
        }
        const matches = idx.search(`${query}*`).slice(0, 8);
        results.innerHTML = matches.map((m) => {
          const doc = docs.find((d) => d.url === m.ref);
          return `<li><a href="${doc.url}">${doc.title}</a><p>${doc.summary}</p></li>`;
        }).join('');
      });
    });
})();
