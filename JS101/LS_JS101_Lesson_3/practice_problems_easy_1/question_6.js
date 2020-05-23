/*
We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };

Understanding the Problem
-input - an object with two properties
-output - an object with five properties
-rules/requirements
-add entries to the ages object from the additionalAges object

Examples / Test Cases

addEntries(additionalAges); // output ==> ages = {Herman: 32 ... Spot: 237}

Data Structures / Control Structures
-input - object
-output - object
-rules/requirements
- object (the original object will have additional key/value pairs)

Algorithm (plain english)
-declare a function that takes one parameter, the object to be added
-in the body of the function, declare a variable mergedObj
-use a method of the language to merge the two objects
-assign the output of the merger to mergedObj
-return mergedObj
-call the function

Algorithm (pseudocode)
FUNCTION addEntries(additionalAges) {
  SET mergedObj;
  mergedObj = Object.assign(ages, additionalAges);
  RETURN mergedObj;
}
*/
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

function addEntries(newPeople) {
  let mergedObj = Object.assign(ages, newPeople);
  return mergedObj;
}

console.log(addEntries(additionalAges));
