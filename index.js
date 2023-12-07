const monthEl = document.querySelector("h1");
const stringDateEl = document.querySelector("p");
const monthIndex = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthIndex, 0).getDate();
const daysEl = document.querySelector(".days");
const startDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;
const today = new Date().getDate();
const month = [
    "January",
    "February",
    "March",
    "april",
    "may",
    "june",
    "july",
    "auguest",
    "september",
    "october",
    "november",
    "december",
];
console.log(today);
monthEl.innerText = month[monthIndex];
stringDateEl.innerText = new Date().toDateString();
let days = "";
for (let i = 1; i <= startDay; i++) {
    days += `<div class=empty></div>`;
}
for (let i = 1; i <= lastDay; i++) {
    if (i === today) {
        days += `<div class=today>${i}</div>`;
    } else {
        days += `<div>${i}</div>`;
    }
}
daysEl.innerHTML = days;
