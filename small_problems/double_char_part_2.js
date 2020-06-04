/*
Write a function that takes a string, doubles every consonant
character in the string, and returns the result as a new string.
The function should not double vowels ('a','e','i','o','u'),
digits, punctuation, or whitespace.


Understanding the Problem
-input - a string
-output - the original string with characters doubled
-rules/requirements
  -the function shall not double vowels
  -the function shall not double digits
  -the function shall not double punctuation
  -the function shall not double whitespace


Examples:

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

Data Structures / Control Structures
-input - string
-output - string
-rules/requirements
  -looping structure to iterate over the input string
  -conditional statement to evaluate the characters in the input string

Algorithm (plain english)
-declare a function named doubleConsonants that 
 takes a string argument singleCharStr
-declare a variable named doubleCharStr
-declare an array named doubleCharArr
-for the length of singleCharStr
  -if the character at the index matches
    -a vowel
    -a number
    -punctuation
    -or white spaces
   push one copy of the character into doubleCharArr
  -else push two copies of the character into doubleCharArr
-join doubleCharArr and assign the value to doubleCharStr
-return doubleCharStr
-call the function

Algorithm (pseudocode)
FUNCTION doubleConsonants(singleCharStr) {
  SET doubleCharStr;
  SET doubleCharArr = [];
  FOR (SET index = 0; index <= singleCharStr.LENGTH - 1; index++) {
    IF (singleCharStr[index].MATCH(/[aeiouAEIOU0-9\!\?\;\:\s]/)) {
      doubleCharArr.PUSH(singleCharStr[index]);
    } ELSE {
      doubleCharArr.push(singleCharStr[index], singleCharStr[index]);
    }
  } 
  doubleCharStr = doubleCharArr.JOIN('');
  RETURN doubleCharStr;
}

PRINT(doubleConsonants("Hello-World"));


*/

function doubleConsonants(singleCharStr) {
  let doubleCharStr;
  let doubleCharArr = [];
  for (let index = 0; index <= singleCharStr.length - 1; index++) {
    //console.log(singleCharStr[index]);
    if (singleCharStr[index].match(/[aeiouAEIOU0-9\!\?\;\:\-\s]/)) {
      doubleCharArr.push(singleCharStr[index]);
    } else {
      doubleCharArr.push(singleCharStr[index], singleCharStr[index]);
    }
  }
  doubleCharStr = doubleCharArr.join('');
  return doubleCharStr;
}
        

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

