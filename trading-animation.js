(() => {
  const field = document.querySelector(".trading-diagram");
  const art = field?.querySelector(".diagram-art");
  const canvas = field?.querySelector(".diagram-canvas");
  const control = field?.querySelector(".diagram-motion");
  if (!field || !art || !canvas || !control) return;

  const context = canvas.getContext("2d", { alpha: true });
  if (!context) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pauseText = control.querySelector(".motion-pause");
  const resumeText = control.querySelector(".motion-resume");
  let seed = 20261025;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const noise = () => (random() + random() + random() + random() - 2) * Math.sqrt(3);
  const colors = ["0,245,84", "0,245,84", "102,255,154", "168,245,194"];
  const particles = [];

  for (let strand = 0; strand < 11; strand += 1) {
    for (let step = 0; step < 18; step += 1) {
      if (random() < 0.14) continue;
      const x = 55 + step * 29.5 + (random() - 0.5) * 20;
      const y = 118 + strand * 28 + 64 * Math.sin(step / 2.9 + strand / 4.5) + (random() - 0.5) * 26;
      if (y < 55 || y > 510) continue;
      particles.push({ x, y, strand, radius: 2 + random() * 2.8, alpha: 0.36 + random() * 0.5,
        color: colors[Math.floor(random() * colors.length)], targetX: 0, targetY: 0, offsetX: 0, offsetY: 0 });
    }
  }

  let frameId = 0;
  let lastFrame = 0;
  let motionTime = 0;
  let inView = true;
  let userPaused = false;
  let ready = false;

  function resize() {
    const { width, height } = art.getBoundingClientRect();
    if (!width || !height) return false;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const nextWidth = Math.max(1, Math.round(width * pixelRatio));
    const nextHeight = Math.max(1, Math.round(height * pixelRatio));
    if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
      canvas.width = nextWidth;
      canvas.height = nextHeight;
    }
    context.setTransform(nextWidth / 620, 0, 0, nextHeight / 560, 0, 0);
    draw(motionTime);
    ready = true;
    return true;
  }

  function draw(time) {
    context.clearRect(0, 0, 620, 560);
    const glow = context.createRadialGradient(310, 280, 18, 310, 280, 235);
    glow.addColorStop(0, "rgba(0, 245, 84, 0.13)");
    glow.addColorStop(1, "rgba(0, 245, 84, 0)");
    context.fillStyle = glow;
    context.fillRect(0, 0, 620, 560);

    context.strokeStyle = "rgba(102, 255, 154, 0.13)";
    context.lineWidth = 1;
    for (const points of [
      [[43, 331], [175, 183], [333, 272], [468, 136], [578, 249]],
      [[53, 225], [191, 347], [319, 240], [460, 385], [572, 281]],
      [[85, 397], [225, 248], [346, 359], [502, 202]]
    ]) {
      context.beginPath();
      points.forEach(([x, y], index) => index ? context.lineTo(x, y) : context.moveTo(x, y));
      context.stroke();
    }

    for (const particle of particles) {
      const sway = Math.sin(time * 0.00045 + particle.strand * 0.62) * 3;
      context.beginPath();
      context.arc(particle.x + particle.offsetX + sway, particle.y + particle.offsetY, particle.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(${particle.color}, ${particle.alpha})`;
      context.fill();
    }
  }

  function advance(seconds) {
    const diffusion = 13 * Math.sqrt(seconds);
    const follow = Math.min(1, seconds * 2.5);
    for (const particle of particles) {
      particle.targetX += -0.35 * particle.targetX * seconds + noise() * diffusion;
      particle.targetY += -0.35 * particle.targetY * seconds + noise() * diffusion;
      particle.offsetX += (particle.targetX - particle.offsetX) * follow;
      particle.offsetY += (particle.targetY - particle.offsetY) * follow;
    }
  }

  function shouldRun() {
    return ready && !userPaused && !reduceMotion.matches && inView && !document.hidden;
  }

  function stop() {
    if (frameId) cancelAnimationFrame(frameId);
    frameId = 0;
    lastFrame = 0;
  }

  function tick(time) {
    frameId = 0;
    if (!shouldRun()) return;
    if (!lastFrame) lastFrame = time;
    const elapsed = time - lastFrame;
    if (elapsed >= 32) {
      const seconds = Math.min(elapsed / 1000, 0.05);
      advance(seconds);
      motionTime += seconds * 1000;
      draw(motionTime);
      lastFrame = time;
    }
    frameId = requestAnimationFrame(tick);
  }

  function sync() {
    if (reduceMotion.matches) {
      stop();
      field.classList.remove("is-animated");
      control.hidden = true;
      return;
    }
    try {
      if (!resize()) return;
    } catch (_) {
      stop();
      field.classList.remove("is-animated");
      control.hidden = true;
      return;
    }
    field.classList.add("is-animated");
    control.hidden = false;
    pauseText.hidden = userPaused;
    resumeText.hidden = !userPaused;
    if (shouldRun()) {
      if (!frameId) frameId = requestAnimationFrame(tick);
    } else {
      stop();
    }
  }

  control.addEventListener("click", () => {
    userPaused = !userPaused;
    sync();
  });
  document.addEventListener("visibilitychange", sync);
  if (reduceMotion.addEventListener) reduceMotion.addEventListener("change", sync);
  else reduceMotion.addListener(sync);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      inView = entries[0]?.isIntersecting ?? true;
      sync();
    }, { threshold: 0.01 }).observe(field);
  }
  if ("ResizeObserver" in window) new ResizeObserver(sync).observe(art);
  else window.addEventListener("resize", sync, { passive: true });
  sync();
})();
