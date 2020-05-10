// How can you determine whether a given string ends with
// an exclamation mark ( ! )?



/* 

Understanding the Problem
-input - strings with or without exclamation marks
-output - booleans true or false
-rules/requirements
  -must render results to the user in boolean manner


Examples / Test Cases
// let str1 = "Come over here"; //true
// let str2 = "What's up, Doc?" //false

Data Structures / Control Structures
-input - string
-output - boolean
-rules / requirements
  -if statement to return boolean values

Algorithm (plain english)

- pass the string to checkForExclamation() as an argument
- Subroutine to write: checkForExclamation(strToCheck)
  -check if (strToCheck[strToCheck.length - 1] is equal to '!') {
    -if it is we return a true value or
    -else, we return a false value
  }
-call the function



Algorithm (pseudocode)

FUNCTION checkForExclamation(strToCheck) {
  IF (strToCheck[strToCheck.length - 1] === '!') {
    RETURN true;
    ELSE {
      RETURN false;
    }
  }
}


PRINT checkForExclamation("Huey Lewis and The News!");
PRINT checkForExclamation("Huey Lewis and The News?");

*/

function checkForExclamation(strToCheck) {
  if (strToCheck[strToCheck.length - 1] === '!') {
    return true;
  } else {
    return false;
  }
}

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
console.log(checkForExclamation(str1));
console.log(checkForExclamation(str2));

