/*
Write a function that takes a positive integer as an argument,
and returns that number with its digits reversed.

Understanding the Problem
-input - a number
-output - the input number reversed
-rules/requirements
  -use a function
  -the input must be a positive number
  -if a number has leading zeroes, drop the leading zeroes

Examples:

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21
reverseNumber(1);        // 1

Data Structures / Control Structures
-input - number
-output - number

Algorithm (plain english)
-declare a function named reverseNumber that takes one argument, a number
-declare a variable named numberAsStr
-declare a variable named numberAsArr
-declare a variable named numberAsNum
-declare a variable named reversedArr
-convert the number argument into a string and assign it to numberAsStr
-split numberAsStr into an array
 and assign the value to numberAsArr
-reverse numberAsArr using the method of the array
 and assign value to reversedArr
-join reversedArr into a string and assign to numberAsStr
-parse numberAsStr into a number and assign the value to numberAsNum
-return numberAsNum
-call the function

Algorithm (psuedocode)
FUNCTION reverseNumber(arg) {
SET numberAsStr;
SET numberAsArr;
SET numberAsNum;
SET reversedArr;
numberAsStr = String(arg);
numberAsArr = numberAsStr.SPLIT('');
reversedArr = numberAsArr.REVERSE();
numberAsStr = reversedArr.JOIN('');
numberAsNum = PARSE_INT(numberAsStr, 10);
RETURN numberAsNum;
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21
reverseNumber(1);        // 1

*/

function reverseNumber(arg) {
  let numberAsStr;
  let numberAsArr;
  let numberAsNum;
  let reversedArr;
  numberAsStr = String(arg);
  numberAsArr = numberAsStr.split('');
  reversedArr = numberAsArr.reverse();
  numberAsStr = reversedArr.join('');
  numberAsNum = parseInt(numberAsStr, 10);
  return numberAsNum;
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1