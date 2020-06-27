/*
Create an object that expresses the frequency with which
each letter occurs in this string:

let statement = "The Flintstones Rock";

Understanding the Problem
-input - a string
-output - an object
-rules/requirements
  -create an object
  -the object will have properties where the keys are
   the letters of the input
  -the object will have values which are the count of the
   occurence of the keys in the input string

Examples
let statement = "The Flintstones Rock";
The output will look something like the following:

{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }

Data Structures / Control Structures
-input - string
-output - object
-rules/requirements
  -a looping structure(implicit)

Algorithm (plain english)
-declare a function named countStrings() that takes a string named strArg
-declare an object named strObj
-declare a variable named strArr
-convert strArg into an array and store the array in strArr
-for each element in the strArr:
  -if the current position is a white space, continue
  -check to see if the strObj has a property
   string equal to the value of the current index position
    -if true, increment property value by 1
    -if false, assign 1 to the property value
-return strObj
-call the function

Algorithm (pseudocode)
FUNCTION countStrings(strArg) {
  SET strObj = {};
  SET strArr;
  strArr = strArg.SPLIT('');
  strArr.FOREACH((element, idx) => {
    IF(strArr[idx] === ' ') {
      return;
    } ELSE IF (strObj.hasOwnProperty() === strArr[idx]) {
      strObj[strArr[idx]] += 1;
    } ELSE {
      strObj[strArr[idx]] = 1;
    }
  })
  RETURN strObj;
}

PRINT(countStrings(statement));

*/

let statement = "The Flintstones Rock";

function countStrings(strArg) {
  let strObj = {};
  let strArr;
  strArr = strArg.split('');
  strArr.forEach((_, idx) => {
    if (strArr[idx] === ' ') {
      return;
    } else if (strObj.hasOwnProperty(strArr[idx])) {
      strObj[strArr[idx]] += 1;
    } else {
      strObj[strArr[idx]] = 1;
    }
  });
  return strObj;
}

console.log(countStrings(statement));