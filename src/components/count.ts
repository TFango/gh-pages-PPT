export function createCount() {
  
  const wrap = document.createElement("div");
  wrap.className = "count";
  wrap.setAttribute("role", "timer");
  wrap.setAttribute("aria-live", "polite");
  wrap.setAttribute("aria-atomic", "true");
  let rafId: number | null = null;

  const style = document.createElement("style");
  style.textContent = `
.count {
  margin-top: clamp(40px, 12vh, 120px);
}

.count-svg{ width: clamp(180px, 55vw, 320px); height:auto; display:block; }
  
    `;

  wrap.innerHTML = `
<svg viewBox="0 0 200 200" class="count-svg">
  <!-- fondo (gris) -->
  <circle
    cx="100" cy="100" r="80"
    fill="none" stroke="#e6e6e6" stroke-width="20" />

  <!-- progreso (negro) -->
  <circle
    id="arc"
    cx="100" cy="100" r="80"
    fill="none" stroke="#000" stroke-width="20"
    stroke-linecap="round"
    transform="rotate(-90 100 100)"
 />

  <!-- número -->
  <text
    id="count"
    x="100" y="100"
    text-anchor="middle" dominant-baseline="middle"
    font-family="Inter, system-ui, sans-serif"
    font-size="72" font-weight="700" fill="#000">
    3
  </text>
</svg>


    `;

  wrap.prepend(style);

  const svg = wrap.querySelector<SVGSVGElement>(".count-svg")!;
  const arc = svg?.querySelector<SVGCircleElement>("#arc")!;
  const label = svg.querySelector<SVGTextElement>("#count")!;

  const r = arc.r.baseVal.value;
  const C = 2 * Math.PI * r;
  arc.style.strokeDasharray = String(C);

  let startTime = 0;
  let totalMs = 3000;

  function compute(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / totalMs, 1);
    const remaining = Math.max(totalMs - elapsed, 0);

    arc.style.strokeDashoffset = String(C * (1 - progress));
    label.textContent = String(Math.ceil(remaining / 1000));
  }

  function frame(now: number) {
    compute(now);
    const elapsed = now - startTime;
    const finished = elapsed >= totalMs;

    if (finished) {
      arc.style.strokeDashoffset = "0";
      label.textContent = "0";
      rafId && cancelAnimationFrame(rafId);
      rafId = null;
      wrap.dispatchEvent(new CustomEvent("done", { bubbles: true }));
      return;
    }
    rafId = requestAnimationFrame(frame);
  }

  function start(ms = 3000) {
    totalMs = ms;
    arc.style.strokeDasharray = String(C);
    arc.style.strokeDashoffset = String(C);
    label.textContent = String(Math.ceil(ms / 1000));

    startTime = performance.now();
    rafId && cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(frame);
  }

  function stop() {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  function reset(ms = totalMs) {
    stop();
    totalMs = ms;
    arc.style.strokeDasharray = String(C);
    arc.style.strokeDashoffset = String(C);
    label.textContent = String(Math.ceil(ms / 1000));
  }

  function destroy() {
    style.remove();
    wrap.remove();
  }


  return { el: wrap, start, stop, reset, destroy };
}
