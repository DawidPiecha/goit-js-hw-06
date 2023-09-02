const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === "" || password.value === "") {
    return alert("All fields should be filled in");
  }

  const object = {
    email: email.value,
    password: password.value,
  };

  console.log(object);
  event.currentTarget.reset();
});
