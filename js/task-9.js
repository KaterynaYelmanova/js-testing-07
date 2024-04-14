const timeoutId = setTimeout(() => {
  console.log("Hello 1");
}, 5000);

setTimeout(() => {
  console.log("Hello 2");
}, 2000);

setTimeout(() => {
  console.log("Hello 3");
}, 4000);

clearTimeout(timeoutId);

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    seyHello(i, 10, 20);
  }, 5000);
}

function seyHello(i) {
  console.log(i);
}

const intervalId = setInterval(() => {
  console.log("Haha");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

//===========================================
//додаємо та прибираємо рекламу

const NOTIFICATION_DELAY = 3000;
//змінна, щоб можна було відалити setTimeout, який в іншій області видимості
let timeoutIdSuccess;
const notification = document.querySelector(".js-alert");

setTimeout(() => {
  console.log("Show");
  showNotification();
  timeoutIdSuccess = setTimeout(() => {
    hideNotification();
    console.log("Hide");
  }, NOTIFICATION_DELAY);
}, NOTIFICATION_DELAY);

//якщо натиснуть, то видаляємо

notification.addEventListener("click", () => {
  hideNotification();
  clearTimeout(timeoutIdSuccess);
});

function showNotification() {
  notification.classList.add("is-visible");
}

function hideNotification() {
  notification.classList.remove("is-visible");
}
//=================================================
//таймер

const startBtn = document.querySelector("[data-action-start]");
const stopBtn = document.querySelector("[data-action-stop]");
let intervalIdBtn;
const clockFase = document.querySelector(".clockfase");

startBtn.addEventListener("click", () => {
  const initTime = Date.now();

  intervalIdBtn = setInterval(() => {
    const currentTime = Date.now();
    const diff = currentTime - initTime;

    const time = formatTime(diff);
    clockFase.innerHTML = time;
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalIdBtn);
});

//функція з інтернету
const formatTime = (milliseconds) => {
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
  const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
  return [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ].join(":");
};
