/*

Write a function that takes an array of numbers,
and returns the sum of the sums of each leading subsequence for
that array. You may assume that the array always contains at least one number.

Understanding the Problem
-input - array of numbers
-output - a sum of the sums of the leading subsequences
-rules/requirements
  -use a function
  -assume the array is not empty

Examples:

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

Data Structures / Control Structures
-input - array
-output - number
-rules/requirements
  -looping structure

Algorithm (plain english)
-declare a function named sumOfSums(arrayOfNums) that takes an array argument
-declare a variable named sum
-declare a variable named totalSum = 0
-declare a variable named start = 0;
-declare a variable named end = 1;
-declare a array named sumArray
-for the length - 1 of the arrayOfNums, starting at zero and incrementing by 1:
  -copy a portion of the array into sumArray
  -reduce sumArray to a sum of it's values and assign the outcome to sum
  -increment totalSum by sum
  -increment end by 1
-return totalSum
-call the function

Algorithm (pseudocode)
FUNCTION sumOfSums(arrayOfNums) {
  SET sum;
  SET totalSum = 0;
  SET start = 0;
  SET end = 1;
  SET sumArray;
  FOR (SET idx = 0; idx <= arrayOfNums.LENGTH - 1; idx++){
    sumArray = arrayOfNums.SLICE(start, end);
    sum = sumArray.REDUCE((accumulator, currentVal) => {
      RETURN accumulator + currentVal;
    })
    totalSum += sum;
    end += 1;
  }
  return totalSum;
}

PRINT(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
PRINT(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
PRINT(sumOfSums([4]));              // 4
PRINT(sumOfSums([1, 2, 3, 4, 5]));  // 35

*/

function sumOfSums(arrayOfNums) {
  let sum;
  let totalSum = 0;
  let start = 0;
  let end = 1;
  let sumArray;
  for (let idx = 0; idx <= arrayOfNums.length - 1; idx++) {
    sumArray = arrayOfNums.slice(start, end);
    console.log(sumArray);
    sum = sumArray.reduce((accumulator, currentVal) => {
      return accumulator + currentVal;
    });
    totalSum += sum;
    end += 1;
  }
  return totalSum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

