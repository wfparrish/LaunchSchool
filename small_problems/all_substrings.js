/*
Write a function that returns a list of all substrings of a
string. Order the returned list by where in the string the
substring begins.

This means that all substrings that start at position 0
should come first, then all substrings that start at
position 1, and so on.

Since multiple substrings will occur at each position,
return the substrings at a given position from shortest to
longest.

You may (and should) use the substringsAtStart function you
wrote in the previous exercise:

Understanding the Problem
-input - a string
-output - an array of substrings made from the input
-rules/requirements
  -use a function
  -the returned list shall be ordered
    -order the list by where the substring begins
    -all substrings that start at position 0 come first,
     then 1, then 2, etc...
    -return the substrings starting at a given position
     from shortest to longest

Example:

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

Data Structures / Control Structures
-input - string
-output - array
-rules/requirements
  -a looping structure to iterate over the string
  -array methods to load the array we are returning

Algorithm (plain english)
-declare a function named substrings() that takes a string argument
-declare a variable named start
-declare a variable named end
-declare an array named subStrArr
-declare a nested loop
  -the outer loop will track the position of the lhs pointer
    -the initial index will be equal to 0
    -the loop will run for the length of the string - 1
    -the loop will increment by 1 with each iteration
    -instantiate start equal to 0;
  -the inner loop will push the substrings into an array
    -the initial index will be equal to the index of the outer loop
    -the loop will run for the length of the string minus - 1
    -the loop will increment by 1 for with each iteration
    -end will be assigned the value of the index
    -for each loop, slice a string out, using start and end + 1 as the parameters
    -push the sliced portion into an array named subStrArr
  -return subStrArr
-call the function

Algorithm (pseudocode)
FUNCTION substrings(str) {
  SET start;
  SET end;
  SET subStrArr = [];
  FOR (SET idx = 0; idx <= str.LENGTH - 1; idx++) {
    start = idx;
    FOR (SET jdx = idx; jdx <= str.LENGTH - 1; jdx++) {
      end = jdx;
      subStrArr.PUSH(str.SLICE(start, end + 1));
    }
  }
  RETURN subStrArr;
}

PRINT(substrings('Hello World!'));

*/

function substrings(str) {
  let start;
  let end;
  let subStrArr = [];
  for (let idx = 0; idx <= str.length - 1; idx++) {
    start = idx;
    for (let jdx = idx; jdx <= str.length - 1; jdx++) {
      end = jdx;
      subStrArr.push(str.slice(start, end + 1));
    }
  }
  return subStrArr;
}

console.log(substrings('hello world'));
