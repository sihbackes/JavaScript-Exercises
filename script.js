// Write a JavaScript program to check two numbers and return
// true if one of the numbers is 100 or if the sum of the two
//numbers is 100

function checkNumbers(number1, number2) {
  if (number1 === 100 || number2 === 100 || number1 + number2 === 100) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNumbers(50, 10));

//function to check if a number is odd or even

function oddOrEven(number) {
  if (number % 2 === 0) {
    return `The number ${number} is even`;
  } else {
    return `The number ${number} is odd`;
  }
}

console.log(oddOrEven(10));

// multiplication table

function multiplicationTable(number) {
  for (let i = 1; i < 11; i++) {
    let multiplication = i * number;
    console.log(`${number} X ${i} = ${multiplication}`);
  }
}

console.log(multiplicationTable(5));

//ARROW FUNCTIONS

// Arrow functions allows a short syntax for writing function expressions.
// You don't need the function keyword, the return keyword, and the curly brackets.

var x = function (x, y) {
  return x * y;
};

const x2 = (x, y) => x * y;
// Arrow functions are not hoisted. They must be defined before they are used.

//function with 2 parameters
function sum(a, b) {
  return a + b;
}

let sum2 = (a, b) => a + b;

//function with 1 parameter
function isPositive(number) {
  return number >= 0;
}

let isPositive2 = (number) => number >= 0;

// function with no parameter

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

let randomNumber2 = () => Math.floor(Math.random() * 10);
