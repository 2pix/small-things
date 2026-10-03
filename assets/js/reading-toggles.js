// Reading toggles: sepia light mode + dyslexia-kind font. Dark + serif stay the default.
// Each toggle is independent and remembered in localStorage (Claire, 2026 Oct 3).
(function () {
  var root = document.documentElement;

  function apply(key, attr, onValue) {
    var stored = null;
    try { stored = localStorage.getItem(key); } catch (e) {}
    if (stored) root.setAttribute(attr, stored);
    var btn = document.getElementById(key === "st-theme" ? "theme-toggle" : "font-toggle");
    if (!btn) return;
    var on = root.getAttribute(attr) === onValue;
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    btn.addEventListener("click", function () {
      var nowOn = root.getAttribute(attr) === onValue;
      if (nowOn) {
        root.removeAttribute(attr);
        try { localStorage.removeItem(key); } catch (e) {}
        btn.setAttribute("aria-pressed", "false");
      } else {
        root.setAttribute(attr, onValue);
        try { localStorage.setItem(key, onValue); } catch (e) {}
        btn.setAttribute("aria-pressed", "true");
      }
    });
  }

  apply("st-theme", "data-theme", "sepia");
  apply("st-font", "data-font", "hyperlegible");
})();
