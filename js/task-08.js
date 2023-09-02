// const registerForm = document.querySelector(".login-form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.currentTarget;
//   const email = form.elements.email.value;
//   const psw = form.elements.psw.value;

//   if (email === "" || password === "") {
//     return alert("Please fill in all the fields!");
//   }

//   const User = {
//     email: email
//     password: password,
//   };

//   console.log(User);
//   frmLogin.reset();}
const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === "" || password.value === "") {
    return alert("All fields should be filled in");
  }

  const objectData = {
    email: email.value,
    password: password.value,
  };

  console.log(objectData);
  event.currentTarget.reset();
});
