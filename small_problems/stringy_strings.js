/* Write a function that takes one argument, a positive integer, and returns a
   string of alternating '1's and '0's, always starting with a '1'.
   The length of the string should match the given integer.

Understanding the Problem
-input - a positive integer
-output - an alternating string of 1's and 0's
-rules/requirements
  -the string of 1's and 0's always starts with 1
  -the length of the string is equal to the integer's value
  -use a function that takes exactly one argument

Examples / Test Cases
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

Data Structures / Control Structures
-input - number
-output - string
-rules/requirements
 -using a for loop to construct the output string
 -using an if statement to check for even/odd

Algorithm (plain english)
-declare a function named stringy that takes one argument (num)
-declare a variable named strStore
-check num for even or odd
-if even
  -instantiate strStore to ''
  -for num/2 times
    -concat '10' into strStore
-if odd
  -instantiate strStore to '1'
  -for (num-1)/2 times
    -concat '01' into strStore
-return strStore

FUNCTION stringy(num) {
  SET strStore
    IF (num % 2 === 0) {
      strStore = '';
      FOR (i = 0; i <= n/2; i++) {
        strStore += '10';
      } ELSE {
      strStore = '1';
      FOR (i = 0; i <= (num-1)/2; i++) {
        strStore += '01'
      }
    }
    RETURN strStore
}
*/

function stringy(num) {
  let strStore;
  if (num % 2 === 0) {
    strStore = '';
    for (let i = 0; i < num / 2; i++) {
      strStore += '10';
    }
  } else {
    strStore = '1';
    for (let i = 0; i < (num - 1) / 2; i++) {
      strStore += '01';
    }
  }
  return strStore;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"