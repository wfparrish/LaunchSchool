/*

Given the following data structure, write some code that
returns an object where the key is the first item in
each subarray, and the value is the second.

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];


Understanding the Problem
-input - an array with nested arrays that contain strings and objects
-output - an object with keys and values pulled from
 the input array elements
-rules/requirements
  -create an object
  -each key in the object comes from the first item in each subarray
   in the input array
  -each value in the object comes from the second item in each subarray
   in the input array

Examples / Test Cases
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

expected return value of function call
// => { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

Data Structures / Control Structures
-input - array
-output - object
-rules/requirements
  -a looping structure
  -methods of the array in JS

Algorithm (plain english)
-declare a function named objCreator(arrArg)
-declare an object named compositeObj
-for each subarray of arrArg
  -add a property to compositeObj using the subarray first position
  -add a value for the new property using the subarray second position
-return compositeObj
-call the function

Algorithm (pseudocode)
FUNCTION objCreator(arrArg) {
  SET compositeObj = {};
  arrArg.FOREACH((subArray, idx) => {
    compositeObj[subArray[idx]] = subArray[idx + 1];
  });
  RETURN compositeObj;
}

PRINT(compositeObj);

*/

let arr = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];

function objCreator(arrArg) {
  let compositeObj = {};
  arrArg.forEach((subArray) => {
    compositeObj[subArray[0]] = subArray[1];
  });
  return compositeObj;
}

console.log(objCreator(arr));