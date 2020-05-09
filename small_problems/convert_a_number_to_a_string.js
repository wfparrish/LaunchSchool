/*
In the previous two exercises, you developed functions that convert
simple numeric strings to signed integers. In this exercise and the next,
you're going to reverse those functions.

Write a function that converts a non-negative integer value
(e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available
in JavaScript, such as String(), Number.prototype.toString, or an expression
such as '' + number.

Your function should do this the old-fashioned way and construct the string
by analyzing and manipulating the number.


Understanding the Problem
-input - a non-negative integer value
-output - a string representation of the input value
rules/requirements
-cannot use String(), Number.prototype.toString, or a trick expression

Examples/Test Cases
integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"

Data Structures / Control Structures
-input - Number
-Output - String
-rules/requirements
  -a hash table(object) for connecting the 0-9 to '0' to '9'
  -while loop

Algorithm (plain english)
-declare an object numDictionary with key/value pairs 0:'0' to 9:'9'
-declare a function integerToString that takes in a variable named num
-declare an array named numHolder
-declare a variable named remainder, instantiate to 0
-declare a variable named index, instantiate to 0
-declare a variable named finalResult, instantiate to ''
-while num > 1
    -remainder = num MOD 10
    -num = parseInt(num / 10)
    -increment index
-reverse numHolder
-forEach index value in numHolder
  -if numHolder[index] is equal to a key in the numDictionary
    -concatentate the value assigned to the key to finalResult
-return finalResult
-call the function

Algorithm (pseudocode)

SET numDictionary = {0:'0' TO 9:'9'}
SET numHolder = [];
SET remainder = 0;
SET index = 0;
SET finalResult = ''

FUNCTION integerToString(num) {
  WHILE (num > 1) {
    remainder = num % 10;
    numHolder[index] = remainder
    num = parseInt(num / 10)
    index += 1
  }
  numHolder.reverse();
  numHolder.forEach(digit) {
    if (digit in numHolder ) {
      finalResult += digit
    }
  }
  return finalResult
}
*/

let numDictionary = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9'
};


function integerToString(num) {
  let numHolder = [];
  let remainder = 0;
  let index = 0;
  let finalResult = '';

  if (num === 0) {
    finalResult = '0';
    return finalResult;
  }

  while (num > 0) {
    remainder = num % 10;
    numHolder[index] = remainder;
    num = parseInt(num / 10, 10);
    index += 1;
  }
  numHolder.reverse();
  numHolder.forEach(digit => {
    if (digit in numDictionary) {
      finalResult += digit;
    }
  });
  return finalResult;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(1));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890)); // "1234567890"

