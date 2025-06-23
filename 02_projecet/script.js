let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

// Set your custom time here
var t=new Date();
console.log(t);
let hh = t.getHours();
let mm = t.getMinutes();

let ss = t.getSeconds();

function displayTime() {
  ss++;

  if (ss >= 60) {
    ss = 0;
    mm++;
  }

  if (mm >= 60) {
    mm = 0;
    hh++;
  }

  if (hh >= 12) {
    hh = 0;
  }

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
