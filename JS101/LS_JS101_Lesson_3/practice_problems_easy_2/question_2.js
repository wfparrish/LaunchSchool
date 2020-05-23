/*
The Array.prototype.reverse method reverses the order of elements
in an array, and Array.prototype.sort can rearrange the elements in
a variety of ways, including descending.

Both of these methods mutate the original array as shown below.

Write two distinct ways of reversing the array without mutating the
original array. Use reverse for the first solution, and sort for the
second.

numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

Understanding the Problem (reverse)
-input - an array of numbers
-output - a array of numbers (shallow copy)
-rules/requirements
-use reverse() in the solution
-do not mutate the array
-use the slice() method

Examples/Test Cases
backwards(numbers)    //[ 5, 4, 3, 2, 1 ]

Data Structures / Control Structures
-input - array
-output - array
-rules / requirements
-methods of the array 

Algorithm (plain english)
-declare a function backwards() with one parameter, arr
-slice the whole array out and reverse the values
-return the result of the operation to the console
-call the function

Algorithm (pseudocode)
FUNCTION backwards(arr) {
  PRINT arr.slice(0, arr.length).reverse();
}

backwards(arr);

*/

let numbers = [1, 2, 3, 4, 5];

function backwards(arr) {
  console.log(arr.slice(0, arr.length).reverse());
  console.log(arr);
}

backwards(numbers);

/*
Understanding the Problem
-input - an array of numbers
-output - an array of numbers
-rules/requirements
  -reverse the array
  -do not mutate the array
  -use the sort() method
  -use the spread operator

Examples / Test Cases
backwards(numbers)      //[5, 4, 3, 2, 1]

Data Structures / Control Structures
-input - array
-output - array
-rules/requirements
  -using the methods of the array 

Algorithm (plain english)
-declare a function named backwardsToo with one parameter, arr
-spread arr into an array literal and sort on the new array
  -return the results of the operation
-call the function

Algorithm (pseudocode)
FUNCTION backwardsToo(arr) {
  PRINT [...arr].SORT((num1, num2) => num2 - num1);
}

*/

function backwardsToo(arr) {
  console.log([...arr].sort((num1, num2) => num2 - num1));
  console.log(arr);
}

backwardsToo(numbers);
