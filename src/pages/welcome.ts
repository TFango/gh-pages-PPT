import { welcomeStep } from "../steps/welcomeStep";
import { createButton } from "../components/button";
import { createLogos } from "../components/logos";

export function WelcomePage(root: HTMLElement) {
  root.innerHTML = "";

  const view = welcomeStep();
  root.appendChild(view);

  const slotBtn = view.querySelector<HTMLDivElement>("#slot-start");
  if (slotBtn) {
    const startBtn = createButton({ text: "Empezar", id: "btn-start" }, () => {
      location.hash = "#/start";
    });
    slotBtn.replaceWith(startBtn.el);
  }

  const slotLogos = view.querySelector<HTMLDivElement>("#slot-logos");
  if (slotLogos) {
    const logos = createLogos();
    slotLogos.replaceWith(logos.el);
  }
}
