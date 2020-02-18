// Learning Functional Programming with Javascript
// Chapter 03, Video 04, Exercise 01

let _ = require('lodash');

let numbers = [2, 4, 6, 8, 10, 12];

let arrayContainsEven = _.some(numbers, function (element) {
  return element % 2 === 0;
});


let arrayIsAllEven = _.every(numbers, function (element) {
  return element % 2 === 0;
});

console.log(arrayContainsEven, arrayIsAllEven);
