// index.js — overlay toggling only. Keyboard: G (grid), B (baseline).

const TOGGLES = {
  g: "grid-overlay",
  b: "baseline-overlay",
};

const setPressed = (overlay, on) => {
  document.body.classList.toggle(overlay, on);
  const btn = document.querySelector(`[data-overlay="${overlay}"]`);
  if (btn) btn.setAttribute("aria-pressed", String(on));
};

document.querySelectorAll("[data-overlay]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const overlay = btn.dataset.overlay;
    const on = !document.body.classList.contains(overlay);
    setPressed(overlay, on);
  });
});

window.addEventListener("keydown", (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const target = e.target;
  if (target instanceof HTMLElement && /^(input|textarea|select)$/i.test(target.tagName)) return;

  const overlay = TOGGLES[e.key.toLowerCase()];
  if (!overlay) return;
  const on = !document.body.classList.contains(overlay);
  setPressed(overlay, on);
});
