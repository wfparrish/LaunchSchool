/*
Write a function that takes a string as argument,
and returns true if all parentheses in the string are
properly balanced, false otherwise.

To be properly balanced, parentheses must occur
in matching '(' and ')' pairs.

Understanding the Problem
-input - a string
-output - a boolean value
-rules/requirements
  -use a function
  -take a string as an argument
  -determine if the string's parenthesis are balanced
    -balanced means the parenthesis all have a mate
    -all balanced pairs start with a (
    -all balanced pairs end with a )
  -return true if string parenthesis are balanced
  -return false if string parenthesis are not balanced

Examples:

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
The tests above should log true.

Data Structures / Control Structures
-input - string
-output - boolean
-rules/requirements
  -a looping structure will be used to iterate through the data
  -a conditional statement will help parse the data

Algorithm (plain english)
-declare a function isBalanced that takes a string named arg
-declare a variable named argArr
-declare a variable named counter
-declare a variable named resumeCheck
-split arg into array and place in argArr
-for the array in argArr
  -find the first occurrence of a parenthesis
    -if the value is ) and counter is equal to 0
      -return false
    -else increment counter
    -break the loop
-for each element in argArr
  -check to see if the element is a parenthesis
    -if the value is (, increment the counter
    -if the value is ) decrement the counter
-at the end of the array iteration check the value of counter
  -if counter < 0 or counter > 0 return false
  -else return true
-call the function

Algorithm (pseudocode)
FUNCTION isBalanced(arg) {
  SET argArr;
  SET counter = 0;
  SET resumeCheck;
  argArr = arg.SPLIT("");

  // checks from the back of the array to see
  // if the last parenthesis in the array is the correct type

  FOR (SET idx = argArr.LENGTH; idx >= 0; idx--) {
    if (argArr[idx] === '(' && counter === 0) {
      RETURN false;
    } ELSE IF (argArr[idx] === ')') {
      BREAK;
    }
  }

  // checks from the front of the array to see if the first
  // parenthesis is the correct type and starts the counter

  FOR(SET idx = 0; idx <= argArr.LENGTH; idx++) {
    IF (argArr[idx] === ')' && counter === 0) {
      RETURN false;
    } ELSE {
      counter +=1;
      resumeCheck = idx;
      BREAK;
    }
  }

  // resumes the counter after the balance check from the front
  // of the array and finishes the counting of parenthesis and their mates

  FOR (SET idx = resumeCheck + 1; idx <= argArr.LENGTH; idx++) {
    IF (argArr[idx] === '(') {
      counter += 1;
      CONTINUE;
    } ELSE IF (argArr[idx] === ')'){
      counter -= 1;
      CONTINUE;
    } ELSE {
      CONTINUE;
    }
  }

  // checks the final value of the counter to see if the
  // parenthesis are balanced

  IF (counter < 0 || counter > 0) {
    RETURN false;
  } ELSE {
    RETURN true;
  }
}

PRINT(isBalanced("What (is) this?") === true));
PRINT(isBalanced("What is) this?") === false));
PRINT(isBalanced("What (is this?") === false));
PRINT(isBalanced("((What) (is this))?") === true));
PRINT(isBalanced("((What)) (is this))?") === false));
PRINT(isBalanced("Hey!") === true));
PRINT(isBalanced(")Hey!(") === false));
PRINT(isBalanced("What ((is))) up(") === false));

*/

function isBalanced(arg) {
  let argArr;
  let counter = 0;
  let resumeCheck;
  argArr = arg.split("");

  for (let idx = argArr.length; idx >= 0; idx--) {
    if (argArr[idx] === '(' && counter === 0) {
      return false;
    } else if (argArr[idx] === ')') {
      break;
    }
  }

  for (let idx = 0; idx <= argArr.length; idx++) {
    if (argArr[idx] === '(' && counter === 0) {
      counter += 1;
      resumeCheck = idx;
      break;
    }
    if (argArr[idx] === ')' && counter === 0) {
      return false;
    }
  }

  for (let idx = resumeCheck + 1; idx <= argArr.length; idx++) {
    if (argArr[idx] === '(') {
      counter += 1;
      continue;
    } else if (argArr[idx] === ')') {
      counter -= 1;
      continue;
    } else {
      continue;
    }
  }

  if (counter < 0 || counter > 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);