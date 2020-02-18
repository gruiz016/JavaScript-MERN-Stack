// Learning Functional Programming with Javascript
// Chapter 03, Video 03, Exercise 01
let _ = require('lodash');

let numbers = [1, 2, 3, 4, 5]
let evensFromNumbers = _.filter(numbers, function (element) {
  return element % 2 === 0;
})

console.log(evensFromNumbers);