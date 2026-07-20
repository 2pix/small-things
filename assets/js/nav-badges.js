(function () {
  var visitedSection = document.body.getAttribute('data-category');

  if (visitedSection) {
    localStorage.setItem('lastSeen-' + visitedSection, new Date().toISOString().slice(0, 10));
  }

  var pills = document.querySelectorAll('.story-pill[data-section][data-latest]');

  pills.forEach(function (pill) {
    var section = pill.getAttribute('data-section');
    var latest = pill.getAttribute('data-latest');
    var lastSeen = localStorage.getItem('lastSeen-' + section);
    var dot = pill.querySelector('.story-pill__dot');

    if (dot && (!lastSeen || latest > lastSeen)) {
      dot.classList.add('is-visible');
    }
  });
})();
