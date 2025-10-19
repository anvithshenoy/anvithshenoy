const THEME_STORAGE_KEY = "app-theme";
const MODE_STORAGE_KEY = "app-mod";
const DIR_STORAGE_KEY = "app-dir";

export { DIR_STORAGE_KEY, MODE_STORAGE_KEY, THEME_STORAGE_KEY };

export function changeTheme(theme: "light" | "dark") {
  const root = document.documentElement;

  root.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);

  window.dispatchEvent(new CustomEvent("theme-change", { detail: theme }));
}

export function changeMode(mode?: "mono" | "duo") {
  const root = document.documentElement;
  const currentMode = root.getAttribute("data-mode") as "mono" | "duo" | null;

  let newMode: "mono" | "duo";

  if (mode) {
    newMode = mode;
  } else if (currentMode === "mono") {
    newMode = "duo";
  } else if (currentMode === "duo") {
    newMode = "mono";
  } else {
    newMode = "duo";
  }

  root.setAttribute("data-mode", newMode);
  localStorage.setItem(MODE_STORAGE_KEY, newMode);

  window.dispatchEvent(new CustomEvent("mode-change", { detail: newMode }));
}

export function toggleDir(dir?: "ltr" | "rtl") {
  const root = document.documentElement;
  const currentDir = getComputedStyle(root).direction;
  const newDir = dir ?? (currentDir === "ltr" ? "rtl" : "ltr");

  root.style.direction = newDir;
  root.setAttribute("direction", newDir);
  localStorage.setItem(DIR_STORAGE_KEY, newDir);
}
