/*
Write a function that takes two array arguments, each containing a
list of numbers, and returns a new array that contains the product of
each pair of numbers from the arguments that have the same index.
You may assume that the arguments contain the same number of elements.


Understanding the Problem
-input - two lists of numbers as array arguments
-output
- a new array
- each pair of numbers:
- is made from one argument from each array
- have the same index
rules/requirements
- use a function
- create a new array
- contains the product of each pair of numbers
- assume that the arrays are the same length

Examples / Test Cases
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

Data Structures / Control Structures
input - array
output - array
rules/requirements
  -use a looping structure to populate the new array

Algorithm (plain english)
-declare a function called multiplyList(), takes two arrays
-declare an array named result
-during a loop as many times as the length of an argument:
  -multiply array1 and array2 with matching indexes
  -put the value of the multiplication in product
  -put the value of the product in result array
-return the result array
-call the function

Algorithm (pseudocode)
FUNCTION multiplyList(arr1, arr2) {
  SET result = [];
  arr1.forEach((_, index) => {
    SET product = 0;
    product = (arr1[index] * arr2[index]);
    result[index] = product;
  })
}

PRINT(multiplyList(arg1, arg2));

*/

function multiplyList(arr1, arr2) {
  let result = [];
  arr1.forEach((_, index) => {
    let product = 0;
    product = (arr1[index] * arr2[index]);
    result[index] = product;
  });
  return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));
console.log(multiplyList([33, 54, 72, 34, 6780], [99, 102, 115, 678, 9876]));