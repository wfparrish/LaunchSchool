/*
Code that shows what is sorted by .sort() and when
https://stackoverflow.com/questions/1494713/how-does-javascripts-sort-work
*/

// var array = [2, 11, 9, 4, 107, 21, 1];
// var count = 1;
// array.sort((a,b) => {
//   console.log(`${count++}). a: ${a} | b: ${b}`);
//   return a-b;
// });

// console.log(array);

//--------------------------------------------------------------------

/*
How would you sort the following array
by the lengths of each word?

let words = ['go', 'ahead', 'and', 'jump'];

Understanding the Problem
-input - array of words
-output - an array of words sorted by length
-rules/requirements
  -use a function
  -sort the words by the length of the words
  -use the JS sort method

Examples / Test Cases

let words = ['go', 'ahead', 'and', 'jump'];
sorter(words);

// => ['go', 'and', 'jump', 'ahead']

Data Structures / Control Structures
-input - array
-output - array
-rules/requirements
  -a looping structure

Algorithm (plain english)
-declare a function named sorter(arrArg) that takes an array
-sort the array using .sort()
  -for each element of the array, compare the length properties
  -base the return on a.length - b.length;
-return arrArg
-call the function

Algorithm (pseudocode)
FUNCTION sorter(arrArg) {
  arrArg.sort((a, b) => {
    return a.LENGTH - b.LENGTH;
  });
  return arrArg;
}

PRINT(arrArg);
*/


function sorter(arrArg) {
  arrArg.sort((a, b) => {
    return a.length - b.length;
  });
  return arrArg;
}

let words = ['go', 'ahead', 'and', 'jump'];

console.log(sorter(words));

//--------------------------------------------------------------
