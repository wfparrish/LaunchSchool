/*

Given the following data structure, use a combination
of methods, including filter, to return a new array
identical in structure to the original, but containing
only the numbers that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

Understanding the Problem
-input - an array with subarrays
-output - an array with subarrays with either empty values
          of numbers that are multiples of three
-rules/requirements
  -use methods of JS collections
  -use the filter method of JS
  -return a new array
    -retain the same structure as the original array
    -the subarrays can only contain numbers that are multiples of 3

Examples / Test Cases

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
multiplesOfThree(arr);    // => [[], [3], [9], [15, 18]]

Data Structures / Control Structures
-input - array
-output - array
-rules/requirements
  -a looping structure to traverse the array
  -a conditional structure to check the subarray element's relationship to 3

Algorithm (plain english)
-declare a function named findMultiplesOfThree() that takes an array argArr
-declare an array named newArray
-for each subarray of argArr
  -declare an array named newSubArray
  -loop over the subarray
    -filter out the element(s) where element mod 3 not equal to 0
    -store the results in newSubArray
  -push newSubArray into newArray
-return newArray
-call the function

Algorithm (pseudocode)
FUNCTION findMultiplesOfThree(argArr) {
  SET newArray = [];
  argArr.FOREACH((subArray) => {
    SET newSubArray = [];
    newSubArray = subArray.FILTER(element => element % 3 !== 0);
    newArray.PUSH(newSubArray);
  });
  return newArray;
}

*/

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

function findMultiplesOfThree(argArr) {
  let newArray = [];
  argArr.forEach((subArray) => {
    let newSubArray = [];
    newSubArray = subArray.filter(element => element % 3 === 0);
    newArray.push(newSubArray);
  });
  return newArray;
}

console.log(findMultiplesOfThree(arr));