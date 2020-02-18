// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 02

function createCounter(count) {

  return {
    increment: function () {
      count = count + 1;
    },

    currentValue: function () {
      return count;
    }
  }
}

let counterStartingAt5 = createCounter(5);
