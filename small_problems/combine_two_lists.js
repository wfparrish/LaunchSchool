/*
Write a function that combines two arrays passed as arguments,
and returns a new array that contains all elements from both array
arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty,
and that they have the same number of elements.


Understanding the Problem
-input - two arrays passed as arguments
-output - a new array that contains all elements from the arguments, alternating
-rules/requirements
-use a function in the solution
-return a new array
-weave the arrays together, each element after the other in the new array
-assume the arrays have the same number of elements
-assume the arrays are not empty

Examples / Test Cases
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

Data Structures / Control Structures
-input - array
-output - array
-rules/requirements
  -looping structure will be used to build the new array

Algorithm (plain english)
-declare a function named interleave that takes two arrays as arguments
-declare an array called newArray
-declare a variable named loopLength and assign it the value of the
 length of one of the arguments
-for the length - 1 of one of the argument arrays, loop
  -each pass of the loop add a new element from each argument to newArray
-return newArray
-call the function

Algorithm (pseudocode)
FUNCTION interleave(arr1, arr2) {
  SET loopLength = arr1.LENGTH;
  SET newArray = [];
  FOR (SET idx = 0; idx = loopLength; idx++) {
    newArray.PUSH(arr1[idx]);
    newArray.PUSH(arr2[idx]);
  }
  RETURN newArray
}

PRINT(interleave(arg1, arg2));

*/

function interleave(arr1, arr2) {
  let loopLength = arr1.length - 1;
  let newArray = [];
  for (let idx = 0; idx <= loopLength; idx++) {
    newArray.push(arr1[idx]);
    newArray.push(arr2[idx]);
  }
  return newArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
