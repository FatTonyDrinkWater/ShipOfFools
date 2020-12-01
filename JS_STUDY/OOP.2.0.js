"use strict";
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Don't do this
  //   this.calcAg = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);
// 4 sters after new
// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. function auto return {}

// Static methods
Person.hey = function () {
  console.log("Hey!");
};
Person.hey();

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(jonas instanceof Person);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
console.log(Person.prototype);
jonas.calcAge();

Person.prototype.species = "Homo sapines";
console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

const arr = [3, 4, 5, 5, 5, 6, 7, 8];
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const title = document.querySelector("h1");
console.log(title);
console.dir(title);

// Coding Challenge
const Car = function (speed, make) {
  this.speed = speed;
  this.make = make;
};
Car.prototype.accelerate = function () {
  console.log(`${this.make} speed now is ${this.speed + 10}`);
};

Car.prototype.brake = function () {
  console.log(`${this.make} slows down and the speed now is ${this.speed + 5}`);
};

const tesla = new Car(300, "Tesla");
const nissan = new Car(200, "Nissan");

tesla.accelerate();
nissan.brake();

// CLASSES--------------------------------------------------------------------

class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be adde to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(this + "Hey!");
  }
}
PersonCL.hey();

const jessica = new PersonCL("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

//1. Classes are NOT hoisted
//2. Classes are first-class citizens
//3. Classes are executed in strict mode
//4.

// Object.create-------------------------------------------------------------
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();
