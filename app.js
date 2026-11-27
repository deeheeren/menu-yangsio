(function () {
  var doc = document, root = doc.documentElement;

  // gerak masuk saat bagian muncul di layar
  var items = [].slice.call(doc.querySelectorAll('.rv'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    items.forEach(function (el) {
      var idx = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.transitionDelay = Math.min(idx, 8) * 70 + 'ms';
      io.observe(el);
    });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // tombol bagian menu mengikuti posisi gulir
  var links = [].slice.call(doc.querySelectorAll('.nav nav a'));
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
  var spyTargets = ['es-krim', 'menu-baru', 'ayam', 'nasi-mie', 'snack', 'roti-canai', 'minuman', 'lainnya']
    .map(function (id) { return doc.getElementById(id); }).filter(Boolean);
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (a) { a.classList.remove('on'); });
          var a = byId[entry.target.id];
          if (a) { a.classList.add('on'); try { a.scrollIntoView({ block: 'nearest', inline: 'center' }); } catch (e) {} }
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    spyTargets.forEach(function (el) { spy.observe(el); });
  }

  // mode layar TV: layar penuh, layar tetap menyala, pindah bagian otomatis
  var start = doc.getElementById('ym-start'), exit = doc.getElementById('ym-exit'), bar = doc.querySelector('#tvbar i');
  if (!start || !exit) return;
  var seconds = window.YM_TV_SECONDS || 12, timer = null, wake = null, index = 0;
  root.style.setProperty('--tvs', seconds + 's');

  function restartBar() {
    if (!bar) return;
    bar.style.animation = 'none';
    void bar.offsetWidth;
    bar.style.animation = 'tvfill ' + seconds + 's linear forwards';
  }
  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
    root.classList.remove('tv');
    try { if (wake && wake.release) wake.release(); } catch (e) {}
    wake = null;
    try { if (doc.fullscreenElement) doc.exitFullscreen(); } catch (e) {}
    if (bar) bar.style.animation = 'none';
  }
  function go() {
    root.classList.add('tv');
    try { var r = root.requestFullscreen && root.requestFullscreen(); if (r && r.catch) r.catch(function () {}); } catch (e) {}
    try { if (navigator.wakeLock) navigator.wakeLock.request('screen').then(function (l) { wake = l; }).catch(function () {}); } catch (e) {}
    items.forEach(function (el) { el.classList.add('in'); });
    window.scrollTo(0, 0);
    index = 0;
    restartBar();
    timer = setInterval(function () {
      var slides = doc.querySelectorAll('[data-slide]');
      if (!slides.length) return;
      index = (index + 1) % slides.length;
      slides[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
      restartBar();
    }, seconds * 1000);
  }
  start.addEventListener('click', go);
  exit.addEventListener('click', stop);
  window.addEventListener('keydown', function (e) { if (e.key === 'Escape' && timer) stop(); });
  doc.addEventListener('fullscreenchange', function () { if (!doc.fullscreenElement && timer) stop(); });
})();
