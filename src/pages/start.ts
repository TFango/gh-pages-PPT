import { starStep } from "../steps/startStep";
import { createButton } from "../components/button";
import { createLogos } from "../components/logos";

export function StartPage(root: HTMLElement) {
  root.innerHTML = "";

  const view = starStep();
  root.appendChild(view);

  const slotBtn = view.querySelector<HTMLDivElement>("#slot-start");
  if (slotBtn) {
    const startBtn = createButton({ text: "¡Jugar!", id: "btn-start" }, () => {
      location.hash = "#/play";
    });
    slotBtn.replaceWith(startBtn.el);
  }

  const slotLogos = view.querySelector<HTMLDivElement>("#slot-logos");
  if (slotLogos) {
    const logos = createLogos();
    slotLogos.replaceWith(logos.el);
  }
}
