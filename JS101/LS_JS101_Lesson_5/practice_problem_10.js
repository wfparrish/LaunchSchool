/*

Perform the same transformation of sorting the subarrays
we did in the previous exercise with one difference;
sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

Understanding the Problem
-input - an array with subarrays
-output - an array with sorted subarrays
-rules/requirements
  -sort and order the elements of nested subarrays
  -order the elements of each subarray seperately
  -order the elements alphabetically or numerically
  -order the elements in descending order

Examples / Test Cases
sortSubarrays(arr);
=>  [['a', 'b', 'c'], [1, 2, 3], ['black', 'blue', 'green']];

Data Structures / Control Structures
-input - array
-ouput - array
-rules/requirements
  -forEach method of the array
  -sort method of the array (implicit looping structure)

Algorithm (plain english)
-declare a function sortSubarrays that takes an array argument argArr
-forEach subarray of argArr
  -call the .sort() method on the argArr subarrays
  -return the result of the sort to the calling array (mutate the caller)
-return argArr
-call the function

Algorithm (pseudocode)
FUNCTION sortSubarrays(argArr) {
  argArr.FOREACH((element) => {
    element.SORT((a, b) => b - a)
  })
  RETURN argArr;
}

PRINT(sortSubarrays(arr));

*/

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

function sortSubarrays(argArr) {
  argArr.forEach((element) => {
    if (typeof element[0] === 'number') {
      element.sort((a, b) => b - a);
    } else {
      element.sort().reverse();
    }
  });
  return argArr;
}

console.log(sortSubarrays(arr));


