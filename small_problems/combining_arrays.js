/*
Write a function that takes two arrays as arguments, and returns
an array containing the union of the values from the two.
There should be no duplication of values in the returned array,
even if there are duplicates in the original arrays.
You may assume that both arguments will always be arrays.


Understanding the Problem
-input - two arrays
-output - one array with the union of the values from the input arrays
-rules/requirements
-no duplication of values in the output array
-this includes duplicate values in array A or B
-assume that both arguments will always be arrays

Examples / Test Cases

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

Data Structures / Control Structures
-input - array
-output - array
-rules / requirements
  -array methods will be used to manipulate the data
  -a looping structure will be used to check the data for duplicates
  -an if statement will be used to provide condition based outcomes for
   any duplicates found or not found

Algorithm (plain english)
-given a function named union that takes two arrays as arguments
-declare a temp array to hold our combined array
-combine the two arrays and store the result in temp array
-starting at the first position in the array
  -check each index in the array after the first position for a duplicate
   value to the index in question
  -if a duplicate is found, remove the duplicate
  -otherwise, go to the end of the array
-increment to the next position and repeat the search
-repeat the search process, removing any duplicates found until we
 arrive at the last index
-end the search
-return the output
-call the function

Algorithm (pseudocode)
FUNCTION union(arr1, arr2) {
  SET temp = [];
  arr1.CONCAT(arr2);
  FOR (SET idxI = 0; idxI <= temp.LENGTH - 2; idxI++) {
    FOR (SET idxJ = 1; idxJ <= temp.LENGTH - 1; idxJ++) {
      IF (temp[idxI] === temp[idxJ]) {
        temp.SPLICE(temp[idxJ], 1);
      }
    }
  }
  return temp;
}

union(arg1, arg2);

*/

function union(arr1, arr2) {
  let temp = [];
  temp = arr1.concat(arr2);
  for (let idxI = 0; idxI <= temp.length - 2; idxI++) {
    for (let idxJ = 1; idxJ <= temp.length - 1; idxJ++) {
      if (temp[idxI] === temp[idxJ]) {
        temp.splice(temp[idxJ], 1);
      }
    }
  }
  return temp;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
