const rangeInput = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

rangeInput.addEventListener("input", () => {
  const fontSize = rangeInput.value;
  outputText.style.fontSize = fontSize + "px";
});
