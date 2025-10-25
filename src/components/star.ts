import starWinUrl from "../assets/starGanaste.png";
import starLoseUrl from "../assets/starPerdiste.png";

const starMap = {
  win: starWinUrl,
  lose: starLoseUrl,
} as const;

export function createStar(type: "win" | "lose") {
  const img = new Image();

  img.src = starMap[type];
  img.alt = type === "win" ? "Ganaste" : "Perdiste";
  img.className = "img-star";

  const style = document.createElement("style");
  style.textContent = `
    .img-star{
display:block;
      width:160px;
      height:auto;
      margin-bottom:20px;
}   
    `;
  const wrapper = document.createElement("div");

  wrapper.append(style, img);

  return wrapper;
}
