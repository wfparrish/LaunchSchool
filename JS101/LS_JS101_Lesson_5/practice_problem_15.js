/*

Given the following data structure, write some code to
return an array which contains only the objects where
all the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

Understanding the Problem
-input -an array holding multiple objects with arrays as values
-output - array containing objects
-rules/requirements
  -filter out objects from the input array
    -each object contains an array
      -each array may or may not have an odd element
      -remove any object who's array values include an odd element

Examples / Test Cases

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

filterOutOdd(arr)

// => [{ e: [8], f: [6, 10] }];

Data Structure / Control Structures
-input - array
-output - array
-rules/requirements
  -method calls for arrays in JS
    -filter,for...in?
  -conditional statement

Algorithm (plain english)
-declare a variable named filteredArr
-declare a function filterOutOdd(element)
    -for each property in the element
      -for each position in the array for each property
      -if the value of any subarray elem MOD 2 is equal to 1
        -filter out element from the outer array
      -else continue
  -return the array to filteredArr
-call the function

Algorithm (pseudocode)

FUNCTION filterOutOdd(element) {
  FOR (SET key in element) {
    FOR (SET idx = 0; idx < element[key].LENGTH; idx++) {
      IF (element[key][idx] % 2 === 1) {
        RETURN false;
      }
    }
  }
  RETURN true
}

SET filteredArr = arr.filter(filterOutOdd)
PRINT(filteredArr);
*/


function filterOutOdd(element) {
  for (let key in element) {
    for (let idx = 0; idx < element[key].length; idx++) {
      if (element[key][idx] % 2 === 1) {
        return false;
      }
    }
  }
  return true;
}

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let filteredArr = arr.filter(filterOutOdd);

console.log(filteredArr);

//Launch School's solution:
let filteredArr2 = arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});

console.log(filteredArr2);