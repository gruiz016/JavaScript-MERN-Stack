// Learning Functional Programming with Javascript
// Chapter 03, Video 02, Exercise 01

let _ = require('lodash');

let numbers = [1, 2, 3, 4, 5]
let numbersCubed = _.map(numbers, function (element) {
  return element * element * element;
})

console.log(numbersCubed);


