/*Write a function that takes a string argument, and returns
true if all of the alphabetic characters inside the string are uppercase;
false otherwise. Ignore characters that are not alphabetic.

Understanding the Problem
-input - a string argument
-output - a boolean value
-rules/requirements
  -must use a function
  -check if all the characters in the argument are uppercase
    -if true, return true
    -if false, return false
  -ignore anything that is not a letter

Example
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

Data Structures/Control Structures
-input - string
-output - boolean
-rules/requirements
  -a loop structure for checking the string against uppercase letters
  -an array - for holding the alphabet in uppercase

Algorithm (plain english)
-declare a function named isUppercase() that takes a parameter, myStr,
 of arbitrary length
-remove any non-word characters or white spaces from myStr
-declare a variable named alphaUppercase;
  instantiate to 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
-declare a variable named arrAlpha; instantiate to [];
-declare a variable named myStrAsArr; instantiate to [];
-split alphaUppercase into arrAlpha
-split myStr into myStrAsArr
-create a helper function that checks if index position values from myStrAsArr
 are included in the array arrAlpha:
  -for each of the index positions of myStrAsArr:
    -check if the value is included in arrAlpha
      -if the value is included, go to the next position
      -if the value is not included, return false
    -continue until all the index positions of myStrAsArr have been checked
-return true

Algorithm (pseudocode)
FUNCTION isUppercase(myStr) {
  myStr = myStr.REPLACE(/[^a-zA-Z]/g, '');
  SET alphaUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  SET arrAlpha = [];
  SET myStrAsArr = [];
  arrAlpha = alphaUppercase.split('');
  myStrAsArr = myStr.split('');
  RETURN myStrAsArr.every(isInThere)
}

SET isInThere = (currentValue) => {
  arrAlpha.includes(currentValue);
}
*/

let alphaUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let arrAlpha = [];
let myStrAsArr = [];

const isInThere = (currVal) => {
  console.log(currVal)
  return arrAlpha.includes(currVal);
};

function isUppercase(myStr) {
  myStr = myStr.replace(/[^a-zA-Z]/g, '');
  arrAlpha = alphaUppercase.split('');
  myStrAsArr = myStr.split('');
  //Here, JS doesn't return a value, it returns the
  //running of a method(which itself calls a function!)! Pretty sweet!
  return myStrAsArr.every(isInThere);
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
