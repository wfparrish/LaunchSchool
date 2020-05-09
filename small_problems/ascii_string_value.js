/* Write a function that determines and returns the ASCII string
value of a string passed in as an argument.

The ASCII string value is the sum of the ASCII values of every character
in the string. (You may use String.prototype.charCodeAt() to determine
the ASCII value of a character.)

Understanding the Problem
-input - string of characters
-output - a sum of numbers
-rules/requirements
  -must use a function
  -use String.prototype.charCodeAt() for ASCII value of a character

Examples/Test Cases
asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0

Data Structures / Control Structures
-input - string
-output - number
-rules/requirements
  -for loop

Algorithm(plain English)
//Given a function named asciiValue() that takes a string as an argument
-pass the string to the method
-declare a sum variable to hold the sum of the values of the characters
-for each character of the string
  -determined the char code value at each index position
  -increment the sum variable by the char code value
-return the sum variable value
-call the asciiValue() function

Algorithm(psuedocode)

FUNCTION asciiValue(str) {
  SET sum;
  FOR (index = 0; index < str.length; index++) {
    sum += String.char_code(index)
  }
  return sum
}

asciiValue('myString')

*/

function asciiValue(str) {
  let sum = 0;
  for (let index = 0; index < str.length; index++) {
    sum += str.charCodeAt(index);
  }
  return sum;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0


