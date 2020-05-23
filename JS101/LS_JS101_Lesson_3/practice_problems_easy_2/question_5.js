/*
Given an array of numbers [1, 2, 3, 4, 5],
mutate the array by removing the number at index 2,
so that the array becomes [1, 2, 4, 5].

Understanding the Problem
-input - an array of numbers
-output - a mutated array 
-rules/requirements
  -use the given array
  -mutate the array by deleting an element

Examples/Test Cases
shrinkArray([1, 2, 3, 4, 5]);     //[1, 2, 4, 5];

Data Structures / Control Structures
-input - array
-output - array
-rules/requirements
  -use the methods of Array.prototype

Algorithm (plain english)
-declare a function shrinkArray() that takes one argument
-in the body of shrinkArray() splice out the element at index 2
-return the mutated array
-call the function

Algorithm (pseudocode)
FUNCTION shrinkArray(arr) {
  arr.splice(2, 1);
  PRINT arr
} 

*/

function shrinkArray(arr){
  arr.splice(2, 1);
  return arr
}

console.log(shrinkArray([1, 2, 3, 4, 5]));