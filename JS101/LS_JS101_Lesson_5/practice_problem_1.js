/*
How would you order the following array of number strings
by descending numeric value (largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];

Understanding the Problem
-input - an array of number strings
-output - an array of number strings
-rules/requirements
  -sort the array of number strings
  -the sort will be descending order

Example

sortedArray(arr); // => ['11', '10', '9', '8', '7']

Data Structures / Control Structures
-input - array
-output - array
-rules/requirements
  -a looping structure

Algorithm (plain english)
-declare a function named sortedArray() that takes
 an array argument (arrArg)
-for each element of the array, convert the value to a number
-sort arrArg in descending order using .sort() of JS
-for each element of the array, convert the value to a string
-return the array
-call the function

Algorithm (pseudocode)
FUNCTION sortedArray(arrArg) {
  arrArg.forEach((element) => Number(element));
  arrArg.sort((a, b) => b - a);
  arrArg.forEach((element) => String(element));
  return arrArg;
}

*/

let arr = ['10', '11', '9', '7', '8'];

function sortedArray(arrArg) {
  arrArg.forEach((element) => Number(element));
  arrArg.sort((a, b) => b - a);
  arrArg.forEach((element) => String(element));
  return arrArg;
}

console.log(sortedArray(arr));