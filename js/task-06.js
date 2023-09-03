const input = document.querySelector("#validation-input");
const correctInputLength = 6; //lub zamiana konkretnej wartości liczbowej na odnośnik do stringa,
// który trzeba zamienić na liczbę przy użyciu parseInt czyli:parseInt(input.getAttribute("data-length"))

input.addEventListener("blur", () => {
  if (input.value.length === correctInputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
