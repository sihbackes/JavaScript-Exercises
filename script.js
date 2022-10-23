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
