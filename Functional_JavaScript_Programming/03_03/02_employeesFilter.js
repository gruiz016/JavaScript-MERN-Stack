// Learning Functional Programming with Javascript
// Chapter 03, Video 03, Exercise 02
let _ = require('lodash');

let employees = [
  { name: "John",  salary: 50000  },
  { name: "Susan", salary: 60000  },
  { name: "Greg",  salary: 100000 },
  { name: "Mary",  salary: 120000 }
]

let dueForARaise = _.filter(employees, function(employee) {
  return employee.salary < 70000;
});

console.log(dueForARaise);
