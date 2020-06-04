/*
Write a function that takes an integer argument,
and returns an array containing all integers between 1
and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

Understanding the Problem
-input - a number (integer)
-output - an array
-rules/requirements
  -use a function
  -return an array containing a range of integers
    -all integers between 1 and the argument, inclusive
    -return the array in ascending order

Examples:

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

Data Structures / Control Structures
input - number
output - array
rules/requirements
  -use a looping structure to add elements to the array

Algorithm (plain english)
-declare a function named sequence() that takes one argument
-declare an array named seqArray
-declare a for loop that
  -starts at index equal to 1
  -as long as the index is less than or equal to the argument
    -push a new value into seqArray equal to the index
-return seqArray
-call the function

Algorithm (pseudocode)
FUNCTION sequence(num) {
  SET seqArray = [];
  FOR (SET index = 1; index <= num; index++) {
    seqArray.PUSH(index);
  }
  RETURN seqArray
}

PRINT(sequence(5));    // [1, 2, 3, 4, 5]
PRINT(sequence(3));    // [1, 2, 3]
PRINT(sequence(1));    // [1]
*/

function sequence(num) {
  let seqArray = [];
  for (let index = 1; index <= num; index++) {
    seqArray.push(index);
  }
  return seqArray;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
