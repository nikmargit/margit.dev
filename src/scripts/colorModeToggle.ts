document.querySelector(".btn-switch")!.addEventListener("click", () => {
  const htmlDocument = document.querySelector("html")!;
  const colorMode = htmlDocument.dataset.theme;
  const newMode = colorMode === "light" ? "dark" : "light";
  htmlDocument.setAttribute("data-theme", newMode);
  localStorage.setItem("color-mode", newMode);
});
