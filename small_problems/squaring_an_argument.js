/* Using the multiply() function from the "Multiplying Two Numbers"
problem, write a function that computes the square of its argument
(the square is the result of multiplying a number by itself).

Understanding the problem
-input - an arbitrary number
-output
 -for the function, the square of the argument
 -for the console statement, the correct boolean value
-rules/requirements
  -use the multiply function from multiplying_two_numbers.js
  -create a function for squaring the argument

Examples/Test Cases
-console.log(square(5) === 25); // logs true
-console.log(square(-8) == 64); // logs true

Data Structures / Control Structures
-input - number
-output
  -for the function, number
  -for the console, boolean

Algorithm (plain english)
-declare a function that takes a number as an argument
-inside the function, use the multiply() function to square the multiplicand
  -return the value of the multiply function to the square function
    -return the value of the square function to the console
-call the square() function

Algorithm (pseudocode)
FUNCTION square(number) {
  RETURN multiply(number, number)
}
*/
function multiply(num1, num2) {
  let product = num1 * num2;
  return product;
}

function square(number) {
  return multiply(number, number);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
console.log(square(-8) === 63); // logs false
