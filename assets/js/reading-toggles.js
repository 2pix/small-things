// Reading toggles: sepia light mode + easy-read face. Dark + serif stay the default.
// Each toggle is independent and remembered in localStorage (Claire, 2026 Oct 3).
// 2026 Oct 8 (Claire): buttons are icons now - moon in dark, sun in light; the
// accessibility person icon fills when easy-read is on. Colors follow the mode
// via currentColor, so no per-theme icon colors needed.
(function () {
  var root = document.documentElement;

  var MOON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>';
  var SUN  = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M19.8 4.2 18 6M6 18l-1.8 1.8"/></svg>';
  var PERSON  = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="4.5" r="2"/><path d="M12 7v6m0 0-4 7m4-7 4 7M4.5 9.5 12 11l7.5-1.5"/></svg>';
  var PERSON_ON = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="4.5" r="2"/><path d="M12 7v6m0 0-4 7m4-7 4 7M4.5 9.5 12 11l7.5-1.5" stroke-width="2.6"/></svg>';

  function paintThemeBtn(btn) {
    var light = root.getAttribute("data-theme") === "sepia";
    btn.innerHTML = light ? SUN : MOON;
    btn.setAttribute("aria-pressed", light ? "true" : "false");
    btn.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to light mode");
  }

  function apply(key, attr, onValue, paint) {
    var stored = null;
    try { stored = localStorage.getItem(key); } catch (e) {}
    if (stored) root.setAttribute(attr, stored);
    var btn = document.getElementById(key === "st-theme" ? "theme-toggle" : "font-toggle");
    if (!btn) return;
    if (paint) paint(btn, root.getAttribute(attr) === onValue);
    else btn.setAttribute("aria-pressed", root.getAttribute(attr) === onValue ? "true" : "false");
    btn.addEventListener("click", function () {
      var nowOn = root.getAttribute(attr) === onValue;
      if (nowOn) {
        root.removeAttribute(attr);
        try { localStorage.removeItem(key); } catch (e) {}
      } else {
        root.setAttribute(attr, onValue);
        try { localStorage.setItem(key, onValue); } catch (e) {}
      }
      if (paint) paint(btn, !nowOn);
      else btn.setAttribute("aria-pressed", !nowOn ? "true" : "false");
    });
  }

  apply("st-theme", "data-theme", "sepia", function (btn) { paintThemeBtn(btn); });
  apply("st-font", "data-font", "hyperlegible", function (btn, on) {
    btn.innerHTML = on ? PERSON_ON : PERSON;
    btn.setAttribute("aria-pressed", on ? "true" : "false");
  });
})();