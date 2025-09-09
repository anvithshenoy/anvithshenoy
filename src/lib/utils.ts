const THEME_STORAGE_KEY = "app-theme";
const DIR_STORAGE_KEY = "app-dir";

export { DIR_STORAGE_KEY, THEME_STORAGE_KEY };

export function changeMode(theme: "light" | "dark") {
  const root = document.documentElement;

  root.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);

  window.dispatchEvent(new CustomEvent("theme-change", { detail: theme }));
}

export function toggleDir(dir?: "ltr" | "rtl") {
  const root = document.documentElement;
  const currentDir = getComputedStyle(root).direction;
  const newDir = dir ?? (currentDir === "ltr" ? "rtl" : "ltr");

  root.style.direction = newDir;
  root.setAttribute("direction", newDir);
  localStorage.setItem(DIR_STORAGE_KEY, newDir);
}
