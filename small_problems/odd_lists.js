/*
Write a function that returns an Array that contains every other
element of an Array that is passed in as an argument.
The values in the returned list should be those values that are in
the 1st, 3rd, 5th, and so on elements of the argument Array.

Understanding the Problem
-input - an array
-output - an array
-rules/requirements
 -declare a function for this exercise
 -the returned array will have the values in the
  odd index positions of the argument array
-an empty array will return an empty array

Examples / Test Cases
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

Data Structures / Control Structures
-input - array
-output - array
-rules/requirements
 -for loop

Algorithm (plain english)
-Declare an array named oddities with one parameter
-declare an empty array named store
-if the arr array length is equal to one,
  -assign the value of the arr at index one to store
-else for each odd element in the argument array,
 -push the value into the store array
 -return the store array
-call the function

Algorithm (pseudocode)
FUNCTION oddities(arr) {
  SET store = []
  IF (arr.length === 1) {
    store = arr[0]
  } ELSE {
    for(index = 1; index <= arr.length - 1; index += 2) {
      store = arr.push()
    }
  }
  RETURN store
}
*/

function oddities(arr) {
  let store = [];
  if (arr.length === 1) {
    store = arr[0];
  } else {
    for (let index = 0; index <= arr.length - 1; index += 2) {
      store.push(arr[index]);
    }
  }
  return store;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []