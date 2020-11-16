let timeNow = document.getElementById("year");
let deathYearDOM = document.getElementById("deathyear");
let timeLeft = document.getElementById("timeleft");
let HMSnow = document.getElementById("timenow");
let DOMclock = document.getElementById("clock");
let DOMyear = document.getElementById("showyear");


let now = new Date(); // Right now

let strDate = Date();
let strYear = Date();
let year = now.getFullYear();

let birthYear = 1993;
let averageLiveSpanInRU = 73;
let deathYear = birthYear + averageLiveSpanInRU;
let allMyYears = deathYear - year;


console.log(year);
console.log(deathYear);
console.log(allMyYears);
console.log(now);

strDate = strDate.slice(16, 24); // начиная с 15 и не включая 24
strYear = strYear.slice(4, 15);

console.log(strDate);
console.log(strYear);



// Функция добавляет НОЛЬ перед часами и минутами, если нужно
let hours;
let addZero = () => {
  if (now.getHours()) {

  }

}

let clock = function() {
  let date = new Date();date
  let h = date.getHours().toString();
  let m = date.getMinutes().toString();
  let s = date. getSeconds().toString();

  h.length < 2 ? h = '0' + h : h = h;
  m.length < 2 ? m = '0' + m : m = m;
  s.length < 2 ? s = '0' + s : s = s;
  console.log(s);
  let clockString = `${h}:${m}:${s}`;
  DOMclock.innerText = clockString;

};

let render = () => {
  timeNow.innerText = `${year} сейчас`;
  deathYearDOM.innerText = `${deathYear} год смерти`;
  timeLeft.innerText = `${allMyYears} осталось лет`;
  DOMclock.innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
 
  DOMyear.innerHTML = strYear;
};

setInterval(clock, 1000);
// Вызывается но хтмл не меняется. каждый раз вызывается одно и тоже число
// не работала потому что Дейт создавался только один раз вне функции, и каждый новый вызов ссылался на него