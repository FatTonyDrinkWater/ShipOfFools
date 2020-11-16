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
