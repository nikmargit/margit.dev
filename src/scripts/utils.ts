type ColorMode = "light" | "dark";

export function getInitialColorMode(): ColorMode {
  const persistedColorPreference = window.localStorage.getItem(
    "color-mode"
  ) as ColorMode;
  const hasPersistedPreference = typeof persistedColorPreference === "string";

  if (hasPersistedPreference) {
    return persistedColorPreference;
  }

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";
  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light";
  }

  return "light";
}

export function setColorModeVariables(colorMode: ColorMode) {
  const root = document.documentElement;

  root.style.setProperty(
    "--color-text",
    colorMode === "light" ? "red" : "blue"
  );
}
