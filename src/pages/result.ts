import { createScore } from "../components/score";
import { resultStep } from "../steps/resultStep";
import { createButton } from "../components/button";
import { state } from "../state/state";
import { createStar } from "../components/star";

export function ResultPage(root: HTMLElement) {
  root.innerHTML = "";

  const view = resultStep();

  const slotStar = view.querySelector<HTMLDivElement>("#slot-star");
  if (slotStar) {
    const last = state.getLastRound();
    const w = (last?.winner ?? "").trim().toLowerCase();

    let starType: "win" | "lose";

    if (w === "cpu") starType = "lose";
    else if (w === "user") starType = "win";
    else starType = "win";

    const star = createStar(starType);
    slotStar.replaceWith(star);
  }

  const slotScore = view.querySelector<HTMLDivElement>("#slot-score");
  if (slotScore) {
    const score = createScore();
    slotScore.replaceWith(score);
  } else {
    console.warn("No encontre #slot-score");
  }

  const slotBtn = view.querySelector<HTMLDivElement>("#slot-start");
  if (slotBtn) {
    const startBtn = createButton(
      { text: "Volver a jugar", id: "btn-start" },
      () => {
        location.hash = "#/play";
      }
    );
    slotBtn.replaceWith(startBtn.el);
  }

  root.replaceChildren(view);
}
