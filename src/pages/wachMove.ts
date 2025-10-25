import { wachMovesStep } from "../steps/wachMovesStep";
import { createMoveIcon } from "../components/move-icon";
import { state } from "../state/state";
import { ResultPage } from "./result";

let overlayStyleInjected = false;

export function wachMovePage(root: HTMLElement) {
  root.innerHTML = "";

  const view = wachMovesStep();
  root.appendChild(view);

  const last = state.getLastRound?.();
  if (!last) {
    location.hash = "#/play";
    return;
  }

  const cpuIcon = createMoveIcon({ move: last.cpu, role: "cpu" });
  const userIcon = createMoveIcon({ move: last.user, role: "user" });

  const slotCpu = view.querySelector<HTMLDivElement>("#slot-cpu");
  const slotUser = view.querySelector<HTMLDivElement>("#slot-user");

  slotCpu?.replaceWith(cpuIcon.el);
  slotUser?.replaceWith(userIcon.el);

  const tm = setTimeout(() => {
    showResultOverlay();
  }, 3200);

  const cancel = () => clearTimeout(tm);
  window.addEventListener("hashchange", cancel, { once: true });
}

function showResultOverlay() {
  // Inyectamos estilos globales una sola vez (en <head>)
  if (!overlayStyleInjected) {
    const style = document.createElement("style");
    style.textContent = `
      #result-overlay{
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: grid;
        place-items: center;
        background: rgba(0,0,0,.25);
        backdrop-filter: blur(2px);
        background: rgba(var(--tint, 0,0,0), 0.25); /* <- usa el tinte */
      }
        #result-overlay.is-win  { --tint: 88,193,114; }  /* #58c172 */
  #result-overlay.is-lose { --tint: 217,92,92; }   /* #d95c5c */

      #result-overlay .result-shell{
        /* contenedor al que le montamos ResultPage */
        transform: scale(.94);
        animation: popIn .18s ease-out forwards;
      }
      @keyframes popIn { to { transform: scale(1); } }
    `;
    document.head.appendChild(style);
    overlayStyleInjected = true;
  }

  // Evitamos duplicados
  let overlay = document.getElementById("result-overlay") as HTMLDivElement | null;
  if (overlay) overlay.remove();

  // Creamos overlay + contenedor interno
  overlay = document.createElement("div");
  overlay.id = "result-overlay";

  // ✅ Determinar y setear la clase (win/lose) para teñir el fondo
  const last = state.getLastRound?.();
  const winner = (last?.winner ?? "").trim().toLowerCase();
  const type = winner === "cpu" ? "lose" : winner === "user" ? "win" : "win"; // fallback
  overlay.classList.add(`is-${type}`);

  const shell = document.createElement("div");
  shell.className = "result-shell";
  overlay.appendChild(shell);
  document.body.appendChild(overlay);

  // Montamos ResultPage dentro del CONTENEDOR, no sobre el overlay
  ResultPage(shell);

  // Cuando cambie el hash (p.ej. botón "Volver a jugar"), limpiamos el overlay
  const cleanup = () => overlay?.remove();
  window.addEventListener("hashchange", cleanup, { once: true });
}
