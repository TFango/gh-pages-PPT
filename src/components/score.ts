export function createScore() {
  const score = JSON.parse(
    localStorage.getItem("score") || `{"user":0, "cpu":0}`
  );

  const style = document.createElement("style");
  style.textContent = `
  .score-box {
  border: 10px solid black;
  border-radius: 10px;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.score-box__title {
  font-family: Inter;
  font-size: 30px;
  margin: 5px;
}

.score-box__user, .score-box__cpu {
  font-family: Inter;
  align-self: flex-end;
  font-weight: 600;
  font-size: 30px;
  margin: 5px;
}

  `;

  const el = document.createElement("div");
  el.className = "score-component";
  el.innerHTML = `
  <div class="score-box">
          <h1 class="score-box__title">Score</h1>
          <p class="score-box__user">Vos: ${score.user}</p>
          <p class="score-box__cpu">Maquina: ${score.cpu}</p>
        </div>  
  `;

  el.prepend(style);

  return el;
}
