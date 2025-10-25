import { playStep } from "../steps/playStep";
import { createMovesGroup, type Move } from "../components/moves-group";
import { createCount } from "../components/count";
import { calculateWinner } from "../utils/calculateWinner";
import { state } from "../state/state";

export function PlayPage(root: HTMLElement) {
  root.innerHTML = "";

  const view = playStep();
  root.appendChild(view);

  const count = createCount();
  const moves = createMovesGroup();

  const slotCount = view.querySelector<HTMLDivElement>("#slot-count ");
  slotCount?.replaceWith(count.el);

  const slotLogos = view.querySelector<HTMLDivElement>("#slot-logos");
  slotLogos?.replaceWith(moves.el);

  let userMove: Move | null = null;
  const cpuMoves: Move[] = ["piedra", "papel", "tijera"];

  function pickCpuMove(): Move {
    const i = Math.floor(Math.random() * cpuMoves.length);
    return cpuMoves[i];
  }

  moves.el.addEventListener("select", (e) => {
    userMove = (e as CustomEvent<Move>).detail;
    state.setUserMove(userMove);
    console.log(userMove);
  });

  count.reset(3000);
  count.start(3000);

  count.el.addEventListener("done", () => {
    moves.setDisabled(true);

    const cpuMove = pickCpuMove();
    state.setCpuMove(cpuMove);
    console.log("CPU eligio: ", cpuMove);

    if (!userMove) {
      location.hash = "#/start";
      return;
    }

    const winner = calculateWinner(userMove, cpuMove);
    state.setWinner(winner);
    state.commitRound();
    console.log("Ganador: ", winner);

    location.hash = "#/wachMove"
  });
}
