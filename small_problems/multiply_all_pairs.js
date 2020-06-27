/*
Write a function that takes two array arguments,
each containing a list of numbers, and returns a new array
containing the products of all combinations of number
pairs that exist between the two arrays.

The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

Understanding the Problem
-input - two array arguments
-output - a new array
-rules/requirements
  -use a function
  -each array contains a list of numbers
  -the output array contains the products of all combinations
   of number pairs that exist between the two arrays
  -sort the output
  -arrays cannot be empty

Example:

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

Data Structures / Control Structures
-input - array
-output -array
-rules/requirements
  -looping structure to iterate and perform mulitiplication

Algorithm (plain english)
-declare a function named multiplyAllPairs(arr1, arr2) that takes two array arguments
-declare an array named productArr
-declare a variable named result
-for arr1, map and multiply each element by each element in arr2
 and return the value to result
-push result into productArr
-return productArr
-call the function

Algorithm (pseudocode)
FUNCTION multiplyAllPairs(arr1, arr2) {
  SET productArr = [];
  SET result;
  FOR(SET idx = 0; idx < arr1.LENGTH; idx++) {
    FOR (SET jdx = 0; jdx < arr2.LENGTH; jdx++) {
      result = arr1[idx] * arr2[jdx];
      productArr.PUSH(result);
    }
  }
  RETURN productArr;
}

PRINT(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
*/

function multiplyAllPairs(arr1, arr2) {
  let productArr = [];
  let result;
  for (let idx = 0; idx < arr1.length; idx++) {
    for (let jdx = 0; jdx < arr2.length; jdx++) {
      result = arr1[idx] * arr2[jdx];
      productArr.push(result);
    }
  }
  productArr.sort((a, b) => a - b);
  return productArr;
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));  // [2, 4, 4, 6, 8, 8, 12, 16]


