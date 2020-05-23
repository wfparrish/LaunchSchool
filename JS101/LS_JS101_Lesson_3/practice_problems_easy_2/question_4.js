/*
Starting with the string:

let famousWords = "seven years ago...";

show two different ways to put the expected "Four score and "
in front of it.

Understanding the Problem (solution 1)
-input - two strings that are each half a sentence
-output - one string that is made of the two input strings
-rules/requirements
-the strings must be combined to form a famous phrase

Examples / Test Cases
combineStrings('Four score and ', famousWords);     //'Four score and seven years ago...'

Data Structures / Control Structures
-input - string
-output - string
-rules/requirements
  -using the operators of JS

Algorithm (plain english)
-declare a method name combineStrings() that takes two arguments
-in the body, use the concat operator on the two strings
-return the results of the operation
-call the function

Algorithm (pseudocode)
FUNCTION combineStrings(beginning, ending) {
  PRINT beginning + ending;
}

combineStrings('Four score and ', famousWords);
*/

let famousWords = "seven years ago...";

function combineStrings(beginning, ending) {
  return beginning + ending;
}

console.log(combineStrings('Four score and ', famousWords));

/*
Understanding the Problem (solution 2)
-input - two strings that are each half a sentence
-output - one string that is made of the two input strings
-rules/requirements
-the strings must be combined to form a famous phrase

Examples / Test Cases
combineStrings('Four score and ', famousWords);     //'Four score and seven years ago...'

Data Structures / Control Structures
-input - string
-output - string
-rules/requirements
  -using the methods of the string 

Algorithm (plain english)
-declare a method name combineStringsToo() that takes two arguments
-in the body, use the concat method on the two strings
-return the results of the operation
-call the function

Algorithm (pseudocode)
FUNCTION combineStringsToo(beginning, ending) {
  PRINT beginning.concat(ending);
}

combineStringsToo('Four score and ', famousWords);

*/

function combineStringsToo(beginning, ending) {
  return beginning.concat(ending);
}

console.log(combineStrings('Four score and ', famousWords));
