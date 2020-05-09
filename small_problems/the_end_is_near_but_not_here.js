/*
Write a function that returns the next to last word
in the String passed to it as an argument.
Words are any sequence of non-blank characters.
You may assume that the input String will always
contain at least two words.

Understanding the Problem
-input - a string that contains words
-output - the next to last word in the argument string
-rules/requirements
  -words are any sequence of non-blank characters
    -$%^&* is a word
    -cat is a word
    -567890 is a word
  -the input string cannot be < two words
  -use a function to produce output

Examples / Test Cases
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

Data Structures / Control Structures
-input - string
-output
  -string for the function
  -boolean for the log statement

Algorithm (plain english) -
Declare a function named penultimate that take a string of words
-declare a variable to hold an array
-split the string into an array
-return array.length - 2 to the console.log() function

Algorithm (pseudocode)
FUNCTION penultimate(str) {
  SET arr = str.split_method()
  RETURN arr[arr.length - 2]
}
*/

function penultimate(str) {
  let arr = str.split(' ');
  return arr[arr.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate("Launch School is great!") === "School"); // logs false

