// Learning Functional Programming with Javascript
// Chapter 04, Video 02, Exercise 02

let x = 1;

console.log(x);

setTimeout(function () {
    x = 99;
    console.log("X is chagned to " + x);
}, 3000);