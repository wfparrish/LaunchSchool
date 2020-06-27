/*
Write a function that takes a string argument,
and returns a list of all substrings that start from the
beginning of the string, ordered from shortest to longest.

Understanding the Problem
-input - a string
-output - a list of all substring starting from the beginning
          of the input string
-rules/requirements
  -use a function
  -return a list with all substrings starting with the
   first char
  -each substring will be one char bigger than the last
  -the last substring will be identical to the input string

Examples:

substringsAtStart('abc');      // ["a", "ab", "abc"]
substringsAtStart('a');        // ["a"]
substringsAtStart('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

Data Structures / Control Structures
-input - string
-output - array
-rules / requirements
  -a looping structure to iterate over the input string

Algorithm (plain english)
-declare a method named substringsAtStart(str)
-declare an array named substringStore
-declare and instantiate a variable named start to 0;
-declare and instantiate a variable named end to 1;
-looping as many times as the length of the string:
  -pull out the substring where start is the beginning
   and end marks the char next to the end
  -push the substring into the substringStore
  -increment the end variable by 1
-return the substringStore
-call the function

Algorithm (plain english)
FUNCTION substringsAtStart(str) {
  SET substringStore = [];
  SET start = 0;
  SET end = 1;
  FOR (idx = 0; idx < str.LENGTH; idx++) {
    substringStore.PUSH(str.substring(start, end));
    end++;
  }
  RETURN substringStore;
}

PRINT(substringsAtStart('random strings'));
*/

function substringsAtStart(str) {
  let substringStore = [];
  let start = 0;
  let end = 1;
  for (let idx = 0; idx < str.length; idx++) {
    substringStore.push(str.substring(start, end));
    end++;
  }
  return substringStore;
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
