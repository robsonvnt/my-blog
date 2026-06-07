(function () {
  var storageKey = 'rvnt-theme';

  function getTheme() {
    return localStorage.getItem(storageKey) || 'paper';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(storageKey, theme);
    updateIcon(theme);
  }

  function updateIcon(theme) {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.innerHTML = theme === 'paper' ? moonIcon() : sunIcon();
    btn.setAttribute('aria-label', theme === 'paper' ? 'Ativar tema escuro' : 'Ativar tema claro');
  }

  function sunIcon() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="7.05" y2="7.05"/><line x1="16.95" y1="16.95" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="7.05" y2="16.95"/><line x1="16.95" y1="7.05" x2="19.78" y2="4.22"/></svg>';
  }

  function moonIcon() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  function toggleTheme() {
    setTheme(getTheme() === 'paper' ? 'ink' : 'paper');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var theme = getTheme();
    document.documentElement.setAttribute('data-theme', theme);
    updateIcon(theme);

    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
  });
})();
