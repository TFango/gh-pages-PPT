export function playStep() {
  const style = document.createElement("style");
  style.textContent = `
.main {
  display: flex;
  justify-content: center;
}

.main__content {
  width: min(90%, 420px);
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
}



.main__logos {
  margin-top: auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: clamp(24px, 8vw, 100px);
}

.logo {
  height: clamp(120px, 28vw, 180px);
  width: auto;
  flex: 0 0 auto;
  display: block;
}
    `;

  const div = document.createElement("div");
  div.innerHTML = `
    <main class="main">
      <div class="main__content">
        <div id="slot-count"></div>

        <div id="slot-logos"></div>
      </div>
    </main>
    `;

  div.prepend(style);

  return div;
}
