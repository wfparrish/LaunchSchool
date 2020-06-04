/*
Write a function that takes a number as an argument.
If the argument is a positive number, return the negative of that number.
If the argument is a negative number, return it as-is.

Understanding the Problem
-input - a number
-output - a negative number
-rules/requirements
  -use a function
  -if the argument is positive, return the negative
  -if the argument is negative, return is as-is
  -if the argument is zero, return negative zero

Examples:

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

Data Structures / Control Structures
-input - number
-output - number
-rules/requirements
  -conditional statement to determine output

Algorithm (plain english)
-declare a function named negative that takes a number
-if the argument is greater than 0
  -multiply the argument by -1
  -return the number
-if the argument is less than 0
  -return the number
-if the argument is 0
  -multiply 0 by -0
  -return the argument

Algorithm (pseudocode)
FUNCTION negative(arg) {
  IF (arg > 0) {
    arg *= -1;
    RETURN arg;
  }
  ELSE IF (arg < 0) {
    RETURN arg;
  }
  ELSE {
    RETURN -0;
  }
}
*/

function negative(arg) {
  if (arg > 0) {
    arg *= -1;
    return arg;
  } else if (arg < 0) {
    return arg;
  } else {
    return -0;
  }
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0