export function wachMovesStep() {
  const style = document.createElement("style");
  style.textContent = `
.main{
  display: flex;
  justify-content: center;
}

.main__container {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  align-items: center;
  justify-content: space-between;
}

   
    `;

  const div = document.createElement("div");
  div.innerHTML = `
    <main class="main">
      <div class="main__container">
        <div id="slot-cpu"></div>

        <div id="slot-user"></div>
      </div>
    </main>    
    `;
  div.prepend(style);

  return div;
}
