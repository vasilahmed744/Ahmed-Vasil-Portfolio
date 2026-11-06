/* Hero network animation — drifting nodes + connecting lines.
   Enhancement only: the hero content renders fully without this file.
   Respects prefers-reduced-motion and pauses when offscreen. */
(function () {
  var canvas = document.getElementById('net');
  if (!canvas || !canvas.getContext) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var ctx = canvas.getContext('2d');
  var nodes = [];
  var running = true;
  var raf = null;
  var DPR = Math.min(window.devicePixelRatio || 1, 2);
  var COUNT = 42;
  var LINK = 120;

  function size() {
    var r = canvas.parentElement.getBoundingClientRect();
    canvas.width = Math.max(1, r.width * DPR);
    canvas.height = Math.max(1, r.height * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function seed() {
    var r = canvas.parentElement.getBoundingClientRect();
    nodes = [];
    for (var i = 0; i < COUNT; i++) {
      nodes.push({
        x: Math.random() * r.width,
        y: Math.random() * r.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.4 + Math.random() * 1.6,
        gold: Math.random() < 0.25
      });
    }
  }

  function step() {
    var r = canvas.parentElement.getBoundingClientRect();
    ctx.clearRect(0, 0, r.width, r.height);
    for (var i = 0; i < nodes.length; i++) {
      var a = nodes[i];
      a.x += a.vx; a.y += a.vy;
      if (a.x < 0 || a.x > r.width) a.vx *= -1;
      if (a.y < 0 || a.y > r.height) a.vy *= -1;
      for (var j = i + 1; j < nodes.length; j++) {
        var b = nodes[j];
        var dx = a.x - b.x, dy = a.y - b.y;
        var d = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK) {
          ctx.strokeStyle = 'rgba(16, 57, 92,' + (0.14 * (1 - d / LINK)) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      ctx.fillStyle = a.gold ? 'rgba(176, 125, 43, 0.55)' : 'rgba(16, 57, 92, 0.4)';
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
    }
    if (running) raf = requestAnimationFrame(step);
  }

  function start() { if (!raf) raf = requestAnimationFrame(step); }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      running = entries[0].isIntersecting;
      if (running) start(); else stop();
    }).observe(canvas);
  }

  window.addEventListener('resize', function () { size(); seed(); });
  size(); seed(); start();
})();
