export function starStep() {
  const style = document.createElement("style");
  style.textContent = `
.main {
  display: flex;
  justify-content: center;
}

.main__container {
  min-height: 100dvh;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main__title {
  font-family: Inter;
  color: rgba(0, 0, 0, 1);
  font-size: 40px;
  margin-top: 120px;
}
 
    `;

  const div = document.createElement("div");
  div.innerHTML = `
    <main class="main">
        <div class="main__container">
        <h1 class="main__title">
          Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los
          3 segundos.
        </h1>

        <div id="slot-start"></div>

        <div id="slot-logos"></div>
        </div>
    </main>
    `;

    div.prepend(style);
    return div;
}
