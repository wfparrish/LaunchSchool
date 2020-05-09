/* Write a program that prompts the user for two positive integers,
   and then prints the results of the following operations on those
   two numbers: addition, subtraction, product, quotient, remainder,
   and power. Do not worry about validating the input.

Understanding the Problem
-input - two positive integers
-output - results of arithmetic operations(+,-,*,/,%, and **)
-rules/requirements
  -each of the operations will be performed on the numbers
  -display the operation along with the results
  -assume valid inputs

Examples/Test Cases
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 141050039560662968926103

Data Structures / Control Structures
-input - number
-output - string, number

Algorithm (plain english)
//Given a method that gathers input from the user
-use the console method to get the value for the first number
  -place the value in num1 variable
-use the console method to get the value for the second number
  -place the value in num2 variable
-declare variables for the results of each operation
  -sum
  -difference
  -product
  -dividend
  -remainder
  -square
-create expressions that assign values to each of the operation variables
-construct statements for each of the arithmetic operations
  -the statements will use:
   backticks, strings, num1, num2, and the operation variables
-log the statements out to the console

Algorithm (psuedocode)
PRINT `Enter the first number`
GET num1 = method that gets input

PRINT `Enter the second number`
GET num2 = method that gets input

SET sum = num1 + num2
SET difference = num1 - num2
SET product = num1 * num2
SET dividend = num1 / num2
SET remainder = num1 % num2
SET square = num1 ** num2

PRINT `==> num1 + num2 = sum`
PRINT `==> num1 - num2 = difference`
PRINT `==> num1 * num2 = product`
PRINT `==> num1 / num2 = dividend`
PRINT `==> num1 % num2 = remainder`
PRINT `==> num1 ** num2 = square`
*/

let rlsync = require('readline-sync');
let num1 = rlsync.question(`Enter the first number: \n`);
let num2 = rlsync.question(`Enter the second number: \n`);

let sum = Number(num1) + Number(num2);
let difference = Number(num1) - Number(num2);
let product = Number(num1) * Number(num2);
let dividend = Math.floor(Number(num1) / Number(num2));
let remainder = Number(num1) % Number(num2);
let square = Math.pow(num1, num2);

console.log(`==> ${num1} + ${num2} = ${sum}`);
console.log(`==> ${num1} - ${num2} = ${difference}`);
console.log(`==> ${num1} * ${num2} = ${product}`);
console.log(`==> ${num1} / ${num2} = ${dividend}`);
console.log(`==> ${num1} % ${num2} = ${remainder}`);
console.log(`==> ${num1} ** ${num2} = ${square.toPrecision(24)}`);
