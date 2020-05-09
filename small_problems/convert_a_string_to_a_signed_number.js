
/*
In the previous exercise, you developed a function that converts simple
numeric strings to integers.

In this exercise, you're going to extend that function to work with
signed numbers.

Write a function that takes a string of digits, and returns the
appropriate number as an integer.

The string may have a leading + or - sign:
-if the first character is a +, your function should return a
positive number.
-if it is a -, your function should return
a negative number.

If no sign is given, you should return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in
JavaScript, such as parseInt() and Number().

You may, however, use the stringToInteger() function from
the previous lesson.

Understanding the Problem
-input - a string of digits
-output - a positive or negative number
        - a boolean value for the log statement

-rules/requirements
  -cannot use String(), parseInt(), or Number() methods
  -ignore invalid characters
  -assume all characters will be numeric
  -the string may have:
    -a leading + or - sign
    -no sign
  -if the first character is +, return a positive number
  -if the first character is -, return a negative number
  -if no sign is given, return a positive number

Examples / Test Cases  
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

Data Structures / Control Structures
-array for the decimal numbers
-array for the decimal strings
-if statement
-for loop

Algorithm (plain english)
-declare a function named stringToSignedInteger with one parameter
 -declare an array (arr1) with the values 0 to 9 in seperate index positions
 -declare a variable named sum to hold our final number and instantiate to 0
 -declare a variable named placeholder and instantiate it to 1;
 -declare a variable named digitValue to hold multiples
  of 1's, 10's, 100's, etc... and instantiate it to 0
 -declare a variable named val to hold the popped string character
 -declare a variable named signValue and instantiate it to ''
 -split the argument into an array called arr2
 -check the value of the first index of arr2
    -if the value is not a number
     -shift the array's first index
     -store the returned value in signValue
 -declare a variable named length to hold the length of the argument
 -for each element of arr2 pop the element into val
 -starting with the first element of arr1, moving to the last
  -for each element of arr2 we will perform loose equality comparison
   with arr1 elements
     -compare the popped val to each element of arr2 using loose equality
     -when we find a match (truthy)
      -assign digitValue equal to (arr1[matching_index] * placeholder)
      -multiply placeholder by 10
      -sum = += digitValue
 -check the value of signValue
    -if signValue is equal to '-', multiply sum by -1
 -return the sum
 -call the function

Algorithm (pseudocode)

FUNCTION stringToSignedInteger(str) {
SET arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
SET sum = 0;
SET placeholder = 1;
SET digitValue = 0;
SET val = '';
SET arr2 = str.split('');
SET signValue = '';
IF (typeOf arr2[0] !== 'number') {
  signValue = arr2.shift();
}
SET length = arr2.length;
  FOR (i = length; i > 0; i--) {
    val = arr2.pop();
    FOR (j = 0; j < arr1.length; j++) {}
      IF(arr1[i] == val) {
        digitValue = arr1[i] * placeholder;
        placeholder * 10;
        sum = sum + digitValue;
      }
    }
  }
  IF (signValue === '-') {
    sum *= -1
  }
  return sum
}

*/

function stringToSignedInteger(str) {
  let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum = 0;
  let placeholder = 1;
  let digitValue = 0;
  let val = '';
  let arr2 = str.split('');
  let signValue = '';
  let length = arr2.length;
  if (isNaN(arr2[0]) === true) {
    signValue = arr2.shift();
  }
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
  if (signValue === '-') {
    sum *= -1;
  }
  return sum;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true