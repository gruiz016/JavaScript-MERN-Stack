// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 01

function createCounter() {
  let count = 0;
  return {
    increment: function() {
      count += 1;
    },
    currentValue: function() {
      return count;
    }
  }
}

let myCounter = createCounter()

console.log(myCounter.currentValue())

myCounter.increment()
myCounter.increment()

console.log(myCounter.currentValue())

console.log(myCounter.currentValue())
