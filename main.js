"use strict";

// let today = document.querySelector("#p1");
let time = document.querySelector("#p2");

function clock() {
  const date = new Date();
  // const dayWeek = [
  //   "Воскресенье",
  //   "Понедельник",
  //   "Вторник",
  //   "Среда",
  //   "Четверг",
  //   "Пятница",
  //   "Суббота",
  // ];

  // const presentDay = "Сегодня" + " " + dayWeek[date.getDay()];

  let Hour = checkTime(date.getHours());
  let Minutes = checkTime(date.getMinutes());
  let Seconds = checkTime(date.getSeconds());

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  // today.innerText = presentDay;
  time.innerText = [Hour, Minutes, Seconds].join(":");
}

let timerID = setInterval(clock, 1000);
clock();
