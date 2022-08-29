const secHand = document.getElementById("sec-hand");
const minHand = document.getElementById("min-hand");
const hourHand = document.getElementById("hour-hand");

function setDate() {
  const now = new Date();

  const sec = now.getSeconds();
  const secDeg = sec * 6;
  secHand.style.transform = `rotate(${secDeg}deg)`;

  const min = now.getMinutes();
  const minDeg = min * 6 + sec / 10;
  minHand.style.transform = `rotate(${minDeg}deg)`;

  const hour = now.getHours();
  const hourDeg = hour * 30 + min / 2;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);
