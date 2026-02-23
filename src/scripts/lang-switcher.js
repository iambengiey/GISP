(function () {
  const select = document.getElementById('lang-switch');
  if (!select) return;
  select.addEventListener('change', () => {
    if (select.value) window.location.href = select.value;
  });
})();
