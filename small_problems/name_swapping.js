/*
Write a function that takes a string argument consisting of
a first name, a space, and a last name, and returns a new string
consisting of the last name, a comma, a space, and the first name.

Understanding the Problem
-input - a string argument
-output - a string argument
-rules/requirements
  -use a function
  -the input has a first name, a space, and a last name, in that order
  -the output has a last name, a commma, a space, 
   and a first name, in that order

Examples:

swapName('Joe Roberts');    // "Roberts, Joe"

Data Structures / Control Structures
-input - string
-output - string
-rules/requirements
  -arrays and their methods for manipulating the argument strings

Algorithm (plain english)
-declare a function named swapName() that takes a string
-declare an variable named stringAsArr
-declare a variable named reversedArr
-split the string into stringAsArr
-reverse stringAsArr into reversedArr
-join reversedArr on ", " and return the result
-call the function

Algorithm (pseudocode)
FUNCTION swapName(arg) {
  SET stringAsArr;
  SET reversedArr;
  stringAsArr = arg.SPLIT(' ');
  reversedArr = stringAsArr.REVERSE();
  return reversedArr.JOIN(", ");
}

PRINT(swapName('Joe Roberts'));    // "Roberts, Joe"
*/

function swapName(arg) {
  let stringAsArr;
  let reversedArr;
  stringAsArr = arg.split(' ');
  reversedArr = stringAsArr.reverse();
  return reversedArr.join(", ");
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
