/*

Given the following data structure, use the map
method to return a new array identical in structure to
the original but, with each the number incremented by 1.

Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

Understanding the Problem
-input - array with object elements
-output - an array with object elements
          whose values have been incremented
-rules/requirements
  -use the map method to produce the output
  -increment each object's key value by 1
  -do not mutate the original array

Examples / Test Cases
incrementedValues(arr);
=> [{ a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 }]

Data Structures / Control Structures
-input - array
-output - array
-rules/requirements
  -map method of the array (implicit looping)
  -for...in loop to access the key/value pairs in nested objects

Algorithm (plain english)
-declare a method named incrementValues that takes an array argument argArr
-declare an array named incrementedArr
-call map on the array
  -for the callback passed to map, pass each element as an argument
    -for key in element
      -increment the key value by 1
    -return the element
  -return the result to incrementedArr
-return incrementedArr
-call the function

Algorithm (pseudocode)

FUNCTION incrementedValues(argArr) {
  SET incrementedArr
  incrementedArr = argArr.MAP((element) => {
    FOR (SET key IN element) {
      element.key += 1;
    }
    RETURN element;
  });
  RETURN incrementedArr;
}

PRINT incrementedValues(arr)

*/

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];


function incrementedValues(argArr) {
  let incrementedArr;
  incrementedArr = argArr.map((element) => {
    for (let key in element) {
      element[key] += 1;
    }
    return element;
  });
  return incrementedArr;
}

console.log(incrementedValues(arr));