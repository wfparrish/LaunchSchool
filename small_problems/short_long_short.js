/*
Write a function that takes two strings as arguments,
determines the longer of the two strings, and then returns the result
of concatenating the shorter string, the longer string,
and the shorter string once again.

You may assume that the strings are of different lengths

Understanding the Problem
input - two strings
output - a concatenated string from the original strings
rules/requirements
  -use a function
  -the function takes two strings as arguments
  -determine the longer of the two strings
  -return a new string from short/long/short concatenation
  -assume the two original strings are of different length


Examples/Test Cases:

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

Data Structures
-input - String
-output - String
rules/requirements - String

Algorithm
-Write a function that has two parameters, string1 and string2
-Declare two variables, val1 and val2
-determine the length of string1 and store the value in val1
-determine the length of string2 and store the value in val2
  -if val1 < val2, concatenate and assign string1 + string2 + string1
  -else concatenate string2 + string1 + string2
-log the results to the console
-call the function
*/

function shortLongShort(string1, string2) {
  let val1 = string1.length;
  let val2 = string2.length;
  if (val1 < val2) {
    console.log(string1 + string2 + string1);
  } else {
    console.log(string2 + string1 + string2);
  }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"