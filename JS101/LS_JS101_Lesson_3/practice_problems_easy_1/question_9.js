/*
In the previous problem, our first answer added 'Dino' to the array like this:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push("Dino");
How can we add multiple items to our array? ('Dino' and 'Hoppy')

Understanding the Problem
-input - multiple names to be added to an array
-output - the array with the new name added
-rules/requirements
-add multiple names to an array
-use a declarative approach

Examples/Test Cases
addName(flintstones, 'Dino'); //  ["Fred", ... , "Dino"];

Data Structures / Control Structures
-input - array, string
-output - array
-rules/requirements
-using array's built in method

Algorithm (plain english)
-declare a function addName that takes one parameter, arr
-in the body of the function, push the new names into the array argument
-return the array 
-call the function

Algorithm (pseudocode)
FUNCTION addName(arr) {
  PRINT arr.PUSH('name1', 'name2');
} 

*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

function addName(arr) {
  arr.push('Dino', 'Hoppy');
  return arr;
}

console.log(addName(flintstones));