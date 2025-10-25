export type ButtonProps = {
  text: string;
  id?: string;
  disabled?: boolean;
};

export function createButton(p: ButtonProps, onClick?: () => void) {
  const btn = document.createElement("button");
  btn.className = "btn";
  if (p.id) btn.id = p.id;
  btn.textContent = p.text;
  btn.disabled = !!p.disabled;

  const style = document.createElement("style");
  style.textContent = `
  .btn {
  width: 100%;
  height: 60px;
  background-color: rgba(0, 108, 252, 1);
  border-radius: 10px;
  border: 10px solid rgba(0, 25, 151, 1);
  color: rgba(216, 252, 252, 1);
  font-family: Inter;
  font-size: 20px;
  cursor:pointer;
  transition: transform .06s ease, filter .06s ease;
}
  `;

  btn.prepend(style);

  if (onClick)
    btn.addEventListener("click", () => {
      if (!btn.disabled) onClick();
    });

  function setText(t: string) {
    btn.textContent = t;
  }
  function setDisabled(v: boolean) {
    btn.disabled = v;
  }
  function destroy() {
    btn.remove();
    style.remove();
  }

  return { el: btn, setText, setDisabled, destroy };
}
