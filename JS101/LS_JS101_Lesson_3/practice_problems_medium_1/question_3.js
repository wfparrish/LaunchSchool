/*
Question 3
Alan wrote the following function,
which was intended to return all of the factors of number:

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
Alyssa noticed that this code would fail when the input is 0
or a negative number, and asked Alan to change the loop.
How can he make this work without using a do/while loop?
Note that we're not looking to find the factors for 0 or negative numbers,
but we want to handle it gracefully instead of
raising an exception or going into an infinite loop.

Bonus: What is the purpose of number % divisor === 0 in that code?

Understanding the Problem
-input - a number to be checked to find it's factors
-output - the factors of the number stored in an array
-rules/requirements
  -avoid using do/while loop
  -check that the number a positive value
  -check that the number is not zero

Examples / Test Cases
factors(18)     // [1, 2, 3, 6, 9, 18]
factors(17)     // [17, 1]

Data Structures/ Control Structures
-input - number
-output - array
-rules/requirements
  - a looping structure to use while deincrementing the number

Algorithm (plain english)
-declare a function called factors that takes one number as an argument
-in the body
  -declare a variable named divisor
-check that the number is valid
  -if the number is equal to 0, return 'Must be greater than 0'
  -if the number is negative, return 'Must be greater than 0'
  -declare an empty array named factors to store the factors
-declare a for loop that runs while divisor >= 1
  -if the number MOD divsor is equal to 0
    -push the value of the number divided by divisor into the factors array
  -deincrement the divisor
-return the factors array
-call the function

Algorithm (pseudocode)
FUNCTION factors(number) {
  SET divisor = number;
  SET factors = [];
  IF (number <= 0) {
    RETURN 'Number must be greater than 0';
  }

  FOR (SET idx = divisor; idx >= 1; idx--) {
    IF (number % divisor === 0) {
      factors.PUSH(number / divisor);
    }
    divisor -= 1;
  }
  RETURN factors;
}

PRINT(factors(myNumber))

*/

function factors(number) {
  let divisor = number;
  let factors = [];
  if (number <= 0) {
    return 'Number must be greater than 0';
  }

  for (let idx = divisor; idx >= 1; idx--) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(1289));
console.log(factors(17337));
console.log(factors(0));
console.log(factors(-1));

/*
Bonus: the purpose of if (number % divisor === 0)
is to determine if the divisor is a factor of the number
If there is a remainder, then the divisor is not a factor
*/
