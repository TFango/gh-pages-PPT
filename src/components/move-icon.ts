export type Move = "piedra" | "papel" | "tijera";
export type Role = "user" | "cpu";

type Props = {
  move: Move;
  role?: Role;
};

export function createMoveIcon(p: Props) {
  const wrap = document.createElement("div");
  wrap.className = `move-icon ${p.role ?? "user"}`;

  const style = document.createElement("style");
  style.textContent = `
  .move-icon{
  display: flex;
  flex-direction: column;
  align-items: center;
  }

  .move-icon.cpu .icon {
  transform: rotate(180deg);
}

.move-icon .icon {
  width: auto;
  height: clamp(160px, 50vh, 280px);
  display: block;
} 
  `;

  const srcByMove: Record<Move, string> = {
    piedra: "./src/assets/piedra.svg",
    papel: "./src/assets/papel.svg",
    tijera: "./src/assets/tijera.svg",
  };

  wrap.innerHTML = `
  <img class="icon" alt="${p.move}" src="${srcByMove[p.move]}"/>
  `;

  function setMove(m: Move) {
    const img = wrap.querySelector(".icon") as HTMLImageElement;
    img.src = srcByMove[m];
  }

  function setRole(r: Role) {
    wrap.classList.remove("user", "cpu");
    wrap.classList.add(r);
  }

  function destroy() {
    style.remove();
    wrap.remove();
  }

  wrap.prepend(style);

  return { el: wrap, setMove, setRole, destroy };
}
