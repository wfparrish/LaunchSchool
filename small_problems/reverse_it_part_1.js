/*
Write a function that takes a string argument, and returns
a new string containing the words from the string argument
in reverse order.

Examples:

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

Understanding the Problem
-input - a string
-output - a new string
-rules/requirements
  -use a function
  -take a string argument
  -return a new string
  -the new string will have the same words as the old,
   but in reverse order
  -if the string is empty, return nothing

Examples:

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

Data Structures / Control Structures
-input - string
-output - string
-rules/requirements
  -will use methods of the array class to manipulate the input

Algorithm (plain english)
-declare a function named reverseSentence, that takes a string argument
-split the argument into an array
-reverse the array
-join the array on " "
-return the string from the join operation
-call the function

Algorithm (pseudocode)
FUNCTION reverseSentence (stringArg) {
  RETURN stringArg.SPLIT(' ').REVERSE().JOIN(' ');
}

PRINT(reverseSentence(''));                       // ""
PRINT(reverseSentence('Hello World'));            // "World Hello"
PRINT(reverseSentence('Reverse these words'));    // "words these Reverse"

*/

function reverseSentence (stringArg) {
  return stringArg.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"