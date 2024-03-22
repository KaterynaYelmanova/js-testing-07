//повертає не масив

/*const registerForm = document.querySelector("form");
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }
  console.log(`Email: ${email}, Password: ${password}`);
  form.reset();
}*/

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  //console.log(event.currentTarget.elements);
  const elements = event.currentTarget.elements;
  const formData = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };
  // Check if any form field is empty
  if (formData.email === "" || formData.password === "") {
    alert("All form fields must be filled in");
    return;
  }

  console.log(formData);

  event.currentTarget.reset();
}
