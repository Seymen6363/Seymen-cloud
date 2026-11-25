/* Moè Naturshop – sanftes Einblenden beim Scrollen + Videos nur abspielen, wenn sichtbar */
(function () {
  if (window.__moeInit) return;
  window.__moeInit = true;

  function init(root) {
    var els = root.querySelectorAll('.moe-reveal:not(.is-in)');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.15 });
      els.forEach(function (el) { io.observe(el); });

      var vio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          var v = e.target;
          if (e.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
          else v.pause();
        });
      }, { threshold: 0.25 });
      root.querySelectorAll('.moe video[autoplay], video[data-moe-autoplay]').forEach(function (v) { vio.observe(v); });
    }
  }

  document.addEventListener('DOMContentLoaded', function () { init(document); });
  // Theme-Editor: neu geladene Sektionen initialisieren
  document.addEventListener('shopify:section:load', function (e) { init(e.target); });
})();
