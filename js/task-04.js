const minusButton = document.querySelector(
  '#counter [data-action="decrement"]'
);
const plusButton = document.querySelector('#counter [data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

plusButton.addEventListener("click", () => {
  counterValue++;
  value.textContent = counterValue;
});

minusButton.addEventListener("click", () => {
  counterValue--;
  value.textContent = counterValue;
});
