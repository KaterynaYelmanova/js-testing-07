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

const buttonClickMe = document.querySelector(".btn");
const onClick = () => {
  const timerId = setTimeout(() => {
    console.log("I love async JS!");
  }, 2000);
  console.log(timerId);
  //скасування таймауту
  //clearTimeout(timerId);
};
buttonClickMe.addEventListener("click", onClick);

//setInterval() clearInterval--------------------------------

function seyHello() {
  console.log(`Hello world`);
}
setTimeout(seyHello, 3000);
setTimeout(seyHello, 1000);
for (let i = 0; i < 10000; i++) {
  console.log(i);
}

function seyHaha() {
  console.log(`Haha`);
}
setTimeout(seyHaha, 2000);
setTimeout(seyHaha, 4000);
for (let i = 0; i < 10000; i++) {
  console.log(i);
}
//---------------------------
const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
let intervalId = null;

startBtn.addEventListener("click", () => {
  intervalId = setInterval(() => {
    console.log(`Interval ID: intervalId, ${Math.random()}`);
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  console.log(`Interval with id ${intervalId} has stopped!`);
});

//створення дати
const date = new Date();
console.log(date);

//тільки дата (без часу)

//const dateWithoutTime = new Date("2028-06-02");
//console.log(dateWithoutTime);

//з 01.01.1970

//console.log(new Date(0));
//console.log(new Date(15000));

//повертає кількість мілісекунд з 1.01.1970
console.log(date.getTime());

//коли потрібне тільки числове представлення часу
//const time = Date.now();
//console.log(time);

//якщо хочемо виміряти, скільки часу займає виконання деякого коду

const startTime = Date.now();
//твій код

for (let i = 0; i <= 100; i += 1) {
  console.log(i);
}
const endTime = Date.now();
const elapsedTime = endTime - startTime;

console.log(`Elapsed time: ${elapsedTime} ms`);

//проміси

const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 1000);
});

console.log(promise); // Об'єкт промісу
