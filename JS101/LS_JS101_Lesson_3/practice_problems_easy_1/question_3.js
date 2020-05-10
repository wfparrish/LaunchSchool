/*
Determine whether the following object of people
and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

Understanding the Problem
-input - the program will take 'Spot' as a key to search for
-output - the program will determine if Spot is in the object
-rules/requirements
-return true or false status of 'Spot' as key

Examples/Test Cases
findkey('Spot');      //false
findkey('Herman');    //true

Data Structures / Control Structures
-if statement for true false value return

Algorithm (plain english)
-declare a function findKey(keyName)
-for each property of the ages object:
  -if the properties' name (the string left of the colon)
   is equal to keyName
    -return true to the console
    -else
    -return false to the console
-call the function

Algorithm (pseudocode)

FUNCTION findKey(keyName) {
  FOR (SET key in ages) {
    IF(key === keyName) {
      PRINT true;
    } ELSE {
      PRINT false;
    }
  }
}

findKey(key);

*/

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

function findKey(keyName) {
  for (let key in ages) {
    if (key === keyName) {
      return true;
    }
  }
  return false;
}

console.log(findKey('Spot'));      //false
console.log(findKey('Herman'));    //true

//Launch School solution:
console.log(ages.hasOwnProperty('Spot'));      //false
console.log(ages.hasOwnProperty('Herman'));    //true
