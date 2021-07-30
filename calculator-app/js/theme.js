const cssTheme = document.getElementById("css-theme");
const slider = document.querySelector(".slider");
const buttons = document.querySelectorAll("button");
let currentTheme = 1;

slider.addEventListener("click", () => {
	if (currentTheme == 1) {
		slider.style.justifyContent = "center";
		cssTheme.href = "./css/theme2.css";
		currentTheme = 2;
	} else if (currentTheme == 2) {
		slider.style.justifyContent = "flex-end";
		cssTheme.href = "./css/theme3.css";
		currentTheme = 3;
	} else {
		slider.style.justifyContent = null;
		cssTheme.href = "./css/theme1.css";
		currentTheme = 1;
	}
});
