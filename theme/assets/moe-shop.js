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

/* Mobiles Menü + Varianten-Auswahl */
(function () {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-moe-menu-toggle]');
    if (!btn) return;
    var nav = document.querySelector('[data-moe-menu]');
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open);
    if (nav) nav.classList.toggle('is-open', open);
  });

  document.addEventListener('change', function (e) {
    var sel = e.target.closest('[data-moe-variant-select]');
    if (!sel) return;
    var opt = sel.options[sel.selectedIndex];
    var form = sel.closest('form');
    var section = sel.closest('.moe-pdp');
    var price = section && section.querySelector('[data-moe-price]');
    if (price) {
      price.innerHTML = '<strong>' + opt.dataset.price + '</strong>' + (opt.dataset.compare ? '<s>' + opt.dataset.compare + '</s>' : '');
    }
    var add = form && form.querySelector('[data-moe-add]');
    if (add) {
      var ok = opt.dataset.available === 'true';
      add.disabled = !ok;
      add.textContent = ok ? 'In den Warenkorb' : 'Ausverkauft';
    }
    var url = new URL(window.location.href);
    url.searchParams.set('variant', sel.value);
    window.history.replaceState({}, '', url.toString());
  });
})();
