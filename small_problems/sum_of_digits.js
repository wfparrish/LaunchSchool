/*
Write a function that takes one argument, a positive integer,
and returns the sum of its digits.

Do this using list processing techniques.

Understanding the Problem
-input - a postive integer
-output - a positive integer that is the sum of the digits in the number
-rules/requirements
-use a function
-sum the numbers

Examples:

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

Data Structures / Control Structures
-input - number
-output - number
-rules requirements
  -use the methods of an array to sum the values

Algorithm (plain english)
-declare a function named sum() that takes a number num
-declare a variable named argValStr
-declare a variable named argValArr
-declare a variable named numSum
-cast num into a string argValStr;
-split argValStr into argValArr
-loop around argValArr for length times. With each loop:
  -cast the index position element into a number
  -increment numSum by the value of the number
-return numSum
-call the function

Algorithm (pseudocode)
FUNCTION sum(num) {
  SET argValStr;
  SET argValArr = [];
  SET numSum = 0;
  argValStr = STRING(num);
  argValArr = argValStr.SPLIT('');
  FOR (SET idx = 0; idx <= argValArr.LENGTH - 1; idx++) {
    numSum += NUMBER(argValArr[idx]);
  }
  return numSum;
}

PRINT(sum(23));

*/

function sum(num) {
  let argValStr;
  let argValArr = [];
  let numSum = 0;
  argValStr = String(num);
  argValArr = argValStr.split('');
  for (let idx = 0; idx <= argValArr.length - 1; idx++) {
    numSum += Number(argValArr[idx]);
  }
  return numSum;
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));