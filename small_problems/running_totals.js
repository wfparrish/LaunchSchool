/*
Write a function that takes an array of numbers,
and returns an array with the same number of elements,
with each element's value being the running total from the original array.

Understanding the Problem
-input - an array of elements
-output - an array of elements
-rules/requirements
  -use a function
  -the new array will be the length of the old array
  -each index position will hold a value that is a sum value
  -the sum value will be formed from stepping through the
   original array and summing from the start

Examples
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

Data Structure / Control Structures
-input - array
-output - array
-rules/requirements
  -loop structure

Algorithm (plain english)
-declare a function named runningTotal that takes an array of numbers, arr1
-declare an array called arrOfSums to track the sums produced
-declare a variable named sum that stores the sum of the elements
-for the length of the argument, starting at index = 0
  -increment sum by the value of arr1[index]
  -pass the value of sum to arrOfSums[index]
-return arrOfSums
-call the function

Algorithm (pseudocode)
FUNCTION runningTotal(arr1) {
  SET arrOfSums = [];
  SET sum = 0;
  FOR (SET index = 0; index < arr.length; index++) {
    sum += arr1[index];
    arrOfSums[index] = sum;
  }
  return arrOfSums;
}
*/

function runningTotal(arr1) {
  let arrOfSums = [];
  let sum = 0;
  for (let index = 0; index < arr1.length; index++) {
    sum += arr1[index];
    arrOfSums[index] = sum;
  }
  return arrOfSums;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []