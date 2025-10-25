export function welcomeStep() {
  const style = document.createElement("style");
  style.textContent = `
.main {
  display: flex;
  justify-content: center;
}

.main__container {
  width: 80%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1278px) {
  .main__container {
    width: 30%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.main__title {
  margin-top: 100px;
  font-family: Inter;
  font-size: 80px;
  color: rgba(0, 144, 72, 1);
}
  `;

  const div = document.createElement("div");
  div.innerHTML = `
  <main class="main">
    <div class="main__container">
        <h1 class="main__title">Piedra Papel o Tijera</h1>

        <div id="slot-start"></div>

        <div id="slot-logos"></div>
    </div>
    </main>
  `;

  div.prepend(style);

  return div;
}
