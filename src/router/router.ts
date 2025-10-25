import { WelcomePage } from "../pages/welcome";
import { StartPage } from "../pages/start";
import { PlayPage } from "../pages/play";
import { wachMovePage } from "../pages/wachMove";
import { ResultPage } from "../pages/result";

const routes: Record<string, (root: HTMLElement) => void> = {
  "#/": WelcomePage,
  "#/start": StartPage,
  "#/play": PlayPage,
  "#/wachMove": wachMovePage,
  "#/result": ResultPage,
};

const root = document.getElementById("app")!;
let cleanup: (() => void) | undefined;

function render() {
  cleanup?.();
  const page = routes[location.hash || "#/"];
  if (!page) return (root.textContent = "404");
  const maybeCleanup = page(root);
  if (typeof maybeCleanup === "function") cleanup = maybeCleanup;
}

export function initRouter() {
  window.addEventListener("hashchange", render);
  render();
}
