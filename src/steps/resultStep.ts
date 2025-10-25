export function resultStep() {
  const style = document.createElement("style");
  style.textContent = `
.main {
  display: flex;
  justify-content: center;
}

.main__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  gap: 16px;
}    
    
    `;

  const div = document.createElement("div");
  div.innerHTML = `
 <main class="main">
      <div class="main__container">

      <div id="slot-star"></div>
        
      <div id="slot-score"></div>

        <div id="slot-start"></div>
      </div>
    </main>   
    `;
  div.prepend(style);
  return div;
}
