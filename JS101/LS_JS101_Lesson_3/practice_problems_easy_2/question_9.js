/*
Write two one-line expressions to count the number of
lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

Understanding the Problem
-input - a sentence that may or may not have the character "t"
-output - the count of appearances of 't' in the sentence
-rules/requirements
  -the code that counts the number of 't's must be a single line
  -two different methods must be created by the programmer

Examples / Test Cases
let statement1 = "The Flintstones Rock!";   //expected output: 2
let statement2 = "Easy come, easy go.";     //expected output: 0

Data Structures / Control Structures
-input - string
-output - number
-rules/requirements
  -methods of the language

Algorithm 1 (plain english)
-Given the string in a variable
  -Create an expression that:
    1. iterates over the string
    2. stores each match it finds
    3. returns an object whose length can be determined
-print the result to the console

Algorithm 1 (pseudocode)
statement1.MATCH(/t/g).LENGTH

Algorithm 2 (plain english)
-Given the string in a variable
  -Create an expression that:
    1. iterates over the string
    2. splits the string on t into a new array
    3. returns the length of the new array -1
-print the result to the console

Algorithm 2 (pseudocode)
PRINT(statement.SPLIT('t').LENGTH - 1);
*/
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
let statement3 = "ttt";

console.log(statement1.match(/t/g).length);
console.log(statement1.split('t').length - 1);
console.log((statement2.match(/t/g) || []).length);
console.log(statement2.split('t').length - 1);
console.log((statement3.match(/t/g) || []).length);
console.log(statement3.split('t').length - 1);
console.log(statement3.split('t'));
