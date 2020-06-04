/*
Write a function that takes an array of integers as input,
multiplies all of the integers together, divides the result by the
number of entries in the array, and returns the result as a string with
the value rounded to three decimal places.


Understanding the Problem
-input - an array of integers
-output - a string with the value rounded to three decimal places
-rules/requirements
  -use a function
  -multiply all the integers together
  -divide by the number of entries
  -output must have three decimal places
  -output must be a string


Examples / Test Cases
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

Data Structures / Control Structures
-input - array
-output - string
-rules/requirements
  -methods of the array class will be used

Algorithm (plain english)
-declare a function named multiplicativeAverage() that takes an array
-declare a variable named accumulatedValue
-for each element in the array, multiply by the accumulated value, starting
 at the zeroth index times the first
-return the result to accumulatedValue
-divide the accumulated value by the length of the argument array
-use a library method to display a fixed amount of decimal places in the
 accumulated value
-convert the accumulated value to a string
-return the accumulated value as a string
-call the function

Algorithm (pseudocode)
FUNCTION multiplicativeAverage(arr) {
  SET accumulatedValue;
  accumulatedValue = arr.REDUCEARRAY((val1, val2) => {val1 * val2});
  accumulatedValue = String((accumulatedValue / arr.length).toFixed(3));
  RETURN accumulatedValue;
}

PRINT(multiplicativeAverage(arg));
*/

function multiplicativeAverage(arr) {
  let accumulatedValue;
  accumulatedValue = arr.reduce((val1, val2) => {
    return val1 * val2;
  });
  accumulatedValue = String((accumulatedValue / arr.length).toFixed(3));
  return accumulatedValue;
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"