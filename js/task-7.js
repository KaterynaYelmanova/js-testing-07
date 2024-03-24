const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", () => {
  console.log("Parent click handler");
});
child.addEventListener("click", () => {
  console.log("Child click handler");
});
descendant.addEventListener("click", () => {
  console.log("Descendant click handler");
});

parent.addEventListener("click", (event) => {
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
});

//зупиняє всі спливання події
//не рекомендується
/*
descendant.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Descendant click handler");
});*/

//не зовсім зрозуміло навіщо "div.box". На ".box" працює так само
const box = document.querySelector("div.box");

box.addEventListener("click", function (event) {
  console.log(event.target);
});

//задача - палітра кольорів

const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomHexColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
//підключення бібліотеки Lodash через CDN
//sum, — він обчислює суму значень у масиві
//[shuffle](<https://lodash.com/docs/4.17.15#shuffle>)
//— створює масив перетасованих значень

const numbers = document.querySelector(".numbers");
numbers.addEventListener("click", () => {
  console.log(_);
  console.log(_.sum([4, 2, 8, 6])); // 20
  console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
  console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]
});
