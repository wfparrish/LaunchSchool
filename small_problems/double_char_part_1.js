/*
Write a function that takes a string, doubles every character
in the string, and returns the result as a new string.

Understanding the problem
-input - a string
-output -a new string created from the input string,
         with every character doubled
-rules/requirements
  -use a function
  -for each character of the string double the character beside itself
  -double spaces and punctuation also
  -empty string returns empty string

Examples/Test Cases

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

Data Structures / Control Structures
-input - string
-output - string
-rules/requirements
  -looping structure to iterate through the string

Algorithm (plain english)
-declare a function named repeater that takes one argument,
 a string singleCharStr
-declare a variable named doubleCharStr
-declare an array named doubleCharArr
-for each character of the singleCharStr
  -push the character at index into the same index in doubleCharArr
  -push the character at index into index + 1 in doubleCharArr
-join doubleCharArr on "" and pass string to doubleCharStr
-return doubleCharStr
-call the function

Algorithm (pseudocode)
FUNCTION repeater(singleCharStr) {
  SET doubleCharStr;
  SET doubleCharArr;
  for (SET index = 0; index <= singleCharStr.LENGTH - 1; index++) {
    doubleCharArr.PUSH(singleCharStr[index], singleCharStr[index]);
  }
  doubleCharStr = doubleCharArr.JOIN("");
  return doubleCharStr;
}

PRINT(repeater(argString));
*/

function repeater(singleCharStr) {
  let doubleCharStr;
  let doubleCharArr = [];
  for (let index = 0; index <= singleCharStr.length - 1; index++) {
    doubleCharArr.push(singleCharStr[index], singleCharStr[index]);
  }
  doubleCharStr = doubleCharArr.join('');
  return doubleCharStr;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

