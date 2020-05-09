/*
Write a function that returns true if its integer argument is
palindromic, or false otherwise.
A palindromic number reads the same forwards and backwards.

Understanding the Problem
-input - an integer to be tested
-output - true or false value
-rules/requirments
  -use a function
  -number reads the same forwards and backwards

Examples
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

Data Structures/Control Structures
-input - number
-output - boolean
rules/requirements
 - array for data manipulation

Algorithm (plain english)
-declare a function, isPalindromicNumber that takes a integer
-convert the argument to a string
-split the string into an array
-reverse the array
-join the string
-compare the string to the manipulated string
  -if the values are equal return true
  -if the values are not equal return false
-call the function

Algorithm (pseudocode)
FUNCTION isPalindromicNumber(num) {
  num = String(num);
  return num === num.SPLIT('').REVERSE().JOIN('')
}
*/

function isPalindromicNumber(num) {
  num = String(num);
  return num === num.split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true