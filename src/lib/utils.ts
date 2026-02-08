import { Direction, Mode, Theme } from "@/providers/Theme";
import { toast } from "sonner";
import { LOCAL_STORAGE } from "./common";

const { DIR_STORAGE_KEY, MODE_STORAGE_KEY, THEME_STORAGE_KEY } = LOCAL_STORAGE;

export function changeTheme(theme: Theme) {
  const root = document.documentElement;

  root.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);

  window.dispatchEvent(new CustomEvent("theme-change", { detail: theme }));
}

export function changeMode(mode?: Mode) {
  const root = document.documentElement;
  const currentMode = root.getAttribute("data-mode") as Mode | null;

  let newMode: Mode;

  if (mode) {
    newMode = mode;
  } else if (currentMode === "mono") {
    newMode = "duo";
  } else if (currentMode === "duo") {
    newMode = "mono";
  } else {
    throw new Error("Invalid currentMode");
  }

  root.setAttribute("data-mode", newMode);
  localStorage.setItem(MODE_STORAGE_KEY, newMode);

  window.dispatchEvent(new CustomEvent("mode-change", { detail: newMode }));
}

export function toggleDir(dir?: Direction) {
  const root = document.documentElement;
  const currentDir = getComputedStyle(root).direction;
  const newDir = dir ?? (currentDir === "ltr" ? "rtl" : "ltr");

  root.style.direction = newDir;
  root.setAttribute("direction", newDir);
  localStorage.setItem(DIR_STORAGE_KEY, newDir);
}

export function preventDefault(e: React.MouseEvent) {
  e.preventDefault();
}

export async function getRandomFact() {
  return await fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((res) => res.json())
    .then((data) => {
      return data.text;
    })
    .catch(() => toast.error("Some error popped up in the way..."));
}
