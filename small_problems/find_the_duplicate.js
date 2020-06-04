/*
Given an unordered array and the information that exactly one value in
the array occurs twice (every other value occurs exactly once),
determine which value occurs twice.

Write a function that will find and return the duplicate value that is
in the array.

Understanding the Problem
-input - an unordered array
-output - the duplicate value
-rules/requirements
-use a function call
-return the value that is duplicate

Examples:

findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73

Data Structures / Control Structures
-input - array
-output - number
-rules/requirements
  -a looping structure for the search
  -a conditional structure to respond to a match or no match

Algorithm (plain english)
-declare a function named findDup that takes an array as an argument
-in the body, sort the argument array
-for each element in the array, compare the element at index + 1
  -if the two are equal, return the element value
-call the function

Algorithm (psuedocode)
FUNCTION findDup(arr) {
  arr.SORT();
  arr.FOREACH((element, index) => {
    IF (element[index] === element[index + 1]) {
      RETURN element;
    }
  });
}

*/

function findDup(arr) {
  arr.sort();
  let duplicate;
  arr.forEach((_, index) => {
    if (arr[index] === arr[index + 1]) {
      duplicate = arr[index];
    }
  });
  return duplicate;
}

console.log(findDup([1, 5, 3, 1]));      // 1
console.log(findDup([
  18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
  7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73