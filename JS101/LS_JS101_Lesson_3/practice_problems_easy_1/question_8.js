/*
How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

Understanding the Problem
-input - a name to be added to an array
-output - the array with the new name added
-rules/requirements
-add a name to an array
-use a declarative approach

Examples/Test Cases
addName(flintstones, 'Dino'); //  ["Fred", ... , "Dino"];

Data Structures / Control Structures
-input - array, string
-output - array
-rules/requirements
-using array's built in method

Algorithm (plain english)
-declare a function addName that takes two parameters
  -in the body of the function, push the new name into the array argument
  -return the array 
-call the function

Algorithm (pseudocode)
FUNCTION addName(arr, name) {
  arr.PUSH(name);
  PRINT arr;
} 

*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

function addName (arr, name) {
  arr.push(name);
  return arr;
}

console.log(addName(flintstones, 'Dino'));

