export type Move = "piedra" | "papel" | "tijera";

export function createMovesGroup() {
  let selected: Move | null = null;
  const wrap = document.createElement("div");
  wrap.className = "move logos";

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

.move.logo{
    height: 160px;
    width: auto;
    flex: 0 0 auto;
    cursor: pointer;
    transition: transform .15s ease, filter .15s ease, opacity .15s ease;
    transform-origin: center bottom;
  }

.moves.has-selected .move{
filter: grayscale(1);
opacity: .5;
transform: scale(0.9);
}

.moves.has-selected .move.is-selected{
filter: none;
opacity: 1;
transform: scale(1.1);
}
  `;

  wrap.innerHTML = `
  <div class="moves logos">
    <img data-move="tijera" src="./src/assets/tijera.svg" alt="" class="logo move" />
    <img data-move="piedra" src="./src/assets/piedra.svg" alt="" class="logo move" />
    <img data-move="papel" src="./src/assets/papel.svg" alt="" class="logo move" />
    </div>
  `;

  wrap.prepend(style);

  const containter = wrap.querySelector<HTMLDivElement>(".moves")!;
  containter?.addEventListener("click", (e) => {
    const el = (e.target as HTMLElement).closest<HTMLImageElement>(".move");
    if (!el) return;

    containter
      .querySelectorAll(".move.is-selected")
      .forEach((lg) => lg.classList.remove("is-selected"));

    el?.classList.add("is-selected");
    containter.classList.add("has-selected");

    const move = el.dataset.move as Move;
    selected = move;

    containter.dispatchEvent(
      new CustomEvent<Move>("select", {
        detail: move,
        bubbles: true,
      })
    );
  });

  function setDisabled(v: boolean) {
    containter.classList.toggle("disabled", v);
  }

  function getSelected(): Move | null {
    return selected;
  }

  function destroy() {
    style.remove();
    wrap.remove();
  }

  return { el: wrap, setDisabled, getSelected, destroy };
}
