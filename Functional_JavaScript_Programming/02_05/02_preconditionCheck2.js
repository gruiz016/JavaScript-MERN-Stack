// Learning Functional Programming with Javascript
// Chapter 02, Video 05, Exercise 02

function createSafeVersion(func) {
  return function (n, message) {
    if (n != null && typeof n === 'number') {
      if (message != null && typeof message === 'string') {
        return func(n, message)
      }
    }
  }
}

function printMessageNTimes(n, message) {
  for (var i = 0; i < n; i++) { console.log(message) }
}

function getNthLetter(n, string) {
  return string.charAt(n)
}

function getSubstringOfLength(n, string) {
  return string.substring(0, n)
}

let printMessageNTimesSafe = createSafeVersion(printMessageNTimes);
let getNthLetterSafe = createSafeVersion(getNthLetter);
let getSubstringOfLengthSafe = createSafeVersion(getSubstringOfLength);


printMessageNTimesSafe(4, "Banana") // prints "Banana Banana Banana Banana"
getNthLetterSafe(2, "Javascript") // 'v'
getSubstringOfLengthSafe(5, "Hello and welcome") // "Hello"
