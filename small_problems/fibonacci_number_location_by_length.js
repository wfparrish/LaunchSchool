/*
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...)
such that the first two numbers are 1 by definition, and each subsequent
number is the sum of the two previous numbers.
This series appears throughout the natural world.

Computationally, the Fibonacci series is a simple series, but the results
grow at an incredibly rapid rate. For example, the 100th Fibonacci number
is 354,224,848,179,261,915,075—that's enormous, especially considering
that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci
number that has the number of digits specified by the argument.
(The first Fibonacci number has an index of 1.)

You may assume that the argument is always
an integer greater than or equal to 2.

Understanding the Problem
-input - a number that represents the number of digits in a Fibonacci number
-output - a number that represents an index in a numerical series
-rules/requirements
  -must write a function
  -function must calculate Fibonacci value
  -function must calculate Fibonacci number's index
  -function must be able to count the number of digits in a number
  -assume the argument is >= 2

Examples / Test Cases
findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74

Data Structures / Control Structures
-input - number
-output - number
-rules/requirements
  -for loop for constructing the Fibonacci series and
   summing the values
  -array for storing the Fibonacci sequence numbers

Algorithms (plain english)

1. sum()
2. countDigits()
3. findFibonacciIndexByLength()

1. sum(val1, val2)
-declare a function called sum that takes two arguments (val1, val2)
  -return the sum of the two values

2. countDigits(arrVal)
-declare a function called countDigits that takes one argument
  -instantiate a result variable
  -assign result = arrVal.toString()
    -return result.length

3. findFibonacciIndexByLength(num)
-take one argument, a parameter named num
-declare an array named fib where the first two positions hold the value 1
-declare an index variable and instantiate it to 0
-declare a count variable
  -start a do block
    -add a new element to the end of fib using sum()
    -check the number of digits in the element using countDigits()
    -run the block while count !== num
  -return index
-call the function

Algorithms (pseudocode)

FUNCTION sum(val1, val2) {
  RETURN val1 + val2;
}

FUNCTION countDigits(arrVal) {
  SET result = arrVal.toString();
  RETURN result.length;
}

FUNCTION findFibonacciIndexByLength(num) {
  SET val1 = 1;
  SET val2 = 1;
  SET fib = [val1, val2];
  SET index = 0;
  SET count;
  DO {
    fib[index + 2] = sum(fib[index] + fib[index + 1]);
    count = countDigits(fib[index + 2]);
  } WHILE (count !== num);
  RETURN index
}
*/

function sum(val, index) {
  let total = val[index] + val[index + 1];
  return total
}

function countDigits(arrVal) {
  let result = arrVal.toString();
  return Number(result.length);
}

function findFibonacciIndexByLength(num) {
  let val1 = 1;
  let val2 = 1;
  let fib = [val1, val2];
  let fibNumber;
  let index = 0;
  let count = 0;
  do {
    fibNumber = sum(fib, index)
    fib.push(fibNumber);
    count = countDigits(fib[index + 2]);
    index++
  } while (count !== num);
  let solution = fib.length;
  return solution;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74

// Note: you CANNOT pass individual array elements into an array
//       you must pass in the entire array
//    ex. this will return NaN:
//        fib[index + 2] = sum(fib[index] + fib[index + 1]);