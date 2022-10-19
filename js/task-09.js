function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector(".color")
const body = document.querySelector("body");
const button = document.querySelector(".change-color")

button.addEventListener("click", () => {
body.style.backgroundColor = `${getRandomHexColor()}`
color.textContent = body.style.backgroundColor;
});

