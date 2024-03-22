const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const trimmedValue = textInput.value.trim();
  output.textContent = trimmedValue || "Anonymous";
});

//можна ще так

/*const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  let name = input.value.trim();
  output.textContent = name ? name : "Anonymous";
});*/
