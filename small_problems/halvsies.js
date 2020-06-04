/*
Write a function that takes an array as an argument,
and returns an array that contains two elements,
each of which is an array.

Put the first half of the original array elements in the
first element of the return value, and put the second half in the
second element. If the original array contains an odd number of
elements, place the middle element in the first half array.


Understanding the Problem
-input - an array as an argument
-output - an array that holds two arrays
-rules/requirements
-determine if the input array is even or odd
-if it is odd, first nested array will be larger than the second
-the middle element of the input array goes in the first nested array
-if it is even, the two arrays will be equal size
-if the input array is empty, the output will have two empty arrays

Examples / Test Cases

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

Data Structures / Control Structures
-input - array
-output - array
-rules/requirements
  -we will use array methods
  -we will use an if statement for even/odd evaluation

Algorithm (plain english)
-declare a method named halvsies that takes an array as an argument
-declare an array named outerArr that will contain two arrays
-determine the length of the input array
  -if the input array is even
    -split the array into two arrays of equal length and place them in outerArr
  -if the input array is odd
    -split the array into two arrays
      -the first array will be one element larger than the second
      -place both arrays in the outerArr
-return the outerArr
-call the function

Algorithm (psuedocode)
FUNCTION halvsies(arr) {
  SET outerArr = [];
  IF (arr.LENGTH % 2 === 0) {
    outerArr.PUSH(arr.SPLICE(0, arr.LENGTH / 2));
    outerArr.PUSH(arr);
  } ELSE {
    outerArr.PUSH(arr.SPLICE(0, (arr.LENGTH / 2) + 1));
    outerArr.PUSH(arr);
  }
  RETURN outerArr;
}

halvsies(arg);

*/

function halvsies(arr) {
  let outerArr = [];
  if (arr.length % 2 === 0) {
    outerArr.push(arr.splice(0, arr.length / 2));
    outerArr.push(arr);
  } else {
    outerArr.push(arr.splice(0, (arr.length / 2) + 1));
    outerArr.push(arr);
  }
  return outerArr;
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));