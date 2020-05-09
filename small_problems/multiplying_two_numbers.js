/* Create a function that takes two arguments,
multiplies them together, and returns the result.

Understanding the problem
-input - two numbers (multiplicand and multiplier)
-output
  -for the function, the correct product
  -for the console statement, the correct boolean value
-rules/requirements
  -the program must use a function
  -the function must return a number
  -the function should take two primitives

Examples/Test Cases
console.log(multiply(5, 3) === 15); // logs true
console.log(multiply(5, 3) === 14); // logs false


Data Structures/ Control Structures
-inputs - number
-output - number

Algorithm(plain english)
-declare a function with two parameters
-declare a product variable
-multiply the two parameter variables and assign the
 product to the product variable
-return the product from the function
-call the function

Algorithm (pseudocode)
FUNCTION multiply(num1, num2) {
  SET product = num1 * num2;
  RETURN product;
}
*/



function multiply(num1, num2) {
  let product = num1 * num2;
  return product;
}

console.log(multiply(5, 3) === 15);
console.log(multiply(5, 3) === 14);