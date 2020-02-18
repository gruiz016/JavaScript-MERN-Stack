// Learning Functional Programming with Javascript
// Chapter 03, Video 05, Exercise 01
let _ = require('lodash');

let shoppingList = [
  { name: "Eggs", price: 4.99 },
  { name: "Milk", price: 3.99 },
  { name: "Bananas", price: 2.79 },
  { name: "Beer", price: 6.99 }
]

let totalCost = _.reduce(shoppingList, function (acc, item) {
  return acc + item.price;
}, 0 /* 0 to the left is the starting value of acc */);

console.log(totalCost);