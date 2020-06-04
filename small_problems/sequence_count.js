/*
Create a function that takes two integers as arguments.
The first argument is a count, and the second is the starting number
of a sequence that your function will create.

The function should return an array containing the same number of
elements as the count argument. The value of each element should be
a multiple of the starting number.

You may assume that the count argument will always be an integer
greater than or equal to 0. The starting number can be any integer.
If the count is 0, the function should return an empty array.

Understanding the Problem
-input - two arguments
-output - an array
-rules/requirements
  -use a function
  -the first argument is a count
  -the second argument is the start of a sequence the function will create
  -return an array containing the same number of elements as the count
  -each array element should be a multiple of the the starting number
  -the count will always be >= 0
  -the starting number can be any integer, pos. or neg.
  -if the the count is 0, return an empty array

Examples:

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

Data Structures / Control Structures
-input - number
-output - number
-rules/requirements
  -looping structure to create the sequence

Algorithm (plain english)
-declare a function named sequence that takes two arguments
  -the first arg will be called numOfLoops
  -the second arg will be called val
-declare an array called seqArray
-declare a variable named seqValues
-if numOfLoops is equal to 0
  -return seqArray;
-else instantiate seqValues from val
-push seqValues into seqArray
-declare a for loop and loop for numOfLoops times
  -for each iteration of the loop:
    -increment seqValues by val
    -push the value of seqValues into seqArray
-return seqArray;
-call the function

Algorithm (pseudocode)
FUNCTION sequence(numOfLoops, val) {
  SET seqArray = [];
  SET seqValues;
  IF (numOfLoops === 0) {
    return seqArray;
  } ELSE {
    seqValues = val;
    seqArray.PUSH(seqValues)
    FOR (SET index = 1; index <= numOfLoops; index++) {
      seqValues += val;
      seqArray.PUSH(seqValues);
    }
  }
  return seqArray;
}
*/

function sequence(numOfLoops, val) {
  let seqArray = [];
  let seqValues;
  if (numOfLoops === 0) {
    return seqArray;
  } else {
    seqValues = val;
    seqArray.push(seqValues)
    for (let index = 1; index < numOfLoops; index++) {
      seqValues += val;
      seqArray.push(seqValues);
    }
  }
  return seqArray;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []