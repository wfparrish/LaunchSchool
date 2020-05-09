/*
The parseInt() method converts a string of numeric characters
(including an optional plus or minus sign) to an integer.
The method takes 2 arguments where the first argument is the string
we want to convert and the second argument should always be 10 for
our purposes. parseInt() and the Number() method behave similarly.
In this exercise, you will create a function that does the same thing.

Write a function that takes a String of digits, and returns the
appropriate number as an integer. You may not use any of the methods
mentioned above.

For now, do not worry about leading + or - signs, nor should you worry
about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in
JavaScript, such as String() and Number(). Your function should do this
the old-fashioned way and calculate the result by analyzing the
characters in the string.

Understanding the Problem
-input - a string of digits
-output
  -the argument string as a Number in JavaScript
  -a boolean value for the log statement
-rules/requirements
  -cannot use String(), parseInt(), or Number() methods
  -ignore leading + or - signs
  -ignore invalid characters
  -assume all characters will be numeric

Examples / Test Cases
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

Data Structures / Control Structures
-array for the decimal numbers
-array for the decimal strings
-if statement
-for loop

Algorithm (plain english)
-declare a function named stringToInteger with one parameter
 -declare an array (arr1) with the values 0 to 9 in seperate index positions
 -declare a variable named sum to hold our final number and instantiate to 0
 -declare a variable named placeholder and instantiate it to 1;
 -declare a variable named digitValue to hold multiples
  of 1's, 10's, 100's, etc... and instantiate it to 0
 -declare a variable named val to hold the popped string character
 -split the argument into an array called arr2
 -declare a variable named length to hold the original length of the argument
 -for each element of arr2 pop the element into val
 -starting with the first element of arr1, moving to the last
  -for each element of arr2 we will perform loose equality comparison
  with arr1 elements
     -compare the popped val to each element of arr2 using loose equality
     -when we find a match (truthy)
      -assign digitValue equal to (arr1[matching_index] * placeholder)
      -multiply placeholder by 10
      -sum = += digitValue
 -return the sum
 -call the function

Algorithm (pseudocode)

FUNCTION stringToInteger(str) {
SET arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
SET sum = 0;
SET placeholder = 1;
SET digitValue = 0;
SET val = '';
SET arr2 = str.split('');
SET length = arr2.length;
  FOR (i = length; i > 0; i--) {
    val = arr2.pop();
    FOR (j = 0; j < arr1.length; j++) {}
      if(arr1[i] == val) {
        digitValue = arr1[i] * placeholder;
        placeholder * 10;
        sum = sum + digitValue;
      }
    }
  }
  return sum
}
*/

function stringToInteger(str) {
  let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum = 0;
  let placeholder = 1;
  let digitValue = 0;
  let val = '';
  let arr2 = str.split('');
  let length = arr2.length;
  for (let i = length; i > 0; i--) {
    val = arr2.pop();
    for (let j = 0; j < arr1.length; j++ ) {
      if (arr1[j] == val) {
        digitValue = arr1[j] * placeholder;
        placeholder *= 10;
        sum += digitValue;
      }
    }
  }
  return sum;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("070") === 70); // logs true
console.log(stringToInteger("070") === 070); // logs false
console.log(stringToInteger("4567898765") === 4567898765); // logs true
console.log(stringToInteger("4567898765") === 4567898764); // logs false