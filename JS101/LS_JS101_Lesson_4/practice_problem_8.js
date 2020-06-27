/*
Take a look at the following array.

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
Write a program that uses this array to create an object where
the names are the keys and the values are the positions in the array:

Understanding the Problem
-input - an array of names
-output - an object where the keys are the names and the values
          are their former index positions in the input array
-rules/requirements
  -use the input array
  -create an object
    -the keys will be the values stored in the array
    -the values will be the keys' former index positions

Examples
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"]
createObject(flintstones)
// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

Data Structures / Control Structures
-input - array
-output - object
-rules/requirements
  -a looping structure

Algorithm (plain english)
-declare a function named createObject that takes
 an array named list as argument
-declare an object named names
-for each element in list:
  -assign a property to names from the array
  -assign a value to the newly added property that
   equals the index of the current key's value
   from the list array
-return the names object
-call the function

Algorithm (pseudocode)
FUNCTION createObject(list) {
  SET names = {};
  FOR (SET idx = 0; idx <= list.length; idx++) {
    names[list[idx]] = idx;
  }
  return names;
}

PRINT(createObject(flintstones));

*/
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

function createObject(list) {
  let names = {};
  for (let idx = 0; idx <= list.length - 1; idx++) {
    names[list[idx]] = idx;
  }
  return names;
}

console.log(createObject(flintstones));

