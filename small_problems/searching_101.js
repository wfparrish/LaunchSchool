/*
Write a program that solicits six numbers from the user, then logs
a message that describes whether or not the sixth number appears
amongst the first five numbers.

Understanding the problem
-input - six integers
-output - a string with numbers
-rules/requirements
  -get the numbers from the console
  -store the received numbers
  -check for an instance of the sixth number among the stored numbers
    -if there is an instance, respond in the affirmative
    -if there is not an instance, respond in the negative

Examples
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

Data Structures / Control Structures
-input - number, string
-output - string
-rules/requirements
  -an array for holding the strings passed

Algorithm (plain english)
-declare the library function to receive data from the console
-declare a function getNumbers()
  -in the body declare an array to hold the values the user enters
-prompt the user to enter the five initial values one at a time
-PUSH the values into the array
-prompt the user to enter the sixth value
-check if the array values INCLUDE the last value
  -RETURN in the affirmative
  -or RETURN in the negative
-call the function

Algorithm (pseudocode)
SET readline = libREADLINE;
SET num1 = readline.statement("Enter the 1st number");
SET num2 = readline.statement("Enter the 2nd number");
SET num3 = readline.statement("Enter the 3rd number");
SET num4 = readline.statement("Enter the 4th number");
SET num5 = readline.statement("Enter the 5th number");
SET num6 = readline.statement("Enter the last number");

FUNCTION getNumbers (num1, num2, num3, num4, num5, num6) {
  SET arr = [];
  arr.PUSH(num1)
  arr.PUSH(num2)
  arr.PUSH(num3)
  arr.PUSH(num4)
  arr.PUSH(num5)
  IF(arr.includes(num6)) {
    return "The {num6} appears in {num1}{num2}{num3}{num4}{num5}"
  } ELSE {
    return "The {num6} does not appear in {num1}{num2}{num3}{num4}{num5}"
  }
}
*/

const readline = require('readline-sync');
let num1 = readline.question('Enter the first number: ');
let num2 = readline.question('Enter the second number: ');
let num3 = readline.question('Enter the third number: ');
let num4 = readline.question('Enter the fourth number: ');
let num5 = readline.question('Enter the fifth number: ');
let num6 = readline.question('Enter the last number: ');

function getNumbers () {
  let arr = [];
  arr.push(num1);
  arr.push(num2);
  arr.push(num3);
  arr.push(num4);
  arr.push(num5);
  if (arr.includes(num6)) {
    return `The number ${num6} appears in ${num1},${num2},${num3},${num4},${num5}.`;
  } else {
    return `The number ${num6} does not appear in ${num1},${num2},${num3},${num4},${num5}.`;
  }
}

console.log(getNumbers());