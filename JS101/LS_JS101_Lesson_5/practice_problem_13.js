/*

Given the following data structure, sort the array so
that the sub-arrays are ordered based on the sum of
the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array
should look like this:

[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]


Understanding the Problem
-input - an array with subarrays. Each subarray holds n odd numbers
-output - an array with subarrays sorted by sum of each subarray's
          n odd numbers
-rules/requirements
  -sort the argument array
  -order the subarrays by the sums of their odd numbers
  -order the subarrays in increasing order of derived sum values

Examples / Test Cases

orderByOddSums(arr);      // => [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

Data Structures / Control Structures
-input - array
-output - array
-rules/requirements
  -a looping structure to iterate through the data
  -a conditional structure to determine "oddness"
  -methods of the array class in JS (implicit looping)

Algorithm (plain english)
-declare a function named orderByOddSums(argArr)
-sort argArr by the sum of odd values in each subarray
  -for the subarrays of argArr:
    -declare a variable named oddSum1
      -instantiate oddSum1 filtering out non-odd numbers
       and reducing the remaining subarray elements
    -declare a variable named oddSum2
      -instantiate oddSum2 filtering out non-odd numbers
       and reducing the remaining subarray elements
    -return oddSum1 - oddSum2
-return argArr
-call the function

Algorithm (pseudocode)
FUNCTION orderByOddSums(argArr) {
  argArr.SORT((a, b) => {
    let oddSum1 = a.FILTER((element) => element % 2 === 1)
                  .REDUCE((number, next) => number + next);
    let oddSum2 = a.FILTER((element) => element % 2 === 1)
                  .REDUCE((number, next) => number + next);
    RETURN oddSum1 - oddSum2;
  });
  RETURN argArr;
}

PRINT(orderByOddSums(arr));

*/

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function orderByOddSums(argArr) {
  argArr.sort((a, b) => {
    let oddSumArr1 = [];
    let oddSumArr2 = [];
    oddSumArr1 = a.filter(element => element % 2 === 1);
    let oddSum1 = oddSumArr1.reduce((number, next) => number + next);
    oddSumArr2 = b.filter(element => element % 2 === 1);
    let oddSum2 = oddSumArr2.reduce((number, next) => number + next);
    return oddSum1 - oddSum2;
  });
  return argArr;
}

console.log(orderByOddSums(arr));