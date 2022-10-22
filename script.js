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
