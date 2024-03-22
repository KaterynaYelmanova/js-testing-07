function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  //спочатку очищаємо
  destroyBoxes();
  //якщо кількість від 1 до 100
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    //тоді створюємо квадратики
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");
      div.style.width = `${30 + i * 10}px`;
      div.style.height = `${30 + i * 10}px`;
      div.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(div);
    }
    boxes.appendChild(fragment);
    //цей рядок присвоює порожню
    //строку значенню властивості value елементу input.
    input.value = "";
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
