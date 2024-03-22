const button = document.querySelector("button");
const body = document.querySelector("body");
//щоб показував номер кольору
const change = document.querySelector(".color");

button.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  change.textContent = randomColor;
});

//функція, що рандомно міняє колір

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
