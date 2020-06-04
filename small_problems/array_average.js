/*
Write a function that takes one argument, an array of integers,
and returns the average of all the integers in the array,
rounded down to the integer component of the average.

The array will never be empty, and the numbers will always be
positive integers.

Understanding the Problem
-input - an array of integers
-output - a number (the average)
-rules/requirements
  -use a function
  -return the average of the integers in the array
  -drop any values behind the decimal
  -round the average down

Examples:

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

Data Structures / Control Structures
-input - array
-output - number
-rules/requirements
  -looping structure implicit to array method

Algorithm (plain english)
-declare a function named average that takes an array argument
-declare a variable called arrLengthAtStart
-declare a variable named avg to hold the average of the array
-reduce the array down to a single sum
-divide the array by the starting length of the array
-floor the value of avg
-return avg
-call the function

Algorithm (pseudocode)
FUNCTION average(arr) {
  SET arrLengthAtStart = arr.LENGTH;
  SET avg;
  avg = arr.REDUCE((a, b) => { RETURN a + b});
  avg = avg / arrLengthAtStart;
  RETURN Math.floor(avg);
}

PRINT(average(arg));
*/

function average(arr) {
  let arrLengthAtStart = arr.length;
  let avg;
  avg = arr.reduce((a, b) => {
    return a + b;
  });
  avg /= arrLengthAtStart;
  return Math.floor(avg);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40