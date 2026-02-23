(function () {
  const toggle = document.getElementById('contrast-toggle');
  const stored = localStorage.getItem('theme');
  if (stored === 'high-contrast') {
    document.documentElement.setAttribute('data-theme', 'high-contrast');
  }
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'high-contrast' ? '' : 'high-contrast';
      if (next) {
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.removeItem('theme');
      }
    });
  }
})();
