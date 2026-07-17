(function () {
  var IDLE_MS = 60000;
  var btn = document.querySelector(".back-to-top");
  if (!btn) return;

  var idleTimer = null;

  function maybeShow() {
    if (window.scrollY > window.innerHeight * 0.5) {
      btn.classList.add("is-visible");
    }
  }

  function resetTimer() {
    btn.classList.remove("is-visible");
    clearTimeout(idleTimer);
    idleTimer = setTimeout(maybeShow, IDLE_MS);
  }

  window.addEventListener("scroll", resetTimer, { passive: true });
  window.addEventListener("touchend", resetTimer, { passive: true });
  resetTimer();

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    btn.classList.remove("is-visible");
    clearTimeout(idleTimer);
  });
})();
