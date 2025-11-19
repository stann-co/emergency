const darkmode = document.querySelector("#darkmode");
const root = document.querySelector(":root");

function toogleDarkMode() {
  	root.classList.toggle("dark")
}

darkmode.addEventListener("click", toogleDarkMode);