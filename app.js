let secondHand = document.querySelector(".second");

let minuteHand = document.querySelector(".minute");
let hourHand = document.querySelector(`.hour`);
let audio = document.querySelector("#tick");
const mute = document.querySelector(".mute");
const unmute = document.querySelector(".unmute");
let st = window.getComputedStyle(secondHand, null);

let secondAngle;
function setTime() {
  const d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  seconds_rotation = seconds * 6;
  minutes_rotation = minutes * 6 + seconds / 20;

  let hoursInTweleve;
  hours_rotation = 0;
  if (hours > 12) {
    hoursInTweleve = hours - 12;
    hours_rotation = hoursInTweleve * 30 + minutes / 2;
  } else if (hours < 12) {
    hours_rotation = hours * 30 + minutes / 2;
  }
  secondHand.style.transform = `rotate(${seconds_rotation}deg)`;
  minuteHand.style.transform = `rotate(${minutes_rotation}deg)`;
  hourHand.style.transform = `rotate(${hours_rotation}deg)`;
  secondAngle = seconds_rotation;
  return secondAngle;
  // secondAngle = seconds_rotation % 6;
  // return secondAngle;
  // console.log(secondAngle);
}
setInterval(setTime, 1000);
setTime();
console.log(secondAngle);
// console.log(secondAngle);
// console.log(enableloop());
// console.log(secondAngle);
// console.log(seconds_rotation);
// console.log(seconds_rotation);
// console.log(secondHand);
// console.log(secondHand.style.width);
// console.log(
//   setInterval(function () {
//     st.getPropertyValue("transform");
//   }, 1000)
// );

// setInterval(function () {});
// console.log(setTime().minuteHand);
function enableLoop() {
  audio.loop = true;
  tick.load();
  audio.autoplay = true;
}
function disableLoop() {
  tick.load();
  audio.loop = false;
  audio.autoplay = false;
}

mute.addEventListener("click", function () {
  unmute.classList.remove("hidden");
  mute.classList.add("hidden");
  enableLoop();
});
unmute.addEventListener("click", function () {
  mute.classList.remove("hidden");
  unmute.classList.add("hidden");
  disableLoop();
});
