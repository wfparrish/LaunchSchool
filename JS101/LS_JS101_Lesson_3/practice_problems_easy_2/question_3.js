/*
Given a number and an array, determine whether the number is included in the array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

Understanding the Problem
-input - an array of numbers
-output - true or false value depending on evaluation
-rules/requirements
-determine if the number is in the array or not
-the numbers and the array are given

Examples / Test Cases
let number1 = 8;  // false
let number2 = 95; // true

Data Structures / Control Structures
-input - array, number
-output - boolean
-rules/requirements
-use the methods of the array 

Algorithm (plain english)
-declare a function named findNumber() that takes two arguments
-the first argument is an array (arr)
-the second argument is a numeric value (num)
-check to see if num is included in the array
-if included, the function will return true
-else the function will return false
-call the function

Algorithm (pseudocode)
FUNCTION findNumber(arr, num) {
  PRINT arr.INCLUDES(num);
}

findNumber(numbers, number1);

*/

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  
let number2 = 95;

function findNumber(arr, num) {
  return arr.includes(num);
}

console.log(findNumber(numbers, number1));
console.log(findNumber(numbers, number2));
