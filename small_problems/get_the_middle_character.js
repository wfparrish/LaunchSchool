/*
Write a function that takes a non-empty string argument,
and returns the middle character(s) of the string.
If the string has an odd length, you should return
exactly one character. If the string has an even length,
you should return exactly two characters.

Understanding the Problem
-input - a non-empty string
-output - the middle character(s) of the input string
-rules/requirements
  -use a function
  -return the middle character in the input string
  -if the string is odd length, return one character
  -if the string is even length, return two characters

Examples:

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

Data Structures / Control Structures
-input - string
-output - string
-rules/requirements
  -conditional statement to determine output

Algorithm (plain english)
-declare a function named centerOf() that takes a string as argument
-declare an array named output
-declare a variable named stringAsArr
-split the string into stringAsArr
-if the length of the stringAsArr is even
  -push the index positions equal to length/2 -1 and length/2 into output
-if the length of the stringAsArr is odd
  -push the index position equal to length/2 rounded down into output
-join output and return
-call the function

Algorithn (pseudocode)
FUNCTION centerOf(arg) {
  SET output = [];
  SET stringAsArr;
  stringAsArr = arg.split('');
  IF (stringAsArr.length % 2 === 0) {
    output.PUSH(stringAsArr[(stringAsArr.LENGTH / 2) - 1],
                stringAsArr[stringAsArr.LENGTH / 2]);
  } ELSE {
    output.PUSH(stringAsArr[Math.floor(stringAsArr.LENGTH / 2)]);
  }
  RETURN output.join('');
}

PRINT(centerOf('I Love JavaScript')); // "a"
PRINT(centerOf('Launch School'));     // " "
PRINT(centerOf('Launch'));            // "un"
PRINT(centerOf('Launchschool'));      // "hs"
PRINT(centerOf('x'));                 // "x"
*/

function centerOf(arg) {
  let output = [];
  let stringAsArr;
  stringAsArr = arg.split('');
  if (stringAsArr.length % 2 === 0) {
    output.push(stringAsArr[(stringAsArr.length / 2) - 1],
      stringAsArr[stringAsArr.length / 2]);
  } else {
    output.push(stringAsArr[Math.floor(stringAsArr.length / 2)]);
  }
  return output.join('');
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"