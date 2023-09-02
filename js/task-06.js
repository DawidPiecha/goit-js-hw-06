const input = document.querySelector("#validation-input");
const minimumInputLength = 6;

input.addEventListener("blur", () => {
  if (input.value.length >= minimumInputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
