/*

Write a function that takes one argument, a positive integer,
and returns a list of the digits in the number.

Understanding the Problem
-input - a positive integer
-output - a list of digits in the number
-rules/requirements
  -use a function
  -the integer argument is assumed to be positive
  -return a list of the number's digits

Examples:

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

Data Structures / Control Structures
-input - number
-output - array
-rules/requirements
  -using the methods of the language
  -implicit looping

Algorithm (plain english)
-declare a function named digitList() takes one number
-declare an empty array numArray;
-convert the number to a string
-split the string into an array
-return the array
-call the function

Algorithm (pseudocode)
FUNCTION digitList(num) {
  num = String(num);
  SET numArray = [];
  numArray.split(num);
  return numArray;
}

PRINT(digitList(arg));
*/

function digitList(num) {
  num = String(num);
  let numArray = [];
  numArray = num.split('');
  return numArray;
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]