(function () {
  const q = document.getElementById('directory-filter');
  if (!q) return;
  const entries = Array.from(document.querySelectorAll('[data-entry]'));
  q.addEventListener('input', () => {
    const term = q.value.trim().toLowerCase();
    entries.forEach((e) => {
      e.hidden = term && !e.dataset.entry.includes(term);
    });
  });
})();
