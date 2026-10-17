
const helloBtn = document.querySelector("#helloBtn");
const themeBtn = document.querySelector("#themeBtn");
const status = document.querySelector("#status");

helloBtn.addEventListener("click", () => {
  status.textContent = "Hello from GitHub Pages!";
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
