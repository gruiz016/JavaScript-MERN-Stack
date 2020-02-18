// Learning Functional Programming with Javascript
// Chapter 03, Video 06, Exercise 01
let _ = require("lodash");

let employees = [
  { name: "John", salary: 60000, age: 27, gender: 'M' },
  { name: "Mary", salary: 110000, age: 50, gender: 'F' },
  { name: "Susan", salary: 50000, age: 21, gender: 'F' },
  { name: "Greg", salary: 100000, age: 45, gender: 'M' },
  { name: "Jerry", salary: 90000, age: 39, gender: 'M' },
  { name: "Barb", salary: 95000, age: 36, gender: 'F' }
]

let males = _.filter(employees, function (employee) {
  return employee.gender === 'M';
});

let maleAges = _.map(males, function (male) {
  return male.age;
});

let maleTotalAge = _.reduce(maleAges, function (acc, age) {
  return acc + age;
});

let maleAvgAge = maleTotalAge / males.length;

console.log(maleAvgAge);

let females = _.filter(employees, function (employee) {
  return employee.gender === 'F';
});

let femaleAges = _.map(females, function (female) {
  return female.age;
});

let femaleTotalAge = _.reduce(femaleAges, function (acc, age) {
  return acc + age;
});

let femaleAvgAge = femaleTotalAge / females.length;

console.log(femaleAvgAge);