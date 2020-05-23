/*
How would you check whether the objects assigned to variables numbers
and table below are arrays?

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

Understanding the Problem
-input - different variables with objects assigned to them
-output - true/false value that answers the question of whether the variable
          holds an array or not
-rules/requirements
  -determine if the variable holds an array
  -assume that the variables hold objects

Examples / Test Cases
checkForArray(numbers);   //true
checkForArray(table);     //false

Data Structures / Control Structures
-input - objects
-output - boolean
-rules/requirements
  -use a function of the Array object in JS
  -use a if statement to determine what gets logged to the console

Algorithm (plain english)
-declare a function named checkForArray() that takes one argument, an object
-check if the argument is an array
  -if true, return true
  -else return false
-call the function and return the value of the function to the console

Algorithm (pseudocode)
FUNCTION checkForArray(obj) {
  IF (Array.ISARRAY(obj) === true) {
    return true;
  } ELSE {
    return false;
  }
}

PRINT(checkForArray(numbers));
PRINT(checkForArray(table));
*/

let numbers = [1, 2, 3, 4];
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };

function checkForArray(obj) {
  if (Array.isArray(obj) === true) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForArray(numbers));
console.log(checkForArray(table));
