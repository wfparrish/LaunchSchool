/*
The || operator returns a truthy value if either or both of
its operands are truthy, a falsey value if both operands are falsey.
The && operator returns a truthy value if both of its operands
are truthy, and a falsey value if either operand is falsey.
This works great until you need only one of two conditions
to be truthy, the so-called exclusive or.

In this exercise, you will write a function named xor that takes
two arguments, and returns true if exactly one of its arguments is
truthy, false otherwise.

Understanding the Problem
-input - two values of any type
-output - boolean values
-rules/requirements
  -write a function named xor
  -xor must take two arguments
  -xor returns true if exactly one of it's arguments is truthy
  -xor returns false if both of it's arguments returns true
  -xor returns false if both of it's arguments return false

Examples / Test Cases
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

Data Structures / Control Structures
-input - any JavaScript type
-output - boolean value
-rules/requirements
  -if statement to check truthy/falsy
  -array-like structure built into JS functions (arguments)

Algorithm (plain english)
-declare the function xor with two parameters
-check arguments passed to the function using array-like structure
  -if argument[0] is truthy, we enter the statement and check argument[1]
    -if argument[1] is false, return true
    -if argument[1] is truthy, return false
  -if argument[0] is falsy, the first if statement is NEVER entered
    and we go to the else if
  -else if argument[1] is truthy, we enter the statement and check argument[0]
    -if argument[0] is truthy, return false
    -if argument[0] is falsy, return true
  -else if argument[1] is also falsy, then BOTH argument[0] AND argument[1]
    were falsy and therefore we return false
-call the function

Algorithm (pseudocode)
FUNCTION xor(val1, val2) {
  IF (arg[0]) {
    IF (arg[1]) {
      RETURN false
    }
    RETURN true
  } ELSE IF (arg[1]) {
      IF (arg[0]) {
        RETURN false
      }
      RETURN true
    }
  } 
  
*/

function xor(val1, val2) {
  if (arguments[0]) {
    if (arguments[1]) {
      return false
    }
    return true
  } else if (arguments[1]) {
    if (arguments[0]) {
      return false
    }
    return true
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);