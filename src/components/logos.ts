export function createLogos() {
  const wrap = document.createElement("div");
  wrap.className = "logos";
  wrap.setAttribute("aria-hidden", "true");

  const style = document.createElement("style");
  style.textContent = `
.logos {
    margin-top: auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: clamp(24px, 8vw, 100px);
}

@media (min-width: 1278px) {
.logos {
    margin-top: auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 100px;
}
}  
  `;

  wrap.innerHTML = `
    <img src="./src/assets/tijera.svg" alt="" class="logo" />
    <img src="./src/assets/piedra.svg" alt="" class="logo" />
    <img src="./src/assets/papel.svg" alt="" class="logo" />
  `;

  wrap.prepend(style);

  function destroy() {
    style.remove();
    wrap.remove();
  }

  return { el: wrap, destroy };
}
