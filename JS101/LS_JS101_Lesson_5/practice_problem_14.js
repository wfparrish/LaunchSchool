/*

Given the following data structure write some code to
return an array containing the colors of the fruits
and the sizes of the vegetables.

The sizes should be uppercase, and the colors should be
capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
The return value should look like this:

[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

Understanding the Problem
-input - an object with properties that reference objects
-output - an array with subarrays and releted string elements
-rules/requirements
  -return the colors of the fruit
  -return the sizes of the vegetables
  -the colors will be a subarray
  -the sizes will be a string
  -the colors subarray's elements should have first letter capitalized
  -the sizes strings should have all letters capitalized

Examples / Test Cases
sortFruitAndVegetables(obj);
// => [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

Data Structures / Control Structures
-input - object
-output - array
-rules/requirements
  -a looping structure to iterate over the object
  -a conditional structure to determine fruit versus vegetables

Algorithm (plain english)
-declare a function named sortFruitAndVegetables(argObj)
-declare an array named outcome
-for each key element in argObj
  -if the element has an object that holds a type value of 'fruit'
    -declare a new array named subArray
    -make the first letter of each element in colors value uppercase
    -push the value of colors property into subArray
    -push subArray into outcome
  -else
    -make the letters of each element in size uppercase
    -push the value of size property into outcome
-return outcome
-call the function

Algorithm (pseudocode)
FUNCTION sortFruitAndVegetables(argObj) {
  SET outcome = [];
  FOR(SET key IN argObj) {
    IF(argObj[key]['type'] === 'fruit') {
      SET subArray = [];
      argObj[key]['colors'].FOREACH((element) => {
        outcome.PUSH(element[0].TOUPPERCASE()+ element.SLICE(1));
      });
      outcome.PUSH(subArray);
    } ELSE {
      outcome.PUSH(argObj[key]['size'].TOUPPERCASE());
    }
  }
  RETURN outcome;
}

PRINT(sortFruitAndVegetables(obj));
*/

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

function sortFruitAndVegetables(argObj) {
  let outcome = [];
  for (let key in argObj) {
    if (argObj[key]['type'] === 'fruit') {
      let subArray = [];
      argObj[key]['colors'].forEach((element) => {
        subArray.push(element[0].toUpperCase() + element.slice(1));
      });
      outcome.push(subArray);
    } else {
      outcome.push(argObj[key]['size'].toUpperCase());
    }
  }
  return outcome;
}

console.log(sortFruitAndVegetables(obj));

