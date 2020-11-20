// Won't need that often
// const moreNumbers = Array(5);
// const yetMoreNumbers = Array.of(1, 2);

//Array methods
const hobbies = ["Sports", "Drinking"];
hobbies.push("Reading"); // Добавляет в конец
hobbies.unshift("Coding"); // Добавляет элемент в начало
const poppedValue = hobbies.pop(); // Удаляет последний элемент
hobbies.shift(); // удаляет первый элемент
console.log(hobbies[2]); // index access
console.log(hobbies.length); // 3=3 = 0,1,2
console.log(hobbies[hobbies.length - 1]); // get last element 3-1= 2 index
console.log(hobbies.indexOf("Drinking"));
console.log(hobbies.includes("Drinking"));

//Nested arrays

const listItems = document.querySelectorAll("li");
console.log(listItems); // node-list (i and length)
const arrayListItems = Array.from(listItems); // Делает еррей-лайк и итерабл в настоящий АРРЕЙ
console.log(arrayListItems);

const personalData = [30, "Max", { moreDetail: [] }];
console.log(personalData[1]);

const analyticsData = [
  [1.2, 2],
  [3, 5.4],
]; // Массив внутри массива - multi dimensional. Nested data
for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

hobbies.splice(0, 0, "Good food"); // REAL ARRAY ONLY...
console.log(hobbies);

const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const storedResults = testResults.slice(0, 2); // новый массив с темы же данными, а не ссылка. со слайсем
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);
console.log(storedResults, testResults);
console.log(testResults.indexOf(1.5));
console.log(testResults.lastIndexOf(1.5));

/// Перебор значений массива///////////////////////////////////

const prices = [10, 20, 30, 45];
const tax = 0.19;
const taxAdjustedPrices = [];

for (const value of prices) {
  taxAdjustedPrices.push(value * (1 + tax));
}
console.log(taxAdjustedPrices);

prices.forEach((price, i, prices) => {
  const priceObj = { index: i, taxAdjustedPrices: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});

// shorter alternative MAP 8.13

const prices = [10, 20, 30, 45];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, i, prices) => {
  const priceObj = { index: i, taxAdjustedPrices: price * (1 + tax) };
  return priceObj;
});
console.log(prices, taxAdjustedPrices); // brand new changed array MAP

// Another one

const birthYear = [1990, 2000, 1994];
const ages = birthYear.map((el) => 2020 - el); // el = array element
// Создаем новый эррей с возрастом МАП возвращает его. Эрроу если 1 арг
// C двумя аргументами нужно брать в (el, index)

/// sorting and Reversing

const prices = [10, 20, 30, 45];
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
}); // by default converts to a string
console.log(sortedPrices.reverse());

/// filter
const prices = [10, 20, 30, 45];
const filteredPrices = prices.filter((price) => price > 15); // shorter version
const filteredArray = prices.filter((price, i) => {
  return price > 15;
});

console.log(filteredArray);
console.log(filteredPrices);

console.log(prices);

/// reduce
const prices = [10, 20, 30, 45];

const sum = prices.reduce((preValue, curValue, curIndex, prices) => {
  return preValue + curValue;
}, 0);

// STRINGS split() join()

const data = "newyork;10.99;2000";

const transformedData = data.split(";");
console.log(transformedData);

const nameFragments = ["Max", "Smith"];
const name = nameFragments.join(" ");
console.log(name);

// The Spread Operator
const nameFragments = ["Max", "Smith"];
const copiedNames = [...nameFragments]; // new copied array
nameFragments.push("Joe");

console.log(nameFragments, copiedNames);

// Array destructuring 7.21

const nameFragments = ["Max", "Smith", 30, "lol"];
const [firstName, lastName, ...otherInfo] = nameFragments;
console.log(firstName, otherInfo);

const numbers = [1, 2, 3];
const [firstNum, secondNum, ...otherNums] = numbers;
console.log(firstNum, otherNums);

// Maps and sets

/////////////////////////////////////////////////

let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // 4-2 = 2 элемента. Сам 2 и 3
console.log(arr.slice(-2)); // last 2 elements of array
console.log(arr.slice()); // Копия. Либо спред. Без разницы

//SPLICE-----------------------------------------------------------------------
console.log(arr.splice(2)); // Удаляет элементы изменя ориг. массив ( со 2 и)

/// REVERSE ------------------------------------------------------------------
// Разворот на 180. Мьютейт оригинал массив
let arr2 = ["h", "e", "l", "l", "o"];
console.log(arr2.reverse());

// CONCAT ----------------------------------------------------
// Объединить 2 массива в один
// НЕ мутирует ор. массивы
const letters = arr.concat(arr2);
// Или [...arr, ...arr2]
console.log(letters);

//JOIN ------------------------------------------------------------------------
// Получить строку с разделителим, или запятой
console.log(letters.join("-"));

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account3, account4];

// MAP -----------------------------------------------------------------
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUsd = movements.map(function (cur) {
  return cur * eurToUsd;
});

// FILTER -------------------------------------------------------------------
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);

function isIsogram(str) {
  let a = str.split(" ");
  let b = a.filter((item, pos, arr) => {
    arr.indexOf(item) == pos;
  });
  let c = b.length == str.length;
  return c;
  return (
    str.split("").filter((item, pos, arr) => arr.indexOf(item) == pos).length ==
    str.length
  );
}
console.log(isIsogram("thomas"));
console.log(isIsogram("moses"));

// REDUCE -------------------------------------------------------------------
const balance = movements.reduce(function (accum, cur, i, arr) {
  return accum + cur;
}, 0); // можно не указывать

// FIND ---------------------------------------------------------------------
const firstWithdrawal = movements.find((mov) => mov < 0); // TRUE or FALSE (1st satsfies)
console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find((acc) => acc.owner === "Sarah Smith");
console.log(account);

//FindIndex-----------------------------------------------------------------

// Some and Every--------------------------------------------------------------
//Equality
console.log(movements.includes(-130));
// Condition
const anyDeps = movements.some((mov) => mov > 5000);
console.log(anyDeps);

// EVERY---------------------------------------------------------------------
console.log(movements.every((mov) => move > 0));

//Flat
// Removed nested NICE
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[1, 2, [3, 4], 3], [4, 5, 6], 7, 8];
console.log(arrDeep.flat(2));

// Strings sorting // MUTATE the original ARRAY bc // Alphabetic auto.
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());

// Numbers sorting
console.log(movements.sort());
// Return < 0 A,B (and reverse)
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements);
