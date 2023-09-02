const body = document.body;
const colorValue = document.querySelector(".widget .color");
const ColorChangingButton = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

ColorChangingButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  colorValue.textContent = randomColor;
  body.style.backgroundColor = randomColor;
});
