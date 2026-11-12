const KEY = "theme"; // "light" | "dark" | "system"
const media = window.matchMedia("(prefers-color-scheme: dark)");

export const getTheme = () => {
  try {
    return localStorage.getItem(KEY) || "system";
  } catch {
    return "system";
  }
};

export const applyTheme = (theme = getTheme()) => {
  const isDark = theme === "dark" || (theme === "system" && media.matches);
  const root = document.documentElement;
  root.classList.toggle("dark", isDark);
  root.setAttribute("data-theme", isDark ? "pounce-dark" : "pounce-light");
};

export const setTheme = (theme) => {
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* storage unavailable: still apply for this session */
  }
  applyTheme(theme);
};

export const initTheme = () => {
  applyTheme();
  // follow the OS when the user hasn't chosen light or dark
  media.addEventListener("change", () => {
    if (getTheme() === "system") applyTheme();
  });
};
