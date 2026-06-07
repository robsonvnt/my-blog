(function () {
  function onScroll() {
    var fill = document.querySelector('.reading-progress-fill');
    if (!fill) return;

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    fill.style.width = pct + '%';
  }

  document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  });
})();
